import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guides } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

export const metadata = {
  title: { absolute: "Nag Tibba Trek Guides & Travel Tips | Nag Tibba Treks" },
  description:
    "Guides, travel tips and local stories for the Nag Tibba Trek — itinerary and cost, how to reach the base, winter snow treks, the peak's history and the Devalsari forest.",
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/guides`,
    title: "Nag Tibba Trek Guides & Travel Tips",
    description:
      "Everything you need to plan the Nag Tibba Trek — itinerary, cost, how to reach, winter snow treks, and the history of the peak and Devalsari.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/guides#collection`,
      url: `${SITE_URL}/guides`,
      name: "Nag Tibba Trek Guides",
      description:
        "Guides and travel tips for planning the Nag Tibba Trek in the Garhwal Himalayas.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${guide.slug}`,
        name: guide.title,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      ],
    },
  ],
};

export default function GuidesIndex() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500">
            <li>
              <a href="/" className="hover:text-brand-primary transition-colors">
                Home
              </a>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
            <li className="text-slate-700 font-medium" aria-current="page">
              Guides
            </li>
          </ol>
        </nav>

        <header className="max-w-2xl mb-12">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-3">
            Trek Guides
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight leading-tight mb-4">
            Everything you need to plan your Nag Tibba Trek
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Practical guides and local stories — from the day-by-day itinerary and costs to
            how to reach the base, winter snow treks, and the history of the peak and the
            Devalsari forest.
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <a
                href={`/${guide.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all"
              >
                <span className="text-brand-primary text-[0.65rem] font-bold uppercase tracking-widest mb-2">
                  {guide.category}
                </span>
                <h2 className="text-lg font-black text-brand-secondary leading-snug tracking-tight group-hover:text-brand-primary transition-colors mb-2">
                  {guide.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {guide.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                  Read guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
