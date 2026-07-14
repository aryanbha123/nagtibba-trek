// JSON-LD specific to the homepage. Rendered only from app/page.jsx so the
// Product / FAQ / Breadcrumb data does not leak onto guide pages. Site-wide
// entities (Organization, WebSite, navigation) live in components/StructuredData.jsx.
import { site, featuredTrek, packages, faqs, gallery, mapPoints } from "@/app/data";

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

export default function HomeStructuredData() {
  const graph = [
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
