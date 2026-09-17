"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  LayoutGrid,
  BrainCircuit,
  Workflow,
  Database,
  ArrowDown,
  Layers,
  Sparkles,
  Bot,
  Zap,
  Code2,
  PhoneCall,
  MessageSquare,
  GitFork,
  Eye,
  BarChart3,
  Check,
} from "lucide-react";

interface ArchitectureLayer {
  id: string;
  num: string;
  name: string;
  role: string;
  description: string;
  icon: React.ElementType;
  capabilities: {
    name: string;
    tech: string;
    icon: React.ElementType;
  }[];
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: "people",
    num: "LAYER 01",
    name: "PEOPLE & OPERATORS",
    role: "The Human Core",
    description:
      "Executives, department leads, operations teams, support staff, and end customers who guide decisions and receive value.",
    icon: Users,
    capabilities: [
      { name: "Executive Oversight", tech: "Governance Dashboards", icon: Users },
      { name: "Operator Handoff", tech: "Human-in-the-Loop", icon: Users },
    ],
  },
  {
    id: "interfaces",
    num: "LAYER 02",
    name: "INTERFACES & CHANNELS",
    role: "Where Engagement Happens",
    description:
      "Bespoke software surfaces, conversational messengers, real-time voice streams, and client portals engineered for friction-free interactions.",
    icon: LayoutGrid,
    capabilities: [
      { name: "Custom Software", tech: "Internal Business Ops", icon: Code2 },
      { name: "WhatsApp AI", tech: "Autonomous Messaging", icon: MessageSquare },
      { name: "Voice AI", tech: "Sub-Second Telephony", icon: PhoneCall },
    ],
  },
  {
    id: "intelligence",
    num: "LAYER 03",
    name: "INTELLIGENCE & REASONING",
    role: "Cognitive Decision Engines",
    description:
      "Context-aware AI agents, computer vision pipelines, and domain-trained models that interpret inputs and resolve ambiguity.",
    icon: BrainCircuit,
    capabilities: [
      { name: "AI Agents", tech: "Multi-Step Autonomous Workers", icon: Bot },
      { name: "Computer Vision", tech: "Visual & Document Parsing", icon: Eye },
    ],
  },
  {
    id: "automation",
    num: "LAYER 04",
    name: "AUTOMATION & ORCHESTRATION",
    role: "Deterministic Execution",
    description:
      "State machines, multi-system triggers, and self-healing pipelines that route data and trigger transactions without manual lag.",
    icon: Workflow,
    capabilities: [
      { name: "AI Automation", tech: "Dynamic Workflow Decisions", icon: Zap },
      { name: "Workflow Automation", tech: "Deterministic System Sync", icon: GitFork },
    ],
  },
  {
    id: "data",
    num: "LAYER 05",
    name: "DATA & TELEMETRY",
    role: "Single Source of Truth",
    description:
      "Operational databases, vector knowledge bases, telemetry logs, and business intelligence models feeding continuous adaptation.",
    icon: Database,
    capabilities: [
      { name: "Business Intelligence", tech: "Live Operational Clarity", icon: BarChart3 },
      { name: "Knowledge Stores", tech: "Postgres & Vector Memory", icon: Database },
    ],
  },
];

export const SystemArchitectureSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("intelligence");

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Background Soft Glows */}
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
            <Layers className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              SYSTEM ARCHITECTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            ONE BUSINESS.
            <br />
            <span className="text-[#6D4AFF]">MULTIPLE INTELLIGENT LAYERS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Aethel combines different technologies according to what your business actually needs. Each capability slots into an engineered stack operating as a cohesive whole.
          </motion.p>
        </div>

        {/* ✦ THE ARCHITECTURAL COMPOSITION ✦ */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Central Business Core & Layer Controller (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* "YOUR BUSINESS" Center Anchor Card */}
            <div className="p-6 rounded-3xl neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_28px_rgba(109,74,255,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-sm shadow-[0_4px_14px_rgba(109,74,255,0.35)]">
                    Æ
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      CORE ANCHOR
                    </div>
                    <div className="text-base font-extrabold text-[#17152F]">
                      YOUR BUSINESS OPERATIONS
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[10px] font-mono font-bold text-[#6D4AFF]">
                  UNIFIED
                </span>
              </div>
              <p className="mt-3 text-xs text-[#17152F]/70 leading-relaxed">
                A single unified operational model powers every layer. Information moves without silos, re-entry, or human bottlenecks.
              </p>
            </div>

            {/* Layer Selection Stack */}
            <div className="space-y-2.5">
              {ARCHITECTURE_LAYERS.map((layer) => {
                const isActive = layer.id === activeLayerId;
                const Icon = layer.icon;

                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between cursor-pointer select-none ${
                      isActive
                        ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_6px_20px_rgba(109,74,255,0.2)] translate-x-1"
                        : "neu-flat-interactive hover:border-[#6D4AFF]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#6D4AFF] text-white"
                            : "neu-inset-sm text-[#6D4AFF]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                          {layer.num}
                        </div>
                        <div className="text-xs sm:text-sm font-extrabold text-[#17152F]">
                          {layer.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#17152F]/40 hidden sm:inline">
                        {layer.capabilities.length} Capabilities
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full transition-all ${
                          isActive
                            ? "bg-[#6D4AFF] ring-4 ring-[#6D4AFF]/20"
                            : "bg-zinc-300"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Detailed Layer Architectural Blueprint (7 cols) */}
          <div className="lg:col-span-7">
            {ARCHITECTURE_LAYERS.map((layer) => {
              if (layer.id !== activeLayerId) return null;
              const LayerIcon = layer.icon;

              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 sm:p-8 rounded-3xl neu-flat border border-[#EEEAFF] space-y-6 relative overflow-hidden"
                >
                  {/* Top Layer Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EEEAFF]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(109,74,255,0.3)]">
                        <LayerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                          ARCHITECTURE SPECIFICATION // {layer.num}
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-[#17152F]">
                          {layer.name}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF]">
                      {layer.role}
                    </span>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
                    {layer.description}
                  </p>

                  {/* Connected Aethel Capabilities in this Layer */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase tracking-wider">
                      CONNECTED CAPABILITIES IN THIS LAYER
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {layer.capabilities.map((cap, idx) => {
                        const CapIcon = cap.icon;
                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl neu-inset flex items-start gap-3.5 border border-[#EEEAFF]"
                          >
                            <div className="w-8 h-8 rounded-xl bg-white text-[#6D4AFF] flex items-center justify-center shrink-0 shadow-sm">
                              <CapIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-extrabold text-[#17152F]">
                                {cap.name}
                              </div>
                              <div className="text-[11px] font-mono text-[#6D4AFF] mt-0.5">
                                {cap.tech}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Data Flow Telemetry Path */}
                  <div className="p-4 rounded-2xl neu-inset-sm space-y-2 border border-[#EEEAFF]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#17152F]/70">
                      <span className="font-bold text-[#6D4AFF]">
                        BIDIRECTIONAL DATA PATHWAY
                      </span>
                      <span>LATENCY &lt; 45ms</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#E5E4DE] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#6D4AFF] animate-[shimmer_2s_infinite]" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#17152F]/50">
                      <span>Input: Real-world Events</span>
                      <span>Output: Verified Execution</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
