"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Radio,
  Network,
  Users,
  Database,
  ArrowUpRight,
} from "lucide-react";

interface FuturePillar {
  name: string;
  tagline: string;
  icon: React.ElementType;
}

const FUTURE_PILLARS: FuturePillar[] = [
  { name: "AI COMPUTING", tagline: "On-premise & low-latency edge inference for proprietary business data.", icon: Cpu },
  { name: "BUSINESS AUTOMATION", tagline: "Autonomous multi-system self-healing event pipelines.", icon: Workflow },
  { name: "INTELLIGENT DEVICES", tagline: "Physical telemetry, sensors & optical scanning endpoints.", icon: Radio },
  { name: "CONNECTED WORKSPACES", tagline: "Seamless ambient human-AI collaboration interfaces.", icon: Network },
  { name: "CUSTOM INFRASTRUCTURE", tagline: "Bespoke internal operating systems replacing rigid SaaS stacks.", icon: Layers },
  { name: "ADVANCED AI SYSTEMS", tagline: "Domain-specific multi-agent reasoning & autonomous execution networks.", icon: Sparkles },
];

export const FutureVisionSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] radial-violet-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              WHAT'S NEXT // FUTURE DIRECTION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            WE'RE BUILDING TOWARD
            <br />
            <span className="text-[#6D4AFF]">
              A DIFFERENT KIND OF COMPANY.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Our long-term trajectory moves beyond isolated web projects toward full-spectrum intelligent business infrastructure.
          </motion.p>
        </div>

        {/* ✦ 1. CONCEPTUAL FUTURE ARCHITECTURAL SYNTHESIS ✦ */}
        <div className="p-6 sm:p-10 rounded-3xl neu-flat border border-[#EEEAFF] max-w-5xl mx-auto space-y-8 mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EEEAFF] text-xs font-mono">
            <span className="font-bold text-[#6D4AFF]">
              CONCEPTUAL ARCHITECTURE // FUTURE WORKSPACE
            </span>
            <span className="px-2.5 py-0.5 rounded-full neu-inset-sm text-[10px] font-bold text-[#17152F]/60">
              FUTURE DIRECTION
            </span>
          </div>

          {/* Formula Stack */}
          <div className="p-6 rounded-2xl neu-inset flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-extrabold text-[#17152F] text-center">
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">A BUSINESS</span>
            <span className="text-[#6D4AFF]">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">PEOPLE</span>
            <span className="text-[#6D4AFF]">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">AI</span>
            <span className="text-[#6D4AFF]">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">DEVICES</span>
            <span className="text-[#6D4AFF]">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">DATA</span>
            <span className="text-[#6D4AFF]">+</span>
            <span className="px-3 py-1.5 rounded-xl bg-white shadow-sm">AUTOMATION</span>
            <span className="text-[#6D4AFF]">=</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#6D4AFF] text-white shadow-sm">
              ONE CONNECTED SYSTEM
            </span>
          </div>

          {/* 6 Conceptual Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FUTURE_PILLARS.map((fp, i) => {
              const Icon = fp.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-[#EEEAFF] space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-lg bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-mono text-[#6D4AFF] font-bold">
                      CONCEPT
                    </span>
                  </div>
                  <div className="text-xs font-extrabold text-[#17152F]">
                    {fp.name}
                  </div>
                  <p className="text-[11px] text-[#17152F]/70 leading-relaxed font-medium">
                    {fp.tagline}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
