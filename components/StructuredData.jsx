// Centralised JSON-LD structured data for rich results in Google Search.
// Rendered once in the root layout. All content is derived from app/data.js so
// the markup stays in sync with the visible page.
import { site, featuredTrek, packages, faqs, navLinks, gallery, mapPoints } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

// "₹4,000" -> "4000"
const toNumber = (value) => String(value).replace(/[^\d]/g, "");

const galleryImages = gallery
  .filter((item) => item.type === "image")
  .slice(0, 8)
  .map((item) => `${SITE_URL}${item.src}`);

const packagePrices = packages.map((pkg) => Number(toNumber(pkg.price)));
const lowPrice = String(Math.min(...packagePrices));
const highPrice = String(Math.max(...packagePrices));

const summit = mapPoints.find((point) => point.id === "summit");
const [summitLat, summitLng] = (summit?.directionsQuery ?? "30.5861111,78.1513889").split(",");

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
    // The homepage
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Nag Tibba Trek — 2 Days / 1 Night from Dehradun | Book Your Slot",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}${featuredTrek.image}`,
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
    },
    // The trek as a bookable product (drives price + rating rich results)
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#trek`,
      name: "Nag Tibba Trek — 2 Days / 1 Night",
      description: featuredTrek.description,
      image: galleryImages,
      brand: { "@id": `${SITE_URL}/#organization` },
      category: "Himalayan Trekking Tour",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: featuredTrek.rating,
        reviewCount: featuredTrek.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice,
        highPrice,
        offerCount: String(packages.length),
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#packages`,
        offers: packages.map((pkg) => ({
          "@type": "Offer",
          name: pkg.name,
          description: pkg.tagline,
          price: toNumber(pkg.price),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#packages`,
          priceValidUntil: "2026-12-31",
          seller: { "@id": `${SITE_URL}/#organization` },
        })),
      },
    },
    // The mountain itself
    {
      "@type": "TouristAttraction",
      "@id": `${SITE_URL}/#attraction`,
      name: "Nag Tibba (Serpent's Peak)",
      description:
        "Nag Tibba, at 9,915 ft (3,022 m), is the highest peak in the Nag Tibba range of the Garhwal Himalayas, offering panoramic views of Swargarohini, Bandarpoonch, Srikanth and the Gangotri range.",
      image: `${SITE_URL}${featuredTrek.image}`,
      touristType: ["Trekkers", "Adventure travellers", "Beginners", "Families"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: summitLat,
        longitude: summitLng,
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      isAccessibleForFree: false,
    },
    // FAQ rich snippets
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    // Breadcrumbs
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
    // Site navigation (sitelinks)
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#navigation`,
      name: "Primary navigation",
      itemListElement: navLinks.map((link, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: link.label,
        url: `${SITE_URL}/${link.href}`,
      })),
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
