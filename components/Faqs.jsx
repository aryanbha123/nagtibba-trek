import { ChevronDown, MessageSquare } from "lucide-react";
import { faqs, waLink } from "@/app/data";

export default function Faqs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const wa = waLink("Hello! I have a question about the Nag Tibba Trek.");

  return (
    <section id="faqs" className="bg-white border-y border-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
            Good to Know
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm open:shadow-md open:border-brand-primary/30 transition-all"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-brand-secondary font-semibold text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-brand-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded-2xl border border-slate-100 px-6 py-8">
          <p className="text-brand-secondary font-bold mb-1">
            Still have a question?
          </p>
          <p className="text-sm text-slate-500 mb-5">
            Ask us directly — we usually reply within minutes.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-brand-primary/10"
          >
            <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
