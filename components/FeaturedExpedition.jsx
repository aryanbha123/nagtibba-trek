import {
  MapPin,
  Star,
  ShieldCheck,
  CircleCheck,
  Clock,
  Mountain,
  Footprints,
} from "lucide-react";
import { featuredTrek, site, waLink } from "@/app/data";

export default function FeaturedExpedition() {
  const trek = featuredTrek;
  const wa = waLink(
    `Hello! I'm interested in booking a slot for the ${trek.title}. Please share the upcoming dates and registration details.`,
  );

  return (
    <section
      id="destinations"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="mb-12 border-b border-slate-100 pb-8">
        <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
          Featured Expedition
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
          {trek.title}
        </h2>
        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-10 h-9 text-brand-primary" /> {trek.location}
          </span>
          <span className="flex items-center gap-1 font-semibold text-brand-secondary">
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />{" "}
            {trek.rating} User Rating
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={trek.image}
              alt={trek.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-secondary mb-3">
              Expedition Overview
            </h3>
            <p className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
              {trek.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-primary" /> Trek Highlights
            </h3>
            <ul className="space-y-3">
              {trek.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <CircleCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-xl border border-slate-50 sticky top-28">
          <div className="border-b border-slate-100 pb-6 mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              All-Inclusive Pass
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-brand-secondary">
                {trek.price}
              </span>
              <span className="text-sm text-slate-500 font-medium">
                / per climber
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
              <span className="text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary" /> Duration
              </span>
              <span className="font-semibold text-brand-secondary">
                {trek.duration}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
              <span className="text-slate-500 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-brand-primary" /> Max Altitude
              </span>
              <span className="font-semibold text-brand-secondary">
                {trek.altitude}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
              <span className="text-slate-500 flex items-center gap-2">
                <Footprints className="w-4 h-4 text-brand-primary" /> Distance
              </span>
              <span className="font-semibold text-brand-secondary">
                {trek.distance}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
              <span className="text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary" /> Difficulty
              </span>
              <span className="font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md text-xs">
                {trek.difficulty}
              </span>
            </div>
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/10 tracking-wide mb-4 cursor-pointer"
          >
            Secure My Slot
          </a>
          <p className="text-xs text-center text-slate-400 font-medium">
            Best Booking Window open for:{" "}
            <span className="text-slate-600 font-semibold">
              {trek.bestSeason}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
