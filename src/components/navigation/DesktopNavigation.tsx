"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, PRIMARY_CTA } from "./navigationConfig";
import { analytics } from "@/lib/analytics";

export const DesktopNavigation: React.FC<{
  scrolled: boolean;
}> = ({ scrolled }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8">
      
      {/* ✦ 1. BRAND MONOGRAM & NAME (LEFT) ✦ */}
      <Link
        href="/"
        onClick={() => analytics.trackNavigation("/", "navbar")}
        className="flex items-center gap-3 group select-none cursor-pointer rounded-xl p-1"
        aria-label="Aethel Solutions Home"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-sm tracking-tighter shadow-[0_4px_14px_rgba(109,74,255,0.35)] transition-transform duration-300 group-hover:scale-105 border border-white/40">
          Æ
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-[15px] text-[#17152F] group-hover:text-[#6D4AFF] transition-colors">
            Aethel
          </span>
          <span className="text-[10px] tracking-wider text-[#6D4AFF] font-mono font-medium uppercase">
            SYSTEMS LAB
          </span>
        </div>
      </Link>

      {/* ✦ 2. CENTER FLOATING NEOMORPHIC NAVIGATION TRAY ✦ */}
      <nav
        aria-label="Global Navigation"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "neu-flat shadow-[0_4px_16px_rgba(23,21,47,0.06)] border border-[#EEEAFF]"
            : "neu-inset border border-[#EEEAFF]/60"
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => analytics.trackNavigation(item.href, "navbar")}
              aria-current={isActive ? "page" : undefined}
              className={`relative px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-200 select-none ${
                isActive
                  ? "bg-[#EEEAFF] text-[#6D4AFF] shadow-sm border border-[#6D4AFF]/20"
                  : "text-[#17152F]/75 hover:text-[#6D4AFF] hover:bg-white/60"
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6D4AFF]" aria-hidden="true" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ✦ 3. PRIMARY CTA BUTTON (RIGHT) ✦ */}
      <div className="flex items-center gap-3">
        <Link
          href={PRIMARY_CTA.href}
          onClick={() => analytics.trackCTA(PRIMARY_CTA.label, "navbar", PRIMARY_CTA.href)}
          aria-current={pathname === "/contact" ? "page" : undefined}
          className={`group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider rounded-full transition-all duration-200 select-none cursor-pointer ${
            pathname === "/contact"
              ? "neu-button-violet text-white shadow-[0_4px_16px_rgba(109,74,255,0.4)] scale-105"
              : "neu-button-light text-[#17152F] hover:text-[#6D4AFF] hover:border-[#6D4AFF]/40"
          }`}
        >
          <span>{PRIMARY_CTA.label}</span>
          <ArrowUpRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              pathname === "/contact"
                ? "text-white"
                : "text-[#6D4AFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            }`}
            aria-hidden="true"
          />
        </Link>
      </div>

    </div>
  );
};
