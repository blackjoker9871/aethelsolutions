"use client";

import React from "react";
import { Mail, Globe, MessageSquare } from "lucide-react";
import { analytics } from "@/lib/analytics";

export const DirectContactSidebar: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-6">
      <div className="p-6 sm:p-8 rounded-3xl neu-flat border border-[#EEEAFF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="space-y-1">
          <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#6D4AFF]" />
            <span>DIRECT CHANNELS</span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-[#17152F]">
            PREFER A DIRECT CONVERSATION?
          </h3>
          <p className="text-xs text-[#17152F]/70 font-medium">
            Reach our engineering leadership directly via email or web consultation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="mailto:aethel.officialdesk@gmail.com"
            onClick={() => analytics.trackContactMethod("email", "contact_page_sidebar")}
            className="px-4 py-2.5 rounded-2xl neu-inset hover:bg-white text-xs font-mono font-bold text-[#17152F] flex items-center gap-2 transition-all"
          >
            <Mail className="w-4 h-4 text-[#6D4AFF]" />
            <span>aethel.officialdesk@gmail.com</span>
          </a>

          <a
            href="https://aethelsolution.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackContactMethod("website", "contact_page_sidebar")}
            className="px-4 py-2.5 rounded-2xl neu-inset hover:bg-white text-xs font-mono font-bold text-[#17152F] flex items-center gap-2 transition-all"
          >
            <Globe className="w-4 h-4 text-[#6D4AFF]" />
            <span>aethelsolution.in</span>
          </a>
        </div>

      </div>
    </div>
  );
};
