# Nag Tibba Trek — Next.js

SEO-friendly rebuild of the Nag Tibba Trek site, ported from the original Vite/React
single-page app to **Next.js 15 (App Router)** so every page is server-rendered.

## Why Next.js
The original was a client-only React SPA — search engines and social scrapers saw an
empty `<div id="root">`. This version statically pre-renders the full HTML, adds proper
metadata (title, description, Open Graph, Twitter card, canonical, theme-color) and
FAQ structured data (JSON-LD), so it's indexable and shareable out of the box.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build for production
```bash
npm run build
npm start
```

## Stack
- Next.js 15 (App Router, JavaScript)
- Tailwind CSS v4
- lucide-react icons
- Montserrat via `next/font`

## Structure
- `app/` — layout (SEO metadata + font), page, global styles, `data.js` (all content)
- `components/` — one file per section (Navbar, Hero, FeaturedExpedition, Devalsari,
  Packages, Itinerary, Gallery, LocationMap, Faqs, Footer)
- `public/assets/` — images and videos

## Editing content
All copy, pricing, itinerary, FAQs, gallery items and contact details live in
`app/data.js` — edit there and every section updates.
