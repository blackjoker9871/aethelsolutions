"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const AethelStandardSection: React.FC = () => {
  const standards = [
    { word: "USEFUL", desc: "Solves a measurable, real operational bottleneck." },
    { word: "PRECISE", desc: "Engineered with deterministic rigor and zero ambiguity." },
    { word: "CUSTOM", desc: "Built around your actual business hierarchy and flow." },
    { word: "SCALABLE", desc: "Accommodates exponential transaction growth with ease." },
    { word: "HUMAN", desc: "Intuitive, friction-free and empowering for operators." },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D4AFF]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                THE AETHEL STANDARD
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
            >
              "IF IT DOESN'T
              <br />
              SOLVE THE PROBLEM,
              <br />
              <span className="text-[#6D4AFF]">IT DOESN'T BELONG."</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-lg text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              We care less about adding technology and more about creating systems that make the business work better.
            </motion.p>
          </div>

          {/* ✦ LARGE RECESSED NEOMORPHIC PANEL ✦ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl sm:rounded-[36px] neu-inset border border-[#E5E4DE] space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {standards.map((st, i) => (
                <motion.div
                  key={st.word}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-[#EEEAFF] flex flex-col justify-between space-y-3 shadow-sm hover:border-[#6D4AFF]/50 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                    0{i + 1}
                  </span>
                  <div className="text-base sm:text-lg font-extrabold tracking-tight text-[#17152F]">
                    {st.word}
                  </div>
                  <p className="text-[11px] text-[#17152F]/70 leading-tight font-medium">
                    {st.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
