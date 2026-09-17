"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Footprints,
  Camera,
  Scan,
  Box,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Cpu,
} from "lucide-react";

export const ProjectPlantaris: React.FC<{
  onOpenDetail: () => void;
}> = ({ onOpenDetail }) => {
  const [activeAnalysisMode, setActiveAnalysisMode] = useState<
    "optical" | "mesh" | "sizing"
  >("optical");

  return (
    <div id="plantaris" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] neu-flat border border-[#EEEAFF] space-y-10 relative overflow-hidden">
        
        {/* Top Header Badge & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(109,74,255,0.35)]">
              <Footprints className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                  CLIENT PROJECT // 03 / AI + COMPUTER VISION
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  // BESPOKE ENGAGEMENT
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight">
                PLANTARIS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF]">
              COMPUTER VISION & 3D MODELING
            </span>
            <button
              onClick={onOpenDetail}
              className="px-4 py-2 rounded-full neu-button-violet text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#17152F] leading-snug">
                "FROM PHYSICAL MEASUREMENT TO DIGITAL INTELLIGENCE."
              </h3>
              <p className="text-xs font-mono font-bold text-[#6D4AFF]">
                AI-assisted footwear recommendation using optical smartphone calibration.
              </p>
            </div>

            <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
              A bespoke client engagement to engineer an AI-assisted foot dimensioning and shoe fit recommendation system. By utilizing standard A4 sheet paper as an optical real-world ground truth reference, smartphone captures are transformed into volumetric foot representations.
            </p>

            {/* Visual Sequence */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                OPTICAL MEASUREMENT PIPELINE:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1.5 text-center">
                {[
                  { step: "01", name: "CAMERA", sub: "A4 Ground Truth" },
                  { step: "02", name: "IMAGE", sub: "Contour Extract" },
                  { step: "03", name: "ANALYSIS", sub: "Arch & Width" },
                  { step: "04", name: "3D MODEL", sub: "Point Mesh" },
                  { step: "05", name: "RECOMMEND", sub: "Last Fit Match" },
                ].map((s, idx) => (
                  <div key={idx} className="p-2 rounded-xl neu-inset text-xs space-y-0.5">
                    <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">{s.step}</div>
                    <div className="font-extrabold text-[#17152F] text-[10px] truncate">{s.name}</div>
                    <div className="text-[8px] text-[#17152F]/60 line-clamp-1">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Scope & Target Disclosure */}
            <div className="p-4 rounded-2xl neu-inset space-y-1.5 border border-[#EEEAFF]">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
                <span>PROJECT DESIGN SPECIFICATIONS</span>
              </div>
              <div className="text-xs font-extrabold text-[#17152F]">
                BUILT FOR BESPOKE FIT CALIBRATION
              </div>
              <p className="text-[11px] text-[#17152F]/70 leading-relaxed">
                Specifications represent engineered design targets and algorithmic calibration benchmarks developed for the client's footwear catalog.
              </p>
            </div>
          </div>

          {/* Right: Footprint Optical Recognition Interface (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-6 border border-[#EEEAFF]">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DE] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-[#6D4AFF]" />
                <span className="font-bold text-[#17152F]">
                  OPTICAL CALIBRATION ENGINE
                </span>
              </div>
              <div className="flex gap-1.5">
                {(["optical", "mesh", "sizing"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveAnalysisMode(m)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      activeAnalysisMode === m
                        ? "bg-[#6D4AFF] text-white"
                        : "bg-white text-[#17152F]/70 hover:bg-[#EEEAFF]"
                    }`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Scanning Viewport */}
            <div className="p-6 rounded-2xl bg-[#17152F] text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#6D4AFF] animate-pulse" />
              
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8B6CFF]">
                <span>REFERENCE: A4 STANDARD [210mm × 297mm]</span>
                <span>PLANE: HORIZONTAL ZERO-PITCH</span>
              </div>

              {/* Graphical Mesh / Contour Mock */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-emerald-400">
                  <span>✦ Volumetric Foot Point Cloud: 12,400 vertices</span>
                  <span>CALIBRATED</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-zinc-300">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">CALCULATED LENGTH</div>
                    <div className="text-[#8B6CFF] font-bold">268.4 mm</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">BALL WIDTH</div>
                    <div className="text-[#8B6CFF] font-bold">98.2 mm</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">ARCH PROFILE</div>
                    <div className="text-emerald-400 font-bold">Medium / Neutral</div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-zinc-400">
                TRANSFORMATION: PHYSICAL → VALIDATED → ANALYTICAL → DIGITAL
              </div>
            </div>

            {/* Architecture Path Diagram */}
            <div className="p-3.5 rounded-xl bg-[#F7F6F2] font-mono text-[11px] flex flex-wrap items-center justify-between gap-2 text-[#17152F]/80">
              <span className="font-bold text-[#6D4AFF]">FLOW:</span>
              <span>IMAGE</span>
              <span>↓</span>
              <span>VISION</span>
              <span>↓</span>
              <span>3D MODEL</span>
              <span>↓</span>
              <span>ANALYSIS</span>
              <span>↓</span>
              <span>RECOMMENDATION</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
