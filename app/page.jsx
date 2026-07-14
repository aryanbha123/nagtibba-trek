import HomeStructuredData from "@/components/HomeStructuredData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedExpedition from "@/components/FeaturedExpedition";
import Devalsari from "@/components/Devalsari";
import Packages from "@/components/Packages";
import Itinerary from "@/components/Itinerary";
import Gallery from "@/components/Gallery";
import LocationMap from "@/components/LocationMap";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/30">
      <HomeStructuredData />
      <Navbar />
      <Hero />
      <FeaturedExpedition />
      <Devalsari />
      <Packages />
      <Itinerary />
      <Gallery />
      <LocationMap />
      <Faqs />
      <Footer />
    </div>
  );
}
