"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SystemTransitionIndicator } from "./SystemTransitionIndicator";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <>
        <SystemTransitionIndicator />
        <div className="w-full flex-1 flex flex-col justify-between">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <SystemTransitionIndicator />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-1 flex flex-col justify-between"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
