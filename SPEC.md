# CREATIVE BUILD SPECIFICATION — Fahrschule Trenkler

## ROLE

You are a principal frontend architect and creative technologist building a light-dominant, trust-forward marketing site for a third-generation family driving school and professional-driver training centre in Offenbach am Main. Execute with the discipline of a German automotive spec sheet and the warmth of a neighbourhood Meisterbetrieb.

## OBJECTIVE

Build a German-language marketing site serving two audiences from one architecture: informal 'du'-toned private learners (Welt 1 — Führerschein) and formal 'Sie'-toned B2B professionals (Welt 2 — Berufskraftfahrer). A persistent dual-world switcher and world-encoded URLs keep both journeys coherent without forking. Trust is the load-bearing wall. Motion is rationed to one signature interaction. Every image is a labelled placeholder; every draft metric is code-commented as pending client sign-off.

## AESTHETIC IDENTITY

**Visual thesis:** Structure is the design language. The site reads as clearly delineated horizontal bands — white and warm off-white alternating for rhythm — punctuated by near-black power surfaces where yellow flares to full impact. Precision-engineering clarity softened by honest, established warmth. Never sterile, never flashy.

**Brand-to-interface relationship:** The interface behaves like the school itself — reassuring, ordered, credentialed. Confident spec-sheet typography carries authority; generous whitespace and human placeholder imagery carry warmth. The dual register (du/Sie) lives in copy, not in two separate visual systems.

**Feel in motion:** Calm and deliberate. Content settles into place with gentle one-time reveals. The single memorable moment is the car travelling the yellow-filling timeline. Nothing competes with information.

**Spatial staging:** Full-confidence photography slots at large scale, oversized numeric display type for KPIs, technical clarity in service-tile grids. Medium content density — imagery, type, and spacing share the load; no text walls.

**Type pairing:** Archivo (700 headlines, 900 hero/stat display, 600 eyebrows/labels/badges) + Inter (400 body, 500 emphasis/UI, 600 buttons/nav). Self-hosted. Archivo Black drives oversized stat numerals and hero headlines; Inter keeps both registers legible.

## GLOBAL DESIGN SYSTEM

**Palette (exact):**
- `#FFFFFF` — primary page ground (~60%)
- `#F7F6F3` — warm alternating band ground, card fills
- `#1A1A1A` — ink text, navbar, footer, closing CTA power surfaces (~30%)
- `#6B6B6B` — secondary text, captions, metadata, form labels
- `#E5E5E5` — dividers, card borders, ImagePlaceholder fill
- `#F5C400` — accent (~10%): CTA buttons, active switcher/tab state, timeline fill line, stat numbers, icon/line accents
- `#DDB000` — hover state for yellow interactive elements only

**Strict colour law:** Yellow is NEVER a full section background, NEVER text on white ground, NEVER paired with white text. Yellow buttons always carry `#1A1A1A` text. Yellow reaches maximum impact only on `#1A1A1A` grounds. Tints permitted: `#F5C400` at low opacity for hover-halo washes on dark surfaces only.

**Typographic hierarchy:** Hero display Archivo 900 clamped ~clamp(2.75rem,6vw,5rem), tight leading, slight negative tracking. Section headlines Archivo 700 ~2–2.75rem. Eyebrows Archivo 600 uppercase ~0.8rem, +0.12em tracking, in `#6B6B6B` or yellow-on-dark. Stat numerals Archivo 900, oversized (~4–6rem) in `#F5C400`. Body Inter 400 ~1rem/1.65. Buttons/nav Inter 600.

**Spacing & rhythm:** 8px base scale. Section vertical padding ~120px desktop / ~72px mobile. Max content width ~1240px, gutters ~24px. Bands alternate `#FFFFFF` / `#F7F6F3` for scannable separation. Consistent 1px `#E5E5E5` hairline dividers where bands share a tone.

**Surface logic:** Cards are `#FFFFFF` or `#F7F6F3` with 1px `#E5E5E5` border, ~14px radius, no drop shadow at rest. On hover: lift via subtle shadow, border shifts to `#1A1A1A` or yellow, and a yellow accent (top-border, icon fill, or corner tick) is introduced.

**Motion & easing:** One-time reveals on scroll (fade + 16px rise, ~500ms, ease-out cubic), triggered once per element. Staggered per-card entrances (~70ms stagger) on grid sections. Hover scale 1.02–1.03 with 200ms ease. The scroll-coupled timeline is the sole continuous scroll animation. NO pervasive parallax, NO multi-section pinning, NO SplitText. `prefers-reduced-motion` collapses ALL motion to functional static states; the timeline becomes a static filled path with all steps visible.

