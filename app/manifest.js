export default function manifest() {
  return {
    name: "Nag Tibba Treks — Himalayan Weekend Treks from Dehradun",
    short_name: "Nag Tibba Treks",
    description:
      "Book the Nag Tibba Trek — an easy 2-day Himalayan weekend trek from Dehradun with camps, meals, permits and local trek leaders included.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15803d",
    lang: "en-IN",
    categories: ["travel", "sports", "lifestyle"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
