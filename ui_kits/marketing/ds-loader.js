/* Loads the Placeholder component library.
   Prefers the compiled design-system bundle (window.PlaceholderDesignSystem_73112b);
   falls back to transpiling the component sources in-browser so the kit renders
   standalone (e.g. before the bundle has been compiled). */
window.loadPlaceholderDS = async function (base) {
  const NS = 'PlaceholderDesignSystem_73112b';
  const existing = window[NS];
  if (existing && existing.Button) { window.PH = existing; return existing; }
  const files = ['core/Button','core/IconButton','core/Card','core/Badge','core/Avatar','core/Logo','core/SectionHeader','core/StatBlock','forms/Input','forms/Select','forms/Switch','feedback/Accordion','feedback/MetaStrip'];
  const out = {};
  await Promise.all(files.map(async (f) => {
    const name = f.split('/')[1];
    const src = await (await fetch(base + '/components/' + f + '.jsx')).text();
    const cleaned = src.replace(/^import[^\n]*\n/gm, '').replace(/export function/g, 'function');
    const code = Babel.transform(cleaned, { presets: ['react'] }).code;
    out[name] = new Function('React', code + '\nreturn ' + name + ';')(window.React);
  }));
  window[NS] = Object.assign({}, existing, out);
  window.PH = window[NS];
  return window.PH;
};
