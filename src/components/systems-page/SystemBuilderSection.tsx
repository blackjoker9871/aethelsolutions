"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
  Plus,
  ArrowRight,
  RefreshCw,
  Cpu,
  Activity,
  SlidersHorizontal,
} from "lucide-react";

interface BuilderModule {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  description: string;
  defaultActive?: boolean;
}

const BUILDER_MODULES: BuilderModule[] = [
  {
    id: "ai-agent",
    name: "AI AGENTS",
    shortName: "AGENT",
    icon: Bot,
    description: "Autonomous reasoning & action execution",
    defaultActive: true,
  },
  {
    id: "whatsapp",
    name: "WHATSAPP AI",
    shortName: "WHATSAPP",
    icon: MessageSquare,
    description: "24/7 conversational operations interface",
    defaultActive: true,
  },
  {
    id: "software",
    name: "CUSTOM SOFTWARE",
    shortName: "SOFTWARE",
    icon: Code2,
    description: "Tailored internal business portal & RBAC",
  },
  {
    id: "voice",
    name: "VOICE AI",
    shortName: "VOICE",
    icon: PhoneCall,
    description: "Autonomous high-fidelity phone routing",
  },
  {
    id: "automation",
    name: "AI AUTOMATION",
    shortName: "AUTOMATION",
    icon: Zap,
    description: "Multi-system event triggers & data sync",
    defaultActive: true,
  },
  {
    id: "vision",
    name: "COMPUTER VISION",
    shortName: "VISION",
    icon: Eye,
    description: "Visual document & physical defect parsing",
  },
  {
    id: "workflow",
    name: "WORKFLOW ORCHESTRATION",
    shortName: "WORKFLOW",
    icon: GitFork,
    description: "Deterministic cross-platform execution",
  },
  {
    id: "analytics",
    name: "BUSINESS INTELLIGENCE",
    shortName: "ANALYTICS",
    icon: BarChart3,
    description: "Live operational telemetry & executive clarity",
  },
];

interface SystemPreset {
  id: string;
  title: string;
  subtitle: string;
  moduleIds: string[];
  workflow: string[];
  tagline: string;
}

const PRESETS: SystemPreset[] = [
  {
    id: "sales",
    title: "AI SALES SYSTEM",
    subtitle: "Lead Ingestion → Instant Qualification → Autonomous Booking",
    moduleIds: ["ai-agent", "whatsapp", "voice", "automation"],
    workflow: [
      "New Inbound Lead",
      "Instant WhatsApp & Voice Outreach",
      "Contextual Qualification",
      "Calendar Locked & CRM Sync",
    ],
    tagline:
      "Captures, qualifies, and schedules meetings with zero lead decay.",
  },
  {
    id: "operations",
    title: "AUTONOMOUS OPERATIONS CORE",
    subtitle: "Custom Portal → Event Pipelines → Automated Execution",
    moduleIds: ["software", "workflow", "ai-agent", "analytics"],
    workflow: [
      "Operational Request Ingest",
      "RBAC Validation & Policy Check",
      "Multi-Tool Automated Action",
      "Executive Dashboard Telemetry",
    ],
    tagline:
      "Eliminates internal departmental friction and manual re-entry.",
  },
  {
    id: "inspection",
    title: "INTELLIGENT INSPECTION SYSTEM",
    subtitle: "Camera / OCR → Neural Vision → Fault Detection → Instant Alert",
    moduleIds: ["vision", "software", "workflow", "analytics"],
    workflow: [
      "Document / Physical Feed",
      "Sub-Second Optical Parsing",
      "Anomaly Classification",
      "Automated Routing & ERP Update",
    ],
    tagline:
      "Continuous, zero-error document parsing and physical quality control.",
  },
];

