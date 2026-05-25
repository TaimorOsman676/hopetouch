"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Sparkles, Truck, Briefcase, 
  FileText, ClipboardCheck, Plane, HeartHandshake,
  CheckCircle2, ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type ServiceItem = {
  title: string;
  desc: string;
  features: string[];
  icon: React.ElementType;
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<"manpower" | "overseas">("manpower");
  const { t } = useLanguage();

  const manpowerServices: ServiceItem[] = [
    {
      title: t("services.list.manpowerSupply.title"),
      desc: t("services.list.manpowerSupply.desc"),
      features: t("services.list.manpowerSupply.features") || [],
      icon: Users,
    },
    {
      title: t("services.list.cleaning.title"),
      desc: t("services.list.cleaning.desc"),
      features: t("services.list.cleaning.features") || [],
      icon: Sparkles,
    },
    {
      title: t("services.list.laborSupport.title"),
      desc: t("services.list.laborSupport.desc"),
      features: t("services.list.laborSupport.features") || [],
      icon: Truck,
    },
    {
      title: t("services.list.projectBased.title"),
      desc: t("services.list.projectBased.desc"),
      features: t("services.list.projectBased.features") || [],
      icon: Briefcase,
    },
  ];

  const overseasServices: ServiceItem[] = [
    {
      title: t("services.list.visa.title"),
      desc: t("services.list.visa.desc"),
      features: t("services.list.visa.features") || [],
      icon: FileText,
    },
    {
      title: t("services.list.documentation.title"),
      desc: t("services.list.documentation.desc"),
      features: t("services.list.documentation.features") || [],
      icon: ClipboardCheck,
    },
    {
      title: t("services.list.logistics.title"),
      desc: t("services.list.logistics.desc"),
      features: t("services.list.logistics.features") || [],
      icon: Plane,
    },
    {
      title: t("services.list.counseling.title"),
      desc: t("services.list.counseling.desc"),
      features: t("services.list.counseling.features") || [],
      icon: HeartHandshake,
    },
  ];

  const currentServices = activeTab === "manpower" ? manpowerServices : overseasServices;
  const currentBanner = activeTab === "manpower" ? "/assets/cleaning_service.png" : "/assets/manpower_service.png";
  const currentBannerAlt = activeTab === "manpower" ? "Commercial cleaning and manpower" : "Overseas recruitment and logistics";

  return (
    <section id="services" className="py-24 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            {t("services.badge")}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-silver">{t("services.title")}</span>
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-dark-panel p-1.5 rounded-xl inline-flex gap-2 border border-dark-border">
            <button
              onClick={() => setActiveTab("manpower")}
              className={`px-6 py-3 text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "manpower"
                  ? "bg-secondary text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("services.tabManpower")}
            </button>
            <button
              onClick={() => setActiveTab("overseas")}
              className={`px-6 py-3 text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === "overseas"
                  ? "bg-secondary text-white shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {t("services.tabOverseas")}
            </button>
          </div>
        </div>

        {/* Banner + Cards Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Banner Graphic Side (Span 4) */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative h-[320px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-dark-border bg-dark-panel"
            >
              <Image
                src={currentBanner}
                alt={currentBannerAlt}
                fill
                className="object-cover opacity-50 mix-blend-overlay"
                sizes="(max-w: 1024px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-panel via-dark-panel/60 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {activeTab === "manpower" ? t("services.bannerManpowerTitle") : t("services.bannerOverseasTitle")}
                </h3>
                <p className="text-slate-350 text-sm leading-relaxed mb-4">
                  {t("services.bannerDesc")}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors text-sm"
                >
                  {t("services.btnRequest")} <ArrowRight className="ml-1 w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Service Cards Grid (Span 8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {currentServices.map((svc, idx) => {
                  const SvcIcon = svc.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-dark-border bg-dark-panel shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary mb-5">
                          <SvcIcon className="w-5 h-5 text-secondary" />
                        </div>
                        {/* Title */}
                        <h4 className="text-lg font-bold text-white mb-2">
                          {svc.title}
                        </h4>
                        {/* Desc */}
                        <p className="text-slate-350 text-sm leading-relaxed mb-4">
                          {svc.desc}
                        </p>
                      </div>

                      {/* Features bullets */}
                      <ul className="space-y-2 mt-4 pt-4 border-t border-dark-border">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex gap-2 text-xs font-semibold text-slate-400 items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
