/**
 * Builds ui_kits/marketing into a self-contained static site in _site/,
 * ready to publish on GitHub Pages.
 *
 * The kit is authored to run straight from disk: JSX transpiled in the browser
 * by @babel/standalone, React pulled from unpkg, design-system files reached
 * with ../../ paths. None of that is right for a published page, so the build:
 *
 *   1. flattens the kit and its design-system dependencies into one directory,
 *      rewriting the ../../ prefixes;
 *   2. transpiles every .jsx file (and the inline babel blocks) ahead of time,
 *      so no transpiler ships to the browser;
 *   3. vendors React / ReactDOM / lucide from node_modules (production builds)
 *      instead of loading them from a CDN.
 *
 * Output layout: page one at /, page two at /truth.html.
 */
import { transformAsync } from '@babel/core';
import presetReact from '@babel/preset-react';
import { createRequire } from 'node:module';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KIT = path.join(ROOT, 'ui_kits/marketing');
const OUT = path.join(ROOT, '_site');

/** Kit files copied verbatim (paths inside them are rewritten below). */
const KIT_STATIC = ['site.css', 'human.css', 'ds-loader.js'];
/** Kit modules transpiled to plain JS. */
const KIT_JSX = ['Hero.jsx', 'Sections.jsx', 'Demo.jsx', 'Social.jsx', 'Human.jsx'];
/** Design-system files the two pages load at runtime. */
const DS_FILES = ['styles.css', '_ds_bundle.js', 'components/components.css'];
const DS_DIRS = ['tokens', 'assets', 'dt'];
/** Third-party UMD builds, vendored so the page has no external script deps. */
const VENDOR = [
  ['react/umd/react.production.min.js', 'react.min.js'],
  ['react-dom/umd/react-dom.production.min.js', 'react-dom.min.js'],
  ['lucide/dist/umd/lucide.min.js', 'lucide.min.js'],
];

/** ../../foo (kit → repo root) becomes foo now that everything is one level. */
const flattenPaths = (src) =>
  src
    .replaceAll('../../', '')
    .replaceAll("loadPlaceholderDS('../..')", "loadPlaceholderDS('.')");

const transpile = async (src, filename) => {
  const { code } = await transformAsync(src, {
    filename,
    babelrc: false,
    configFile: false,
    presets: [[presetReact, { runtime: 'classic' }]],
  });
  return code;
};

/** Swaps the CDN + babel script tags for the vendored production builds. */
function rewriteHead(html) {
  const out = html
    .replace(/^\s*<script src="https:\/\/unpkg\.com\/react@[^"]*"[^>]*><\/script>\n/m,
      '<script src="react.min.js"></script>\n')
    .replace(/^\s*<script src="https:\/\/unpkg\.com\/react-dom@[^"]*"[^>]*><\/script>\n/m,
      '<script src="react-dom.min.js"></script>\n')
    .replace(/^\s*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]*"[^>]*><\/script>\n/m, '')
    .replace(/^\s*<script src="https:\/\/unpkg\.com\/lucide@[^"]*"><\/script>\n/m,
      '<script src="lucide.min.js"></script>\n')
    // Nothing transpiles in the browser any more; the DS bundle is served locally.
    .replace(/ onerror="window\.__dsBundleMissing=true"/, '')
    .replace(/<link rel="preconnect"[^>]*>\n/, '');
  if (/unpkg\.com/.test(out)) throw new Error('a CDN script tag survived the rewrite');
  return out;
}

/** <script type="text/babel" src="X.jsx"> → <script src="X.js">, inline blocks transpiled. */
async function rewriteScripts(html, filename) {
  let out = html.replace(
    /<script type="text\/babel" src="([\w.-]+)\.jsx"><\/script>/g,
    '<script src="$1.js"></script>',
  );
  const inline = /<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/g;
  const blocks = [...out.matchAll(inline)];
  for (const [tag, body] of blocks) {
    const code = await transpile(body, filename);
    out = out.replace(tag, `<script>\n${code}\n</script>`);
  }
  return out;
}

async function buildPage(name) {
  const raw = await readFile(path.join(KIT, name), 'utf8');
  let html = flattenPaths(raw);
  html = rewriteHead(html);
  html = await rewriteScripts(html, name);
  // The @dsCard annotation is design-system tooling metadata, not page content.
  html = html.replace(/^<!-- @dsCard[^\n]*\n/, '');
  // Page one wears the fake product's mark; the reveal wears DigitalTack's.
  const icon = name === 'truth.html' ? 'dt/assets/iso-blue.svg' : 'assets/logo-mark.png';
  html = html.replace(
    /(<meta name="viewport"[^>]*>\n)/,
    `$1<link rel="icon" href="${icon}">\n`,
  );
  await writeFile(path.join(OUT, name), html);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const name of ['index.html', 'truth.html']) await buildPage(name);

for (const name of KIT_STATIC) {
  await writeFile(path.join(OUT, name), flattenPaths(await readFile(path.join(KIT, name), 'utf8')));
}

for (const name of KIT_JSX) {
  const src = flattenPaths(await readFile(path.join(KIT, name), 'utf8'));
  await writeFile(path.join(OUT, name.replace(/\.jsx$/, '.js')), await transpile(src, name));
}

for (const rel of DS_FILES) {
  await mkdir(path.join(OUT, path.dirname(rel)), { recursive: true });
  await cp(path.join(ROOT, rel), path.join(OUT, rel));
}
for (const dir of DS_DIRS) await cp(path.join(ROOT, dir), path.join(OUT, dir), { recursive: true });

for (const [spec, dest] of VENDOR) {
  // The umd/ subpaths aren't in react's "exports" map, so resolve the package
  // root (always exported) and join the file path onto it.
  const [pkg, ...rest] = spec.split('/');
  const pkgRoot = path.dirname(require.resolve(`${pkg}/package.json`));
  await cp(path.join(pkgRoot, ...rest), path.join(OUT, dest));
}

// Keep Jekyll's hands off: it would otherwise drop _ds_bundle.js for the underscore.
await writeFile(path.join(OUT, '.nojekyll'), '');

console.log(`built ${path.relative(ROOT, OUT)}/ — page one at /, page two at /truth.html`);
