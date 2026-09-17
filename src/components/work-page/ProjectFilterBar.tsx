"use client";

import React from "react";
import { SlidersHorizontal, Check } from "lucide-react";

export type ProjectFilterCategory =
  | "ALL"
  | "AI"
  | "AUTOMATION"
  | "SOFTWARE"
  | "HEALTHCARE"
  | "AUTOMOTIVE"
  | "COMPUTER VISION"
  | "BUSINESS SYSTEMS";

const FILTER_OPTIONS: ProjectFilterCategory[] = [
  "ALL",
  "AI",
  "AUTOMATION",
  "SOFTWARE",
  "HEALTHCARE",
  "AUTOMOTIVE",
  "COMPUTER VISION",
  "BUSINESS SYSTEMS",
];

export const ProjectFilterBar: React.FC<{
  activeFilter: ProjectFilterCategory;
  onFilterChange: (filter: ProjectFilterCategory) => void;
  resultCount?: number;
}> = ({ activeFilter, onFilterChange, resultCount }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
      <div className="p-4 sm:p-5 rounded-3xl neu-flat border border-[#EEEAFF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#6D4AFF] shrink-0">
          <div className="w-7 h-7 rounded-lg neu-inset-sm flex items-center justify-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />
          </div>
          <span>FILTER ARCHIVE:</span>
        </div>

        <div
          role="tablist"
          aria-label="Filter case studies by domain and category"
          className="flex flex-wrap items-center gap-2"
        >
          {FILTER_OPTIONS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="project-archive"
                onClick={() => onFilterChange(filter)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold cursor-pointer transition-all duration-200 select-none flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#6D4AFF] text-white shadow-[0_2px_10px_rgba(109,74,255,0.35)]"
                    : "neu-flat-sm text-[#17152F]/75 hover:text-[#6D4AFF] hover:border-[#6D4AFF]/40"
                }`}
              >
                {isActive && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                <span>{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Reader Announcement on Filter Change */}
        <div className="sr-only" role="status" aria-live="polite">
          {`Showing ${resultCount !== undefined ? resultCount : ''} projects for filter: ${activeFilter}`}
        </div>

      </div>
    </div>
  );
};
