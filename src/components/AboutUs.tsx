"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();
  
  const missionItems = t("about.missionItems") || [
    "To supply skilled and reliable manpower that drives client productivity.",
    "To uphold the highest service standards through honesty and accountability.",
    "To provide timely, cost-effective, and professional support at every stage of the partnership.",
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            {t("about.badge")}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-silver">{t("about.title")}</span>
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Block - Text snapshot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-200 leading-relaxed font-semibold">
              {t("about.desc1")}
            </p>
            <p className="text-slate-350 leading-relaxed">
              {t("about.desc2")}
            </p>
            <p className="text-slate-350 leading-relaxed">
              {t("about.desc3")}
            </p>

            {/* Hubs footprint */}
            <div className="pt-6 border-t border-dark-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-panel border border-dark-border flex gap-3">
                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">{t("about.saudiDiv")}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t("about.saudiLoc")}</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-dark-panel border border-dark-border flex gap-3">
                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">{t("about.bangladeshDiv")}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t("about.bangladeshLoc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Vision Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-panel border border-dark-border shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all group-hover:scale-110" />
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t("about.visionTitle")}</h3>
                  <p className="text-slate-350 text-sm leading-relaxed">
                    {t("about.visionDesc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-panel border border-dark-border shadow-xl">
              <div className="flex gap-4 items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t("about.missionTitle")}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {missionItems.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
