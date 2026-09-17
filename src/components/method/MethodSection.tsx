"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Compass, GitMerge, Cpu, Zap, TrendingUp } from "lucide-react";
import { EngineeringConsole, METHOD_STAGES } from "./EngineeringConsole";
import { MethodStagePanel } from "./MethodStagePanel";

export const MethodSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("understand");

  return (
    <section
      id="the-method"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER & POSITIONING ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
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
                FROM BUSINESS PROBLEM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  TO INTELLIGENT SYSTEM.
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
              Every Aethel system begins by understanding how your business actually works. We map the process, identify opportunities, engineer the right technology, deploy it into your operations and continue evolving it as your business grows.
            </motion.p>
          </div>

          {/* Right Column: Engineering Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-6 neu-flat p-6 sm:p-7 rounded-3xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                <Compass className="w-4 h-4" />
                <span>FIRST PRINCIPLES ENGINEERING</span>
              </div>
              <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[10px] text-[#6D4AFF] font-bold">
                Custom Tailored
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#17152F] leading-snug">
              &quot;We don&apos;t start with technology.
              <br />
              <span className="text-[#6D4AFF]">We start with understanding.</span>&quot;
            </p>
            <p className="text-xs sm:text-sm text-[#17152F]/70 leading-relaxed font-mono pt-1 border-t border-[#EEEAFF]">
              Most agencies rush to sell pre-packaged subscriptions. We engineer bespoke operating infrastructure centered entirely on your unique business logic.
            </p>
          </motion.div>

        </div>

        {/* ✦ MASTER AETHEL ENGINEERING CONSOLE ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-16"
        >
          <EngineeringConsole
            activeStageId={activeStageId}
            onSelectStage={(id) => setActiveStageId(id)}
          />
        </motion.div>

        {/* ✦ 5 STAGE PANELS DEEP-DIVE GRID ✦ */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EEEAFF] pb-5">
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase mb-1">
                FIVE ENGINEERING PHASES
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17152F]">
                The Execution Lifecycle
              </h3>
            </div>
            <div className="text-xs font-mono text-[#17152F]/60">
              ENGAGE INDIVIDUAL STAGES BELOW
            </div>
          </div>

          {/* Grid of 5 Stages (2 Top Prominent + 3 Bottom Row on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {METHOD_STAGES.map((stage, index) => (
              <MethodStagePanel
                key={stage.id}
                stage={stage}
                isActive={activeStageId === stage.id}
                onSelect={() => setActiveStageId(stage.id)}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* ✦ FIT THE BUSINESS QUOTE BRIDGE ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-3xl neu-flat text-center max-w-4xl mx-auto space-y-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#17152F] tracking-tight leading-snug">
            &quot;Technology should{" "}
            <span className="text-[#6D4AFF] underline decoration-[#6D4AFF]/40 underline-offset-6">
              fit the business
            </span>
            .
            <br />
            The business shouldn&apos;t have to fit the technology.&quot;
          </p>

          <p className="text-xs sm:text-sm font-mono text-[#17152F]/60 pt-1">
            BESPOKE ENGINEERING • DETERMINISTIC LOGIC • AUTONOMOUS EVOLUTION
          </p>
        </motion.div>

        {/* ✦ BOTTOM SECTION CTA ✦ */}
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

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight">
            LET&apos;S ENGINEER YOUR BUSINESS.
          </h3>

          <p className="text-sm sm:text-base text-[#17152F]/70 font-mono max-w-md">
            Tell us what is slowing your business down.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            {/* Primary Action */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-violet rounded-full cursor-pointer shadow-[0_6px_24px_rgba(109,74,255,0.35)] w-full sm:w-auto"
            >
              <span>START A PROJECT</span>
              <span className="text-[#EEEAFF] group-hover:text-white group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href="#the-method"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-light rounded-full cursor-pointer w-full sm:w-auto text-[#17152F]"
            >
              <span>TALK TO AETHEL</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
