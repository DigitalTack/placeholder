# Marketing UI kit — Placeholder

Two screens, one route between them. Structure follows `uploads/placeholder-prd.md`; all copy is verbatim from `uploads/placeholder-copy-deck.md`.

- `index.html` — **page one**, the straight-faced product site. Sticky nav → hero + product mockup → social proof bar → problem (3 col) → how it works (4 steps + fine print) → feature grid (6 tiles, plausible → alarming) → **interactive demo** → 3 testimonials → pricing (Basic / Pro / Executive) → FAQ (5) → full-width CTA → 4-column footer. Per PRD §5.11 the **only** link to page two is the final CTA band and the demo's own "Request a demo"; every other link is dead or anchor-scrolls. Full OG/Twitter card meta is set in the head.
- `truth.html` — **page two**, the reveal (`noindex`). Looping AI-interviewer / AI-candidate conversation with the empty chair between them (plus the caption) → "Placeholder isn't real. The problem is." → the bridge → "What we actually think" → four team portraits (`<image-slot>`, drop real photos in) → "Talk to a person." CTA booking a named individual → attribution line.

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
| `image-slot.js` | Drag-and-drop photo placeholder used by the team row |

## Demo behaviour

First name + role (dropdown, no free-text role) → **Watch your double interview**. The interviewer types the one shared question (~42 chars/sec), 1.2s beat, 0.9s typing indicator, then the double's 80–100-word answer streams in (~190 chars/sec). Beneath it: `Confidence: 98% · Specificity: 3% · Humans involved: 0`. **Regenerate** cycles the three hand-written variants for that role — different words, identical nothing. Content matrix: **5 roles × 1 question × 3 variants = 15 pre-generated answers** (copy deck), no model calls.

Input handling per PRD §6.4/§6.5: first name capped at 20 chars, letters/spaces/hyphens/apostrophes only, title-cased, silent fallback to "Your double" when empty or rejected; repeat clicks debounced (400ms) and never queued; typing is written straight to the DOM node so the animation stays smooth; `<noscript>` renders a static example exchange.

Accessibility: native controls, visible focus rings, `aria-live="polite"` on the answer, a screen-reader-only "preparing an answer" message during the typing indicator, and a `prefers-reduced-motion` path that skips all typing and shows the finished exchange.

Mobile: everything is single-column by default; the two seats stack at <860px and the controls stack at <700px, so the demo is usable at 360px wide.
