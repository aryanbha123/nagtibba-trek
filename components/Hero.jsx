"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { hero } from "@/app/data";

export default function Hero() {
  const scrollToWhatsapp = (e) => {
    const el = document.getElementById("whatsapp-cta");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "instant", block: "center" });
    }
    window.dispatchEvent(new CustomEvent("highlight-whatsapp-cta"));
  };

  return (
    <header className="relative min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        {hero.backgroundImage && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={hero.backgroundImage}
            alt="Destination Backdrop"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-fade-in"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {hero.badgeText && (
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              {hero.badgeText}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            {hero.headlineMain}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            {hero.headlineSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 group"
            >
              {hero.primaryCta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={hero.secondaryCta.href}
              onClick={scrollToWhatsapp}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <Calendar className="w-5 h-5 text-brand-primary" />
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-neutral to-transparent z-10" />
    </header>
  );
}
