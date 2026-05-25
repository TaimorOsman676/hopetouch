"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Users2, SearchCheck, CalendarClock, HeartHandshake
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t, language } = useLanguage();

  const points = [
    {
      title: t("whyChooseUs.metrics.mgmt"),
      desc: t("whyChooseUs.metrics.mgmtDesc"),
      icon: Building2,
      metric: "10+",
      label: language === "ar" ? "سنوات خبرة" : "Years Experience",
    },
    {
      title: t("whyChooseUs.metrics.workforce"),
      desc: t("whyChooseUs.metrics.workforceDesc"),
      icon: Users2,
      metric: "98%",
      label: language === "ar" ? "الاحتفاظ بالعملاء" : "Client Retention",
    },
    {
      title: t("whyChooseUs.metrics.process"),
      desc: t("whyChooseUs.metrics.processDesc"),
      icon: SearchCheck,
      metric: "100%",
      label: language === "ar" ? "مصادر أخلاقية" : "Ethical Sourcing",
    },
    {
      title: t("whyChooseUs.metrics.delivery"),
      desc: t("whyChooseUs.metrics.deliveryDesc"),
      icon: CalendarClock,
      metric: "24h",
      label: language === "ar" ? "تنفيذ الاتفاقية" : "SLA Execution",
    },
    {
      title: t("whyChooseUs.metrics.customer"),
      desc: t("whyChooseUs.metrics.customerDesc"),
      icon: HeartHandshake,
      metric: "1-to-1",
      label: language === "ar" ? "مدير حساب العميل" : "Client Account Manager",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-dark-bg text-white relative overflow-hidden border-t border-dark-border">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-dark-panel via-dark-bg to-dark-panel opacity-90 z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            {t("whyChooseUs.badge")}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-silver">{t("whyChooseUs.title")}</span>
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((pt, idx) => {
            const IconComponent = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-secondary/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Metric */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-2xl font-extrabold text-secondary tracking-tight">
                      {pt.metric}
                    </span>
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pt.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-350 text-xs leading-relaxed font-medium">
                    {pt.desc}
                  </p>
                </div>

                {/* Sub-label */}
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  {pt.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
