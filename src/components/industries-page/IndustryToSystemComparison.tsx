"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Database,
  Wrench,
  FileText,
  Activity,
  Cpu,
  Bot,
  Zap,
  Code2,
  Workflow,
  ArrowRight,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const FRAGMENTED_ELEMENTS = [
  { name: "CUSTOMERS", icon: Users, desc: "Scattered inboxes & missed leads", tag: "DISORGANIZED" },
  { name: "STAFF", icon: UserCheck, desc: "Buried under repetitive chore tasks", tag: "FRICTION" },
  { name: "DATA", icon: Database, desc: "Siloed in isolated local spreadsheets", tag: "UNLINKED" },
  { name: "TOOLS", icon: Wrench, desc: "Multiple disjointed SaaS subscriptions", tag: "REDUNDANT" },
  { name: "DOCUMENTS", icon: FileText, desc: "Manual PDF extraction & paper slips", tag: "UNSTRUCTURED" },
  { name: "OPERATIONS", icon: Activity, desc: "Bottlenecks with zero live visibility", tag: "OPAQUE" },
];

const ORGANIZED_MODULES = [
  { name: "AI", icon: Bot, desc: "Autonomous reasoning & smart agents", tag: "INTELLIGENT" },
  { name: "AUTOMATION", icon: Zap, desc: "Zero-latency event-driven triggers", tag: "AUTONOMOUS" },
  { name: "SOFTWARE", icon: Code2, desc: "Bespoke internal tools & web consoles", tag: "CUSTOM" },
  { name: "DATA", icon: Database, desc: "Unified single-source real-time spine", tag: "STRUCTURED" },
  { name: "WORKFLOWS", icon: Workflow, desc: "Deterministic end-to-end routing", tag: "SYNCHRONIZED" },
  { name: "PEOPLE", icon: Users, desc: "Empowered for high-value judgment", tag: "LEVERAGED" },
];

export const IndustryToSystemComparison: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]">
      {/* Background Violet Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[700px] radial-violet-glow pointer-events-none -z-10" />

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
                FROM INDUSTRY TO SYSTEM
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
            COMPLEXITY
            <span className="text-[#6D4AFF]"> → </span>
            ENGINEERING
            <span className="text-[#6D4AFF]"> → </span>
            CLARITY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#17152F]/80 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We take the disconnected, chaotic reality of your daily business and transform it into a harmonized, intelligent operating system.
          </motion.p>
        </div>

        {/* ✦ 2. THREE-STAGE TACTILE COMPARISON MATRIX ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: YOUR INDUSTRY (Fragmented State) — lg:col-span-5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 neu-flat rounded-3xl p-6 sm:p-8 space-y-5 bg-white border border-amber-200/60 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EEEAFF]">
              <div>
                <div className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider">
                  CURRENT OPERATIONAL REALITY
                </div>
                <h3 className="text-xl font-extrabold text-[#17152F] tracking-tight">
                  YOUR INDUSTRY
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-mono text-[10px] font-bold">
                FRAGMENTED
              </span>
            </div>

            <p className="text-xs text-[#17152F]/75 font-normal">
              Siloed tasks, manual data handoffs, and disconnected communications create invisible operational friction.
            </p>

            {/* 6 Fragmented Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {FRAGMENTED_ELEMENTS.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    animate={{
                      y: [0, idx % 2 === 0 ? -2 : 2, 0],
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="p-3 rounded-2xl neu-inset-sm flex flex-col justify-between space-y-1.5 border border-amber-200/50"
                  >
                    <div className="flex items-center justify-between">
                      <ItemIcon className="w-4 h-4 text-amber-600" />
                      <span className="text-[8px] font-mono font-bold text-amber-700">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#17152F]">
                      {item.name}
                    </div>
                    <div className="text-[9px] text-[#17152F]/65 font-mono leading-tight">
                      {item.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CENTER: AETHEL ENGINEERING CORE (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 text-center space-y-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full neu-flat flex items-center justify-center p-2 border-2 border-[#6D4AFF] bg-white shadow-[0_8px_24px_rgba(109,74,255,0.3)]"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex flex-col items-center justify-center font-mono font-bold">
                <span className="text-lg">Æ</span>
                <span className="text-[8px] tracking-wider font-bold">CORE</span>
              </div>
            </motion.div>

            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-[#6D4AFF]">
                AETHEL
              </div>
              <div className="text-[10px] font-mono text-[#17152F]/70 font-semibold uppercase">
                ENGINEERING CORE
              </div>
            </div>

            {/* Dynamic Arrow Pulses */}
            <div className="flex items-center gap-1 text-[#6D4AFF]">
              <ArrowRight className="w-4 h-4 animate-pulse" />
              <span className="text-[9px] font-mono font-bold">TRANSFORM</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* RIGHT: YOUR SYSTEM (Organized State) — lg:col-span-5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 neu-core-panel rounded-3xl p-6 sm:p-8 space-y-5 border-2 border-[#6D4AFF]/40 shadow-[0_12px_36px_rgba(109,74,255,0.15)] bg-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EEEAFF]">
              <div>
                <div className="text-[10px] font-mono text-[#6D4AFF] font-bold uppercase tracking-wider">
                  BESPOKE ARCHITECTURE
                </div>
                <h3 className="text-xl font-extrabold text-[#17152F] tracking-tight">
                  YOUR SYSTEM
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#EEEAFF] text-[#6D4AFF] border border-[#6D4AFF]/30 font-mono text-[10px] font-bold">
                ORGANIZED & LIVE
              </span>
            </div>

            <p className="text-xs text-[#17152F]/75 font-normal">
              Unified intelligence, deterministic automation, and human leverage operating smoothly around your exact workflow blueprint.
            </p>

            {/* 6 Organized Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {ORGANIZED_MODULES.map((mod, idx) => {
                const ModIcon = mod.icon;
                return (
                  <div
                    key={mod.name}
                    className="p-3 rounded-2xl neu-flat-sm flex flex-col justify-between space-y-1.5 bg-white border border-[#EEEAFF] hover:border-[#6D4AFF]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <ModIcon className="w-4 h-4 text-[#6D4AFF]" />
                      <span className="text-[8px] font-mono font-bold text-[#6D4AFF]">
                        {mod.tag}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#17152F]">
                      {mod.name}
                    </div>
                    <div className="text-[9px] text-[#17152F]/65 font-mono leading-tight">
                      {mod.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
