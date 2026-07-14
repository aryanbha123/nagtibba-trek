import { Footprints, Sunrise } from "lucide-react";
import { itinerary } from "@/app/data";

const dayIcons = [Footprints, Sunrise];

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <div className="mb-12 border-b border-slate-100 pb-8">
        <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
          Day-by-Day Plan
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
          Trek Itinerary
        </h2>
        <p className="text-slate-500 text-base leading-relaxed mt-3 max-w-2xl">
          A comfortably paced two-day route — forest trails on the way up, a
          Himalayan sunrise at the top, and back to the village by afternoon.
        </p>
      </div>

      <div className="relative max-w-3xl">
        <div
          className="absolute left-6 top-2 bottom-2 w-px bg-slate-200"
          aria-hidden="true"
        />
        <ol className="space-y-12">
          {itinerary.map((day, i) => {
            const Icon = dayIcons[i % dayIcons.length];
            return (
              <li key={day.day} className="relative pl-20">
                <span className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary text-white shadow-md shadow-brand-primary/20">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 sm:p-8">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-1">
                    Day {day.day}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-secondary mb-5">
                    {day.title}
                  </h3>
                  <ul className="space-y-3">
                    {day.schedule.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-1.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="text-xs text-slate-400 mt-10 max-w-3xl">
        Timings are indicative and may shift with weather and group pace. Your
        trek leader will confirm the exact schedule at the base village.
      </p>
    </section>
  );
}
