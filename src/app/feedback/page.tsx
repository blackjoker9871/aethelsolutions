"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle, ShieldCheck, User, Briefcase, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FeedbackPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          stars: rating,
        }),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-accent/30 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black tracking-widest uppercase">Return_to_Archive</span>
        </Link>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect p-16 rounded-[3rem] border border-[#4DFF88]/20 text-center"
          >
            <div className="w-24 h-24 bg-[#4DFF88]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-[#4DFF88]" />
            </div>
            <h1 className="text-4xl font-black mb-4 tracking-tighter">INTELLIGENCE_RECEIVED</h1>
            <p className="text-gray-400 mb-12 max-w-md mx-auto">
              Your feedback has been successfully transmitted to the command center. It will appear on the grid after verification.
            </p>
            <Link href="/" className="bg-accent text-dark-bg font-black px-12 py-5 rounded-2xl inline-block hover:shadow-[0_0_50px_rgba(0,242,255,0.3)] transition-all">
              EXECUTE_RETURN
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase mb-6"
              >
                <ShieldCheck className="w-3 h-3" />
                Verified Client Portal
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-[0.85] mb-6"
              >
                Share your <br />
                <span className="text-gray-500 italic">experience.</span>
              </motion.h1>
              <p className="text-gray-400 max-w-md">
                Help us improve the neural network. Your feedback directly impacts our global deployment strategy.
              </p>
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-effect p-8 md:p-12 rounded-[3rem] border border-white/10 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Identity</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent transition-all outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Rank / Role</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      required
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent transition-all outline-none"
                      placeholder="e.g. CEO at Nexus"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Experience Rating</label>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-all hover:scale-125"
                    >
                      <Star 
                        className={`w-8 h-8 ${rating >= star ? "fill-accent text-accent" : "text-gray-600"}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Intelligence Report</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-500" />
                  <textarea 
                    required
                    rows={5}
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent transition-all outline-none resize-none"
                    placeholder="Describe your project success..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-accent text-dark-bg font-black py-6 rounded-2xl flex items-center justify-center gap-4 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all active:scale-95 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <span className="animate-pulse">TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    SUBMIT_FEEDBACK
                  </>
                )}
              </button>
            </motion.form>
          </div>
        )}
      </div>

      {/* Decorative Text */}
      <div className="fixed bottom-10 left-10 pointer-events-none opacity-20 hidden lg:block">
        <div className="text-[10px] font-mono text-accent space-y-1">
          <p>SYS_STATUS: READY</p>
          <p>ENCRYPTION: AES_256</p>
          <p>UPLINK: STABLE</p>
        </div>
      </div>
    </main>
  );
}
