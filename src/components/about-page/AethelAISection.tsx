"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  MessageSquare,
  Zap,
  PhoneCall,
  Database,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface AIRole {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
}

const AI_ROLES: AIRole[] = [
  { id: "sales", name: "SALES ASSISTANT", tagline: "Autonomous qualification and quotation delivery", icon: Bot },
  { id: "comms", name: "COMMUNICATION LAYER", tagline: "24/7 WhatsApp & omnichannel inquiry triage", icon: MessageSquare },
  { id: "workflow", name: "WORKFLOW ENGINE", tagline: "Context-aware event routing & anomaly triage", icon: Zap },
  { id: "voice", name: "VOICE AGENT", tagline: "Sub-second natural phone scheduling & assistance", icon: PhoneCall },
  { id: "knowledge", name: "KNOWLEDGE INTERFACE", tagline: "Instant semantic retrieval over company documents", icon: Database },
  { id: "decision", name: "DECISION SUPPORT", tagline: "Operational scenario simulation & risk checks", icon: BrainCircuit },
  { id: "vision", name: "COMPUTER VISION", tagline: "Document OCR parsing & physical defect inspection", icon: Eye },
  { id: "automation", name: "BUSINESS AUTOMATION", tagline: "Self-healing data synchronization across platforms", icon: Sliders },
];

export const AethelAISection: React.FC = () => {
  const [activeRoleId, setActiveRoleId] = useState<string>("sales");

  const activeRole = AI_ROLES.find((r) => r.id === activeRoleId) || AI_ROLES[0];
  const ActiveIcon = activeRole.icon;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] radial-violet-glow pointer-events-none -z-10" />

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
              OUR DIRECTION // APPLIED INTELLIGENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            AI ISN'T THE PRODUCT.
            <br />
            <span className="text-[#6D4AFF]">
              INTELLIGENCE IS THE INFRASTRUCTURE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            We don't sell AI as a novelty feature. We embed machine intelligence directly into business operations as a durable, dependable layer of cognitive infrastructure.
          </motion.p>
        </div>

        {/* ✦ 1. THE 5-STAGE INTELLIGENCE PATHWAY ✦ */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl neu-inset border border-[#EEEAFF] mb-12">
          <div className="text-xs font-mono font-bold text-[#6D4AFF] uppercase text-center mb-6">
            THE APPLIED INTELLIGENCE PIPELINE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono font-bold text-[#17152F]">
            {[
              { num: "01", name: "BUSINESS", sub: "Operational Context" },
              { num: "02", name: "WORKFLOW", sub: "Process Routing" },
              { num: "03", name: "DATA", sub: "Verified Inputs" },
              { num: "04", name: "AI", sub: "Reasoning Layer" },
              { num: "05", name: "ACTION", sub: "System Execution" },
            ].map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-[#EEEAFF] space-y-1 shadow-sm"
              >
                <div className="text-[9px] text-[#6D4AFF]">{st.num}</div>
                <div className="text-xs font-extrabold">{st.name}</div>
                <div className="text-[9px] text-[#17152F]/60 font-medium">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ✦ 2. TACTILE AI CAPABILITY MATRIX ✦ */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AI_ROLES.map((role) => {
            const isSelected = role.id === activeRoleId;
            const Icon = role.icon;

            return (
              <button
                key={role.id}
                onClick={() => setActiveRoleId(role.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer select-none ${
                  isSelected
                    ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_20px_rgba(109,74,255,0.2)] -translate-y-1"
                    : "neu-flat-sm hover:border-[#6D4AFF]/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-[#6D4AFF] text-white"
                        : "neu-inset-sm text-[#6D4AFF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                    SYSTEM
                  </span>
                </div>

                <div>
                  <div className="text-xs font-extrabold text-[#17152F]">
                    {role.name}
                  </div>
                  <p className="text-[11px] text-[#17152F]/70 mt-1 line-clamp-2 leading-relaxed">
                    {role.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
