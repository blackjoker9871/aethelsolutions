"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  ArrowUpRight,
  Cpu,
  Users,
  Database,
  Workflow,
  BrainCircuit,
  Zap,
} from "lucide-react";

export interface CoreOrbitalElement {
  id: string;
  name: string;
  role: string;
  angle: number; // in degrees
  icon: React.ElementType;
}

const CORE_ORBITALS: CoreOrbitalElement[] = [
  { id: "business", name: "BUSINESS", role: "Core Reality & Domain", angle: 0, icon: Layers },
  { id: "data", name: "DATA", role: "Operational Telemetry", angle: 60, icon: Database },
  { id: "workflow", name: "WORKFLOW", role: "Deterministic Execution", angle: 120, icon: Workflow },
  { id: "intelligence", name: "INTELLIGENCE", role: "Reasoning & Evaluation", angle: 180, icon: BrainCircuit },
  { id: "automation", name: "AUTOMATION", role: "Zero-Loss Synchronization", angle: 240, icon: Zap },
  { id: "people", name: "PEOPLE", role: "Operators & Executives", angle: 300, icon: Users },
];

export const AboutHero: React.FC = () => {
  const [activeOrbitalId, setActiveOrbitalId] = useState<string>("business");

  const activeOrbital =
    CORE_ORBITALS.find((o) => o.id === activeOrbitalId) || CORE_ORBITALS[0];
  const ActiveIcon = activeOrbital.icon;

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid">
      {/* Ambient background glow */}
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
              <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                ABOUT AETHEL // COMPANY MANIFESTO
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
            WE BUILD
            <br />
            <span className="text-[#6D4AFF]">WHAT BUSINESS NEEDS NEXT.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3 max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-xl font-medium text-[#17152F]/90 leading-relaxed">
              Aethel exists to rethink the way businesses operate in a world where software, automation and artificial intelligence can become part of the business itself.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#6D4AFF] tracking-wide">
              Not another software vendor. An engineering partner for the systems behind the business.
            </p>
          </motion.div>
        </div>

        {/* ✦ 2. PRECISION-ENGINEERED AETHEL MECHANISM HERO VISUAL ✦ */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-10 neu-flat border border-[#EEEAFF] overflow-hidden">
            
            {/* Visualizer Canvas */}
            <div className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center">
              
              {/* Concentric Guide Rings */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#6D4AFF]/15 pointer-events-none" />
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-[#6D4AFF]/20 pointer-events-none animate-[spin_120s_linear_infinite]" />

              {/* ✦ CENTER: PHYSICAL AETHEL CORE MECHANISM ✦ */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl neu-flat flex flex-col items-center justify-center p-4 text-center border-2 border-[#6D4AFF] shadow-[0_8px_32px_rgba(109,74,255,0.22)]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-extrabold text-lg sm:text-xl shadow-[0_4px_16px_rgba(109,74,255,0.4)] mb-2">
                  Æ
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#6D4AFF] uppercase">
                  ENGINEERING CORE
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#17152F] tracking-tight">
                  AETHEL SOLUTIONS
                </span>
                <div className="mt-1.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full neu-inset-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-ping" />
                  <span className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                    SYSTEM ACTIVE
                  </span>
                </div>
              </motion.div>

              {/* ✦ 6 ORBITING SYSTEM SATELLITE NODES ✦ */}
              {CORE_ORBITALS.map((orbital, idx) => {
                const isSelected = orbital.id === activeOrbitalId;
                const Icon = orbital.icon;

                const angleRad = (orbital.angle * Math.PI) / 180;
                const radius = 210;
                const x = Math.round(Math.cos(angleRad) * radius);
                const y = Math.round(Math.sin(angleRad) * radius);

                return (
                  <React.Fragment key={orbital.id}>
                    {/* SVG Connecting Ray */}
                    <svg
                      className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-10"
                      viewBox="-250 -250 500 500"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2={x}
                        y2={y}
                        stroke={isSelected ? "#6D4AFF" : "#EEEAFF"}
                        strokeWidth={isSelected ? "2.5" : "1.5"}
                        strokeDasharray={isSelected ? "4 4" : "none"}
                      />
                    </svg>

                    {/* Node Button (Desktop Floating Position) */}
                    <motion.button
                      type="button"
                      onClick={() => setActiveOrbitalId(orbital.id)}
                      initial={{ opacity: 0, scale: 0.8, x: x, y: y, translateX: "-50%", translateY: "-50%" }}
                      animate={{ opacity: 1, scale: isSelected ? 1.08 : 1, x: x, y: y, translateX: "-50%", translateY: "-50%" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      className={`hidden sm:flex absolute z-30 items-center gap-2 px-3.5 py-2 rounded-2xl cursor-pointer transition-shadow duration-300 select-none ${
                        isSelected
                          ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_6px_20px_rgba(109,74,255,0.25)] bg-white"
                          : "neu-flat-interactive hover:border-[#6D4AFF]/40 bg-white/90"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#6D4AFF] text-white"
                            : "neu-inset-sm text-[#6D4AFF]"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-extrabold text-[#17152F] whitespace-nowrap">
                        {orbital.name}
                      </span>
                    </motion.button>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Grid View for the 6 Orbitals */}
            <div className="sm:hidden grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#EEEAFF]">
              {CORE_ORBITALS.map((orbital) => {
                const isSelected = orbital.id === activeOrbitalId;
                const Icon = orbital.icon;
                return (
                  <button
                    key={orbital.id}
                    onClick={() => setActiveOrbitalId(orbital.id)}
                    className={`p-2.5 rounded-xl flex items-center gap-2 text-left transition-all ${
                      isSelected
                        ? "neu-flat border border-[#6D4AFF] bg-[#EEEAFF]/30"
                        : "neu-flat-sm"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#6D4AFF]" />
                    <span className="text-xs font-extrabold text-[#17152F]">
                      {orbital.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Telemetry Footnote */}
            <div className="mt-6 pt-4 border-t border-[#EEEAFF] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#6D4AFF]">
                  CORE FOCUS: {activeOrbital.name}
                </span>
                <span className="text-[#17152F]/50 hidden sm:inline">
                  — {activeOrbital.role}
                </span>
              </div>
              <span className="text-[10px] text-[#17152F]/40 font-bold uppercase">
                AETHEL METHOD // REASONING FIRST
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
