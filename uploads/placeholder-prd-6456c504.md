# PRD — "Placeholder" Marketing Stunt Landing Page

**Status:** Draft v1
**Type:** Marketing stunt / satirical fake product landing page
**Primary deliverable:** Two-page web experience + interactive demo

---

## 1. Summary

We are building a fake B2B SaaS landing page for a product called **Placeholder** — an AI tool that attends job interviews on your behalf. The page plays it completely straight: real nav, real pricing tiers, real testimonials, a working interactive demo. Nothing on page one acknowledges that the product doesn't exist.

Clicking the primary CTA takes the visitor to page two, where the joke is revealed and the page turns into a positioning statement for our software development services: we build software with people in it.

The satire targets the automation of hiring, not job seekers.

---

## 2. Goals

| Goal | Measure |
|---|---|
| Generate organic reach and shares | Sessions, referral sources, social shares |
| Land the positioning: "human-made software" | CTA clicks on page two, meetings booked |
| Create a screenshot-able moment | Demo completion rate, regenerate clicks |
| Read as a real product on first glance | Qualitative: "is this real?" replies |

**Primary conversion event:** booking a call from page two.

### Non-goals

- Recruiting. We are not hiring. No job listings anywhere on either page.
- Lead capture on page one. No email gates, no forms, no newsletter.
- Building a real product. Every feature described is fictional.
- SEO. This is a short-lived campaign asset.

---

## 3. Audience

**Primary:** technical decision makers at companies buying software development services — CTOs, VPs of Engineering, founders, heads of product. People who have been pitched AI-generated everything for two years and are quietly suspicious of it.

**Secondary:** the wider tech audience who will share the page. They don't convert, they distribute.

---

## 4. Core principles (non-negotiable)

1. **Page one never breaks character.** No winks, no emoji, no "just kidding." Every element must survive being screenshotted out of context.
2. **The joke is the closed loop.** An AI asks the questions, an AI answers them, a score is produced, no human was in the room. Everything on the page should serve that idea.
3. **We punch at the system, not at candidates.** Copy never implies job seekers are lazy or dishonest. The absurdity belongs to the process.
4. **No named competitors.** No real hiring-AI vendor is named, referenced, or visually parodied. Mocking a named company turns commentary into attack and invites a legal letter.
5. **We do not claim to be AI-free.** The defensible line is: *we use AI as a tool, we don't put it where a person should be.* Any copy implying we don't use AI at all will be read as hypocrisy and undermine the whole stunt.

---

## 5. Page One — the fake product

Visual direction: indistinguishable from a well-funded Series A SaaS product. Clean, confident, slightly cold. See design brief for detail.

### 5.1 Nav (sticky)

- Wordmark: Placeholder
- Links: Product · Features · Pricing · Enterprise (all anchor-scroll or dead)
- Ghosted "Sign in" text link (dead — present purely so the nav reads as a product, not a landing page)
- Primary button: **Request a demo** → scrolls to the interactive demo

### 5.2 Hero

Headline, subhead, primary CTA, secondary text link. Right side or below: product UI mockup showing an interview in progress with a confidence score.

### 5.3 Social proof bar

Fabricated usage stats + 4–5 fictional company logos (invented names, generic marks). **Do not use real company logos.**

### 5.4 The problem

Three short columns, framed entirely around the candidate's inconvenience — time, repetition, scheduling. Deliberately shallow.

### 5.5 How it works

Four steps, escalating:

1. Connect LinkedIn or GitHub
2. Upload a 90-second video
3. Set your parameters (sliders)
4. Stay in bed

Plus a fine-print line beneath: *Average setup time: 4 minutes. Average interview time: 0 minutes.*

### 5.6 Feature grid

Six tiles, ordered plausible → alarming. The last two should make the reader pause. Includes the Enthusiasm Slider and the Weakness Generator.

### 5.7 Interactive demo — see §6

### 5.8 Testimonials

Three, progressively unsettling. Third one lands wrong. Illustrated with **clearly illustrated or abstract avatars, not photographs** — real-looking headshots of fake people is a step further than the joke needs to go, and page two depends on photographs of real humans being a surprise.

### 5.9 Pricing

Three tiers — Basic / Pro / Executive. Basic and Pro are plausible. Executive tips into absurdity (it attends your first two weeks of employment). Middle tier visually highlighted as "Most popular."

### 5.10 FAQ

Five questions. This is where ethics are dodged with corporate grace. Tone: unbothered.

### 5.11 Final CTA

Full-width band. Single button. **This button navigates to page two.** No other element on the page links there.

### 5.12 Footer

Full fake footer — product links, company links, legal links, a fake copyright. Dead links. Footer realism does a lot of work; a landing page with no footer reads as a landing page.

---

## 6. The interactive demo (highest priority build)

### 6.1 Purpose

Demonstrate the joke instead of stating it. Reading "our AI answers for you" is mildly amusing. Watching a machine wearing your name say something impressively empty about your job title produces a reaction — and a screenshot.

### 6.2 Interaction flow

1. Visitor sees a mock interview panel: "interviewer" on one side, "your double" on the other.
2. Two inputs: **first name** (text, constrained) and **role** (dropdown).
3. Button: "Watch your double interview."
4. Interviewer avatar types out a question with a realistic typing animation.
5. Beat — 1.2s pause, typing indicator on the candidate side.
6. The double answers. 80–100 words. Flawless STAR structure, three buzzwords, zero specifics.
7. Metadata strip appears beneath the answer:
   `Confidence: 98% · Specificity: 3% · Humans involved: 0`
