"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Stethoscope,
  Scale,
  Car,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  Cpu,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
  Zap,
} from "lucide-react";

interface IndustryNode {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  code: string;
  x: number; // percentage in coordinate space for SVG connections
  y: number;
}

const HERO_NODES: IndustryNode[] = [
  { id: "manufacturing", name: "MANUFACTURING", icon: Factory, tagline: "Continuous telemetry & automated production routing", code: "IND-01", x: 18, y: 15 },
  { id: "healthcare", name: "HEALTHCARE", icon: Stethoscope, tagline: "Autonomous clinical routing & zero-lag triage", code: "IND-02", x: 50, y: 8 },
  { id: "legal", name: "LEGAL", icon: Scale, tagline: "Deterministic document synthesis & matter ops", code: "IND-03", x: 82, y: 15 },
  { id: "retail", name: "RETAIL", icon: ShoppingBag, tagline: "Sub-second omni-channel inventory sync", code: "IND-04", x: 88, y: 52 },
  { id: "logistics", name: "LOGISTICS", icon: Truck, tagline: "Dynamic fleet dispatch & real-time route optimization", code: "IND-05", x: 82, y: 85 },
  { id: "education", name: "EDUCATION", icon: GraduationCap, tagline: "Integrated student administration & parent telemetry", code: "IND-06", x: 50, y: 92 },
  { id: "automotive", name: "AUTOMOTIVE", icon: Car, tagline: "Dealership service pipelines & predictive inventory", code: "IND-07", x: 18, y: 85 },
  { id: "services", name: "PROFESSIONAL SERVICES", icon: Building2, tagline: "Autonomous client portals & delivery pipelines", code: "IND-08", x: 12, y: 52 },
];

