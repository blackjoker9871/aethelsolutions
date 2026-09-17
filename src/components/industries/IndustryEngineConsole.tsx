"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Stethoscope,
  Scale,
  Car,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Radio,
  Workflow,
  Sliders,
  ShieldCheck,
} from "lucide-react";

export interface IndustryData {
  id: string;
  num: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  configLabel: string;
  workflowSteps: string[];
  exampleSystems: string[];
  systemMetric: string;
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: "manufacturing",
    num: "01",
    name: "MANUFACTURING",
    icon: Factory,
    tagline: "Batch tracking, predictive quality & automated inventory sync",
    configLabel: "SYSTEM CONFIGURED FOR MANUFACTURING",
    workflowSteps: [
      "PRODUCTION",
      "INVENTORY",
      "QUALITY CONTROL",
      "DISPATCH",
      "REPORTING",
    ],
    exampleSystems: [
      "Production Monitoring",
      "Inventory Automation",
      "Visual Quality Inspection",
      "Order Processing",
      "Internal Dashboards",
    ],
    systemMetric: "Zero Material Lag",
  },
  {
    id: "healthcare",
    num: "02",
    name: "HEALTHCARE",
    icon: Stethoscope,
    tagline: "Autonomous appointment triage, clinical routing & multi-channel follow-up",
    configLabel: "SYSTEM CONFIGURED FOR HEALTHCARE",
    workflowSteps: [
      "ENQUIRY",
      "APPOINTMENT",
      "PATIENT",
      "DOCTOR",
      "FOLLOW-UP",
    ],
    exampleSystems: [
      "Appointment Automation",
      "Patient Communication",
      "Doctor Workflows",
      "WhatsApp Telephony",
      "Administrative Systems",
    ],
    systemMetric: "Zero Scheduling Conflicts",
  },
  {
    id: "legal",
    num: "03",
    name: "LEGAL",
    icon: Scale,
    tagline: "Document extraction, matter timelines & automated client briefs",
    configLabel: "SYSTEM CONFIGURED FOR LEGAL",
    workflowSteps: [
      "CLIENT ENQUIRY",
      "CASE",
      "DOCUMENTS",
      "TASKS",
      "CLIENT UPDATES",
    ],
    exampleSystems: [
      "Document Workflows",
      "Case Management",
      "Client Communication",
      "Deadline Tracking",
      "Internal Automation",
    ],
    systemMetric: "Deterministic Precision",
  },
  {
    id: "automotive",
    num: "04",
    name: "AUTOMOTIVE",
    icon: Car,
    tagline: "Job card automation, spare parts routing & live service status",
    configLabel: "SYSTEM CONFIGURED FOR AUTOMOTIVE",
    workflowSteps: [
      "CUSTOMER",
      "VEHICLE",
      "REQUIREMENT",
      "SERVICE",
      "DELIVERY",
    ],
    exampleSystems: [
      "Lead Management",
      "Service Workflows",
      "Customer Communication",
      "Inventory Sync",
      "Booking Systems",
    ],
    systemMetric: "Real-time Bay Status",
  },
  {
    id: "retail",
    num: "05",
    name: "RETAIL",
    icon: ShoppingBag,
    tagline: "Multi-channel catalog sync, instant WhatsApp checkout & churn alerts",
    configLabel: "SYSTEM CONFIGURED FOR RETAIL",
    workflowSteps: [
      "CUSTOMER",
      "ENQUIRY",
      "PRODUCT",
      "ORDER",
      "FOLLOW-UP",
    ],
    exampleSystems: [
      "Sales Automation",
      "Customer Support",
      "Inventory Systems",
      "WhatsApp Commerce",
      "Order Workflows",
    ],
    systemMetric: "0.4s Checkout Velocity",
  },
  {
    id: "logistics",
    num: "06",
    name: "LOGISTICS",
    icon: Truck,
    tagline: "Dynamic driver dispatch, multi-stop tracking & proof-of-delivery OCR",
    configLabel: "SYSTEM CONFIGURED FOR LOGISTICS",
    workflowSteps: [
      "ORDER",
      "ALLOCATION",
      "ROUTE",
      "DELIVERY",
      "STATUS",
    ],
    exampleSystems: [
      "Dispatch Automation",
      "Real-time Tracking",
      "Automated Notifications",
      "Driver Workflows",
      "Operations Dashboards",
    ],
    systemMetric: "Automated Routing",
  },
  {
    id: "education",
    num: "07",
    name: "EDUCATION",
    icon: GraduationCap,
    tagline: "Admissions pipeline, automated student records & parent communication",
    configLabel: "SYSTEM CONFIGURED FOR EDUCATION",
    workflowSteps: [
      "ENQUIRY",
      "ADMISSION",
      "STUDENT",
      "STAFF",
      "PARENT",
    ],
    exampleSystems: [
      "Admission Automation",
      "Student Management",
      "Parent Communication",
      "Staff Workflows",
      "Automated Notifications",
    ],
    systemMetric: "Instant Parent Updates",
  },
  {
    id: "professional-services",
    num: "08",
    name: "PROFESSIONAL SERVICES",
    icon: Building2,
    tagline: "Client portal onboarding, scope management & automated invoice generation",
    configLabel: "SYSTEM CONFIGURED FOR PROFESSIONAL SERVICES",
    workflowSteps: [
      "LEAD",
      "CONSULTATION",
      "PROJECT",
      "DELIVERY",
      "CLIENT",
    ],
    exampleSystems: [
      "Lead Management",
      "Client Portals",
      "Project Workflows",
      "Document Automation",
      "Follow-up Engine",
    ],
    systemMetric: "Bespoke Delivery Flow",
  },
];

