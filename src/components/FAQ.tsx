"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical build take?",
    answer: "Standard high-performance sites (3-5 pages) are deployed within 7-10 business days. Complex web apps with full automation workflows typically require 14-21 days of neural construction.",
  },
  {
    question: "What technology stack do you use?",
    answer: "Our core stack is built on Next.js 15, React 19, and Tailwind CSS. For the backend, we utilize Supabase (PostgreSQL) and Vercel Edge Functions for sub-millisecond response times.",
  },
  {
    question: "Is ongoing technical support included?",
    answer: "Yes. All Growth and Pro plans include dedicated infrastructure monitoring and optimization. We ensure your system evolves with Google's core updates automatically.",
  },
  {
    question: "Can you migrate my existing site?",
    answer: "Absolutely. We specialize in migrating legacy systems (WordPress, Wix, etc.) into modern high-performance frameworks while preserving 100% of your SEO value.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#050505] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase mb-6"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Support_Protocols
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.05em]"
          >
            Query <span className="text-gray-500">Resolution.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-[2rem] border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === index ? "rotate-180 border-accent text-accent bg-accent/10" : ""}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
