"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      router.push("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-dark-bg font-bold text-3xl mb-6 shadow-2xl shadow-accent/20">
            A
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Aethel<span className="text-accent">Admin</span></h1>
          <p className="text-gray-500">Secure access to Aethel Solutions console</p>
        </div>

        <div className="glass-effect rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Progress bar for loading */}
          {isLoading && (
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="absolute top-0 left-0 h-1 bg-accent"
              transition={{ duration: 1.5 }}
            />
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@aethelsolutions.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-xs text-accent hover:underline font-semibold">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent hover:bg-accent-hover text-dark-bg font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-accent/10 flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-dark-bg/30 border-t-dark-bg rounded-full animate-spin" />
              ) : (
                <>
                  Authenticate
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-xs font-medium">
            <ShieldCheck className="h-4 w-4" />
            256-bit AES Encryption Enabled
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Protected by Aethel Security. &copy; 2026
        </p>
      </motion.div>
    </div>
  );
}
