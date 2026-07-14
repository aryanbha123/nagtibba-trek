import {
  MapPin,
  Star,
  TreePine,
  CircleCheck,
  Gift,
  Mountain,
  Footprints,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { devalsari } from "@/app/data";

export default function Devalsari() {
  const e = devalsari;

  return (
    <section id="devalsari" className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 border-b border-slate-100 pb-8">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
            Bundled Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
            {e.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-brand-primary" /> {e.location}
            </span>
            <span className="flex items-center gap-1 font-semibold text-brand-secondary">
              <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />{" "}
              {e.rating} User Rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="w-full h-full object-cover object-[center_75%]"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">
                About Devalsari
              </h3>
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
                {e.description}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-brand-secondary mb-4 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-brand-primary" /> Experience
                Highlights
              </h3>
              <ul className="space-y-3">
                {e.highlights.map((h, i) => (
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
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Part of Your Trek
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-bold px-4 py-2 rounded-xl text-sm">
                <Gift className="w-4 h-4" /> Included in Group Packages
              </div>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {e.includedNote}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                <span className="text-slate-500 flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-brand-primary" /> Altitude
                </span>
                <span className="font-semibold text-brand-secondary">
                  {e.altitude}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                <span className="text-slate-500 flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-brand-primary" /> Trail
                </span>
                <span className="font-semibold text-brand-secondary">
                  {e.distance}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                <span className="text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" /> Difficulty
                </span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs">
                  {e.difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                <span className="text-slate-500 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-primary" /> Best Season
                </span>
                <span className="font-semibold text-brand-secondary">
                  {e.bestSeason}
                </span>
              </div>
            </div>

            <a
              href="#packages"
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/10 tracking-wide mb-4 cursor-pointer group"
            >
              View Group Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-center text-slate-400 font-medium">
              Base village:{" "}
              <span className="text-slate-600 font-semibold">{e.base}</span> ·{" "}
              {e.type}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
