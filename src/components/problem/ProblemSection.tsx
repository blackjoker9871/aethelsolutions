"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Repeat,
  UserX,
  Layers,
  BrainCircuit,
  UserCheck,
  AlertTriangle,
  ArrowDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ProblemVisualization } from "./ProblemVisualization";
import { ProblemCard, ProblemCardData } from "./ProblemCard";

const PROBLEMS_DATA: ProblemCardData[] = [
  {
    id: 1,
    icon: Repeat,
    tag: "AUTOMATION DEFICIT",
    title: "REPETITIVE WORK",
    description:
      "Your team spends hours doing tasks that follow the same pattern every day.",
    indicatorText: "High Fatigue",
    metricLabel: "Daily Time Drain",
    metricValue: "4.5 hrs / employee",
  },
  {
    id: 2,
    icon: UserX,
    tag: "REVENUE LEAK",
    title: "MISSED LEADS",
    description:
      "Potential customers disappear between calls, messages and follow-ups.",
    indicatorText: "Response Delay",
    metricLabel: "Lead Drop-off",
    metricValue: "~35% lost pipeline",
  },
  {
    id: 3,
    icon: Layers,
    tag: "DATA FRAGMENTATION",
    title: "DISCONNECTED SYSTEMS",
    description:
      "Your data lives across spreadsheets, WhatsApp, documents and separate software.",
    indicatorText: "Siloed Info",
    metricLabel: "Sync Friction",
    metricValue: "Zero Single Source",
  },
  {
    id: 4,
    icon: BrainCircuit,
    tag: "COGNITIVE OVERHEAD",
    title: "MANUAL OPERATIONS",
    description:
      "Processes depend on people remembering what needs to happen next.",
    indicatorText: "Human Dependency",
    metricLabel: "Error Potential",
    metricValue: "High variance",
  },
  {
    id: 5,
    icon: UserCheck,
    tag: "SCALING BOTTLENECK",
    title: "OWNER OVERLOAD",
    description:
      "Business owners become the final checkpoint for everything.",
    indicatorText: "Approval Trap",
    metricLabel: "Decision Latency",
    metricValue: "Growth Stalled",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="the-problem"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP SPLIT: Headline & Core Message (Left) + Problem Visualization (Right) ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 sm:mb-28">
          
          {/* Left Column: Provocative Headline & Positioning */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-20">
            
            {/* Section Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[#6D4AFF]">
                <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  OPERATIONAL REALITY
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#17152F] leading-[1.04]">
                YOUR BUSINESS IS BUSY.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  BUT IS IT EFFICIENT?
                </span>
              </h2>

              <p className="text-lg sm:text-xl font-semibold text-[#17152F] pt-2 tracking-tight">
                Every day, valuable hours disappear into work that could be automated.
              </p>
            </motion.div>

            {/* Core Philosophy Callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 rounded-2xl neu-flat space-y-2 max-w-xl"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Fundamental Bottleneck</span>
              </div>
              <p className="text-sm sm:text-base text-[#17152F]/80 leading-relaxed">
                Most businesses don&apos;t have a people problem. They have a <strong className="text-[#17152F] font-bold">systems problem</strong>. Talented teams get bogged down by manual copy-pasting, disconnected communication, and fragmented software.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Large Animated Fragmented Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full flex justify-center items-center"
          >
            <ProblemVisualization />
          </motion.div>

        </div>

        {/* ✦ 5 MAJOR PROBLEM CARDS (ASYMMETRIC GRID) ✦ */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Subheading for Problem Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EEEAFF] pb-6"
          >
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase mb-1">
                FIVE CRITICAL FRICTIONS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17152F]">
                Where Growth Quietly Leaks
              </h3>
            </div>
            <div className="text-xs font-mono text-[#17152F]/60">
              IDENTIFYING SYSTEM BOTTLENECKS
            </div>
          </motion.div>

          {/* Row 1: 2 Prominent Cards (Repetitive Work & Missed Leads) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROBLEMS_DATA.slice(0, 2).map((problem, index) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                index={index}
                className="min-h-[220px]"
              />
            ))}
          </div>

          {/* Row 2: 3 Balanced Cards (Disconnected Systems, Manual Operations, Owner Overload) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS_DATA.slice(2, 5).map((problem, index) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                index={index + 2}
                className="min-h-[220px]"
              />
            ))}
          </div>

        </div>

        {/* ✦ BOTTOM SECTION STATEMENT & BRIDGE TO SOLUTION ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-28 pt-12 border-t border-[#EEEAFF] text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Eyebrow Bridge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEAFF]/80 border border-[#6D4AFF]/20 text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
            <span>CHAOS</span>
            <ArrowRight className="w-3 h-3" />
            <span>SYSTEM</span>
          </div>

          {/* Main Bottom Statement with Aethel Violet Highlight */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#17152F] leading-tight">
            &quot;More people won&apos;t always solve the problem.
            <br />
            <span className="text-[#6D4AFF] bg-clip-text">
              Better systems
            </span>{" "}
            can.&quot;
          </p>

          <p className="text-sm font-mono text-[#17152F]/60 pt-1">
            TRANSITIONING OPERATIONAL CHAOS INTO INTELLIGENT AUTONOMY
          </p>
        </motion.div>

      </div>
    </section>
  );
};
