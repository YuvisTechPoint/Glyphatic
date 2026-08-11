# MOTION_SPECS.md
## Palo Alto Networks Clone — Motion & Interaction Specifications
### Section 7 of the UI & Visual Design Master Plan

> **Design Philosophy Test:** Every animation should reinforce "Controlled Authority."
> Fast, purposeful, corporate — never playful or bouncy. Spring easings are banned.
> Use `ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`) as the project-wide default.

---

## Global Motion Tokens

These are defined in `tailwind.config.ts` and must be used as-is — no per-element custom easings.

| Token | Value | When to use |
|---|---|---|
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default for all entrances and panel opens |
| `spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | **PANW: NOT USED** — reserved for Rocket SaaS |
| `ease-in-out` (Tailwind default) | `cubic-bezier(0.4, 0, 0.2, 1)` | Crossfades, tab content switches |
| Framer Motion: `duration` default | `0.4s` | Framer animations unless overridden below |

---

## Motion Spec Catalog

Each entry uses the standardized template from the Design Master Plan §7.

---

### 1. Hero Video Fade-In

```
Element:              Hero section — full-bleed background video overlay
Trigger:              Page load (once video metadata has loaded)
Property animated:    opacity
From → To:            0 → 1
Duration:             800ms
Easing:               ease-out (CSS: ease-out)
Delay:                0ms (starts as soon as video is ready)
Repeat behavior:      Once only
Reduced-motion:       Video is hidden; a static dark gradient background shows instead
Implementation:       CSS animation `videoFadeIn` (defined in tailwind.config.ts keyframes)
                      Class: `animate-video-fade`
```

---

### 2. Mega-Nav Panel Open / Close

```
Element:              MegaNavPanel dropdown container
Trigger:              Hover/focus on top-level nav item (open); mouse leave / Escape (close)
Property animated:    opacity + y-position (translateY)
From → To (open):     opacity 0→1, translateY -8px→0
From → To (close):    opacity 1→0, translateY 0→-8px
Duration:             200ms open, 150ms close
Easing:               ease-out-expo (open), ease-in (close)
Delay:                100ms hover delay before opening (prevents accidental triggers)
Repeat behavior:      Toggles on each open/close interaction
Reduced-motion:       Panel appears/disappears instantly (no translate)
Implementation:       Radix NavigationMenu built-in data-state attributes +
                      Tailwind `data-[state=open]:animate-in` / `data-[state=closed]:animate-out`
```

---

### 3. Mega-Nav Underline Slide (Active Indicator)

```
Element:              Orange underline under active top-level nav item
Trigger:              Hover over nav item (follows mouse left/right)
Property animated:    translateX (absolute-positioned indicator)
From → To:            Previous item x-position → hovered item x-position
Duration:             250ms
Easing:               ease-out-expo
Repeat behavior:      Continuous — follows cursor between items
Reduced-motion:       Indicator jumps to position instantly (no transition)
Implementation:       Framer Motion `layoutId="nav-underline"` on the indicator span —
                      Framer handles the interpolation automatically
```

---

### 4. Stat Counter Roll-Up (CountUp)

> Applies to every instance of `StatCounter` across all sections — 40+ total.

```
Element:              StatCounter number display (e.g. "30.9B", "78%", "70K")
Trigger:              Scroll into viewport (IntersectionObserver, 20% visibility threshold)
Property animated:    Numeric value (from 0 to target)
From → To:            0 → [target value]
Duration:             2000ms (2 seconds) for all counters
Easing:               ease-out (decelerates as it approaches the target — reads as "settling")
Delay/stagger:        If multiple StatCounters are in the same section, stagger by 150ms each
Repeat behavior:      Once only — does NOT restart on re-scroll
Reduced-motion:       Displays the final value instantly with no animation
Implementation:       Framer Motion `useInView` hook + `useMotionValue` + `useTransform`
                      OR a custom `CountUp` hook with `requestAnimationFrame`
                      Reference: `components/charts/StatCounter.tsx`
Notes:                Suffix (%, B, K, x, +) is appended after the number and is NOT animated —
                      it appears statically from the start so the unit context is always visible
```

---

### 5. Section Entrance — FadeUp

> Applied to most non-hero page sections as they scroll into view.

```
Element:              Section headings, body copy blocks, card grids entering the viewport
Trigger:              Scroll into viewport (IntersectionObserver, 15% threshold)
Property animated:    opacity + translateY
From → To:            opacity 0→1, translateY +24px→0
Duration:             500ms
Easing:               ease-out-expo
Delay/stagger:        If a grid of cards — 80ms stagger between children (using Framer `staggerChildren`)
Repeat behavior:      Once only
Reduced-motion:       Elements appear instantly in final state (opacity 1, translateY 0)
Implementation:       `components/animations/FadeUp.tsx` wrapper
                      Uses Framer `whileInView` + `viewport={{ once: true, margin: '-80px' }}`
