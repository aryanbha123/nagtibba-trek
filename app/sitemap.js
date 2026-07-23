import { guides } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

export default function sitemap() {
  const siteLastModified = new Date("2026-07-23");

  const staticRoutes = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1, lastModified: siteLastModified },
    { url: `${SITE_URL}/guides`, changeFrequency: "monthly", priority: 0.8, lastModified: siteLastModified },
  ];

  const guideRoutes = guides.map((guide) => ({
    url: `${SITE_URL}/${guide.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: new Date(guide.dateModified || guide.datePublished),
  }));

  return [...staticRoutes, ...guideRoutes];
}
