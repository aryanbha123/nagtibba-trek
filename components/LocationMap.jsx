"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { mapPoints } from "@/app/data";

export default function LocationMap() {
  const [active, setActive] = useState(mapPoints[0]);

  const embedSrc = active.embedUrl
    ? active.embedUrl
    : `https://maps.google.com/maps?q=${encodeURIComponent(active.query)}&z=13&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    active.directionsQuery || active.query,
  )}`;

  return (
    <section
      id="location"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="mb-10">
        <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
          Find Us on the Map
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
          Where the Trek Happens
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 flex flex-col gap-4">
          {mapPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => setActive(point)}
              className={`text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                active.id === point.id
                  ? "border-brand-primary bg-brand-primary/5 shadow-md"
                  : "border-slate-100 bg-white shadow-sm hover:border-slate-200"
              }`}
            >
              <span
                className={`text-xs font-bold uppercase tracking-widest block mb-1 ${
                  active.id === point.id ? "text-brand-primary" : "text-slate-400"
                }`}
              >
                {point.label}
              </span>
              <span className="flex items-center gap-2 text-lg font-bold text-brand-secondary">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />{" "}
                {point.name}
              </span>
              <span className="block text-sm text-slate-500 mt-2 leading-relaxed">
                {point.detail}
              </span>
            </button>
          ))}

          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-brand-primary/10"
          >
            <Navigation className="w-4 h-4" /> Get Directions to {active.name}
          </a>
        </div>

        <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-100 min-h-[320px]">
          <iframe
            key={active.id}
            src={embedSrc}
            title={`Map of ${active.name}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[320px] sm:min-h-[420px] border-0"
          />
        </div>
      </div>
    </section>
  );
}
