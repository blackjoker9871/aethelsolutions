"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactChoiceModal({ isOpen, onClose }: ContactChoiceModalProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToForm = () => {
    onClose();
    
    if (pathname !== "/") {
      // If not on home page, navigate to home with anchor
      router.push("/#contact-standard");
    } else {
      // If on home page, just scroll
      const contactSection = document.getElementById("contact-standard");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl glass-effect p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,242,255,0.15)] overflow-hidden"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] text-accent border border-accent/20 bg-accent/5 uppercase mb-4"
              >
                <ShieldCheck className="w-3 h-3" />
                Select Transmission Method
              </motion.div>
              <h2 className="text-4xl font-black tracking-tighter">Choose Your Path.</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Option 1: Terminal Form */}
              <button
                onClick={handleScrollToForm}
                className="group relative flex items-center gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all text-left overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Terminal className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-accent/40 tracking-[0.2em] uppercase mb-1 block">EXECUTE_TERMINAL</span>
                  <h3 className="text-xl font-black mb-1 group-hover:text-accent transition-colors uppercase tracking-tight">Fill Project Form</h3>
                  <p className="text-xs text-gray-400 font-medium">Brief our engineers via the digital enquiry system.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:translate-x-2 transition-transform" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </button>

              {/* Option 2: WhatsApp */}
              <a
                href="https://wa.me/919443713950"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative flex items-center gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all text-left overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-[#25D366]/40 tracking-[0.2em] uppercase mb-1 block">SECURE_UPLINK</span>
                  <h3 className="text-xl font-black mb-1 group-hover:text-[#25D366] transition-colors uppercase tracking-tight">Message WhatsApp</h3>
                  <p className="text-xs text-gray-400 font-medium">Instant communication via encrypted business chat.</p>
                </div>
                <Zap className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>
            </div>

            <div className="mt-8 text-center">
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.5em]">Encryption: AES_256_Active</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
