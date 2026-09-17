"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Binary,
  Cpu,
  Database,
  Network,
  Lock,
  Boxes,
  Layout,
  BarChart,
  Zap,
  CheckCircle2,
  Server,
  Shield,
  Code,
} from "lucide-react";

interface TechPillar {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  specs: string[];
}

const TECH_PILLARS: TechPillar[] = [
  {
    id: "ai-models",
    name: "AI MODELS",
    tagline: "State-of-the-art LLMs, Vision Transformers & Fine-tuned Small Models",
    icon: Cpu,
    specs: ["Deterministic output schemas", "Sub-second token streaming", "Self-hosted & Cloud options"],
  },
  {
    id: "apis",
    name: "APIs & PROTOCOLS",
    tagline: "High-throughput REST, gRPC & Real-time WebSockets",
    icon: Network,
    specs: ["Sub-50ms roundtrip latency", "Type-safe schemas", "Rate-limit resilient routing"],
  },
  {
    id: "databases",
    name: "DATABASES",
    tagline: "PostgreSQL, pgvector, Redis Cache & ACID Event Stores",
    icon: Database,
    specs: ["Zero-data-loss replication", "Millisecond vector search", "Continuous automated backups"],
  },
  {
    id: "workflows",
    name: "STATEFUL WORKFLOWS",
    tagline: "Durable execution graphs with automatic retry & compensation",
    icon: Zap,
    specs: ["Crash-proof execution states", "Step-level audit logging", "Human-in-the-loop approvals"],
  },
  {
    id: "authentication",
    name: "AUTHENTICATION & RBAC",
    tagline: "Enterprise SSO, OAuth2, JWT tokens & Granular Role Permissions",
    icon: Lock,
    specs: ["SAML / Okta integration", "SOC2 / HIPAA ready architecture", "Encrypted data in flight & at rest"],
  },
  {
    id: "integrations",
    name: "ENTERPRISE INTEGRATIONS",
    tagline: "Native connectors for ERPs, CRMs, Billing & Custom legacy SQL",
    icon: Boxes,
    specs: ["HubSpot, Salesforce, SAP sync", "Custom webhook handlers", "Legacy system bridging"],
  },
  {
    id: "interfaces",
    name: "LOW-LATENCY INTERFACES",
    tagline: "Reactive Next.js, React, Tailwind & Native Mobile Surfaces",
    icon: Layout,
    specs: ["Optimistic UI updates", "Light neomorphic design system", "Zero layout shift"],
  },
  {
    id: "data",
    name: "DATA TELEMETRY",
    tagline: "Real-time log aggregation, OpenTelemetry & Anomaly tracking",
    icon: BarChart,
    specs: ["Continuous metric streaming", "Automated alert dispatches", "Executive BI sync"],
  },
  {
    id: "automation",
    name: "SELF-HEALING AUTOMATION",
    tagline: "Automated failover, health monitors & queue self-clearing",
    icon: Server,
    specs: ["Zero-downtime hot reloading", "Auto-scaling worker clusters", "Deterministic error handling"],
  },
];

export const UnderTheSurfaceSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>("ai-models");

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#17152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-[#6D4AFF]"
          >
            <Binary className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              UNDER THE SURFACE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17152F] leading-tight"
          >
            SERIOUS ENGINEERING
            <br />
            <span className="text-[#6D4AFF]">UNDERNEATH EVERY SYSTEM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#17152F]/75 max-w-2xl mx-auto leading-relaxed"
          >
            Clean interfaces are only as reliable as the foundation beneath them. Every Aethel solution is powered by battle-tested enterprise architecture.
          </motion.p>
        </div>

        {/* ✦ 9 ARCHITECTURAL PILLARS GRID ✦ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = pillar.id === activePillarId;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setActivePillarId(pillar.id)}
                className={`p-6 rounded-3xl neu-flat transition-all duration-300 border flex flex-col justify-between space-y-4 select-none ${
                  isHovered
                    ? "border-[#6D4AFF] shadow-[0_8px_24px_rgba(109,74,255,0.18)] -translate-y-1"
                    : "border-[#EEEAFF] hover:border-[#6D4AFF]/40"
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EEEAFF] text-[#6D4AFF] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#17152F]">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-[#17152F]/70 mt-1 font-medium leading-relaxed">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* Specs list */}
                <div className="pt-3 border-t border-[#EEEAFF] space-y-1.5">
                  {pillar.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-[11px] font-mono text-[#17152F]/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
