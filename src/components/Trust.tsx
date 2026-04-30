"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Quote, RefreshCcw, X, MessageSquarePlus } from "lucide-react";
import FeedbackForm from "./FeedbackForm";

export default function Trust({ initialTestimonials = [] }: { initialTestimonials?: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>(initialTestimonials);
  const [loading, setLoading] = useState(initialTestimonials.length === 0);

  useEffect(() => {
    // If we have initial data, we don't need to fetch immediately
    if (initialTestimonials.length > 0) {
      setTestimonials(initialTestimonials);
      setLoading(false);
      return;
    }

    const fetchApproved = async () => {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        const approved = Array.isArray(data) ? data.filter((t: any) => t.status === 'approved') : [];
        
        if (approved.length > 0) {
          setTestimonials(approved);
        } else {
          // Fallback static testimonials
          setTestimonials([
            {
              id: "def-1",
              client_name: "Alex Rivera",
              project_name: "CTO, NEXUS CORP",
              comment: "The performance shift was immediate. Our LCP scores dropped by 60%, and lead conversion skyrocketed within the first week of deployment.",
              rating: 5,
              status: "approved"
            },
            {
              id: "def-2",
              client_name: "Sarah Chen",
              project_name: "FOUNDER, ZENITH AI",
              comment: "Aethel didn't just build a website; they built a revenue engine. The automation workflows have saved us 20+ hours of manual data entry every week.",
              rating: 5,
              status: "approved"
            }
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch feedback");
      } finally {
        setLoading(false);
      }
    };
    fetchApproved();
  }, [initialTestimonials]);

  return (
    <section id="trust" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase"
          >
            <ShieldCheck className="w-4 h-4" />
            Verified Intelligence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-black tracking-[-0.05em] leading-[0.9]"
          >
            Trusted by the <br />
            <span className="text-gray-500 font-outline-2">digital vanguard.</span>
          </motion.h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <RefreshCcw className="w-8 h-8 text-accent animate-spin opacity-20" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-10 rounded-[3rem] border border-white/5 relative group hover:border-accent/30 transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-accent/10 transition-colors" />
                
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < item.rating ? "fill-accent text-accent" : "text-gray-800"}`} />
                  ))}
                </div>

                <p className="text-gray-200 text-xl sm:text-2xl leading-relaxed mb-12 font-medium italic">
                  &ldquo;{item.comment}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black text-xs border border-accent/20 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                    {item.client_name?.split(' ').map((n: any) => n[0]).join('') || "U"}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      {item.client_name}
                      <ShieldCheck className="w-4 h-4 text-accent" />
                    </h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.project_name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Dynamic Feedback CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-12 py-6 bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden transition-all hover:border-accent/50 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 text-white">
              SUBMIT_YOUR_FEEDBACK_HERE
              <MessageSquarePlus className="w-5 h-5 text-accent animate-pulse" />
            </span>
          </button>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Security_Audited</span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">ISO_27001_Ready</span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">GDPR_Compliant</span>
          </div>
        </motion.div>
      </div>

      {/* Feedback Submission Terminal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-16 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group"
              >
                TERMINATE_SESSION <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
              <FeedbackForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
