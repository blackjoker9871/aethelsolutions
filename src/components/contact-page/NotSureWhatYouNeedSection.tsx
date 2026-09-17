"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";

export const NotSureWhatYouNeedSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl neu-inset border border-[#E5E4DE] text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#6D4AFF] text-[10px] font-mono font-bold shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>NO TECHNICAL SPECIFICATION REQUIRED</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight">
              NOT SURE WHAT YOU NEED?
            </h3>
            <p className="text-sm sm:text-base text-[#17152F]/75 max-w-xl mx-auto leading-relaxed font-medium">
              That's fine. You don't need a technical specification to start a conversation.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#intake-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full neu-button-violet text-xs font-mono font-bold"
            >
              <span>TALK TO AETHEL →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