**Image direction:** Every slot is `<ImagePlaceholder label='...' ratio='...' />` — `#E5E5E5` fill, centred `#6B6B6B` label (e.g. "PLATZHALTER: Volvo FH4 Frontansicht, 16:9"). Ratios: hero 21:9 desktop / 4:3 mobile; tradition 4:3; graduates 1:1; vehicles 16:9; team 3:4. Slots render at full confidence — large, uncropped, integral to layout, never decorative filler.

## COMPONENT ARCHITECTURE

**TopBar:** Slim `#1A1A1A` strip above navbar. Left: main branch address, tel: link, email, office hours with hairline icons. Right: Instagram + Facebook icons. Hides on scroll-down, slides back on scroll-up (~250ms). Mobile: reduced to a single phone icon or hidden.

**Navbar (sticky):** `#1A1A1A` ground. Logo left (shrinks ~15% on scroll). Centred nav with "Über uns" dropdown. Yellow "Jetzt anmelden!" CTA right (`#1A1A1A` text). Directly above/integrated: **dual-world switcher** — two segmented pills "Führerschein" / "Berufskraftfahrer"; active world fills `#F5C400` with `#1A1A1A` text; auto-activated by landing URL (`/fuehrerschein/*` → Welt 1, `/berufskraftfahrer/*` → Welt 2). Switching worlds re-scopes the centred nav links.

**Mobile burger menu:** Full-screen `#FFFFFF` overlay. Two clearly labelled, visually separated groups — "Welt 1: Führerschein" and "Welt 2: Berufskraftfahrer" — each with its sub-links, plus global items (Über uns, Termine, Kontakt). Persistent yellow CTA and tel: link pinned bottom.

**Hero:** Full-width image placeholder ground with dark overlay scrim for text legibility. Tradition/trust headline (Archivo 900) + concise subline. Optional rotating banner strip (one-line announcements, gentle cross-fade, pausable). Two large **world-selector tiles** ("Führerschein" / "Berufskraftfahrer") always visible and clickable — hover scale 1.03 + yellow top-accent introduction. Tiles remain the primary hero action even when banner rotates.

**StatsSection:** 3–4 oversized KPI badges, Archivo 900 numerals in `#F5C400`, labels in `#6B6B6B` (>90% Bestehensquote TÜV Hessen, seit 1962, unterdurchschnittliche Durchfallquote, Google-Rating badge). Staggered per-card entrance. Each value code-commented `// DRAFT – to be confirmed by client before launch`.

**TimelineSection (signature):** See section behavior below.

**Service-tile grid:** Category tiles with icon accent, title, one-line descriptor. Hover: scale 1.02, border → `#1A1A1A`, yellow corner tick appears. Staggered reveal.

**Cards (dates/graduates/FAQ):** As per surface logic. Date cards carry a yellow category badge, date, location.

**B2B enquiry form:** Prominent, low-friction, on `#F7F6F3` ground with trust framing (credentials, contact fallback). Fields: Name, Firma, E-Mail, Telefon, gewünschtes Modul/Datum, Nachricht. Labels in `#6B6B6B`, inputs with `#E5E5E5` border → yellow focus ring. Yellow submit button; placeholder submit.

**ClosingCTA:** `#1A1A1A` band. Short headline ("Bereit loszulegen?"), yellow "Jetzt anmelden!" button, large clickable tel: number in Archivo 900. Yellow flares at maximum here.

**Footer:** `#1A1A1A`. Logo + short claim, all three branch opening hours as separate blocks, nav columns (Führerschein / Berufskraftfahrer / Über uns), Google rating badge, social links, footer-only links (MPU-Beratung, Jobs, LKW-Verleih, Impressum, Datenschutz, AGB).

## PAGE BLUEPRINTS

