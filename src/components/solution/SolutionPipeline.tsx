"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  GitFork,
  Cpu,
  Zap,
  Network,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Layers,
} from "lucide-react";
import { PipelineStageCard, StageData } from "./PipelineStageCard";
import { BusinessSystemCore } from "./BusinessSystemCore";

const STAGES: StageData[] = [
  {
    id: "understand",
    num: "01",
    title: "UNDERSTAND",
    tagline: "Map the way your business actually works.",
    icon: Compass,
    interactiveType: "map",
    metric: "Deep Process Audit",
  },
  {
    id: "design",
    num: "02",
    title: "DESIGN",
    tagline: "Identify what should be automated, connected or rebuilt.",
    icon: GitFork,
    interactiveType: "nodes",
    metric: "System Blueprint",
  },
  {
    id: "engineer",
    num: "03",
    title: "ENGINEER",
    tagline: "Build the AI, software and workflows required.",
    icon: Cpu,
    interactiveType: "engineer",
    metric: "Custom Architecture",
  },
  {
    id: "deploy",
    num: "04",
    title: "DEPLOY",
    tagline: "Put the system into your real business operations.",
    icon: Zap,
    interactiveType: "deploy",
    metric: "Seamless Rollout",
  },
  {
    id: "evolve",
    num: "05",
    title: "EVOLVE",
    tagline: "Continuously improve the system as your business grows.",
    icon: Network,
    interactiveType: "evolve",
    metric: "Adaptive Scaling",
  },
];

const INPUT_TAGS = [
  "CUSTOMERS",
  "WHATSAPP",
  "PHONE",
  "EMAIL",
  "DOCUMENTS",
  "SALES",
  "INVOICES",
  "STAFF",
  "DATA",
  "WEBSITES",
  "EXCEL",
];

export const SolutionPipeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      
      {/* ✦ 1. FRAGMENTED INPUTS BANNER (CHAOS ENTERING THE PIPELINE) ✦ */}
      <div className="p-6 sm:p-7 rounded-3xl neu-flat space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
            <div className="w-6 h-6 rounded-lg neu-inset-sm flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-[#6D4AFF]" />
            </div>
            <span>DISCONNECTED BUSINESS INPUTS</span>
          </div>
          <span className="text-[#17152F]/70 px-3 py-1 rounded-full neu-inset-sm text-[10px]">
            RAW OPERATIONS → STRUCTURED PIPELINE
          </span>
        </div>

        {/* Scattered Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {INPUT_TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-3 py-1.5 rounded-xl neu-flat-sm text-[10px] sm:text-[11px] font-mono font-bold text-[#17152F]/80 hover:border-[#6D4AFF]/50 hover:text-[#6D4AFF] hover:-translate-y-0.5 transition-all cursor-default select-none"
            >
              {tag}
            </motion.span>
          ))}
          <span className="text-xs font-mono font-bold text-[#6D4AFF] flex items-center gap-1.5 pl-2">
            <span>Entering Pipeline</span>
            <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
          </span>
        </div>
      </div>

      {/* ✦ 2. THE 5-STAGE PIPELINE ✦ */}
      <div className="relative">
        
        {/* Continuous Flowing Violet Line for Desktop (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-[#EEEAFF] -z-10">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#6D4AFF] to-transparent"
          />
        </div>

        {/* Desktop 5-Column Grid / Mobile Stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
          {STAGES.map((stage, index) => (
            <PipelineStageCard
              key={stage.id}
              stage={stage}
              isActive={activeStageIndex === index}
              onHover={() => setActiveStageIndex(index)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* ✦ 3. THE AETHEL BUSINESS SYSTEM CORE HUD ✦ */}
      <div className="pt-4">
        <BusinessSystemCore />
      </div>

    </div>
  );
};
