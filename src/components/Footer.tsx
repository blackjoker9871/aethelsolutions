"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Mail,
  Globe,
  Radio,
  Layers,
  Cpu,
  Bot,
  Zap,
  Workflow,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { analytics } from "@/lib/analytics";

export const Footer: React.FC = () => {
  // Mobile accordion state for navigation link groups
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const exploreLinks = [
    { name: "HOME", href: "/" },
    { name: "SYSTEMS", href: "/systems" },
    { name: "INDUSTRIES", href: "/industries" },
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
  ];

  const buildLinks = [
    { name: "START A PROJECT", href: "/contact" },
    { name: "AI SYSTEMS", href: "/systems#capabilities" },
    { name: "AI AUTOMATION", href: "/systems#capabilities" },
    { name: "CUSTOM SOFTWARE", href: "/systems#capabilities" },
    { name: "WORKFLOW AUTOMATION", href: "/systems#capabilities" },
  ];

  const companyLinks = [
    { name: "ABOUT AETHEL", href: "/about" },
    { name: "OUR METHOD", href: "/#method" },
    { name: "OUR WORK", href: "/work" },
    { name: "CONTACT", href: "/contact" },
    { name: "GRIEVANCE & SUPPORT", href: "/grievance" },
  ];

  return (
    <footer className="relative w-full bg-[#F7F6F2] text-[#17152F] overflow-hidden pt-20 sm:pt-28 pb-12 border-t border-[#EEEAFF]/80 bg-tech-grid select-none">
      
      {/* Subtle Violet Illumination Behind Footer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] radial-violet-glow pointer-events-none -z-10 opacity-75" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. LARGE FINAL CTA SECTION ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-18 neu-flat border-2 border-[#6D4AFF]/20 shadow-[0_16px_48px_rgba(109,74,255,0.12)] text-center space-y-8 mb-20 sm:mb-28 overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EEEAFF]/40 via-transparent to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
            <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              READY TO BUILD?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#17152F] leading-[1.05] max-w-4xl mx-auto">
            YOUR BUSINESS.
            <br />
            YOUR SYSTEM.
            <br />
            <span className="text-[#6D4AFF]">THE NEXT ORDER.</span>
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-xl font-medium text-[#17152F]/75 max-w-xl mx-auto leading-relaxed">
            Tell us what your business needs to do better.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              onClick={() => analytics.trackCTA("START A PROJECT", "footer_cta_banner", "/contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full neu-button-violet text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,74,255,0.4)] hover:scale-105 transition-all"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/systems"
              onClick={() => analytics.trackCTA("EXPLORE OUR SYSTEMS", "footer_cta_banner", "/systems")}
              className="w-full sm:w-auto px-8 py-4 rounded-full neu-button-light text-xs font-mono font-bold tracking-wider text-[#17152F] flex items-center justify-center gap-2 hover:text-[#6D4AFF] transition-all"
            >
              <Cpu className="w-4 h-4 text-[#6D4AFF]" />
              <span>EXPLORE OUR SYSTEMS →</span>
            </Link>
          </div>
        </motion.div>

        {/* ✦ 2. MAIN FOOTER (IDENTITY + 4 COLUMNS) ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[#EEEAFF]">
          
          {/* Left Column: Aethel Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-extrabold text-base tracking-tighter shadow-[0_4px_14px_rgba(109,74,255,0.35)] transition-transform group-hover:scale-105 border border-white/40">
                Æ
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg text-[#17152F]">
                  AETHEL
                </span>
                <span className="text-[10px] tracking-wider text-[#6D4AFF] font-mono font-medium uppercase">
                  AETHELSOLUTIONS PRIVATE LIMITED
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#17152F]/70 leading-relaxed font-mono font-medium max-w-sm">
              AI computing.
              <br />
              AI automation.
              <br />
              Business systems engineered around the way you work.
            </p>

            <div className="pt-2 text-xs font-mono font-extrabold text-[#6D4AFF] tracking-widest uppercase">
              THE NEXT ORDER.
            </div>
          </div>

          {/* Right Columns: Desktop 4 Navigation Groups (8 Cols) */}
          <div className="hidden md:grid md:grid-cols-4 lg:col-span-8 gap-8">
            
            {/* Column 1: EXPLORE */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
                EXPLORE
              </div>
              <ul className="space-y-2.5 text-xs font-mono font-semibold">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#17152F]/75 hover:text-[#6D4AFF] transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#6D4AFF]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: BUILD */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
                BUILD
              </div>
              <ul className="space-y-2.5 text-xs font-mono font-semibold">
                {buildLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#17152F]/75 hover:text-[#6D4AFF] transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#6D4AFF]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
                COMPANY
              </div>
              <ul className="space-y-2.5 text-xs font-mono font-semibold">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#17152F]/75 hover:text-[#6D4AFF] transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#6D4AFF]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-[#6D4AFF] tracking-wider uppercase">
                CONNECT
              </div>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <div className="text-[10px] text-[#17152F]/50 uppercase font-bold">
                    EMAIL
                  </div>
                  <a
                    href="mailto:aethel.officialdesk@gmail.com"
                    onClick={() => analytics.trackContactMethod("email", "footer_connect")}
                    className="text-[#17152F] hover:text-[#6D4AFF] font-bold transition-colors break-all"
                  >
                    aethel.officialdesk@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-[10px] text-[#17152F]/50 uppercase font-bold">
                    WEBSITE
                  </div>
                  <a
                    href="https://aethelsolution.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.trackContactMethod("website", "footer_connect")}
                    className="text-[#17152F] hover:text-[#6D4AFF] font-bold transition-colors"
                  >
                    aethelsolution.in
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Accordion Groups (Below Tablet) */}
          <div className="md:hidden space-y-3">
            
            {/* Accordion 1: EXPLORE */}
            <div className="rounded-2xl neu-flat border border-[#EEEAFF] overflow-hidden">
              <button
                onClick={() => toggleSection("explore")}
                className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold text-[#17152F]"
              >
                <span>EXPLORE</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6D4AFF] transition-transform ${
                    openSection === "explore" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "explore" && (
                <div className="px-4 pb-4 space-y-2 border-t border-[#EEEAFF] pt-3 text-xs font-mono">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[#17152F]/80 hover:text-[#6D4AFF] py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 2: BUILD */}
            <div className="rounded-2xl neu-flat border border-[#EEEAFF] overflow-hidden">
              <button
                onClick={() => toggleSection("build")}
                className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold text-[#17152F]"
              >
                <span>BUILD</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6D4AFF] transition-transform ${
                    openSection === "build" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "build" && (
                <div className="px-4 pb-4 space-y-2 border-t border-[#EEEAFF] pt-3 text-xs font-mono">
                  {buildLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[#17152F]/80 hover:text-[#6D4AFF] py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 3: COMPANY */}
            <div className="rounded-2xl neu-flat border border-[#EEEAFF] overflow-hidden">
              <button
                onClick={() => toggleSection("company")}
                className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold text-[#17152F]"
              >
                <span>COMPANY</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6D4AFF] transition-transform ${
                    openSection === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "company" && (
                <div className="px-4 pb-4 space-y-2 border-t border-[#EEEAFF] pt-3 text-xs font-mono">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-[#17152F]/80 hover:text-[#6D4AFF] py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 4: CONNECT */}
            <div className="rounded-2xl neu-flat border border-[#EEEAFF] overflow-hidden">
              <button
                onClick={() => toggleSection("connect")}
                className="w-full p-4 flex items-center justify-between text-xs font-mono font-bold text-[#17152F]"
              >
                <span>CONNECT</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6D4AFF] transition-transform ${
                    openSection === "connect" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "connect" && (
                <div className="px-4 pb-4 space-y-3 border-t border-[#EEEAFF] pt-3 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-[#17152F]/50 uppercase font-bold">
                      EMAIL
                    </div>
                    <a
                      href="mailto:aethel.officialdesk@gmail.com"
                      className="text-[#17152F] hover:text-[#6D4AFF] font-bold break-all"
                    >
                      aethel.officialdesk@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#17152F]/50 uppercase font-bold">
                      WEBSITE
                    </div>
                    <a
                      href="https://aethelsolution.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#17152F] hover:text-[#6D4AFF] font-bold"
                    >
                      aethelsolution.in
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* ✦ 3. MINIATURIZED VISUAL SYSTEM STATUS INDICATOR ✦ */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EEEAFF] text-xs font-mono">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-extrabold text-[#17152F]">AETHEL SYSTEM</span>
            <span className="text-emerald-700 font-bold">● ONLINE</span>
          </div>

          {/* Miniature 4 connected nodes */}
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#6D4AFF]">
            <span className="px-2.5 py-1 rounded-lg neu-inset-sm">AI</span>
            <span className="text-[#17152F]/30">—</span>
            <span className="px-2.5 py-1 rounded-lg neu-inset-sm">AUTOMATION</span>
            <span className="text-[#17152F]/30">—</span>
            <span className="px-2.5 py-1 rounded-lg neu-inset-sm">SOFTWARE</span>
            <span className="text-[#17152F]/30">—</span>
            <span className="px-2.5 py-1 rounded-lg neu-inset-sm">SYSTEMS</span>
          </div>

        </div>

        {/* ✦ 4. FINAL THIN DIVIDER & LEGAL (COPYRIGHT / PRIVACY / TERMS) ✦ */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#17152F]/60">
          <div>
            © 2026 Aethel Solutions. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-bold">
            <Link
              href="/privacy"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              PRIVACY
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              TERMS
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              REFUND POLICY
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              DISCLAIMER
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              COOKIES
            </Link>
            <Link
              href="/grievance"
              className="hover:text-[#6D4AFF] transition-colors"
            >
              GRIEVANCE
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