**Homepage** — nine fixed reusable-component sections in order:
1. **HeroSection** — image placeholder ground, tradition headline, rotating banner, two world-selector tiles (always clickable).
2. **StatsSection** — 3–4 KPI badges, yellow numerals, staggered entrance, draft-commented values, Google badge.
3. **TimelineSection** — signature scroll-coupled 5-step licence journey (see behavior).
4. **TermineTeaser** — next 3–4 events as compact cards (date, yellow category badge, location), dummy data, link to /termine.
5. **TraditionSection** — image-left / text-right, family story since 1962, three branches, full class coverage, 3–4 benefit bullets with yellow icon accents, teaser links to Team + Fahrzeuge.
6. **AbsolventenTeaser** — 3 square (1:1) graduate placeholders with first name + Monat/Jahr, link to gallery.
7. **FAQSection** — 6-item accordion: Kosten, Dauer, BF17, Intensivkurs, Bildungsgutschein, B197. One open at a time, yellow active indicator.
8. **ClosingCTA** — dark band, headline, yellow CTA, large tel: link.
9. **Footer**.

**/fuehrerschein** *(Welt 1 hub)* — Purpose: overview of all private-learner classes. Sections: world-scoped hero band, service-tile grid (Auto, Motorrad, Erweiterungen, Intensivkurs, Aufbauseminare, Kosten), TermineTeaser (filtered), ClosingCTA, Footer. Reuses tile grid + staggered reveal. Welt 1 auto-active, 'du' tone.

**/fuehrerschein/auto** — Purpose: B/BE/BF17 detail. Sections: intro band, benefit list with yellow icons, class-comparison table, image placeholder, related dates teaser, CTA. 'du' tone.

**/fuehrerschein/motorrad** — Purpose: A/A1/A2/Mofa detail + special theory dates. Sections: intro, class-tier cards, special-dates callout card, image slot, CTA. Reuses date cards.

**/fuehrerschein/erweiterungen** — Purpose: B196 / B197 extensions. Sections: two side-by-side explainer cards, requirements list, CTA. Concise, information-led.

**/fuehrerschein/intensivkurs** — Purpose: 7-day holiday course + enrolment funnel. Sections: intro, "Theorie in 7 Tagen" day-by-day compact schedule strip, benefit list, prominent enrolment CTA, dates teaser.

**/fuehrerschein/aufbauseminare** — Purpose: remedial seminars (penalty points). Sections: intro, eligibility explainer, process list, CTA.

**/fuehrerschein/kosten** — Purpose: private pricing. Sections: intro, price table (all values `// DRAFT`), inclusion notes, Bildungsgutschein cross-link, CTA.

**/berufskraftfahrer** *(Welt 2 hub)* — Purpose: overview of all B2B/professional services, 'Sie' tone. Sections: world-scoped hero, service-tile grid (LKW, Bus, Grundqualifikation, Pflichtweiterbildung, Digitaler Tacho, Bildungsgutschein, Praxistraining, LKW-Verleih), credential band (IHK/TÜV/BKF), B2B trust framing, ClosingCTA. Welt 2 auto-active.

**/berufskraftfahrer/lkw-fuehrerschein** — Purpose: C/CE detail. Sections: intro, requirements, fleet image slot, credential badges, tel: CTA. 'Sie' tone.

**/berufskraftfahrer/bus-fuehrerschein** — Purpose: D/DE detail. Same structure as LKW page, bus imagery.

**/berufskraftfahrer/grundqualifikation** — Purpose: IHK Beschleunigte Grundqualifikation. Sections: intro, IHK credential emphasis, module overview, Bildungsgutschein cross-link, tel: CTA.

**/berufskraftfahrer/pflichtweiterbildung** *(primary B2B conversion)* — Purpose: BKF-Module 1–5. Sections: intro, five module cards (staggered reveal), credential band, **prominent B2B enquiry form** at page foot with trust framing. Form is the dominant terminal action.

**/berufskraftfahrer/digitaler-tacho** *(primary B2B conversion)* — Purpose: digital tachograph training. Sections: intro, training-content list, **B2B enquiry form** (identical fields) at foot with trust framing.

**/berufskraftfahrer/bildungsgutschein** — Purpose: voucher funding explainer. Sections: intro, step-by-step "so nutzt du/nutzen Sie den Gutschein" process list, eligible-course links, CTA.

**/berufskraftfahrer/praxistraining** — Purpose: practical HGV training. Sections: intro, three exercise cards (Laderampe, Sattelzug, Wechselbrücke) with image slots, tel: CTA.

**/berufskraftfahrer/lkw-verleih** — Purpose: HGV rental (Iveco Daily, Volvo FH4). Sections: intro, two vehicle spec cards with image slots + spec tables, rental enquiry flow (form or tel:), CTA. Linked in nav + footer.

