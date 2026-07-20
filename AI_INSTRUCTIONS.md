# AI INSTRUCTIONS: Fahrschule Trenkler

## Project Context
Marketing site for Fahrschule Trenkler (Offenbach am Main) serving two audiences from one architecture:
- Welt 1 (Privatkunden): `/fuehrerschein/*`
- Welt 2 (Firmenkunden): `/berufskraftfahrer/*`
Both use a dual-world switcher tracked in `WorldContext.tsx`.

## Design System Rules
- Colors: White (`#FFFFFF`), Offwhite (`#F7F6F3`), Ink (`#1A1A1A`), Secondary (`#6B6B6B`), Divider (`#E5E5E5`), Accent (`#F5C400`).
- Strict Rule: Yellow (`#F5C400`) is NEVER a full section background and NEVER used on white backgrounds. It flares on Ink (`#1A1A1A`).

## Typography Token Conventions
- Single-class semantic typography defined in `src/app/tokens.css`.
- Variables: `--type-h1` through `--type-overline`.
- Fonts: Archivo (Headlines/Display/Oversized numbers) + Inter (Body/UI).
- Always use utility classes like `text-h1 md:text-h1-md` for responsive text sizing.

## Motion Architecture
- GSAP + ScrollTrigger handles architectural motion (reveals, scroll-scrubbing).
- CSS handles micro-interactions (hover states, scaling).
- ReactLenis (`lenis/react`) handles smooth scrolling.
- **Rule:** Never use Framer Motion unless CSS/GSAP absolutely cannot solve it.
- Respect `prefers-reduced-motion` to collapse animations immediately.

## Component Constraints
- Uses `ImagePlaceholder` for all images (`#E5E5E5` fill + text label). No external placeholder images allowed.
- Icons from `lucide-react`.

## Content Rules
- All copy is production-like. No "Lorem Ipsum".
- Numbers/Metrics in the initial build are tagged with `// DRAFT`.

## File Conventions
- Uses Next.js App Router static export (`output: "export"`).
- Global layout holds `WorldProvider`, `SmoothScroller`, `Navigation`, and `Footer`.
