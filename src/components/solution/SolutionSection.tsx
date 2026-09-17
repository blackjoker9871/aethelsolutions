"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";
import { SolutionPipeline } from "./SolutionPipeline";

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="the-solution"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]"
    >
      {/* Background Soft Violet Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER ✦ */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5 sm:space-y-6">
          
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
                THE AETHEL METHOD
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
              WE DON&apos;T AUTOMATE TASKS.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                WE ENGINEER SYSTEMS.
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-semibold text-[#17152F] pt-2 tracking-tight">
              Every business is different. So your technology should be too.
            </p>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#17152F]/75 leading-relaxed font-normal"
          >
            Aethel studies your workflows, connects your existing tools and builds intelligent systems that work around the way your business actually operates.
          </motion.p>
        </div>

        {/* ✦ INTERACTIVE BUSINESS INTELLIGENCE PIPELINE ✦ */}
        <SolutionPipeline />

        {/* ✦ ADAPT TO YOUR BUSINESS PHILOSOPHY STATEMENT ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl neu-flat text-center max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-2xl font-bold tracking-tight text-[#17152F] leading-snug">
            &quot;Technology should{" "}
            <span className="text-[#6D4AFF] underline decoration-[#6D4AFF]/40 underline-offset-4">
              adapt to your business
            </span>{" "}
            — not force your business to adapt to technology.&quot;
          </p>
        </motion.div>

        {/* ✦ BOTTOM SECTION CTA ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl neu-core-panel flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="w-8 h-8 rounded-xl neu-inset-sm flex items-center justify-center mb-1">
            <Sparkles className="w-4 h-4 text-[#6D4AFF]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
            READY TO BUILD YOUR SYSTEM?
          </h3>

          <p className="text-sm sm:text-base text-[#17152F]/70 font-mono max-w-md">
            Tell us what is slowing your business down.
          </p>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-violet rounded-full cursor-pointer mt-2"
          >
            <span>START WITH AETHEL</span>
            <span className="text-[#EEEAFF] group-hover:text-white group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
