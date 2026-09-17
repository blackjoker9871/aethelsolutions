"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MethodStage } from "./EngineeringConsole";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const MethodStagePanel: React.FC<{
  stage: MethodStage;
  isActive: boolean;
  onSelect: () => void;
  index: number;
}> = ({ stage, isActive, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className={`group relative rounded-3xl p-6 sm:p-7 select-none cursor-pointer flex flex-col justify-between transition-all duration-500 ${
        isActive || isHovered
          ? "neu-flat shadow-[8px_8px_20px_#D6D5CD,-8px_-8px_20px_#FFFFFF,0_0_24px_rgba(109,74,255,0.16)] border-[#6D4AFF] -translate-y-1.5"
          : "neu-flat-interactive hover:border-[#6D4AFF]/40"
      }`}
    >
      {/* Soft Ambient Violet Glow */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#EEEAFF]/50 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
          isActive || isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isActive || isHovered
                  ? "bg-[#6D4AFF] text-white shadow-[0_4px_14px_rgba(109,74,255,0.4)]"
                  : "neu-flat-sm text-[#6D4AFF] border border-[#6D4AFF]/20"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
              STAGE {stage.num}
            </span>
          </div>

          {/* Status Badge */}
          <span
            className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full ${
              isActive
                ? "bg-[#6D4AFF] text-white shadow-xs"
                : "neu-inset-sm text-[#17152F]/70"
            }`}
          >
            {stage.statusLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#17152F] group-hover:text-[#6D4AFF] transition-colors mb-1.5">
          {stage.title}
        </h3>

        {/* Tagline */}
        <div className="text-xs font-mono font-bold text-[#6D4AFF] mb-3">
          &quot;{stage.tagline}&quot;
        </div>

        {/* Description */}
        <p className="text-sm text-[#17152F]/75 leading-relaxed">
          {stage.description}
        </p>
      </div>

      {/* Bottom Interactive Step Action */}
      <div className="mt-6 pt-4 border-t border-[#EEEAFF]/80 flex items-center justify-between text-xs font-mono font-bold text-[#6D4AFF]">
        <span>Engage Stage {stage.num}</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};
