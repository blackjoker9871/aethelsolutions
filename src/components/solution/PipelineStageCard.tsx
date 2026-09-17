"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  GitFork,
  Cpu,
  Zap,
  Network,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Bot,
  RefreshCw,
} from "lucide-react";

export interface StageData {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  interactiveType: "map" | "nodes" | "engineer" | "deploy" | "evolve";
  metric: string;
}

export const PipelineStageCard: React.FC<{
  stage: StageData;
  isActive: boolean;
  onHover: () => void;
  index: number;
}> = ({ stage, isActive, onHover, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-500 select-none cursor-pointer flex flex-col justify-between ${
        isActive || isHovered
          ? "neu-flat shadow-[8px_8px_20px_#D6D5CD,-8px_-8px_20px_#FFFFFF,0_0_24px_rgba(109,74,255,0.18)] border-[#6D4AFF] -translate-y-1.5"
          : "neu-flat-interactive hover:border-[#6D4AFF]/50"
      }`}
    >
      {/* Active / Hover Ambient Violet Glow */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-[#EEEAFF]/50 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
          isActive || isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Stage Number & Minimal Icon */}
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive || isHovered
                  ? "bg-[#6D4AFF] text-white shadow-[0_4px_14px_rgba(109,74,255,0.4)] border border-[#6D4AFF]"
                  : "neu-flat-sm text-[#6D4AFF] border border-[#6D4AFF]/20"
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#6D4AFF] tracking-wider">
              STAGE {stage.num}
            </span>
          </div>

          {/* Active Status Pulse */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full neu-inset-sm text-[9px] font-mono text-[#17152F]/80">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive || isHovered ? "bg-[#6D4AFF] animate-ping" : "bg-emerald-500"
              }`}
            />
            <span>{stage.metric}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#17152F] group-hover:text-[#6D4AFF] transition-colors mb-1.5">
          {stage.title}
        </h4>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-[#17152F]/75 leading-relaxed">
          &quot;{stage.tagline}&quot;
        </p>
      </div>

      {/* Interactive Micro-Visualization Canvas on Hover */}
      <div className="mt-4 pt-3.5 border-t border-[#EEEAFF]/80 min-h-[72px] flex items-center justify-center neu-inset rounded-xl p-2.5 font-mono text-[9px] text-[#17152F]/80 overflow-hidden">
        {stage.interactiveType === "map" && (
          <div className="w-full flex items-center justify-between gap-1 text-[8px]">
            <span className="px-1.5 py-1 rounded-md neu-flat-sm text-[#17152F] font-semibold">Inputs</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#6D4AFF] animate-pulse" />
            <span className="px-1.5 py-1 rounded-md bg-[#6D4AFF] text-white font-bold shadow-xs">Process Map</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#6D4AFF] animate-pulse" />
            <span className="px-1.5 py-1 rounded-md neu-flat-sm text-[#17152F] font-semibold">Bottlenecks</span>
          </div>
        )}

        {stage.interactiveType === "nodes" && (
          <div className="w-full flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6D4AFF] animate-bounce shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B6CFF] animate-bounce delay-100 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#17152F] animate-bounce delay-200 shadow-xs" />
            <span className="text-[9px] font-semibold text-[#6D4AFF] pl-1">Optimizing Routes</span>
          </div>
        )}

        {stage.interactiveType === "engineer" && (
          <div className="w-full flex items-center justify-around gap-1">
            <span className="px-2 py-1 rounded-md neu-flat-sm text-[#6D4AFF] font-bold">AI Models</span>
            <span className="text-[#6D4AFF] font-bold">+</span>
            <span className="px-2 py-1 rounded-md neu-flat-sm text-[#17152F] font-bold">APIs</span>
            <span className="text-[#6D4AFF] font-bold">+</span>
            <span className="px-2 py-1 rounded-md neu-flat-sm text-emerald-600 font-bold">Logic</span>
          </div>
        )}

        {stage.interactiveType === "deploy" && (
          <div className="w-full flex items-center justify-between text-[8px]">
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Live Operations
            </span>
            <span className="text-[8px] font-mono font-bold text-[#6D4AFF] neu-flat-sm px-1.5 py-0.5 rounded">Zero Downtime</span>
          </div>
        )}

        {stage.interactiveType === "evolve" && (
          <div className="w-full flex items-center justify-between text-[8px]">
            <span className="text-[#6D4AFF] font-bold flex items-center gap-1">
              <RefreshCw className="w-3 h-3 animate-spin" /> Continuous Iteration
            </span>
            <span className="text-emerald-600 font-bold neu-flat-sm px-1.5 py-0.5 rounded">+ Scaling</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
