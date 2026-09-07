# Marketing UI kit — Placeholder

Two screens, one route between them. Structure follows `uploads/placeholder-prd.md`; all copy is verbatim from `uploads/placeholder-copy-deck.md`.

- `index.html` — **page one**, the straight-faced product site. Sticky nav → hero + product mockup → social proof bar → problem (3 col) → how it works (4 steps + fine print) → feature grid (6 tiles, plausible → alarming) → **interactive demo** → 3 testimonials → pricing (Basic / Pro / Executive) → FAQ (5) → full-width CTA → 4-column footer. Per PRD §5.11 the **only** link to page two is the final CTA band and the demo's own "Request a demo"; every other link is dead or anchor-scrolls. Full OG/Twitter card meta is set in the head.
- `truth.html` — **page two**, the reveal (`noindex`). Looping AI-interviewer / AI-candidate conversation with the empty chair between them (plus the caption) → "Placeholder isn't real. The problem is." → the bridge, written at the reader's own experience of being sold AI → "What we actually do", which names Digital Tack and the work → a full-bleed ink "Talk to a person." band booking David → attribution with the Digital Tack lockup and a link to digitaltack.com.

  **Page two runs on the DigitalTack design system, not the Placeholder one.** It links `dt/colors_and_type.css` (vendored from `digitaltack/design-system`, fonts alongside it in `dt/fonts/`) and loads no component bundle at all — its one button is a `dt-btn`, so `_ds_bundle.js` and `ds-loader.js` are not on the page. `human.css` reproduces the handful of `dt-*` type and control classes it needs and keeps `h-*` for page-two-only layout. Page one deliberately stays on the Placeholder system: the switch between the two surfaces is the reveal.

## Files

| File | Contents |
|---|---|
| `Hero.jsx` | `Nav`, `Hero` (mockup with confidence score) |
| `Sections.jsx` | `Proof`, `Problem`, `HowItWorks`, `Features` |
| `Demo.jsx` | `Demo` — the centrepiece, plus the per-role question/answer script |
| `Social.jsx` | `Testimonials`, `Pricing`, `Faq`, `FinalCta`, `SiteFooter` |
| `Human.jsx` | `Scene` (looping conversation), `HumanPage` |
| `site.css` / `human.css` | Layout only; every value is a design-system token |
| `ds-loader.js` | Resolves the component library — prefers the compiled `_ds_bundle.js`, otherwise transpiles `components/**` in-browser so the kit renders standalone |
| `image-slot.js` | Drag-and-drop photo placeholder. Unused since the team row was cut — kept for when the portraits return |

## Publishing (GitHub Pages)

`npm run build` (→ `scripts/build-pages.mjs`) turns this folder into a self-contained static site in `_site/`: **page one at `/`, page two at `/truth.html`**. `_site/` is generated and git-ignored.

The kit is authored to run straight from disk, which is not how it should be served, so the build:

- flattens the kit next to the design-system files it needs (`styles.css`, `tokens/`, `components/components.css`, `assets/`, `_ds_bundle.js`) and rewrites the `../../` prefixes;
- transpiles the `.jsx` files and the inline `type="text/babel"` blocks ahead of time, so no transpiler is shipped to the browser;
- vendors React / ReactDOM / lucide from `node_modules` as **production** builds — the published page loads nothing from a CDN;
- adds a favicon and `.nojekyll` (Jekyll would otherwise drop `_ds_bundle.js` for its leading underscore).

`.github/workflows/pages.yml` builds and deploys on every push to `main` that touches the kit, the design system, or the build itself (plus `workflow_dispatch`). It needs **Settings → Pages → Source: GitHub Actions** set once on the repo.

Preview the built site locally with `npm run serve` (<http://localhost:4173>).

Two things on page two are still pending: `BOOKING_URL` at the top of `Human.jsx` is a `mailto:` fallback until the real scheduling link exists, and the four-portrait team section is **cut** — the PRD requires real photographs and we have none, so it comes back (as `<img>` tags, or `image-slot.js` while shooting) rather than being faked.

## Demo behaviour

First name + role (dropdown, no free-text role) → **Watch your double interview**. The interviewer types the one shared question (~42 chars/sec), 1.2s beat, 0.9s typing indicator, then the double's 80–100-word answer streams in (~190 chars/sec). Beneath it: `Confidence: 98% · Specificity: 3% · Humans involved: 0`. **Regenerate** cycles the three hand-written variants for that role — different words, identical nothing. Content matrix: **5 roles × 1 question × 3 variants = 15 pre-generated answers** (copy deck), no model calls.

Input handling per PRD §6.4/§6.5: first name capped at 20 chars, letters/spaces/hyphens/apostrophes only, title-cased, silent fallback to "Your double" when empty or rejected; repeat clicks debounced (400ms) and never queued; typing is written straight to the DOM node so the animation stays smooth; `<noscript>` renders a static example exchange.

Accessibility: native controls, visible focus rings, `aria-live="polite"` on the answer, a screen-reader-only "preparing an answer" message during the typing indicator, and a `prefers-reduced-motion` path that skips all typing and shows the finished exchange.

Mobile: everything is single-column by default; the two seats stack at <860px and the controls stack at <700px, so the demo is usable at 360px wide.
