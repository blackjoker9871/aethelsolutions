"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ContactClosingManifesto: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-40 bg-[#F7F6F2] text-[#17152F] overflow-hidden flex items-center justify-center">
      {/* Subtle Ambient Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] radial-violet-glow pointer-events-none -z-10 opacity-70" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        
        {/* Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-[#6D4AFF] uppercase"
        >
          AETHEL
        </motion.div>

        {/* Large Cinematic Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tighter text-[#17152F] leading-[0.95]"
        >
          THE NEXT
          <br />
          <span className="text-[#6D4AFF]">ORDER.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base font-mono text-[#17152F]/70 font-medium"
        >
          Business systems engineered around the way you work.
        </motion.p>

        {/* Final Emotional Manifesto Pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl neu-flat border-2 border-[#6D4AFF]/30 max-w-2xl mx-auto space-y-3"
        >
          <div className="text-xs font-mono font-bold text-[#6D4AFF] uppercase">
            AETHEL INVITATION
          </div>
          <p className="text-base sm:text-lg font-extrabold text-[#17152F] leading-snug">
            "DON'T BRING US A SOFTWARE IDEA.
            <br />
            BRING US A BUSINESS PROBLEM.
            <br />
            <span className="text-[#6D4AFF]">
              WE'LL FIGURE OUT WHAT SHOULD BE BUILT."
            </span>
          </p>
        </motion.div>

        <div className="pt-2">
          <a
            href="#intake-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full neu-button-violet text-xs font-mono font-bold shadow-[0_4px_20px_rgba(109,74,255,0.4)] hover:scale-105 transition-transform"
          >
            <span>START A PROJECT →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
