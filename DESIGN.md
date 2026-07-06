# DESIGN.md — Taylor Akin Website Design System

> **Status: DRAFT — awaiting Taylor's approval. Nothing is built yet.**
>
> Sources: six reference extractions in `design/references/` (Auros, Active Theory,
> Hungry Tiger, Monopo Saigon, Phantom, Vivid+Co) plus a **derived Taylor Akin brand**
> (no brand kit existed, so palette and fonts are proposed here — approved via the
> decision log). Governing rule: **brand wins on colours and fonts; references win
> on layout and feel.**

---

## 1. Concept — "Night Drive"

The Home concept is a highway at night with three exits (Taylor's idea, from the copy
interview). The design system extends that metaphor site-wide:

- **Canvas** = asphalt after dark: a deep blue-black, not pure black.
- **Text** = lane paint: warm off-white markings on the road.
- **Accent** = sodium streetlight amber: one warm glow rationed like every reference
  rations its accent.
- **Depth** = distance, not shadow: surfaces step lighter as they come toward you,
  exactly how all six references handle elevation (zero box-shadows, tonal steps).
- **Signature visual** = light trails: abstract long-exposure headlight streaks as the
  hero gesture — our equivalent of Auros' particle sphere, Vivid's prism, Monopo's
  iridescent wash. One per page, maximum.

The feel synthesized from the references: **cinematic dark canvas, oversized
restrained-weight type, one rationed accent, spacious unhurried rhythm, flat surfaces,
patient motion.** Five of six references are dark themes — the site is dark-first (a
single theme, no light mode toggle in v1).

---

## 2. Colours — Taylor Akin brand (derived, proposed)

