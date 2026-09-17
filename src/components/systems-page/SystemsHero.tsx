"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Zap,
  Code2,
  PhoneCall,
  MessageSquare,
  GitFork,
  Eye,
  BarChart3,
  ArrowUpRight,
  Cpu,
  Sparkles,
  Activity,
  Layers,
  CheckCircle2,
} from "lucide-react";

export interface SystemTechModule {
  id: string;
  num: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: React.ElementType;
  color: string;
  angle: number; // Angle in degrees for radial layout
  radiusMultiplier: number;
}

export const TECH_MODULES: SystemTechModule[] = [
  {
    id: "ai-agents",
    num: "01",
    name: "AI AGENTS",
    shortName: "AGENTS",
    tagline: "Autonomous digital workers that reason & execute actions",
    icon: Bot,
    color: "#6D4AFF",
    angle: 0,
    radiusMultiplier: 1,
  },
  {
    id: "ai-automation",
    num: "02",
    name: "AI AUTOMATION",
    shortName: "AI AUTO",
    tagline: "Intelligence embedded directly inside decision loops",
    icon: Zap,
    color: "#6D4AFF",
    angle: 45,
    radiusMultiplier: 1,
  },
  {
    id: "custom-software",
    num: "03",
    name: "CUSTOM SOFTWARE",
    shortName: "SOFTWARE",
    tagline: "Engineered interfaces tailored to your exact operational logic",
    icon: Code2,
    color: "#6D4AFF",
    angle: 90,
    radiusMultiplier: 1,
  },
  {
    id: "voice-ai",
    num: "04",
    name: "VOICE AI",
    shortName: "VOICE",
    tagline: "Sub-second autonomous phone calls & real-time audio routing",
    icon: PhoneCall,
    color: "#6D4AFF",
    angle: 135,
    radiusMultiplier: 1,
  },
  {
    id: "whatsapp-ai",
    num: "05",
    name: "WHATSAPP AI",
    shortName: "WHATSAPP",
    tagline: "Conversational channels converted into operational hubs",
    icon: MessageSquare,
    color: "#6D4AFF",
    angle: 180,
    radiusMultiplier: 1,
  },
  {
    id: "workflow-automation",
    num: "06",
    name: "WORKFLOW AUTOMATION",
    shortName: "WORKFLOW",
    tagline: "Deterministic multi-app event triggers and error-free pipelines",
    icon: GitFork,
    color: "#6D4AFF",
    angle: 225,
    radiusMultiplier: 1,
  },
  {
    id: "computer-vision",
    num: "07",
    name: "COMPUTER VISION",
    shortName: "VISION",
    tagline: "Optical inspection, automated OCR & physical visual parsing",
    icon: Eye,
    color: "#6D4AFF",
    angle: 270,
    radiusMultiplier: 1,
  },
  {
    id: "business-intelligence",
    num: "08",
    name: "BUSINESS INTELLIGENCE",
    shortName: "ANALYTICS",
    tagline: "Unified data telemetry turned into actionable executive clarity",
    icon: BarChart3,
    color: "#6D4AFF",
    angle: 315,
    radiusMultiplier: 1,
  },
];

