"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Compass,
  GitFork,
  PenTool,
  Cpu,
  BrainCircuit,
  Zap,
  Network,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

interface FlowStep {
  step: string;
  name: string;
  role: string;
  icon: React.ElementType;
}

const FLOW_STEPS: FlowStep[] = [
  { step: "01", name: "BUSINESS OWNER", role: "Operational Reality & Vision", icon: Compass },
  { step: "02", name: "AETHEL UNDERSTANDS", role: "Deep Process Audit", icon: Compass },
  { step: "03", name: "SYSTEM ARCHITECTURE", role: "Blueprint & State Mapping", icon: GitFork },
  { step: "04", name: "DESIGN", role: "Tactile Neomorphic UI/UX", icon: PenTool },
  { step: "05", name: "ENGINEERING", role: "Type-Safe Full-Stack Core", icon: Cpu },
  { step: "06", name: "AI / AUTOMATION", role: "Cognitive Triggers & Pipelines", icon: BrainCircuit },
  { step: "07", name: "DEPLOYMENT", role: "Zero-Downtime Rollout", icon: Zap },
  { step: "08", name: "EVOLUTION", role: "Continuous Adaptive Scaling", icon: Network },
];

export const TeamModelSection: React.FC = () => {
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
            <Workflow className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              THE COLLABORATIVE MODEL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            FROM IDEA
            <br />
            <span className="text-[#6D4AFF]">TO SYSTEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Aethel operates as a multidisciplinary engineering unit deeply embedded alongside business leadership—not an arms-length outsourced agency.
          </motion.p>
        </div>

        {/* ✦ 8-STEP INTERNAL SEQUENCE GRID ✦ */}
        <div className="p-6 sm:p-10 rounded-3xl neu-flat border border-[#EEEAFF] max-w-5xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FLOW_STEPS.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.step}
                  className="p-4 rounded-2xl neu-inset space-y-2 text-left border border-[#EEEAFF]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      {node.step}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  </div>
                  <div className="text-xs font-extrabold text-[#17152F]">
                    {node.name}
                  </div>
                  <div className="text-[10px] text-[#17152F]/65 font-medium leading-tight">
                    {node.role}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#EEEAFF] text-center text-xs font-mono text-[#17152F]/70">
            ✦ Unified lifecycle ownership: Discovery → Architecture → Engineering → Support
          </div>
        </div>

      </div>
    </section>
  );
};
