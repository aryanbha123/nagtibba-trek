import { guides } from "@/app/data";

const SITE_URL = "https://nagtibbatreks.in";

export default function sitemap() {
  const lastModified = new Date("2026-07-15");

  const staticRoutes = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/guides`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const guideRoutes = guides.map((guide) => ({
    url: `${SITE_URL}/${guide.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...guideRoutes].map((route) => ({
    ...route,
    lastModified,
  }));
}
