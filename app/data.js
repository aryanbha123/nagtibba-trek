// All site content, ported from the original Nag Tibba Trek site.

export const site = {
  companyName: "Nag Tibba Treks",
  logoText: "Nag Tibba Treks",
  tagline: "Small-batch Himalayan treks led by local guides",
  contact: {
    phone: "+91 7037213113",
    email: "nitinbhandari7252@gmail.com",
    address: "Dehradun",
  },
  bookingChannels: {
    whatsappNumber: "917037213113",
    whatsappDefaultMessage:
      "Hello! I'm interested in booking a slot for the Nag Tibba Trek. Could you please share availability and next steps?",
    instagramUsername: "_nagtibba.devalsari",
  },
  socials: {
    instagram: "https://www.instagram.com/_nagtibba.devalsari",
    facebook: "",
    twitter: "",
  },
};

export const navLinks = [
  { label: "Overview", href: "/#destinations" },
  { label: "Tour Packages", href: "/#packages" },
  { label: "Itinerary", href: "/#itinerary" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Guides", href: "/guides" },
  { label: "FAQs", href: "/#faqs" },
];

// Long-form SEO content pages (guides / blog). Each maps to app/<slug>/page.jsx.
export const guides = [
  {
    slug: "nag-tibba-trek-guide",
    title: "Nag Tibba Trek: The Complete Guide",
    navLabel: "Complete Trek Guide",
    metaTitle: "Nag Tibba Trek Guide: Itinerary, Cost & Best Time (2026)",
    description:
      "Everything you need to plan the Nag Tibba Trek — difficulty, best time to visit, a day-by-day itinerary, cost, packing list and how to book your slot from Dehradun.",
    category: "Trek Guide",
    datePublished: "2026-07-15",
    image: "/assets/himalayan-panorama-CZQDbPIm.webp",
  },
  {
    slug: "how-to-reach-nag-tibba",
    title: "How to Reach Nag Tibba from Delhi, Dehradun & Mussoorie",
    navLabel: "How to Reach Nag Tibba",
    metaTitle: "How to Reach Nag Tibba from Delhi, Dehradun & Mussoorie",
    description:
      "Full travel guide to reaching the Nag Tibba base at Munglori Village — routes from Delhi, Dehradun and Mussoorie by train, bus, taxi and self-drive, with distances and times.",
    category: "Travel",
    datePublished: "2026-07-15",
    image: "/assets/ridge-sunset-Bgh72GT2.webp",
  },
  {
    slug: "nag-tibba-snow-trek",
    title: "Nag Tibba Snow Trek: A Winter Guide",
    navLabel: "Snow / Winter Trek",
    metaTitle: "Nag Tibba Snow Trek: Winter Guide, Best Time & Tips",
    description:
      "Planning the Nag Tibba trek in the snow? Here is the best time for snowfall, what the winter trail is like, the gear you need and safety tips for a January–February summit.",
    category: "Seasonal",
    datePublished: "2026-07-15",
    image: "/assets/hero-sunset-BmWPgdl6.webp",
  },
  {
    slug: "nag-tibba-history",
    title: "The History of Nag Tibba: The Serpent's Peak",
    navLabel: "History of Nag Tibba",
    metaTitle: "Nag Tibba History: The Serpent's Peak & Nag Devta Temple",
    description:
      "The story behind Nag Tibba — what the name means, the Nag Devta serpent-god temple near the summit, and why the peak has been sacred to Garhwali shepherds for generations.",
    category: "History & Culture",
    datePublished: "2026-07-15",
    image: "/assets/summit-trident-kvhwwvfs.webp",
  },
  {
    slug: "devalsari",
    title: "Devalsari: Deodar Forests, Temple & Eco-Tourism",
    navLabel: "Devalsari Experience",
    metaTitle: "Devalsari: Deodar Forest, Shiva Temple & Eco-Tourism Guide",
    description:
      "Discover Devalsari in the Aglar Valley — its ancient deodar forest, the Devalsari Mahadev temple, rich Himalayan birdlife and how it pairs with the Nag Tibba Trek.",
    category: "History & Culture",
    datePublished: "2026-07-15",
    image: "/assets/devalsari-temple-C4krj1hR.webp",
  },
];

// WhatsApp deep-link helper.
export const waLink = (text) =>
  `https://wa.me/${site.bookingChannels.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const hero = {
  badgeText: "✨ Bookings Open - Reserve Your Trek Today!",
  headlineMain: "Beyond the Ordinary Route.",
  headlineSub:
    "🌿 Crowd-Free Trails – Enjoy peaceful, clean trails away from the tourist rush.",
  primaryCta: { label: "Explore Packages", href: "#packages" },
  secondaryCta: { label: "Custom Itinerary", href: "#contact" },
  backgroundImage: "/assets/hero-sunset-BmWPgdl6.webp",
};

export const featuredTrek = {
  id: 1,
  title: "Nag Tibba",
  location: "Uttarakhand, India",
  price: "₹ 4,000",
  duration: "2 Days / 1 Night",
  altitude: "9,915ft (3,022m)",
  distance: "8-10km",
  difficulty: "Easy",
  rating: "4.5",
  reviewCount: "120",
  bestSeason: "September to May",
  snowSeason: "January to February",
  type: "Forest and Mountains Trails",
  base: "Munglori Village",
  image: "/assets/himalayan-panorama-CZQDbPIm.webp",
  description:
    "Located near Mussoorie, the Nag Tibba Trek is one of Uttarakhand's most popular weekend getaways, reaching an altitude of 9,915 ft (3,022 m) in the Garhwal Himalayas. From the summit, trekkers are rewarded with breathtaking panoramic views of the Greater Himalayan ranges, including the majestic peaks of Swargarohini, Bandarpoonch, Srikanth, and the Gangotri range. Starting from Munglori Village, this beginner-friendly trail winds through dense oak and rhododendron forests, scenic meadows, and peaceful mountain landscapes. Whether you're a first-time trekker or an experienced adventurer seeking a relaxing weekend escape, Nag Tibba offers an unforgettable trekking and alpine camping experience.",
  highlights: [
    "Stunning views of the surrounding mountains and valleys",
    "Relatively easy trek suitable for beginners and families",
    "Religious significance for the locals",
  ],
  whatsIncluded: [
    "Accommodation",
    "Fresh mountain meals",
    "Experienced local trek leaders & support staff",
    "Sleeping bags, liners & trekking mats",
    "Shared Alpine Camps",
    "Permits",
  ],
};

export const devalsari = {
  title: "Devalsari Experience",
  location: "Tehri Garhwal, Uttarakhand",
  rating: "4.7",
  altitude: "5,650ft (1,722m)",
  distance: "4-5km nature walk",
  difficulty: "Very Easy",
  bestSeason: "March to June",
  type: "Deodar Forest & Village Trails",
  base: "Devalsari Village",
  image: "/assets/devalsari-temple-C4krj1hR.webp",
  includedNote: "Included with our group packages — no extra booking needed.",
  description:
    "Enhance your Nag Tibba trek with a visit to Devalsari, a hidden eco-tourism destination near Munglori Village (Thatyur). Located at 1,722 m in the pristine Aglar Valley, it's an ideal half-day trip, cultural visit, or easy acclimatization walk before the Nag Tibba summit.\n\n Tucked away in the Aglar River Valley, Devalsari is a quiet forest hamlet famous for its centuries-old deodar groves, an ancient Shiva temple, and some of the richest birdlife in the Garhwal foothills. As part of our group packages, you'll spend a relaxed half-day here before the Nag Tibba climb—walking shaded village trails, sharing tea with local families, and learning how the community protects these forests. It's the slow, soulful counterpart to the summit push: less about altitude, more about the people and woods that make this valley special.",
  highlights: [
    "Walk through one of Garhwal's oldest deodar (Himalayan cedar) forests",
    "Visit the ancient Devalsari Mahadev temple in the forest clearing",
    "Spot Himalayan birds & butterflies with a local naturalist",
    "Village walk with tea & snacks hosted by local families",
  ],
};

export const packages = [
  {
    id: 1,
    name: "Weekend Group Trek",
    tagline: "Join a fixed departure batch",
    price: "₹4,000",
    priceUnit: "per trekker",
    popular: false,
    features: [
      "Fixed weekend departures",
      "Shared alpine camps & meals",
      "Certified trek leader & support staff",
      "Forest permits included",
      "Batch size up to 15 trekkers",
    ],
  },
  {
    id: 2,
    name: "Premium Small Batch",
    tagline: "Smaller group, bigger experience",
    price: "₹6,500",
    priceUnit: "per trekker",
    popular: true,
    features: [
      "Max 8 trekkers per batch",
      "Pickup & drop from Dehradun",
      "Premium camping gear & thicker mats",
      "Bonfire evening at the campsite",
      "Summit photography included",
      "Includes Devalsari Experience",
      "Forest permits included",
    ],
  },
  {
    id: 3,
    name: "Private Expedition",
    tagline: "Your dates, your pace, your people",
    price: "₹8,000",
    priceUnit: "per trekker",
    popular: false,
    features: [
      "Fully private group — friends & family",
      "Flexible dates & custom itinerary",
      "Dedicated private guide",
      "Meal preferences accommodated",
      "Includes Devalsari Experience",
      "Doorstep pickup within Dehradun",
    ],
  },
];

export const itinerary = [
  {
    day: 1,
    title: "Munglori Village → Nag Tibba Summit Base Camp",
    schedule: [
      "09:00 AM – Trek Begins from Munglori Village",
      "8–10 km Scenic Forest Trek (Approx. 4–5 Hours)",
      "Arrival: Nag Tibba Summit Base Camp & Tent Check-in",
      "Lunch",
      "Evening Tea & Snacks",
      "Enjoy Sunset Views (Weather Permitting)",
      "Bonfire (Weather Permitting)",
      "Dinner",
      "Overnight Stay at Summit Base Camp",
    ],
  },
  {
    day: 2,
    title: "Sunrise, Summit & Return",
    schedule: [
      "Witness a Beautiful Himalayan Sunrise",
      "Explore Nag Tibba Summit",
      "Photography & Panoramic Mountain Views",
      "Breakfast at Base Camp",
      "Trek Back to Munglori Village (Approx. 3–4 Hours)",
      "Trek Concludes",
    ],
  },
];

export const gallery = [
  {
    id: 1,
    type: "image",
    src: "/assets/summit-trident-kvhwwvfs.webp",
    width: 1200,
    height: 1600,
    caption: "The trident at Nag Tibba summit",
    location: "Summit, 9,915 ft",
  },
  {
    id: 2,
    type: "image",
    src: "/assets/hero-sunset-BmWPgdl6.webp",
    width: 1920,
    height: 1440,
    caption: "Sunset above a sea of clouds",
    location: "Summit Base Camp",
  },
  {
    id: 3,
    type: "image",
    src: "/assets/himalayan-panorama-CZQDbPIm.webp",
    width: 1170,
    height: 932,
    caption: "Snow-capped Garhwal ranges at dawn",
    location: "Summit viewpoint",
  },
  {
    id: 4,
    type: "image",
    src: "/assets/ridge-sunset-Bgh72GT2.webp",
    width: 1200,
    height: 1600,
    caption: "Soaking in the last light on the ridge",
    location: "Ridge trail",
  },
  {
    id: 5,
    type: "image",
    src: "/assets/devalsari-temple-C4krj1hR.webp",
    width: 736,
    height: 981,
    caption: "",
    location: "Devalsari Temple",
  },
  { id: 6, type: "image", src: "/assets/trek-02-DZACXOsw.webp", width: 1482, height: 1600, caption: "", location: "" },
  { id: 7, type: "image", src: "/assets/trek-03-CaZZOcC3.webp", width: 1600, height: 2133, caption: "", location: "" },
  { id: 8, type: "image", src: "/assets/trek-04-Bzbmp4BN.webp", width: 1600, height: 2133, caption: "", location: "" },
  { id: 9, type: "image", src: "/assets/trek-05-CIEP47__.webp", width: 1600, height: 2133, caption: "", location: "" },
  { id: 10, type: "image", src: "/assets/trek-06-68FgljHR.webp", width: 1600, height: 900, caption: "", location: "" },
  { id: 11, type: "image", src: "/assets/trek-07-PbyDNrI0.webp", width: 960, height: 1280, caption: "", location: "" },
  { id: 12, type: "image", src: "/assets/trek-08-BdXfu6t9.webp", width: 960, height: 1280, caption: "", location: "" },
  { id: 13, type: "image", src: "/assets/trek-09-CfqOCtyi.webp", width: 1600, height: 1067, caption: "", location: "" },
  { id: 14, type: "image", src: "/assets/trek-10-BJZKO6dw.webp", width: 1600, height: 1067, caption: "", location: "" },
  { id: 15, type: "image", src: "/assets/trek-11-DLr4YcUt.webp", width: 1600, height: 1067, caption: "", location: "" },
  { id: 16, type: "video", src: "/assets/trek-video-01-CegzriSa.mp4", width: 464, height: 832, caption: "", location: "" },
  { id: 17, type: "video", src: "/assets/trek-video-02-BQa9B-sq.mp4", width: 832, height: 464, caption: "", location: "" },
  { id: 18, type: "video", src: "/assets/trek-video-03-DUIN6MG_.mp4", width: 464, height: 832, caption: "", location: "" },
  { id: 19, type: "video", src: "/assets/trek-video-04-Amx8NWrh.mp4", width: 832, height: 464, caption: "", location: "" },
  { id: 20, type: "video", src: "/assets/trek-video-05-DldEgsUS.mp4", width: 1024, height: 576, caption: "", location: "" },
  { id: 21, type: "video", src: "/assets/trek-video-06-T5OF4aFx.mp4", width: 720, height: 1280, caption: "", location: "" },
  { id: 22, type: "video", src: "/assets/trek-video-07-FL3uTg4h.mp4", width: 720, height: 1280, caption: "", location: "" },
];

export const galleryFilters = [
  { key: "all", label: "All" },
  { key: "image", label: "Photos" },
  { key: "video", label: "Videos" },
];

export const mapPoints = [
  {
    id: "base",
    label: "Base Village",
    name: "Munglori Village",
    detail: "Trek starting point — roughly a 3-hour drive from Mussoorie via Thatyur.",
    query: "Munglori, Uttarakhand",
    directionsQuery: "30.5492617,78.1539588",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59631.427736207224!2d78.17752797119788!3d30.534141448285386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908c5573323be71%3A0xc11db0c9d621c9ca!2sNag%20Devta%20Mandir%20Munglauri!5e0!3m2!1sen!2sin!4v1783860211080!5m2!1sen!2sin",
  },
  {
    id: "summit",
    label: "Summit",
    name: "Nag Tibba Peak",
    detail: "The Serpent's Peak at 9,915 ft — the highest point of the trek.",
    query: "Nag Tibba, Uttarakhand",
    directionsQuery: "30.5861111,78.1513889",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13738.786191920472!2d78.1513889!3d30.586110650000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908c5abdd38b5a9%3A0xd9c2fb3b7e664514!2sNag%20Tibba!5e0!3m2!1sen!2sin!4v1783861013231!5m2!1sen!2sin",
  },
];

export const faqs = [
  {
    question: "Is the Nag Tibba Trek suitable for beginners?",
    answer:
      "Yes, the Nag Tibba Trek is considered an easy-to-moderate trek, making it perfect for beginners, families, and first-time trekkers.",
  },
  {
    question: "What is the duration of the trek?",
    answer: "The trek is typically completed in 2 days and 1 night.",
  },
  {
    question: "What is the total trekking distance?",
    answer:
      "The total distance for the round trip is approximately 8–10 km, depending on the specific route taken.",
  },
  {
    question: "What is the best time to visit Nag Tibba?",
    answer:
      "The best season to visit is from September to May. If you are looking to experience the snow season, the best time is during January and February.",
  },
  {
    question: "Where does the trek start?",
    answer:
      "The trek starts from Munglori Village, which serves as our dedicated base camp and is easily accessible by road from Mussoorie and Dehradun.",
  },
  {
    question: "Do I need a guide for the trek?",
    answer:
      "While the trail is manageable, we recommend trekking with an experienced local guide from our team to ensure your safety, assist with navigation, and provide deeper insights into the Himalayan landscape.",
  },
  {
    question: "Is camping allowed on the trek?",
    answer: "Yes, camping is allowed at designated campsites along the route.",
  },
  {
    question: "What are the essential items to carry?",
    answer:
      "You should carry sturdy trekking shoes, a 30–40L backpack, warm layers (fleece/jacket), a waterproof jacket, a water bottle, sunscreen, a hat, and a basic first-aid kit.",
  },
  {
    question: "Is there mobile network coverage on the trek?",
    answer:
      "Mobile network coverage can be erratic throughout the trail, so it is advisable to inform your family of your plans beforehand.",
  },
  {
    question: "Can I visit Devalsari along with the Nag Tibba Trek?",
    answer:
      "Yes. Devalsari is located close to our base area near Munglori Village, making it an excellent add-on to your Nag Tibba Trek. It can be explored before or after the trek, depending on your itinerary.",
  },
  {
    question: "Is Devalsari included in every Nag Tibba Trek package?",
    answer:
      "No. Devalsari is included only in selected Nag Tibba & Devalsari Trek packages. Please check the package details or contact us to choose the itinerary that includes this experience.",
  },
];
