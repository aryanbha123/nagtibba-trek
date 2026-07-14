"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { site, navLinks, waLink } from "@/app/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wa = waLink(site.bookingChannels.whatsappDefaultMessage);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-mark-Sw6PFeXb.webp"
              alt=""
              aria-hidden="true"
              className="h-10 w-auto"
            />
            <span className="text-xl font-black text-brand-secondary tracking-tight">
              {site.logoText}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${site.contact.phone}`}
              className="text-sm font-semibold text-brand-secondary flex items-center gap-2 hover:text-brand-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> {site.contact.phone}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-brand-primary/90 transition-all shadow-sm"
            >
              Book Consultation
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-slate-600 p-2 rounded-lg hover:bg-slate-50 focus:outline-none"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-b border-slate-100 bg-white px-4 pt-2 pb-6 space-y-3 transition-all">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-3">
            <a
              href={`tel:${site.contact.phone}`}
              className="text-sm font-medium flex items-center gap-2 text-slate-600"
            >
              <Phone className="w-4 h-4 text-brand-primary" /> {site.contact.phone}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-primary text-white font-medium py-3 rounded-xl shadow-sm text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
