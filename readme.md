# Placeholder — Design System

**Placeholder** is a satirical, fake B2B SaaS product: it sends an AI double to attend your job interviews. Tagline: *"Be there without being there."*

The design system exists to support a **two-page marketing site**:

| Page | Job | Tone |
|---|---|---|
| **Page one** (`ui_kits/marketing/index.html`) | Sell the fake product completely straight-faced — indistinguishable from a well-funded Series A hiring-software site. The joke only works if nothing signals parody. | Confident, clean, slightly cold. "Nobody is home." |
| **Page two** (`ui_kits/marketing/truth.html`) | Drop the act. Reveal that the product is fake and the problem is not, and hand the reader a real company to talk to. | DigitalTack's own brand: cream canvas, ink, brand blue, Poppins + Funnel Sans. |

The system therefore ships **two surfaces**, and they no longer come from the same place. Page one is the cold indigo/ink *product* surface documented here. Page two has been moved onto **DigitalTack's real 2026 design system** (vendored into `dt/`): cream `#FAFAF5`, ink `#14232D`, brand blue `#0096FF`, Poppins SemiBold + Funnel Sans + Roboto Mono. The warm paper/clay/serif surface this file used to describe is gone — the reveal now belongs to an actual company, which is the point of it. Everything below documents page one unless stated otherwise.

## Sources given

- `uploads/LogoPlaceholder.png` — the only supplied brand asset (lockup: dashed-figure glyph inside a speech container, wordmark, tagline). Cropped into `assets/logo-lockup.png`, `assets/logo-mark.png` (transparent), `assets/logo-mark-white.png`, `assets/logo-wordmark.png`.
- `uploads/placeholder-prd.md` — PRD: goals, non-goals, audience, non-negotiable principles, full page-one section spec, demo spec (§6), page-two reveal spec (§7), technical + a11y requirements, risks, phasing.
- `uploads/placeholder-copy-deck.md` — the copy deck: every string on both pages, plus the 15 hand-written demo answers (5 roles × 3 variants). **All site copy in the UI kit is verbatim from this file** — treat it as the source of truth over anything in this readme.
- Written design brief (visual direction, section order, demo behaviour).
- No Figma file, codebase, deck or font binaries were provided. Everything below is derived from the logo plus the brief; nothing was recreated from a third-party product.

## Substitutions (please confirm)

- **Fonts.** No binaries supplied. The logo is a geometric humanist sans; closest Google Fonts match is **Plus Jakarta Sans** (display + UI). **IBM Plex Mono** carries telemetry strings, **Source Serif 4** is used *only* on page two. Loaded from Google Fonts in `tokens/fonts.css`. Swap for real files when available.
- **Icons.** No icon set supplied → **Lucide 0.454.0** from CDN (1.75px stroke, rounded caps) as the nearest match to the logo's stroke character. See ICONOGRAPHY.
- **Photography.** No team photos supplied → page two uses drag-and-drop `<image-slot>` placeholders with real names attached. Drop four portraits in and the page is complete.

---

## CONTENT FUNDAMENTALS

The copy carries the joke, so it must never tell it.

**Register.** Flat, declarative, procurement-safe. Sentences state mechanism, not benefit: "Placeholder attends the interview. You receive a transcript and a confidence score." Never exclamatory, never winking, never self-aware. The humour comes entirely from what the sentences are calmly agreeing to.

**Person.** Second person for the reader ("your interviews", "your double"), first-person plural for the company, sparingly ("we publish a quarterly memo"). Never "I". Page two flips: first-person plural becomes the subject ("We are four people who work on hiring tools").

**Casing.** Sentence case everywhere — headlines, buttons, labels. Uppercase only for eyebrows, badges and footer column heads, always with `--tracking-eyebrow` (.14em). Never title case.

**Numbers.** Always specific and odd-looking: `412,000 interviews attended`, `2,431 candidate workspaces`, `11 min median setup`, `98% / 3% / 0`. Never "1M+", never "thousands of". Precision is the tell that a machine wrote it.

**Punctuation.** Periods on headlines ("Be there without being there."). Middots (·) between telemetry values. Em dashes used sparingly; no exclamation marks anywhere on page one.

**Length.** Headlines ≤ 8 words. Section decks: exactly one sentence. Feature body copy: one or two sentences, ≤ 30 words. FAQ answers: two sentences maximum, always ending in something faintly evasive ("Compliance varies by market").

**Escalation.** Sections are ordered plausible → alarming, and so are the items inside them (feature tiles end on Continuity Mode; testimonials end on "I don't know what the company does"; pricing ends on a tier that attends your first two weeks of employment).

