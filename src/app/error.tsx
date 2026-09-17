"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, RefreshCw, Home, ArrowRight } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error on client without exposing internal details to UI
    if (process.env.NODE_ENV !== "production") {
      console.error("App boundary error caught:", error);
    }
  }, [error]);

  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#17152F] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="w-full flex-1 flex items-center justify-center pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-rose-600">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              500 // EXCEPTION
            </span>
          </div>

          {/* Error Console Card */}
          <div className="p-8 sm:p-12 rounded-3xl neu-flat border-2 border-rose-500/20 shadow-[0_16px_40px_rgba(244,63,94,0.06)] space-y-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-500/10 blur-[90px] rounded-full pointer-events-none" />

            {/* Error Tag */}
            <div className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-[#17152F]/20 select-none">
              500
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#17152F] leading-tight">
              SYSTEM INTERRUPTED
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-base text-[#17152F]/70 max-w-md mx-auto leading-relaxed font-medium">
              Something went wrong on our side.
              <br />
              Please try again.
            </p>

            {/* Status Indicator */}
            <div className="py-2.5 px-4 rounded-xl neu-inset inline-flex items-center gap-3 text-xs font-mono text-[#17152F]/60">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>DIAGNOSTIC STATUS: EXCEPTION_ISOLATED</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => reset()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#6D4AFF] text-white font-mono font-bold text-xs shadow-[0_4px_14px_rgba(109,74,255,0.35)] hover:bg-[#5B3CE6] active:scale-95 transition-all group cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span>TRY AGAIN</span>
              </button>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/80 text-[#17152F] font-mono font-bold text-xs border border-[#EEEAFF] hover:border-[#6D4AFF]/40 hover:bg-white active:scale-95 transition-all group"
              >
                <Home className="w-4 h-4 text-[#6D4AFF]" />
                <span>RETURN TO AETHEL →</span>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
