# Nag Tibba Trek

SEO-friendly marketing and booking site for **Nag Tibba Treks**, a small-batch trekking operator running the Nag Tibba (9,915 ft) weekend trek from Dehradun.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Site:** [nagtibbatreks.in](https://nagtibbatreks.in)

## About

This is a rebuild of the Nag Tibba Trek site, ported from the original Vite/React single-page app to **Next.js 15 (App Router)** so every page is server-rendered. The original was a client-only SPA, so search engines and social scrapers saw an empty `<div id="root">`. This version statically pre-renders the full HTML and ships proper metadata and structured data, so it is indexable and shareable out of the box.

## Features

- **Single-page landing** with Hero, Featured Expedition, Devalsari add-on, Tour Packages, Itinerary, Gallery (images and video), Location Map, FAQs and Footer sections
- **Long-form guide pages** under `/guides`: complete trek guide, how to reach Nag Tibba, snow trek, history, Devalsari and trek inclusions
- **Booking via WhatsApp / Instagram**, with a prefilled WhatsApp message
- **SEO metadata**: title templates, description, Open Graph, Twitter card, canonical URLs, theme color
- **JSON-LD structured data**: Organization, WebSite, Product/Offer, FAQPage, Article, BreadcrumbList, TouristAttraction and more
- **Generated `sitemap.xml`, `robots.txt` and web manifest** via Next.js metadata routes
- **Single content source**: all copy, pricing, itinerary, FAQs, gallery items and contact details live in `app/data.js`

## Tech Stack

- Next.js 15 (App Router, JavaScript)
- React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- lucide-react icons
- Montserrat via `next/font`

## Project Structure

```
app/
  layout.jsx            # Root layout, SEO metadata, font
  page.jsx              # Home page (composes the section components)
  data.js               # All site content
  sitemap.js, robots.js, manifest.js
  guides/               # Guides index
  nag-tibba-trek-guide/ how-to-reach-nag-tibba/ nag-tibba-snow-trek/
  nag-tibba-history/    devalsari/              nag-tibba-trek-inclusions/
components/             # One file per section, plus GuideShell and JSON-LD components
public/assets/          # Images (webp) and videos (mp4)
```

## Getting Started

**Prerequisites:** Node.js 18.18+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

No environment variables are required.

## Editing Content

All copy, pricing, itinerary, FAQs, gallery items and contact details live in `app/data.js`. Edit there and every section updates. New guide pages are registered in the `guides` array in `app/data.js` (which also feeds the sitemap) and get a matching `app/<slug>/page.jsx`.

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
