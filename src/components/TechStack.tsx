"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Globe, Shield, Terminal, Database, LineChart, MessageSquare } from "lucide-react";

const tech = [
  { name: "Next.js 15", icon: Zap },
  { name: "React 19", icon: Cpu },
  { name: "Supabase", icon: Database },
  { name: "Tailwind CSS", icon: Shield },
  { name: "Framer Motion", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Cpu },
  { name: "Vercel Edge", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "Lucide UI", icon: Shield },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="mb-12 text-center">
        <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">Integrated_Infrastructure_Protocol</span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {tech.concat(tech).map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-lg font-black text-white/20 group-hover:text-white transition-colors duration-500 tracking-tighter">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
