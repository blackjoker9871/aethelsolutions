"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Bot,
  Workflow,
  Database,
  Code2,
  Users,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const BusinessSystemCore: React.FC = () => {
  const modules = [
    { name: "AI AGENTS", icon: Bot, status: "Autonomous", color: "text-[#6D4AFF]" },
    { name: "AUTOMATION", icon: Zap, status: "Active Pipeline", color: "text-amber-500" },
    { name: "DATA SYNC", icon: Database, status: "Zero Silos", color: "text-blue-600" },
    { name: "WORKFLOWS", icon: Workflow, status: "Deterministic", color: "text-purple-600" },
    { name: "SOFTWARE", icon: Code2, status: "Bespoke", color: "text-emerald-600" },
    { name: "PEOPLE", icon: Users, status: "Empowered", color: "text-[#17152F]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 neu-core-panel transition-all duration-500"
    >
      {/* Background Soft Radiant Glow */}
      <div className="absolute inset-0 radial-violet-glow pointer-events-none -z-10 blur-3xl opacity-60" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EEEAFF] pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-base shadow-[0_6px_18px_rgba(109,74,255,0.4),-2px_-2px_6px_#FFFFFF]">
            Æ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#17152F] tracking-tight">
                AETHEL BUSINESS SYSTEM
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] font-mono text-[#6D4AFF] uppercase tracking-wider font-semibold">
              Unified Operating System
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-xs font-mono text-[#17152F]/90">
          <ShieldCheck className="w-4 h-4 text-[#6D4AFF]" />
          <span>Tailored Architecture Active</span>
        </div>
      </div>

      {/* 3D Physical Pipeline Overview Render */}
      <div className="relative rounded-2xl overflow-hidden mb-6 neu-inset p-1.5 border border-[#EEEAFF]/80">
        <Image
          src="/images/solution-pipeline.jpg"
          alt="Aethel 5-Stage Intelligent Business Pipeline"
          width={900}
          height={320}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          className="w-full h-36 sm:h-44 object-cover rounded-xl transition-all duration-500 hover:scale-101"
        />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-mono font-bold text-[#6D4AFF] border border-[#EEEAFF] shadow-xs">
          UNIFIED PIPELINE FLOW
        </div>
      </div>

      {/* 6 Integrated Pillars Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {modules.map((mod, i) => {
          const Icon = mod.icon;
          return (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-3.5 rounded-2xl neu-flat hover:border-[#6D4AFF]/50 transition-all text-center flex flex-col items-center justify-center space-y-1.5 group select-none hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-xl neu-inset-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className={`w-4 h-4 ${mod.color}`} />
              </div>
              <div className="text-[10px] font-mono font-bold text-[#17152F] tracking-tight">
                {mod.name}
              </div>
              <div className="text-[8px] font-mono text-[#6D4AFF] font-bold">
                {mod.status}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Culminating Metric Row */}
      <div className="p-4 rounded-2xl neu-inset flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#17152F]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#6D4AFF]" />
          <span className="font-semibold text-[11px] sm:text-xs">
            Disconnected business friction transformed into structured operations
          </span>
        </div>
        <span className="px-3.5 py-1.5 rounded-full neu-flat-sm text-[#6D4AFF] font-bold text-[10px] sm:text-xs border border-[#6D4AFF]/20">
          100% Bespoke Engineering
        </span>
      </div>
    </motion.div>
  );
};
