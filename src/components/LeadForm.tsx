"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Sparkles } from "lucide-react";
import TerminalForm from "./TerminalForm";

export default function LeadForm() {
  return (
    <section id="contact" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Context & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] text-accent border border-accent/20 bg-accent/5 uppercase"
              >
                <Sparkles className="w-3 h-3" />
                Ready to Initialize?
              </motion.div>
              <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.05em] leading-[0.9]">
                Initiate your <br />
                <span className="text-gray-500">Global Launch.</span>
              </h2>
              <p className="max-w-md text-xl text-gray-400 font-light leading-relaxed">
                Connect with our core engineering team to deploy your next high-performance system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-2xl border border-white/5 group hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-dark-bg transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm mb-1 tracking-tight">SECURE_CHANNEL</h3>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider font-mono">End-to-end encrypted briefing sessions.</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-white/5 group hover:border-accent/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-dark-bg transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm mb-1 tracking-tight">DATA_PRIVACY</h3>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider font-mono">Zero-knowledge infrastructure protocols.</p>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-crosshair">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Team Member" />
                   </div>
                 ))}
               </div>
               <div className="text-[10px] uppercase font-mono tracking-widest text-accent font-bold">
                 Engineers Online: <span className="animate-pulse">04</span>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Engagement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-3xl opacity-20" />
            <TerminalForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
