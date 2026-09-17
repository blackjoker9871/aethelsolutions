"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Network,
  Zap,
  Cpu,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const APPROACH_MODULES = [
  {
    num: "01",
    title: "UNDERSTAND",
    subtitle: "Map the workflow.",
    description:
      "We begin inside your business reality. We map every touchpoint, spreadsheet handoff, and human bottleneck before writing a single line of code.",
    icon: Compass,
    badge: "WORKFLOW DISCOVERY",
  },
  {
    num: "02",
    title: "CONNECT",
    subtitle: "Bring systems and data together.",
    description:
      "Legacy databases, CRM APIs, WhatsApp chats, and local shop-floor files unified into a single deterministic real-time data spine.",
    icon: Network,
    badge: "DATA PIPELINE",
  },
  {
    num: "03",
    title: "AUTOMATE",
    subtitle: "Remove repetitive processes.",
    description:
      "Eliminate manual data re-entry, routine triage calls, invoicing chasing, and document assembly with zero human latency.",
    icon: Zap,
    badge: "AUTONOMOUS OPS",
  },
  {
    num: "04",
    title: "INTELLIGENT",
    subtitle: "Introduce AI where it creates value.",
    description:
      "Deploy custom fine-tuned LLMs, vision inspection models, and intelligent agents strictly where they multiply operational leverage.",
    icon: Cpu,
    badge: "BESPOKE AI",
  },
  {
    num: "05",
    title: "EVOLVE",
    subtitle: "Improve the system as the business grows.",
    description:
      "Living architecture that scales with higher transaction volumes, new branch locations, and evolving commercial directives.",
    icon: TrendingUp,
    badge: "CONTINUOUS SCALE",
  },
];

export const OneEngineeringApproach: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]">
      {/* Ambient Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. SECTION EDITORIAL HEADER ✦ */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
              <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                ONE ENGINEERING APPROACH
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-[1.08]"
          >
            DIFFERENT INDUSTRIES.
            <br />
            <span className="text-[#6D4AFF]">ONE PRINCIPLE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#17152F]/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We understand the workflow, identify the friction and engineer the right combination of software, AI and automation.
          </motion.p>
        </div>

        {/* ✦ 2. FIVE TACTILE NEOMORPHIC MODULES CONNECTED BY VIOLET DATA PATH ✦ */}
        <div className="relative">
          
          {/* Desktop Connecting SVG Violet Data Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="4%"
                y1="50%"
                x2="96%"
                y2="50%"
                stroke="#6D4AFF"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-beam-flow opacity-60"
              />
            </svg>
          </div>

          {/* 5 Tactile Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {APPROACH_MODULES.map((mod, idx) => {
              const Icon = mod.icon;

              return (
                <motion.div
                  key={mod.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative neu-flat rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:neu-core-panel transition-all duration-300 bg-white hover:-translate-y-1.5 border border-[#EEEAFF]"
                >
                  {/* Top Node Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold shadow-[0_6px_16px_rgba(109,74,255,0.3)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-extrabold text-[#6D4AFF] px-2.5 py-1 rounded-full neu-inset-sm">
                        {mod.num}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-[#6D4AFF] font-bold uppercase tracking-wider mb-1">
                        {mod.badge}
                      </div>
                      <h3 className="text-lg font-extrabold text-[#17152F] tracking-tight">
                        {mod.title}
                      </h3>
                      <p className="text-xs font-bold text-[#6D4AFF] mt-0.5">
                        {mod.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#17152F]/75 font-normal leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 border-t border-[#EEEAFF] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>STEP {mod.num} OF 05</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] group-hover:animate-ping" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
