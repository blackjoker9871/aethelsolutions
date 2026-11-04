"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  LayoutGrid,
  Mic,
  MessageSquare,
  ScanEye,
  ArrowRight,
  Cpu,
} from "lucide-react";
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
      className="relative w-full py-20 sm:py-28 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER & POSITIONING ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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
                  WHAT WE BUILD
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
              From autonomous AI agents to bespoke operational platforms, we engineer integrated software and automation systems tailored around your exact operations.
            </motion.p>
          </div>

          {/* Right Column: Clean Architecture Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col sm:items-end justify-end space-y-3"
          >
            <div className="neu-flat p-5 rounded-2xl space-y-2 w-full sm:max-w-md">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#6D4AFF] font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> ARCHITECTURAL STANDARD
                </span>
                <span className="text-emerald-600 font-bold">100% Bespoke</span>
              </div>
              <p className="text-xs text-[#17152F]/75 leading-relaxed">
                Zero generic templates. Deterministic workflows, real-time sync, and total operational ownership.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ✦ 6 CORE MODULE CARDS GRID ✦ */}
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

        {/* ✦ SIMPLE CLEAN LINK TO DEEP DIVE ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-button-light font-mono text-xs font-bold text-[#17152F] hover:text-[#6D4AFF] transition-all group"
          >
            <span>EXPLORE DEEP SYSTEMS ARCHITECTURE</span>
            <ArrowRight className="w-4 h-4 text-[#6D4AFF] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
