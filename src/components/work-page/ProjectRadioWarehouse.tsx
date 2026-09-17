"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Volume2,
  Sliders,
  Tv,
  Radio,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

interface AutoComponent {
  id: string;
  name: string;
  category: string;
  position: string;
  description: string;
  specs: string;
}

const AUTO_COMPONENTS: AutoComponent[] = [
  {
    id: "head-unit",
    name: "ANDROID HEAD UNIT",
    category: "Cockpit & Infotainment",
    position: "Front Dash Console",
    description: "High-resolution touch display with Apple CarPlay, Android Auto, DSP sound processor & 360° camera interface.",
    specs: "DSP Audio EQ • 4K Video Output",
  },
  {
    id: "speakers",
    name: "COMPONENT SPEAKERS",
    category: "Front & Rear Soundstage",
    position: "Door Panels & Pillars",
    description: "Multi-driver component speakers tuned for crisp vocal isolation, mid-bass punch, and distortion-free staging.",
    specs: "High Sensitivity • Low Resonance",
  },
  {
    id: "tweeters",
    name: "SILK DOME TWEETERS",
    category: "High Frequency Staging",
    position: "A-Pillar Custom Pods",
    description: "Dedicated high-frequency transducers rendering airy treble and precise spatial sound distribution.",
    specs: "Neodymium Magnets • Custom Angling",
  },
  {
    id: "amplifier",
    name: "MULTI-CHANNEL AMPLIFIER",
    category: "Power Architecture",
    position: "Under-Seat / Trunk Mount",
    description: "Clean Class-D digital amplification providing high current overhead and zero harmonic distortion at high volume.",
    specs: "Class-D Architecture • Active Thermal Control",
  },
  {
    id: "subwoofer",
    name: "ACTIVE SUBWOOFER",
    category: "Low-End Bass Engine",
    position: "Custom Boot Enclosure",
    description: "Acoustically sealed enclosure engineered for deep sub-bass frequencies without rattling vehicle chassis.",
    specs: "Ported / Sealed Enclosure Options",
  },
  {
    id: "accessories",
    name: "AUTOMOTIVE ACCESSORIES",
    category: "Modification Suite",
    position: "Exterior & Interior Styling",
    description: "Ambient LED lighting, sound deadening damping sheets, dashcams, and bespoke wiring harnesses.",
    specs: "OEM Matching Fitments",
  },
];

export const ProjectRadioWarehouse: React.FC<{
  onOpenDetail: () => void;
}> = ({ onOpenDetail }) => {
  const [selectedCompId, setSelectedCompId] = useState<string>("head-unit");

  const selectedComp =
    AUTO_COMPONENTS.find((c) => c.id === selectedCompId) || AUTO_COMPONENTS[0];

  return (
    <div id="radio-warehouse" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] neu-flat border border-[#EEEAFF] space-y-10 relative overflow-hidden">
        
        {/* Top Header Badge & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(109,74,255,0.35)]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                  CASE STUDY // 02 / AUTOMOTIVE
                </span>
                <span className="text-[10px] font-mono text-amber-600 font-bold">
                  // ENGINEERING IN PROGRESS
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight">
                RADIO WAREHOUSE
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF]">
              IMMERSIVE EXPLODED VIEW
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
                "FROM CAR AUDIO TO A COMPLETE AUTOMOTIVE EXPERIENCE."
              </h3>
              <p className="text-xs font-mono font-bold text-[#6D4AFF]">
                Radio Warehouse has evolved beyond car audio and speakers into a broader automotive modification and accessories business.
              </p>
            </div>

            <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
              We engineered a digital configuration interface allowing car enthusiasts to explore vehicle soundstages, choose modification packages, and visualize how bespoke components assemble into a complete high-end build.
            </p>

            {/* Sequence Flow */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                MODIFICATION PIPELINE:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                {[
                  { step: "01", name: "VEHICLE", sub: "Make & Model" },
                  { step: "02", name: "SYSTEM", sub: "Soundstage" },
                  { step: "03", name: "COMPONENTS", sub: "Exploded View" },
                  { step: "04", name: "UPGRADE", sub: "Enquiry Lock" },
                ].map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl neu-inset text-xs space-y-0.5">
                    <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">{s.step}</div>
                    <div className="font-extrabold text-[#17152F] text-[11px]">{s.name}</div>
                    <div className="text-[9px] text-[#17152F]/60">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Status */}
            <div className="p-4 rounded-2xl neu-inset space-y-1.5 border border-[#EEEAFF]">
              <div className="text-[10px] font-mono font-bold text-amber-600 uppercase flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-amber-600" />
                <span>ENGINEERING STATUS</span>
              </div>
              <div className="text-xs font-extrabold text-[#17152F]">
                ENGINEERING IN PROGRESS
              </div>
              <p className="text-[11px] text-[#17152F]/70 leading-relaxed">
                Interactive component selector and soundstage acoustic simulation modules currently in active development.
              </p>
            </div>
          </div>

          {/* Right: Exploded Automotive Audio Staging Visualizer (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-6 border border-[#EEEAFF]">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DE] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#6D4AFF]" />
                <span className="font-bold text-[#17152F]">
                  VEHICLE SOUNDSTAGE MATRIX
                </span>
              </div>
              <span className="text-[#6D4AFF] font-bold">6 HARDWARE NODES</span>
            </div>

            {/* Interactive Hardware Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {AUTO_COMPONENTS.map((comp) => {
                const isActive = comp.id === selectedCompId;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedCompId(comp.id)}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-white border-2 border-[#6D4AFF] shadow-sm"
                        : "bg-white/60 border border-[#EEEAFF] hover:bg-white"
                    }`}
                  >
                    <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                      {comp.position}
                    </div>
                    <div className="text-xs font-extrabold text-[#17152F] truncate">
                      {comp.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Component Focus Telemetry */}
            <div className="p-5 rounded-xl bg-white border border-[#EEEAFF] space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-extrabold text-[#17152F]">
                  {selectedComp.name}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                  {selectedComp.category}
                </span>
              </div>

              <p className="text-xs text-[#17152F]/75 leading-relaxed">
                {selectedComp.description}
              </p>

              <div className="pt-2 border-t border-[#EEEAFF] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#6D4AFF] font-bold">
                  {selectedComp.specs}
                </span>
                <span className="px-2 py-0.5 rounded-full neu-inset-sm text-[10px] font-bold text-[#17152F]/70">
                  ACOUSTIC ISOLATION
                </span>
              </div>
            </div>

            {/* Architecture Path Diagram */}
            <div className="p-3.5 rounded-xl bg-[#F7F6F2] font-mono text-[11px] flex flex-wrap items-center justify-between gap-2 text-[#17152F]/80">
              <span className="font-bold text-[#6D4AFF]">FLOW:</span>
              <span>CUSTOMER</span>
              <span>↓</span>
              <span>VEHICLE</span>
              <span>↓</span>
              <span>PRODUCT</span>
              <span>↓</span>
              <span>CONFIGURATION</span>
              <span>↓</span>
              <span>ENQUIRY</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
