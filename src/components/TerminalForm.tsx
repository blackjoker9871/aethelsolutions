"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, Keyboard, Activity, Zap } from "lucide-react";

type Step = "name" | "phone" | "email" | "message" | "submitting" | "success";

// Simplified Typewriter using Framer Motion
const TypewriterText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      display: "inline",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function TerminalForm() {
  const [step, setStep] = useState<Step>("name");
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState<{ 
    type: "system" | "user" | "question"; 
    text: string; 
    time: string; 
    animate?: boolean 
  }[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const bootSequence = [
      { type: "system", text: "SYS_LOAD_COMPLETE", time: now, animate: true },
      { type: "question", text: "Identify yourself. Full name?", time: now, animate: true }
    ];

    let delay = 0;
    bootSequence.forEach((item) => {
      setTimeout(() => {
        setHistory(prev => [...prev, item]);
      }, delay);
      delay += 600;
    });
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => inputRef.current?.focus();

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentInput = inputValue.trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    setHistory((prev) => [...prev, { type: "user", text: `> ${currentInput}`, time }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      if (step === "name") {
        setFormData((prev) => ({ ...prev, name: currentInput }));
        setHistory((prev) => [...prev, { type: "system", text: "ID_VERIFIED", time, animate: true }]);
        setTimeout(() => {
          setHistory((prev) => [...prev, { type: "question", text: "Mobile number?", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), animate: true }]);
          setIsTyping(false);
          setStep("phone");
        }, 600);
      } else if (step === "phone") {
        setFormData((prev) => ({ ...prev, phone: currentInput }));
        setHistory((prev) => [...prev, { type: "system", text: "TELEMETRY_SYNC", time, animate: true }]);
        setTimeout(() => {
          setHistory((prev) => [...prev, { type: "question", text: "Email address?", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), animate: true }]);
          setIsTyping(false);
          setStep("email");
        }, 600);
      } else if (step === "email") {
        setFormData((prev) => ({ ...prev, email: currentInput }));
        setHistory((prev) => [...prev, { type: "system", text: "COMMS_SECURED", time, animate: true }]);
        setTimeout(() => {
          setHistory((prev) => [...prev, { type: "question", text: "Brief project details?", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), animate: true }]);
          setIsTyping(false);
          setStep("message");
        }, 600);
      } else if (step === "message") {
        setFormData((prev) => ({ ...prev, message: currentInput }));
        setHistory((prev) => [...prev, { type: "system", text: "UPLINKING...", time, animate: true }]);
        handleSubmit(time);
      }
    }, 400);
  };

  const handleSubmit = async (currentTime: string) => {
    setStep("submitting");
    setIsTyping(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Compact Terminal Inquiry" }),
      });

      if (!response.ok) throw new Error();

      setHistory((prev) => [
        ...prev,
        { type: "system", text: "SUCCESS. SESSION_LOGGED.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), animate: true },
      ]);
      setStep("success");
    } catch (error) {
      setHistory((prev) => [
        ...prev,
        { type: "system", text: "ERR: RESTART_REQUIRED.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), animate: true },
      ]);
      setStep("message");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto font-mono">
      <div className="relative group/window">
        <div className="absolute -inset-1 bg-accent/20 rounded-[1.5rem] blur-xl opacity-20 group-hover/window:opacity-30 transition-opacity" />
        
        <div className="relative bg-[#080808]/95 backdrop-blur-3xl rounded-[1.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
          
          {/* Compact Header */}
          <div className="px-6 py-3 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-accent/40" />
              </div>
              <span className="text-[9px] font-black tracking-widest text-accent/60 uppercase">Terminal_V4</span>
            </div>
            <Activity className="w-3 h-3 text-accent/40" />
          </div>

          {/* Viewport - Reduced Height */}
          <div 
            ref={terminalRef}
            onClick={focusInput}
            className="h-[380px] overflow-y-auto p-8 scrollbar-hide flex flex-col gap-4 relative cursor-text"
          >
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,2px_100%]" />

            <AnimatePresence mode="popLayout">
              {history.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[8px] opacity-20 mt-1 shrink-0">[{line.time}]</span>
                    <div className={`leading-tight ${
                      line.type === "question" 
                        ? "text-lg sm:text-xl md:text-2xl font-black text-[#FF9E3D] tracking-tight drop-shadow-[0_0_8px_rgba(255,158,61,0.3)]" 
                        : line.type === "user"
                        ? "text-[#4DFF88] font-bold text-xs sm:text-sm md:text-base"
                        : "text-accent/40 text-[7px] sm:text-[9px] uppercase tracking-wider"
                    }`}>
                      {line.animate ? <TypewriterText text={line.text} /> : line.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Compact Input - Fixed Enter Key Submission */}
            {step !== "success" && step !== "submitting" && !isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5">
                <form 
                  onSubmit={handleInput} 
                  className="flex items-center gap-3"
                >
                  <span className="text-[#4DFF88] animate-pulse font-black text-base md:text-lg">{">"}</span>
                  <input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleInput(e);
                      }
                    }}
                    className="bg-transparent border-none outline-none text-[#4DFF88] w-full text-sm sm:text-base md:text-lg placeholder:text-white/5 caret-[#4DFF88] font-bold"
                    placeholder="Type and press Enter..."
                  />
                  {/* Hidden submit button to ensure Enter works across all browsers */}
                  <button type="submit" className="hidden" />
                  
                  {/* Visual Send Indicator */}
                  <div className="flex items-center gap-2 opacity-30">
                    <span className="text-[7px] font-bold tracking-widest text-accent uppercase">ENT_</span>
                    <div className="w-4 h-4 border border-accent/40 rounded-sm flex items-center justify-center">
                       <div className="w-1.5 h-1.5 border-r border-b border-accent/60 rotate-45 -translate-x-0.5" />
                    </div>
                  </div>
                </form>
                <div className="text-[7px] text-accent/20 uppercase tracking-[0.2em] ml-7">
                  Awaiting_user_input_sequence
                </div>
              </motion.div>
            )}

            {step === "submitting" && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-accent">
                <Cpu className="w-12 h-12 animate-spin-slow opacity-50" />
                <span className="text-[8px] tracking-[0.5em] font-black animate-pulse uppercase text-accent/60">Uplinking</span>
              </div>
            )}

            {step === "success" && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full gap-6 text-[#4DFF88]">
                <ShieldCheck className="w-12 h-12" />
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-black tracking-tight uppercase italic">Granted</h3>
                  <p className="text-[8px] text-white/40 tracking-[0.3em] uppercase">Data_Logged</p>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Tiny Footer */}
          <div className="px-6 py-2 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
            <div className="flex gap-4">
              <span className="text-[7px] font-bold tracking-[0.2em] text-accent/30 uppercase">SHA-512</span>
              <span className="text-[7px] font-bold tracking-[0.2em] text-accent/30 uppercase">Secure</span>
            </div>
            <Zap className="w-2.5 h-2.5 text-accent/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