**/termine** — Purpose: unified timetable. Sections: header, **client-side tab/filter bar** (Alle · Theorie B · Theorie A/Motorrad · Theorie C+D · Grundquali & Module · Intensivkurse · Motorradtouren), filtered date-card grid, dummy dates. URL param `?kategorie=...` pre-selects active tab. Active tab yellow-filled. No navigation on filter.

**/ueber-uns/team** — Purpose: team. Sections: intro, portrait grid (3:4 placeholders, name + role), CTA.

**/ueber-uns/fahrzeuge** — Purpose: fleet showcase. Sections: intro, vehicle category grid (16:9 slots, model + specs), rental cross-link.

**/ueber-uns/geschichte** — Purpose: heritage since 1962. Sections: intro, generational narrative with a static vertical milestone list (non-coupled), image slots, three-branch note.

**/ueber-uns/news-bilder** — Purpose: news + archive split. Sections: 2026+ posts as standard article cards; ≤2025 consolidated into a compact "Archiv" image-grid view. Toggle between current news and archive.

**/ueber-uns/absolventen** — Purpose: graduate gallery. Simple 1:1 photo grid, first name + Monat/Jahr, staggered reveal. No blog format.

**/ueber-uns/partner** — Purpose: partners. Logo grid (placeholders) with short relationship captions.

**/kontakt** — Purpose: three branches. Sections: three location blocks (Luisenstraße 28 / Strackgasse 15 / Aschaffenburger Str. 32) each with individual opening hours, directions, map placeholder; general contact form; tel: links throughout.

**/mpu-beratung** *(SEO landing, footer-only)* — Purpose: high-intent standalone acquisition. Sections: strong hero headline, service explainer, trust/discretion framing, process list, prominent contact + tel: CTA. Treat as complete self-contained landing page.

**/jobs** *(footer-only)* — Purpose: careers. Sections: intro, open-role cards, application CTA.

**/impressum, /datenschutz, /agb** *(footer-only)* — Purpose: legal. Single-column readable text pages, `#FFFFFF` ground, generous measure.

## SECTION-SPECIFIC BEHAVIOR

- **Hero** — world-selector tiles hover scale 1.03 + yellow top-accent; rotating banner gentle cross-fade, pausable; tiles never obscured. `interaction_depth: high` — hero carries a defined hover mechanic.
- **StatsSection** — staggered per-card entrance reveal (~70ms), numerals count-in once (skip under reduced-motion).
- **TimelineSection (SIGNATURE)** — horizontal 5-step licence journey. A yellow line fills left-to-right **coupled to scroll position** within the section; a car icon travels along it, each of the 5 step markers activating (yellow fill + label emphasis) as the car passes. This is the ONLY scroll-coupled continuous animation on the site. Under `prefers-reduced-motion`: renders as a fully static, fully-filled horizontal timeline with all five steps and the car at the end — completely functional, no motion.
- **TermineTeaser / date grids** — staggered card reveal; card hover lift + yellow badge emphasis.
- **TraditionSection** — one-time fade+rise reveal on image and text independently; benefit bullets fade in staggered.
- **Service-tile grids** — staggered entrance; hover scale 1.02 + border darken + yellow corner tick.
- **FAQ accordion** — single-open, smooth height transition, yellow active marker.
- **B2B forms** — inputs yellow focus ring; submit hover `#DDB000`.
- All reveals fire once; all coupled/staggered motion collapses to static under reduced-motion.

## GLOBAL UX RULES

- Dual-world switcher persistent and auto-activated by landing URL; world scopes navbar links and copy register (du/Sie).
- TopBar hide-on-scroll-down / show-on-scroll-up; logo shrinks on scroll.
- Every phone appearance is a `tel:+4969813825` link.
- Primary CTA "Jetzt anmelden!" (→ `#anmeldung`) appears in navbar, hero context, and ClosingCTA consistently.
- B2B conversion terminates in prominent forms on Pflichtweiterbildung + Digitaler Tacho; tel: fallback framed alongside.
- Three-branch presence surfaced on /kontakt and in footer with individual opening hours.
- All draft metrics code-commented as pending client confirmation.
- All images via `<ImagePlaceholder />`; no real files.
- Homepage sections are independent reusable components for reorderability.
- `prefers-reduced-motion` fully honoured everywhere.

## EXECUTION DIRECTIVE

