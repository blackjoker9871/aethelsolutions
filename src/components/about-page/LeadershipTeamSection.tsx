"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Code2, Sparkles, Shield, Cpu, Terminal } from "lucide-react";

interface TeamMember {
  num: string;
  name: string;
  role: string;
  focus: string;
  details: string;
  initials: string;
  icon: React.ElementType;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    num: "01",
    name: "RESHANTH",
    role: "COFOUNDER & DIRECTOR",
    focus: "Business Direction & Systems Architecture",
    details:
      "Leads business direction, company governance, and high-level systems thinking—architecting how engineering translates into operational leverage.",
    initials: "RE",
    icon: Shield,
  },
  {
    num: "02",
    name: "ANNIE",
    role: "FOUNDER",
    focus: "Founding Leadership & Organization",
    details:
      "Founder and core pillar of Aethel's leadership, guiding the strategic trajectory and operational foundations of the company.",
    initials: "AN",
    icon: Sparkles,
  },
  {
    num: "03",
    name: "VISHATH",
    role: "TECH LEAD",
    focus: "Technical Architecture & Core Systems",
    details:
      "Leads system architecture and core technical execution with an advanced computer applications (MCA) background, overseeing reliability and backend engineering.",
    initials: "VI",
    icon: Cpu,
  },
  {
    num: "04",
    name: "AATHISH",
    role: "FULL-STACK ENGINEER",
    focus: "Full-Stack Development & Product Interfaces",
    details:
      "Drives end-to-end full-stack engineering, interactive interface development, and system integration across client operations.",
    initials: "AA",
    icon: Code2,
  },
];

export const LeadershipTeamSection: React.FC = () => {
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
            <Users className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              THE PEOPLE BEHIND AETHEL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            SMALL TEAM.
            <br />
            <span className="text-[#6D4AFF]">BIG SYSTEMS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            We operate as an agile, highly focused engineering and systems unit working directly with business leadership.
          </motion.p>
        </div>

        {/* ✦ 4 TYPOGRAPHIC IDENTITY CARDS ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => {
            const Icon = member.icon;

            return (
              <motion.div
                key={member.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-3xl neu-flat border border-[#EEEAFF] flex flex-col justify-between space-y-6 hover:border-[#6D4AFF]/40 transition-all select-none"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Initials Monogram */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center font-mono font-extrabold text-sm shadow-sm border border-[#6D4AFF]/20">
                      {member.initials}
                    </div>
                    <span className="px-3 py-1 rounded-full neu-inset-sm text-[10px] font-mono font-bold text-[#6D4AFF]">
                      {member.num} // AETHEL CORE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#17152F] tracking-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#6D4AFF] mt-0.5 uppercase tracking-wide">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#17152F]/85">
                    {member.focus}
                  </p>

                  <p className="text-xs text-[#17152F]/70 leading-relaxed font-medium">
                    {member.details}
                  </p>

                </div>

                <div className="pt-3 border-t border-[#EEEAFF] flex items-center justify-between text-[10px] font-mono text-[#17152F]/60">
                  <span>DISCIPLINE: ENGINEERING & STRATEGY</span>
                  <span className="text-[#6D4AFF] font-bold">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
