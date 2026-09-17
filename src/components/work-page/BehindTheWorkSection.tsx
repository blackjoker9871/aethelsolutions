"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  GitFork,
  Cpu,
  Zap,
  Network,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Workflow,
} from "lucide-react";

interface StepNode {
  step: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
}

const METHOD_STEPS: StepNode[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    tagline: "Map the business reality and pain points.",
    icon: Compass,
  },
  {
    step: "02",
    name: "ARCHITECT",
    tagline: "Design deterministic system blueprints.",
    icon: GitFork,
  },
  {
    step: "03",
    name: "ENGINEER",
    tagline: "Build custom AI, software & pipelines.",
    icon: Cpu,
  },
  {
    step: "04",
    name: "DEPLOY",
    tagline: "Embed directly into live operations.",
    icon: Zap,
  },
  {
    step: "05",
    name: "EVOLVE",
    tagline: "Scale & refine with operational load.",
    icon: Network,
  },
];

export const BehindTheWorkSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] radial-violet-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Workflow className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              BEHIND THE WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            EVERY PROJECT
            <br />
            <span className="text-[#6D4AFF]">STARTS WITH A PROBLEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            We don't begin with a template. We begin by understanding what the business needs to accomplish.
          </motion.p>
        </div>

        {/* ✦ 5-STAGE METHOD VISUAL SEQUENCE ✦ */}
        <div className="p-6 sm:p-10 rounded-3xl neu-flat border border-[#EEEAFF] space-y-6">
          
          {/* Business Problem Anchor */}
          <div className="p-4 rounded-2xl neu-inset text-center space-y-1">
            <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
              ORIGIN POINT
            </div>
            <div className="text-sm font-extrabold text-[#17152F]">
              REAL-WORLD BUSINESS PROBLEM & OPERATIONAL BOTTLENECK
            </div>
          </div>

          <div className="flex justify-center text-[#6D4AFF]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Sequential 5 Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {METHOD_STEPS.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#EEEAFF] text-center flex flex-col justify-between space-y-3 shadow-sm hover:border-[#6D4AFF]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center mx-auto">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      STAGE {m.step}
                    </div>
                    <div className="text-xs font-extrabold text-[#17152F] mt-0.5">
                      {m.name}
                    </div>
                    <p className="text-[11px] text-[#17152F]/65 mt-1 leading-tight font-medium">
                      {m.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
