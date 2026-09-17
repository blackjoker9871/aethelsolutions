"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { NAV_ITEMS, PRIMARY_CTA } from "./navigationConfig";
import { analytics } from "@/lib/analytics";

export const MobileNavigation: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}> = ({ isOpen, onToggle, onClose }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  // Escape key handler, scroll locking & focus restoration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
        toggleBtnRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      wasOpenRef.current = true;
      // Focus first link on open
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      if (wasOpenRef.current) {
        toggleBtnRef.current?.focus();
        wasOpenRef.current = false;
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <div className="md:hidden w-full px-6 flex items-center justify-between">
      {/* Brand Monogram */}
      <Link
        href="/"
        onClick={() => {
          analytics.trackNavigation("/", "mobile_menu");
          onClose();
        }}
        className="flex items-center gap-2.5 select-none cursor-pointer py-1"
        aria-label="Aethel Solutions Home"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6D4AFF] to-[#5332DB] text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
          Æ
        </div>
        <span className="font-extrabold tracking-tight text-base text-[#17152F]">
          Aethel
        </span>
      </Link>

      {/* Tactile Menu Toggle Button */}
      <button
        ref={toggleBtnRef}
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-xl neu-flat-sm text-[#17152F] hover:text-[#6D4AFF] cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold transition-all"
      >
        {isOpen ? (
          <>
            <span>CLOSE</span>
            <X className="w-4 h-4 text-[#6D4AFF]" aria-hidden="true" />
          </>
        ) : (
          <>
            <span>MENU</span>
            <Menu className="w-4 h-4 text-[#6D4AFF]" aria-hidden="true" />
          </>
        )}
      </button>

      {/* ✦ FULL-SCREEN SYSTEM NAVIGATION PANEL ✦ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[68px] bottom-0 bg-[#F7F6F2] z-50 p-6 flex flex-col justify-between overflow-y-auto border-t border-[#EEEAFF] shadow-2xl"
          >
            {/* Top Navigation Links */}
            <div className="space-y-6 pt-4">
              <div className="text-[10px] font-mono font-bold text-[#6D4AFF] uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-3 h-3" aria-hidden="true" />
                <span>AETHEL SYSTEM NAVIGATION</span>
              </div>

              <nav aria-label="Mobile Navigation Links" className="space-y-2.5">
                {/* Home Link */}
                <Link
                  ref={firstLinkRef}
                  href="/"
                  onClick={() => {
                    analytics.trackNavigation("/", "mobile_menu");
                    onClose();
                  }}
                  className={`min-h-[48px] p-4 rounded-2xl flex items-center justify-between font-mono text-base font-extrabold tracking-wider transition-all ${
                    pathname === "/"
                      ? "bg-white text-[#6D4AFF] neu-flat border-2 border-[#6D4AFF]"
                      : "neu-flat-sm text-[#17152F] hover:text-[#6D4AFF]"
                  }`}
                >
                  <span>HOME</span>
                  <span className="text-xs text-[#6D4AFF] font-bold">00</span>
                </Link>

                {/* Main Nav Items */}
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        analytics.trackNavigation(item.href, "mobile_menu");
                        onClose();
                      }}
                      className={`min-h-[48px] p-4 rounded-2xl flex items-center justify-between font-mono text-base font-extrabold tracking-wider transition-all ${
                        isActive
                          ? "bg-white text-[#6D4AFF] neu-flat border-2 border-[#6D4AFF]"
                          : "neu-flat-sm text-[#17152F] hover:text-[#6D4AFF]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#6D4AFF] font-bold">
                        {item.code}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Primary CTA */}
            <div className="pt-6 border-t border-[#EEEAFF] space-y-4">
              <Link
                href={PRIMARY_CTA.href}
                onClick={() => {
                  analytics.trackCTA(PRIMARY_CTA.label, "mobile_menu", PRIMARY_CTA.href);
                  onClose();
                }}
                className="w-full min-h-[48px] py-4 rounded-full neu-button-violet text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(109,74,255,0.35)]"
              >
                <span>{PRIMARY_CTA.label} →</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#17152F]/60 px-2">
                <span>AETHEL SYSTEM</span>
                <span className="text-emerald-600 font-bold">● ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
