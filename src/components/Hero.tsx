"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-24 pb-16">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url('/assets/hero_bg.png')` }}
      />
      
      {/* Sleek radial gradient overlay to focus text */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-dark-bg via-dark-bg/95 to-primary-dark/40" />

      {/* Decorative grids/shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Content (Span 7) */}
          <div className="lg:col-span-7 text-start flex flex-col items-start space-y-6">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white"
            >
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Catchy Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              {t("hero.titlePart1")}{" "}
              <span className="text-secondary block sm:inline">{t("hero.titleSecondary")}</span>{" "}
              {t("hero.titlePart2")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-350 font-medium leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold tracking-wide shadow-lg shadow-secondary/20 transition-all duration-200 group cursor-pointer"
              >
                {t("hero.btnRequest")}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold tracking-wide border border-white/10 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                {t("hero.btnExplore")}
              </Link>
            </motion.div>

            {/* Stat badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full border-t border-white/10 pt-8 mt-6"
            >
              <div className="text-start">
                <span className="block text-3xl font-extrabold text-white">100%</span>
                <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  {t("hero.statVetted")}
                </span>
              </div>
              <div className="text-start">
                <span className="block text-3xl font-extrabold text-white">SA & BD</span>
                <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  {t("hero.statPresence")}
                </span>
              </div>
              <div className="text-start col-span-2 md:col-span-1">
                <span className="block text-3xl font-extrabold text-white">24/7</span>
                <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mt-1">
                  {t("hero.statSupport")}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Glowing Leaf Graphic (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-leaf overflow-hidden border border-white/10 bg-dark-panel shadow-2xl group">
              {/* Glowing overlay and gradient borders */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent z-10" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-leaf opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 -z-10" />
              
              <Image
                src="/assets/cleaning_hero.png"
                alt="Hope Touch Professional Cleaning & Janitorial Services"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, 380px"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
