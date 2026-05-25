"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.whyChooseUs"), href: "/why-choose-us" },
    { name: t("nav.leadership"), href: "/leadership" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-panel/90 backdrop-blur-md border-b border-dark-border shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary border border-dark-border text-white group-hover:border-secondary transition-colors">
              <ShieldCheck className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block text-white">
                HOPE TOUCH
              </span>
              <span className="text-[10px] uppercase tracking-wider block font-semibold text-secondary -mt-1.5">
                Global Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-secondary font-bold"
                      : "text-slate-300 hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-dark-border bg-dark-panel hover:bg-dark-border text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-secondary" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-secondary hover:bg-secondary-dark text-white shadow-md transition-all duration-200 group"
            >
              {t("nav.requestManpower")}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-dark-border focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-panel border-t border-dark-border shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? "text-secondary bg-dark-border"
                    : "text-slate-300 hover:text-white hover:bg-dark-border/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-dark-border px-3 space-y-3">
            <button
              onClick={() => {
                setLanguage(language === "en" ? "ar" : "en");
                setIsOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 px-4 py-3 text-base font-bold rounded-lg border border-dark-border bg-dark-panel text-slate-350 hover:text-white shadow-md transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 text-secondary" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-4 py-3 text-base font-bold rounded-lg bg-secondary text-white hover:bg-secondary-dark shadow-md transition-colors"
            >
              {t("nav.requestManpower")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
