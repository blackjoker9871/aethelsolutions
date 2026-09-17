"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  Workflow,
  Radio,
  Eye,
} from "lucide-react";

export interface CaseStudyData {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  industry: string;
  system: string;
  focus: string;
  status: "SYSTEM DELIVERED" | "SYSTEM IN DEVELOPMENT" | "AI SYSTEM IN DEVELOPMENT";
  statusColor: "violet" | "amber";
  problem: string;
  systemSolution: string;
  experience: string;
  alignVisual: "left" | "right";
}

export const CaseStudyCard: React.FC<{
  project: CaseStudyData;
  index: number;
}> = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState<"system" | "problem" | "experience">("system");
  const isVisualLeft = project.alignVisual === "left";

  return (
    <div
      id={`project-${project.id}`}
      className="relative w-full min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center py-12 sm:py-16 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* ✦ 1. TEXT / METADATA COLUMN ✦ */}
        <motion.div
          initial={{ opacity: 0, x: isVisualLeft ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`space-y-6 lg:col-span-5 ${isVisualLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          {/* Project Number & Category */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full neu-inset-sm font-mono text-[11px] font-extrabold text-[#6D4AFF]">
              PROJECT {project.num} / 03
            </span>
            <span className="text-[11px] font-mono text-[#17152F]/70 font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#17152F]">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#17152F]/75 font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Structured Information Panel with Tabs */}
          <div className="neu-flat rounded-3xl p-5 sm:p-6 space-y-4">
            
            {/* Neomorphic Inset Tab Switcher */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 neu-inset rounded-2xl text-[10px] font-mono">
              <button
                onClick={() => setActiveTab("system")}
                className={`py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "system"
                    ? "bg-[#6D4AFF] text-white shadow-xs"
                    : "text-zinc-500 hover:text-[#6D4AFF]"
                }`}
              >
                THE SYSTEM
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "problem"
                    ? "bg-[#6D4AFF] text-white shadow-xs"
                    : "text-zinc-500 hover:text-[#6D4AFF]"
                }`}
              >
                THE PROBLEM
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-[#6D4AFF] text-white shadow-xs"
                    : "text-zinc-500 hover:text-[#6D4AFF]"
                }`}
              >
                EXPERIENCE
              </button>
            </div>

            {/* Tab Description Content */}
            <div className="min-h-[96px] flex items-center text-xs sm:text-sm text-[#17152F]/80 leading-relaxed font-normal">
              {activeTab === "system" && (
                <p>
                  <strong className="text-[#17152F] font-bold block mb-1">What Aethel Engineered:</strong>
                  {project.systemSolution}
                </p>
              )}
              {activeTab === "problem" && (
                <p>
                  <strong className="text-[#17152F] font-bold block mb-1">What Needed To Be Solved:</strong>
                  {project.problem}
                </p>
              )}
              {activeTab === "experience" && (
                <p>
                  <strong className="text-[#17152F] font-bold block mb-1">Customer / User Interaction:</strong>
                  {project.experience}
                </p>
              )}
            </div>

            {/* Technical Metadata Inset Bar */}
            <div className="pt-3 border-t border-[#EEEAFF] grid grid-cols-2 gap-2 text-[10px] font-mono text-[#17152F]">
              <div className="neu-inset-sm p-2 rounded-xl">
                <span className="text-zinc-500 block text-[8px] uppercase font-bold">INDUSTRY</span>
                <span className="font-bold text-[#17152F]">{project.industry}</span>
              </div>
              <div className="neu-inset-sm p-2 rounded-xl">
                <span className="text-zinc-500 block text-[8px] uppercase font-bold">SYSTEM TYPE</span>
                <span className="font-bold text-[#6D4AFF] truncate block">{project.system}</span>
              </div>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between text-[10px] font-mono pt-1">
              <span className="text-zinc-500">FOCUS: {project.focus}</span>
              <span
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold ${
                  project.statusColor === "violet"
                    ? "bg-[#EEEAFF] text-[#6D4AFF] border border-[#6D4AFF]/20"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.statusColor === "violet" ? "bg-[#6D4AFF] animate-pulse" : "bg-amber-500"
                  }`}
                />
                <span>{project.status}</span>
              </span>
            </div>

          </div>
        </motion.div>

        {/* ✦ 2. LARGE VISUAL CASE STUDY PRESENTATION FRAME ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:col-span-7 ${isVisualLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="neu-core-panel rounded-3xl p-3 sm:p-4 group relative overflow-hidden transition-all duration-500 hover:shadow-[20px_20px_48px_#D6D5CD,-20px_-20px_48px_#FFFFFF]">
            
            {/* Top Minimal Browser Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#EEEAFF] mb-3 text-[10px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E4DE]" />
              </div>
              <div className="px-3 py-0.5 rounded-full neu-inset-sm text-[9px] text-[#17152F]/70 font-semibold truncate max-w-[200px]">
                aethel.systems / case / {project.id}
              </div>
              <div className="flex items-center gap-1 text-[#6D4AFF] font-bold text-[9px]">
                <Eye className="w-3 h-3" />
                <span>CASE VIEW</span>
              </div>
            </div>

            {/* High-Fidelity Neomorphic Render Image */}
            <div className="relative rounded-2xl overflow-hidden neu-inset p-1 border border-[#EEEAFF]/80">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={800}
                height={500}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="w-full h-auto object-cover rounded-xl transition-all duration-700 group-hover:scale-101"
              />
              
              {/* Corner Live Watermark */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-mono font-bold text-[#17152F] border border-[#EEEAFF] shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-ping" aria-hidden="true" />
                <span>ENGINEERED BY AETHEL</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