interface IndustryEngineConsoleProps {
  activeIndustryId: string;
  onSelectIndustry: (id: string) => void;
}

export const IndustryEngineConsole: React.FC<IndustryEngineConsoleProps> = ({
  activeIndustryId,
  onSelectIndustry,
}) => {
  const currentIndustry =
    INDUSTRIES_DATA.find((ind) => ind.id === activeIndustryId) ||
    INDUSTRIES_DATA[0];

  const Icon = currentIndustry.icon;

  return (
    <div className="w-full neu-core-panel rounded-3xl p-6 sm:p-9 select-none relative overflow-hidden transition-all duration-500">
      
      {/* Background Ambient Violet Halo */}
      <div className="absolute top-0 right-1/4 w-80 h-80 radial-violet-halo pointer-events-none opacity-50" />

      {/* ✦ 1. CONSOLE MASTER HEADER ✦ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF] mb-6">
        
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-lg shadow-[0_6px_18px_rgba(109,74,255,0.4),-2px_-2px_6px_#FFFFFF]">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#17152F] tracking-tight">
                AETHEL INDUSTRY ENGINE
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[10px] font-mono text-[#6D4AFF] uppercase tracking-wider font-bold">
              {currentIndustry.configLabel}
            </p>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full neu-inset-sm text-[10px] font-mono text-[#17152F]/90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>OPERATING STATUS: <strong className="text-emerald-600">ONLINE</strong></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full neu-inset-sm text-[10px] font-mono text-[#6D4AFF]">
            <span>{currentIndustry.systemMetric}</span>
          </div>
        </div>

      </div>

      {/* ✦ 2. DYNAMIC WORKFLOW PIPELINE SIMULATION ✦ */}
      <div className="neu-inset rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
        
        <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#E2E1DA]/80 pb-3 mb-4">
          <div className="flex items-center gap-2 text-[#17152F] font-bold">
            <Workflow className="w-4 h-4 text-[#6D4AFF] animate-pulse" />
            <span>TAILORED OPERATIONAL ARCHITECTURE</span>
          </div>
          <span className="text-[10px] text-[#6D4AFF] font-bold uppercase">
            {currentIndustry.name} PIPELINE
          </span>
        </div>

        {/* 3D Industry Engine Matrix Render */}
        <div className="relative rounded-2xl overflow-hidden mb-5 neu-flat p-1 border border-[#EEEAFF]">
          <Image
            src="/images/industry-matrix.jpg"
            alt="Aethel Industry Engine Core Matrix"
            width={800}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className="w-full h-32 sm:h-40 object-cover rounded-xl"
          />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-mono font-bold text-[#6D4AFF] border border-[#EEEAFF] shadow-xs">
            SECTOR MATRIX ADAPTER
          </div>
        </div>

        {/* Sequential Step Chain */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndustry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Sequential Steps Row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {currentIndustry.workflowSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.07 }}
                    className={`px-3 sm:px-4 py-2.5 rounded-xl font-mono text-[10px] sm:text-[11px] font-bold transition-all ${
                      idx === 0
                        ? "neu-flat text-[#17152F]"
                        : idx === currentIndustry.workflowSteps.length - 1
                        ? "bg-[#6D4AFF] text-white shadow-[0_4px_14px_rgba(109,74,255,0.35)]"
                        : "neu-flat text-[#6D4AFF]"
                    }`}
                  >
                    <div className="text-[8px] opacity-60">0{idx + 1}</div>
                    <div>{step}</div>
                  </motion.div>

                  {idx < currentIndustry.workflowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF] animate-pulse" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Industry Tagline */}
            <p className="text-xs sm:text-sm text-[#17152F]/75 font-normal pt-1">
              &quot;{currentIndustry.tagline}&quot;
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ✦ 3. EXAMPLE SYSTEMS WHAT CAN BE ENGINEERED ✦ */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-zinc-500 font-bold uppercase tracking-wider">
            EXAMPLES OF WHAT CAN BE ENGINEERED:
          </span>
          <span className="text-[#6D4AFF] font-bold">100% Bespoke Logic</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {currentIndustry.exampleSystems.map((sys, idx) => (
            <motion.span
              key={sys}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="px-3 py-1.5 rounded-xl neu-flat-sm text-[11px] font-mono text-[#17152F]/85 font-semibold flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-[#6D4AFF]" />
              <span>{sys}</span>
            </motion.span>
          ))}
        </div>
      </div>

    </div>
  );
};
