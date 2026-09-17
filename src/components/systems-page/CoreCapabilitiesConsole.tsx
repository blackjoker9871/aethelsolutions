"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Zap,
  Code2,
  PhoneCall,
  MessageSquare,
  GitFork,
  Eye,
  BarChart3,
  ArrowRight,
  Sparkles,
  Activity,
  Layers,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Search,
  Database,
  Terminal,
  Cpu,
  RefreshCw,
  Send,
  Volume2,
  Scan,
  TrendingUp,
  FileText,
} from "lucide-react";
import { TECH_MODULES, SystemTechModule } from "./SystemsHero";

export const CoreCapabilitiesConsole: React.FC = () => {
  const [selectedCapabilityId, setSelectedCapabilityId] =
    useState<string>("ai-agents");

  // Sub-states for specific capability interfaces
  const [activeAgentType, setActiveAgentType] = useState<
    "sales" | "support" | "ops" | "research"
  >("sales");
  const [workflowScenario, setWorkflowScenario] = useState<number>(0);
  const [softwareTab, setSoftwareTab] = useState<
    "dashboard" | "customers" | "ops" | "reports" | "rbac"
  >("dashboard");
  const [visionMode, setVisionMode] = useState<
    "document" | "inspection" | "ocr"
  >("document");
  const [biDomain, setBiDomain] = useState<
    "sales" | "ops" | "customers" | "finance"
  >("sales");

  const activeModule =
    TECH_MODULES.find((m) => m.id === selectedCapabilityId) ||
    TECH_MODULES[0];
  const ActiveIcon = activeModule.icon;

  return (
    <section
      id="capabilities"
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
            <Sliders className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              AETHEL CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            BUILDING BLOCKS
            <br />
            <span className="text-[#6D4AFF]">OF INTELLIGENT BUSINESS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Select a capability to examine its engineering mechanics. Each component operates as a standalone module or binds seamlessly into your overarching system.
          </motion.p>
        </div>

        {/* ✦ CAPABILITY SELECTOR BUTTON TRAY (8 MODULES) ✦ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-8">
          {TECH_MODULES.map((module) => {
            const isSelected = module.id === selectedCapabilityId;
            const Icon = module.icon;

            return (
              <button
                key={module.id}
                onClick={() => setSelectedCapabilityId(module.id)}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 select-none ${
                  isSelected
                    ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_6px_20px_rgba(109,74,255,0.25)] -translate-y-1"
                    : "neu-flat-interactive hover:border-[#6D4AFF]/40"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isSelected
                      ? "bg-[#6D4AFF] text-white"
                      : "neu-inset-sm text-[#6D4AFF]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                  {module.num}
                </div>
                <div className="text-[11px] font-extrabold text-[#17152F] line-clamp-1">
                  {module.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* ✦ EXPANDED CENTRAL CONSOLE FOR THE SELECTED CAPABILITY ✦ */}
        <div className="relative rounded-3xl p-6 sm:p-10 neu-flat border border-[#EEEAFF] overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCapabilityId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Header Bar of the Active Module */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(109,74,255,0.35)] shrink-0">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                        MODULE {activeModule.num}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#17152F]/40">
                        // ENGINE ACTIVE
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#17152F]">
                      {activeModule.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF]">
                    LATENCY &lt; 80ms
                  </span>
                  <span className="px-3 py-1 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#17152F]/70">
                    STATUS: ONLINE
                  </span>
                </div>
              </div>

              {/* ✦ DYNAMIC CONTENT DEPENDING ON ACTIVE MODULE ✦ */}

              {/* 01 — AI AGENTS */}
              {selectedCapabilityId === "ai-agents" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "DIGITAL WORKERS THAT TAKE ACTION."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        AI agents can understand complex instructions, reason across company data, make decisions according to your guardrails, and execute actions directly across your operational tools.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          SELECT AGENT ARCHETYPE:
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {(
                            [
                              { id: "sales", label: "SALES AGENT" },
                              { id: "support", label: "SUPPORT AGENT" },
                              { id: "ops", label: "OPERATIONS AGENT" },
                              { id: "research", label: "RESEARCH AGENT" },
                            ] as const
                          ).map((agent) => (
                            <button
                              key={agent.id}
                              onClick={() => setActiveAgentType(agent.id)}
                              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all text-left ${
                                activeAgentType === agent.id
                                  ? "bg-[#6D4AFF] text-white shadow-sm"
                                  : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                              }`}
                            >
                              {agent.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Agent Live Loop Visualizer: LISTENING → REASONING → ACTING → RESULT */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-5 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[#6D4AFF]">
                          AUTONOMOUS REASONING LOOP
                        </span>
                        <span className="text-[#17152F]/50">GUARDRAIL CHECK: PASSED</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { step: "01", name: "LISTENING", desc: "Ingesting intent & context" },
                          { step: "02", name: "REASONING", desc: "Evaluating company policy" },
                          { step: "03", name: "ACTING", desc: "Dispatching API call" },
                          { step: "04", name: "RESULT", desc: "Verification & CRM log" },
                        ].map((s, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-[#EEEAFF] space-y-1 shadow-sm"
                          >
                            <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                              {s.step} // {s.name}
                            </div>
                            <div className="text-[11px] text-[#17152F]/70">
                              {s.desc}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Agent Activity Terminal Mock */}
                      <div className="p-4 rounded-xl bg-[#17152F] text-[#EEEAFF] font-mono text-xs space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-[#8B6CFF] border-b border-white/10 pb-1">
                          <span>AGENT_CONSOLE // {activeAgentType.toUpperCase()}_v3</span>
                          <span className="text-emerald-400">STATUS: EXECUTING</span>
                        </div>
                        {activeAgentType === "sales" && (
                          <>
                            <div className="text-zinc-400">&gt; Ingested WhatsApp lead: "Need pricing for 500 enterprise seats"</div>
                            <div className="text-[#8B6CFF]">&gt; Reasoning: Queried tier-3 pricing matrix & CRM availability</div>
                            <div className="text-emerald-400">&gt; Action: Generated tailored quotation PDF & calendar slot link</div>
                            <div className="text-zinc-300">&gt; Result: Sent via WhatsApp & updated HubSpot deal stage to 'Proposal Delivered'</div>
                          </>
                        )}
                        {activeAgentType === "support" && (
                          <>
                            <div className="text-zinc-400">&gt; Ingested ticket #8941: "Can't access warehouse inventory logs"</div>
                            <div className="text-[#8B6CFF]">&gt; Reasoning: Checked user role permissions in Postgres DB</div>
                            <div className="text-emerald-400">&gt; Action: Granted temporary read token & refreshed API session</div>
                            <div className="text-zinc-300">&gt; Result: Resolved ticket in 4.2s without human escalation</div>
                          </>
                        )}
                        {activeAgentType === "ops" && (
                          <>
                            <div className="text-zinc-400">&gt; Trigger: SKU-904 stock level below safety buffer (12 units)</div>
                            <div className="text-[#8B6CFF]">&gt; Reasoning: Verified historical lead times & supplier credit limits</div>
                            <div className="text-emerald-400">&gt; Action: Drafted PO #4402 and dispatched to supplier ERP</div>
                            <div className="text-zinc-300">&gt; Result: Inventory restock scheduled for Monday 09:00 AM</div>
                          </>
                        )}
                        {activeAgentType === "research" && (
                          <>
                            <div className="text-zinc-400">&gt; Request: Analyze competitor pricing changes across 14 portals</div>
                            <div className="text-[#8B6CFF]">&gt; Reasoning: Scraped, normalized, and mapped SKU price variance</div>
                            <div className="text-emerald-400">&gt; Action: Compiled synthesized executive summary table</div>
                            <div className="text-zinc-300">&gt; Result: Delivered weekly intelligence report to executive Slack channel</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 02 — AI AUTOMATION */}
              {selectedCapabilityId === "ai-automation" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "INTELLIGENCE INSIDE THE WORKFLOW."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Instead of fragile rule-based scripts that break on unexpected inputs, Aethel embeds neural evaluation inside the workflow—enabling dynamic routing, contextual qualification, and adaptive actions.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          WORKFLOW EXAMPLES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Lead Qualification",
                            "Follow-up Engine",
                            "Data Processing",
                            "Urgent Notifications",
                            "Internal Operations",
                          ].map((example, idx) => (
                            <button
                              key={idx}
                              onClick={() => setWorkflowScenario(idx)}
                              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                                workflowScenario === idx
                                  ? "bg-[#6D4AFF] text-white"
                                  : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                              }`}
                            >
                              {example}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual: Trigger → AI → Decision → Action → Result */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-6 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[#6D4AFF]">
                          WORKFLOW STEP PIPELINE
                        </span>
                        <span className="text-[#17152F]/50">DETERMINISTIC & ADAPTIVE</span>
                      </div>

                      {/* Animated Flow Steps */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
                        {[
                          { step: "01", name: "TRIGGER", detail: "Form submission / Webhook" },
                          { step: "02", name: "AI EVAL", detail: "Context analysis" },
                          { step: "03", name: "DECISION", detail: "Branch routing" },
                          { step: "04", name: "ACTION", detail: "System mutation" },
                          { step: "05", name: "RESULT", detail: "Audit trail log" },
                        ].map((node, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-[#EEEAFF] text-center space-y-1 shadow-sm relative group"
                          >
                            <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                              {node.step}
                            </div>
                            <div className="text-xs font-extrabold text-[#17152F]">
                              {node.name}
                            </div>
                            <div className="text-[10px] text-[#17152F]/60">
                              {node.detail}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Live Workflow Status Log */}
                      <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-[#17152F]">LIVE EXECUTION PIPELINE</span>
                          <span className="text-[#6D4AFF] font-bold">100% SUCCESS RATE</span>
                        </div>
                        <div className="w-full bg-[#F1F0EA] rounded-full h-2 overflow-hidden relative">
                          <div className="h-full bg-[#6D4AFF] w-4/5 animate-pulse" />
                        </div>
                        <p className="text-xs text-[#17152F]/70">
                          Incoming unstructured documents are parsed in &lt;1.2s, categorized with 99.4% precision, and synced to accounting databases automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 03 — CUSTOM SOFTWARE */}
              {selectedCapabilityId === "custom-software" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "SOFTWARE BUILT AROUND YOUR WORKFLOW."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Off-the-shelf software forces your staff to adapt to generic constraints. Aethel designs bespoke internal operating software tailored exactly to your unique hierarchy, business logic, and operational tempo.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          SOFTWARE MODULES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(
                            [
                              { id: "dashboard", label: "Executive Dashboard" },
                              { id: "customers", label: "Customer Portal" },
                              { id: "ops", label: "Operations Hub" },
                              { id: "reports", label: "Real-time Reports" },
                              { id: "rbac", label: "RBAC & Security" },
                            ] as const
                          ).map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setSoftwareTab(tab.id)}
                              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                                softwareTab === tab.id
                                  ? "bg-[#6D4AFF] text-white"
                                  : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Miniature Engineered Internal Software Environment */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-4 border border-[#EEEAFF]">
                      {/* Window Frame Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DE] text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="ml-2 font-bold text-[#17152F]">
                            AethelOS // Enterprise Console
                          </span>
                        </div>
                        <span className="text-[#6D4AFF] font-bold">NODE: US-EAST-SECURE</span>
                      </div>

                      {/* Mock Interior View */}
                      <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] space-y-4">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-3 rounded-lg neu-inset-sm">
                            <div className="text-[10px] font-mono text-[#6D4AFF]">ACTIVE PIPELINES</div>
                            <div className="text-lg font-extrabold text-[#17152F]">142</div>
                          </div>
                          <div className="p-3 rounded-lg neu-inset-sm">
                            <div className="text-[10px] font-mono text-[#6D4AFF]">AVG RESPONSE</div>
                            <div className="text-lg font-extrabold text-[#17152F]">38ms</div>
                          </div>
                          <div className="p-3 rounded-lg neu-inset-sm">
                            <div className="text-[10px] font-mono text-[#6D4AFF]">DATA MUTATIONS</div>
                            <div className="text-lg font-extrabold text-[#17152F]">100% SYNC</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#F7F6F2] font-mono text-xs space-y-1.5">
                          <div className="text-[10px] font-bold text-[#6D4AFF]">ENTERPRISE ARCHITECTURE HIGHLIGHTS</div>
                          <div className="text-[#17152F]/80">✦ End-to-end type safety (TypeScript + Rust core)</div>
                          <div className="text-[#17152F]/80">✦ Granular Role-Based Access Control (RBAC) & SAML SSO</div>
                          <div className="text-[#17152F]/80">✦ Real-time WebSocket event streaming with zero polling lag</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 04 — VOICE AI */}
              {selectedCapabilityId === "voice-ai" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "CONVERSATIONS THAT KEEP MOVING."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        AI-powered telephony and voice agents that answer immediately, handle natural dialogue interruptions, qualify customer requirements, and write directly into your CRM.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          VOICE CAPABILITY SUITE:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
                          <div className="p-2.5 rounded-xl neu-inset text-[#17152F]">AI Telecaller</div>
                          <div className="p-2.5 rounded-xl neu-inset text-[#17152F]">Appointment Booking</div>
                          <div className="p-2.5 rounded-xl neu-inset text-[#17152F]">Lead Qualification</div>
                          <div className="p-2.5 rounded-xl neu-inset text-[#17152F]">Customer Support</div>
                        </div>
                      </div>
                    </div>

                    {/* Waveform Interface: INCOMING CALL → AI CONVERSATION → UNDERSTAND → QUALIFY → ACTION → CRM */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-5 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                          <Volume2 className="w-4 h-4 animate-pulse" />
                          <span>VOICE TELEMETRY STREAM</span>
                        </div>
                        <span className="text-emerald-600 font-bold">LATENCY: 420ms</span>
                      </div>

                      {/* Tactile Audio Waveform Simulation */}
                      <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] flex items-center justify-center gap-1.5 h-20">
                        {[40, 65, 30, 85, 95, 60, 45, 80, 100, 70, 50, 90, 65, 40, 75, 90, 55, 35, 70, 85, 40].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="w-1.5 rounded-full bg-gradient-to-t from-[#6D4AFF] to-[#8B6CFF] animate-pulse"
                          />
                        ))}
                      </div>

                      {/* Pipeline steps */}
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center">
                        {[
                          "INCOMING",
                          "CONVERSE",
                          "UNDERSTAND",
                          "QUALIFY",
                          "ACTION",
                          "CRM SYNC",
                        ].map((step, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded-lg bg-white border border-[#EEEAFF] text-[10px] font-mono font-bold text-[#17152F]"
                          >
                            <span className="text-[#6D4AFF] block text-[8px]">{idx + 1}</span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 05 — WHATSAPP AI */}
              {selectedCapabilityId === "whatsapp-ai" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "TURN CONVERSATIONS INTO OPERATIONS."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Transform WhatsApp from a passive chat inbox into an autonomous business command interface. Instant quotation, appointment confirmations, inventory inquiries, and automated re-engagement.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          DEPLOYMENT DOMAINS:
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                          <span className="px-3 py-1 rounded-full neu-inset">24/7 Customer Support</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Instant Sales Quotes</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Automated Bookings</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Payment Links</span>
                        </div>
                      </div>
                    </div>

                    {/* High-end Chat Ops Interface */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-4 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#E5E4DE]">
                        <div className="flex items-center gap-2 font-bold text-[#17152F]">
                          <MessageSquare className="w-4 h-4 text-[#6D4AFF]" />
                          <span>WHATSAPP OPS ENGINE</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#6D4AFF]">SYNCED TO DATABASE</span>
                      </div>

                      <div className="space-y-3">
                        {/* Customer message */}
                        <div className="max-w-[80%] p-3.5 rounded-2xl bg-white border border-[#EEEAFF] shadow-sm text-xs space-y-1">
                          <div className="text-[9px] font-mono text-zinc-400">CUSTOMER // +91 98402 ••••</div>
                          <div className="text-[#17152F] font-medium">
                            "Hi, can I reschedule my site consultation for Thursday 3 PM?"
                          </div>
                        </div>

                        {/* AI Action pill */}
                        <div className="flex items-center justify-center">
                          <span className="px-3 py-1 rounded-full bg-[#EEEAFF] text-[#6D4AFF] text-[10px] font-mono font-bold flex items-center gap-1.5">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            AI CALENDAR ENGINE RESCHEDULED SLOT IN CRM
                          </span>
                        </div>

                        {/* AI Response */}
                        <div className="max-w-[85%] ml-auto p-3.5 rounded-2xl bg-[#6D4AFF] text-white shadow-[0_4px_14px_rgba(109,74,255,0.25)] text-xs space-y-1">
                          <div className="text-[9px] font-mono text-white/70">AETHEL WHATSAPP ENGINE // AUTOMATED</div>
                          <div className="font-medium">
                            "Done! Your consultation is moved to Thursday at 3:00 PM. We've sent the updated calendar invite and briefing packet to your email."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 06 — WORKFLOW AUTOMATION */}
              {selectedCapabilityId === "workflow-automation" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "MAKE THE PROCESS RUN ITSELF."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Connect every tool, spreadsheet, database, and messenger your company uses into an unyielding, synchronized pipeline. Zero manual copy-pasting, zero dropped handoffs.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          CONNECTED SYSTEM CHANNELS:
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                          <span className="px-3 py-1 rounded-full neu-inset">HubSpot / Salesforce</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Email & Gmail API</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Postgres / Supabase</span>
                          <span className="px-3 py-1 rounded-full neu-inset">WhatsApp API</span>
                          <span className="px-3 py-1 rounded-full neu-inset">Internal ERP</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual: INPUT → RULE → ACTION → VERIFICATION → RESULT */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-5 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-[#6D4AFF]">
                          ORCHESTRATION PIPELINE
                        </span>
                        <span className="text-emerald-600 font-bold">SELF-HEALING ENABLED</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                        {[
                          { step: "01", name: "INPUT", sub: "Multi-Source Ingest" },
                          { step: "02", name: "RULE", sub: "Business Matrix" },
                          { step: "03", name: "ACTION", sub: "Parallel Execution" },
                          { step: "04", name: "VERIFY", sub: "Zero-Loss Check" },
                          { step: "05", name: "RESULT", sub: "Audit Logging" },
                        ].map((st, i) => (
                          <div key={i} className="p-3 rounded-xl bg-white border border-[#EEEAFF] space-y-1 shadow-sm">
                            <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">{st.step}</div>
                            <div className="text-xs font-extrabold text-[#17152F]">{st.name}</div>
                            <div className="text-[9px] text-[#17152F]/60">{st.sub}</div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] text-xs font-mono space-y-1 text-[#17152F]/80">
                        <div className="text-[#6D4AFF] font-bold text-[10px]">REAL-TIME SYNC LOG</div>
                        <div>✓ Ingested 18,400 daily SKU transactions without dropped frames</div>
                        <div>✓ Automated invoice validation against purchase orders</div>
                        <div>✓ Dispatched real-time dispatch alerts to field technicians</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 07 — COMPUTER VISION */}
              {selectedCapabilityId === "computer-vision" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "TEACH SYSTEMS TO SEE."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Deploy visual intelligence directly into physical operations, quality control, document OCR extraction, and real-time defect detection without manual scanning bottlenecks.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          VISION APPLICATIONS:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
                          <button
                            onClick={() => setVisionMode("document")}
                            className={`p-2.5 rounded-xl transition-all ${
                              visionMode === "document"
                                ? "bg-[#6D4AFF] text-white"
                                : "neu-inset text-[#17152F]"
                            }`}
                          >
                            Document Parsing
                          </button>
                          <button
                            onClick={() => setVisionMode("inspection")}
                            className={`p-2.5 rounded-xl transition-all ${
                              visionMode === "inspection"
                                ? "bg-[#6D4AFF] text-white"
                                : "neu-inset text-[#17152F]"
                            }`}
                          >
                            Quality Inspection
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Optical Scanning Interface */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-4 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#E5E4DE]">
                        <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                          <Scan className="w-4 h-4" />
                          <span>OPTICAL RECOGNITION MATRIX</span>
                        </div>
                        <span className="text-emerald-600 font-bold">CONFIDENCE: 99.82%</span>
                      </div>

                      {/* Visual Scanner HUD */}
                      <div className="p-6 rounded-xl bg-[#17152F] text-white relative overflow-hidden space-y-3">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#6D4AFF] animate-[shimmer_2s_infinite]" />
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#8B6CFF]">
                          <span>BOUNDING_BOX [X: 142, Y: 89, W: 610, H: 420]</span>
                          <span>DETECTION_FPS: 60</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1 text-xs font-mono">
                          <div className="text-emerald-400 font-bold">PARSED KEY-VALUES:</div>
                          <div className="text-zinc-300">Invoice ID: #INV-2026-8812</div>
                          <div className="text-zinc-300">Total Amount: $42,500.00 USD</div>
                          <div className="text-zinc-300">Tax Breakdown: Verified against IRS standard</div>
                        </div>

                        <div className="text-[10px] font-mono text-zinc-400">
                          PIPELINE: IMAGE → DETECTION → ANALYSIS → DECISION → ACTION
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 08 — BUSINESS INTELLIGENCE */}
              {selectedCapabilityId === "business-intelligence" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] leading-tight">
                        "TURN BUSINESS DATA INTO CLARITY."
                      </h3>
                      <p className="text-sm text-[#17152F]/75 leading-relaxed font-medium">
                        Synthesize live operational data across finance, sales, client telemetry, and production pipelines into decision-ready executive clarity.
                      </p>

                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-mono font-bold text-[#6D4AFF] uppercase">
                          OPERATIONAL DOMAINS:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(
                            [
                              { id: "sales", label: "Sales Velocity" },
                              { id: "ops", label: "Operations Load" },
                              { id: "customers", label: "Client Health" },
                              { id: "finance", label: "Cash Flow Runways" },
                            ] as const
                          ).map((d) => (
                            <button
                              key={d.id}
                              onClick={() => setBiDomain(d.id)}
                              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                                biDomain === d.id
                                  ? "bg-[#6D4AFF] text-white"
                                  : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                              }`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Operational Insight Console */}
                    <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-4 border border-[#EEEAFF]">
                      <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#E5E4DE]">
                        <span className="font-bold text-[#6D4AFF]">
                          TELEMETRY TO INSIGHT PIPELINE
                        </span>
                        <span className="text-[#17152F]/60">STREAMING ACTIVE</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
                        {[
                          { step: "01", name: "DATA SOURCES", sub: "CRM, ERP, DB" },
                          { step: "02", name: "PROCESSING", sub: "Normalization" },
                          { step: "03", name: "INSIGHT", sub: "Anomaly Detection" },
                          { step: "04", name: "DECISION", sub: "Executive Action" },
                        ].map((bi, i) => (
                          <div key={i} className="p-3 rounded-xl bg-white border border-[#EEEAFF] space-y-1 shadow-sm">
                            <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">{bi.step}</div>
                            <div className="text-xs font-extrabold text-[#17152F]">{bi.name}</div>
                            <div className="text-[9px] text-[#17152F]/60">{bi.sub}</div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-[#17152F]">
                          <span>EXECUTIVE ACTIONABLE SUMMARY</span>
                          <span className="text-[#6D4AFF]">PREDICTIVE ACCURACY: 98.4%</span>
                        </div>
                        <p className="text-xs text-[#17152F]/75 leading-relaxed">
                          Telemetry identifies an upcoming +28% surge in customer inquiries next week. System autonomously reallocates voice agent concurrency and pre-stages warehouse fulfillment buffers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
