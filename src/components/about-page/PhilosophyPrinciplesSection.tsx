"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Compass,
  Hammer,
  Workflow,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

interface PhilosophyPrinciple {
  num: string;
  title: string;
  quote: string;
  explanation: string;
  icon: React.ElementType;
}

const PRINCIPLES: PhilosophyPrinciple[] = [
  {
    num: "01",
    title: "UNDERSTAND FIRST",
    quote: "Technology comes after understanding the problem.",
    explanation:
      "We never propose a stack or framework until we have mapped every handoff, bottleneck, and human interaction in your business.",
    icon: Compass,
  },
  {
    num: "02",
    title: "ENGINEER, DON'T PATCH",
    quote: "Build the underlying system instead of repeatedly fixing symptoms.",
    explanation:
      "Band-aids and fragmented plugins accumulate technical debt. We architect durable foundations that permanently resolve operational bottlenecks.",
    icon: Hammer,
  },
  {
    num: "03",
    title: "AUTOMATE WITH PURPOSE",
    quote: "Automation should remove friction, not simply add technology.",
    explanation:
      "Automating a flawed process only creates automated chaos. We streamline the underlying workflow before embedding autonomous pipelines.",
    icon: Workflow,
  },
  {
    num: "04",
    title: "DESIGN FOR THE REAL WORLD",
    quote: "A system has to work inside the way people actually operate.",
    explanation:
      "If software requires extensive training manuals or resists daily habits, it fails. We build intuitive interfaces people naturally enjoy using.",
    icon: Layers,
  },
  {
    num: "05",
    title: "BUILD FOR WHAT'S NEXT",
    quote: "Today's system should create room for tomorrow's growth.",
    explanation:
      "Modular system architectures expand seamlessly as transaction volumes multiply, ensuring your technology never caps company scale.",
    icon: BrainCircuit,
  },
];

export const PhilosophyPrinciplesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <BrainCircuit className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              OUR PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            HOW WE THINK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Five foundational principles that guide every system architecture, engineering decision, and line of code we ship.
          </motion.p>
        </div>

        {/* ✦ 5 PHYSICAL PRINCIPLE PANELS ✦ */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {PRINCIPLES.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-8 rounded-3xl neu-flat transition-all duration-300 border flex flex-col sm:flex-row items-start gap-6 select-none ${
                  isHovered
                    ? "border-[#6D4AFF] shadow-[0_12px_36px_rgba(109,74,255,0.18)] -translate-y-1"
                    : "border-[#EEEAFF] hover:border-[#6D4AFF]/40"
                }`}
              >
                {/* Number & Icon Badge */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                    {p.num}
                  </div>
                  <div className="sm:hidden">
                    <h3 className="text-lg font-extrabold text-[#17152F]">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="hidden sm:flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#17152F]">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#6D4AFF]">
                      PRINCIPLE // {p.num}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#6D4AFF] leading-snug">
                    "{p.quote}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#17152F]/75 leading-relaxed font-medium">
                    {p.explanation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
