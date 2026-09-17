"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Database,
  Workflow,
  Bot,
  Server,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { SystemNodeCard } from "./SystemNodeCard";

export const AethelIntelligenceVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOrganized, setIsOrganized] = useState(true);
  const [activeTab, setActiveTab] = useState<"flow" | "metrics" | "agents">("flow");

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const coreRotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const coreRotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[720px] xl:max-w-[780px] mx-auto min-h-[580px] sm:min-h-[640px] flex items-center justify-center select-none perspective-1000 py-6"
    >
      {/* Background Soft Violet Glow */}
      <div
        className={`absolute inset-0 radial-violet-glow pointer-events-none -z-10 blur-3xl transition-opacity duration-700 ${
          isOrganized ? "opacity-90" : "opacity-30"
        }`}
      />
      
      {/* State Switcher Bar */}
      <div className="absolute -top-3 sm:top-0 left-1/2 -translate-x-1/2 z-40 flex items-center p-1.5 rounded-full neu-inset bg-white/95 shadow-md">
        <button
          onClick={() => setIsOrganized(false)}
          className={`px-4 py-1.5 text-[11px] font-mono rounded-full transition-all duration-300 flex items-center gap-1.5 ${
            !isOrganized
              ? "bg-[#1E1B4B] text-white font-bold shadow-[0_2px_10px_rgba(30,27,75,0.35)]"
              : "text-zinc-500 hover:text-[#7C3AED]"
          }`}
        >
          {!isOrganized && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
          Disconnected Tasks
        </button>
        <button
          onClick={() => setIsOrganized(true)}
          className={`px-4 py-1.5 text-[11px] font-mono rounded-full flex items-center gap-1.5 transition-all duration-300 ${
            isOrganized
              ? "bg-[#7C3AED] text-white font-bold shadow-[0_2px_12px_rgba(124,58,237,0.4)]"
              : "text-zinc-500 hover:text-[#7C3AED]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
          Aethel OS Architecture
        </button>
      </div>

      {/* Dynamic Animated Vector Connection Beams in Organized State */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-all duration-700 hidden sm:block"
        style={{
          opacity: isOrganized ? 1 : 0,
          transform: isOrganized ? "scale(1)" : "scale(0.85)",
        }}
      >
        <defs>
          <linearGradient id="violetBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {isOrganized && (
          <>
            {/* Top-Left WhatsApp to Core */}
            <path
              d="M 180 125 C 270 145, 270 250, 330 290"
              fill="none"
              stroke="url(#violetBeamGradient)"
              strokeWidth="2.5"
              className="animate-beam-flow"
            />
            {/* Top-Right Spreadsheets to Core */}
            <path
              d="M 590 125 C 490 145, 470 250, 410 290"
              fill="none"
              stroke="url(#violetBeamGradient)"
              strokeWidth="2.5"
              className="animate-beam-flow"
            />
            {/* Bottom-Left Invoices to Core */}
            <path
              d="M 180 505 C 270 485, 270 370, 330 340"
              fill="none"
              stroke="url(#violetBeamGradient)"
              strokeWidth="2.5"
              className="animate-beam-flow"
            />
            {/* Bottom-Right Tasks to Core */}
            <path
              d="M 590 505 C 490 485, 470 370, 410 340"
              fill="none"
              stroke="url(#violetBeamGradient)"
              strokeWidth="2.5"
              className="animate-beam-flow"
            />
          </>
        )}
      </svg>

      {/* ✦ FLOATING BUSINESS NODES ✦ */}

      {/* 1. WhatsApp Customer Flow */}
      <motion.div
        animate={
          isOrganized
            ? {
                left: "1%",
                top: "5%",
                rotate: 0,
                scale: 1,
                y: [0, -3, 0],
                x: 0,
              }
            : {
                left: "-10%",
                top: "-6%",
                rotate: [-20, -12, -24, -20],
                scale: 0.95,
                y: [0, -22, 12, 0],
                x: [0, 8, -6, 0],
              }
        }
        transition={
          isOrganized
            ? {
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              }
            : {
                rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              }
        }
        className="absolute z-20 w-[215px] sm:w-[230px] hidden sm:block"
      >
        <SystemNodeCard type="whatsapp" isOrganized={isOrganized} />
      </motion.div>

      {/* 2. Operations & Spreadsheets */}
      <motion.div
        animate={
          isOrganized
            ? {
                right: "1%",
                top: "5%",
                rotate: 0,
                scale: 1,
                y: [0, 3, 0],
                x: 0,
              }
            : {
                right: "-10%",
                top: "-4%",
                rotate: [24, 15, 30, 24],
                scale: 0.95,
                y: [0, 20, -15, 0],
                x: [0, -10, 8, 0],
              }
        }
        transition={
          isOrganized
            ? {
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              }
            : {
                rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }
        }
        className="absolute z-20 w-[210px] sm:w-[225px] hidden sm:block"
      >
        <SystemNodeCard type="spreadsheet" isOrganized={isOrganized} />
      </motion.div>

      {/* 3. Invoices & Documents */}
      <motion.div
        animate={
          isOrganized
            ? {
                left: "1%",
                bottom: "5%",
                rotate: 0,
                scale: 1,
                y: [0, -3, 0],
                x: 0,
              }
            : {
                left: "-12%",
                bottom: "-6%",
                rotate: [18, 26, 10, 18],
                scale: 0.95,
                y: [0, -18, 16, 0],
                x: [0, -8, 12, 0],
              }
        }
        transition={
          isOrganized
            ? {
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }
            : {
                rotate: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 7.5, ease: "easeInOut" },
              }
        }
        className="absolute z-20 w-[215px] sm:w-[230px] hidden sm:block"
      >
        <SystemNodeCard type="invoice" isOrganized={isOrganized} />
      </motion.div>

      {/* 4. Automated Tasks & Queues */}
      <motion.div
        animate={
          isOrganized
            ? {
                right: "1%",
                bottom: "5%",
                rotate: 0,
                scale: 1,
                y: [0, 3, 0],
                x: 0,
              }
            : {
                right: "-12%",
                bottom: "-5%",
                rotate: [-24, -14, -30, -24],
                scale: 0.95,
                y: [0, 16, -20, 0],
                x: [0, 10, -10, 0],
              }
        }
        transition={
          isOrganized
            ? {
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
              }
            : {
                rotate: { repeat: Infinity, duration: 7.2, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 6.2, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 8.5, ease: "easeInOut" },
              }
        }
        className="absolute z-20 w-[200px] sm:w-[215px] hidden sm:block"
      >
        <SystemNodeCard type="tasks" isOrganized={isOrganized} />
      </motion.div>

      {/* 5. Phone Logs (Wild floating when disconnected) */}
      <motion.div
        animate={
          isOrganized
            ? {
                opacity: 0,
                scale: 0.6,
                top: "20%",
                left: "40%",
                pointerEvents: "none",
              }
            : {
                opacity: 1,
                scale: 1,
                top: "40%",
                left: "-18%",
                rotate: [15, 25, 8, 15],
                y: [0, -25, 15, 0],
                x: [0, -12, 10, 0],
                pointerEvents: "auto",
              }
        }
        transition={
          isOrganized
            ? { duration: 0.5 }
            : {
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
              }
        }
        className="absolute z-30 w-[185px] hidden lg:block"
      >
        <SystemNodeCard type="phone" />
      </motion.div>

      {/* 6. Team Notifications (Wild floating when disconnected) */}
      <motion.div
        animate={
          isOrganized
            ? {
                opacity: 0,
                scale: 0.6,
                top: "20%",
                right: "40%",
                pointerEvents: "none",
              }
            : {
                opacity: 1,
                scale: 1,
                top: "40%",
                right: "-18%",
                rotate: [-18, -28, -10, -18],
                y: [0, 22, -18, 0],
                x: [0, 14, -8, 0],
                pointerEvents: "auto",
              }
        }
        transition={
          isOrganized
            ? { duration: 0.5 }
            : {
                rotate: { repeat: Infinity, duration: 6.8, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 5.8, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 7.2, ease: "easeInOut" },
              }
        }
        className="absolute z-30 w-[190px] hidden lg:block"
      >
        <SystemNodeCard type="notifications" />
      </motion.div>

      {/* ✦ CENTRAL AETHEL INTELLIGENCE CORE HUD ✦ */}
      <motion.div
        style={{ rotateX: coreRotateX, rotateY: coreRotateY }}
        animate={{
          scale: isOrganized ? 1 : 0.92,
          boxShadow: isOrganized
            ? "16px 16px 36px #DEE4F2, -16px -16px 36px #FFFFFF"
            : "8px 8px 20px #E1E6F2, -8px -8px 20px #FFFFFF",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[390px] neu-core-panel rounded-3xl p-5 sm:p-6"
      >
        {/* Core Header */}
        <div className="flex items-center justify-between border-b border-violet-100 pb-3.5 mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className={`relative flex items-center justify-center w-8 h-8 rounded-xl text-white font-mono text-xs shadow-md border border-white/20 transition-all duration-500 ${
                isOrganized
                  ? "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_4px_12px_rgba(124,58,237,0.35)]"
                  : "bg-amber-600 shadow-[0_4px_12px_rgba(217,119,6,0.35)]"
              }`}
            >
              {isOrganized ? (
                <Cpu className="w-4 h-4 text-emerald-300" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-white" />
              )}
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1E1B4B] tracking-tight flex items-center gap-1.5">
                AETHEL INTELLIGENCE
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    isOrganized ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                  }`}
                />
              </div>
              <div className="text-[9px] font-mono text-violet-700 uppercase tracking-wider">
                {isOrganized ? "Autonomous Neural Business Hub" : "Manual Disconnected Flow"}
              </div>
            </div>
          </div>
          <span
            className={`text-[9px] font-mono px-2.5 py-1 rounded-full neu-inset font-bold transition-colors ${
              isOrganized ? "text-emerald-700" : "text-amber-700"
            }`}
          >
            {isOrganized ? "Active v3.4" : "Scattered Ops"}
          </span>
        </div>

        {/* 3D Hardware Intelligence Core Render */}
        <div className="relative rounded-2xl overflow-hidden mb-3.5 neu-inset p-1.5 border border-[#EEEAFF]/80">
          <Image
            src="/images/hero-core.jpg"
            alt="Aethel Business Intelligence System Core"
            width={600}
            height={200}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
            className="w-full h-28 sm:h-32 object-cover rounded-xl transition-all duration-500 hover:scale-102"
          />
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-mono font-bold text-[#6D4AFF] border border-[#EEEAFF] shadow-xs">
            3D SYSTEM ENGINE
          </div>
        </div>

        {/* Live Pipeline Flow Tabs */}
        <div className="grid grid-cols-3 gap-1 p-1 neu-inset rounded-xl mb-3.5 font-mono text-[10px]">
          <button
            onClick={() => setActiveTab("flow")}
            className={`py-1.5 rounded-lg text-center transition-all ${
              activeTab === "flow"
                ? "bg-[#7C3AED] text-white font-semibold shadow-[0_2px_6px_rgba(124,58,237,0.3)]"
                : "text-zinc-500 hover:text-[#7C3AED]"
            }`}
          >
            Flow Matrix
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`py-1.5 rounded-lg text-center transition-all ${
              activeTab === "metrics"
                ? "bg-[#7C3AED] text-white font-semibold shadow-[0_2px_6px_rgba(124,58,237,0.3)]"
                : "text-zinc-500 hover:text-[#7C3AED]"
            }`}
          >
            Live Metrics
          </button>
          <button
            onClick={() => setActiveTab("agents")}
            className={`py-1.5 rounded-lg text-center transition-all ${
              activeTab === "agents"
                ? "bg-[#7C3AED] text-white font-semibold shadow-[0_2px_6px_rgba(124,58,237,0.3)]"
                : "text-zinc-500 hover:text-[#7C3AED]"
            }`}
          >
            Custom Agents
          </button>
        </div>

        {/* Tab 1: 5-Stage Transformation Architecture */}
        {activeTab === "flow" && (
          <div className="space-y-3 py-1">
            <div className="text-[9px] font-mono text-violet-700 uppercase tracking-wider flex items-center justify-between">
              <span>Business Pipeline Route</span>
              <span className={`font-bold ${isOrganized ? "text-emerald-600" : "text-amber-600"}`}>
                {isOrganized ? "Zero Friction" : "High Overhead"}
              </span>
            </div>
            
            {/* Linear Pipeline Nodes */}
            <div className="flex items-center justify-between gap-1 text-[10px] font-mono neu-inset p-3 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-lg neu-flat-sm flex items-center justify-center text-[#1E1B4B] mb-1">
                  <Database className="w-3.5 h-3.5" />
                </span>
                <span className="text-[8px] text-zinc-500 font-medium">Customer</span>
              </div>
              <ArrowRight
                className={`w-3 h-3 shrink-0 transition-colors ${
                  isOrganized ? "text-[#7C3AED]" : "text-zinc-300"
                }`}
              />
              <div className="flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white flex items-center justify-center mb-1 shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
                  <Bot className="w-3.5 h-3.5" />
                </span>
                <span className="text-[8px] font-bold text-[#1E1B4B]">Aethel AI</span>
              </div>
              <ArrowRight
                className={`w-3 h-3 shrink-0 transition-colors ${
                  isOrganized ? "text-[#7C3AED]" : "text-zinc-300"
                }`}
              />
              <div className="flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-lg neu-flat-sm flex items-center justify-center text-[#1E1B4B] mb-1">
                  <Workflow className="w-3.5 h-3.5" />
                </span>
                <span className="text-[8px] text-zinc-500 font-medium">Workflow</span>
              </div>
              <ArrowRight
                className={`w-3 h-3 shrink-0 transition-colors ${
                  isOrganized ? "text-[#7C3AED]" : "text-zinc-300"
                }`}
              />
              <div className="flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-lg neu-flat-sm flex items-center justify-center text-[#1E1B4B] mb-1">
                  <Server className="w-3.5 h-3.5" />
                </span>
                <span className="text-[8px] text-zinc-500 font-medium">Team</span>
              </div>
              <ArrowRight
                className={`w-3 h-3 shrink-0 transition-colors ${
                  isOrganized ? "text-[#7C3AED]" : "text-zinc-300"
                }`}
              />
              <div className="flex flex-col items-center text-center">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1 neu-flat-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <span className="text-[8px] font-bold text-emerald-700">Growth</span>
              </div>
            </div>

            {/* Telemetry Status */}
            <div className="neu-inset rounded-xl p-3 font-mono text-[9px] space-y-1.5">
              <div className="flex justify-between items-center text-[#1E1B4B]">
                <span className="flex items-center gap-1.5 text-zinc-600">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isOrganized ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  Manual Work Eliminated:
                </span>
                <span className="font-bold text-[#1E1B4B]">
                  {isOrganized ? "84.2%" : "0% (Manual Bottlenecks)"}
                </span>
              </div>
              <div className="flex justify-between items-center text-zinc-500">
                <span>Mean Cycle Time:</span>
                <span className="text-[#1E1B4B] font-semibold">
                  {isOrganized ? "4.2 hours → 18 seconds" : "4.2 hours (Delayed)"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Metrics */}
        {activeTab === "metrics" && (
          <div className="space-y-2.5 py-1">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl neu-inset">
                <div className="text-[9px] font-mono text-zinc-500">Processing Throughput</div>
                <div className="text-sm font-bold text-[#1E1B4B] font-mono">
                  {isOrganized ? "14,280 ops/min" : "120 manual/day"}
                </div>
                <div className="text-[8px] text-emerald-600 font-mono mt-0.5">
                  {isOrganized ? "↑ 420% efficiency" : "Human Bottleneck"}
                </div>
              </div>
              <div className="p-3 rounded-xl neu-inset">
                <div className="text-[9px] font-mono text-zinc-500">Deterministic Accuracy</div>
                <div className="text-sm font-bold text-[#1E1B4B] font-mono">
                  {isOrganized ? "99.85%" : "82.4% Error-Prone"}
                </div>
                <div className="text-[8px] text-violet-600 font-mono mt-0.5">
                  {isOrganized ? "Fault-tolerant" : "Human Data Entry"}
                </div>
              </div>
            </div>
            <div className="p-2.5 neu-inset rounded-xl text-[9px] font-mono text-zinc-600 flex justify-between">
              <span>Human Hours Saved:</span>
              <span className="font-bold text-emerald-600">
                {isOrganized ? "1,420 hrs / month" : "0 hrs (Fully Manual)"}
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Custom Agents */}
        {activeTab === "agents" && (
          <div className="space-y-2 py-1 text-[9px] font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
              <span className="text-[#1E1B4B] font-semibold">Ops Orchestrator Agent</span>
              <span className={isOrganized ? "text-emerald-600 font-bold" : "text-zinc-400"}>
                {isOrganized ? "Running" : "Offline"}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
              <span className="text-[#1E1B4B] font-semibold">Finance & Invoicing Engine</span>
              <span className={isOrganized ? "text-emerald-600 font-bold" : "text-zinc-400"}>
                {isOrganized ? "Running" : "Offline"}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl neu-inset">
              <span className="text-[#1E1B4B] font-semibold">CRM Triage & WhatsApp Bot</span>
              <span className={isOrganized ? "text-emerald-600 font-bold" : "text-zinc-400"}>
                {isOrganized ? "Running" : "Offline"}
              </span>
            </div>
          </div>
        )}

        {/* Footer Technical Bar */}
        <div className="mt-3.5 pt-3 border-t border-violet-100 flex items-center justify-between text-[9px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-violet-700 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            {isOrganized ? "Bespoke Architecture" : "Disconnected Tasks"}
          </span>
          <span className="text-zinc-400 font-mono">
            {isOrganized ? "LATENCY: 14MS" : "HIGH LATENCY"}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
