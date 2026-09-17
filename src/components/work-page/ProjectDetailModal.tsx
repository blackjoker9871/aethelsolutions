"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Building2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Smartphone,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Stethoscope,
  Car,
  Footprints,
  Calendar,
  MessageSquare,
} from "lucide-react";

export interface CaseStudyDetail {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  sections: {
    business: {
      headline: string;
      description: string;
      points: string[];
    };
    challenge: {
      headline: string;
      description: string;
      bottlenecks: string[];
    };
    approach: {
      headline: string;
      description: string;
      principles: string[];
    };
    system: {
      headline: string;
      description: string;
      components: string[];
    };
    experience: {
      headline: string;
      description: string;
      flow: string[];
    };
    engineering: {
      headline: string;
      stack: { label: string; detail: string }[];
    };
    outcome: {
      headline: string;
      description: string;
      status: string;
    };
  };
}

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetail> = {
  "ml-hospital": {
    id: "ml-hospital",
    num: "CASE STUDY 01",
    category: "HEALTHCARE",
    title: "ML HOSPITAL",
    subtitle: "A digital front door for modern healthcare.",
    icon: Stethoscope,
    sections: {
      business: {
        headline: "Multi-Specialty Healthcare Provider",
        description:
          "ML Hospital is a leading regional multi-specialty healthcare center providing critical care, outpatient consulting, cardiology, orthopaedics, neurology, pulmonology, and pediatrics.",
        points: [
          "5 Core Clinical Specialty Departments",
          "High daily outpatient patient flow",
          "Need for rapid, reliable doctor discovery",
        ],
      },
      challenge: {
        headline: "Frictional Appointment Scheduling & Long Call Queues",
        description:
          "Patients faced friction finding the right doctor specialty, checking live schedule availability, and getting confirmations without calling a busy reception desk.",
        bottlenecks: [
          "Manual telephone booking bottlenecks",
          "Delayed patient communication on consultation timings",
          "High administrative overhead on front-desk nursing staff",
        ],
      },
      approach: {
        headline: "Designing a Zero-Lag Digital Front Door",
        description:
          "Aethel audited patient discovery behaviors and designed a streamlined mobile web interface connected directly to automated WhatsApp notifications.",
        principles: [
          "Doctor-first visual hierarchy",
          "Sub-3-click appointment selection",
          "Direct integration with patient WhatsApp for instant confirmation",
        ],
      },
      system: {
        headline: "Engineered Clinical Portal & Messaging Engine",
        description:
          "A fast Next.js web application coupled with a WhatsApp notification pipeline and internal schedule tracking.",
        components: [
          "Doctor Directory & Specialty Profiles",
          "Real-time Consultation Slot Selector",
          "WhatsApp Notification & Location Dispatch Engine",
          "Hospital Staff Confirmation Dashboard",
        ],
      },
      experience: {
        headline: "Patient Journey Flow",
        description: "From doctor discovery to consultation in 4 effortless steps.",
        flow: [
          "Patient arrives on mobile-optimized website",
          "Selects doctor specialty & views doctor qualifications",
          "Selects preferred morning or evening consultation slot",
          "Receives instant WhatsApp booking receipt with directions",
        ],
      },
      engineering: {
        headline: "Technologies Applied",
        stack: [
          { label: "Frontend", detail: "Next.js (App Router) + React 19 + Tailwind CSS" },
          { label: "Messaging", detail: "WhatsApp Cloud API Integration" },
          { label: "Booking", detail: "Real-time Slot Dispatch Engine" },
          { label: "Performance", detail: "Edge prerendering & 100% Core Web Vitals" },
        ],
      },
      outcome: {
        headline: "Built for the Next Stage",
        description:
          "Successfully transitioned patient booking to a modern digital front door, significantly easing front-desk strain and providing patients with immediate scheduling certainty.",
        status: "DOCUMENTED SUCCESS // BUILT FOR THE NEXT STAGE",
      },
    },
  },
  "radio-warehouse": {
    id: "radio-warehouse",
    num: "CASE STUDY 02",
    category: "AUTOMOTIVE",
    title: "RADIO WAREHOUSE",
    subtitle: "From car audio to a complete automotive experience.",
    icon: Car,
    sections: {
      business: {
        headline: "Automotive Soundstage & Modification Specialist",
        description:
          "Radio Warehouse has expanded from car audio retail into a full-scale automotive modification, soundstage engineering, and bespoke vehicle accessories workshop.",
        points: [
          "Comprehensive vehicle soundstage tuning",
          "Custom infotainment & Android Head Unit integration",
          "Premium automotive accessories & dampening",
        ],
      },
      challenge: {
        headline: "Visualizing Complex Multi-Component Vehicle Upgrades",
        description:
          "Car enthusiasts need to understand how individual hardware components—head units, amplifiers, component speakers, and subwoofers—assemble into a cohesive soundstage within their specific vehicle model.",
        bottlenecks: [
          "Inability to visualize component placement inside car cabin",
          "Unclear technical specifications on power matching & ohms",
          "Manual offline quoting cycles",
        ],
      },
      approach: {
        headline: "Interactive Exploded-View Vehicle Soundstage Visualizer",
        description:
          "Aethel conceived an interactive visual experience where users can view exploded vehicle architectures and explore modifications node-by-node.",
        principles: [
          "Interactive exploded vehicle visualizer",
          "Layered acoustic and accessory nodes",
          "Direct WhatsApp inquiry routing with pre-filled vehicle build specs",
        ],
      },
      system: {
        headline: "Automotive Modification Studio Interface",
        description:
          "An interactive digital soundstage configuration workspace designed for automotive enthusiasts.",
        components: [
          "Vehicle Model Selector",
          "Exploded Component Placement Grid",
          "Acoustic Staging Spec Visualizer",
          "Instant WhatsApp Build Dispatch",
        ],
      },
      experience: {
        headline: "Customer Configuration Journey",
        description: "Engaging, visual, and technically informative.",
        flow: [
          "Customer selects vehicle model & soundstage tier",
          "Explores component nodes (Android Head Unit, Tweeters, Amps, Subwoofer)",
          "Inspects acoustic specifications & installation positions",
          "Dispatches complete custom build spec directly to installation technicians",
        ],
      },
      engineering: {
        headline: "Technologies Applied",
        stack: [
          { label: "Architecture", detail: "Interactive Component Canvas & Framer Motion" },
          { label: "Web Framework", detail: "Next.js + TypeScript" },
          { label: "Dispatch", detail: "WhatsApp Business Enquiry Pipeline" },
          { label: "Status", detail: "Engineering in progress" },
        ],
      },
      outcome: {
        headline: "Engineering in Progress",
        description:
          "The interactive soundstage configurator and automotive build builder are currently in active development to support Radio Warehouse's expanded retail operations.",
        status: "ACTIVE DEVELOPMENT // ENGINEERING IN PROGRESS",
      },
    },
  },
  plantaris: {
    id: "plantaris",
    num: "CASE STUDY 03",
    category: "AI + COMPUTER VISION",
    title: "PLANTARIS",
    subtitle: "From physical measurement to digital intelligence.",
    icon: Footprints,
    sections: {
      business: {
        headline: "Bespoke Footwear Fit Intelligence Engagement",
        description:
          "Plantaris was a specialized client engineering engagement focused on solving the footwear sizing mismatch problem through mobile computer vision.",
        points: [
          "Client-directed innovation research",
          "Eliminating shoe sizing return rates",
          "Smartphone-based optical measurement without specialized 3D hardware",
        ],
      },
      challenge: {
        headline: "Accurate Real-World Dimensioning from 2D Smartphone Photos",
        description:
          "Capturing true metric millimeter dimensions from smartphone camera photos requires an infallible real-world ground truth reference to correct for perspective skew, lens distortion, and distance variance.",
        bottlenecks: [
          "Perspective distortion in handheld mobile camera captures",
          "Variable lighting and background noise",
          "Translating 2D pixel contours into 3D shoe last geometries",
        ],
      },
      approach: {
        headline: "A4 Optical Calibration Reference Matrix",
        description:
          "Aethel designed an optical processing pipeline using a standard A4 sheet of paper as an immutable real-world dimensional anchor, enabling sub-millimeter calibration across diverse smartphone sensors.",
        principles: [
          "A4 standard sheet as optical ground truth",
          "Edge contour extraction with automatic corner quadrilateral homography",
          "3D volumetric foot reconstruction from multi-angle captures",
        ],
      },
      system: {
        headline: "Neural Footwear Recommendation Pipeline",
        description:
          "A multi-stage vision pipeline that converts raw photos into structured metric foot models and matches them against shoe database geometries.",
        components: [
          "Optical A4 Reference Calibration Engine",
          "Neural Foot Segmentation & Arch Analysis",
          "3D Point Cloud Volumetric Generator",
          "Shoe Last Fit Recommendation Algorithm",
        ],
      },
      experience: {
        headline: "User Measurement Sequence",
        description: "Simple for the user, highly analytical under the hood.",
        flow: [
          "User places foot on standard A4 paper and takes photo",
          "Computer vision detects A4 bounding corners and normalizes perspective",
          "Neural contour model isolates foot outline, calculates ball width & arch profile",
          "System maps calculated dimensions against catalog shoe lasts to output exact fit size",
        ],
      },
      engineering: {
        headline: "Technologies & Concepts",
        stack: [
          { label: "Vision Core", detail: "Perspective Homography & Neural Contour Extraction" },
          { label: "3D Modeling", detail: "Volumetric Point Cloud & Parametric Foot Mesh" },
          { label: "Matching", detail: "Shoe Last Geometry Correlation Engine" },
          { label: "Scope", detail: "Client Project / Design Specifications Benchmark" },
        ],
      },
      outcome: {
        headline: "Engineered Fit Calibration Benchmarks",
        description:
          "Delivered validated mathematical calibration pipelines and proof-of-concept visual models establishing feasibility for smartphone-based digital shoe fitting.",
        status: "DOCUMENTED CLIENT MILESTONE // BENCHMARKS ESTABLISHED",
      },
    },
  },
};