```

---

### 6. Platform Tab Section — Tab Switch (4-Tab Showcase)

```
Element:              Tab content panel (stat block + logo marquee + award carousel)
Trigger:              Click on one of the 4 platform tabs (Network Security / SecOps / Cloud / Identity)
Property animated:    opacity + translateX (slight horizontal slide)
From → To (new panel enters): opacity 0→1, translateX +16px→0
From → To (old panel exits):  opacity 1→0, translateX 0→-16px
Duration:             250ms (exit) / 300ms (enter)
Easing:               ease-in-out
Delay:                Exit completes before enter begins (sequential, not simultaneous)
Repeat behavior:      On every tab click
Reduced-motion:       Content switches instantly, no translate
Implementation:       Radix `@radix-ui/react-tabs` with Framer `AnimatePresence` wrapping tab panels
                      `mode="wait"` on AnimatePresence to sequence exit before enter
```

---

### 7. Tab Active Underline Slide

```
Element:              Orange underline / bottom border under active tab label
Trigger:              Tab click
Property animated:    translateX (absolute-positioned indicator)
From → To:            Previous tab x-offset → active tab x-offset
Duration:             300ms
Easing:               ease-out-expo
Repeat behavior:      On every tab click
Reduced-motion:       Jumps to new position instantly
Implementation:       Framer Motion `layoutId="platform-tab-indicator"` on the indicator element
```

---

### 8. Hero Text Reveal

```
Element:              Hero headline + subheadline + CTA group
Trigger:              Page load
Property animated:    opacity + translateY (per line/element)
From → To:            opacity 0→1, translateY +20px→0
Duration:             600ms per element
Easing:               ease-out-expo
Delay/stagger:
  - Headline:         0ms delay
  - Subheadline:      150ms delay
  - CTA group:        300ms delay
  - Stat overlays:    500ms delay
Repeat behavior:      Once (page load only)
Reduced-motion:       All elements appear instantly
Implementation:       Framer `initial/animate` with explicit `delay` values
                      Wrap in a `<motion.div>` at each stagger level
```

---

### 9. Logo Trust-Bar Marquee

```
Element:              Customer logo strip (marqueeScroll animation)
Trigger:              Page load / continuous
Property animated:    translateX (infinite scroll)
From → To:            translateX(0) → translateX(-50%)
Duration:             40s per full cycle
Easing:               linear (no easing — constant speed)
Repeat behavior:      Infinite loop
Reduced-motion:       Logos displayed in a static, non-scrolling flex row
Implementation:       CSS animation `marquee` (defined in tailwind.config.ts)
                      Class: `animate-marquee`
                      Pause on hover: add `hover:[animation-play-state:paused]`
Notes:                Duplicate the logo set so the seam is invisible during loop
```

---

### 10. Award Badge Shimmer

```
Element:              Analyst recognition award badges (Gartner Magic Quadrant, Forrester Wave, etc.)
Trigger:              Page load (on first visibility)
Property animated:    Background gradient position (shimmer sweep across the badge)
From → To:            backgroundPosition: -150% 0 → 150% 0
Duration:             2s per sweep
Easing:               linear
Delay:                Random 0–500ms per badge for organic stagger
Repeat behavior:      Plays once on entry, then stops
Reduced-motion:       No shimmer — badge displays in static final state
Implementation:       CSS animation `shimmerBadge` (defined in tailwind.config.ts)
                      Class: `animate-shimmer`
                      Applied via `components/ui/AwardBadge.tsx`
