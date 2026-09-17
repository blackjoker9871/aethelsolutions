"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Stethoscope,
  Scale,
  ShoppingBag,
  Truck,
  GraduationCap,
  Car,
  Building2,
  AlertCircle,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Sliders,
  Workflow,
  Activity,
  Layers,
  ChevronRight,
  ShieldAlert,
  Binary,
  Check,
} from "lucide-react";

export interface DetailedIndustry {
  id: string;
  num: string;
  title: string;
  shortName: string;
  icon: React.ElementType;
  description: string;
  challengeNodes: string[];
  potentialSystems: string[];
  workflow: string[];
  metricHeadline: string;
  frictionAnalysis: string;
}

export const DETAILED_INDUSTRIES: DetailedIndustry[] = [
  {
    id: "manufacturing",
    num: "01",
    title: "MANUFACTURING",
    shortName: "MANUFACTURING",
    icon: Factory,
    description: "Connect production, people, inventory, quality and operational data into intelligent workflows.",
    challengeNodes: [
      "PRODUCTION",
      "INVENTORY",
      "QUALITY",
      "STAFF",
      "ORDERS",
      "MACHINES",
      "DOCUMENTS",
      "SUPPLIERS",
    ],
    potentialSystems: [
      "Production Management",
      "Inventory Automation",
      "Quality Inspection",
      "AI Operations Assistant",
      "Document Intelligence",
      "Workflow Automation",
      "Business Intelligence",
    ],
    workflow: [
      "ORDER",
      "PRODUCTION",
      "QUALITY",
      "INVENTORY",
      "DISPATCH",
      "REPORT",
    ],
    metricHeadline: "Zero Material Lag & Real-time Batch Telemetry",
    frictionAnalysis: "Fragmented spreadsheets between shop floor and warehouse create material stockouts, untracked rework, and delayed delivery forecasts.",
  },
  {
    id: "healthcare",
    num: "02",
    title: "HEALTHCARE",
    shortName: "HEALTHCARE",
    icon: Stethoscope,
    description: "Reduce operational friction across appointments, patient communication, staff workflows and administrative processes.",
    challengeNodes: [
      "APPOINTMENTS",
      "PATIENTS",
      "STAFF",
      "REPORTS",
      "FOLLOW-UPS",
      "BILLING",
      "COMMUNICATION",
    ],
    potentialSystems: [
      "Appointment Systems",
      "Patient Communication",
      "WhatsApp AI",
      "Voice AI",
      "Administrative Automation",
      "Document Intelligence",
      "Hospital Management Software",
    ],
    workflow: [
      "PATIENT",
      "APPOINTMENT",
      "STAFF",
      "CONSULTATION",
      "FOLLOW-UP",
    ],
    metricHeadline: "100% Attendance Adherence & Automated Intake",
    frictionAnalysis: "Front-desk phone overload causes 20%+ missed appointments, manual EHR re-entry delays doctor consultations, and post-op follow-ups slip through cracks.",
  },
  {
    id: "legal",
    num: "03",
    title: "LEGAL",
    shortName: "LEGAL",
    icon: Scale,
    description: "Organize documents, client communication, case workflows and repetitive administrative work.",
    challengeNodes: [
      "CLIENTS",
      "CASES",
      "DOCUMENTS",
      "DEADLINES",
      "EMAIL",
      "RESEARCH",
      "FOLLOW-UPS",
    ],
    potentialSystems: [
      "Case Management",
      "Document Intelligence",
      "Client Communication",
      "Deadline Automation",
      "AI Document Processing",
      "Internal Workflow Systems",
    ],
    workflow: [
      "CLIENT",
      "CASE",
      "DOCUMENTS",
      "REVIEW",
      "DEADLINE",
      "FOLLOW-UP",
    ],
    metricHeadline: "Deterministic Clause Extraction & Zero Missed Deadlines",
    frictionAnalysis: "Partners spend 40% of their billable week searching discovery documents, drafting repetitive briefs, and manually emailing matter updates.",
  },
  {
    id: "retail",
    num: "04",
    title: "RETAIL & E-COMMERCE",
    shortName: "RETAIL & E-COMM",
    icon: ShoppingBag,
    description: "Connect customers, orders, inventory, support and sales into one intelligent operating flow.",
    challengeNodes: [
      "CUSTOMERS",
      "ORDERS",
      "INVENTORY",
      "SALES",
      "SUPPORT",
      "PAYMENTS",
      "DELIVERY",
    ],
    potentialSystems: [
      "Sales Automation",
      "WhatsApp AI",
      "Customer Support AI",
      "Inventory Systems",
      "Order Management",
      "AI Sales Agents",
      "Business Intelligence",
    ],
    workflow: [
      "CUSTOMER",
      "ENQUIRY",
      "AI RESPONSE",
      "ORDER",
      "PAYMENT",
      "DELIVERY",
    ],
    metricHeadline: "Sub-Second Inbound Response & Unified Omni-Inventory",
    frictionAnalysis: "High cart abandonment, stock count discrepancies across stores, and repetitive customer support tickets draining customer lifetime value.",
  },
  {
    id: "logistics",
    num: "05",
    title: "LOGISTICS",
    shortName: "LOGISTICS",
    icon: Truck,
    description: "Coordinate orders, vehicles, drivers, customers and operational data through intelligent workflows.",
    challengeNodes: [
      "ORDERS",
      "VEHICLES",
      "DRIVERS",
      "ROUTES",
      "CUSTOMERS",
      "DELIVERIES",
      "DOCUMENTS",
    ],
    potentialSystems: [
      "Fleet Management",
      "Delivery Tracking",
      "Driver Communication",
      "AI Operations Assistant",
      "Document Automation",
      "Workflow Automation",
    ],
    workflow: [
      "ORDER",
      "ASSIGN",
      "VEHICLE",
      "DRIVER",
      "DELIVERY",
      "CONFIRMATION",
    ],
    metricHeadline: "Autonomous Dispatch & Proof-of-Delivery Telemetry",
    frictionAnalysis: "Dispatch coordinators constantly manually calling drivers, paper bills of lading lost in transit, and customer ETA inquiries bottlenecking staff.",
  },
  {
    id: "education",
    num: "06",
    title: "EDUCATION",
    shortName: "EDUCATION",
    icon: GraduationCap,
    description: "Connect students, parents, staff, administration and academic workflows through intelligent systems.",
    challengeNodes: [
      "STUDENTS",
      "PARENTS",
      "STAFF",
      "ATTENDANCE",
      "FEES",
      "COMMUNICATION",
      "ACADEMICS",
    ],
    potentialSystems: [
      "Student Management",
      "Parent Communication",
      "WhatsApp AI",
      "Staff Management",
      "Attendance Systems",
      "Fee Automation",
      "Administrative Software",
    ],
    workflow: [
      "STUDENT",
      "ATTENDANCE",
      "STAFF",
      "PARENT",
      "NOTIFICATION",
      "RECORD",
    ],
    metricHeadline: "Unified Parent Communications & Instant Fee Reconciliation",
    frictionAnalysis: "Fragmented parent communication across disjointed circulars, manual fee reconciliation, and administrative staff buried in admissions paperwork.",
  },
  {
    id: "automotive",
    num: "07",
    title: "AUTOMOTIVE",
    shortName: "AUTOMOTIVE",
    icon: Car,
    description: "Build connected systems for enquiries, sales, service, inventory and customer relationships.",
    challengeNodes: [
      "CUSTOMERS",
      "LEADS",
      "VEHICLES",
      "SERVICE",
      "PARTS",
      "SALES",
      "FOLLOW-UP",
    ],
    potentialSystems: [
      "Lead Management",
      "AI Sales Agent",
      "Service Management",
      "Inventory Systems",
      "WhatsApp AI",
      "Customer Follow-up Automation",
    ],
    workflow: [
      "LEAD",
      "QUALIFICATION",
      "VEHICLE",
      "QUOTE",
      "FOLLOW-UP",
      "SALE",
    ],
    metricHeadline: "Automated Bay Scheduling & 24/7 Lead Qualification",
    frictionAnalysis: "Expensive inbound ad leads go cold after hours, service advisers juggle paper job cards, and spare parts inventory is never synchronized in real time.",
  },
  {
    id: "professional-services",
    num: "08",
    title: "PROFESSIONAL SERVICES",
    shortName: "PROFESSIONAL SERVICES",
    icon: Building2,
    description: "Automate repetitive operations while keeping people focused on high-value client work.",
    challengeNodes: [
      "CLIENTS",
      "PROJECTS",
      "DOCUMENTS",
      "EMAIL",
      "TASKS",
      "BILLING",
      "FOLLOW-UPS",
    ],
    potentialSystems: [
      "CRM",
      "Client Portals",
      "Document Automation",
      "AI Assistants",
      "Workflow Automation",
      "Business Intelligence",
      "Custom Internal Software",
    ],
    workflow: [
      "CLIENT",
      "REQUEST",
      "ASSIGN",
      "WORKFLOW",
      "DELIVERY",
      "FOLLOW-UP",
    ],
    metricHeadline: "Transparent Client Portals & Automated Milestones",
    frictionAnalysis: "High-value consultants lose 15+ hours weekly answering 'where is my file?' emails, formatting proposals, and chasing outstanding milestone invoices.",
  },
];