export const ProjectDetailModal: React.FC<{
  projectId: string | null;
  onClose: () => void;
}> = ({ projectId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && projectId) {
        onClose();
      }
    };
    if (projectId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [projectId, onClose]);

  if (!projectId || !CASE_STUDY_DETAILS[projectId]) return null;

  const project = CASE_STUDY_DETAILS[projectId];
  const Icon = project.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#17152F]/70 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#F7F6F2] text-[#17152F] rounded-3xl sm:rounded-[36px] shadow-[0_24px_64px_rgba(23,21,47,0.3)] border-2 border-[#EEEAFF] overflow-hidden flex flex-col z-10"
        >
          {/* Top Sticky Header */}
          <div className="p-6 sm:p-8 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#EEEAFF] flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-sm">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                  {project.num} // {project.category}
                </div>
                <h3 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-[#17152F]">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full neu-flat-sm text-[#17152F] hover:text-[#6D4AFF] cursor-pointer transition-colors"
              aria-label="Close Case Study Detail"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable Journal Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
            
            {/* Project Subtitle Banner */}
            <div className="p-5 rounded-2xl neu-inset border border-[#EEEAFF] text-center sm:text-left">
              <p className="text-base sm:text-lg font-bold text-[#17152F]">
                &ldquo;{project.subtitle}&rdquo;
              </p>
            </div>

            {/* 01: THE BUSINESS */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 01 // THE BUSINESS</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.business.headline}
              </h4>
              <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
                {project.sections.business.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {project.sections.business.points.map((pt, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-[#EEEAFF] text-xs font-mono text-[#17152F]/80">
                    ✦ {pt}
                  </div>
                ))}
              </div>
            </div>

            {/* 02: THE CHALLENGE */}
            <div className="space-y-3 pt-6 border-t border-[#EEEAFF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 02 // THE CHALLENGE</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.challenge.headline}
              </h4>
              <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
                {project.sections.challenge.description}
              </p>
              <div className="space-y-2 pt-1">
                {project.sections.challenge.bottlenecks.map((bn, i) => (
                  <div key={i} className="p-3 rounded-xl neu-inset text-xs text-[#17152F]/80 flex items-start gap-2">
                    <span className="text-rose-500 font-bold" aria-hidden="true">✕</span>
                    <span>{bn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 03: THE APPROACH */}
            <div className="space-y-3 pt-6 border-t border-[#EEEAFF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                <Lightbulb className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 03 // THE APPROACH</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.approach.headline}
              </h4>
              <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
                {project.sections.approach.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {project.sections.approach.principles.map((pr, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-[#EEEAFF] text-xs font-mono font-bold text-[#6D4AFF]">
                    ✓ {pr}
                  </div>
                ))}
              </div>
            </div>

            {/* 04: THE SYSTEM */}
            <div className="space-y-3 pt-6 border-t border-[#EEEAFF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                <Cpu className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 04 // THE SYSTEM</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.system.headline}
              </h4>
              <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
                {project.sections.system.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {project.sections.system.components.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl neu-inset text-xs font-mono font-bold text-[#17152F]">
                    ⚙ {c}
                  </div>
                ))}
              </div>
            </div>

            {/* 05: THE EXPERIENCE */}
            <div className="space-y-3 pt-6 border-t border-[#EEEAFF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                <Smartphone className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 05 // THE EXPERIENCE</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.experience.headline}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
                {project.sections.experience.flow.map((fl, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#EEEAFF] space-y-1 shadow-sm">
                    <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      STAGE 0{i + 1}
                    </div>
                    <div className="text-xs text-[#17152F]/85 font-medium leading-tight">
                      {fl}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 06: THE ENGINEERING */}
            <div className="space-y-3 pt-6 border-t border-[#EEEAFF]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D4AFF]">
                <Layers className="w-4 h-4" aria-hidden="true" />
                <span>SECTION 06 // THE ENGINEERING</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.engineering.headline}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.sections.engineering.stack.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl neu-inset space-y-1">
                    <div className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                      {st.label}
                    </div>
                    <div className="text-xs font-extrabold text-[#17152F]">
                      {st.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 07: THE OUTCOME */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#6D4AFF] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6D4AFF]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  SECTION 07 // DOCUMENTED OUTCOME
                </span>
                <span className="px-2.5 py-0.5 rounded-full neu-inset-sm text-[10px]">
                  VERIFIED
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-[#17152F]">
                {project.sections.outcome.headline}
              </h4>
              <p className="text-sm text-[#17152F]/85 leading-relaxed font-medium">
                {project.sections.outcome.description}
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-[#6D4AFF]">
                STATUS: {project.sections.outcome.status}
              </div>
            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="p-6 bg-[#F7F6F2] border-t border-[#EEEAFF] flex items-center justify-between shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full neu-button-light text-xs font-mono font-bold text-[#17152F] cursor-pointer"
            >
              CLOSE JOURNAL
            </button>
            <Link
              href="/contact"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full neu-button-violet text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <span>ENGINEER YOUR SYSTEM</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
