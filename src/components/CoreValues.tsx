"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Briefcase, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CoreValues() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("values.integrityTitle"),
      description: t("values.integrityDesc"),
      icon: ShieldCheck,
      color: "text-secondary bg-secondary/5 border-secondary/15",
    },
    {
      title: t("values.qualityTitle"),
      description: t("values.qualityDesc"),
      icon: Award,
      color: "text-secondary bg-secondary/5 border-secondary/15",
    },
    {
      title: t("values.commitmentTitle"),
      description: t("values.commitmentDesc"),
      icon: Briefcase,
      color: "text-secondary bg-secondary/5 border-secondary/15",
    },
    {
      title: t("values.collaborationTitle"),
      description: t("values.collaborationDesc"),
      icon: Handshake,
      color: "text-secondary bg-secondary/5 border-secondary/15",
    },
  ];

  return (
    <section className="py-24 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            {t("values.badge")}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-silver">{t("values.title")}</span>
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5)" }}
                className="bg-dark-panel p-8 rounded-2xl border border-dark-border shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${val.color} mb-6`}>
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {val.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-350 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
                
                {/* Decorative bottom bar */}
                <div className="w-8 h-1 bg-dark-border rounded-full mt-6 group-hover:bg-secondary transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
