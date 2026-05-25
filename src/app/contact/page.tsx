"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Clock, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const saudiContacts = [
    { 
      label: language === "ar" ? "جوال الممثل الإقليمي" : "Regional Representative Mobile", 
      val: "+966 53 324 2203", 
      href: "tel:+966533242203" 
    },
    { 
      label: language === "ar" ? "دعم البريد الإلكتروني للشركة" : "Corporate Email Support", 
      val: "hope.touch342@gmail.com", 
      href: "mailto:hope.touch342@gmail.com" 
    },
    { 
      label: language === "ar" ? "العنوان الفعلي" : "Physical Address", 
      val: language === "ar" ? "الخبر، الدمام، المملكة العربية السعودية" : "Al Khobar, Dammam, Saudi Arabia", 
      href: "#" 
    },
  ];

  const bangladeshContacts = [
    { 
      label: language === "ar" ? "الخط الساخن لمكتب دكا" : "Dhaka Office Hotline", 
      val: "hope.touch342@gmail.com", 
      href: "mailto:hope.touch342@gmail.com" 
    },
    { 
      label: language === "ar" ? "العنوان الفعلي" : "Physical Address", 
      val: language === "ar" ? "بناني، دكا، بنغلاديش" : "Banani, Dhaka, Bangladesh", 
      href: "#" 
    },
  ];

  const checklistItems = [
    language === "ar" ? "التحقق من عدد تفويض تأشيرة السفر السعودية الخاصة بك." : "Verify your Saudi visa block authorization count.",
    language === "ar" ? "تحديد المهن الدقيقة المطلوبة (لحامون، نجارون، عمال تنظيف)." : "Determine the exact trades required (welders, carpenters, janitors).",
    language === "ar" ? "تحديد الجدول الزمني المخطط للبدء (فوري مقابل تدريجي)." : "Establish the planned mobilization timeline (immediate vs. phased).",
    language === "ar" ? "مراجعة رموز وشروط مطابقة السكن المحلي." : "Review local accommodation compliance codes.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* SECTION 1: CONTACT HERO */}
        <section className="relative py-24 bg-dark-bg overflow-hidden border-b border-dark-border">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/assets/contact_detail_bg.png')` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-primary-dark/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t("contact.heroTitle")}
            </h1>
            <p className="mt-4 text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
              {t("contact.heroDesc")}
            </p>
          </div>
        </section>

        {/* SECTION 2: INQUIRY FORM BLOCK */}
        <section className="py-20 bg-dark-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form Info details (Span 5) */}
              <div className="lg:col-span-5 space-y-6 text-start">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {language === "ar" ? "طلب عرض سعر القوى العاملة أو الصيانة" : "Request a Workforce or Maintenance Quote"}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {language === "ar"
                    ? "املأ ورقة الاستعلام الخاصة بنا للحصول على مقترح اتفاقية مستوى خدمة مخصص. لطلبات العمالة العاجلة في المنطقة الشرقية، اتصل بممثلينا الإقليميين مباشرة."
                    : "Fill out our inquiry sheet to receive a custom SLA proposal. For urgent manpower requests in the Eastern Province, contact our regional representatives directly."}
                </p>
                <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border space-y-4">
                  <div className="flex gap-3 items-center text-sm font-bold text-white">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span>{t("contact.hoursTitle")}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === "ar"
                      ? "السبت – الخميس: 8:00 صباحاً – 5:00 مساءً (توقيت مكة المكرمة)\nالجمعة: مغلق"
                      : "Sat – Thu: 8:00 AM – 5:00 PM (Arabian Standard Time)\nFri: Closed"}
                  </p>
                </div>
              </div>

              {/* Form container (Span 7) */}
              <div className="lg:col-span-7">
                <div className="text-slate-100">
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: SAUDI ARABIA OFFICE */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-start">
              <h3 className="text-2xl font-extrabold text-white">
                {t("contact.saTitle")}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t("contact.saDesc")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {saudiContacts.map((contact) => (
                  <div key={contact.label} className="p-4 rounded-xl bg-dark-panel border border-dark-border space-y-2">
                    <span className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider">{contact.label}</span>
                    {contact.href !== "#" ? (
                      <a href={contact.href} className="block text-xs font-bold text-secondary hover:text-white transition-colors">{contact.val}</a>
                    ) : (
                      <span className="block text-xs font-bold text-white">{contact.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: BANGLADESH OFFICE */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 text-start">
              <h3 className="text-2xl font-extrabold text-white">
                {t("contact.bdTitle")}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t("contact.bdDesc")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {bangladeshContacts.map((contact) => (
                  <div key={contact.label} className="p-4 rounded-xl bg-dark-bg border border-dark-border space-y-2">
                    <span className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider">{contact.label}</span>
                    {contact.href !== "#" ? (
                      <a href={contact.href} className="block text-xs font-bold text-secondary hover:text-white transition-colors">{contact.val}</a>
                    ) : (
                      <span className="block text-xs font-bold text-white">{contact.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SUPPORT CHANNELS (DIRECT WHATSAPP LINK) */}
        <section className="py-20 bg-dark-bg border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6 fill-emerald-500 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {t("contact.whatsappTitle")}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
              {t("contact.whatsappDesc")}
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/966533242203?text=Hello%20Hope%20Touch%20Global%20Ltd,%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20and%20cleaning%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-102 cursor-pointer"
              >
                {t("contact.whatsappBtn")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6: PRE-INQUIRY CHECKLIST */}
        <section className="py-20 bg-dark-panel border-t border-dark-border">
          <div className="max-w-3xl mx-auto px-4 space-y-6 text-start">
            <div className="flex gap-2 items-center">
              <ShieldCheck className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold text-white">
                {t("contact.checklistTitle")}
              </h3>
            </div>
            <p className="text-slate-350 text-xs leading-relaxed">
              {t("contact.checklistDesc")}
            </p>
            
            <ul className="space-y-3.5 pt-3">
              {checklistItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-slate-300 leading-relaxed items-start">
                  <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-secondary shrink-0 mt-0.5">{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
