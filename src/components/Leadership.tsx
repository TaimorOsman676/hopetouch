"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Leadership() {
  const leaders = [
    {
      name: "Zabin Marran Aldossary",
      role: "Founder",
      company: "Hope Touch Global Ltd.",
      quote: "At Hope Touch Global Ltd., driven by passion and excellence, we create valuable opportunities for businesses, workers, and communities. We deliver results that speak for themselves – our goal is to provide highly skilled personnel for your projects, who are committed to completing the job correctly. Our results-oriented approach ensures that your goals are successfully achieved, no matter what challenges may arise.",
      tagline: "Driven by Passion, Leading with Purpose",
      image: "/assets/zabin_aldossary.png",
      alignRight: false,
    },
    {
      name: "Mr. Sagor Khan",
      role: "Founder & CEO",
      company: "Hope Touch Global Ltd.",
      quote: "I started this company with a singular purpose: to provide sustainable and trustworthy manpower and cleaning services to clients across Saudi Arabia. Our core belief is that every client deserves dedicated, thoroughly vetted, and reliable teams. Together with our talented team, we ensure that our clients receive the best possible solutions for their business needs.",
      tagline: "Bridging Opportunities, Cultivating Growth",
      image: "/assets/sagor_khan.png",
      alignRight: true,
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
            Our Executive Council
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-silver">A Message From Our Leadership</span>
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Row Layout */}
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <div 
              key={leader.name}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                leader.alignRight ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Leader Photo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/3 max-w-[340px]"
              >
                <div className="relative aspect-square rounded-leaf overflow-hidden shadow-2xl border-4 border-dark-border bg-dark-panel group">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-panel/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Leader Message Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1 space-y-6"
              >
                <Quote className="w-12 h-12 text-secondary opacity-30" />
                
                <h4 className="text-secondary font-bold text-xs uppercase tracking-wider -mt-2">
                  {leader.tagline}
                </h4>

                <p className="text-slate-200 text-lg md:text-xl italic leading-relaxed font-medium">
                  "{leader.quote}"
                </p>

                {/* Signature/Identity */}
                <div className="pt-4 border-t border-dark-border">
                  <h3 className="text-xl font-bold text-white">
                    {leader.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold mt-1">
                    {leader.role} — <span className="text-secondary">{leader.company}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