export const SystemsHero: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("ai-agents");

  const selectedModule =
    TECH_MODULES.find((m) => m.id === selectedModuleId) || TECH_MODULES[0];
  const SelectedIcon = selectedModule.icon;

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid">
      {/* Background Soft Pearl & Violet Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] radial-violet-glow pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ✦ 1. CINEMATIC HERO EDITORIAL HEADER ✦ */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
              <span className="w-2 h-2 rounded-full bg-[#6D4AFF] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#6D4AFF] -ml-4" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                AETHEL SYSTEMS
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
            THE TECHNOLOGY
            <br />
            <span className="text-[#6D4AFF]">BEHIND THE SYSTEM.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2 max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-xl font-medium text-[#17152F]/90 leading-relaxed">
              AI, automation and software are most powerful when they work together.
            </p>
            <p className="text-xs sm:text-sm font-normal text-[#17152F]/65 leading-relaxed">
              We engineer the individual components and connect them into intelligent business infrastructure.
            </p>
          </motion.div>

          {/* Core Formula Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-[#6D4AFF]"
          >
            <span className="px-3.5 py-1.5 rounded-full neu-flat">
              8 CORE CAPABILITIES
            </span>
            <span className="text-[#17152F]/40 font-bold">→</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#6D4AFF] text-white shadow-[0_2px_10px_rgba(109,74,255,0.3)]">
              1 UNIFIED ARCHITECTURE
            </span>
          </motion.div>
        </div>

        {/* ✦ 2. LARGE PHYSICAL AETHEL SYSTEM CORE HERO VISUAL ✦ */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Central Console Wrapper */}
          <div className="relative rounded-3xl p-6 sm:p-10 neu-flat overflow-hidden border border-[#EEEAFF]">
            {/* Background Mesh Grid & Circuit Interconnects */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            {/* Desktop / Tablet Radial Architecture Visualizer */}
            <div className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
              
              {/* Concentric Orbital Rings */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#6D4AFF]/15 pointer-events-none" />
              <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-[#6D4AFF]/20 pointer-events-none animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full border border-[#17152F]/5 pointer-events-none" />

              {/* ✦ CENTER: AETHEL SYSTEM CORE PHYSICAL UNIT ✦ */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-3xl neu-flat flex flex-col items-center justify-center p-4 text-center border-2 border-[#6D4AFF] shadow-[0_8px_32px_rgba(109,74,255,0.25)] cursor-pointer group"
              >
                {/* Core Pulsing Rings */}
                <div className="absolute -inset-2 rounded-[28px] border border-[#6D4AFF]/30 animate-pulse pointer-events-none" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-extrabold text-lg sm:text-xl shadow-[0_4px_16px_rgba(109,74,255,0.4)] mb-2 group-hover:scale-105 transition-transform">
                  Æ
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#6D4AFF] uppercase">
                  CENTRAL HUB
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#17152F] tracking-tight leading-tight">
                  AETHEL SYSTEM CORE
                </span>
                <div className="mt-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full neu-inset-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-ping" />
                  <span className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                    SYNC ACTIVE
                  </span>
                </div>
              </motion.div>

              {/* ✦ 8 SURROUNDING TECHNOLOGY MODULE NODES ✦ */}
              {TECH_MODULES.map((module, index) => {
                const isSelected = module.id === selectedModuleId;
                const Icon = module.icon;
                
                // Calculate position on desktop circle (radius in px)
                const angleRad = (module.angle * Math.PI) / 180;
                const radius = 210; // base distance
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <React.Fragment key={module.id}>
                    {/* SVG Connecting Data Line to Central Core */}
                    <svg
                      className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
                      viewBox="-300 -300 600 600"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2={x}
                        y2={y}
                        stroke={isSelected ? "#6D4AFF" : "#EEEAFF"}
                        strokeWidth={isSelected ? "2.5" : "1.5"}
                        strokeDasharray={isSelected ? "4 4" : "none"}
                        className={isSelected ? "animate-[dash_1s_linear_infinite]" : ""}
                      />
                      {isSelected && (
                        <circle
                          cx={x / 2}
                          cy={y / 2}
                          r="3"
                          fill="#6D4AFF"
                          className="animate-ping"
                        />
                      )}
                    </svg>

                    {/* Module Node Button (Desktop Floating Position) */}
                    <motion.button
                      onClick={() => setSelectedModuleId(module.id)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className={`hidden sm:flex absolute z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl cursor-pointer transition-all duration-300 select-none ${
                        isSelected
                          ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_20px_rgba(109,74,255,0.25)] scale-110"
                          : "neu-flat-interactive hover:border-[#6D4AFF]/40"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#6D4AFF] text-white"
                            : "neu-inset-sm text-[#6D4AFF]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                          {module.num}
                        </div>
                        <div className="text-xs font-extrabold text-[#17152F] whitespace-nowrap">
                          {module.shortName}
                        </div>
                      </div>
                    </motion.button>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Horizontal Carousel / Grid for the 8 Modules */}
            <div className="sm:hidden mt-6 pt-6 border-t border-[#EEEAFF] space-y-3">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase text-center">
                TAP TO EXPLORE CONNECTED TECHNOLOGIES
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {TECH_MODULES.map((module) => {
                  const isSelected = module.id === selectedModuleId;
                  const Icon = module.icon;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setSelectedModuleId(module.id)}
                      className={`p-3 rounded-xl flex items-center gap-2 text-left transition-all ${
                        isSelected
                          ? "neu-flat border-2 border-[#6D4AFF] bg-[#EEEAFF]/30"
                          : "neu-flat-sm"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-[#6D4AFF] text-white"
                            : "neu-inset-sm text-[#6D4AFF]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[8px] font-mono font-bold text-[#6D4AFF]">
                          {module.num}
                        </div>
                        <div className="text-[11px] font-extrabold text-[#17152F] truncate">
                          {module.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Module Real-time Telemetry Bar */}
            <div className="mt-8 pt-6 border-t border-[#EEEAFF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(109,74,255,0.3)]">
                  <SelectedIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      ACTIVE TELEMETRY: {selectedModule.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#17152F]/40">
                      // READY FOR INTEGRATION
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#17152F]">
                    {selectedModule.name}: {selectedModule.tagline}
                  </div>
                </div>
              </div>

              <a
                href="#capabilities"
                className="self-end sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF] hover:text-[#5332DB] transition-colors"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
