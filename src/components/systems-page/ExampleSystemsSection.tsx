"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ArrowRight,
  Bot,
  MessageSquare,
  PhoneCall,
  Database,
  Zap,
  Code2,
  GitFork,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Workflow,
} from "lucide-react";

interface ExampleSystem {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  components: {
    name: string;
    icon: React.ElementType;
  }[];
  workflow: string[];
  operationalOutcome: string;
}

const EXAMPLE_SYSTEMS: ExampleSystem[] = [
  {
    id: "system-01",
    num: "SYSTEM 01",
    title: "AI SALES SYSTEM",
    headline: "Zero-Decay Autonomous Inbound Pipeline",
    description:
      "Combines real-time conversational channels with reasoning AI agents to turn inbound inquiries into booked, qualified sales meetings in under 60 seconds.",
    components: [
      { name: "AI AGENT", icon: Bot },
      { name: "WHATSAPP AI", icon: MessageSquare },
      { name: "VOICE AI", icon: PhoneCall },
      { name: "CRM INTEGRATION", icon: Database },
      { name: "AUTOMATION ENGINE", icon: Zap },
    ],
    workflow: [
      "LEAD ARRIVES",
      "CONVERSATION INGEST",
      "QUALIFICATION",
      "DYNAMIC FOLLOW-UP",
      "CLOSED SALE / BOOKED",
    ],
    operationalOutcome:
      "Zero dropped leads during off-hours, 4x faster response times, and fully synchronized CRM deal pipelines.",
  },
  {
    id: "system-02",
    num: "SYSTEM 02",
    title: "OPERATIONS SYSTEM",
    headline: "Autonomous Internal Execution Hub",
    description:
      "Bespoke software with stateful event triggers and AI decisioning that orchestrates inter-departmental requests, inventory validation, and supplier management.",
    components: [
      { name: "CUSTOM SOFTWARE", icon: Code2 },
      { name: "WORKFLOW AUTOMATION", icon: GitFork },
      { name: "DATA TELEMETRY", icon: BarChart3 },
      { name: "AI AGENT", icon: Bot },
    ],
    workflow: [
      "REQUEST INGEST",
      "PROCESS EVALUATION",
      "DECISION LOGIC",
      "SYSTEM ACTION",
      "EXECUTIVE REPORT",
    ],
    operationalOutcome:
      "Eliminates 80%+ of repetitive internal email handoffs and enforces deterministic compliance across all workflows.",
  },
  {
    id: "system-03",
    num: "SYSTEM 03",
    title: "INTELLIGENT SERVICE SYSTEM",
    headline: "Multi-Channel Autonomous Support Matrix",
    description:
      "Integrates telephone voice agents and WhatsApp support into a single live operations console, resolving complex customer tickets without human fatigue.",
    components: [
      { name: "VOICE AI", icon: PhoneCall },
      { name: "WHATSAPP AI", icon: MessageSquare },
      { name: "CUSTOM SOFTWARE", icon: Code2 },
      { name: "AUTOMATION", icon: Zap },
    ],
    workflow: [
      "CUSTOMER REACHES OUT",
      "ENQUIRY PARSING",
      "AI RESOLUTION",
      "SERVICE DISPATCH",
      "FEEDBACK & FOLLOW-UP",
    ],
    operationalOutcome:
      "Instant 24/7 resolution for 85%+ of inbound tickets, seamless human escalation for sensitive edge cases.",
  },
];

export const ExampleSystemsSection: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState<string>("system-01");

  return (
    <section
      id="combinations"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden"
    >
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
              SYSTEM COMBINATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            INDIVIDUAL TOOLS
            <br />
            <span className="text-[#6D4AFF]">
              BECOME MORE POWERFUL TOGETHER.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Explore three illustrative architectures showing how separate components connect into an end-to-end operational powerhouse.
          </motion.p>
        </div>

        {/* ✦ 3 INTERACTIVE SYSTEM CARDS ✦ */}
        <div className="space-y-8">
          {EXAMPLE_SYSTEMS.map((system, idx) => {
            const isSelected = system.id === activeSystemId;

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveSystemId(system.id)}
                className={`p-6 sm:p-10 rounded-3xl neu-flat transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#6D4AFF] shadow-[0_12px_36px_rgba(109,74,255,0.18)]"
                    : "border-[#EEEAFF] hover:border-[#6D4AFF]/40"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Specs & Component Badges (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full neu-inset-sm text-[10px] font-mono font-bold text-[#6D4AFF]">
                        {system.num}
                      </span>
                      <span className="text-[10px] font-mono text-[#17152F]/50">
                        ARCHITECTURE BLUEPRINT
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F]">
                      {system.title}
                    </h3>
                    
                    <p className="text-xs font-mono font-bold text-[#6D4AFF]">
                      {system.headline}
                    </p>

                    <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                      {system.description}
                    </p>

                    {/* Component Formula Stack */}
                    <div className="pt-2 space-y-2">
                      <div className="text-[10px] font-mono font-bold text-[#17152F]/60 uppercase">
                        SYNTHESIZED STACK:
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {system.components.map((comp, cIdx) => {
                          const CompIcon = comp.icon;
                          return (
                            <div
                              key={cIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl neu-inset text-xs font-mono font-bold text-[#17152F]"
                            >
                              <CompIcon className="w-3.5 h-3.5 text-[#6D4AFF]" />
                              <span>{comp.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: Step-by-Step Connected Workflow (7 cols) */}
                  <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-5 border border-[#EEEAFF]">
                    <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#E5E4DE]">
                      <span className="font-bold text-[#6D4AFF]">
                        SEQUENTIAL EXECUTION PATHWAY
                      </span>
                      <span className="text-emerald-600 font-bold">100% AUTOMATED</span>
                    </div>

                    {/* Step Flow Nodes */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                      {system.workflow.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-white border border-[#EEEAFF] text-center space-y-1 shadow-sm"
                        >
                          <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                            STEP 0{sIdx + 1}
                          </div>
                          <div className="text-xs font-extrabold text-[#17152F] leading-tight">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Operational Outcome */}
                    <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] space-y-1">
                      <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                        OPERATIONAL IMPACT
                      </div>
                      <p className="text-xs text-[#17152F]/80 leading-relaxed font-medium">
                        {system.operationalOutcome}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer / Bespoke Note */}
        <div className="mt-8 text-center text-xs font-mono text-[#17152F]/60">
          ✦ Note: These architectures illustrate common configurations. Every Aethel system is engineered bespoke around your company's actual operational hierarchy.
        </div>

      </div>
    </section>
  );
};
