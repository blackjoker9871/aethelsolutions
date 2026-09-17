"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  GitMerge,
  Cpu,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Workflow,
  Radio,
  Share2,
  RefreshCw,
  Sliders,
  ShieldCheck,
} from "lucide-react";

export interface MethodStage {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  statusLabel: string;
  statusType: "success" | "live" | "evolving";
  icon: React.ElementType;
}

export const METHOD_STAGES: MethodStage[] = [
  {
    id: "understand",
    num: "01",
    title: "UNDERSTAND",
    tagline: "Map the business.",
    description:
      "We learn how your people, customers, data and processes actually interact — uncovering hidden bottlenecks and manual repetition.",
    statusLabel: "PROCESS MAPPED ✓",
    statusType: "success",
    icon: Compass,
  },
  {
    id: "architect",
    num: "02",
    title: "ARCHITECT",
    tagline: "Design the system.",
    description:
      "We decide what should be automated, connected, redesigned or rebuilt, formulating a blueprint tailored to your operations.",
    statusLabel: "ARCHITECTURE READY ✓",
    statusType: "success",
    icon: GitMerge,
  },
  {
    id: "engineer",
    num: "03",
    title: "ENGINEER",
    tagline: "Build the intelligence.",
    description:
      "We develop the custom AI agents, backend software, secure APIs and deterministic automation required for the system.",
    statusLabel: "SYSTEM ENGINEERED ✓",
    statusType: "success",
    icon: Cpu,
  },
  {
    id: "deploy",
    num: "04",
    title: "DEPLOY",
    tagline: "Put it to work.",
    description:
      "We integrate the system into your actual business operations with zero disruption, syncing WhatsApp, CRM, phone and ERP.",
    statusLabel: "SYSTEM LIVE ●",
    statusType: "live",
    icon: Zap,
  },
  {
    id: "evolve",
    num: "05",
    title: "EVOLVE",
    tagline: "Keep improving.",
    description:
      "Your business changes. Your system evolves alongside it with new workflows, expanded agents and autonomous refinements.",
    statusLabel: "SYSTEM EVOLVING ↗",
    statusType: "evolving",
    icon: TrendingUp,
  },
];

interface EngineeringConsoleProps {
  activeStageId: string;
  onSelectStage: (id: string) => void;
}

