"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Zap,
  LayoutGrid,
  Mic,
  MessageSquare,
  ScanEye,
  Activity,
  Sliders,
  Radio,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Terminal,
} from "lucide-react";
import { BuildModuleData } from "./BuildModuleCard";

interface AethelSystemConsoleProps {
  activeModuleId: string;
  onSelectModule: (id: string) => void;
  modules: BuildModuleData[];
}

export const AethelSystemConsole: React.FC<AethelSystemConsoleProps> = ({
  activeModuleId,
  onSelectModule,
  modules,
}) => {
  const [consoleMode, setConsoleMode] = useState<"telemetry" | "live_feed">("telemetry");
  const [systemPower, setSystemPower] = useState(true);

  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <div className="w-full neu-core-panel rounded-3xl p-6 sm:p-8 select-none relative overflow-hidden transition-all duration-500">
      {/* Background Soft Violet Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 radial-violet-halo pointer-events-none opacity-60" />
      
      {/* ✦ 1. TOP HARDWARE CONTROL BAR ✦ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EEEAFF] mb-6">
        {/* Brand Monogram & System Identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl neu-flat flex items-center justify-center border border-[#6D4AFF]/20 relative">
            <span className="font-mono font-bold text-base text-[#6D4AFF]">Æ</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#17152F]">
                AETHEL INTELLIGENCE CORE
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full neu-inset-sm text-[#6D4AFF] font-bold">
                v4.2 OS
              </span>
            </div>
            <p className="text-[10px] font-mono text-[#17152F]/60">
              CENTRAL BUSINESS CONTROL CONSOLE
            </p>
          </div>
        </div>

        {/* Tactile Hardware Status & Power Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
          {/* Recessed Status LED */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full neu-inset-sm text-[10px] font-mono text-[#17152F]/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-emerald-600">ONLINE</span>
            <span className="text-zinc-300">|</span>
            <span className="text-zinc-500">99.99% SYSTEM LOAD OK</span>
          </div>

          {/* Physical Neomorphic Power Switch */}
          <button
            onClick={() => setSystemPower(!systemPower)}
            className={`px-3 py-1.5 rounded-xl font-mono text-[10px] font-bold transition-all flex items-center gap-1.5 ${
              systemPower
                ? "neu-inset text-[#6D4AFF]"
                : "neu-flat text-zinc-400"
            }`}
          >
            <Radio className={`w-3 h-3 ${systemPower ? "text-[#6D4AFF] animate-pulse" : "text-zinc-400"}`} />
            <span>{systemPower ? "RUNNING" : "STANDBY"}</span>
          </button>
        </div>
      </div>

      {/* ✦ 2. CENTRAL DYNAMIC DISPLAY SCREEN (REACTS TO SELECTED MODULE) ✦ */}
      <div className="neu-inset rounded-2xl p-5 sm:p-6 mb-6 relative overflow-hidden border border-[#EEEAFF]/60">
        
        {/* Screen Header */}
        <div className="flex items-center justify-between text-[11px] font-mono pb-3 border-b border-[#E2E1DA]/80 mb-4">
          <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>ACTIVE SUBSYSTEM: {activeModule.title}</span>
          </div>
          <span className="text-[10px] text-[#17152F]/60">
            LATENCY: <strong className="text-emerald-600 font-bold">14ms</strong>
          </span>
        </div>

        {/* 3D Hardware Engineering Workstation Visual */}
        <div className="relative rounded-2xl overflow-hidden mb-4 neu-flat p-1 border border-[#EEEAFF]">
          <Image
            src="/images/what-we-build.jpg"
            alt="Aethel Modular AI Software Engineering Console"
            width={800}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className="w-full h-36 sm:h-44 object-cover rounded-xl"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-mono font-bold text-[#6D4AFF] border border-[#EEEAFF] shadow-xs">
            HARDWARE INTERACTION HUB
          </div>
        </div>

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[140px] flex flex-col justify-between"
          >
            {/* Module 1: AI AGENTS */}
            {activeModule.id === "ai-agents" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">AGENT COGNITION MATRIX</span>
                  <span className="text-[#6D4AFF] font-semibold">3 WORKERS ACTIVE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] font-mono">
                  <div className="neu-flat p-2.5 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#17152F]">Sales Agent</div>
                      <div className="text-zinc-500 text-[9px]">Inbound Lead Triage</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[8px] font-bold">Listening</span>
                  </div>
                  <div className="neu-flat p-2.5 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#17152F]">Support Agent</div>
                      <div className="text-zinc-500 text-[9px]">Ticket Resolution</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-violet-100 text-[#6D4AFF] text-[8px] font-bold">Reasoning</span>
                  </div>
                  <div className="neu-flat p-2.5 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#17152F]">Ops Agent</div>
                      <div className="text-zinc-500 text-[9px]">Inventory Sync</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[8px] font-bold">Acting</span>
                  </div>
                </div>
              </div>
            )}

            {/* Module 2: AI AUTOMATION */}
            {activeModule.id === "ai-automation" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">DETERMINISTIC WORKFLOW PIPELINE</span>
                  <span className="text-emerald-600 font-semibold">27 PIPELINES SYNCED</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-[9px] font-mono">
                  <div className="neu-flat px-2.5 py-1.5 rounded-lg text-[#17152F] font-bold">01. Trigger</div>
                  <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
                  <div className="neu-flat px-2.5 py-1.5 rounded-lg text-[#6D4AFF] font-bold">02. AI Validation</div>
                  <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
                  <div className="neu-flat px-2.5 py-1.5 rounded-lg text-purple-700 font-bold">03. Decision Logic</div>
                  <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
                  <div className="neu-flat px-2.5 py-1.5 rounded-lg text-emerald-700 font-bold">04. Action Executed</div>
                  <ArrowRight className="w-3 h-3 text-[#6D4AFF]" />
                  <div className="neu-flat px-2.5 py-1.5 rounded-lg text-blue-700 font-bold">05. CRM Sync</div>
                </div>
              </div>
            )}

            {/* Module 3: CUSTOM SOFTWARE */}
            {activeModule.id === "custom-software" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">BESPOKE ENTERPRISE SOFTWARE SUITE</span>
                  <span className="text-[#6D4AFF] font-semibold">ZERO LICENSING LOCK-IN</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                  <div className="neu-flat p-2 rounded-xl text-center">
                    <div className="text-[#6D4AFF] font-bold">Ops Portal</div>
                    <div className="text-[9px] text-zinc-500">Live Inventory & ERP</div>
                  </div>
                  <div className="neu-flat p-2 rounded-xl text-center">
                    <div className="text-[#6D4AFF] font-bold">Client Hub</div>
                    <div className="text-[9px] text-zinc-500">Self-serve Invoicing</div>
                  </div>
                  <div className="neu-flat p-2 rounded-xl text-center">
                    <div className="text-[#6D4AFF] font-bold">Executive HUD</div>
                    <div className="text-[9px] text-zinc-500">Real-time Metrics</div>
                  </div>
                </div>
              </div>
            )}

            {/* Module 4: VOICE AI */}
            {activeModule.id === "voice-ai" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">VOICE AI CONVERSATIONAL STREAM</span>
                  <span className="text-emerald-600 font-semibold">ULTRA-LOW LATENCY (320ms)</span>
                </div>
                <div className="neu-flat p-3 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg neu-inset-sm text-[#6D4AFF] flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-[#17152F]">Incoming Call: +91 98401 • Enterprise Inquiry</div>
                      <div className="text-[9px] font-mono text-zinc-500">Natural multi-turn qualification in progress...</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-6">
                    {[40, 75, 30, 90, 60, 100, 45, 80, 50, 70].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#6D4AFF] rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Module 5: WHATSAPP AI */}
            {activeModule.id === "whatsapp-ai" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">WHATSAPP BUSINESS AGENT SUITE</span>
                  <span className="text-emerald-600 font-semibold">OFFICIAL META API</span>
                </div>
                <div className="neu-flat p-2.5 rounded-xl space-y-1.5 text-[10px] font-mono">
                  <div className="flex items-center justify-between text-zinc-500 text-[9px]">
                    <span>Client: &quot;Can I get pricing for the enterprise tier?&quot;</span>
                    <span>12:40 PM</span>
                  </div>
                  <div className="neu-inset-sm p-2 rounded-lg text-[#17152F] flex items-center justify-between">
                    <span className="text-[#6D4AFF] font-bold">Æ Agent: Instant PDF Quote & CRM Contact Card Generated</span>
                    <span className="text-emerald-600 font-bold">0.6s</span>
                  </div>
                </div>
              </div>
            )}

            {/* Module 6: COMPUTER VISION */}
            {activeModule.id === "computer-vision" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#17152F]">COMPUTER VISION & OCR PIPELINE</span>
                  <span className="text-[#6D4AFF] font-semibold">99.8% PRECISION</span>
                </div>
                <div className="neu-flat p-2.5 rounded-xl flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg neu-inset-sm text-[#6D4AFF] flex items-center justify-center">
                      <ScanEye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#17152F]">Invoice_Scan_#412.pdf</div>
                      <div className="text-[9px] text-zinc-500">Extracted: Vendor, Line items, Tax ID, $18,450</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Validated & Posted
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✦ 3. TACTILE HARDWARE DIALS & TELEMETRY METERS ✦ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        
        {/* Dial 1: Active Agents */}
        <div className="neu-flat p-3 rounded-2xl flex flex-col justify-between">
          <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
            ACTIVE AGENTS
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#17152F]">
              03
            </span>
            <span className="text-[9px] font-mono text-emerald-600 font-semibold">● DEPLOYED</span>
          </div>
        </div>

        {/* Dial 2: Automations */}
        <div className="neu-flat p-3 rounded-2xl flex flex-col justify-between">
          <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
            AUTOMATIONS
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#17152F]">
              27
            </span>
            <span className="text-[9px] font-mono text-[#6D4AFF] font-semibold">ACTIVE</span>
          </div>
        </div>

        {/* Dial 3: Daily Processes */}
        <div className="neu-flat p-3 rounded-2xl flex flex-col justify-between">
          <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
            PROCESSES
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#17152F]">
              18
            </span>
            <span className="text-[9px] font-mono text-purple-600 font-semibold">ENGINEERED</span>
          </div>
        </div>

        {/* Dial 4: Data Flows */}
        <div className="neu-flat p-3 rounded-2xl flex flex-col justify-between">
          <div className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
            DATA FLOWS
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#6D4AFF]">
              CONNECTED
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

      </div>

      {/* Module Selector Pills for Quick Console Control */}
      <div className="mt-5 pt-4 border-t border-[#EEEAFF] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
        <span className="text-zinc-500 font-semibold">SELECT SYSTEM MODULE:</span>
        <div className="flex flex-wrap gap-1.5">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelectModule(m.id)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                activeModuleId === m.id
                  ? "bg-[#6D4AFF] text-white shadow-xs"
                  : "neu-flat-sm text-[#17152F]/80 hover:text-[#6D4AFF]"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
