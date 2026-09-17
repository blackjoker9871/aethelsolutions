"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Brain,
  Sparkles,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  ShieldAlert,
  Flame,
} from "lucide-react";

export const OurOriginSection: React.FC = () => {
  const repetitiveTasks = [
    "DATA ENTRY",
    "FOLLOW-UPS",
    "CALLS",
    "MESSAGES",
    "COORDINATION",
    "REPORTING",
    "ROUTINE DECISIONS",
  ];

  const highValueFocus = [
    "IDEAS",
    "STRATEGY",
    "INNOVATION",
    "LEADERSHIP",
    "GROWTH",
  ];

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
            <Clock className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              WHY AETHEL EXISTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            BUSINESS OWNERS
            <br />
            SHOULDN'T HAVE TO
            <br />
            <span className="text-[#6D4AFF]">DO EVERYTHING.</span>
          </motion.h2>
        </div>

        {/* ✦ 1. EDITORIAL STORYTELLING CONTRAST ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          
          {/* THE ATTENTION DRAIN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl neu-inset border border-[#E5E4DE] space-y-5"
          >
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-rose-600 pb-3 border-b border-[#E5E4DE]">
              <Flame className="w-4 h-4" />
              <span>THE REPETITIVE FRICTION DRAIN</span>
            </div>

            <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
              Business leaders spend enormous amounts of mental energy dealing with repetitive operational noise that fractures focus and slows momentum:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {repetitiveTasks.map((task, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#E5E4DE] text-xs font-mono font-bold text-[#17152F]/70"
                >
                  ✕ {task}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#17152F]/60 pt-2 leading-relaxed">
              The issue isn't just the hours lost. It's the cognitive fatigue—leaving leaders too depleted to focus on high-leverage decisions.
            </p>
          </motion.div>

          {/* WHERE ATTENTION ACTUALLY BELONGS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_30px_rgba(109,74,255,0.18)] space-y-5"
          >
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#6D4AFF] pb-3 border-b border-[#EEEAFF]">
              <Brain className="w-4 h-4" />
              <span>WHERE EXECUTIVE ATTENTION BELONGS</span>
            </div>

            <p className="text-sm text-[#17152F]/90 leading-relaxed font-medium">
              Human leadership is unmatched when applied to strategy, creativity, culture, and high-stakes relationships:
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {highValueFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#6D4AFF] text-white text-xs font-mono font-bold shadow-sm"
                >
                  ✦ {focus}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#17152F]/75 pt-2 leading-relaxed">
              When operations run deterministically under an intelligent system, owners reclaim the space required to truly lead.
            </p>
          </motion.div>

        </div>

        {/* ✦ 2. VISUALLY DOMINANT CORE MANIFESTO STATEMENT ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto p-8 sm:p-14 rounded-3xl sm:rounded-[36px] neu-flat text-center border-2 border-[#6D4AFF] shadow-[0_16px_48px_rgba(109,74,255,0.16)] space-y-4"
        >
          <div className="text-xs font-mono font-bold text-[#6D4AFF] tracking-widest uppercase">
            AETHEL MISSION STATEMENT
          </div>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight">
            "WE BUILD SYSTEMS THAT GIVE
            <br />
            BUSINESS OWNERS THEIR
            <br />
            <span className="text-[#6D4AFF]">BRAIN SPACE BACK."</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
};
