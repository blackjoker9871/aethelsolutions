"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Repeat,
  UserX,
  Layers,
  BrainCircuit,
  UserCheck,
  AlertCircle,
  Clock,
  Shuffle,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export interface ProblemCardData {
  id: number;
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  indicatorText: string;
  metricLabel: string;
  metricValue: string;
}

export const ProblemCard: React.FC<{
  problem: ProblemCardData;
  index: number;
  className?: string;
}> = ({ problem, index, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = problem.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl p-6 sm:p-7 select-none flex flex-col justify-between ${
        isHovered
          ? "neu-flat shadow-[8px_8px_20px_#D6D5CD,-8px_-8px_20px_#FFFFFF,0_0_24px_rgba(109,74,255,0.14)] border-[#6D4AFF] -translate-y-1.5"
          : "neu-flat-interactive hover:border-[#6D4AFF]/50"
      } ${className}`}
    >
      {/* Background Soft Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EEEAFF]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between mb-5">
          {/* Small Violet Icon Container */}
          <div className="w-10 h-10 rounded-xl neu-flat-sm text-[#6D4AFF] flex items-center justify-center border border-[#6D4AFF]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#6D4AFF] group-hover:text-white">
            <Icon className="w-5 h-5" />
          </div>

          {/* Tiny Animated Indicator Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full neu-inset-sm text-[10px] font-mono text-[#17152F]/80 transition-colors group-hover:text-[#6D4AFF]">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isHovered ? "bg-[#6D4AFF] animate-ping" : "bg-amber-500"
              }`}
            />
            <span>{problem.indicatorText}</span>
          </div>
        </div>

        {/* Short Title */}
        <div className="space-y-1.5 mb-3">
          <div className="text-[10px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase">
            0{problem.id} • {problem.tag}
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#17152F] group-hover:text-[#6D4AFF] transition-colors">
            {problem.title}
          </h3>
        </div>

        {/* 1–2 Line Explanation */}
        <p className="text-sm text-[#17152F]/70 leading-relaxed">
          {problem.description}
        </p>
      </div>

      {/* Bottom Metric & Micro Indicator */}
      <div className="mt-6 pt-4 border-t border-[#EEEAFF]/80 flex items-center justify-between text-[11px] font-mono">
        <span className="text-[#17152F]/50">{problem.metricLabel}</span>
        <span className="font-bold text-[#17152F] group-hover:text-[#6D4AFF] transition-colors px-2 py-0.5 rounded-md neu-inset-sm">
          {problem.metricValue}
        </span>
      </div>
    </motion.div>
  );
};
