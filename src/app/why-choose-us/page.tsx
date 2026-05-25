"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Users2, SearchCheck, CalendarClock, HeartHandshake,
  CheckCircle2, Plus, Minus
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FAQItem = {
  q: string;
  a: string;
};

export default function WhyChooseUsPage() {
  const { t, language } = useLanguage();

  const metrics = [
    { 
      title: t("whyChooseUs.metrics.mgmt"), 
      desc: t("whyChooseUs.metrics.mgmtDesc"), 
      icon: Building2, 
      value: language === "ar" ? "10+ سنوات" : "10+ Yrs" 
    },
    { 
      title: t("whyChooseUs.metrics.workforce"), 
      desc: t("whyChooseUs.metrics.workforceDesc"), 
      icon: Users2, 
      value: language === "ar" ? "98% موثق" : "98% Vetted" 
    },
    { 
      title: t("whyChooseUs.metrics.process"), 
      desc: t("whyChooseUs.metrics.processDesc"), 
      icon: SearchCheck, 
      value: language === "ar" ? "100% قانوني" : "100% Legal" 
    },
    { 
      title: t("whyChooseUs.metrics.delivery"), 
      desc: t("whyChooseUs.metrics.deliveryDesc"), 
      icon: CalendarClock, 
      value: language === "ar" ? "24 ساعة SLA" : "24h SLA" 
    },
    { 
      title: t("whyChooseUs.metrics.customer"), 
      desc: t("whyChooseUs.metrics.customerDesc"), 
      icon: HeartHandshake, 
      value: language === "ar" ? "1-إلى-1" : "1-to-1" 
    },
  ];

  const faqs: FAQItem[] = t("whyChooseUs.faqs") || [
    { q: "How long does it take to deploy manpower from Bangladesh?", a: "Sourcing and visa attestation typically require 4-6 weeks depending on visa block authorization and medical clearances." },
    { q: "Do you supply cleaning teams with materials and supervisor oversight?", a: "Yes, we customize our service contracts to include premium materials, specialized equipment, and supervised shifts." },
    { q: "Are all candidate profiles GAMCA medically cleared?", a: "Absolutely. No candidate departs Bangladesh without gamca-attested medical clearances, trade testing, and pre-departure briefings." },
    { q: "Do you support Qiwa and MHRSD platform integration in Saudi Arabia?", a: "Yes. All manpower supply and sponsorship contracts comply fully with Saudi Ministry (Qiwa & MHRSD) regulations." },
  ];

  const vettingBullets = t("whyChooseUs.vettingBullets") || [
    "Criminal record check clearance",
    "Certified trade skills authentication",
    "Physical pre-briefings for local rules",
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* SECTION 1: WHY US HERO */}
        <section className="relative py-24 bg-dark-bg overflow-hidden border-b border-dark-border">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/assets/why_us_detail_bg.png')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-primary-dark/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {language === "ar" ? "لماذا تختار هوب تاتش" : "Why Choose Hope Touch"}
            </h1>
            <p className="mt-4 text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "نتميز من خلال القيادة الخبيرة، وعمليات الفحص المدققة، والامتثال لقوى العمل القائمة على تحقيق النتائج."
                : "We stand apart through experienced leadership, audited vetting processes, and outcome-driven workforce compliance."}
            </p>
          </div>
        </section>

        {/* SECTION 2: 5-COLUMN METRIC GRID */}
        <section className="py-20 bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                {language === "ar" ? "ركائز الأداء الرئيسية" : "Key Performance Pillars"}
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t("whyChooseUs.subtitle")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {metrics.map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-dark-bg border border-dark-border flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-lg font-bold text-secondary">{m.value}</span>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2">{m.title}</h4>
                      <p className="text-slate-450 text-[11px] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: DETAILED VETTING RIGOR */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {t("whyChooseUs.vettingTitle")}
                </h3>
                <p className="text-slate-350 text-sm leading-relaxed">
                  {t("whyChooseUs.vettingDesc")}
                </p>
                <ul className="space-y-3">
                  {vettingBullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex gap-2 text-xs font-semibold text-slate-350 items-center">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Slanted Image Display with Leaf Border */}
              <div className="relative aspect-video w-full max-w-[440px] mx-auto rounded-leaf overflow-hidden border border-dark-border bg-slate-800">
                <Image
                  src="/assets/about_detail_bg.png"
                  alt="Board meeting room layout"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: LICENSING COMPLIANCE */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Slanted Image Display with Leaf Border */}
              <div className="relative aspect-video w-full max-w-[440px] mx-auto rounded-leaf overflow-hidden border border-dark-border bg-slate-800 order-last lg:order-first">
                <Image
                  src="/assets/why_us_detail_bg.png"
                  alt="High-end corporate reflection"
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {t("whyChooseUs.licensingTitle")}
                </h3>
                <p className="text-slate-350 text-sm leading-relaxed">
                  {t("whyChooseUs.licensingDesc")}
                </p>
                <div className="pt-4 border-t border-dark-border grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-dark-bg border border-dark-border text-center">
                    <span className="block text-white font-bold text-xs uppercase tracking-wider">{t("whyChooseUs.qiwaTitle")}</span>
                    <span className="block text-[10px] text-slate-450 mt-1">{t("whyChooseUs.qiwaLabel")}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-dark-bg border border-dark-border text-center">
                    <span className="block text-white font-bold text-xs uppercase tracking-wider">{t("whyChooseUs.bmetTitle")}</span>
                    <span className="block text-[10px] text-slate-450 mt-1">{t("whyChooseUs.bmetLabel")}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: REPRESENTATIVE CASE SUMMARY */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-2xl font-extrabold text-white">
              {t("whyChooseUs.caseTitle")}
            </h3>
            <p className="text-slate-350 text-sm leading-relaxed max-w-2xl mx-auto">
              {t("whyChooseUs.caseDesc")}
            </p>
            <div className="w-16 h-px bg-slate-800 mx-auto" />
            <span className="block text-xs uppercase tracking-widest text-slate-450 font-bold">
              {t("whyChooseUs.guarantee")}
            </span>
          </div>
        </section>

        {/* SECTION 6: DETAILED FAQ ACCORDION */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {t("whyChooseUs.faqTitle")}
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-dark-border bg-dark-bg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left text-white font-bold text-sm hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <Minus className="w-4 h-4 text-secondary shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-secondary shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-xs text-slate-450 leading-relaxed border-t border-dark-border pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
