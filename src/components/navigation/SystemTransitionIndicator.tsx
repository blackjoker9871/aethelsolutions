"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const SystemTransitionIndicator: React.FC = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentRoute) {
      setIsTransitioning(true);
      setCurrentRoute(pathname);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [pathname, currentRoute]);

  const getRouteLabel = () => {
    if (pathname === "/") return "HOME // CORE";
    if (pathname === "/systems") return "SYSTEMS // ARCHITECTURE";
    if (pathname === "/industries") return "INDUSTRIES // ADAPTATION";
    if (pathname === "/work") return "WORK // CASE STUDIES";
    if (pathname === "/about") return "ABOUT // MANIFESTO";
    if (pathname === "/contact") return "CONTACT // INTAKE";
    return "AETHEL SYSTEM";
  };

  return (
    <div className="fixed top-4 right-4 z-40 pointer-events-none hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: -6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full neu-flat-sm border border-[#EEEAFF] text-[10px] font-mono text-[#17152F]/70 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] -ml-3" />
          <span className="font-extrabold text-[#6D4AFF]">AETHEL</span>
          <span className="text-[#17152F]/30">•</span>
          <span className="font-semibold">{getRouteLabel()}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
