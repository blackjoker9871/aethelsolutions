"use client";

import React, { useState, useEffect } from "react";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-center ${
        scrolled || mobileMenuOpen
          ? "py-3 bg-[#F7F6F2]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(23,21,47,0.06)] border-b border-[#EEEAFF]"
          : "py-5 bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <DesktopNavigation scrolled={scrolled} />

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
