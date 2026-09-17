"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F6F2] text-[#17152F] antialiased min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center space-y-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F6F2] border-2 border-rose-500/20 shadow-[0_16px_40px_rgba(244,63,94,0.06)] space-y-6">
            <div className="text-6xl font-black font-mono tracking-tighter text-[#17152F]/20">
              500
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#17152F]">
              SYSTEM INTERRUPTED
            </h1>
            <p className="text-sm text-[#17152F]/70 max-w-sm mx-auto">
              Something went wrong on our side. Please try again.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => reset()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6D4AFF] text-white font-mono font-bold text-xs hover:bg-[#5B3CE6] transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>TRY AGAIN</span>
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#17152F] font-mono font-bold text-xs border border-[#EEEAFF] hover:bg-white/80 transition-all"
              >
                <Home className="w-4 h-4 text-[#6D4AFF]" />
                <span>RETURN TO AETHEL →</span>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
