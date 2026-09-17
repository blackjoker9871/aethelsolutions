"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Cpu, Sparkles, Check, X, ShieldAlert, CheckCircle2 } from "lucide-react";

export const EngineeredNotPackagedSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Background Soft Pearl & Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] radial-violet-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. LARGE EDITORIAL STATEMENT ✦ */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Cpu className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              PHILOSOPHY // BESPOKE ENGINEERING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#17152F] leading-[1.08]"
          >
            WE DON'T HAND YOU
            <br />
            A TOOLBOX.
            <br />
            <span className="text-[#6D4AFF]">WE ENGINEER THE SYSTEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-[#17152F]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            The right technology depends on the problem, the workflow and the business. Aethel combines capabilities according to what the operation actually requires.
          </motion.p>
        </div>

        {/* ✦ 2. TACTILE COMPARISON PANELS: TOOLBOX VS. ENGINEERED SYSTEM ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* THE TOOLBOX TRAP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl neu-inset border border-[#E5E4DE] space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E4DE]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-200 text-zinc-600 flex items-center justify-center">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                    GENERIC APPROACH
                  </div>
                  <div className="text-base font-extrabold text-[#17152F]">
                    The "Toolbox" Approach
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-200 text-zinc-600 text-[10px] font-mono font-bold">
                FRAGMENTED
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#17152F]/75 font-medium">
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Hands you a dozen disconnected SaaS subscriptions and AI plugins.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Leaves integration, data cleaning, and duct-tape maintenance to your team.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Forces staff to change how they work to fit rigid templates.</span>
              </div>
            </div>
          </motion.div>

          {/* THE AETHEL ENGINEERED SYSTEM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_30px_rgba(109,74,255,0.18)] space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#EEEAFF]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_2px_10px_rgba(109,74,255,0.3)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                    AETHEL METHOD
                  </div>
                  <div className="text-base font-extrabold text-[#17152F]">
                    The Engineered System
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EEEAFF] text-[#6D4AFF] text-[10px] font-mono font-bold">
                SYNCHRONIZED
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#17152F]/90 font-medium">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D4AFF] shrink-0 mt-0.5" />
                <span>Architects a singular, unified platform designed specifically for your workflows.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D4AFF] shrink-0 mt-0.5" />
                <span>Engineers data pipelines, AI models, voice telephony, and custom UI into one core.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D4AFF] shrink-0 mt-0.5" />
                <span>Maintains, scales, and adapts as your operational load expands.</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
