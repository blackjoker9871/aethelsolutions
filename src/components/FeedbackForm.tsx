"use client";

import { useState } from "react";
import { Star, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    client_name: "",
    project_name: "",
    comment: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please provide a rating");
    setStatus("submitting");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...formData, rating }),
      });
      if (res.ok) setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  return (
    <div className="glass-effect p-8 sm:p-12 rounded-[3rem] border border-white/10 max-w-2xl mx-auto">
      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-3xl font-black mb-2">Feedback Received</h3>
          <p className="text-gray-400">Thank you for helping us evolve.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tighter">Share your <br/><span className="text-gray-500">experience.</span></h2>
            <p className="text-gray-400">Your insights drive our engineering excellence.</p>
          </div>

          <div className="flex flex-col items-center py-6 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Overall Performance</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform active:scale-90"
                >
                  <Star 
                    className={`w-10 h-10 ${
                      star <= (hoverRating || rating) 
                        ? "text-accent fill-accent drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]" 
                        : "text-gray-700"
                    } transition-all duration-200`} 
                  />
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold text-accent h-4">
              {rating === 5 ? "ABSOLUTELY EXTRAORDINARY" : 
               rating === 4 ? "EXCEEDED EXPECTATIONS" :
               rating === 3 ? "SOLID PERFORMANCE" :
               rating === 2 ? "COULD BE BETTER" :
               rating === 1 ? "POOR EXPERIENCE" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Client Name</label>
              <input 
                required
                type="text"
                value={formData.client_name}
                onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-accent outline-none transition-all"
                placeholder="CEO / Project Manager"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Project Identifier</label>
              <input 
                required
                type="text"
                value={formData.project_name}
                onChange={(e) => setFormData({...formData, project_name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-accent outline-none transition-all"
                placeholder="e.g. ML Hospital"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Detailed Review</label>
            <textarea 
              required
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 focus:border-accent outline-none transition-all resize-none"
              placeholder="Tell us what you liked most..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-accent text-dark-bg font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            SUBMIT_FEEDBACK_DATA
          </button>
        </form>
      )}
    </div>
  );
}
