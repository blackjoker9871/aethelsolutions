"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Cpu,
  Bot,
  Zap,
  Code2,
  Workflow,
  ArrowDown,
} from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid">
      {/* Background Soft Pearl & Violet Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] radial-violet-glow pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. HERO EDITORIAL HEADER ✦ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-5">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
              <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                START A PROJECT // ENGINEERING INTAKE
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#17152F] leading-[1.05]"
          >
            LET'S BUILD
            <br />
            WHAT YOUR BUSINESS
            <br />
            <span className="text-[#6D4AFF]">NEEDS NEXT.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2 max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-xl font-medium text-[#17152F]/90 leading-relaxed">
              Tell us what is slowing your business down, what you want to build, or where you see an opportunity for automation.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#6D4AFF] tracking-wide">
              We'll start with the problem—not the technology.
            </p>
          </motion.div>
        </div>

        {/* ✦ 2. PHYSICAL AETHEL PROJECT INITIATION TERMINAL ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl neu-flat border border-[#EEEAFF] space-y-6 relative overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EEEAFF] text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                Æ
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#6D4AFF]">
                  PROJECT INITIATION // PROTOCOL
                </div>
                <div className="text-sm font-extrabold text-[#17152F]">
                  STATUS: READY FOR INTAKE
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-emerald-700 font-bold hidden sm:inline">
                CONSOLE ONLINE
              </span>
            </div>
          </div>

          {/* Connected Domain Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono font-bold text-[#17152F]">
            {[
              { name: "SYSTEM", icon: Workflow },
              { name: "AI", icon: Bot },
              { name: "AUTOMATION", icon: Zap },
              { name: "SOFTWARE", icon: Code2 },
            ].map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="p-3 rounded-2xl neu-inset flex items-center justify-center gap-2"
                >
                  <Icon className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <span>{d.name}</span>
                </div>
              );
            })}
          </div>

          {/* Animated Prompt Bar */}
          <div className="p-4 rounded-2xl bg-white border border-[#EEEAFF] flex items-center justify-between text-xs font-mono shadow-sm">
            <div className="flex items-center gap-2 text-[#6D4AFF]">
              <span className="font-extrabold">&gt;</span>
              <span className="font-bold text-[#17152F] animate-pulse">
                WHAT ARE WE BUILDING?
              </span>
            </div>
            <span className="text-[10px] text-[#17152F]/40 font-bold uppercase">
              STEP-BY-STEP INTAKE ↓
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
