"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "manpower",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "manpower",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-dark-panel p-8 sm:p-10 rounded-3xl border border-dark-border shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">
        {t("contact.form.title")}
      </h3>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-secondary/5 border border-secondary/25 text-center space-y-3"
        >
          <CheckCircle className="w-12 h-12 text-secondary mx-auto" />
          <h4 className="text-lg font-bold text-white">{t("contact.form.successTitle")}</h4>
          <p className="text-sm text-slate-350 leading-relaxed">
            {t("contact.form.successDesc")}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-5 py-2 text-xs font-bold text-white hover:text-white bg-white/5 hover:bg-secondary border border-white/10 rounded-lg transition-colors cursor-pointer"
          >
            {t("contact.form.btnSendAnother")}
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder={t("contact.form.namePlaceholder")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border focus:border-secondary outline-none text-slate-100 placeholder-slate-500 bg-dark-bg transition-all font-medium text-sm"
            />
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border focus:border-secondary outline-none text-slate-100 placeholder-slate-500 bg-dark-bg transition-all font-medium text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                {t("contact.form.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+966 50 000 0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-dark-border focus:border-secondary outline-none text-slate-100 placeholder-slate-500 bg-dark-bg transition-all font-medium text-sm"
              />
            </div>
          </div>

          {/* Inquiry Type Selector */}
          <div>
            <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
              {t("contact.form.serviceRequired")}
            </label>
            <select
              id="inquiryType"
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border focus:border-secondary outline-none text-slate-100 bg-dark-bg transition-all font-semibold text-sm"
            >
              <option value="manpower" className="bg-dark-panel">{t("contact.form.optManpower")}</option>
              <option value="cleaning" className="bg-dark-panel">{t("contact.form.optCleaning")}</option>
              <option value="visa" className="bg-dark-panel">{t("contact.form.optVisa")}</option>
              <option value="logistics" className="bg-dark-panel">{t("contact.form.optLogistics")}</option>
              <option value="other" className="bg-dark-panel">{t("contact.form.optOther")}</option>
            </select>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
              {t("contact.form.projectDesc")}
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder={t("contact.form.projectDescPlaceholder")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border focus:border-secondary outline-none text-slate-100 placeholder-slate-500 bg-dark-bg transition-all font-medium text-sm"
            />
          </div>

          {/* Errors message */}
          {status === "error" && (
            <div className="flex gap-2 text-xs font-bold text-red-500 items-center">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{t("contact.form.error")}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center px-6 py-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold tracking-wide shadow-md transition-all duration-200 disabled:opacity-50 group cursor-pointer"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {t("contact.form.btnProcessing")}
              </span>
            ) : (
              <span className="flex items-center">
                {t("contact.form.btnSubmit")}
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:mr-2 rtl:ml-0" />
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
