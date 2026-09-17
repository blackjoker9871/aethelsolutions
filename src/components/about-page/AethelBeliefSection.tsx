"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  X,
  Sliders,
  Workflow,
} from "lucide-react";

export const AethelBeliefSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Layers className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              OUR BELIEF
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            SOFTWARE SHOULD
            <br />
            <span className="text-[#6D4AFF]">FIT THE BUSINESS.</span>
          </motion.h2>
        </div>

        {/* ✦ 1. CONTRASTING COMPARISON INTERFACE ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* LEFT: GENERIC SOFTWARE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl neu-inset border border-[#E5E4DE] space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DE] text-xs font-mono">
              <span className="font-bold text-zinc-500 uppercase">
                THE OFF-THE-SHELF FLAW
              </span>
              <span className="text-rose-500 font-bold">RIGID CONSTRAINTS</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-[#17152F]">
                Generic SaaS Template
              </h3>
              <p className="text-xs text-[#17152F]/70">
                Forces your employees and workflows to warp around predetermined fields.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 border border-[#E5E4DE] space-y-2 text-center text-xs font-mono font-bold text-[#17152F]">
              <div className="p-2 rounded-lg bg-zinc-100">01 // PRE-MADE TEMPLATE</div>
              <div className="text-zinc-400">↓</div>
              <div className="p-2 rounded-lg bg-zinc-100">02 // SUPERFICIAL CONFIG</div>
              <div className="text-zinc-400">↓</div>
              <div className="p-2 rounded-lg bg-rose-50 text-rose-600 border border-rose-200">
                03 // ADAPT BUSINESS TO SOFTWARE
              </div>
            </div>
          </motion.div>

          {/* RIGHT: AETHEL SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl neu-flat border-2 border-[#6D4AFF] shadow-[0_12px_36px_rgba(109,74,255,0.18)] space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EEEAFF] text-xs font-mono">
              <span className="font-bold text-[#6D4AFF] uppercase">
                THE AETHEL PARADIGM
              </span>
              <span className="text-emerald-600 font-bold">BESPOKE ARCHITECTURE</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-[#17152F]">
                The Engineered System
              </h3>
              <p className="text-xs text-[#17152F]/80">
                Studying the exact operational reality first, then engineering the tools around it.
              </p>
            </div>

            <div className="p-4 rounded-2xl neu-inset space-y-2 text-center text-xs font-mono font-bold text-[#17152F]">
              <div className="p-2 rounded-lg bg-white border border-[#EEEAFF]">01 // DEEP OPERATIONAL AUDIT</div>
              <div className="text-[#6D4AFF]">↓</div>
              <div className="p-2 rounded-lg bg-white border border-[#EEEAFF]">02 // BESPOKE SYSTEM ARCHITECTURE</div>
              <div className="text-[#6D4AFF]">↓</div>
              <div className="p-2 rounded-lg bg-[#6D4AFF] text-white shadow-sm">
                03 // ENGINEER AROUND THE BUSINESS
              </div>
            </div>
          </motion.div>

        </div>

        {/* ✦ 2. VISUAL TRANSFORMATION PIPELINE & DUAL STATEMENTS ✦ */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl neu-flat border border-[#EEEAFF] space-y-8 text-center">
          
          <div className="text-xs font-mono font-bold text-[#6D4AFF] uppercase">
            AETHEL SYSTEM TRANSFORMATION HIERARCHY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono font-bold text-[#17152F]">
            {[
              { num: "01", name: "BUSINESS" },
              { num: "02", name: "REQUIREMENTS" },
              { num: "03", name: "WORKFLOW" },
              { num: "04", name: "SYSTEM" },
              { num: "05", name: "INTELLIGENCE" },
            ].map((node, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl neu-inset flex flex-col items-center justify-center space-y-1"
              >
                <span className="text-[9px] text-[#6D4AFF]">{node.num}</span>
                <span>{node.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t border-[#EEEAFF]">
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#17152F]">
              "WE DON'T ASK THE BUSINESS TO FIT THE SOFTWARE."
            </h3>
            <p className="text-sm sm:text-lg font-bold text-[#6D4AFF]">
              "WE BUILD THE SOFTWARE AROUND THE BUSINESS."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
