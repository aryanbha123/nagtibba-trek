const SITE_URL = "https://nagtibbatreks.in";

export default function sitemap() {
  const lastModified = new Date("2026-07-15");

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
