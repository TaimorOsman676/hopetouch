"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from "@/data/translations";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguageState(savedLang);
    }
  }, []);

  // Sync document direction and lang attributes
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string): any => {
    const keys = key.split(".");
    let current: any = translations[language];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English if translation is missing
        let enFallback: any = translations["en"];
        for (const fallbackKey of keys) {
          if (enFallback && enFallback[fallbackKey] !== undefined) {
            enFallback = enFallback[fallbackKey];
          } else {
            enFallback = key;
            break;
          }
        }
        return enFallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