8. Two buttons: **Regenerate** and **Request a demo** (→ page two).

### 6.3 The regenerate mechanic

Regenerate produces a completely different-sounding answer that says the identical nothing. This is the moment the visitor understands there is nobody underneath. Minimum two answer variants per role; three is better.

### 6.4 Content generation approach

**Pre-generated and cached, with name interpolation.** Not live model calls.

Rationale:

- **Safety.** A free-text field wired to a language model on a public marketing page is an invitation for someone to make our brand say something vile. That screenshot travels further than the stunt does.
- **Tone control.** The output must be fluent enough to impress and empty enough to unsettle. That is a narrow target and it is the entire creative problem. Hand-tuned copy hits it; generated copy drifts.
- **Speed and cost.** Instant, free, no API dependency, no failure states.

**Input constraints:**
- First name: max 20 chars, letters/spaces/hyphens/apostrophes only, stripped and title-cased. Rejected input falls back to a default with no error state.
- Role: dropdown only. No free-text role entry.

**Content matrix:** 5 roles × 1 question × 3 answer variants = 15 answers, written by hand. See copy deck.

### 6.5 Failure and edge cases

- Empty name → default to "your double" phrasing, still runs.
- Rapid repeat clicks → debounce, don't queue.
- Prefers-reduced-motion → skip typing animation, render answer immediately.
- No JS → demo section renders a static example answer.

### 6.6 Scope note

This is the highest-effort and highest-return element on the page. If scope must be cut, cut a pricing tier or a testimonial — not the demo. But a demo that is slow, off-tone, or accidentally *good* will flatten the entire page.

---

## 7. Page Two — the reveal

Separate URL (e.g. `/human`). Reachable only via CTA clicks. Not linked in nav, not indexed.

Emotional beat: **laugh → recognition → "wait, who made this?"**

### 7.1 The loop animation

Above the fold. AI interviewer on one side, AI candidate on the other, questions and answers flowing between them, and an empty chair between them where the person should be. Should loop. Should be uncomfortable.

Technical: SVG/CSS animation, no video file. Static fallback for reduced-motion.

### 7.2 The turn

One line, very large: *"Placeholder isn't real. The problem is."*

### 7.3 The bridge

Two or three sentences connecting the gag to the reader's actual pain: they've been pitched AI-generated everything, and half of it is a placeholder where an engineer should be.

### 7.4 Who we are

**Real photographs, real names, real roles.** After a full page of fabricated testimonials and abstract avatars, actual humans is the structural punchline.

Stock photography here would undo the entire stunt. If we can't photograph the team, we cut this section rather than fake it.

### 7.5 CTA

**"Talk to a person."** Books directly with a named individual — photo, name, role. No form, no qualification funnel, no chatbot. The mechanism is the message.

### 7.6 Attribution

Our logo, clearly. The reveal only converts if people know who made it.

---

## 8. Technical requirements

- **Stack:** static site. No backend required given pre-generated demo content.
- **Performance:** LCP < 2.0s. The page must feel like a real funded product; slowness breaks the illusion faster than bad copy.
- **Responsive:** mobile-first. Most shares will be opened on a phone. The demo must work well in a narrow viewport — this is the main mobile design risk.
- **Accessibility:** WCAG 2.1 AA. Keyboard-navigable demo, ARIA live region for the streamed answer, respect `prefers-reduced-motion`, sufficient contrast. The joke does not exempt us.
- **SEO/meta:** `noindex` on page two. Page one gets full OG/Twitter card treatment — the share preview is a significant part of distribution and should be designed deliberately, not left to defaults.
- **Analytics:** privacy-respecting, cookieless. Events: demo started, demo completed, regenerate clicked, role selected, page-two reached, CTA clicked, meeting booked.

---

## 9. Risks

| Risk | Mitigation |
|---|---|
| Read as mocking job seekers | Copy review against principle #4; all blame framed at the process |
| Someone believes it's real and is disappointed | Every CTA leads to the reveal; no dead ends |
| Perceived as hypocritical (we use AI too) | Principle #5 — never claim to be AI-free |
| Demo output is too good, joke dies | Hand-written copy, tone review, Specificity metric makes the emptiness explicit |
| Brand-safety incident via demo input | Constrained inputs, no live generation, no free-text role |
| Legal complaint from a hiring-AI vendor | No named competitors, no real logos, no parodied UI |
| Stunt overshadows the business message | Page two attribution prominent; single clear CTA |

---

## 10. Phasing

**Phase 1 (must ship):** Page one core sections, demo with 5 roles × 3 variants, page two complete, responsive, accessible.

**Phase 2 (if time):** Loop animation polish, additional roles, OG image variants per role so shares differ.

**Cut first:** Enterprise nav section, third testimonial, pricing tier count.

---

## 11. Open questions

1. Do we have team photographs, or do we need a shoot before page two can ship?
2. Who is the named person on the "Talk to a person" CTA, and is their calendar ready for it?
3. Domain decision — see recommendations.
4. Do we run paid distribution or rely entirely on organic?
5. How long does the page stay up, and does it get an archive/postmortem post afterwards?
