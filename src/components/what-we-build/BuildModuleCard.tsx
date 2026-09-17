"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  LayoutGrid,
  Mic,
  MessageSquare,
  ScanEye,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Workflow,
  Radio,
} from "lucide-react";

export interface BuildModuleData {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
  examples: string[];
  tag: string;
}

export const BuildModuleCard: React.FC<{
  module: BuildModuleData;
  isActive: boolean;
  onSelect: () => void;
  index: number;
}> = ({ module, isActive, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className={`group relative rounded-3xl p-6 sm:p-7 select-none cursor-pointer flex flex-col justify-between transition-all duration-500 ${
        isActive || isHovered
          ? "neu-flat shadow-[10px_10px_24px_#D6D5CD,-10px_-10px_24px_#FFFFFF,0_0_24px_rgba(109,74,255,0.14)] border-[#6D4AFF] -translate-y-1.5"
          : "neu-flat-interactive hover:border-[#6D4AFF]/40"
      }`}
    >
      {/* Background Soft Violet Glow when active/hovered */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#EEEAFF]/50 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
          isActive || isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between mb-5">
          {/* Module Number & Tactile Icon Container */}
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isActive || isHovered
                  ? "bg-[#6D4AFF] text-white shadow-[0_6px_16px_rgba(109,74,255,0.35)]"
                  : "neu-flat-sm text-[#6D4AFF] border border-[#6D4AFF]/20"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
              {module.num} • {module.tag}
            </span>
          </div>

          {/* Active Status Badge */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold transition-all ${
              isActive
                ? "bg-[#6D4AFF] text-white shadow-xs"
                : "neu-inset-sm text-[#17152F]/70 group-hover:text-[#6D4AFF]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive ? "bg-white animate-ping" : "bg-emerald-500"
              }`}
            />
            <span>{isActive ? "ACTIVE DISPLAY" : "CONNECTED"}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#17152F] group-hover:text-[#6D4AFF] transition-colors mb-2">
          {module.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#17152F]/75 leading-relaxed font-normal mb-5">
          {module.description}
        </p>
      </div>

      {/* ✦ DYNAMIC MINI-INTERACTION VISUAL PER MODULE ✦ */}
      <div className="space-y-4">
        
        {/* Recessed Micro-Visual Area */}
        <div className="neu-inset rounded-2xl p-3.5 min-h-[84px] flex flex-col justify-center text-[10px] font-mono">
          
          {/* AI AGENTS */}
          {module.id === "ai-agents" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>AGENT NODE</span>
                <span className="text-emerald-600 font-bold">AUTONOMOUS</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="px-2 py-1 rounded-md neu-flat-sm text-[#17152F] font-semibold">Triaging</span>
                <ArrowRight className="w-2.5 h-2.5 text-[#6D4AFF]" />
                <span className="px-2 py-1 rounded-md bg-[#6D4AFF] text-white font-bold">Deciding</span>
                <ArrowRight className="w-2.5 h-2.5 text-[#6D4AFF]" />
                <span className="px-2 py-1 rounded-md neu-flat-sm text-emerald-700 font-semibold">Executing</span>
              </div>
            </div>
          )}

          {/* AI AUTOMATION */}
          {module.id === "ai-automation" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>SEQUENTIAL PIPELINE</span>
                <span className="text-[#6D4AFF] font-bold">AUTO-SYNC</span>
              </div>
              <div className="flex items-center justify-between gap-1 text-[8px]">
                <span className="p-1 rounded-md neu-flat-sm">Lead In</span>
                <span className="text-zinc-300">→</span>
                <span className="p-1 rounded-md neu-flat-sm text-[#6D4AFF] font-bold">Score</span>
                <span className="text-zinc-300">→</span>
                <span className="p-1 rounded-md neu-flat-sm">Email</span>
                <span className="text-zinc-300">→</span>
                <span className="p-1 rounded-md neu-flat-sm text-emerald-600 font-bold">CRM</span>
              </div>
            </div>
          )}

          {/* CUSTOM SOFTWARE */}
          {module.id === "custom-software" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>BESPOKE UI ARCHITECTURE</span>
                <span className="text-blue-600 font-bold">TAILORED</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-center text-[8px]">
                <span className="p-1 rounded neu-flat-sm font-semibold">Internal Tool</span>
                <span className="p-1 rounded neu-flat-sm font-semibold text-[#6D4AFF]">Admin Hub</span>
                <span className="p-1 rounded neu-flat-sm font-semibold">Client Portal</span>
              </div>
            </div>
          )}

          {/* VOICE AI */}
          {module.id === "voice-ai" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>VOICE WAVEFORM STREAM</span>
                <span className="text-emerald-600 font-bold">LIVE TELEPHONY</span>
              </div>
              <div className="flex items-center justify-between gap-1 h-5 px-1">
                {[30, 80, 45, 95, 60, 100, 50, 85, 40, 70, 90, 55].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-[#6D4AFF] rounded-full animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* WHATSAPP AI */}
          {module.id === "whatsapp-ai" && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>META BUSINESS API</span>
                <span className="text-emerald-600 font-bold">0.4s REPLY</span>
              </div>
              <div className="neu-flat-sm p-1.5 rounded-md text-[9px] text-[#17152F] flex items-center justify-between">
                <span>Inbound booking inquiry</span>
                <span className="text-[#6D4AFF] font-bold">Auto-Confirmed</span>
              </div>
            </div>
          )}

          {/* COMPUTER VISION */}
          {module.id === "computer-vision" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                <span>VISUAL SENSOR / OCR</span>
                <span className="text-[#6D4AFF] font-bold">BOUNDING BOX</span>
              </div>
              <div className="neu-flat-sm p-1.5 rounded-md text-[9px] text-[#17152F] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <ScanEye className="w-3 h-3 text-[#6D4AFF]" /> Document Extracted
                </span>
                <span className="text-emerald-600 font-bold">100% Match</span>
              </div>
            </div>
          )}

        </div>

        {/* Examples Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {module.examples.map((ex) => (
            <span
              key={ex}
              className="px-2.5 py-1 rounded-lg neu-flat-sm text-[10px] font-mono text-[#17152F]/75 font-semibold group-hover:border-[#6D4AFF]/30 transition-colors"
            >
              {ex}
            </span>
          ))}
        </div>

        {/* Bottom Interactive Link */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#6D4AFF] group-hover:translate-x-1 transition-transform">
          <span>Explore {module.title}</span>
          <ChevronRight className="w-4 h-4" />
        </div>

      </div>
    </motion.div>
  );
};
