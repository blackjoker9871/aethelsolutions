"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, GitFork, Cpu, ArrowRight } from "lucide-react";

interface StartStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const START_STEPS: StartStep[] = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "Learn how the business works, map dependencies, and audit operational bottlenecks.",
    icon: Compass,
  },
  {
    num: "02",
    title: "ARCHITECT",
    desc: "Design the right system around it—specifying data paths, state models, and AI loops.",
    icon: GitFork,
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Engineer and deploy the solution with custom software, automation, and ongoing evolution.",
    icon: Cpu,
  },
];

export const HowWeStartSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Compass className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              HOW WE START
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            WE DON'T START
            <br />
            <span className="text-[#6D4AFF]">WITH A QUOTE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            We start by understanding the business, the workflow and the problem. Then we determine what should actually be built.
          </motion.p>
        </div>

        {/* ✦ 3 TACTILE STEPS ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {START_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl neu-flat border border-[#EEEAFF] space-y-4 select-none hover:border-[#6D4AFF]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#6D4AFF]">
                      PHASE {step.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#17152F]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#17152F]/75 mt-1 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EEEAFF] text-[10px] font-mono text-[#17152F]/50">
                  ✦ AETHEL ENGINEERING METHOD
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
