"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Globe, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-panel text-slate-400 pt-20 pb-10 relative border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-dark-border">
          
          {/* Logo & Corporate Tagline */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-white">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  HOPE TOUCH
                </span>
                <span className="text-[10px] uppercase tracking-wider block font-semibold text-secondary -mt-1.5">
                  Global Ltd
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">{t("nav.home")}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">{t("nav.about")}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">{t("nav.services")}</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-secondary transition-colors">{t("nav.whyChooseUs")}</Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-secondary transition-colors">{t("nav.leadership")}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Corporate Locations */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              {t("footer.locationsAndContact")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* SA Office */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white">{t("footer.saudiOffice")}</h5>
                    <p className="text-xs text-slate-400 mt-1">{t("footer.saudiLoc")}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <a href="tel:+966533242203" className="hover:text-white transition-colors">+966 53 324 2203</a>
                </div>
              </div>

              {/* BD Office */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <h5 className="font-semibold text-white">{t("footer.bangladeshOffice")}</h5>
                    <p className="text-xs text-slate-400 mt-1">{t("footer.bangladeshLoc")}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <a href="mailto:hope.touch342@gmail.com" className="hover:text-white transition-colors">hope.touch342@gmail.com</a>
                </div>
                <div className="flex gap-2 items-center">
                  <Globe className="w-4 h-4 text-secondary shrink-0" />
                  <a href="https://hopetouchglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">hopetouchglobal.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-slate-500">
          <p>© {currentYear} Hope Touch Global Ltd. {t("footer.rightsReserved")}</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            {t("footer.taglineCredits")}
          </p>
        </div>
      </div>
    </footer>
  );
}
