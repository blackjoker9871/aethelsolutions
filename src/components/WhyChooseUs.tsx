"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Briefcase, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Launch your high-converting, fully optimized website in just 5–7 days.",
  },
  {
    icon: Zap,
    title: "Performance-Focused",
    desc: "Built on Next.js to achieve exceptional LCP scores (under 1.5s).",
  },
  {
    icon: Briefcase,
    title: "Business-First Approach",
    desc: "We focus on revenue and conversions, not just aesthetic features.",
  },
  {
    icon: Globe,
    title: "Global-Ready Solutions",
    desc: "Optimized infrastructure targeting international clients seamlessly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-accent uppercase tracking-wider">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-dark-bg tracking-tight">
            The Aethel Advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-surface p-8 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-dark-bg/5 text-accent inline-block mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-dark-bg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
