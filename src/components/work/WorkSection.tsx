"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { CaseStudyCard, CaseStudyData } from "./CaseStudyCard";

const PROJECTS_DATA: CaseStudyData[] = [
  {
    id: "ml-hospital",
    num: "01",
    category: "HEALTHCARE / DIGITAL SYSTEM",
    title: "ML HOSPITAL",
    tagline:
      "A focused digital healthcare experience designed around patient discovery, doctor information and appointment communication.",
    imageSrc: "/images/case-ml-hospital.jpg",
    imageAlt: "ML Hospital Healthcare Digital Platform Interface Mockup",
    industry: "Healthcare",
    system: "Healthcare Web Experience",
    focus: "Appointments • Doctors • Communication",
    status: "SYSTEM DELIVERED",
    statusColor: "violet",
    problem:
      "Patients struggled with fragmented clinic discovery, delayed specialist appointment scheduling, and scattered communication across phone lines.",
    systemSolution:
      "A dedicated healthcare digital platform unifying doctor profiles, direct appointment booking calendars, and automated WhatsApp/call routing.",
    experience:
      "Clean, intuitive patient journey allowing visitors to browse medical specialties, review doctor credentials, and confirm consultation slots in seconds.",
    alignVisual: "right",
  },
  {
    id: "radio-warehouse",
    num: "02",
    category: "AUTOMOTIVE / DIGITAL EXPERIENCE",
    title: "RADIO WAREHOUSE",
    tagline:
      "An immersive automotive accessories and modification experience designed to move beyond a conventional product website.",
    imageSrc: "/images/case-radio-warehouse.jpg",
    imageAlt: "Radio Warehouse Automotive Customization Platform Interface",
    industry: "Automotive",
    system: "Interactive Automotive Experience",
    focus: "Products • Modifications • Discovery",
    status: "SYSTEM IN DEVELOPMENT",
    statusColor: "amber",
    problem:
      "Automotive sound and accessory customization is inherently tactile and vehicle-specific, yet traditional e-commerce stores treat components as generic flat catalog listings.",
    systemSolution:
      "An interactive digital showroom engineering custom vehicle compatibility matching, visual audio component layout, and direct modification consultations.",
    experience:
      "High-fidelity visual exploration of head units, amplifiers, subwoofers, and bespoke audio packages mapped directly to vehicle chassis specifications.",
    alignVisual: "left",
  },
  {
    id: "plantaris",
    num: "03",
    category: "AI / COMPUTER VISION",
    title: "PLANTARIS",
    tagline:
      "An AI-driven product experience designed to analyze foot images and help connect physical measurements with personalized footwear recommendations.",
    imageSrc: "/images/case-plantaris.jpg",
    imageAlt: "Plantaris AI Computer Vision Foot Sizing & Recommendation Interface",
    industry: "AI / D2C",
    system: "Computer Vision + Recommendation System",
    focus: "Image Analysis • 3D Data • Recommendations",
    status: "AI SYSTEM IN DEVELOPMENT",
    statusColor: "amber",
    problem:
      "Sizing mismatch and lack of bespoke foot morphology data cause high return rates and fit dissatisfaction in specialized footwear purchasing.",
    systemSolution:
      "A computer vision pipeline utilizing reference-based smartphone image capture to extract precise contour dimensions, arch geometry, and predictive sizing models.",
    experience:
      "A streamlined mobile capture workflow with real-time alignment feedback, instant dimensional extraction, and bespoke footwear recommendation matching.",
    alignVisual: "right",
  },
];

export const WorkSection: React.FC = () => {
  return (
    <section
      id="selected-work"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]/80"
    >
      {/* Background Soft Pearl & Violet Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ TOP EDITORIAL HEADER & POSITIONING ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 sm:mb-24">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset-sm text-[#6D4AFF]">
                <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  SELECTED WORK
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#17152F] leading-[1.02]">
                REAL BUSINESSES.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D4AFF] via-[#8B6CFF] to-[#17152F]">
                  REAL SYSTEMS.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#17152F]/75 leading-relaxed font-normal max-w-xl"
            >
              From healthcare platforms to automotive digital experiences and AI-powered products, Aethel builds technology around real business problems.
            </motion.p>
          </div>

          {/* Right Column: Secondary Architectural Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 neu-flat p-6 sm:p-7 rounded-3xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#6D4AFF] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>ENGINEERING REALITY</span>
              </div>
              <span className="px-2.5 py-1 rounded-full neu-inset-sm text-[10px] text-[#6D4AFF] font-bold">
                Case Archives
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#17152F] leading-snug">
              &quot;Every project starts with a problem.
              <br />
              <span className="text-[#6D4AFF]">The interface is only the visible part of the solution.</span>&quot;
            </p>
            <p className="text-xs font-mono text-[#17152F]/70 pt-1 border-t border-[#EEEAFF]">
              We design and construct the underlying logic, custom databases, deterministic workflows, and integrations behind every surface.
            </p>
          </motion.div>

        </div>

        {/* ✦ CASE STUDY SHOWCASE ✦ */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project, index) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ✦ CLEAN LINK TO WORK ARCHIVE ✦ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-button-light font-mono text-xs font-bold text-[#17152F] hover:text-[#6D4AFF] transition-all group"
          >
            <span>EXPLORE FULL CASE STUDIES & ARCHIVE</span>
            <ArrowRight className="w-4 h-4 text-[#6D4AFF] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
