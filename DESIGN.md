---
name: Mariela Bedrova Portfolio
description: AI entrepreneur portfolio — glassmorphism with vivid purple-blue-pink gradients
colors:
  background: "#06030f"
  surface: "#0d0820"
  surface-container-low: "#130d28"
  surface-container: "#1a1233"
  surface-container-high: "#221840"
  surface-container-highest: "#2d2050"
  on-surface: "#f0eaff"
  on-surface-variant: "#b8acd4"
  outline: "#4a3d6b"
  outline-variant: "#2d2450"
  primary: "#ffffff"
  on-primary: "#1a0d3d"
  primary-container: "#c4b5fd"
  on-primary-container: "#4c1d95"
  secondary: "#818cf8"
  tertiary: "#f472b6"
  accent-violet: "#7c3aed"
  accent-blue: "#3b82f6"
  accent-cyan: "#06b6d4"
  accent-pink: "#ec4899"
  gradient-start: "#7c3aed"
  gradient-mid: "#3b82f6"
  gradient-end: "#ec4899"
  glass-bg: "rgba(255, 255, 255, 0.04)"
  glass-border: "rgba(255, 255, 255, 0.10)"
  glass-border-hover: "rgba(255, 255, 255, 0.20)"
typography:
  display-2xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: "800"
    lineHeight: 80px
    letterSpacing: -0.03em
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: "700"
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  full: 9999px
spacing:
  unit: 8px
  section-y: 128px
  card-gap: 24px
  container-padding: 24px
  glass-padding: 32px
components:
  glass-card-standard:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.glass-padding}"
  glass-card-elevated:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.glass-padding}"
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.accent-violet}, {colors.accent-blue}, {colors.accent-pink})"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 32px
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #6d28d9, #2563eb, #db2777)"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 32px
  button-ghost-hover:
    backgroundColor: "rgba(255, 255, 255, 0.10)"
  input-field:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 52px
  input-field-focus:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
  service-card:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    rounded: "{rounded.lg}"
    padding: "{spacing.glass-padding}"
  navbar:
    backgroundColor: "rgba(6, 3, 15, 0.0)"
    height: 64px
  navbar-scrolled:
    backgroundColor: "rgba(6, 3, 15, 0.85)"
  stat-card:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-pill:
    backgroundColor: "rgba(124, 58, 237, 0.12)"
    textColor: "{colors.primary-container}"
    rounded: "{rounded.full}"
    padding: 6px 16px
---

## Overview

Mariela Bedrova's portfolio uses a "Vivid Depth" aesthetic: vibrant gradient orbs provide raw energy behind frosted glass surfaces that organize content. The system communicates speed, innovation, and premium quality to AI-curious business clients.

The design philosophy follows three principles:
1. **Glass over gradient** — every surface is a window into the energy below, never a wall
2. **Purposeful animation** — only animate what earns its movement (Emil Kowalski principle)
3. **Accessible luxury** — WCAG AA contrast on every text element, keyboard navigable throughout

## Colors