export const EngineeringConsole: React.FC<EngineeringConsoleProps> = ({
  activeStageId,
  onSelectStage,
}) => {
  const currentStageIndex = METHOD_STAGES.findIndex((s) => s.id === activeStageId);
  const currentStage = METHOD_STAGES[currentStageIndex] || METHOD_STAGES[0];

  return (
    <div className="w-full neu-core-panel rounded-3xl p-6 sm:p-8 select-none relative overflow-hidden transition-all duration-500">
      
      {/* ✦ 1. TOP HARDWARE MASTER TELEMETRY ✦ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EEEAFF] mb-6">
        
        {/* Monogram and Console Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-base shadow-[0_6px_18px_rgba(109,74,255,0.4),-2px_-2px_6px_#FFFFFF]">
            Æ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#17152F] tracking-tight">
                AETHEL ENGINEERING CONSOLE
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[10px] font-mono text-[#6D4AFF] uppercase tracking-wider font-semibold">
              METHODOLOGY PROTOCOL • STAGE 0{currentStageIndex + 1} OF 05
            </p>
          </div>
        </div>

        {/* Technical Indicators */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full neu-inset-sm text-[#17152F]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SYSTEM DESIGN: <strong className="text-[#17152F]">ACTIVE</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full neu-inset-sm text-[#17152F]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF]" />
            <span>AI INTEGRATION: <strong className="text-[#6D4AFF]">READY</strong></span>
          </div>
        </div>

      </div>

      {/* ✦ 2. CONTINUOUS STAGE STEPPER SELECTOR (TACTILE TABS) ✦ */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
        {METHOD_STAGES.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const isPassed = idx < currentStageIndex;
          const Icon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`p-3 sm:p-3.5 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "neu-flat border-[#6D4AFF] shadow-[6px_6px_16px_#DDDCD5,-6px_-6px_16px_#FFFFFF,0_0_16px_rgba(109,74,255,0.18)] -translate-y-1"
                  : "neu-flat-interactive hover:border-[#6D4AFF]/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs transition-colors ${
                    isSelected
                      ? "bg-[#6D4AFF] text-white shadow-xs"
                      : isPassed
                      ? "neu-inset-sm text-emerald-600"
                      : "neu-inset-sm text-[#17152F]/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`text-[9px] font-mono font-bold ${
                    isSelected ? "text-[#6D4AFF]" : "text-[#17152F]/50"
                  }`}
                >
                  {stage.num}
                </span>
              </div>

              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#17152F] tracking-tight">
                  {stage.title}
                </div>
                <div className="text-[9px] font-mono text-[#6D4AFF] font-medium truncate">
                  {stage.tagline}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ✦ 3. THE INTERACTIVE BLUEPRINT CANVAS ✦ */}
      <div className="neu-inset rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
        
        {/* Canvas Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E1DA]/80 pb-3 mb-4 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6D4AFF] animate-ping" />
            <span className="font-bold text-[#17152F]">
              BLUEPRINT VIEWPORT: {currentStage.num} — {currentStage.title}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-full neu-flat-sm text-xs font-bold text-[#6D4AFF]">
            {currentStage.statusLabel}
          </span>
        </div>

        {/* 3D Method Architectural Blueprint Image Render */}
        <div className="relative rounded-2xl overflow-hidden mb-4 neu-flat p-1 border border-[#EEEAFF]">
          <Image
            src="/images/method-blueprint.jpg"
            alt="Aethel Engineering Architectural Blueprint"
            width={800}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className="w-full h-32 sm:h-40 object-cover rounded-xl"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-mono font-bold text-[#6D4AFF] border border-[#EEEAFF] shadow-xs">
            FIRST PRINCIPLES BLUEPRINT
          </div>
        </div>

        {/* Dynamic Interactive Stage Simulation Viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* 01 UNDERSTAND */}
            {currentStage.id === "understand" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#17152F]/80">
                  Scanning organizational friction across 5 operational dimensions:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] font-mono">
                  {["CUSTOMERS", "STAFF", "DATA", "PROCESS", "TOOLS"].map((node, i) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3 rounded-xl neu-flat space-y-1"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#6D4AFF] mx-auto animate-pulse" />
                      <div className="font-bold text-[#17152F]">{node}</div>
                      <div className="text-[8px] text-emerald-600 font-bold">Mapped ✓</div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2.5 rounded-xl neu-flat-sm text-[10px] font-mono text-[#17152F] flex items-center justify-between">
                  <span className="text-zinc-500">Telemetry: 18 repetitive workflows detected</span>
                  <span className="text-[#6D4AFF] font-bold">100% Audit Coverage</span>
                </div>
              </div>
            )}

            {/* 02 ARCHITECT */}
            {currentStage.id === "architect" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#17152F]/80">
                  Synthesizing custom logic and operational architecture:
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono">
                  <div className="neu-flat px-3 py-2 rounded-xl font-bold text-[#17152F]">
                    INPUT
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <div className="neu-flat px-3 py-2 rounded-xl font-bold text-blue-600">
                    LOGIC
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <div className="neu-flat px-3 py-2 rounded-xl font-bold text-[#6D4AFF] bg-violet-50">
                    AI AGENT
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <div className="neu-flat px-3 py-2 rounded-xl font-bold text-purple-600">
                    ACTION
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <div className="neu-flat px-3 py-2 rounded-xl font-bold text-emerald-600">
                    RESULT
                  </div>
                </div>
                <div className="p-2.5 rounded-xl neu-flat-sm text-[10px] font-mono text-[#17152F] flex items-center justify-between">
                  <span className="text-zinc-500">Architecture Mode: Deterministic Multi-Agent System</span>
                  <span className="text-emerald-600 font-bold">Zero Friction Expected</span>
                </div>
              </div>
            )}

            {/* 03 ENGINEER */}
            {currentStage.id === "engineer" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#17152F]/80">
                  Building the modular intelligence infrastructure:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] font-mono">
                  {[
                    { name: "AI AGENT", desc: "Autonomous Logic" },
                    { name: "DATABASE", desc: "Vector + SQL" },
                    { name: "API LAYER", desc: "Secure Webhooks" },
                    { name: "WORKFLOW", desc: "Real-time Events" },
                    { name: "INTERFACE", desc: "Bespoke HUD" },
                  ].map((comp, i) => (
                    <motion.div
                      key={comp.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3 rounded-xl neu-flat space-y-1"
                    >
                      <div className="font-bold text-[#6D4AFF]">{comp.name}</div>
                      <div className="text-[8px] text-zinc-500">{comp.desc}</div>
                      <div className="text-[8px] text-emerald-600 font-bold">Compiled ✓</div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2.5 rounded-xl neu-flat-sm text-[10px] font-mono text-[#17152F] flex items-center justify-between">
                  <span className="text-zinc-500">Security: End-to-End Encrypted & Hosted on Dedicated Infrastructure</span>
                  <span className="text-[#6D4AFF] font-bold">Production Ready</span>
                </div>
              </div>
            )}

            {/* 04 DEPLOY */}
            {currentStage.id === "deploy" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#17152F]/80">
                  Integrated directly into live business software and channels:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "WhatsApp",
                    "CRM",
                    "Website",
                    "Phone",
                    "Email",
                    "Internal Tools",
                    "Database",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl neu-flat font-mono text-[10px] font-bold text-[#17152F] flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
                <div className="p-2.5 rounded-xl neu-flat-sm text-[10px] font-mono text-[#17152F] flex items-center justify-between">
                  <span className="text-zinc-500">Rollout Status: Live with 100% Zero Business Interruption</span>
                  <span className="text-emerald-600 font-bold">Live Stream Active</span>
                </div>
              </div>
            )}

            {/* 05 EVOLVE */}
            {currentStage.id === "evolve" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#17152F]/80">
                  Continuously expanding system capabilities as business scales:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  {[
                    "NEW WORKFLOW +",
                    "NEW AGENT +",
                    "NEW DATA +",
                    "NEW CAPABILITY +",
                  ].map((mod, i) => (
                    <motion.div
                      key={mod}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3 rounded-xl neu-flat space-y-1 hover:border-[#6D4AFF]/50 transition-all cursor-default"
                    >
                      <div className="font-extrabold text-[#6D4AFF]">{mod}</div>
                      <div className="text-[8px] text-zinc-500">Autonomous Upgrade</div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2.5 rounded-xl neu-flat-sm text-[10px] font-mono text-[#17152F] flex items-center justify-between">
                  <span className="text-zinc-500">Learning Model: Fine-tuning on daily operational telemetry</span>
                  <span className="text-[#6D4AFF] font-bold">Continuous Iteration</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ✦ 4. CULMINATING TRANSFORMATION SUMMARY BAR ✦ */}
      <div className="p-4 sm:p-5 rounded-2xl neu-flat flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#17152F] font-bold">
          <Sparkles className="w-4 h-4 text-[#6D4AFF]" />
          <span>AETHEL TRANSFORMATION PIPELINE:</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold">
          <span className="text-[#17152F]/70">BUSINESS</span>
          <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
          <span className="text-[#6D4AFF]">AETHEL</span>
          <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
          <span className="text-purple-700">INTELLIGENT SYSTEM</span>
          <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
          <span className="text-emerald-600">GROWTH</span>
        </div>
      </div>

    </div>
  );
};
