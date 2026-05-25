"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us Snapshot */}
        <AboutUs />

        {/* Core Values Grid */}
        <CoreValues />

        {/* Services Showcase */}
        <Services />

        {/* Why Choose Us Metrics */}
        <WhyChooseUs />

        {/* SECTION 6: CONSULTATION CTA BLOCK */}
        <section className="py-20 bg-gradient-to-t from-dark-panel to-dark-bg border-t border-dark-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              {language === "ar"
                ? "هل أنت مستعد لتحسين قواك العاملة التشغيلية؟"
                : "Ready to Optimize Your Operational Workforce?"}
            </h3>
            <p className="text-slate-350 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              {language === "ar"
                ? "تواصل مع مكاتبنا في بناني، دكا أو الخبر، الدمام. احصل على عرض سعر مباشر مخصص لجدول مشروعك الزمني."
                : "Contact our offices in Banani, Dhaka or Al Khobar, Dammam. Get a direct proposal customized to your project timeframe."}
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                {language === "ar" ? "استفسار / طلب عرض سعر" : "Inquire / Request Quote"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
