import { Sparkles, CircleCheck } from "lucide-react";
import { packages, waLink } from "@/app/data";

const packageWaLink = (name) =>
  waLink(
    `Hello! I'm interested in booking the Nag Tibba Trek — ${name} package. Please share the upcoming dates and registration details.`,
  );

export default function Packages() {
  return (
    <section id="packages" className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
            Tour Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight mb-4">
            Pick the Trek That Fits You
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Every package covers the essentials — camps, meals, permits and
            experienced local trek leaders. Choose how you want to experience the
            mountain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col bg-white rounded-2xl p-8 transition-all ${
                p.popular
                  ? "border-2 border-brand-primary shadow-xl shadow-brand-primary/10"
                  : "border border-slate-100 shadow-md hover:shadow-lg"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-brand-secondary">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{p.tagline}</p>
              </div>
              <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-slate-100">
                <span className="text-4xl font-black text-brand-secondary">
                  {p.price}
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  / {p.priceUnit}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CircleCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={packageWaLink(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center font-bold py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  p.popular
                    ? "bg-brand-primary hover:bg-brand-primary/90 text-white shadow-md shadow-brand-primary/10"
                    : "bg-slate-50 hover:bg-slate-100 text-brand-secondary border border-slate-200"
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-slate-400 mt-10">
          Prices are per person and include all permits. Group discounts
          available — ask us on WhatsApp.
        </p>
      </div>
    </section>
  );
}
