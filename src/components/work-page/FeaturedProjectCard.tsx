"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Calendar,
  MessageSquare,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  CheckCircle2,
  Clock,
  Phone,
} from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  slots: string[];
}

const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. K. S. Meenakshi",
    specialty: "Chief Cardiologist & Interventional Cardiology",
    experience: "18+ Yrs",
    slots: ["10:00 AM", "11:30 AM", "04:00 PM"],
  },
  {
    id: "doc-2",
    name: "Dr. Arvind Sundaram",
    specialty: "Senior Orthopaedic & Joint Replacement Surgeon",
    experience: "14+ Yrs",
    slots: ["09:30 AM", "01:00 PM", "05:30 PM"],
  },
  {
    id: "doc-3",
    name: "Dr. Shalini Ramakrishnan",
    specialty: "Consultant Neurologist & Stroke Specialist",
    experience: "12+ Yrs",
    slots: ["11:00 AM", "02:30 PM", "06:00 PM"],
  },
  {
    id: "doc-4",
    name: "Dr. Rajesh Venkataraman",
    specialty: "Senior Pulmonologist & Critical Care",
    experience: "16+ Yrs",
    slots: ["10:30 AM", "03:00 PM", "05:00 PM"],
  },
  {
    id: "doc-5",
    name: "Dr. Preethi Balaji",
    specialty: "Chief Pediatrician & Neonatology",
    experience: "11+ Yrs",
    slots: ["09:00 AM", "12:00 PM", "04:30 PM"],
  },
];

export const FeaturedProjectCard: React.FC<{
  onOpenDetail: () => void;
}> = ({ onOpenDetail }) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("doc-1");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");

  const selectedDoctor =
    DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];

  return (
    <div id="ml-hospital" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12">
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] neu-flat border-2 border-[#6D4AFF]/30 shadow-[0_16px_48px_rgba(109,74,255,0.12)] space-y-10 relative overflow-hidden">
        
        {/* Top Header Badge & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EEEAFF]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6D4AFF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(109,74,255,0.35)]">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                  FEATURED SYSTEM // 01 / HEALTHCARE
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  // DEPLOYED & OPERATIONAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight">
                ML HOSPITAL
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full neu-inset-sm text-xs font-mono font-bold text-[#6D4AFF]">
              NEXT.JS + WHATSAPP ENGINE
            </span>
            <button
              onClick={onOpenDetail}
              className="px-4 py-2 rounded-full neu-button-violet text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Narrative Grid: Challenge & Architectural Synthesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#17152F] leading-snug">
                "A DIGITAL FRONT DOOR FOR MODERN HEALTHCARE."
              </h3>
              <p className="text-xs font-mono font-bold text-[#6D4AFF]">
                Healthcare, made easier to navigate.
              </p>
            </div>

            <p className="text-sm text-[#17152F]/80 leading-relaxed font-medium">
              A minimalist healthcare website and appointment experience designed to make it easier for patients to discover doctors, make appointments and connect directly through WhatsApp without frustrating call holds or manual reception delays.
            </p>

            {/* Visual Patient Journey Sequence */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase">
                PATIENT INTERACTION JOURNEY:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                {[
                  { step: "01", name: "DISCOVER", sub: "Specialties" },
                  { step: "02", name: "SELECT", sub: "5 Doctors" },
                  { step: "03", name: "BOOK", sub: "Live Slot" },
                  { step: "04", name: "CONNECT", sub: "WhatsApp" },
                ].map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl neu-inset text-xs space-y-0.5">
                    <div className="text-[9px] font-mono font-bold text-[#6D4AFF]">{s.step}</div>
                    <div className="font-extrabold text-[#17152F] text-[11px]">{s.name}</div>
                    <div className="text-[9px] text-[#17152F]/60">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documented Outcome / Status */}
            <div className="p-4 rounded-2xl neu-inset space-y-1.5 border border-[#EEEAFF]">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF]" />
                <span>DOCUMENTED OUTCOME</span>
              </div>
              <div className="text-xs font-extrabold text-[#17152F]">
                BUILT FOR THE NEXT STAGE.
              </div>
              <p className="text-[11px] text-[#17152F]/70 leading-relaxed">
                Replaces high-friction paper booking with a frictionless mobile discovery portal and zero-loss WhatsApp patient dispatch.
              </p>
            </div>
          </div>

          {/* Right: Interactive Healthcare Digital Front Door Mockup (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl neu-inset space-y-6 border border-[#EEEAFF]">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E4DE] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-bold text-[#17152F]">
                  ML HOSPITAL // LIVE CLINICAL PORTAL
                </span>
              </div>
              <span className="text-[#6D4AFF] font-bold">5 SPECIALISTS ACTIVE</span>
            </div>

            {/* Doctor Picker Carousel / Grid */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold text-[#17152F]/60 uppercase">
                DOCTOR DISCOVERY MODULE:
              </div>
              <div className="space-y-2">
                {DOCTORS.slice(0, 3).map((doc) => {
                  const isDocActive = doc.id === selectedDoctorId;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isDocActive
                          ? "bg-white border-2 border-[#6D4AFF] shadow-sm"
                          : "bg-white/60 border border-[#EEEAFF] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                            isDocActive
                              ? "bg-[#6D4AFF] text-white"
                              : "bg-[#EEEAFF] text-[#6D4AFF]"
                          }`}
                        >
                          Dr
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-[#17152F]">
                            {doc.name}
                          </div>
                          <div className="text-[11px] text-[#17152F]/65 line-clamp-1">
                            {doc.specialty}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                        {doc.experience}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slot & WhatsApp Confirmation Flow */}
            <div className="p-4 rounded-xl bg-white border border-[#EEEAFF] space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#17152F]">
                  SCHEDULE WITH {selectedDoctor.name.toUpperCase()}
                </span>
                <span className="text-[#6D4AFF] font-bold">INSTANT CONFIRMATION</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedDoctor.slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                      selectedSlot === slot
                        ? "bg-[#6D4AFF] text-white shadow-sm"
                        : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-[#EEEAFF] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#17152F]/70">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp automated reminder + directions</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-mono font-bold">
                  DIRECT API SYNC
                </span>
              </div>
            </div>

            {/* Architecture Path Diagram */}
            <div className="p-3.5 rounded-xl bg-[#F7F6F2] font-mono text-[11px] flex flex-wrap items-center justify-between gap-2 text-[#17152F]/80">
              <span className="font-bold text-[#6D4AFF]">FLOW:</span>
              <span>PATIENT</span>
              <span>↓</span>
              <span>WEBSITE</span>
              <span>↓</span>
              <span>APPOINTMENT</span>
              <span>↓</span>
              <span>WHATSAPP</span>
              <span>↓</span>
              <span>HOSPITAL STAFF</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
