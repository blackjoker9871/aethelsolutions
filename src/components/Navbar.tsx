"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import ContactChoiceModal from "./ContactChoiceModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle automatic scrolling to hash after page navigation
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [pathname]);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", id: "pricing" },
    { label: "Trust", id: "trust" },
    { label: "FAQ", id: "faq" },
  ];

  const handleNav = (link: { label: string; href?: string; id?: string }) => {
    setIsOpen(false);
    if (link.href) {
      router.push(link.href);
    } else if (link.id) {
      if (pathname === "/") {
        const el = document.getElementById(link.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${link.id}`);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2rem] border ${
            scrolled 
              ? "bg-[#0A0A0A]/95 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2" 
              : "bg-transparent border-transparent py-0"
          }`}
        >
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,242,255,0.2)]">
                      <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="none" stroke="#1E3A8A" strokeWidth="8" className="group-hover:stroke-accent transition-colors duration-500" />
                      <motion.path 
                        d="M30 70 L50 30 L70 70 M50 30 L50 85" 
                        fill="none" 
                        stroke="#00F2FF" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ strokeDasharray: ["0, 200", "200, 0"], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-xl font-black tracking-tighter text-white">AETHEL</span>
                    <span className="text-[8px] font-bold tracking-[0.4em] text-gray-500 uppercase">Solutions</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNav(link)}
                      className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-white transition-all relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                  ))}
                  
                  <div className="w-px h-6 bg-white/10 mx-4" />

                  <a
                    href="https://wa.me/919443713950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-black text-[#25D366] hover:bg-[#25D366]/5 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="ml-4 bg-accent text-dark-bg px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all active:scale-95 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Consultation
                  </button>
                </div>
              </div>

              {/* Mobile Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-4 lg:hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="p-8 space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link)}
                    className="block text-left w-full text-3xl font-black text-white/40 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="pt-8 border-t border-white/5 space-y-6">
                  <a
                    href="https://wa.me/919443713950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-5 rounded-[1.5rem] bg-[#25D366]/10 text-[#25D366] font-black text-lg"
                  >
                    <MessageSquare className="w-6 h-6" />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-6 rounded-[1.5rem] bg-accent text-dark-bg font-black text-xl shadow-[0_0_40px_rgba(0,242,255,0.2)]"
                  >
                    GET_CONSULTATION
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactChoiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
