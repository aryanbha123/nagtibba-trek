import { Montserrat } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nagtibbatreks.in"),
  title: {
    default: "Nag Tibba Trek — 2 Days / 1 Night from Dehradun | Book Your Slot",
    template: "%s | Nag Tibba Treks",
  },
  description:
    "Trek Nag Tibba (9,915 ft), the Serpent's Peak in the Garhwal Himalayas. An easy 2-day weekend trek from Dehradun with camps, meals, permits and local trek leaders included. Bookings open September to May.",
  applicationName: "Nag Tibba Treks",
  authors: [{ name: "Nag Tibba Treks" }],
  creator: "Nag Tibba Treks",
  publisher: "Nag Tibba Treks",
  category: "travel",
  keywords: [
    "Nag Tibba Trek",
    "Nag Tibba Trek booking",
    "Nag Tibba Trek package",
    "Dehradun trek",
    "Garhwal Himalayas",
    "weekend trek Uttarakhand",
    "Nag Tibba booking",
    "Devalsari",
    "Munglori Village",
    "Himalayan camping",
    "beginner trek near Mussoorie",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "m5PfA5ZtPWYJ7cAuLLVkuiux0IXiYh5K7epEnW2Fkmc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    url: "https://nagtibbatreks.in",
    siteName: "Nag Tibba Treks",
    locale: "en_IN",
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
    <html lang="en-IN" className={montserrat.variable}>
      <body className="selection:bg-brand-primary/30">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
