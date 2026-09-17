"use client";

import React from "react";
import {
  MessageSquare,
  FileSpreadsheet,
  FileText,
  PhoneCall,
  Zap,
  Bell,
  CheckCircle2,
} from "lucide-react";

export type NodeType =
  | "whatsapp"
  | "spreadsheet"
  | "invoice"
  | "phone"
  | "tasks"
  | "notifications";

interface SystemNodeCardProps {
  type: NodeType;
  isOrganized?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SystemNodeCard: React.FC<SystemNodeCardProps> = ({
  type,
  className = "",
  style,
}) => {
  switch (type) {
    case "whatsapp":
      return (
        <div
          style={style}
          className={`neu-flat p-4 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center neu-flat-sm">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">WhatsApp Client Flow</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full neu-inset text-violet-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Sync
            </span>
          </div>
          <div className="text-[10px] text-zinc-600 neu-inset rounded-xl p-2.5 font-mono leading-relaxed">
            <div className="flex items-center justify-between text-zinc-400 text-[9px] mb-1">
              <span>+91 98402 • Enterprise Lead</span>
              <span>12:04 PM</span>
            </div>
            <p className="text-[#1E1B4B] font-sans font-medium truncate">
              &quot;Requesting automated quote for 500 units...&quot;
            </p>
            <div className="mt-2 pt-1.5 border-t border-violet-100 flex items-center justify-between text-[9px] text-emerald-600 font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" /> Aethel Agent Parsed
              </span>
              <span className="text-zinc-400">0.4s</span>
            </div>
          </div>
        </div>
      );

    case "spreadsheet":
      return (
        <div
          style={style}
          className={`neu-flat p-4 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center neu-flat-sm">
                <FileSpreadsheet className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">Operations & Sheets</span>
            </div>
            <span className="text-[9px] font-mono text-violet-700 neu-inset px-2 py-0.5 rounded-full">Manual → Auto</span>
          </div>
          <div className="space-y-1.5 neu-inset rounded-xl p-2.5 font-mono text-[9px]">
            <div className="flex justify-between items-center text-zinc-500 pb-1 border-b border-violet-100">
              <span>BATCH_ID #892</span>
              <span className="text-violet-700 font-bold">1,420 rows auto-synced</span>
            </div>
            <div className="flex items-center justify-between text-[#1E1B4B]">
              <span>Inventory Reconciliation</span>
              <span className="font-semibold text-emerald-600">100% Verified</span>
            </div>
          </div>
        </div>
      );

    case "invoice":
      return (
        <div
          style={style}
          className={`neu-flat p-4 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center neu-flat-sm">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">Invoices & Documents</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full neu-inset text-violet-700 font-bold">
              AI Vision OCR
            </span>
          </div>
          <div className="neu-inset rounded-xl p-2.5 text-[10px] space-y-1 font-mono">
            <div className="flex justify-between text-zinc-400 text-[9px]">
              <span>INV-2026-904.pdf</span>
              <span className="text-[#1E1B4B] font-semibold">$48,900.00</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#1E1B4B] font-sans font-medium text-[9px] pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Extracted & Pushed to ERP directly
            </div>
          </div>
        </div>
      );

    case "phone":
      return (
        <div
          style={style}
          className={`neu-flat p-3.5 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center neu-flat-sm">
                <PhoneCall className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">Customer Calls & Logs</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400">Real-time</span>
          </div>
          <p className="text-[9px] text-zinc-600 font-mono truncate">
            Speech-to-Intent → Action Pipeline
          </p>
        </div>
      );

    case "tasks":
      return (
        <div
          style={style}
          className={`neu-flat p-4 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white flex items-center justify-center neu-flat-sm shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
                <Zap className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">Repetitive Workflows</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-600 font-bold neu-inset px-2 py-0.5 rounded-full">
              98% Auto
            </span>
          </div>
          <p className="text-[9px] text-zinc-500 font-mono">
            Zero human bottleneck
          </p>
        </div>
      );

    case "notifications":
      return (
        <div
          style={style}
          className={`neu-flat p-3.5 rounded-2xl transition-all duration-500 select-none ${className}`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center neu-flat-sm">
                <Bell className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold text-[#1E1B4B]">Team Intelligence</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400">Synced</span>
          </div>
          <p className="text-[9px] text-zinc-500 font-mono">
            Alerts routed only when human decision needed
          </p>
        </div>
      );

    default:
      return null;
  }
};