Build a light-dominant, band-structured, trust-forward site where yellow is disciplined and flares only against near-black. Serve two audiences from one architecture via the persistent world switcher. Deliver the scroll-coupled timeline as the single memorable interaction and keep all other motion rationed to gentle reveals and micro hover feedback. Warm, competent, established — never flashy, never cold. Execute with spec-sheet precision.

# TECHNICAL ENFORCEMENT

## STACK AND FRAMEWORK

Use the **latest stable version** of this stack only:

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP with ScrollTrigger
- ReactLenis (smooth scroll)
- Lucide React icons
- (Framer Motion)

Pin to current stable major versions at build time; do not downgrade to deprecated majors. Do not install, import, or use Framer Motion by default. Framer Motion may only be added when the creative build specification explicitly requires animation behavior that CSS and GSAP cannot reasonably handle. For standard website motion, use CSS and GSAP.

No alternative frameworks, CSS systems, icon libraries, or animation libraries are allowed unless explicitly requested in the creative build specification.

---

## BRAND ASSET FIDELITY

When the creative build specification provides an explicit palette (hex values) and a named font pairing, treat them as fixed:

- use the specified hex values exactly as the basis of the token system
- self-host the specified font families (see Font Loading)
- do not substitute, "improve", or re-theme the provided identity

Only invent palette and typography when the specification explicitly leaves them open.

---

## RESPONSIVE AND MOBILE-FIRST IMPLEMENTATION

All layouts must follow a **mobile-first responsive design approach** and function reliably across modern devices and browsers.

All semantic text tokens must support responsive usage through paired utilities (e.g. `text-h1 md:text-h1-md`) so typography adapts consistently between mobile and desktop (see below).

Interactive elements must remain usable on touch devices.

The site must behave consistently in the latest versions of **Safari, Chrome, Firefox, and Edge** across both mobile and desktop. Avoid browser-specific APIs that reduce compatibility. Ensure animations and interactions degrade gracefully if certain capabilities are unavailable.

---

## STATIC EXPORT

Enforce this exact `next.config.ts` configuration:

```tsx
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```

Build the site so it works correctly under static export constraints.

---

## FONT LOADING

All fonts must be **self-hosted**. Do not dynamically load fonts from external providers such as Google Fonts via CDN or runtime requests.

Requirements:

- download and serve font files locally from the project (sourcing the files from public providers like Google Fonts is fine)
- use `next/font/local` or equivalent local font loading
- do not include `<link>` tags to Google Fonts or other third-party font CDNs
- do not trigger external font requests at runtime

Fonts must be bundled with the static export and served from the same domain. The typography token system must accommodate the font pairing and the weights specified by the creative build specification (use a minimum of three distinct weights).

---

## INTERNATIONALIZATION

When only one language is desired, do **not** add i18n logic.

When more than one language is required:

- implement locale-prefixed routes such as `/de` and `/en`
- include a language switcher component in the header (its visual design is defined by the creative build specification)
- ensure page slugs are translated into the selected language rather than reused verbatim across locales
- control translations through variables and JSON translation files
- set correct `hreflang` tags for alternate language versions
- set the correct `html lang` attribute per page
- ensure legal pages use fully localized locale-prefixed routes and translated slugs, e.g. `/de/impressum`, `/de/datenschutz`, `/en/imprint`, `/en/privacy`

---

## TYPOGRAPHY TOKEN SYSTEM

Implement a canonical single-class semantic typography system in `tokens.css`.

Required semantic utilities:

- `text-h1` through `text-h6`
- `text-p`
- `text-small`
- `text-caption`
- `text-overline`

Control size, line-height, weight, tracking, family, and style exclusively through `--type-*` tokens and utility mappings.

Every semantic text token must have separate mobile and desktop sizes. Support responsive desktop variants via companion `*-md` utilities applied at the `md:` breakpoint, e.g. `text-h1 md:text-h1-md`.

Use a minimum of three distinct font weights across the type scale to establish clear hierarchy. Apply intentional tracking variation: tighter on large display headings, wider on overlines and captions, neutral on body text. Do not hardcode ad hoc typography values in components.

---

## ANIMATION SYSTEM

Use a CSS-first motion architecture with strict library ownership boundaries. First attempt to solve motion with CSS or GSAP before considering Framer Motion.

Two separate motion layers with different standards:
- **CSS handles micro-interactions** (button states, hover color transitions, focus rings, small UI feedback). Keep these subtle, predictable, and maintainable.
- **GSAP handles architectural motion** (scroll sequences, entrance choreography, pinned panels, staggered reveals). These must be purposeful and ambitious — see Motion Style below.

