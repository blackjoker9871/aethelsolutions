"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Cpu, Sparkles, Binary } from "lucide-react";

export const NotATemplateSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]">
      {/* Subtle Violet Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative neu-core-panel rounded-3xl p-8 sm:p-16 text-center max-w-5xl mx-auto space-y-8 bg-white/95 border-2 border-[#EEEAFF] shadow-[0_16px_48px_rgba(23,21,47,0.06)]"
        >
          {/* Top Micro Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[#6D4AFF]">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              THE ANTI-TEMPLATE STANDARD
            </span>
          </div>

          {/* Large Headline Statement */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold text-[#17152F] tracking-tight leading-[1.12]">
              &quot;WE DON&apos;T BUILD THE SAME SYSTEM
              <br className="hidden sm:block" />
              {" "}FOR EVERY BUSINESS.
            </h2>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-[#17152F] tracking-tight leading-[1.08]">
              WE BUILD THE{" "}
              <span className="text-[#6D4AFF]">RIGHT SYSTEM</span>
              <br className="hidden sm:block" />
              {" "}FOR YOUR BUSINESS.&quot;
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-[#17152F]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Your industry gives us the context.
            <br />
            <span className="font-semibold text-[#17152F]">Your workflow gives us the blueprint.</span>
          </p>

          {/* Neomorphic Proof Chips */}
          <div className="pt-6 border-t border-[#EEEAFF] flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono font-bold text-zinc-600">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl neu-flat-sm text-[#17152F] bg-white">
              <ShieldCheck className="w-4 h-4 text-[#6D4AFF]" />
              <span>Zero Off-The-Shelf Bottlenecks</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl neu-flat-sm text-[#17152F] bg-white">
              <Cpu className="w-4 h-4 text-[#6D4AFF]" />
              <span>Tailored Database & Agent Core</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl neu-flat-sm text-[#17152F] bg-white">
              <Binary className="w-4 h-4 text-[#6D4AFF]" />
              <span>Deterministic Operational Logic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
