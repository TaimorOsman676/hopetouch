"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, Sparkles, FileText, CheckCircle2, ArrowRight,
  Settings, ClipboardList
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t, language } = useLanguage();

  const manpowerTrades = t("services.trades") || [
    "Skilled Trades (Welders, Electricians, Plumbers, Fabricators)",
    "General Construction Laborers & Site Assistants",
    "Hospitality Personnel (Waiters, Chefs, Housekeeping)",
    "Retail & Sales Associates",
    "Warehouse Staff & Heavy Machine Operators",
  ];

  const cleaningScopes = t("services.scopes") || [
    "Corporate Headquarters & Executive Office Complexes",
    "Industrial Warehouses & Distribution Centers",
    "Medical Clinics & Hospital Sanitary Maintenance",
    "Pre-opening Post-Construction General Cleans",
    "Routine Deep Cleans & Glass Maintenance",
  ];

  const workflowSteps = t("services.workflowSteps") || [
    { title: "Client Demand", desc: "Detailed breakdown of count, trades, duration, and requirements." },
    { title: "Global Sourcing", desc: "Candidate filtering across our Saudi local base and Bangladesh pipeline." },
    { title: "Trade Screening", desc: "Physical testing and GAMCA medical checks executed in Dhaka." },
    { title: "Attestation & Travel", desc: "Legal embassy attestation, document clearance, and booking." },
    { title: "Deployment & Review", desc: "Local integration, onboarding, and regular SLA compliance reviews." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* SECTION 1: SERVICES HERO */}
        <section className="relative py-24 bg-dark-bg overflow-hidden border-b border-dark-border">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/assets/services_detail_bg.png')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-primary-dark/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {language === "ar" ? "حقيبة الخدمات والهيكل التنظيمي" : "Services Portfolio & Architecture"}
            </h1>
            <p className="mt-4 text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
              {language === "ar"
                ? "نحن نقدم إمدادات قوى عاملة قابلة للتطوير، وحلول تنظيف صديقة للبيئة، وامتثالاً شاملاً للتوظيف في الخارج في جميع أنحاء المملكة العربية السعودية."
                : "We deliver scalable manpower supply, eco-friendly janitorial solutions, and comprehensive overseas recruitment compliance across Saudi Arabia."}
            </p>
          </div>
        </section>

        {/* SECTION 2: MANPOWER SUPPLY HUB */}
        <section className="py-20 bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Info Details (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {t("services.list.manpowerSupply.title")}
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {t("services.list.manpowerSupply.desc")}
                </p>
                
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary pt-2">
                  {t("services.tradesTitle")}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {manpowerTrades.map((trade: string, idx: number) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-slate-350">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{trade}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic (Span 5) with Leaf Border */}
              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full max-w-[360px] mx-auto rounded-leaf overflow-hidden border-2 border-dark-border bg-slate-800">
                  <Image
                    src="/assets/manpower_trades.png"
                    alt="Manpower tradespeople working"
                    fill
                    className="object-cover opacity-85"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: CLEANING & MAINTENANCE SHOWCASE */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Graphic (Span 5) with Leaf Border */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="relative aspect-square w-full max-w-[360px] mx-auto rounded-leaf overflow-hidden border-2 border-dark-border bg-slate-800">
                  <Image
                    src="/assets/janitorial_equipment.png"
                    alt="Commercial janitorial equipment"
                    fill
                    className="object-cover opacity-85"
                  />
                </div>
              </div>

              {/* Info Details (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {t("services.list.cleaning.title")}
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {t("services.list.cleaning.desc")}
                </p>
                
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary pt-2">
                  {t("services.scopesTitle")}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cleaningScopes.map((scope: string, idx: number) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-slate-350">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: OVERSEAS SERVICES DIVISION */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                {language === "ar" ? "الامتثال العالمي" : "Global Compliance"}
              </h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                {t("services.tabOverseas")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white">
                  {language === "ar" ? "تصديق التأشيرات" : "Visa Attestation"}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {language === "ar"
                    ? "التنسيق مع السفارات والمساعدة في تصديق تصاريح العمل ومجموعات التوظيف القانونية."
                    : "Embassy coordination and attestation assistance for work permits and legal employment blocks."}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white">
                  {language === "ar" ? "الفحوصات الطبية جامكا" : "GAMCA Medical Checks"}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {language === "ar"
                    ? "حجز الفحوصات الطبية العملية للمرشحين وتصديق الشهادات الطبية."
                    : "Booking candidate physical tests, medical attestation, and certification logs."}
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white">
                  {language === "ar" ? "اختبارات المهن" : "Trade Testing"}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {language === "ar"
                    ? "فحص مهارات الفنيين قبل المغادرة في مراكز الاختبارات المهنية المعتمدة."
                    : "Pre-departure screening of technician skills at certified trade test facilities."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SOURCING WORKFLOW */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Sourcing Timeline (Span 7) */}
              <div className="lg:col-span-7 space-y-8">
                <h3 className="text-2xl font-extrabold text-white">
                  {t("services.workflowTitle")}
                </h3>
                <div className="space-y-6">
                  {workflowSteps.map((step: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-secondary/15 text-secondary border border-secondary/20 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-white text-sm">{step.title}</h4>
                        <p className="text-slate-450 text-xs leading-relaxed mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic (Span 5) with Leaf Border */}
              <div className="lg:col-span-5">
                <div className="relative aspect-square w-full max-w-[360px] mx-auto rounded-leaf overflow-hidden border-2 border-dark-border bg-slate-800">
                  <Image
                    src="/assets/recruitment_workflow.png"
                    alt="HR recruiters interviewing candidates"
                    fill
                    className="object-cover opacity-85"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: PROPOSAL CALLOUT */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
            <h3 className="text-2xl font-extrabold text-white">
              {t("services.proposalTitle")}
            </h3>
            <p className="text-slate-350 text-sm leading-relaxed">
              {t("services.proposalDesc")}
            </p>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary hover:bg-secondary-dark text-white font-bold text-sm shadow-md cursor-pointer"
              >
                {t("services.btnInquire")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