### Smooth Scroll

Use ReactLenis for smooth scrolling. Initialize it once at the layout level before any ScrollTrigger instances are created.

ReactLenis drives its own RAF loop by default (`autoRaf: true`). Do not add a manual `gsap.ticker` call — it will double-tick and cause jank. Sync ScrollTrigger via the `useLenis` hook:

```ts
lenis.on('scroll', ScrollTrigger.update)
```

This is required so ScrollTrigger reads Lenis's scroll position rather than native scroll. Do not use native scroll listeners and ReactLenis simultaneously on the same scroll axis. Include Lenis `lerp` and `duration` values in the centralized `MOTION` config.

When `prefers-reduced-motion` is enabled, disable Lenis smooth scrolling (pass `duration: 0` or skip initialization) so native scroll is preserved.

### Library Ownership Boundaries

Do not animate the same element with more than one animation system. Do not let multiple systems compete over the same properties on the same DOM node or write to the same element's `transform`, `opacity`, `filter`, layout-affecting styles, or transition state.

### Shared Motion Configuration

Define one centralized shared motion config, e.g. `MOTION`, and reuse it throughout. Centralize: `start`, `distanceY`, `durationIn`, `stagger`, `ease`, `hoverLift`, `tapScale`, `reducedMotion`. Do not hardcode arbitrary per-component timings. Use shared tokens with section-level overrides only where genuinely necessary.

### Scroll Reveal Behavior

Scroll reveals must be one-time entrance animations only — content appears once when it enters the viewport (`once: true` by default). Scroll-progress-linked GSAP animations are independent of this.

### Motion Style

Motion must be purposeful, architecturally significant, and premium. Every site must include: staggered text entrance on headings (per-word or per-line), at least one GSAP-pinned scroll sequence, and scroll-linked `opacity`/`transform` choreography in at least two sections. Clip-path reveal animations, SplitText staggers, sticky overlapping section transitions, and scroll-scrubbed parallax depth layers are encouraged and expected. Use hover and tap feedback for all interactive elements — default is a small lift on hover and scale-down on press; add cursor-linked parallax or glow where the creative direction supports it.

All motion must use GPU-composited properties only (`transform`, `opacity`, `clip-path`). Never animate `filter`, `width`, `height`, `top`, `left`, or `box-shadow` in motion sequences — these cause layout thrashing and degrade performance. These constraints are what make visual ambition and performance coexist: enforce both without compromise.

### Reduced Motion

Respect `prefers-reduced-motion`. When enabled: disable non-essential animation; render final visible states immediately; preserve usability and layout; do not hide content behind animation initialization.

### Cleanup and Performance

Scope and clean up animation instances correctly using proper context and teardown. Prevent memory leaks, duplicate ScrollTriggers, layout thrashing, and jank. Avoid animating expensive properties (width, height, top, left, box-shadow, filter) unless explicitly required; prefer transform and opacity. Batch scroll reveals where appropriate.

---

## CONTENT AND MEDIA

- Do not use placeholder text or lorem ipsum. Write realistic, production-like draft copy meant for client review.
- For decorative, abstract, or illustrative imagery: implement visuals as **inline SVG, CSS gradient compositions, or geometric shape treatments** — no external image services, no raster image files. The creative build specification describes exactly what these visuals should look like; implement them as described.
- For real people, real products, real premises, or any brand-specific photography: insert correctly-sized, clearly-labeled **placeholder slots** (e.g. `[PHOTO: founder portrait, 3:4 ratio]`) intended for client asset replacement. **Never generate or fabricate imagery of real, named individuals, real locations, or real products.**

---

## AI GOVERNANCE AND DOCUMENTATION

Create `AI_INSTRUCTIONS.md` in the repo, documenting at minimum: project context; design system rules; typography token conventions; motion architecture; shared motion tokens; component constraints; i18n behavior if applicable; content rules; file and implementation conventions future AI systems must preserve. Create any additional markdown docs needed to keep future AI-assisted edits consistent with the design system and architecture.

---

## IMPLEMENTATION DISCIPLINE

Treat every rule in this technical enforcement as mandatory. Do not omit, weaken, paraphrase away, or replace any requirement. When creative direction conflicts with the technical enforcement, preserve the enforcement and resolve the creative expression within its boundaries. The output must be production-ready within the scope of the technical enforcement. |