export const SystemBuilderSection: React.FC = () => {
  const [activeModuleIds, setActiveModuleIds] = useState<string[]>([
    "ai-agent",
    "whatsapp",
    "automation",
  ]);

  const toggleModule = (id: string) => {
    setActiveModuleIds((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((m) => m !== id)
          : prev
        : [...prev, id]
    );
  };

  const applyPreset = (preset: SystemPreset) => {
    setActiveModuleIds(preset.moduleIds);
  };

  // Derive synthesized system name and traits dynamically based on active modules
  const getSynthesizedSystemTitle = () => {
    const hasAgent = activeModuleIds.includes("ai-agent");
    const hasWhatsApp = activeModuleIds.includes("whatsapp");
    const hasVoice = activeModuleIds.includes("voice");
    const hasSoftware = activeModuleIds.includes("software");
    const hasVision = activeModuleIds.includes("vision");
    const hasWorkflow = activeModuleIds.includes("workflow");
    const hasAnalytics = activeModuleIds.includes("analytics");

    if (hasVision && (hasSoftware || hasWorkflow)) {
      return "INTELLIGENT VISION & INSPECTION SYSTEM";
    }
    if ((hasWhatsApp || hasVoice) && hasAgent && !hasSoftware) {
      return "AUTONOMOUS CLIENT CONVERSATION SYSTEM";
    }
    if (hasSoftware && (hasWorkflow || hasAnalytics)) {
      return "BESPOKE ENTERPRISE OPERATIONS CORE";
    }
    if (activeModuleIds.length >= 5) {
      return "FULL-SPECTRUM INTELLIGENT ENTERPRISE INFRASTRUCTURE";
    }
    return "SYNTHESIZED BESPOKE OPERATIONAL ENGINE";
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] radial-violet-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Cpu className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              THE AETHEL SYSTEM BUILDER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            THE POWER IS IN
            <br />
            <span className="text-[#6D4AFF]">HOW THE PIECES CONNECT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Activate technology modules to watch them dock into the central system and synthesize a connected business infrastructure.
          </motion.p>
        </div>

        {/* ✦ PRESET QUICK SELECTORS ✦ */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="text-xs font-mono font-bold text-[#17152F]/60 mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#6D4AFF]" />
            LOAD BLUEPRINT:
          </span>
          {PRESETS.map((preset) => {
            const isMatch =
              preset.moduleIds.length === activeModuleIds.length &&
              preset.moduleIds.every((id) => activeModuleIds.includes(id));

            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold cursor-pointer transition-all duration-200 ${
                  isMatch
                    ? "bg-[#6D4AFF] text-white shadow-[0_2px_10px_rgba(109,74,255,0.35)]"
                    : "neu-flat-sm text-[#17152F] hover:border-[#6D4AFF]/40"
                }`}
              >
                {preset.title}
              </button>
            );
          })}
        </div>

        {/* ✦ THE SYSTEM BUILDER WORKBENCH CONSOLE ✦ */}
        <div className="p-6 sm:p-10 rounded-3xl neu-flat border border-[#EEEAFF] space-y-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT TRAY: AVAILABLE CAPABILITY MODULES (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#EEEAFF]">
                <span className="font-bold text-[#6D4AFF]">
                  CAPABILITIES POOL // {activeModuleIds.length} ACTIVE
                </span>
                <span className="text-[#17152F]/40">TOGGLE TO CONNECT</span>
              </div>

              <div className="space-y-2">
                {BUILDER_MODULES.map((mod) => {
                  const isActive = activeModuleIds.includes(mod.id);
                  const Icon = mod.icon;

                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`w-full p-3.5 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 text-left select-none ${
                        isActive
                          ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_4px_16px_rgba(109,74,255,0.2)] translate-x-1"
                          : "neu-flat-sm opacity-70 hover:opacity-100 hover:border-[#6D4AFF]/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-[#6D4AFF] text-white"
                              : "neu-inset-sm text-[#6D4AFF]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-[#17152F]">
                            {mod.name}
                          </div>
                          <div className="text-[10px] text-[#17152F]/60 line-clamp-1">
                            {mod.description}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#6D4AFF] text-white"
                            : "neu-inset-sm text-[#17152F]/30"
                        }`}
                      >
                        {isActive ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT CONSOLE: DOCKED SYSTEM VISUALIZER & SYNTHESIS (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Central Synthesized System Display Card */}
              <div className="p-6 sm:p-8 rounded-3xl neu-inset border border-[#EEEAFF] space-y-6 relative overflow-hidden">
                
                {/* Console Bar Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5E4DE] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-[#6D4AFF]">
                      SYNTHESIZED ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#17152F]/60">
                    INTERCONNECTS: {activeModuleIds.length * 2 - 1} ACTIVE
                  </span>
                </div>

                {/* Synthesized System Headline */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                    EMERGENT BUSINESS SYSTEM
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#17152F]">
                    {getSynthesizedSystemTitle()}
                  </h3>
                </div>

                {/* Docked Active Modules Grid */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#17152F]/50 uppercase">
                    CONNECTED SYSTEM NODES ({activeModuleIds.length})
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <AnimatePresence>
                      {activeModuleIds.map((id) => {
                        const mod = BUILDER_MODULES.find((m) => m.id === id);
                        if (!mod) return null;
                        const Icon = mod.icon;

                        return (
                          <motion.div
                            key={id}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="p-3 rounded-xl bg-white border border-[#EEEAFF] shadow-sm flex items-center gap-2"
                          >
                            <div className="w-6 h-6 rounded-lg bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-extrabold text-[#17152F] truncate">
                              {mod.shortName}
                            </span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Real-time System Telemetry Specs */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-white/80 border border-[#EEEAFF] text-center">
                    <div className="text-[9px] font-mono text-[#6D4AFF]">SYNC OVERHEAD</div>
                    <div className="text-sm font-extrabold text-[#17152F] mt-0.5">&lt; 15ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-[#EEEAFF] text-center">
                    <div className="text-[9px] font-mono text-[#6D4AFF]">MANUAL INTERVENTION</div>
                    <div className="text-sm font-extrabold text-[#17152F] mt-0.5">REDUCED 85%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 border border-[#EEEAFF] text-center">
                    <div className="text-[9px] font-mono text-[#6D4AFF]">ERROR RATE</div>
                    <div className="text-sm font-extrabold text-[#17152F] mt-0.5">0.00%</div>
                  </div>
                </div>

              </div>

              {/* Core Philosophy Callout */}
              <div className="p-4 rounded-2xl neu-flat flex items-center justify-between gap-4 border border-[#6D4AFF]/30 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#6D4AFF] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#17152F]">
                    AETHEL ENGINEERS THE COMBINATION YOUR BUSINESS NEEDS.
                  </div>
                </div>
                <a
                  href="#combinations"
                  className="shrink-0 text-xs font-mono font-bold text-[#6D4AFF] hover:underline"
                >
                  VIEW EXAMPLES →
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
