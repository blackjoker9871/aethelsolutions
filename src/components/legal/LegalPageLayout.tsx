"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Clock,
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Mail,
  Building2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export interface LegalSectionItem {
  id: string;
  num: string;
  title: string;
  content: React.ReactNode;
}

export interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSectionItem[];
  currentPath: string;
}

const LEGAL_NAV = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Refund & Cancellation", href: "/refund-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Grievance Redressal", href: "/grievance" },
];

export const LegalPageLayout: React.FC<LegalPageProps> = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  currentPath,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0]?.id || ""
  );

  return (
    <main id="main-content" className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* ✦ 1. HEADER BANNER ✦ */}
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                LEGAL & TRUST CENTER
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed font-medium">
              {subtitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#17152F]/50 pt-2">
              <Clock className="w-3.5 h-3.5" />
              <span>LAST UPDATED: {lastUpdated}</span>
              <span>•</span>
              <span className="text-[#6D4AFF] font-bold">
                AETHELSOLUTIONS PRIVATE LIMITED
              </span>
            </div>
          </div>

          {/* ✦ 2. POLICY NAV TRAY (QUICK SWITCHER) ✦ */}
          <div className="max-w-5xl mx-auto mb-12 p-3 rounded-2xl neu-inset overflow-x-auto flex items-center gap-1.5 border border-[#EEEAFF]">
            {LEGAL_NAV.map((item) => {
              const isCurrent = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all select-none ${
                    isCurrent
                      ? "bg-[#6D4AFF] text-white shadow-sm"
                      : "text-[#17152F]/70 hover:text-[#6D4AFF] hover:bg-white/60"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* ✦ 3. MAIN DUAL-COLUMN LAYOUT (TOC + CONTENT) ✦ */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Desktop Sticky Table of Contents (4 cols) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
              <div className="p-6 rounded-3xl neu-flat border border-[#EEEAFF] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF] pb-3 border-b border-[#EEEAFF]">
                  <FileText className="w-4 h-4" />
                  <span>TABLE OF CONTENTS</span>
                </div>

                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                  {sections.map((sec) => {
                    const isActive = activeSectionId === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSectionId(sec.id)}
                        className={`p-2.5 rounded-xl text-xs font-mono flex items-start gap-2 transition-all block ${
                          isActive
                            ? "bg-[#EEEAFF] text-[#6D4AFF] font-bold shadow-sm"
                            : "text-[#17152F]/70 hover:text-[#6D4AFF] hover:bg-white"
                        }`}
                      >
                        <span className="text-[10px] text-[#6D4AFF] shrink-0 font-bold">
                          {sec.num}
                        </span>
                        <span className="line-clamp-1">{sec.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-[#EEEAFF] text-[11px] font-mono text-[#17152F]/60 space-y-1">
                  <div>Entity: AETHELSOLUTIONS PVT LTD</div>
                  <div>Email: aethel.officialdesk@gmail.com</div>
                </div>
              </div>
            </aside>

            {/* Document Reading Body (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="p-6 sm:p-10 rounded-3xl neu-flat border border-[#EEEAFF] space-y-4 scroll-mt-28 select-text"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                    <span>SECTION {sec.num}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#17152F] tracking-tight">
                    {sec.title}
                  </h2>

                  <div className="text-xs sm:text-sm text-[#17152F]/80 leading-relaxed font-medium space-y-3 pt-2">
                    {sec.content}
                  </div>
                </section>
              ))}
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
};
