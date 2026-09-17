"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Cpu,
  Activity,
  ArrowUpRight,
  Sparkles,
  Layers,
  Stethoscope,
  Car,
  Footprints,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export interface ArchiveProjectNode {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  status: string;
  tech: string[];
}

export const ARCHIVE_NODES: ArchiveProjectNode[] = [
  {
    id: "ml-hospital",
    num: "PROJECT 01",
    category: "HEALTHCARE",
    title: "ML HOSPITAL",
    tagline: "Minimalist healthcare portal & autonomous WhatsApp appointment flow",
    icon: Stethoscope,
    status: "SYSTEM LIVE",
    tech: ["Next.js", "Responsive Web", "Appointment Flow", "WhatsApp API"],
  },
  {
    id: "radio-warehouse",
    num: "PROJECT 02",
    category: "AUTOMOTIVE",
    title: "RADIO WAREHOUSE",
    tagline: "Interactive automotive soundstage & modification configurator",
    icon: Car,
    status: "ENGINEERING IN PROGRESS",
    tech: ["Interactive Exploded View", "Component Configurator", "WhatsApp Enquiry"],
  },
  {
    id: "plantaris",
    num: "PROJECT 03",
    category: "AI + COMPUTER VISION",
    title: "PLANTARIS",
    tagline: "AI-assisted footwear recommendation via smartphone optical calibration",
    icon: Footprints,
    status: "CLIENT PROJECT / DESIGN TARGET",
    tech: ["Computer Vision", "3D Foot Modeling", "A4 Reference Calibration", "Neural Sizing"],
  },
];

export const WorkHero: React.FC<{
  onSelectProject: (id: string) => void;
}> = ({ onSelectProject }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>("ml-hospital");

  const activeNode =
    ARCHIVE_NODES.find((n) => n.id === activeNodeId) || ARCHIVE_NODES[0];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid">
      {/* Background Soft Pearl & Violet Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] radial-violet-glow pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ✦ 1. CINEMATIC HERO EDITORIAL HEADER ✦ */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                AETHEL WORK // CASE STUDY JOURNAL
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#17152F] leading-[1.05]"
          >
            SYSTEMS
            <br />
            <span className="text-[#6D4AFF]">WE'VE ENGINEERED.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2 max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-xl font-medium text-[#17152F]/90 leading-relaxed">
              Real businesses. Real problems. Custom technology built around the way they operate.
            </p>
            <p className="text-xs sm:text-sm font-normal text-[#17152F]/65 leading-relaxed">
              Explore how Aethel turns business requirements into intelligent digital systems.
            </p>
          </motion.div>

          {/* Core Philosophy Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-bold text-[#6D4AFF]"
          >
            <span className="px-3.5 py-1.5 rounded-full neu-flat">
              ENGINEERING JOURNAL
            </span>
            <span className="text-[#17152F]/40 font-bold">→</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#6D4AFF] text-white shadow-[0_2px_10px_rgba(109,74,255,0.3)]">
              DOCUMENTED REALITY
            </span>
          </motion.div>
        </div>

        {/* ✦ 2. LARGE PHYSICAL AETHEL SYSTEM ARCHIVE WORKSTATION ✦ */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-10 neu-flat border border-[#EEEAFF] overflow-hidden">
            
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            {/* Archive Header Telemetry */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#EEEAFF] text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                  Æ
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#6D4AFF]">
                    SYSTEM ARCHIVE // ACTIVE CONSOLE
                  </div>
                  <div className="text-sm font-extrabold text-[#17152F]">
                    VERIFIED CLIENT CASE STUDIES
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[#6D4AFF] font-bold">
                  3 ACTIVE NODES INDEXED
                </span>
              </div>
            </div>

            {/* Interactive Project Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {ARCHIVE_NODES.map((node) => {
                const isSelected = node.id === activeNodeId;
                const Icon = node.icon;

                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setActiveNodeId(node.id);
                      onSelectProject(node.id);
                    }}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer select-none ${
                      isSelected
                        ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_24px_rgba(109,74,255,0.22)] -translate-y-1"
                        : "neu-flat-interactive hover:border-[#6D4AFF]/40"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-[#6D4AFF] text-white shadow-sm"
                              : "neu-inset-sm text-[#6D4AFF]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                          {node.num}
                        </span>
                      </div>

                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#17152F]/50 uppercase">
                          {node.category}
                        </div>
                        <div className="text-base font-extrabold text-[#17152F] mt-0.5">
                          {node.title}
                        </div>
                        <p className="text-xs text-[#17152F]/70 mt-1 line-clamp-2 leading-relaxed font-medium">
                          {node.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EEEAFF] flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                        {node.status}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected
                            ? "text-[#6D4AFF] translate-x-0.5 -translate-y-0.5"
                            : "text-[#17152F]/40"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Telemetry Callout */}
            <div className="p-4 rounded-2xl neu-inset flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#EEEAFF]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white text-[#6D4AFF] flex items-center justify-center shrink-0 shadow-sm">
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                    SELECTED ARCHIVE RECORD // {activeNode.num}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#17152F]">
                    {activeNode.title} — {activeNode.tagline}
                  </div>
                </div>
              </div>

              <a
                href={`#${activeNode.id}`}
                className="self-end sm:self-auto px-4 py-2 rounded-full neu-button-violet text-xs font-mono font-bold shrink-0"
              >
                VIEW DEEP DIVE ↓
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
