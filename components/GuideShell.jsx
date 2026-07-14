// Shared shell for long-form guide / blog pages. Renders the site chrome,
// breadcrumbs, the article body, a booking CTA, related guides and the
// Article + BreadcrumbList JSON-LD for rich results.
import { ChevronRight, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site, waLink, guides } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

export default function GuideShell({
  slug,
  title,
  description,
  category,
  datePublished,
  dateModified,
  image,
  children,
}) {
  const wa = waLink(site.bookingChannels.whatsappDefaultMessage);
  const related = guides.filter((guide) => guide.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        image: `${SITE_URL}${image}`,
        datePublished,
        dateModified: dateModified || datePublished,
        articleSection: category,
        inLanguage: "en-IN",
        author: {
          "@type": "Organization",
          name: site.companyName,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: site.companyName,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/apple-touch-icon.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/${slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/${slug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <li>
              <a href="/" className="hover:text-brand-primary transition-colors">
                Home
              </a>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
            <li>
              <a href="/guides" className="hover:text-brand-primary transition-colors">
                Guides
              </a>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
            <li className="text-slate-700 font-medium truncate max-w-[16rem]" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-3">
            {category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">{description}</p>
        </header>

        {/* Body */}
        <article className="article-prose">{children}</article>

        {/* Booking CTA */}
        <aside className="mt-14 bg-brand-secondary rounded-2xl px-6 sm:px-8 py-8 text-center">
          <h2 className="text-white text-xl sm:text-2xl font-black tracking-tight mb-2">
            Ready to trek Nag Tibba?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Small batches, local trek leaders, camps and meals included. Message us for
            available weekends and current pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a
              href="/#packages"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </aside>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="mt-14" aria-label="Related guides">
            <h2 className="text-lg font-black text-brand-secondary tracking-tight mb-5">
              Keep reading
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {related.map((guide) => (
                <li key={guide.slug}>
                  <a
                    href={`/${guide.slug}`}
                    className="group block h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all"
                  >
                    <span className="text-brand-primary text-[0.65rem] font-bold uppercase tracking-widest">
                      {guide.category}
                    </span>
                    <span className="mt-1.5 block text-sm font-bold text-brand-secondary leading-snug group-hover:text-brand-primary transition-colors">
                      {guide.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
