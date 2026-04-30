"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Star, Shield, Cpu, Globe, Activity, Terminal } from "lucide-react";
import MagneticButton from "./MagneticButton";
import ContactChoiceModal from "./ContactChoiceModal";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth springs for parallax
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  useEffect(() => {
    setIsMounted(true);
    // Force scroll to top on reload ONLY if no hash is present
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const card1X = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const card1Y = useTransform(springY, [-0.5, 0.5], [-40, 40]);
  const card1Rotate = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const card2X = useTransform(springX, [-0.5, 0.5], [60, -60]);
  const card2Y = useTransform(springY, [-0.5, 0.5], [60, -60]);
  const card2Rotate = useTransform(springX, [-0.5, 0.5], [12, -12]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden pt-24 font-sans"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-accent/10 blur-[1px] z-10"
        />
      </div>

      {/* --- ENHANCED FLOATING ASSETS --- */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        
        {/* Card 1: Infrastructure Monitor (Top Left) */}
        <motion.div 
          style={{ x: card1X, y: card1Y, rotate: card1Rotate }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[15%] left-[5%] md:left-[8%] w-56 md:w-72 glass-effect rounded-[2.5rem] border border-white/10 p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-3xl hidden sm:block overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10" />
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
              <Activity className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-accent tracking-[0.2em] uppercase">Status: Optimal</span>
              <span className="text-[10px] font-mono text-white/40 leading-none">0.02ms</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-end gap-1 h-12">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [15, 40, 20, 35, 15] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-accent/40 to-accent rounded-sm"
                />
              ))}
            </div>
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Global_Uplink</span>
                <span className="text-[10px] font-mono text-[#4DFF88]">99.9%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-accent"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Neural Link (Bottom Right) */}
        <motion.div 
          style={{ x: card2X, y: card2Y, rotate: card2Rotate }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-[10%] right-[5%] md:right-[8%] w-64 md:w-80 glass-effect rounded-[3rem] border border-white/10 p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-3xl hidden md:block overflow-hidden group"
        >
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
          
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-500">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-black tracking-widest text-white uppercase">Neural_Log</h4>
                <p className="text-[8px] font-mono text-white/20">Aethel_OS_v4.0</p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
          </div>

          <div className="space-y-3 font-mono text-[8px] text-white/30 uppercase tracking-tighter">
            <motion.p animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-between">
              <span>Synchronizing_Nodes...</span>
              <span className="text-[#4DFF88]">OK</span>
            </motion.p>
            <p className="flex justify-between border-l border-white/10 pl-2">
              <span>Optimizing_Payloads...</span>
              <span className="text-[#4DFF88]">100%</span>
            </p>
            <motion.p animate={{ x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex justify-between border-l border-white/10 pl-2">
              <span>Establishing_Tunnel...</span>
              <span className="text-accent">SECURE</span>
            </motion.p>
            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-white/60">Ready for global deployment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md">
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
                Engineering Digital Excellence
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.06em] leading-[0.9] md:leading-[0.85] lg:leading-[0.8] max-w-5xl mx-auto"
          >
            A <span className="text-accent relative inline-block">Digital Agency<div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150 pointer-events-none" /></span> <br />
            Built for Performance.
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed tracking-tight px-4"
          >
            We don&apos;t just build websites. We engineer high-performance ecosystems that 
            <span className="text-white font-bold"> amplify your brand</span> and <span className="text-white font-bold">automate your growth</span>.
          </motion.p>

          {/* New Modern CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <MagneticButton>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center gap-4 bg-accent text-dark-bg font-black px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_50px_rgba(0,242,255,0.2)] hover:shadow-[0_0_80px_rgba(0,242,255,0.5)] active:scale-95"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://wa.me/919342557458"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 font-bold px-12 py-5 rounded-full transition-all duration-500 group"
              >
                Chat via WhatsApp
                <div className="w-2 h-2 rounded-full bg-[#25D366] group-hover:scale-150 transition-transform shadow-[0_0_10px_#25D366]" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Bottom Trust Labels */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-12 pt-16 opacity-30"
          >
            <span className="text-xs font-black tracking-[0.3em] uppercase italic">AETHEL.</span>
            <span className="text-xs font-black tracking-[0.3em] uppercase italic">SOLUTIONS.</span>
            <span className="text-xs font-black tracking-[0.3em] uppercase italic">AUTOMATE.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive HUD Overlay (Micro-text) */}
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-20 hidden lg:block font-mono text-[8px] text-accent space-y-1 uppercase tracking-widest">
        <p>Sys_Core: Optimized</p>
        <p>Latency: 0.04ms</p>
      </div>

      <ContactChoiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