```

---

### 11. PersonaCardGrid — Filter / Reflow

```
Element:              "Here for you" persona cards (Executives / Specialists / Partners / Customers tabs)
Trigger:              Click on persona tab
Property animated:    opacity + scale (cards exit/enter)
From → To (cards exiting):  opacity 1→0, scale 1→0.96
From → To (cards entering): opacity 0→1, scale 0.96→1
Duration:             200ms exit, 300ms enter
Easing:               ease-in (exit), ease-out-expo (enter)
Delay/stagger:        30ms stagger between each entering card
Repeat behavior:      On every persona tab click
Reduced-motion:       Cards switch instantly
Implementation:       Framer `AnimatePresence` + `motion.div` per card, `mode="popLayout"`
```

---

### 12. ThreatGlobe — Arc Flash Animation

```
Element:              Attack-vector arc lines in the 3D ThreatGlobe scene
Trigger:              Continuous (auto-plays once globe is loaded)
Property animated:    opacity (each arc fades in and out on its path)
From → To:            opacity 0 → 1 → 1 → 0 (keyframed: 0% / 15% / 85% / 100%)
Duration:             1.2s per arc
Easing:               ease-in-out
Delay:                Random stagger — new arcs start every 300–800ms (randomized)
Repeat behavior:      Infinite — new arcs continuously spawned and removed
Reduced-motion:       Static globe displayed; no arcs animate (globe still visible but still)
Implementation:       Three.js + `@react-three/fiber` custom `ThreatArc` mesh component
                      Uses CSS `animation: arcFlash` (defined in tailwind.config.ts) for 2D fallback
                      3D arcs use a custom animation loop via `useFrame` hook
```

---

### 13. Node Pulse (DataParticleField / NetworkMesh)

```
Element:              Abstract node-network dots in 3D background scenes
Trigger:              Continuous (auto-plays on scene load)
Property animated:    opacity + scale (per node)
From → To:            opacity 0.4→1→0.4, scale 1→1.3→1
Duration:             2s per cycle per node
Easing:               ease-in-out
Delay:                Random 0–2s offset per node for organic feel
Repeat behavior:      Infinite loop per node
Reduced-motion:       All nodes visible at fixed opacity 0.5 with no pulse
Implementation:       `pulseNode` keyframe (tailwind.config.ts) via `animate-pulse-node`
                      OR Three.js `useFrame` with sinusoidal opacity math
```

---

### 14. Mobile Nav — Slide-In Drawer

```
Element:              Full-height mobile navigation drawer
Trigger:              Hamburger button click (open); overlay click / Escape / close button (close)
Property animated:    translateX
From → To (open):     translateX(100%) → translateX(0)
From → To (close):    translateX(0) → translateX(100%)
Duration:             300ms open, 250ms close
Easing:               ease-out-expo (open), ease-in (close)
Repeat behavior:      Toggle on each open/close interaction
Reduced-motion:       Drawer appears/disappears instantly
Implementation:       Framer `AnimatePresence` + `motion.div` with `x` prop
                      OR CSS `translate-x` with `transition-transform`
```

---

### 15. Search Overlay — Scale-In

```
Element:              Full-screen search modal overlay
Trigger:              Search icon click (open); Escape / outside click (close)
Property animated:    opacity + scale
From → To (open):     opacity 0→1, scale 0.97→1
From → To (close):    opacity 1→0, scale 1→0.97
Duration:             200ms
Easing:               ease-out (open), ease-in (close)
Repeat behavior:      Toggle on each open/close
Reduced-motion:       Overlay appears/disappears instantly
Implementation:       Framer `AnimatePresence` + `motion.div` `initial/animate/exit`
```

---

## Reduced-Motion Global Rule

All animations MUST respect the `prefers-reduced-motion: reduce` media query.

**In Framer Motion** — add to every animated component:
```tsx
const prefersReduced = useReducedMotion()

// Then conditionally apply:
<motion.div
  initial={prefersReduced ? false : { opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={prefersReduced ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
/>
```

**In CSS animations** — add to `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**For the logo marquee** — pause in reduced-motion:
```css
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}
```

---

## Implementation Checklist

- `[ ]` Spec 1: Hero video fade-in
- `[ ]` Spec 2: Mega-nav panel open/close
- `[ ]` Spec 3: Mega-nav underline slide
- `[ ]` Spec 4: StatCounter roll-up (all instances)
- `[ ]` Spec 5: Section entrance FadeUp
- `[ ]` Spec 6: Platform tab switch (4-tab)
- `[ ]` Spec 7: Tab active underline slide
- `[ ]` Spec 8: Hero text reveal
- `[ ]` Spec 9: Logo trust-bar marquee
- `[ ]` Spec 10: Award badge shimmer
- `[ ]` Spec 11: PersonaCardGrid filter/reflow
- `[ ]` Spec 12: ThreatGlobe arc flash
- `[ ]` Spec 13: Node pulse
- `[ ]` Spec 14: Mobile nav slide-in drawer
- `[ ]` Spec 15: Search overlay scale-in
- `[ ]` Global: `prefers-reduced-motion` rule in `globals.css`
- `[ ]` Global: `useReducedMotion()` applied to all Framer components

---

*End of MOTION_SPECS.md — Palo Alto Networks Clone v1.0*
