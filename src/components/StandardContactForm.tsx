"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone, Mail, User, MessageSquare } from "lucide-react";

export default function StandardContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "Standard Form Inquiry",
        }),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact-standard" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4"
              >
                Direct Communication
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl font-black tracking-tighter leading-[0.9]"
              >
                Let&apos;s build the <br />
                <span className="text-gray-500">extraordinary.</span>
              </motion.h2>
            </div>
            
            <p className="text-gray-400 text-lg max-w-md">
              Have a specific project in mind? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">contact@aethel.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+91 94437 13950</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-[3rem] border border-white/10 relative"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-gray-400">Our engineering team has been notified.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-accent font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent focus:bg-white/[0.08] transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent focus:bg-white/[0.08] transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent focus:bg-white/[0.08] transition-all outline-none"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-500" />
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent focus:bg-white/[0.08] transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-accent text-dark-bg font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <Cpu className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND_MESSAGE
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-xs justify-center font-bold uppercase tracking-widest">
                    <AlertCircle className="w-4 h-4" />
                    Error: Transmission Failed
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
