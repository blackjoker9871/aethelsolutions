"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Bot,
  Zap,
  GitFork,
  Code2,
  PhoneCall,
  MessageSquare,
  Eye,
  BarChart3,
  Layout,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface CapabilityBlock {
  num: string;
  name: string;
  desc: string;
  icon: React.ElementType;
}

const CAPABILITIES: CapabilityBlock[] = [
  { num: "01", name: "AI SYSTEMS", desc: "End-to-end cognitive architectures connecting intelligence to operations.", icon: Bot },
  { num: "02", name: "AI AUTOMATION", desc: "Dynamic decision logic embedded into high-volume event loops.", icon: Zap },
  { num: "03", name: "WORKFLOW AUTOMATION", desc: "Deterministic cross-platform data synchronization & triggers.", icon: GitFork },
  { num: "04", name: "CUSTOM SOFTWARE", desc: "Bespoke internal operating tools designed around exact business hierarchies.", icon: Code2 },
  { num: "05", name: "AI AGENTS", desc: "Autonomous digital workers executing complex multi-step tasks.", icon: Bot },
  { num: "06", name: "VOICE SYSTEMS", desc: "Low-latency telephony agents for scheduling, triage & support.", icon: PhoneCall },
  { num: "07", name: "WHATSAPP SYSTEMS", desc: "Turning customer messengers into automated operations channels.", icon: MessageSquare },
  { num: "08", name: "COMPUTER VISION", desc: "Optical document parsing, quality control & physical object recognition.", icon: Eye },
  { num: "09", name: "BUSINESS DASHBOARDS", desc: "Live telemetry and operational clarity for leadership teams.", icon: BarChart3 },
  { num: "10", name: "INTEGRATED DIGITAL EXPERIENCES", desc: "Minimalist, high-performance customer front doors & portals.", icon: Layout },
];

export const CapabilityMapSection: React.FC = () => {
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
            <Boxes className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              CAPABILITY SUITE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            BUILT FOR
            <br />
            <span className="text-[#6D4AFF]">REAL OPERATIONS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            These are not disconnected services. They are modular building blocks designed to combine into one cohesive business infrastructure.
          </motion.p>
        </div>

        {/* ✦ 10 TACTILE COMPONENT MODULES ✦ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="p-5 rounded-3xl neu-flat hover:border-[#6D4AFF]/40 transition-all duration-300 flex flex-col justify-between space-y-4 border border-[#EEEAFF] select-none group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center group-hover:bg-[#6D4AFF] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      {cap.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#17152F] leading-snug">
                      {cap.name}
                    </h3>
                    <p className="text-[11px] text-[#17152F]/70 mt-1 line-clamp-3 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EEEAFF] text-[9px] font-mono font-bold text-[#6D4AFF] uppercase">
                  READY COMPONENT
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
