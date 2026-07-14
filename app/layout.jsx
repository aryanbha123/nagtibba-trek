import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gigg-three.vercel.app"),
  title: "Nag Tibba Trek — 2 Days / 1 Night from Dehradun | Book Your Slot",
  description:
    "Trek Nag Tibba (9,915 ft), the Serpent's Peak in the Garhwal Himalayas. An easy 2-day weekend trek from Dehradun with camps, meals, permits and local trek leaders included. Bookings open September to May.",
  keywords: [
    "Nag Tibba Trek",
    "Dehradun trek",
    "Garhwal Himalayas",
    "weekend trek Uttarakhand",
    "Nag Tibba booking",
    "Devalsari",
    "Munglori Village",
    "Himalayan camping",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Nag Tibba Trek — 2 Days / 1 Night from Dehradun",
    description:
      "Easy Himalayan weekend trek to 9,915 ft. All-inclusive: camps, meals, permits and experienced local trek leaders. Crowd-free trails, bookings open.",
    images: [
      {
        url: "/assets/hero-sunset-BmWPgdl6.webp",
        width: 1920,
        height: 1440,
        alt: "Sunset above a sea of clouds at Nag Tibba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nag Tibba Trek — 2 Days / 1 Night from Dehradun",
    description:
      "Easy Himalayan weekend trek to 9,915 ft. All-inclusive: camps, meals, permits and experienced local trek leaders. Crowd-free trails, bookings open.",
    images: ["/assets/hero-sunset-BmWPgdl6.webp"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#15803d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="selection:bg-brand-primary/30">{children}</body>
    </html>
  );
}
