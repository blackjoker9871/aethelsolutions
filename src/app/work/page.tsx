"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import ContactChoiceModal from "@/components/ContactChoiceModal";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-accent/30">
      <Navbar />
      
      {/* Cinematic Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-accent transition-colors uppercase tracking-widest mb-4"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Command Center
            </Link>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">Proven Results</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Verified <br />
              <span className="text-gray-500">Intelligence.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Explore the technical ecosystems we've engineered for high-growth brands globally. 
              From healthcare automation to high-performance e-commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Portfolio Section */}
      <Portfolio />

      {/* Ready to Start CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass-effect p-16 rounded-[4rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to build your own success story?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">Join the ranks of high-performance brands moving the world forward with Aethel Solutions.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-4 bg-accent text-dark-bg font-black px-12 py-5 rounded-full hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] transition-all active:scale-95"
            >
              Initialize Your Project
            </button>
          </motion.div>
        </div>
      </section>

      <ContactChoiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </main>
  );
}
