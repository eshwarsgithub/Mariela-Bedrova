# Mariela Bedrova — Portfolio

Personal portfolio for **Mariela Bedrova**, AI entrepreneur and builder of practical AI products. Built with Next.js 16, Tailwind CSS 4, Framer Motion, and Three.js.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (Turbopack, App Router) |
| Styling | Tailwind CSS 4 + custom CSS (editorial light theme) |
| Animation | Framer Motion, GSAP |
| 3D / Canvas | Three.js, HTML Canvas (neural mesh background) |
| Fonts | Geist, JetBrains Mono, Plus Jakarta Sans |
| Language | TypeScript |

## Sections

- **Prologue** — Hero with large editorial headline
- **Manifesto** — About / philosophy in large serif type
- **Practice** — 8-capability grid (AI agents, automation, MVPs, etc.)
- **Work** — Horizontal-scroll project cards (Concierge.ai, LeadLoop OS, Brandstack, and more)
- **Testimonials** — Client result cards with star ratings
- **Toolkit** — Animated marquee of AI tools used
- **Process** — 4-step Discover → Define → Build → Launch cards
- **Contact** — Contact form + direct email/social links
- **Footer** — Large logotype lockup

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  globals.css      # Base styles, CSS variables, custom utilities
  layout.tsx       # Root layout with fonts
  page.tsx         # Page composition
components/
  layout/          # Navbar, Footer
  sections/        # One file per page section
  ui/              # Shared UI primitives (SectionHeading, MagneticButton, etc.)
lib/
  data.ts          # All copy and structured content
  utils.ts         # Utility helpers
public/            # Static assets
```

## Content

All copy lives in `lib/data.ts` — update it to change any text, testimonials, project cards, or process steps without touching component files.

## Deploy

```bash
npm run build
```

Deploys cleanly to [Vercel](https://vercel.com) with zero configuration.