**Never.** No named competitors, no real logos, no parodied vendor UI. Copy never implies candidates are lazy or dishonest — the absurdity belongs to the process. Page two never claims we don't use AI; it claims we don't put it where a person should be.

**The unsettling detail.** Every section contains exactly one phrase that would be alarming if you slowed down: "Four steps. Then nothing." / "Everything required to not be in the room." / "how much detail it is permitted to invent." One per section — more and it reads as comedy.

**Emoji.** Never. Not in UI, not in copy, not on page two.

**Page-two voice.** Short sentences, no jargon, no metrics, no product nouns. Admits the trick in the first line of prose. One named human, one link, no form. Example: *"Everything on the previous page was made up: the funding, the customers, the 412,000 interviews. The design was not."*

---

## VISUAL FOUNDATIONS

### Palette
One accent, cold neutrals, nothing else. **Indigo 500 `#6C5CD6`** (sampled from the logo) is the only saturated colour on page one and is reserved for action, focus, live-state and the synthetic-attendee motif. Text is **ink 900 `#0C0A1E`** (near-black with a violet cast), body copy **ink 600**, muted copy **slate 500**. Surfaces are white on **slate 50 `#F8F8FB`** canvases; the inverse surface is ink 900. Semantic colours are desaturated on purpose (green `#1E8A5F`, amber `#A9761A`, red `#B93A34`) — nothing on this site is allowed to look cheerful. Page two swaps the whole thing for **paper `#FCF8F2`**, **sepia `#241C15`** text and a single **clay `#B65535`** accent.

Ratio guide per page-one screen: ~70% white/near-white, ~20% ink, ~10% indigo. Two background colours maximum per section stack: white and slate-50, plus ink-900 for the demo and footer, indigo-600 for the final CTA.

### Type
Plus Jakarta Sans throughout page one. Display: 800 weight, `-3.5%` tracking, `1.04` line-height, capped at ~16ch measure. Headings: 700 at `-2%`. Body: 400/500, 16–17px, `1.5` leading, 64ch max measure. Eyebrows: 11px, 700, uppercase, `.14em`, indigo. Telemetry: IBM Plex Mono 13px with `.02em`. Page two: Source Serif 4 at 400 for the giant line (`clamp(2.4rem, 8.4vw, 5.4rem)`, `1.02` leading) and for prose at 17–21px, `1.65` leading. Numerals are tabular wherever a figure could change.

### Spacing & layout
4px base scale, doubling above 24px. Container 1200px (820px for page-two prose), gutter `clamp(20px, 5vw, 32px)`, section rhythm `clamp(56px, 9vw, 120px)`. Mobile-first: everything is a single column by default, and grids opt into columns at 640/700/860/1000px. Control heights 34/42/50px, minimum tap target 44px. The only fixed element is the sticky nav (64px, translucent, hairline bottom border); nothing else pins.

### Backgrounds
No photography, no illustration, no texture. Three moves only: (1) a single vertical indigo-50 → white gradient behind the hero; (2) flat slate-50 bands to separate sections; (3) a 64px ink grid at 4.5% opacity behind the demo — the one graphic gesture in the system, and it reads as instrumentation, not decoration. Never a diagonal gradient, never a purple-blue mesh.

### Cards & borders
Cards are white, 1px `slate-200` hairline, 14px radius, 24–32px padding. Depth is *felt*: shadows are cool, tight and low-opacity (`--shadow-sm` for resting cards, `--shadow-md` on grids that need separation, `--shadow-lg` for the highlighted pricing tier, `--shadow-xl` for the hero mockup only). The 6-tile feature grid uses 1px gaps over a hairline background instead of shadows — a single ruled table, which reads as more "enterprise" than floating tiles. Radii: 4/6/10/14/20/28 + pill; controls 10px, cards 14px, panels 20–28px, badges 4px.

### Motion
Fast and unemotional. 140ms for controls, 220ms base, 420ms for content reveals, 900ms for ambient loops. Easing is `cubic-bezier(.2,.6,.2,1)` for interaction and `cubic-bezier(.16,1,.3,1)` for entrances. No bounce, no spring, no scroll-jacking, no parallax. Three ambient animations exist: the hero waveform, the demo's type-out/typing-indicator/stream, and page two's looping conversation. All are pure opacity/transform/height and all collapse to static states under `prefers-reduced-motion` (the motion tokens zero themselves out).

