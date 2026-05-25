"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ShieldCheck, Eye, Briefcase, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipPage() {
  const { t, language } = useLanguage();

  const quotes = {
    zabin: {
      tagline: language === "ar" ? "مدفوعون بالشغف، نقود بهدف" : "Driven by Passion, Leading with Purpose",
      text: language === "ar"
        ? "في شركة هوب تاتش العالمية المحدودة، وبدافع من الشغف والتميز، نعمل على خلق فرص قيمة للشركات والعمال والمجتمعات. نحن نقدم نتائج تتحدث عن نفسها - هدفنا هو توفير كوادر مؤهلة تأهيلاً عالياً لمشاريعكم، ملتزمة بإنجاز العمل بالشكل الصحيح. إن نهجنا الموجه نحو النتائج يضمن تحقيق أهدافكم بنجاح، بغض النظر عن التحديات التي قد تنشأ."
        : "At Hope Touch Global Ltd., driven by passion and excellence, we create valuable opportunities for businesses, workers, and communities. We deliver results that speak for themselves – our goal is to provide highly skilled personnel for your projects, who are committed to completing the job correctly. Our results-oriented approach ensures that your goals are successfully achieved, no matter what challenges may arise."
    },
    sagor: {
      tagline: language === "ar" ? "جسر الفرص، وتنمية النمو" : "Bridging Opportunities, Cultivating Growth",
      text: language === "ar"
        ? "لقد أسست هذه الشركة لغرض واحد: تقديم خدمات عمالة وتنظيف مستدامة وموثوقة للعملاء في جميع أنحاء المملكة العربية السعودية. اعتقادنا الأساسي هو أن كل عميل يستحق فرق عمل مخصصة ومفحوصة بدقة وموائم بها. جنباً إلى جنب مع فريقنا الموهوب، نضمن حصول عملائنا على أفضل الحلول الممكنة لاحتياجات أعمالهم."
        : "I started this company with a singular purpose: to provide sustainable and trustworthy manpower and cleaning services to clients across Saudi Arabia. Our core belief is that every client deserves dedicated, thoroughly vetted, and reliable teams. Together with our talented team, we ensure that our clients receive the best possible solutions for their business needs."
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* SECTION 1: LEADERSHIP HERO */}
        <section className="relative py-24 bg-dark-bg overflow-hidden border-b border-dark-border">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/assets/leadership_detail_bg.png')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-primary-dark/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {language === "ar" ? "رسالة الإدارة التنفيذية" : "Executive Leadership Message"}
            </h1>
            <p className="mt-4 text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
              {t("leadership.counselMessage")}
            </p>
          </div>
        </section>

        {/* SECTION 2: FOUNDER MESSAGE - ZABIN MARRAN ALDOSSARY */}
        <section className="py-20 bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo */}
              <div className="w-full lg:w-1/3 max-w-[320px]">
                <div className="relative aspect-square rounded-leaf overflow-hidden border-4 border-dark-border bg-slate-800 shadow-2xl">
                  <Image
                    src="/assets/zabin_aldossary.png"
                    alt="Zabin Marran Aldossary"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 space-y-6 text-start">
                <Quote className="w-12 h-12 text-secondary opacity-30" />
                <h4 className="text-secondary font-bold text-xs uppercase tracking-wider -mt-2">
                  {quotes.zabin.tagline}
                </h4>
                <p className="text-slate-200 text-lg md:text-xl italic leading-relaxed font-medium">
                  "{quotes.zabin.text}"
                </p>
                <div className="pt-4 border-t border-slate-850">
                  <h3 className="text-lg font-bold text-white">
                    {language === "ar" ? "زبن مران الدوسري" : "Zabin Marran Aldossary"}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    {language === "ar" ? "المؤسس — شركة هوب تاتش العالمية المحدودة" : "Founder — Hope Touch Global Ltd."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CEO MESSAGE - MR. SAGOR KHAN */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Photo */}
              <div className="w-full lg:w-1/3 max-w-[320px]">
                <div className="relative aspect-square rounded-leaf overflow-hidden border-4 border-dark-border bg-slate-800 shadow-2xl">
                  <Image
                    src="/assets/sagor_khan.png"
                    alt="Mr. Sagor Khan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1 space-y-6 text-start">
                <Quote className="w-12 h-12 text-secondary opacity-30" />
                <h4 className="text-secondary font-bold text-xs uppercase tracking-wider -mt-2">
                  {quotes.sagor.tagline}
                </h4>
                <p className="text-slate-200 text-lg md:text-xl italic leading-relaxed font-medium">
                  "{quotes.sagor.text}"
                </p>
                <div className="pt-4 border-t border-slate-850">
                  <h3 className="text-lg font-bold text-white">
                    {language === "ar" ? "السيد ساغور خان" : "Mr. Sagor Khan"}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    {language === "ar" ? "المؤسس والمدير التنفيذي — شركة هوب تاتش العالمية المحدودة" : "Founder & CEO — Hope Touch Global Ltd."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: GOVERNANCE & ETHICS CHARTER */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                {t("leadership.governanceTitle")}
              </h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                {t("leadership.governanceSub")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="p-6 rounded-xl bg-dark-bg border border-dark-border space-y-3">
                <h4 className="font-bold text-white">{t("leadership.charter1Title")}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {t("leadership.charter1Desc")}
                </p>
              </div>
              <div className="p-6 rounded-xl bg-dark-bg border border-dark-border space-y-3">
                <h4 className="font-bold text-white">{t("leadership.charter2Title")}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {t("leadership.charter2Desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: HEALTH & SAFETY CODE */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-start">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {t("leadership.safetyTitle")}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t("leadership.safetyDesc")}
                </p>
                <div className="space-y-3">
                  <div className="flex gap-2 items-center text-xs font-semibold text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" /> {t("leadership.safety1")}
                  </div>
                  <div className="flex gap-2 items-center text-xs font-semibold text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" /> {t("leadership.safety2")}
                  </div>
                  <div className="flex gap-2 items-center text-xs font-semibold text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" /> {t("leadership.safety3")}
                  </div>
                </div>
              </div>

              {/* Graphic Backdrop with Leaf Border */}
              <div className="relative aspect-video w-full max-w-[440px] mx-auto rounded-leaf overflow-hidden border border-dark-border bg-slate-800">
                <Image
                  src="/assets/services_detail_bg.png"
                  alt="Manpower trades workers"
                  fill
                  className="object-cover opacity-75"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: EXECUTIVE VISION DASHBOARD */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-secondary mx-auto flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">{t("leadership.transparency")}</h4>
                <p className="text-slate-450 text-xs">{t("leadership.transparencyDesc")}</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-secondary mx-auto flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">{t("leadership.placement")}</h4>
                <p className="text-slate-450 text-xs">{t("leadership.placementDesc")}</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-secondary mx-auto flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">{t("leadership.outcomes")}</h4>
                <p className="text-slate-450 text-xs">{t("leadership.outcomesDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
