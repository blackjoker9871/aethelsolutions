"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  LayoutGrid,
  Mic,
  MessageSquare,
  ScanEye,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  ChevronRight,
  Cpu,
} from "lucide-react";
import { AethelSystemConsole } from "./AethelSystemConsole";
import { BuildModuleCard, BuildModuleData } from "./BuildModuleCard";

const MODULES_DATA: BuildModuleData[] = [
  {
    id: "ai-agents",
    num: "01",
    tag: "COGNITIVE WORKERS",
    title: "AI AGENTS",
    description:
      "Digital workers that understand complex tasks, make autonomous decisions and take action across your tools.",
    icon: Bot,
    examples: ["Sales Agent", "Support Agent", "Operations Agent"],
  },
  {
    id: "ai-automation",
    num: "02",
    tag: "INTELLIGENT FLOWS",
    title: "AI AUTOMATION",
    description:
      "Connect repetitive processes and let intelligent workflows run automatically with zero manual handoffs.",
    icon: Zap,
    examples: ["Lead Qualification", "Auto Follow-up", "CRM Sync", "Invoice Posting"],
  },
  {
    id: "custom-software",
    num: "03",
    tag: "BESPOKE PLATFORMS",
    title: "CUSTOM SOFTWARE",
    description:
      "Business software designed around your actual workflow, giving you total control with zero recurring SaaS bloat.",
    icon: LayoutGrid,
    examples: ["Management Systems", "Internal Tools", "Customer Portals"],
  },
  {
    id: "voice-ai",
    num: "04",
    tag: "VOICE INTERFACES",
    title: "VOICE AI",
    description:
      "AI-powered voice conversations that answer, qualify, schedule, and assist customers in real time with ultra-low latency.",
    icon: Mic,
    examples: ["AI Telecaller", "Appointment Booking", "Inbound Lead Qualification"],
  },
  {
    id: "whatsapp-ai",
    num: "05",
    tag: "CONVERSATIONAL CHANNELS",
    title: "WHATSAPP AI",
    description:
      "Turn everyday WhatsApp conversations into an intelligent, structured business channel integrated directly into your backend.",
    icon: MessageSquare,
    examples: ["Customer Support", "Sales Inquiries", "Instant Bookings", "Payment Links"],
  },
  {
    id: "computer-vision",
    num: "06",
    tag: "VISUAL INTELLIGENCE",
    title: "COMPUTER VISION",
    description:
      "Give your business the ability to understand images, extract document data with OCR, and perform automated visual inspections.",
    icon: ScanEye,
    examples: ["Image Recognition", "Document OCR", "Visual Quality Inspection"],
  },
];

export const WhatWeBuildSection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>("ai-agents");

  return (
    <section
      id="what-we-build"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER & POSITIONING ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[#6D4AFF]">
                <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  AETHEL SYSTEMS
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#17152F] leading-[1.02]">
                INTELLIGENCE,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  BUILT INTO YOUR BUSINESS.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#17152F]/75 leading-relaxed font-normal max-w-xl"
            >
              From AI agents to complete business software, we combine the technologies your business needs into one intelligent system.
            </motion.p>
          </div>

          {/* Right Column: Key Capability Highlights Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-6 neu-flat p-6 sm:p-7 rounded-3xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                <Cpu className="w-4 h-4" />
                <span>UNIFIED ARCHITECTURE METRIC</span>
              </div>
              <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[10px] text-emerald-600 font-bold">
                100% Bespoke
              </span>
            </div>
            <p className="text-sm text-[#17152F]/80 leading-relaxed">
              We don&apos;t force generic templates or off-the-shelf subscriptions. Every layer is custom-engineered to seamlessly wrap around your actual day-to-day operations.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EEEAFF] text-[11px] font-mono text-[#17152F]/70">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF]" /> Zero Vendor Lock-in
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Real-time Integration
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Enterprise Reliability
              </span>
            </div>
          </motion.div>

        </div>

        {/* ✦ CENTRAL HARDWARE CONTROL CONSOLE ✦ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-16"
        >
          <AethelSystemConsole
            activeModuleId={activeModuleId}
            onSelectModule={(id) => setActiveModuleId(id)}
            modules={MODULES_DATA}
          />
        </motion.div>

        {/* ✦ 6 MODULAR BUILD TECHNOLOGY COMPONENTS ✦ */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Subheading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EEEAFF] pb-5">
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase mb-1">
                SIX CORE CAPABILITY LAYERS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17152F]">
                Engineered Modules
              </h3>
            </div>
            <div className="text-xs font-mono text-[#17152F]/60">
              CLICK ANY MODULE TO ENGAGE CONSOLE
            </div>
          </div>

          {/* Grid of 6 Modules (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {MODULES_DATA.map((module, index) => (
              <BuildModuleCard
                key={module.id}
                module={module}
                isActive={activeModuleId === module.id}
                onSelect={() => setActiveModuleId(module.id)}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* ✦ BOTTOM SECTION STATEMENT ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-3xl neu-flat text-center max-w-4xl mx-auto space-y-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#17152F] tracking-tight leading-snug">
            &quot;Your business doesn&apos;t need another tool.
            <br />
            It needs the{" "}
            <span className="text-[#6D4AFF] underline decoration-[#6D4AFF]/40 underline-offset-6">
              right system
            </span>
            .&quot;
          </p>

          <p className="text-xs sm:text-sm font-mono text-[#17152F]/60 pt-1">
            INDIVIDUAL TECHNOLOGIES → CONNECTED INTELLIGENCE → ONE BUSINESS SYSTEM
          </p>
        </motion.div>

        {/* ✦ BOTTOM CTAS ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-violet rounded-full cursor-pointer shadow-[0_6px_24px_rgba(109,74,255,0.35)] w-full sm:w-auto"
          >
            <span>BUILD MY SYSTEM</span>
            <span className="text-[#EEEAFF] group-hover:text-white group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#what-we-build"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide neu-button-light rounded-full cursor-pointer w-full sm:w-auto text-[#17152F]"
          >
            <span>EXPLORE OUR CAPABILITIES</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