| Name | Value | Token | Role |
|------|-------|-------|------|
| Asphalt | `#0b0d12` | `--color-asphalt` | Page canvas — deep blue-black, the night road. Never pure #000 |
| Underpass | `#070910` | `--color-underpass` | Recessed surface — footer, deep wells (Auros' recessed-panel pattern) |
| Overpass | `#161a24` | `--color-overpass` | Raised card surface — one tonal step up from the canvas |
| Guardrail | `#262c3a` | `--color-guardrail` | Hairline borders, dividers, input outlines — 1px only |
| Lane Paint | `#f4f1e8` | `--color-lane-paint` | Primary text and headings — warm off-white, like road markings (Vivid's #fffdf9 move: never pure white) |
| Dust | `#9aa1af` | `--color-dust` | Secondary/muted text, inactive nav, captions |
| Sodium | `#f0a63f` | `--color-sodium` | THE accent — streetlight amber. Primary CTA fill, active nav state, focus rings, timeline markers, inline link hover. Rationed: if a viewport has two sodium elements, one is wrong |
| Sodium Deep | `#c77f1d` | `--color-sodium-deep` | Hover/pressed state of Sodium; small text on Asphalt where #f0a63f is too bright |
| Exit Teal | `#5fb3a1` | `--color-exit-teal` | Wayfinding tint: **AI & Development** category only |
| Exit Rose | `#c98a9e` | `--color-exit-rose` | Wayfinding tint: **Music Performance** category only |
| Exit Green | `#7fa35c` | `--color-exit-green` | Wayfinding tint: **Consulting & Leadership** category only |

**Wayfinding tints** exist solely for the three-path identity: path-card markers,
timeline filter pills, and category tags. Never for buttons, headings, body text, or
backgrounds. This keeps the "one accent" discipline every reference enforces while
giving the résumé filters and exit signs a signage system.

Contrast: Lane Paint on Asphalt ≈ 15.9:1; Dust on Asphalt ≈ 7.5:1; Asphalt text on
Sodium fill ≈ 8.9:1 — all pass WCAG AA/AAA. Wayfinding tints on Asphalt pass AA for
the 12px+ uppercase tags they're used on.

---

## 3. Fonts — Taylor Akin brand (derived, proposed)

**Display & headings: Space Grotesk** (Google Fonts, free) — geometric, slightly
engineered, "futuristic without costume." Used at **weight 500 only** for all headings
(Auros' medium-only strategy: no bold, no light — uniform mechanical confidence).

**Body & UI: Inter** (Google Fonts, free) — weight 400 body, 500 for emphasis and
button labels. The most-recommended substitute across all six reference files.

```
--font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
--font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

### Type scale (desktop → clamps down on mobile)

| Role | Font | Size | Weight | Line height | Tracking | Token |
|------|------|------|--------|-------------|----------|-------|
| display | Space Grotesk | clamp(56px, 8vw, 96px) | 500 | 1.0 | -0.03em | `--text-display` |
| heading-lg | Space Grotesk | clamp(40px, 5vw, 61px) | 500 | 1.05 | -0.02em | `--text-heading-lg` |
| heading | Space Grotesk | 36px | 500 | 1.1 | -0.01em | `--text-heading` |
| subheading | Space Grotesk | 24px | 500 | 1.3 | -0.01em | `--text-subheading` |
| body-lg | Inter | 19px | 400 | 1.6 | 0 | `--text-body-lg` |
| body | Inter | 16px | 400 | 1.6 | 0 | `--text-body` |
| caption | Inter | 13px | 400 | 1.4 | 0.01em | `--text-caption` |
| eyebrow | Space Grotesk | 12px | 500 | 1.4 | 0.14em, UPPERCASE | `--text-eyebrow` |

Tracking rule from the references: **inverse to size** — tight on display, wide on
uppercase micro-labels. Eyebrow labels (the tracked-uppercase kicker above every
section heading) are the system's most-borrowed component: Auros, Vivid, and Hungry
Tiger all lead sections with them.

Body line-height is 1.6 — more generous than the poster-style references, deliberately:
this site has case studies and an About narrative to actually read.

---

## 4. Spacing & shape — from the references

**Base unit:** 4px. **Density:** spacious (Auros/Monopo rhythm, not Hungry Tiger's poster compression).

| Token | Value | Use |
|-------|-------|-----|
| `--space-1..4` | 4, 8, 12, 16px | inline gaps, icon padding |
| `--space-5..8` | 24, 32, 48, 64px | card padding, element gaps |
| `--space-9..12` | 96, 120, 160, 200px | section gaps, hero breathing room |

- **Page max-width:** 1200px (between Monopo's 1078 and Auros/Vivid's 1440)
- **Prose max-width:** 680px — body text never stretches edge-to-edge
- **Section gap:** 120px desktop / 72px mobile
- **Card padding:** 32–48px

### Radius vocabulary (two values + pill, per Auros' "complete shape vocabulary" rule)

| Element | Radius |
|---------|--------|
| Buttons, tags, filter pills | `999px` (full pill — majority vote: Monopo 75px, Phantom 100px, Hungry Tiger & Active Theory full pill) |
| Cards, embeds, form inputs | `16px` |
| Small elements (icon chips) | `8px` |

### Elevation

**No box-shadows, ever.** All six references agree. Depth = tonal surface steps
(Underpass → Asphalt → Overpass) plus 1px Guardrail hairlines. The one exception
borrowed from Phantom: the primary CTA may carry a soft `0 0 24px rgba(240,166,63,0.25)`
amber glow — a streetlight halo, not a drop shadow.

---

## 5. Components

### Navigation bar
Transparent, fixed, ~72px tall. Wordmark "TAYLOR AKIN" left (eyebrow style). Links
right: Inter 13px, uppercase, 0.1em tracking — Dust at rest, Lane Paint on hover/active
with a 2px Sodium underline offset. Far right: "Get in touch" primary pill (compact).
No background until scroll, then Asphalt at 80% + backdrop-blur(8px) (Active Theory's
frosted-glass depth).

### Primary pill button
Sodium fill, Asphalt text, 999px radius, 12px × 28px padding, Inter 15px weight 500.
Hover: Sodium Deep fill + amber glow halo. One per viewport (Hungry Tiger's "only
filled button in the system" rule).

### Ghost pill button
Transparent, 1px Lane Paint border at 30% opacity, Lane Paint text, same geometry as
primary. Hover: border opacity → 100%. The default for secondary actions (Monopo's
signature button, verbatim).

### Exit sign path card (Home)
The signature component. Overpass surface, 16px radius, 40px padding, 1px Guardrail
border. Top-left: eyebrow "EXIT 1" with the path's wayfinding tint as a small 8px
dot marker. Heading in Space Grotesk 24–36px Lane Paint, two lines of Dust body, then
a thin diagonal ↗ arrow in Sodium (Auros' arrow-icon-button pattern, 32×32, 8px
radius). Hover: card lifts one tonal step (Overpass → #1c2130) and the arrow slides
2px — no shadow, no scale-pop.

### Eyebrow section label
Every section opens with one: 12px Space Grotesk 500, uppercase, 0.14em tracking,
Dust. E.g. "THE ROUTES", "CASE STUDIES", "WATCH & LISTEN".

### Hero headline
Display scale, Lane Paint, centered on Home / left-aligned on interior pages, max
~12 words, line-height 1.0. Sits over the light-trails visual. No subhead crowding
(Monopo: "the headline is the hero").

### Light-trails hero visual
Abstract SVG/canvas long-exposure streaks: 2–3 sweeping curves in Sodium at low
opacity (8–20%) plus one faint wayfinding-tint thread each, curving toward the three
exit cards. Static-with-subtle-drift, not a video. Appears full-size on Home only;
interior pages get a single thin streak as a section divider motif.

### Timeline entry (Résumé page)
Left rail: 2px Guardrail vertical line with 8px Sodium dot markers. Entry: date
eyebrow (Dust), title (subheading, Lane Paint), body (16px Dust), category tags as
12px pills tinted with the matching wayfinding colour at 15% fill / full-tint text.
Filter pills across the top: All / AI & Development / Music / Leadership / Education —
ghost pills; the active filter fills with its wayfinding tint at 20% + tint border.

### Case study card
Overpass, 16px radius, 40px padding. Eyebrow ("CASE STUDY"), heading 24px, body 16px
Dust, no image required — type-first like every reference. Optional single stat in
Sodium (Auros' glowing-statistic treatment).

### Media embed card (Music page)
16:9 YouTube embed, 16px radius, 1px Guardrail border, caption row beneath (13px
Dust). Grid: one featured full-width (Where Music Lives), then two-up.

### Routed contact form
Intent selector: four ghost pills (radio behavior) — selecting one fills it Sodium
at 15% with Sodium text and reveals the helper text line. Inputs: Overpass fill, 1px
Guardrail border, 16px radius (from the two-value vocabulary; pill inputs lose to
usability here), 14px × 18px padding, Lane Paint text. Focus: border → Sodium, no
ring beyond it. Submit: primary pill.

### Dotted route divider
1px dashed Guardrail horizontal rule between major sections (Hungry Tiger's dotted
divider, re-cast as lane markings). Used sparingly — max one per page between the two
biggest sections.

### Footer
Underpass surface, 96px vertical padding (Auros' recessed-well footer). Wordmark,
nav links, LinkedIn, © line — all 13px, Dust, with Lane Paint hover.

---

## 6. Motion

- **Micro-interactions** (hover, focus, filter toggles): 0.3s, `ease-out`, colour and
  border only.
- **Reveals** (scroll-in, page transitions): 0.8–1.0s, `cubic-bezier(0.19, 1, 0.22, 1)`
  — Monopo's patient glide. Opacity + small translateY only; nothing scales or bounces.
- **Light trails**: one slow ambient drift animation, 8–12s loop, opacity-based.
- **`prefers-reduced-motion`**: all reveals become instant; trails render static.

---

## 7. Accessibility & rules of the road

- Contrast: all text pairs pass AA minimum (see §2); body text is AAA.
- Focus visible: 2px Sodium outline, 2px offset, on every interactive element.
- Wayfinding tints never carry text smaller than 12px uppercase-tracked tags.
- One Sodium CTA per viewport; one light-trails gesture per page.
- No box-shadows (amber CTA halo is the only glow). No pure #000 or #fff anywhere.
- Semantic headings follow the copy structure in COPY.md exactly.

---

## 8. Quick start — CSS custom properties

```css
:root {
  /* Colours — Taylor Akin brand (derived) */
  --color-asphalt: #0b0d12;
  --color-underpass: #070910;
  --color-overpass: #161a24;
  --color-guardrail: #262c3a;
  --color-lane-paint: #f4f1e8;
  --color-dust: #9aa1af;
  --color-sodium: #f0a63f;
  --color-sodium-deep: #c77f1d;
  --color-exit-teal: #5fb3a1;   /* AI & Development only */
  --color-exit-rose: #c98a9e;   /* Music Performance only */
  --color-exit-green: #7fa35c;  /* Consulting & Leadership only */

  /* Fonts */
  --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;

  /* Type scale */
  --text-display: clamp(3.5rem, 8vw, 6rem);
  --text-heading-lg: clamp(2.5rem, 5vw, 3.8rem);
  --text-heading: 2.25rem;
  --text-subheading: 1.5rem;
  --text-body-lg: 1.1875rem;
  --text-body: 1rem;
  --text-caption: 0.8125rem;
  --text-eyebrow: 0.75rem;

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px; --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
  --space-9: 96px; --space-10: 120px; --space-11: 160px; --space-12: 200px;

  /* Layout */
  --page-max-width: 1200px;
  --prose-max-width: 680px;
  --section-gap: var(--space-10);

  /* Radius */
  --radius-pill: 999px;
  --radius-card: 16px;
  --radius-chip: 8px;

  /* Motion */
  --ease-glide: cubic-bezier(0.19, 1, 0.22, 1);
  --duration-micro: 0.3s;
  --duration-reveal: 0.9s;

  /* Glow (sole elevation effect) */
  --glow-sodium: 0 0 24px rgba(240, 166, 63, 0.25);
}
```

---

## 9. Decision log

Every design choice gets a row. Sources: **Brand** (derived Taylor Akin brand),
**Ref** (reference synthesis), **Taylor** (his direct call), **Claude** (proposed,
pending his approval → flips to Taylor once approved).

| # | Date | Decision | Source | Rationale |
|---|------|----------|--------|-----------|
| 1 | 2026-07-05 | Governing rule: brand wins colours & fonts; references win layout & feel | Taylor | Stated directly when requesting the merge |
| 2 | 2026-07-05 | No brand kit existed → derive a brand from CONTEXT.md tone; Taylor picked "derive one for me" | Taylor | Brand kit file never made it into the project |
| 3 | 2026-07-05 | Dark-first single theme (no light mode in v1) | Ref | 5 of 6 references are dark; matches "somewhat futuristic" tone and the Night Drive concept |
| 4 | 2026-07-05 | "Night Drive" concept: asphalt/lane-paint/sodium palette extending Taylor's highway-exits Home idea site-wide | Claude | Unifies his hero concept with the references' dark-cinematic feel |
| 5 | 2026-07-05 | Palette: Asphalt #0b0d12 canvas, Lane Paint #f4f1e8 text, Sodium #f0a63f sole accent | Claude | Warm-on-dark passes AAA; single rationed accent mirrors every reference's discipline |
| 6 | 2026-07-05 | Three wayfinding tints (teal/rose/green) restricted to path markers, tags, and timeline filters | Claude | Serves the three-path identity + filterable timeline without breaking one-accent discipline |
| 7 | 2026-07-05 | Fonts: Space Grotesk (display, weight 500 only) + Inter (body) | Claude | Free, self-hostable; top substitutes named across all six reference files; medium-only headings per Auros |
| 8 | 2026-07-05 | Zero box-shadows; depth via tonal surface steps + hairlines; sole glow = amber CTA halo | Ref | Unanimous across all six references; halo borrowed from Phantom's CTA treatment |
| 9 | 2026-07-05 | Pill buttons (999px) + 16px cards as the complete shape vocabulary | Ref | Pill majority (Monopo, Phantom, Hungry Tiger, Active Theory); two-value radius rule from Auros |
| 10 | 2026-07-05 | Eyebrow labels (12px, uppercase, 0.14em tracking) open every section | Ref | Auros/Vivid/Hungry Tiger signature; reads as wayfinding signage |
| 11 | 2026-07-05 | Light-trails visual as the single signature gesture, full-size on Home only | Ref | Every reference has exactly one hero artifact; ours derives from the highway concept |
| 12 | 2026-07-05 | Page max-width 1200px, prose 680px, 120px section gaps | Ref | Median of reference layouts; spacious rhythm fits the copy's breathing room |
| 13 | 2026-07-05 | Patient motion: 0.9s glide reveals, cubic-bezier(0.19,1,0.22,1), opacity/transform only, reduced-motion respected | Ref | Monopo's curve, Vivid's restraint; nothing snaps or bounces |
| 14 | 2026-07-05 | Body line-height 1.6 and 16px minimum, overriding the references' poster-tight body rules | Claude | This site has real reading content (case studies, About); readability beats poster fidelity |
| 15 | 2026-07-05 | File structure: references moved to design/references/, DESIGN.md in root | Taylor | "Clean up file structure as you see fit" |

| 16 | 2026-07-05 | Static site, no build step: folder-based clean URLs (`/about/`), shared `assets/css/style.css` + `assets/js/main.js`, deploys to Vercel as-is | Claude | Seven mostly-static pages don't justify a framework; matches the Day-1 "ship with Vercel" goal |
| 17 | 2026-07-05 | Home headline: option A ("Three routes. One destination…") — the recommended pick from COPY.md's four options | Claude | Taylor approved the copy file without choosing; A was flagged as the recommendation. Swap anytime |
| 18 | 2026-07-05 | Contact form posts to a placeholder endpoint; JS shows a friendly notice until a Formspree/Vercel function is wired at deploy | Claude | Keeps email off the page (Taylor's routing choice) without inventing a backend he hasn't chosen |
| 19 | 2026-07-05 | Subtle asphalt grain overlay (5% SVG noise) site-wide | Claude | Frontend-design skill's atmosphere guidance; reinforces the asphalt metaphor without breaking flat-surface rules |
| 20 | 2026-07-05 | Résumé PDF served from `/assets/taylor-akin-resume.pdf` — Taylor to drop the current PDF into `assets/` | Taylor | He confirmed the PDF exists and is current |

| 21 | 2026-07-05 | Interactive highway scene: infinite-loop road (car drives in place, exits never pass by); selecting a sign triggers blinker + speed-up + off-ramp transition to the page. Click, tap, or arrow-keys + Enter | Taylor + Claude | Taylor's car/exits vision; the loop mechanic solves his "how do you not drive past an exit" wrinkle — arrival is triggered by choice, not time |
| 22 | 2026-07-05 | Home keeps a slim hero (~66vh) above the full scene; exit-sign cards remain below as accessible/SEO fallback | Taylor | Chose "slim hero, then scene" and "keep cards too" |
| 23 | 2026-07-05 | Car is a dark-purple sports car (#372a54); rare oncoming car passes every ~14–30s; both pure SVG + CSS, no WebGL. Passer and all scene motion disabled under reduced-motion | Taylor | Picked dark purple and "yes, rare passer"; SVG keeps it light and 60fps |
| 24 | 2026-07-05 | Mini highway strip above the footer on every interior page: signs for Home ("Re-enter — Back on the highway") plus the paths you're not on | Taylor | His "car at the bottom of every page" return-navigation idea |

| 25 | 2026-07-06 | Highway scene rebuilt as chase-cam perspective (drone behind the car): CSS-perspective ground plane rolling toward the viewer, rear-view car sprite in the right lane, exits on an overhead sign gantry, oncoming headlights grow from the horizon. Replaces the side-view scene | Taylor | Supplied a reference image — "like a car video game where you're driving it"; side view retired |

| 26 | 2026-07-06 | Road made symmetric: twin dashed lane lines (44.4% / 55.6%), car centered in the middle lane | Taylor | "The road needs to be more symmetrical" |
| 27 | 2026-07-06 | The car is a **1959 Cadillac Eldorado** — chosen from 10 glyph mocks (design/car-mocks.html); dark purple, bullet taillights in the fins, right bullet doubles as the exit turn signal | Taylor | Picked No. 2 from the lineup |

*(New rows get appended as we make choices during the build.)*
