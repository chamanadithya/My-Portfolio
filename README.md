# Chaman Adithya — Portfolio (Next.js)

A minimal, editorial black-and-white portfolio built with **Next.js 14 (App Router) + TypeScript**.
Dark mode, adjustable density, and swappable headline fonts are all persisted to `localStorage`.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm start
```

## Deploy

Push to a Git repo and import it on **[Vercel](https://vercel.com/new)** — zero config.
Or run `npx vercel` from this folder.

## Project structure

```
app/
  layout.tsx       Root layout — fonts, metadata, no-flash theme script, ThemeProvider
  page.tsx         Assembles the sections in order
  globals.css      All styling + design tokens (light/dark, density, font vars)
components/
  ThemeProvider.tsx  Theme/density/font context, persisted to localStorage
  Nav.tsx            Sticky nav: active-section tracking, dark toggle, settings popover, mobile menu
  Hero.tsx           Big headline + portrait placeholder + intro
  Marquee.tsx        Auto-scrolling tech strip
  About.tsx          Intro video placeholder + animated count-up stats
  Skills.tsx         Four skill cards (one dark accent card)
  Experience.tsx     Timeline of roles + studies
  Projects.tsx       Project grid with hover overlays
  Contact.tsx        Dark "Let's Connect" footer
  Reveal.tsx         Fade/lift-in-on-scroll wrapper
  CountUp.tsx        Number count-up on scroll
  Icons.tsx          Shared inline SVG icons
lib/
  data.ts            All content: techs, skills, experience, projects, nav links
```

## Editing content

All copy lives in **`lib/data.ts`** (skills, experience, projects, tech list) and in the
section components for one-off text (hero intro, about, contact details). Update those and
the page reflows automatically.

## Adding your images

The portrait, intro video, and project thumbnails are striped CSS placeholders
(`<div className="ph ...">`). To drop in real images, replace a placeholder with
Next's `<Image>`:

```tsx
import Image from "next/image";

// e.g. in Hero.tsx, swap the portrait placeholder for:
<Image src="/portrait.jpg" alt="Chaman Adithya" width={320} height={248}
       className="hero-portrait" style={{ objectFit: "cover" }} />
```

Put image files in the **`public/`** folder (create it if missing) and reference them
with a leading slash, e.g. `/portrait.jpg`.

## Settings (dark mode / density / font)

- **Dark mode** — sun/moon button in the nav.
- **Density & headline font** — the sliders button opens a small popover.

All three are saved to `localStorage` so visitors keep their preference. A tiny inline
script in `layout.tsx` applies the saved theme before first paint to avoid a flash.
