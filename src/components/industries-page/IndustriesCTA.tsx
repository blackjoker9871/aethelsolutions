"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import Link from "next/link";

export const IndustriesCTA: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden" aria-label="Industries Call to Action">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] radial-violet-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-20 neu-flat text-center space-y-8 border-2 border-[#6D4AFF]/20 shadow-[0_16px_48px_rgba(109,74,255,0.14)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EEEAFF]/40 via-transparent to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
            <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              YOUR INDUSTRY. YOUR SYSTEM.
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#17152F] leading-[1.05] max-w-3xl mx-auto">
            HAVE A WORKFLOW
            <br />
            <span className="text-[#6D4AFF]">TO RE-ENGINEER?</span>
          </h2>

          {/* Supporting copy */}
          <p className="text-base sm:text-xl font-medium text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed">
            Tell us about the operational friction in your business. We&apos;ll explain how a custom system could resolve it.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-full neu-button-violet text-sm font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,74,255,0.4)] hover:scale-105 transition-all"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href="mailto:aethel.officialdesk@gmail.com"
              className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-full neu-button-light text-sm font-extrabold tracking-wider text-[#17152F] flex items-center justify-center gap-2 hover:text-[#6D4AFF] transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#6D4AFF]" aria-hidden="true" />
              <span>TALK TO AETHEL</span>
            </a>
          </div>

          {/* Microcopy */}
          <div className="pt-2 text-xs font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
            Custom systems. Built around real workflows.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
