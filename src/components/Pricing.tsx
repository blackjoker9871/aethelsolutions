"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Starter Plan",
    price: "₹10k - 15k",
    desc: "Perfect for establishing your initial premium online presence.",
    features: [
      "Basic website (3–5 pages)",
      "Fully Mobile Responsive",
      "Core SEO Optimization",
      "SSL Certificate Setup",
      "Standard Support",
    ],
    popular: false,
  },
  {
    name: "Growth Plan",
    price: "₹20k - 30k",
    desc: "Tailored for businesses ready to attract and automate leads.",
    features: [
      "Advanced custom website",
      "Payment gateway integration",
      "Smart Lead Capture system",
      "Basic workflow automation",
      "Advanced SEO setup",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Pro Plan",
    price: "₹40k+",
    desc: "Complete digital ecosystem for scalable global business.",
    features: [
      "Custom system (Web app + automation)",
      "WhatsApp API Integration",
      "Extreme Performance optimization",
      "Consultation & Strategy",
      "Dedicated account manager",
      "Full API capabilities",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Transparent Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.05em] leading-[0.9]"
          >
            Invest in <br />
            <span className="text-gray-500">digital growth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-effect rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group ${
                plan.popular ? "border-accent/40 shadow-[0_0_50px_-12px_rgba(0,242,255,0.2)]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Investment</p>
                  </div>
                  {plan.popular && (
                    <span className="bg-accent text-dark-bg text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                </div>

                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm group/item">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent transition-colors">
                        <Check className="h-3 w-3 text-accent group-hover/item:text-dark-bg transition-colors" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <MagneticButton className="w-full">
                <Link
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent text-dark-bg shadow-lg shadow-accent/20 hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
