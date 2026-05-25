"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Flag, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const missionBullets = t("about.missionBullets") || [
    { text: "To supply skilled and reliable manpower that drives client productivity.", desc: "Focusing on rapid matching and thorough technical screening." },
    { text: "To uphold the highest service standards through honesty and accountability.", desc: "We ensure absolute transparency in pricing, visa quotas, and labor contracts." },
    { text: "To provide timely, cost-effective, and professional support at every stage of the partnership.", desc: "Customized SLAs for long-term operational success." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* SECTION 1: ABOUT HERO */}
        <section className="relative py-24 bg-dark-bg overflow-hidden border-b border-dark-border">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/assets/about_detail_bg.png')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-primary-dark/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {language === "ar" ? "نبذة عن شركتنا" : "About Our Organization"}
            </h1>
            <p className="mt-4 text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "تمثل شركة هوب تاتش العالمية المحدودة قناة خدمات مهنية رائدة تربط الكفاءات العمالية العالمية بالمراكز الصناعية الحديثة في المملكة العربية السعودية."
                : "Hope Touch Global Ltd. represents a premier professional service pipeline connecting global workforce talents to Saudi Arabia's modern industrial hubs."}
            </p>
          </div>
        </section>

        {/* SECTION 2: CORPORATE NARRATIVE */}
        <section className="py-20 bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-secondary">
                  {t("about.corporateNarrative")}
                </h2>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {t("about.corporateTitle")}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {t("about.desc1")}
                </p>
                <p className="text-slate-450 leading-relaxed text-sm">
                  {t("about.desc2")}
                </p>
                <p className="text-slate-450 leading-relaxed text-sm">
                  {t("about.desc3")}
                </p>
              </div>

              {/* Decorative Frame with Leaf Borders */}
              <div className="relative w-full max-w-[440px] mx-auto aspect-video rounded-leaf overflow-hidden border border-dark-border bg-primary">
                <Image
                  src="/assets/services_detail_bg.png"
                  alt="Industrial manpower Trades"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: VISION & MISSION DASHBOARD */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="p-8 rounded-2xl bg-dark-panel border border-dark-border flex gap-4 items-start relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110" />
                <div className="p-3 rounded-xl bg-white/5 text-secondary border border-white/10 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t("about.visionTitle")}</h3>
                  <p className="text-slate-350 text-sm leading-relaxed">
                    {t("about.visionDesc")}
                  </p>
                </div>
              </div>

              {/* Attestation/Core Values */}
              <div className="p-8 rounded-2xl bg-dark-panel border border-dark-border flex gap-4 items-start relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110" />
                <div className="p-3 rounded-xl bg-white/5 text-secondary border border-white/10 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t("about.coreMandate")}</h3>
                  <p className="text-slate-350 text-sm leading-relaxed">
                    {t("about.coreMandateDesc")}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: DETAILED MISSION BULLETS */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {t("about.roadmapTitle")}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {missionBullets.map((item: any, idx: number) => (
                <div key={idx} className="p-6 rounded-2xl bg-dark-bg border border-dark-border space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary border border-secondary/20 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-white text-sm">
                      {language === "ar" ? "خطوة" : "Milestone"}
                    </h4>
                  </div>
                  <p className="text-slate-200 text-sm font-semibold leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-slate-450 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: REGIONAL HUB SITES */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SA Hub */}
              <div className="p-8 rounded-2xl bg-dark-panel border border-dark-border space-y-4">
                <div className="flex items-center gap-3">
                  <Flag className="w-5 h-5 text-secondary" />
                  <h4 className="text-lg font-bold text-white">{t("about.saudiDiv")}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t("about.saHubDesc")}
                </p>
                <div className="text-xs font-semibold text-slate-450">
                  <span className="block">{language === "ar" ? "المكتب: الخبر، الدمام" : "Office: Al Khobar, Dammam"}</span>
                  <span className="block mt-1">{language === "ar" ? "الحالة: معتمد بالكامل ومطابق لمعايير ISO" : "Status: Fully Vetted ISO Compliant"}</span>
                </div>
              </div>

              {/* BD Hub */}
              <div className="p-8 rounded-2xl bg-dark-panel border border-dark-border space-y-4">
                <div className="flex items-center gap-3">
                  <Flag className="w-5 h-5 text-secondary" />
                  <h4 className="text-lg font-bold text-white">{t("about.bangladeshDiv")}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t("about.bdHubDesc")}
                </p>
                <div className="text-xs font-semibold text-slate-450">
                  <span className="block">{language === "ar" ? "المكتب: بناني، دكا" : "Office: Banani, Dhaka"}</span>
                  <span className="block mt-1">{language === "ar" ? "الحالة: شريك وكالة مرخص من الوزارة" : "Status: Licensed Ministry Agency Partner"}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: CONSULTATION PANEL */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-2xl font-extrabold text-white">
              {t("about.consultTitle")}
            </h3>
            <p className="text-slate-350 text-sm leading-relaxed">
              {t("about.consultDesc")}
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary hover:bg-secondary-dark text-white font-bold text-sm shadow-md cursor-pointer"
              >
                {t("about.connectBtn")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
