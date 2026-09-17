"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Clock, Lock, Sparkles, ArrowUpRight } from "lucide-react";

interface ArchiveEntry {
  id: string;
  code: string;
  category: string;
  title: string;
  status: string;
  disclosure: string;
}

const ARCHIVE_ENTRIES: ArchiveEntry[] = [
  {
    id: "arc-1",
    code: "ARC-04",
    category: "MANUFACTURING TELEMETRY",
    title: "Industrial Line Telemetry & QA Inspection",
    status: "COMING TO THE ARCHIVE",
    disclosure: "Case study documentation undergoing client non-disclosure review.",
  },
  {
    id: "arc-2",
    code: "ARC-05",
    category: "LOGISTICS & DISPATCH",
    title: "Autonomous Fleet Routing & Dynamic Manifest Sync",
    status: "COMING TO THE ARCHIVE",
    disclosure: "Architecture diagrams and telemetry benchmarks in preparation.",
  },
  {
    id: "arc-3",
    code: "ARC-06",
    category: "LEGAL & COMPLIANCE",
    title: "Deterministic Contract Synthesis & Matter Workflow",
    status: "COMING TO THE ARCHIVE",
    disclosure: "Client verification milestone in progress.",
  },
];

export const ProjectArchiveSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              PROJECT ARCHIVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            MORE SYSTEMS.
            <br />
            <span className="text-[#6D4AFF]">MORE PROBLEMS TO SOLVE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            We only publish case studies that have been thoroughly documented and verified with our partners. Additional engineering records are added as deployments stabilize.
          </motion.p>
        </div>

        {/* ✦ ARCHIVE LIST CARDS ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ARCHIVE_ENTRIES.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl neu-inset border border-[#E5E4DE] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#6D4AFF]">{entry.code}</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/60 text-[#17152F]/60 text-[10px]">
                    <Clock className="w-3 h-3" />
                    <span>QUEUED</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono font-bold text-[#17152F]/50 uppercase">
                    {entry.category}
                  </div>
                  <h3 className="text-base font-extrabold text-[#17152F] mt-1">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-[#17152F]/70 mt-2 font-medium leading-relaxed">
                    {entry.disclosure}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E4DE] text-[10px] font-mono font-bold text-[#6D4AFF]">
                {entry.status}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
