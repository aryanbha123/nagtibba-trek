// Site-wide JSON-LD rendered on every page via the root layout.
// Only entities that are true for the whole site live here (Organization,
// WebSite, primary navigation). Page-specific structured data lives with each
// page: the homepage uses components/HomeStructuredData.jsx and guide pages
// emit their own Article + BreadcrumbList from components/GuideShell.jsx.
import { site, featuredTrek, navLinks, guides } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

export default function StructuredData() {
  const graph = [
    // The business
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: site.companyName,
      url: SITE_URL,
      description: site.tagline,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-touch-icon.png`,
        width: 180,
        height: 180,
      },
      image: `${SITE_URL}${featuredTrek.image}`,
      telephone: site.contact.phone,
      email: site.contact.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Place",
        name: "Nag Tibba, Garhwal Himalayas, Uttarakhand",
      },
      sameAs: [site.socials.instagram, site.socials.facebook, site.socials.twitter].filter(Boolean),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: featuredTrek.rating,
        reviewCount: featuredTrek.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
    },
    // The site
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.companyName,
      description:
        "Book the Nag Tibba Trek — an easy 2-day Himalayan weekend trek from Dehradun with camps, meals, permits and local trek leaders included.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    // Primary navigation (sitelinks)
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#navigation`,
      name: "Primary navigation",
      itemListElement: [
        ...navLinks.map((link, index) => ({
          "@type": "SiteNavigationElement",
          position: index + 1,
          name: link.label,
          // navLinks hrefs are root-relative (e.g. "/#packages", "/guides").
          url: `${SITE_URL}${link.href}`,
        })),
        ...guides.map((guide, index) => ({
          "@type": "SiteNavigationElement",
          position: navLinks.length + index + 1,
          name: guide.title,
          url: `${SITE_URL}/${guide.slug}`,
        })),
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
