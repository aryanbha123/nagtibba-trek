"use client";

import { useEffect, useState } from "react";
import {
  Camera,
  Play,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { gallery, galleryFilters } from "@/app/data";

const INITIAL = 8;

function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  const hasMany = items.length > 1;
  const prev = () => onNavigate((index - 1 + items.length) % items.length);
  const next = () => onNavigate((index + 1) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery viewer"
        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>
      <span className="absolute top-6 left-6 z-20 text-white/60 text-sm font-medium tracking-wider">
        {index + 1} / {items.length}
      </span>
      {hasMany && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous media"
            className="absolute left-2 sm:left-6 z-20 text-white/70 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next media"
            className="absolute right-2 sm:right-6 z-20 text-white/70 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}
      <figure
        className="relative max-w-5xl w-full mx-4 sm:mx-16 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.id}
            src={item.src}
            width={item.width}
            height={item.height}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[80svh] object-contain rounded-xl shadow-2xl bg-black"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={item.id}
            src={item.src}
            alt={item.caption}
            width={item.width}
            height={item.height}
            className="w-full max-h-[80svh] object-contain rounded-xl shadow-2xl"
          />
        )}
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1">
          <span className="text-white font-medium text-sm sm:text-base">
            {item.caption}
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-1.5 text-white/60 text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5" /> {item.location}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const hasVideos = gallery.some((g) => g.type === "video");
  const filtered = filter === "all" ? gallery : gallery.filter((g) => g.type === filter);
  const canExpand = filtered.length > INITIAL;
  const visible = expanded || !canExpand ? filtered : filtered.slice(0, INITIAL);

  return (
    <section id="gallery" className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
              <Camera className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
              Straight from the Trail
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
              Moments on the Mountain
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mt-3 max-w-2xl">
              Every shot below was taken on our own treks — no stock photos. This
              is exactly what you&apos;ll wake up to.
            </p>
          </div>
          {hasVideos && (
            <div className="flex gap-2 shrink-0">
              {galleryFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    filter === f.key
                      ? "bg-brand-primary text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {visible.map((item) => {
              const fullIndex = gallery.indexOf(item);
              return (
                <button
                  key={item.id}
                  onClick={() => setLightboxIndex(fullIndex)}
                  aria-label={`Open ${item.type === "video" ? "video" : "photo"}${item.caption ? `: ${item.caption}` : ""}`}
                  className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      width={item.width}
                      height={item.height}
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.src}
                      alt={item.caption}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {item.type === "video" && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
                      <Play className="w-3 h-3 fill-white" /> Video
                    </span>
                  )}
                  {(item.caption || item.location) && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pt-14 pb-4 px-4 pointer-events-none">
                      <span className="block text-white text-sm font-semibold leading-snug">
                        {item.caption}
                      </span>
                      {item.location && (
                        <span className="mt-1 inline-flex items-center gap-1 text-white/70 text-xs">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {canExpand && !expanded && (
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>

        {canExpand && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                if (expanded) {
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "instant", block: "start" });
                }
                setExpanded((v) => !v);
              }}
              className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-brand-secondary font-semibold text-sm px-6 py-3 rounded-xl border border-slate-200 transition-all cursor-pointer"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show All <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
