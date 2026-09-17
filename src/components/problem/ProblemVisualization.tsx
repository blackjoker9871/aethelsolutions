"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  MessageSquare,
  PhoneCall,
  FileSpreadsheet,
  FileText,
  Mail,
  Calendar,
  Bell,
  Clock,
  AlertTriangle,
  UserCheck,
  TrendingDown,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const ProblemVisualization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Mouse Response
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Drifts for different layers
  const d1X = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const d1Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const d2X = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const d2Y = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const d3X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const d3Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] lg:max-w-[660px] xl:max-w-[700px] mx-auto min-h-[520px] sm:min-h-[580px] flex items-center justify-center select-none perspective-1000 py-4"
    >
      {/* Background Soft Pearl & Lavender Ambience */}
      <div className="absolute inset-0 radial-violet-glow pointer-events-none -z-10 blur-3xl opacity-60" />

      {/* Thin Violet Fragmented Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
        <defs>
          <linearGradient id="fragLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6D4AFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#6D4AFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8B6CFF" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* WhatsApp -> Invoice Fragment */}
        <path
          d="M 120 120 C 180 180, 150 260, 180 320"
          fill="none"
          stroke="url(#fragLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Spreadsheet -> Lead Fragment */}
        <path
          d="M 520 110 C 420 160, 480 240, 420 300"
          fill="none"
          stroke="url(#fragLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Email -> WhatsApp Fragment */}
        <path
          d="M 180 320 C 260 350, 310 380, 400 420"
          fill="none"
          stroke="url(#fragLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Call Log -> Spreadsheets */}
        <path
          d="M 280 80 C 360 90, 430 80, 520 110"
          fill="none"
          stroke="url(#fragLineGrad)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>

      {/* ✦ 1. WhatsApp Customer Message Fragment (Top Left) ✦ */}
      <motion.div
        style={{ x: d1X, y: d1Y }}
        animate={{
          y: [0, -10, 6, 0],
          rotate: [-3, -1, -5, -3],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[4%] left-[2%] z-20 w-[190px] sm:w-[210px] neu-flat rounded-2xl p-3.5"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#17152F]">
            <span className="w-5 h-5 rounded-md neu-inset-sm text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-3 h-3" />
            </span>
            <span>WhatsApp Lead</span>
          </div>
          <span className="text-[8px] font-mono text-amber-600 neu-inset-sm px-1.5 py-0.5 rounded font-bold">
            Unanswered 3h
          </span>
        </div>
        <p className="text-[10px] text-[#17152F]/90 font-sans truncate neu-inset p-1.5 rounded-lg">
          &quot;Can we schedule delivery for tomorrow morning?&quot;
        </p>
      </motion.div>

      {/* ✦ 2. Spreadsheets & Disconnected Rows Fragment (Top Right) ✦ */}
      <motion.div
        style={{ x: d2X, y: d2Y }}
        animate={{
          y: [0, 12, -8, 0],
          rotate: [4, 1, 6, 4],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-[6%] right-[2%] z-20 w-[195px] sm:w-[220px] neu-flat rounded-2xl p-3.5"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#17152F]">
            <span className="w-5 h-5 rounded-md neu-inset-sm text-blue-600 flex items-center justify-center">
              <FileSpreadsheet className="w-3 h-3" />
            </span>
            <span>Master_v4_FINAL.xlsx</span>
          </div>
          <span className="text-[8px] font-mono text-red-600 neu-inset-sm px-1.5 py-0.5 rounded font-bold">
            Version Conflict
          </span>
        </div>
        <div className="text-[9px] font-mono text-[#17152F]/80 neu-inset p-1.5 rounded-lg flex justify-between">
          <span>Row 412: Manual Copy</span>
          <span className="text-amber-600 font-bold">Unsynced</span>
        </div>
      </motion.div>

      {/* ✦ 3. Missed Phone Call & Voicemail Log (Top Center) ✦ */}
      <motion.div
        style={{ x: d3X, y: d3Y }}
        animate={{
          y: [0, -8, 10, 0],
          rotate: [-1, 2, -3, -1],
        }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
        className="absolute top-[0%] left-[34%] z-15 w-[160px] sm:w-[175px] neu-flat rounded-2xl p-2.5"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#17152F] mb-1">
          <span className="w-4 h-4 rounded-md neu-inset-sm text-amber-600 flex items-center justify-center">
            <PhoneCall className="w-2.5 h-2.5" />
          </span>
          <span>Missed Client Call</span>
        </div>
        <div className="text-[8px] font-mono text-[#17152F]/70 neu-inset p-1 rounded-lg flex justify-between">
          <span>+91 94412 • VIP</span>
          <span className="text-red-500 font-bold">No CRM Log</span>
        </div>
      </motion.div>

      {/* ✦ 4. Pending Invoice & OCR Extraction Delay (Bottom Left) ✦ */}
      <motion.div
        style={{ x: d1X, y: d2Y }}
        animate={{
          y: [0, 10, -12, 0],
          rotate: [3, 6, 1, 3],
        }}
        transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut" }}
        className="absolute bottom-[6%] left-[2%] z-20 w-[190px] sm:w-[215px] neu-flat rounded-2xl p-3.5"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#17152F]">
            <span className="w-5 h-5 rounded-md neu-inset-sm text-[#6D4AFF] flex items-center justify-center">
              <FileText className="w-3 h-3" />
            </span>
            <span>Vendor Invoice #902</span>
          </div>
          <span className="text-[8px] font-mono text-amber-600 neu-inset-sm px-1.5 py-0.5 rounded font-bold">
            Pending Approval
          </span>
        </div>
        <div className="text-[9px] font-mono text-[#17152F]/80 neu-inset p-1.5 rounded-lg flex justify-between">
          <span>Amount: $24,600</span>
          <span className="text-zinc-500 font-semibold">Awaiting Owner</span>
        </div>
      </motion.div>

      {/* ✦ 5. Repetitive Data Entry / Follow-up Queues (Bottom Right) ✦ */}
      <motion.div
        style={{ x: d2X, y: d1Y }}
        animate={{
          y: [0, -14, 8, 0],
          rotate: [-4, -1, -6, -4],
        }}
        transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
        className="absolute bottom-[4%] right-[2%] z-20 w-[195px] sm:w-[220px] neu-flat rounded-2xl p-3.5"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#17152F]">
            <span className="w-5 h-5 rounded-md neu-inset-sm text-[#6D4AFF] flex items-center justify-center">
              <Clock className="w-3 h-3" />
            </span>
            <span>Follow-up Reminders</span>
          </div>
          <span className="text-[8px] font-mono text-red-600 neu-inset-sm px-1.5 py-0.5 rounded font-bold">
            18 Overdue
          </span>
        </div>
        <div className="text-[9px] font-mono text-[#17152F]/80 neu-inset p-1.5 rounded-lg flex justify-between">
          <span>Manual reminders list</span>
          <span className="text-red-500 font-bold">Forgotten</span>
        </div>
      </motion.div>

      {/* ✦ 6. Unchecked Email Inquiry (Middle Left Float) ✦ */}
      <motion.div
        style={{ x: d3X, y: d2Y }}
        animate={{
          y: [0, -8, 12, 0],
          rotate: [-2, 3, -1, -2],
        }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        className="absolute top-[44%] left-[-4%] z-15 w-[160px] sm:w-[175px] neu-flat rounded-2xl p-2.5 hidden sm:block"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#17152F] mb-1">
          <span className="w-4 h-4 rounded-md neu-inset-sm flex items-center justify-center">
            <Mail className="w-2.5 h-2.5 text-[#6D4AFF]" />
          </span>
          <span>Inbound Sales Lead</span>
        </div>
        <p className="text-[8px] font-mono text-zinc-500 truncate neu-inset p-1 rounded-md">
          Sitting in spam folder
        </p>
      </motion.div>

      {/* ✦ 7. Calendar Overlap (Middle Right Float) ✦ */}
      <motion.div
        style={{ x: d1X, y: d3Y }}
        animate={{
          y: [0, 10, -10, 0],
          rotate: [3, -2, 4, 3],
        }}
        transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut" }}
        className="absolute top-[44%] right-[-4%] z-15 w-[165px] sm:w-[180px] neu-flat rounded-2xl p-2.5 hidden sm:block"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#17152F] mb-1">
          <span className="w-4 h-4 rounded-md neu-inset-sm flex items-center justify-center">
            <Calendar className="w-2.5 h-2.5 text-[#6D4AFF]" />
          </span>
          <span>Double Booking</span>
        </div>
        <p className="text-[8px] font-mono text-amber-600 truncate neu-inset p-1 rounded-md">
          Schedule conflict: 2:00 PM
        </p>
      </motion.div>

      {/* ✦ 8. CENTRAL FRAGMENTED WORKLOAD HUD (THE HIDDEN OVERHEAD CORE) ✦ */}
      <motion.div
        animate={{
          scale: [1, 0.98, 1],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative z-25 w-[280px] sm:w-[320px] md:w-[340px] neu-core-panel rounded-3xl p-5 text-center"
      >
        {/* Warning Icon Badge */}
        <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center mb-3 shadow-[0_6px_16px_rgba(109,74,255,0.4),-2px_-2px_6px_#FFFFFF]">
          <Layers className="w-6 h-6" />
        </div>

        {/* 3D Fragmented Nodes Image Preview */}
        <div className="relative rounded-2xl overflow-hidden my-3 neu-inset p-1.5 border border-[#EEEAFF]/80">
          <Image
            src="/images/problem-friction.jpg"
            alt="Fragmented Business Workflow Friction"
            width={500}
            height={180}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 400px"
            className="w-full h-24 sm:h-28 object-cover rounded-xl"
          />
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[8px] font-mono font-bold text-amber-600 border border-amber-200">
            DISCONNECTED
          </div>
        </div>

        {/* Real-time Overhead Telemetry */}
        <div className="mt-2 pt-2 border-t border-[#EEEAFF] space-y-2 text-[10px] font-mono text-left">
          <div className="flex justify-between items-center neu-inset p-2 rounded-xl">
            <span className="text-[#17152F]/70">Wasted Manual Hours:</span>
            <span className="font-bold text-red-500">~24 hrs/week</span>
          </div>
          <div className="flex justify-between items-center neu-inset p-2 rounded-xl">
            <span className="text-[#17152F]/70">Context Switching:</span>
            <span className="font-bold text-amber-600">8+ separate tools</span>
          </div>
          <div className="flex justify-between items-center neu-inset p-2 rounded-xl">
            <span className="text-[#17152F]/70">Lead Drop-off Rate:</span>
            <span className="font-bold text-red-500">38% un-nurtured</span>
          </div>
        </div>

        {/* Dynamic Micro-Label Leading to System Transformation */}
        <div className="mt-3 pt-2 text-[9px] font-mono text-[#17152F]/60 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>CHAOS WAITING TO BE TRANSFORMED</span>
        </div>
      </motion.div>
    </div>
  );
};
