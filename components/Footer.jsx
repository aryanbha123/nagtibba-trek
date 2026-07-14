"use client";

import { useEffect, useState } from "react";
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { site, navLinks, waLink, guides } from "@/app/data";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
};

export default function Footer() {
  const wa = waLink(site.bookingChannels.whatsappDefaultMessage);
  const year = new Date().getFullYear();
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const onHighlight = () => {
      setGlow(false);
      requestAnimationFrame(() => setGlow(true));
    };
    window.addEventListener("highlight-whatsapp-cta", onHighlight);
    return () =>
      window.removeEventListener("highlight-whatsapp-cta", onHighlight);
  }, []);

  useEffect(() => {
    if (!glow) return;
    const t = setTimeout(() => setGlow(false), 8000);
    return () => clearTimeout(t);
  }, [glow]);

  return (
    <footer id="contact" className="bg-brand-secondary text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <Compass className="w-7 h-7 text-brand-primary" />
              <span className="text-lg font-black text-white tracking-tight">
                {site.logoText}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs mb-6">
              Small-batch Himalayan treks led by local guides — crowd-free
              trails, honest pricing and camps under the stars.
            </p>
            <div className="flex gap-3">
              {Object.entries(site.socials).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;
                const disabled = !url;
                return (
                  <a
                    key={key}
                    href={disabled ? "#" : url}
                    {...(!disabled && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    onClick={disabled ? (e) => e.preventDefault() : undefined}
                    aria-disabled={disabled || undefined}
                    title={disabled ? "Coming soon" : undefined}
                    aria-label={`Follow us on ${key}`}
                    className={`p-2.5 rounded-xl bg-white/5 text-slate-300 transition-colors ${
                      disabled
                        ? "opacity-50 cursor-default"
                        : "hover:bg-brand-primary hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Trek guides">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Trek Guides
            </h3>
            <ul className="space-y-2.5">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <a
                    href={`/${guide.slug}`}
                    className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                  >
                    {guide.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-brand-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 mt-0.5 text-brand-primary" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-brand-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 mt-0.5 text-brand-primary" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-brand-primary" />
                {site.contact.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Plan Your Trek
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Slots fill fast on snow-season weekends. Message us and we&apos;ll
              help you pick the right batch.
            </p>
            <a
              id="whatsapp-cta"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onAnimationEnd={() => setGlow(false)}
              className={`inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all shadow-md shadow-brand-primary/20 ${
                glow ? "animate-cta-glow" : ""
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year} {site.companyName}. All rights reserved.
          </p>
          <p>{site.contact.address}, Uttarakhand, India</p>
        </div>
      </div>
    </footer>
  );
}
