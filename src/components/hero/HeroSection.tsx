"use client";

import React from "react";
import { motion } from "framer-motion";
import { AethelIntelligenceVisual } from "./AethelIntelligenceVisual";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[1000px] w-full flex flex-col justify-between pt-20 sm:pt-24 pb-6 overflow-hidden bg-tech-grid bg-[#F7F6F2]">
      {/* Background Soft Violet Radial Halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] radial-violet-halo pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 z-20">
            
            {/* Small Eyebrow Badge - White & Violet Neomorphic Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-flat-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#6D4AFF] uppercase">
                  AETHEL SOLUTIONS
                </span>
              </div>
            </motion.div>

            {/* Main Editorial Headline in Deep Indigo & Aethel Violet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1.5"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#17152F] leading-[1.02]">
                YOUR BUSINESS.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  RE-ENGINEERED.
                </span>
              </h1>
              
              {/* Alternative Supporting Line */}
              <p className="text-base sm:text-lg font-semibold text-[#17152F] pt-1 tracking-tight">
                Custom AI systems built around the way your business actually works.
              </p>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#17152F]/75 leading-relaxed max-w-xl font-normal"
            >
              Aethel understands your processes, identifies what can be automated, and engineers intelligent systems that reduce manual work, accelerate operations and give your team more room to focus on growth.
            </motion.p>

            {/* CTAs in Tactile White & Violet Styling */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              {/* Primary CTA - Aethel Violet Tactile Button */}
              <a
                href="#build"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide neu-button-violet rounded-full cursor-pointer shadow-[0_4px_16px_rgba(109,74,255,0.35)]"
              >
                <span>BUILD MY SYSTEM</span>
                <span className="text-[#EEEAFF] group-hover:text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Secondary CTA - Soft White Neomorphic Button */}
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#17152F] neu-button-light rounded-full cursor-pointer"
              >
                <span>SEE HOW AETHEL WORKS</span>
              </a>
            </motion.div>

            {/* Small Credibility Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#17152F]/60 uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] inline-block" />
                <span>AI • AUTOMATION • SOFTWARE • BUSINESS SYSTEMS</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Central Intelligence Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full flex justify-center items-center relative"
          >
            <AethelIntelligenceVisual />
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Indicators */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-[11px] font-mono text-[#17152F]/50 pt-4 border-t border-[#EEEAFF]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
          <span className="text-[#17152F] font-semibold">BESPOKE ENTERPRISE ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>HIGH-THROUGHPUT AUTOMATION</span>
          <span>AUTONOMOUS AGENTS</span>
          <span>DETERMINISTIC WORKFLOWS</span>
        </div>
      </div>
    </section>
  );
};