Three gradient anchors run through every element:
- **Accent Violet (#7C3AED):** Primary brand anchor. CTAs, icon backgrounds, glow effects.
- **Accent Blue (#3B82F6):** Mid-gradient. Secondary highlights, interactive states.
- **Accent Pink (#EC4899):** Terminal energy. Hover glows, accent marks.
- **Accent Cyan (#06B6D4):** Sparingly — stat values, select highlights.

Surface strategy: all component backgrounds use white alpha (4%–8%) so the vivid background gradient bleeds through. Text is always `#ffffff` or `rgba(255,255,255,0.6–0.8)` — never colored except `text-gradient` on headlines and stat values.

Gradient text formula: `linear-gradient(135deg, #C084FC 0%, #818CF8 35%, #38BDF8 65%, #F472B6 100%)` applied via `background-clip: text`. Use only on hero headline, section key words, and stat numbers.

WCAG AA compliance: all body text achieves ≥4.5:1 contrast against glass card backgrounds.

## Typography

Two-font system:
- **Plus Jakarta Sans Variable** — all headings, buttons, labels, eyebrows. Geometric with personality. Weights 600–800.
- **Inter Variable** — body copy, descriptions, form inputs. Neutral and maximally legible. Weight 400.

Rules:
- Apply `text-wrap: balance` on all headings to prevent awkward line breaks
- Use `font-variant-numeric: tabular-nums` on stat values to prevent layout shift
- Minimum label weight: 600 on glass surfaces (compensates for visual noise of blur)
- Letter spacing on display sizes: -0.02em to -0.03em for tightness and presence

## Layout

Single-page vertical scroll. All sections use `py-32 px-4 sm:px-6 lg:px-8` with `max-w-7xl mx-auto` container. Negative space is intentional — sections breathe.

Responsive targets: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop).

Grid patterns:
- Services: 4-col lg / 2-col md / 1-col base
- Projects: 2-col md+ / 1-col base
- Process: 4-col lg with connecting gradient line / 1-col base
- Testimonials: 3-col md+ / 1-col base
- About: 2-col lg (text + image) / 1-col base

## Elevation & Depth

The glass stack (inspired by atmospheric-glass reference):
- **L0 — Background:** Fixed gradient orbs (purple/blue/pink, `filter: blur(100px)`, `will-change: transform`) over `#06030f` base. Subtle 60px grid at 3% opacity overlaid.
- **L1 — Standard Cards:** `backdrop-filter: blur(20px)` + `background: rgba(255,255,255,0.04)` + `border: 1px solid rgba(255,255,255,0.10)` + `box-shadow: 0 8px 32px rgba(0,0,0,0.4)`
- **L2 — Elevated:** `backdrop-filter: blur(40px)` + `background: rgba(255,255,255,0.08)` — used for hero stat cards, modals
- **L3 — Hover:** `transform: translateY(-4px)` + border brightens to `rgba(255,255,255,0.20)` + ambient glow `box-shadow: 0 0 40px rgba(124,58,237,0.2)`

Every glass element has a `1px solid rgba(255,255,255,0.10)` border — the "light refraction edge" rule.
Shadows are always soft and spread (`rgba(0,0,0,0.4)`, never `rgba(0,0,0,1)`).

## Shapes

Rounded Premium shape language — organic and approachable:
- Standard cards: `border-radius: 16px` (rounded-md)
- Featured/elevated cards: `border-radius: 24px` (rounded-lg)
- Buttons: `border-radius: 9999px` (rounded-full — pill shape)
- Icon boxes: `border-radius: 12px` (rounded-xl)
- Form inputs: `border-radius: 16px` (rounded-md)
- Badge pills: `border-radius: 9999px` (rounded-full)

## Components

### Glass Cards
Standard: `backdrop-blur-[20px] bg-white/[0.04] border border-white/10 rounded-2xl`
Hover state: `translateY(-4px)`, `bg-white/[0.07]`, `border-white/20`, ambient violet glow
Transitions: explicit properties only — `background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease`

### Service Cards — Glow Hover
Each service card contains an absolute-positioned radial gradient div that fades from `opacity: 0` to `opacity: 1` on hover via Framer Motion variants. The glow color is unique per service. Icon box scales 1.1 and rotates 5° on hover.

### Buttons
Primary: gradient background, pill shape, inner shimmer animation (backgroundPosition sweep).
Ghost: `bg-white/[0.05] border border-white/15 backdrop-blur-sm`, pill shape.
Both implement Framer Motion magnetic pull effect (max ±15px) on mouse proximity.
Both require `focus-visible:ring-2 focus-visible:ring-violet-500/50`.

### Navbar
Starts fully transparent. Scrolling past 20px triggers: `background: rgba(6,3,15,0.85)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(255,255,255,0.05)`. Uses Framer Motion `useTransform` on `scrollY`.

### Infinite Marquee (AI Tools)
Two rows of tool pills, CSS keyframe animation (no JS scroll handlers). Row 1 scrolls left, row 2 right. Each row contains duplicated array for seamless loop. Pauses on hover.

### Contact Form
All inputs have `<label htmlFor>`. Focus states use `focus-visible:ring-2 focus-visible:ring-violet-500/50`. Submit uses `mailto:` fallback (no backend). Social links have `aria-label`.

## Do's and Don'ts

**Do:**
- `backdrop-blur` on every glass card
- `will-change: transform` on animated orbs (GPU)
- `viewport={{ once: true }}` on all Framer Motion scroll animations
- `aria-label` on every icon-only button
- `<button>` for actions, `<a>` for navigation
- `focus-visible:ring` on all interactive elements
- `text-wrap: balance` on all headings
- Animate only `transform` and `opacity`
- `prefers-reduced-motion` handling in CSS
- `color-scheme: dark` on `<html>`

**Don't:**
- Never `transition: all` — always list explicit properties
- Never `outline-none` without focus-visible replacement
- Never animate more than 4 elements simultaneously
- Never use emojis in UI — SVG icons only
- Never gradient text on body copy — headlines and stats only
- Never animate without purpose — restraint is elegance