### Hover, focus, press
Hover: primary buttons darken one step (500 → 600) and lift 1px with an indigo-tinted shadow; secondary buttons darken their border to ink-600; ghost buttons gain a slate-100 wash and ink text; cards marked interactive lift 1px and take `--shadow-lg`. Press: `scale(.985)` plus one more colour step down — never a colour change alone. Focus: 3px `rgba(108,92,214,.34)` ring via `:focus-visible`, never removed, always visible on the dark demo surface too.

### Transparency & blur
Exactly two uses: the sticky nav (`rgba(255,255,255,.78)` + `saturate(150%) blur(14px)`) and the demo panel (`rgba(255,255,255,.04)` on ink). Everything else is opaque. No frosted cards, no glassmorphism.

### Imagery
There is none, and that is a brand decision on page one — a product with no people in it does not show people. Avatars are abstract: **dashed indigo outline = synthetic**, solid neutral initials = human. That dashed treatment is lifted directly from the logo's dashed figure and is the system's single visual motif. Page two is the only surface with photographs: real portraits, warm, unretouched, 4:5, 10px radius.

---

## ICONOGRAPHY

- **Set:** Lucide `0.454.0` via CDN (`https://unpkg.com/lucide@0.454.0/dist/umd/lucide.js`), used as `<i data-lucide="name">` + `lucide.createIcons()`. This is a **flagged substitution** — no icon assets were supplied. Lucide's 24px grid, 2px round-capped stroke and geometric construction are the closest match to the logo's stroke weight.
- **Sizing:** 18px glyph inside a 38px `--radius-md` indigo-50 tile for section icons; 14px inline inside buttons. Icons inherit `currentColor` (indigo-600 in tiles, slate-500 inline).
- **In use:** `calendar-check`, `file-text`, `sliders-horizontal`, `inbox` (how-it-works); `audio-lines`, `target`, `gauge`, `archive`, `shield-check`, `scale` (feature grid); `refresh-cw` (regenerate).
- **Not icons:** the select chevron and the accordion plus/minus are drawn from tokens (CSS borders) so they always match the type colour and never wait on a script.
- **No icon font, no sprite sheet, no PNG icons, no emoji, no unicode dingbats.** The middot (`·`) in telemetry strings and the arrow (`←`) on page two's back-link are the only unicode glyphs used as anything like an icon.
- **Hand-drawn SVG is not permitted.** If a needed glyph is missing from Lucide, use type or leave the space empty.

---

## Components

Authored primitives (`components/`), grouped by concern. Each has `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`; each directory has one `@dsCard` HTML showing states.

**Core** — `Button`, `IconButton`, `Card`, `Badge`, `Avatar`, `Logo`, `SectionHeader`, `StatBlock`
**Forms** — `Input`, `Select`, `Switch`
**Feedback** — `Accordion`, `MetaStrip`

No source defined a component inventory, so this is a from-scratch set sized to the two pages.
**Intentional additions:** `MetaStrip` (the telemetry line is a brand signature, not a generic primitive), `StatBlock` (proof numbers recur in the logo bar and enterprise strip), `Logo` (wraps the supplied asset so nobody re-crops it), `SectionHeader` (the eyebrow/headline/deck rhythm is fixed and worth enforcing). Deliberately **not** built: Tabs, Tooltip, Dialog, Toast — the site has no use for them.

## Index

- `styles.css` — the single entry point consumers link (`@import` list only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`.
- `components/components.css` — component class layer (`.ph-*`), imported by `styles.css`.
- `components/{core,forms,feedback}/` — the primitives above.
- `guidelines/*.card.html` — 18 foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/marketing/` — the two-page site: `index.html` (page one), `truth.html` (page two), section JSX, `site.css`, `human.css`, `ds-loader.js`, `image-slot.js`, `README.md`.
- `templates/marketing-page/` — starter template for a new Placeholder marketing page.
- `assets/` — `logo-lockup.png`, `logo-mark.png`, `logo-mark-white.png`, `logo-wordmark.png`.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skills entry point.

## Accessibility & performance notes

Keyboard-operable demo (native input/select/buttons, visible focus rings), `aria-live="polite"` on the streamed answer, `aria-expanded`/`aria-controls` on FAQ triggers, `role="switch"` on the toggle, 44px minimum targets, AA contrast on both surfaces (indigo-500 on white for large text and UI; indigo-600 for small text on white). All animation respects `prefers-reduced-motion`. No images above the fold except the logo PNG, no web-font blocking beyond one Google Fonts request, no framework in production intent — the kit uses React + Babel purely as a prototyping vehicle.
