"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  XCircle, 
  Trash2, 
  ShieldCheck, 
  Star, 
  MessageSquare,
  Filter,
  RefreshCcw,
  Clock,
  Eye,
  EyeOff
} from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
    setLoading(false);
  };

  const handleToggleStatus = async (id: number, field: "approved" | "verified", value: boolean) => {
    const res = await fetch("/api/testimonials", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, [field]: value }),
    });
    if (res.ok) fetchTestimonials();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure? This action is permanent.")) return;
    const res = await fetch("/api/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) fetchTestimonials();
  };

  const filtered = testimonials.filter(t => {
    if (filter === "pending") return !t.approved;
    if (filter === "approved") return t.approved;
    return true;
  });

  const stats = {
    total: testimonials.length,
    pending: testimonials.filter(t => !t.approved).length,
    approved: testimonials.filter(t => t.approved).length,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">Feedback_Manager</h2>
          <p className="text-gray-500 text-sm">Review and authorize client intelligence reports.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === "all" ? "bg-accent text-dark-bg" : "bg-white/5 text-gray-500 hover:bg-white/10"}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === "pending" ? "bg-yellow-500 text-black" : "bg-white/5 text-gray-500 hover:bg-white/10"}`}
          >
            Pending ({stats.pending})
          </button>
          <button 
            onClick={() => setFilter("approved")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filter === "approved" ? "bg-green-500 text-black" : "bg-white/5 text-gray-500 hover:bg-white/10"}`}
          >
            Approved ({stats.approved})
          </button>
          <button 
            onClick={fetchTestimonials}
            className="p-2 rounded-xl bg-white/5 text-gray-500 hover:text-accent hover:bg-accent/10 transition-all"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Received", val: stats.total, icon: MessageSquare, color: "text-blue-500" },
          { label: "Awaiting Action", val: stats.pending, icon: Clock, color: "text-yellow-500" },
          { label: "Live on Grid", val: stats.approved, icon: CheckCircle, color: "text-green-500" },
        ].map((s, i) => (
          <div key={i} className="glass-effect p-6 rounded-3xl border border-white/5 flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-white/5 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{s.label}</p>
              <p className="text-2xl font-black">{s.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`glass-effect p-6 rounded-3xl border ${item.approved ? "border-white/5" : "border-yellow-500/20 bg-yellow-500/[0.02]"} flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between group`}
            >
              <div className="flex gap-4 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent font-black text-xs shrink-0">
                  {item.avatar}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <span className="text-[10px] text-gray-500 font-mono">ID_{item.id}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                  <div className="flex gap-1 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < item.stars ? "fill-accent text-accent" : "text-gray-700"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mt-3 leading-relaxed max-w-2xl">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                {/* Approve Toggle */}
                <button
                  onClick={() => handleToggleStatus(item.id, "approved", !item.approved)}
                  className={`flex-1 lg:flex-none px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    item.approved ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-white/5 text-gray-400 border border-white/10 hover:border-accent hover:text-accent"
                  }`}
                >
                  {item.approved ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  {item.approved ? "LIVE" : "DRAFT"}
                </button>

                {/* Verified Toggle */}
                <button
                  onClick={() => handleToggleStatus(item.id, "verified", !item.verified)}
                  className={`flex-1 lg:flex-none px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    item.verified ? "bg-accent/10 text-accent border border-accent/20" : "bg-white/5 text-gray-400 border border-white/10"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  {item.verified ? "VERIFIED" : "UNVERIFIED"}
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 rounded-xl bg-white/5 text-gray-500 hover:bg-red-500/20 hover:text-red-500 transition-all border border-transparent hover:border-red-500/30"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && !loading && (
          <div className="text-center py-20 glass-effect rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.2em]">No intelligence reports found in this sector</p>
          </div>
        )}
      </div>
    </div>
  );
}
