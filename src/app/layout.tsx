import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope Touch Global Ltd | Premier Manpower, Cleaning & Recruitment Services",
  description: "Hope Touch Global Ltd is a premier professional service organization specializing in high-quality manpower supply, commercial cleaning, and overseas visa processing across Saudi Arabia and Bangladesh.",
  keywords: ["manpower supply saudi arabia", "commercial cleaning dammam", "overseas recruitment bangladesh", "visa processing saudi arabia", "hope touch global", "labor supply"],
  authors: [{ name: "Hope Touch Global Ltd" }],
  openGraph: {
    title: "Hope Touch Global Ltd | Premier Manpower, Cleaning & Recruitment Services",
    description: "Bridging the gap between elite talent and modern industry. Delivering scalable workforce and janitorial solutions across Saudi Arabia.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-slate-100">
        <LanguageProvider>
          {children}
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
