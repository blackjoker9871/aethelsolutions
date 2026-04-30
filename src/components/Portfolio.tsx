"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ML Hospital & Research Center",
    category: "Healthcare Infrastructure",
    problem: "Inefficient patient management and slow data processing in a high-traffic medical environment.",
    solution: "A state-of-the-art medical portal with real-time patient tracking and an automated WhatsApp briefing system.",
    result: "Achieved a 90% reduction in patient wait times and 40% faster diagnostic data retrieval.",
    metrics: "90%",
    metricLabel: "Friction Reduction",
    link: "https://mlhospitalaravind.vercel.app/"
  },
  {
    title: "Lemuria Luxury E-Commerce",
    category: "Retail & E-Commerce",
    problem: "Low conversion rates due to a non-responsive mobile experience and slow page loading.",
    solution: "A high-performance headless commerce store built with Next.js for sub-second page transitions.",
    result: "35% increase in mobile conversions and a 1.2s average LCP score globally.",
    metrics: "1.2s",
    metricLabel: "Page Load Speed",
    link: "https://lemuriashop.vercel.app/"
  },
  {
    title: "KDMA Educational Platform",
    category: "Ed-Tech & Learning",
    problem: "Struggling with student engagement and fragmented learning resources on legacy systems.",
    solution: "A unified digital learning ecosystem with interactive modules and automated progress tracking.",
    result: "50% increase in student completion rates and streamlined administrative workflows.",
    metrics: "50%",
    metricLabel: "Completion Increase",
    link: "https://kdma.vercel.app/"
  },
  {
    title: "Ekalaivan Training Hub",
    category: "Institutional Management",
    problem: "Manual administrative processes causing significant operational delays and data errors.",
    solution: "A custom ERP-style dashboard for institutional management and digital resource distribution.",
    result: "Saved 20+ hours of manual labor per week and 100% data accuracy across all departments.",
    metrics: "20h+",
    metricLabel: "Weekly Time Saved",
    link: "https://ekalaivan987.vercel.app/"
  }
];

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Portfolio() {
  // Show only first 2 for home page
  const homeProjects = projects.slice(0, 2);

  return (
    <section id="portfolio" className="py-24 bg-dark-bg text-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">
              PROVEN_OUTPUT
            </h2>
            <p className="text-4xl sm:text-5xl font-black tracking-tighter">
              Precision built for <br />
              <span className="text-gray-500">high-growth brands.</span>
            </p>
          </div>
          
          <Link 
            href="/work" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-accent transition-all"
          >
            Explore All Systems
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10 hover:border-accent/30 transition-all duration-500 group flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black tracking-widest text-accent uppercase bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                    {project.category}
                  </span>
                  <div className="text-4xl font-black text-white/10 group-hover:text-accent transition-colors">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-6 leading-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.solution}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-accent">{project.metrics}</span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-tight max-w-[80px]">
                    {project.metricLabel}
                  </span>
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-dark-bg transition-all"
                >
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
