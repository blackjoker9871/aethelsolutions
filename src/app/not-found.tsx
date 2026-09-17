"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, AlertCircle, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="w-full flex-1 flex items-center justify-center pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
            <AlertCircle className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              404 // NOT FOUND
            </span>
          </div>

          {/* Error Visual / Neomorphic Console Card */}
          <div className="p-8 sm:p-12 rounded-3xl neu-flat border-2 border-[#6D4AFF]/20 shadow-[0_16px_40px_rgba(109,74,255,0.08)] space-y-6 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 radial-violet-glow opacity-40 pointer-events-none" />

            {/* Error Code Tag */}
            <div className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-[#17152F]/20 select-none">
              404
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#17152F] leading-tight">
              PAGE NOT FOUND
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-base text-[#17152F]/70 max-w-md mx-auto leading-relaxed font-medium">
              The requested system does not exist.
            </p>

            {/* System Diagnostic Status Bar */}
            <div className="py-2.5 px-4 rounded-xl neu-inset inline-flex items-center gap-3 text-xs font-mono text-[#17152F]/60">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>ROUTING EXCEPTION: RESOURCE_UNRESOLVED</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#6D4AFF] text-white font-mono font-bold text-xs shadow-[0_4px_14px_rgba(109,74,255,0.35)] hover:bg-[#5B3CE6] active:scale-95 transition-all group"
              >
                <Home className="w-4 h-4" />
                <span>RETURN TO AETHEL →</span>
              </Link>

              <Link
                href="/systems"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/80 text-[#17152F] font-mono font-bold text-xs border border-[#EEEAFF] hover:border-[#6D4AFF]/40 hover:bg-white active:scale-95 transition-all group"
              >
                <Compass className="w-4 h-4 text-[#6D4AFF]" />
                <span>EXPLORE SYSTEMS</span>
                <ArrowRight className="w-4 h-4 text-[#6D4AFF] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Quick Helpful Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-semibold text-[#17152F]/60">
            <Link href="/industries" className="hover:text-[#6D4AFF] transition-colors">
              INDUSTRIES
            </Link>
            <span className="text-[#17152F]/20">•</span>
            <Link href="/work" className="hover:text-[#6D4AFF] transition-colors">
              WORK
            </Link>
            <span className="text-[#17152F]/20">•</span>
            <Link href="/about" className="hover:text-[#6D4AFF] transition-colors">
              ABOUT
            </Link>
            <span className="text-[#17152F]/20">•</span>
            <Link href="/contact" className="hover:text-[#6D4AFF] transition-colors">
              START A PROJECT
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
