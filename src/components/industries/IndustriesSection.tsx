"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Layers, Cpu } from "lucide-react";
import { IndustryEngineConsole, INDUSTRIES_DATA } from "./IndustryEngineConsole";
import { IndustryModuleButton } from "./IndustryModuleButton";

export const IndustriesSection: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>("manufacturing");

  return (
    <section
      id="industries"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER & POSITIONING ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[#6D4AFF]">
                <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  BUILT AROUND YOUR BUSINESS
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#17152F] leading-[1.02]">
                DIFFERENT INDUSTRIES.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  DIFFERENT SYSTEMS.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#17152F]/75 leading-relaxed font-normal max-w-xl"
            >
              Every industry has its own workflows, bottlenecks and opportunities. Aethel adapts the technology to the way your business operates.
            </motion.p>
          </div>

          {/* Right Column: Alternative Statement Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 neu-flat p-6 sm:p-7 rounded-3xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                <Layers className="w-4 h-4" />
                <span>CORE DIRECTIVE</span>
              </div>
              <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[10px] text-[#6D4AFF] font-bold">
                Anti-Template
              </span>
            </div>
            <p className="text-lg sm:text-xl font-extrabold text-[#17152F] tracking-tight leading-snug">
              &quot;WE BUILD FOR THE{" "}
              <span className="text-[#6D4AFF]">BUSINESS</span>.
              <br />
              <span className="text-[#6D4AFF]">NOT THE TEMPLATE</span>.&quot;
            </p>
            <p className="text-xs font-mono text-[#17152F]/70 pt-1 border-t border-[#EEEAFF]">
              Generic SaaS forces your team to bend their workflows to rigid software limitations. We engineer software that flexes around your operational reality.
            </p>
          </motion.div>

        </div>

        {/* ✦ 8 INDUSTRY SELECTOR MODULES + CENTRAL ENGINE CONSOLE ✦ */}
        <div className="space-y-8">
          
          {/* 8 Industry Selector Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-2 border-b border-[#EEEAFF]">
              <span className="font-bold uppercase tracking-wider text-[#6D4AFF]">
                SELECT AN INDUSTRY MODULE TO RECONFIGURE ENGINE:
              </span>
              <span>8 PROTOCOLS AVAILABLE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {INDUSTRIES_DATA.map((industry, index) => (
                <IndustryModuleButton
                  key={industry.id}
                  industry={industry}
                  isActive={activeIndustryId === industry.id}
                  onSelect={() => setActiveIndustryId(industry.id)}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Central Industry Engine Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <IndustryEngineConsole
              activeIndustryId={activeIndustryId}
              onSelectIndustry={(id) => setActiveIndustryId(id)}
            />
          </motion.div>

        </div>

        {/* ✦ "THAT'S THE POINT" STATEMENT CALLOUT ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl neu-flat text-center max-w-4xl mx-auto space-y-3"
        >
          <div className="text-[11px] font-mono font-bold text-zinc-500 tracking-widest uppercase">
            EXAMPLES OF WHAT CAN BE ENGINEERED
          </div>
          <p className="text-lg sm:text-2xl font-bold text-[#17152F] tracking-tight">
            &quot;Your workflow may be completely different.&quot;
          </p>
          <p className="text-2xl sm:text-4xl font-extrabold text-[#6D4AFF] tracking-tight pt-1">
            &quot;That&apos;s the point.&quot;
          </p>
        </motion.div>

        {/* ✦ SECTION CLOSING & CTAS ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 p-8 sm:p-12 rounded-3xl neu-core-panel flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="w-10 h-10 rounded-2xl neu-inset-sm flex items-center justify-center mb-1 text-[#6D4AFF]">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-mono font-bold text-zinc-500 tracking-wider uppercase">
              THERE IS NO ONE-SIZE-FITS-ALL BUSINESS.
            </p>
            <p className="text-sm sm:text-base font-bold text-[#17152F]">
              SO WE DON&apos;T BUILD ONE-SIZE-FITS-ALL SYSTEMS.
            </p>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight pt-2">
            WE BUILD <span className="text-[#6D4AFF]">YOURS.</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#17152F]/70 font-mono max-w-md">
            Tell us what your business does. We&apos;ll show you what could be automated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
            {/* Primary Action */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-violet rounded-full cursor-pointer shadow-[0_6px_24px_rgba(109,74,255,0.35)] w-full sm:w-auto"
            >
              <span>BUILD MY SYSTEM</span>
              <span className="text-[#EEEAFF] group-hover:text-white group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-light rounded-full cursor-pointer w-full sm:w-auto text-[#17152F]"
            >
              <span>DISCUSS YOUR BUSINESS</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
