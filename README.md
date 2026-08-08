# ZKR Festival

A high-fidelity, animation-rich landing page for a fictional music festival — built as a front-end portfolio piece.

> **This is a fictional demo / portfolio project.** ZKR Festival, its lineup, artists, sponsors, testimonials, and dates are not real. All content exists purely to showcase front-end engineering, motion design, and UI craftsmanship.

## Purpose

This project demonstrates a modern, production-grade marketing/landing page built with React 19 and TypeScript — focused on smooth scroll-driven animation, glassmorphism visual design, and a fully responsive layout from small phones up to large desktop displays.

## Main Features

- **Custom smooth scrolling** powered by Lenis, synced with GSAP's ScrollTrigger for scroll-based reveal animations
- **Animated hero** with parallax gradient blobs, a looping background, magnetic buttons, and a custom cursor
- **Live countdown timer** to the event date
- **Lineup grid** of 12 artists with tilt/hover interactions and a featured (larger) card treatment
- **Experience carousel** — an auto-advancing featured showcase with a synced horizontal thumbnail rail
- **Tabbed multi-day schedule** with animated transitions
- **Ticket tiers** section
- **Masonry photo gallery** with a keyboard-accessible lightbox
- **Auto-scrolling sponsor marquees** (dual direction)
- **Testimonial carousel** with autoplay, pause-on-hover/focus, and reduced-motion support
- **Accordion FAQ**
- **Contact section** and **footer** with social links
- Code-split, lazy-loaded below-the-fold sections for a lighter initial bundle
- Custom cursor, noise overlay, and other ambient visual details
- Respects `prefers-reduced-motion` throughout

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tool / dev server)
- **Tailwind CSS 3** (utility-first styling)
- **Framer Motion** — component-level animation (carousels, transitions, accordions)
- **GSAP** + **ScrollTrigger** — scroll-triggered reveal animations
- **Lenis** — smooth-scroll engine, kept as the single source of truth for page scroll position
- **OGL** — lightweight WebGL (used by the `Prism` component)
- **react-icons**

No backend, database, or external API is used — all content is static, sourced from local TypeScript data files in `src/data`.

## Project Structure

```
src/
├── App.tsx                    # App shell: Lenis setup, anchor-scroll routing, section composition
├── main.tsx                   # React entry point
├── index.css                  # Tailwind layers, global resets, decorative CSS effects
├── components/
│   ├── sections/               # One component per page section (Navbar, Hero, Lineup, Experience, ...)
│   ├── MagneticButton.tsx      # Cursor-following button interaction
│   ├── CustomCursor.tsx        # Custom cursor replacement
│   ├── SectionReveal.tsx       # Scroll-triggered reveal wrapper (GSAP ScrollTrigger)
│   ├── GlassCard.tsx           # Reusable glassmorphism card
│   ├── EchoText.tsx            # Animated hero title text
│   ├── NoiseOverlay.tsx        # Film-grain overlay effect
│   └── Prism.tsx               # WebGL visual (OGL)
├── constants/                  # Navigation links, social links
├── data/                       # Static content: artists, schedule, tickets, gallery, FAQ, sponsors, etc.
└── hooks/                      # useMousePosition, useCountdown
```

## Responsive Design

The layout is built mobile-first with Tailwind's default breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px) and has been audited and tuned across the following widths: 320, 360, 375, 390, 414, 480, 768, 1024, 1280, and 1536px+.

Notable responsive behavior:

- **Lineup grid** scales progressively — 1 column on small phones, 2 columns from `sm`, 3 columns from `md` (tablet), and 4 columns with a spanning featured card from `lg` upward — so cards never feel cramped on a phone or awkwardly squeezed on a tablet.
- **Hero** uses `100dvh` (with a `100vh` fallback) so mobile browser address-bar resizing doesn't crop or misplace content.
- Sections containing large fixed-size decorative background glows (`Lineup`, `Schedule`, `Tickets`, `FAQ`) clip their own overflow so those effects can never cause horizontal scrolling on narrow viewports; `html`/`body` also carry a global `overflow-x: hidden` safety net.
- Typography, spacing, and touch targets scale via responsive Tailwind utilities (`text-sm sm:text-base ...`, `p-4 sm:p-6`, etc.) throughout every section.

## Main Sections

Home (Hero) → Countdown → Lineup → Experience → Schedule → Tickets → Gallery → Testimonials → Sponsors → FAQ → Contact → Footer

This is a single-page site; navigation (desktop nav bar, mobile menu, and footer links) scrolls smoothly to in-page sections rather than routing between separate pages.

## Assets

Images referenced by the data files (`/images/artists/...`, `/hero/beach.gif`, `/logo/zkr.jpg`, gallery and sponsor logos) are expected under the Vite `public/` directory using the paths defined in `src/data/`. Replace them with your own assets to re-skin the project; no code changes are required as long as the paths match.

## Environment Variables

None. The project runs entirely on static local data — no `.env` file or external API keys are required.

## Installation

Requires **Node.js 18+** and npm.

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Starts the Vite dev server (defaults to `http://localhost:5173`) with hot module reloading.

## Available Scripts

| Script            | Description                                             |
|-------------------|----------------------------------------------------------|
| `npm run dev`     | Start the local development server                       |
| `npm run build`   | Type-check (`tsc -b`) and build an optimized production bundle to `dist/` |
| `npm run preview` | Serve the production build locally for a final check     |

## Build

```bash
npm run build
```

This runs a full TypeScript project check followed by the Vite production build. Output is written to `dist/`.

## Deployment

The build output in `dist/` is a static site and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3 + CDN, etc.) with no server-side requirements.

## Notes

This is a **fictional, non-commercial demo/portfolio project**. All festival branding, artist names, testimonials, sponsors, and dates are invented for demonstration purposes and do not represent a real event.

## Future Improvements

- Split the large vendor bundle (GSAP, Framer Motion, OGL) further with manual chunking to reduce initial JS payload
- Add automated tests (component/unit tests) for interactive sections like the Lineup, Experience, and Gallery lightbox
- Add an actual CMS or data-fetching layer if the site were to serve a real event with changing content
- Add basic SEO/social preview validation (the `og:image`/`canonical` values are currently placeholders)
