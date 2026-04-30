"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Rocket, Search, Cpu, Globe } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Intelligence Gathering",
    subtitle: "PHASE_01",
    desc: "We analyze your infrastructure, identify bottlenecks, and map out a tailored global strategy.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code2,
    title: "Neural Construction",
    subtitle: "PHASE_02",
    desc: "Our engineers build your high-performance platform using cutting-edge frameworks like Next.js.",
    color: "from-accent/20 to-purple-500/20",
  },
  {
    icon: Rocket,
    title: "Global Deployment",
    subtitle: "PHASE_03",
    desc: "We deploy to the edge, monitor initial traffic, and optimize automation workflows.",
    color: "from-green-500/20 to-accent/20",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase mb-6"
          >
            <Cpu className="w-3.5 h-3.5" />
            Operational Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.05em] leading-[0.9]"
          >
            How we deliver <br />
            <span className="text-gray-500 text-3xl sm:text-5xl">extraordinary results.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45%] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent z-0">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent w-40"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 glass-effect rounded-2xl border border-white/10 flex items-center justify-center text-[10px] font-black text-accent/40 z-20 group-hover:text-accent group-hover:border-accent/30 transition-all">
                    0{index + 1}
                  </div>

                  <div className={`h-full glass-effect p-10 rounded-[2.5rem] border border-white/5 group-hover:border-accent/20 transition-all duration-500 bg-gradient-to-br ${step.color} bg-opacity-0 hover:bg-opacity-100 flex flex-col items-center text-center`}>
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                      <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark-bg transition-all duration-500 relative z-10 shadow-2xl">
                        <Icon className="h-10 w-10" />
                      </div>
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.4em] text-accent/40 mb-3 uppercase">{step.subtitle}</span>
                    <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                      {step.desc}
                    </p>
                    
                    {/* Decorative Bottom Bar */}
                    <div className="mt-8 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Global Node Decorative Element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          className="mt-32 flex flex-col items-center gap-4"
        >
          <Globe className="w-16 h-16 text-accent animate-spin-slow" />
          <span className="text-[8px] font-black tracking-[1em] uppercase text-accent">Active_Global_Deployment_Network</span>
        </motion.div>
      </div>
    </section>
  );
}
