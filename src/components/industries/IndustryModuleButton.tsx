"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IndustryData } from "./IndustryEngineConsole";
import { ArrowUpRight } from "lucide-react";

export const IndustryModuleButton: React.FC<{
  industry: IndustryData;
  isActive: boolean;
  onSelect: () => void;
  index: number;
}> = ({ industry, isActive, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className={`group relative rounded-2xl p-4 sm:p-5 select-none cursor-pointer flex items-center justify-between text-left transition-all duration-300 w-full ${
        isActive
          ? "neu-flat border-[#6D4AFF] shadow-[6px_6px_16px_#DDDCD5,-6px_-6px_16px_#FFFFFF,0_0_18px_rgba(109,74,255,0.2)] -translate-y-1"
          : "neu-flat-interactive hover:border-[#6D4AFF]/40"
      }`}
    >
      {/* Soft Ambient Violet Glow */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#EEEAFF]/40 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
          isActive || isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex items-center gap-3.5">
        {/* Industry Minimal Icon Container */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isActive || isHovered
              ? "bg-[#6D4AFF] text-white shadow-[0_4px_12px_rgba(109,74,255,0.35)]"
              : "neu-inset-sm text-[#6D4AFF]"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Industry Title & Number */}
        <div>
          <div className="text-[10px] font-mono font-bold text-[#6D4AFF] tracking-wider">
            {industry.num}
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-[#17152F] tracking-tight group-hover:text-[#6D4AFF] transition-colors">
            {industry.name}
          </div>
        </div>
      </div>

      {/* Tiny Status Indicator LED */}
      <div className="flex items-center gap-1.5">
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isActive
              ? "bg-[#6D4AFF] ring-4 ring-[#6D4AFF]/20"
              : "bg-zinc-300 group-hover:bg-[#6D4AFF]"
          }`}
        />
        <ArrowUpRight
          className={`w-4 h-4 transition-transform duration-300 ${
            isActive
              ? "text-[#6D4AFF] translate-x-0.5 -translate-y-0.5"
              : "text-zinc-400 group-hover:text-[#6D4AFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          }`}
        />
      </div>
    </motion.button>
  );
};
