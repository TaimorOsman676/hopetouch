"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/966533242203?text=Hello%20Hope%20Touch%20Global%20Ltd,%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20and%20cleaning%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 scale-0 rounded bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white group-hover:scale-100 transition-all duration-200 origin-bottom whitespace-nowrap shadow-xl border border-slate-800">
        Chat on WhatsApp
      </span>
      
      {/* Pulse effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95 duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
        {/* Custom WhatsApp Icon or styled MessageSquare */}
        <MessageSquare className="w-6 h-6 relative z-10 fill-white" />
      </a>
    </div>
  );
}