const TRANSFORMATION_STAGES = [
  { id: "fragmented", label: "FRAGMENTED WORKFLOW", desc: "Siloed tools & manual bottlenecks" },
  { id: "understood", label: "UNDERSTOOD", desc: "First-principles mapping" },
  { id: "connected", label: "CONNECTED", desc: "Unified data pipeline" },
  { id: "automated", label: "AUTOMATED", desc: "Repetitive tasks eliminated" },
  { id: "aethel", label: "AETHEL SYSTEM", desc: "Autonomous bespoke architecture" },
];

export const IndustryDiagnosticConsole: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("manufacturing");
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(4); // Default at "AETHEL SYSTEM"

  const activeIndustry =
    DETAILED_INDUSTRIES.find((ind) => ind.id === selectedIndustryId) ||
    DETAILED_INDUSTRIES[0];

  const Icon = activeIndustry.icon;

  return (
    <section
      id="selector"
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden bg-tech-grid border-t border-[#EEEAFF]"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-violet-halo pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* ✦ 1. SECTION EDITORIAL HEADER ✦ */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset text-[#6D4AFF]">
            <span className="w-2 h-2 rounded-full bg-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              SELECT YOUR INDUSTRY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-[1.08]">
            EVERY BUSINESS
            <br />
            <span className="text-[#6D4AFF]">HAS ITS OWN SYSTEM.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#17152F]/75 leading-relaxed font-normal">
            Aethel does not provide one generic SaaS template. Select your industry below to inspect the operational friction points, potential engineered systems, and custom workflow architectures.
          </p>
        </div>

        {/* ✦ 2. ASYMMETRIC DUAL-PANE INTERACTIVE CONSOLE ✦ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANE: Tactile Industry Selector (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-zinc-500 px-2 pb-1">
              <span>SELECT INDUSTRY PROTOCOL:</span>
              <span className="text-[#6D4AFF]">08 MODULES</span>
            </div>

            <div className="space-y-2.5">
              {DETAILED_INDUSTRIES.map((industry) => {
                const isActive = industry.id === selectedIndustryId;
                const IndIcon = industry.icon;

                return (
                  <button
                    key={industry.id}
                    onClick={() => {
                      setSelectedIndustryId(industry.id);
                      setCurrentStageIndex(4); // Reset to full system view
                    }}
                    className={`w-full group relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "neu-flat border-2 border-[#6D4AFF] shadow-[0_8px_24px_rgba(109,74,255,0.25)] bg-white translate-x-1"
                        : "neu-flat-sm hover:neu-flat hover:border-[#6D4AFF]/30 bg-white/70"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white shadow-md scale-105"
                            : "neu-inset-sm text-[#6D4AFF] group-hover:bg-[#EEEAFF]"
                        }`}
                      >
                        <IndIcon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">
                          {industry.num} — PROTOCOL
                        </div>
                        <div
                          className={`text-xs sm:text-sm font-extrabold tracking-tight transition-colors ${
                            isActive ? "text-[#17152F]" : "text-[#17152F]/80 group-hover:text-[#17152F]"
                          }`}
                        >
                          {industry.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#6D4AFF] animate-ping" />
                      )}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? "text-[#6D4AFF] translate-x-1"
                            : "text-zinc-400 group-hover:text-[#6D4AFF] group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT PANE: Engineering Diagnostic Interface (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full neu-core-panel rounded-3xl p-6 sm:p-9 space-y-8 select-none"
              >
                {/* ✦ 2.1 DIAGNOSTIC MASTER HEADER ✦ */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-xl shadow-[0_8px_20px_rgba(109,74,255,0.35)] border border-white/40">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#6D4AFF]">
                          SYSTEM ARCHITECTURE • {activeIndustry.num}
                        </span>
                        <span className="px-2 py-0.5 rounded-full neu-inset-sm text-[9px] font-mono font-bold text-emerald-600">
                          ACTIVE DIAGNOSTIC
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                        {activeIndustry.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="px-3.5 py-1.5 rounded-full neu-inset text-[11px] font-mono text-[#6D4AFF] font-bold">
                      {activeIndustry.metricHeadline}
                    </div>
                  </div>
                </div>

                {/* ✦ 2.2 PURPOSE & FRICTION ANALYSIS ✦ */}
                <div className="space-y-3">
                  <p className="text-base sm:text-lg text-[#17152F] font-semibold leading-snug">
                    &quot;{activeIndustry.description}&quot;
                  </p>
                  
                  <div className="p-4 rounded-2xl neu-inset text-xs sm:text-sm text-[#17152F]/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#6D4AFF] font-mono font-bold text-[11px]">
                      <AlertCircle className="w-4 h-4" />
                      <span>PRIMARY OPERATIONAL FRICTION:</span>
                    </div>
                    <p className="leading-relaxed font-mono text-xs text-[#17152F]/75">
                      {activeIndustry.frictionAnalysis}
                    </p>
                  </div>
                </div>

                {/* ✦ 2.3 CHALLENGE NODES (Tactile Friction Matrix) ✦ */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      TYPICAL OPERATIONAL CHALLENGE NODES:
                    </span>
                    <span className="text-amber-700 font-bold">{activeIndustry.challengeNodes.length} FRICTION POINTS</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {activeIndustry.challengeNodes.map((node, i) => (
                      <motion.div
                        key={node}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="px-3 py-2.5 rounded-xl neu-flat-sm text-[11px] font-mono font-bold text-[#17152F] flex items-center justify-between border-l-2 border-amber-500/60 bg-white"
                      >
                        <span>{node}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ✦ 2.4 DYNAMIC WORKFLOW PIPELINE ✦ */}
                <div className="neu-inset rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#E2E1DA] pb-2.5">
                    <div className="flex items-center gap-2 text-[#17152F] font-bold">
                      <Workflow className="w-4 h-4 text-[#6D4AFF]" />
                      <span>ENGINEERED OPERATING WORKFLOW</span>
                    </div>
                    <span className="text-[10px] text-[#6D4AFF] font-bold uppercase">
                      AUTOMATED SEQUENCE
                    </span>
                  </div>

                  {/* Stepped Linear Flow */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    {activeIndustry.workflow.map((step, idx) => (
                      <React.Fragment key={step}>
                        <div
                          className={`px-3 py-2.5 rounded-xl font-mono text-[10px] sm:text-[11px] font-bold transition-all ${
                            idx === activeIndustry.workflow.length - 1
                              ? "bg-[#6D4AFF] text-white shadow-[0_4px_12px_rgba(109,74,255,0.35)]"
                              : "neu-flat text-[#17152F] bg-white"
                          }`}
                        >
                          <div className="text-[8px] opacity-60">0{idx + 1}</div>
                          <div>{step}</div>
                        </div>

                        {idx < activeIndustry.workflow.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF] shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* ✦ 2.5 POTENTIAL AETHEL SYSTEMS ✦ */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#6D4AFF]" />
                      POTENTIAL AETHEL SYSTEMS TO ENGINEER:
                    </span>
                    <span className="text-[#6D4AFF] font-bold">100% Custom Architecture</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.potentialSystems.map((sys, i) => (
                      <motion.div
                        key={sys}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="px-3.5 py-2 rounded-xl neu-flat text-xs font-mono text-[#17152F] font-semibold flex items-center gap-2 bg-white"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
                        <span>{sys}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ✦ 2.6 VISUAL TRANSFORMATION PIPELINE ✦ */}
                <div className="pt-4 border-t border-[#EEEAFF] space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="font-bold uppercase tracking-wider text-[#6D4AFF]">
                      VISUAL TRANSFORMATION LIFECYCLE:
                    </span>
                    <span>CLICK ANY STAGE TO INSPECT</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {TRANSFORMATION_STAGES.map((stage, idx) => {
                      const isCurrent = idx === currentStageIndex;
                      const isPast = idx <= currentStageIndex;

                      return (
                        <button
                          key={stage.id}
                          onClick={() => setCurrentStageIndex(idx)}
                          className={`p-2.5 rounded-xl text-left font-mono transition-all cursor-pointer ${
                            isCurrent
                              ? "bg-[#6D4AFF] text-white shadow-md scale-105"
                              : isPast
                              ? "neu-flat bg-white text-[#17152F]"
                              : "neu-inset-sm text-zinc-400 opacity-60"
                          }`}
                        >
                          <div className="text-[8px] opacity-75">STAGE 0{idx + 1}</div>
                          <div className="text-[10px] font-bold truncate">{stage.label}</div>
                          <div className="text-[8px] opacity-75 truncate">{stage.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Footer Callout */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl neu-flat bg-white/80">
                  <div className="text-xs font-mono text-[#17152F]">
                    Ready to engineer custom systems for <strong className="text-[#6D4AFF]">{activeIndustry.title}</strong>?
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full neu-button-violet text-xs font-bold whitespace-nowrap shadow-sm"
                  >
                    <span>Engineer {activeIndustry.shortName} System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
