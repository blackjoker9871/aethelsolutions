"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStatementSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 sm:py-48 bg-[#F7F6F2] text-[#17152F] overflow-hidden flex items-center justify-center">
      {/* Very Subtle Violet Light Behind Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] radial-violet-glow pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        
        {/* Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-[#6D4AFF] uppercase"
        >
          AETHEL
        </motion.div>

        {/* Enormous Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-8xl xl:text-9xl font-extrabold tracking-tighter text-[#17152F] leading-[0.95]"
        >
          THE NEXT
          <br />
          <span className="text-[#6D4AFF]">ORDER.</span>
        </motion.h2>

        {/* Supporting Triplet */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto pt-4 space-y-1 text-sm sm:text-base font-mono font-medium text-[#17152F]/75"
        >
          <div>AI computing.</div>
          <div>AI automation.</div>
          <div className="text-[#6D4AFF] font-bold">
            Business systems engineered around the way you work.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