export const IndustriesHero: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("manufacturing");

  const activeNode = HERO_NODES.find((n) => n.id === activeNodeId) || HERO_NODES[0];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid">
      {/* Background Soft Pearl & Violet Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] radial-violet-glow pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. CINEMATIC HERO EDITORIAL HEADER ✦ */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-5">
          
          {/* Small Eyebrow Badge */}
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
                AETHEL INDUSTRIES
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
            BUILT AROUND
            <br />
            <span className="text-[#6D4AFF]">THE WAY YOU WORK.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#17152F]/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Different industries operate differently. We understand the workflow first, then engineer the technology around it.
          </motion.p>
        </div>

        {/* ✦ 2. LARGE INTERACTIVE NEOMORPHIC "INDUSTRY ENGINE" ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full neu-core-panel rounded-3xl p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Top Engine Telemetry Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl neu-inset-sm flex items-center justify-center text-[#6D4AFF]">
                <Cpu className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#17152F] tracking-tight">
                  AETHEL BESPOKE INDUSTRY ADAPTER
                </div>
                <div className="text-[10px] font-mono text-[#6D4AFF]">
                  8 SECTOR ENGINES CONNECTED • DETERMINISTIC LOGIC
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>NEURAL BUS ACTIVE</span>
              </div>
              <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full neu-inset-sm text-[#6D4AFF]">
                <span>SELECT ANY NODE TO ENGAGE</span>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Interactive Canvas */}
          <div className="hidden lg:block relative w-full h-[520px] rounded-2xl neu-inset p-4 overflow-hidden">
            
            {/* SVG Connecting Violet Data Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="violetDataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6D4AFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B6CFF" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Center point at 50% 50% */}
              {HERO_NODES.map((node) => {
                const isActive = node.id === activeNodeId;
                return (
                  <g key={node.id}>
                    {/* Background Static Line */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke={isActive ? "#6D4AFF" : "#DDD7F5"}
                      strokeWidth={isActive ? 2.5 : 1}
                      strokeDasharray={isActive ? "none" : "3 3"}
                    />

                    {/* Animated Pulsing Violet Data Flow */}
                    {isActive && (
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke="url(#violetDataGrad)"
                        strokeWidth="3"
                        className="animate-beam-flow"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Aethel Industry Engine Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-full neu-flat flex flex-col items-center justify-center p-6 text-center relative border-2 border-[#6D4AFF]/30 shadow-[0_12px_36px_rgba(109,74,255,0.18)] bg-white/95 backdrop-blur-md"
              >
                {/* Rotating Outer Violet Ring */}
                <div className="absolute -inset-2.5 rounded-full border border-dashed border-[#6D4AFF]/40 animate-[spin_40s_linear_infinite]" />
                <div className="absolute -inset-5 rounded-full border border-dotted border-[#6D4AFF]/20 animate-[spin_60s_linear_infinite_reverse]" />

                {/* Central Core Content */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-extrabold text-xl shadow-[0_6px_18px_rgba(109,74,255,0.4)] mb-2">
                  Æ
                </div>
                
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase">
                  AETHEL
                </div>
                <div className="text-sm font-extrabold text-[#17152F] tracking-tight">
                  INDUSTRY ENGINE
                </div>
                
                <div className="mt-2 text-[9px] font-mono px-2.5 py-0.5 rounded-full neu-inset-sm text-[#17152F]/80">
                  {activeNode.name} ACTIVE
                </div>
              </motion.div>
            </div>

            {/* 8 Floating Industry Hardware Nodes */}
            {HERO_NODES.map((node) => {
              const isActive = node.id === activeNodeId;
              const NodeIcon = node.icon;

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-30"
                >
                  <button
                    onClick={() => setActiveNodeId(node.id)}
                    className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "neu-flat scale-110 border-2 border-[#6D4AFF] shadow-[0_8px_24px_rgba(109,74,255,0.3)] bg-white"
                        : "neu-flat-sm hover:scale-105 hover:border-[#6D4AFF]/40 bg-white/90"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#6D4AFF] text-white shadow-sm"
                          : "neu-inset-sm text-[#6D4AFF] group-hover:bg-[#EEEAFF]"
                      }`}
                    >
                      <NodeIcon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-[8px] font-mono text-[#6D4AFF] font-bold">
                        {node.code}
                      </div>
                      <div className="text-[11px] font-bold text-[#17152F] whitespace-nowrap">
                        {node.name}
                      </div>
                    </div>

                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#6D4AFF] animate-ping ml-1" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Compact Layout */}
          <div className="lg:hidden space-y-4">
            <div className="p-6 rounded-2xl neu-flat bg-white text-center space-y-3 border border-[#6D4AFF]/20">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center font-mono font-bold text-lg shadow-md">
                Æ
              </div>
              <div className="text-xs font-mono font-bold text-[#6D4AFF]">
                AETHEL INDUSTRY ENGINE
              </div>
              <p className="text-sm font-bold text-[#17152F]">
                Selected Sector: <span className="text-[#6D4AFF]">{activeNode.name}</span>
              </p>
              <p className="text-xs text-[#17152F]/70 font-mono">
                {activeNode.tagline}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {HERO_NODES.map((node) => {
                const isActive = node.id === activeNodeId;
                const NodeIcon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-3 rounded-xl flex flex-col items-center text-center gap-1.5 transition-all text-xs ${
                      isActive
                        ? "neu-flat border border-[#6D4AFF] bg-white font-bold text-[#6D4AFF]"
                        : "neu-flat-sm text-[#17152F]/80"
                    }`}
                  >
                    <NodeIcon className={`w-4 h-4 ${isActive ? "text-[#6D4AFF]" : "text-zinc-500"}`} />
                    <span className="text-[10px] leading-tight font-mono">{node.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Live Telemetry Status Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 sm:p-5 rounded-2xl neu-inset flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-2">
                    <span>{activeNode.name} ENGINE ACTIVE</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#6D4AFF]/15 text-[#6D4AFF]">
                      {activeNode.code}
                    </span>
                  </div>
                  <div className="text-xs text-[#17152F]/75 font-normal">
                    {activeNode.tagline}
                  </div>
                </div>
              </div>

              <a
                href="#selector"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl neu-button-violet text-xs font-bold whitespace-nowrap self-start sm:self-auto"
              >
                <span>View Full Diagnostic Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* ✦ VISUAL METAPHOR FOOTER ✦ */}
          <div className="mt-8 pt-6 border-t border-[#EEEAFF] flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[10px] sm:text-xs font-mono font-bold text-zinc-600">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl neu-flat-sm text-[#17152F]">
              <span className="text-[#6D4AFF]">01</span> INDUSTRY
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl neu-flat-sm text-[#17152F]">
              <span className="text-[#6D4AFF]">02</span> WORKFLOW
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl neu-flat-sm text-[#17152F]">
              <span className="text-[#6D4AFF]">03</span> INTELLIGENCE
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#6D4AFF] text-white shadow-sm">
              <span className="text-white">04</span> SYSTEM
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
