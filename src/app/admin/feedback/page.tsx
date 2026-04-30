"use client";

import { useState, useEffect } from "react";
import { Star, MessageSquare, User, Trash2, CheckCircle, Plus, Copy, ExternalLink, Settings as SettingsIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackForm from "@/components/FeedbackForm";

export default function FeedbackManagement() {
  const [feedback, setFeedback] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBuilder, setShowBuilder] = useState(false);
  const [projectToBuild, setProjectToBuild] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await fetch("/api/feedback");
      const data = await res.json();
      setFeedback(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch(`/api/feedback/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "approved" }),
      });
      if (res.ok) fetchFeedback();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this feedback?")) return;
    try {
      const res = await fetch(`/api/feedback/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchFeedback();
    } catch (err) {
      console.error(err);
    }
  };

  const generateLink = () => {
    const baseUrl = window.location.origin;
    const link = `${baseUrl}/feedback?project=${encodeURIComponent(projectToBuild)}`;
    setGeneratedLink(link);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Link copied to clipboard!");
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} 
      />
    ));
  };

  return (
    <div className="p-8 space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black tracking-tighter">Feedback System</h1>
          <p className="text-gray-500 mt-2 font-medium uppercase tracking-[0.3em] text-[10px]">Intelligence & Reputation Management</p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setShowBuilder(!showBuilder)}
            className="bg-accent text-dark-bg px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all flex items-center gap-3"
          >
            {showBuilder ? <MessageSquare className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showBuilder ? "VIEW_REVIEWS" : "BUILD_FEEDBACK_FORM"}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showBuilder ? (
          <motion.div 
            key="builder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Builder Controls */}
            <div className="space-y-8 bg-white/5 border border-white/10 rounded-[3rem] p-10">
              <div className="space-y-2">
                <h3 className="text-2xl font-black">Form Generator</h3>
                <p className="text-sm text-gray-500">Generate a unique feedback link for your clients.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Project Name</label>
                  <input 
                    type="text"
                    value={projectToBuild}
                    onChange={(e) => setProjectToBuild(e.target.value)}
                    placeholder="e.g. ML Hospital Branding"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 focus:border-accent outline-none transition-all"
                  />
                </div>

                <button 
                  onClick={generateLink}
                  disabled={!projectToBuild}
                  className="w-full bg-white text-dark-bg font-black py-4 rounded-2xl hover:bg-accent transition-colors disabled:opacity-50"
                >
                  GENERATE_SECURE_LINK
                </button>

                {generatedLink && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-accent/5 border border-accent/20 rounded-2xl space-y-4"
                  >
                    <p className="text-xs font-mono text-accent break-all">{generatedLink}</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={copyLink}
                        className="flex-1 bg-accent/10 text-accent py-3 rounded-xl text-xs font-bold hover:bg-accent/20 transition-all flex items-center justify-center gap-2"
                      >
                        <Copy className="w-4 h-4" /> Copy Link
                      </button>
                      <a 
                        href={generatedLink}
                        target="_blank"
                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Live Preview */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <SettingsIcon className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Live Form Preview</span>
              </div>
              <div className="scale-90 origin-top opacity-50 pointer-events-none grayscale">
                <FeedbackForm />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {feedback.length === 0 && !loading && (
              <div className="col-span-full py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/5">
                  <MessageSquare className="w-10 h-10 text-gray-700" />
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">No feedback data recorded yet</p>
              </div>
            )}

            {feedback.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6 hover:border-accent/30 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{item.status}</span>
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-medium text-white italic leading-relaxed">"{item.comment}"</p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.client_name}</h4>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.project_name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <button 
                    onClick={() => handleApprove(item.id)}
                    disabled={item.status === "approved"}
                    className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                      item.status === "approved" 
                        ? "bg-accent/20 text-accent border border-accent/20 cursor-default" 
                        : "bg-white/5 hover:bg-accent hover:text-dark-bg"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" /> 
                    {item.status === "approved" ? "ALREADY_LIVE" : "APPROVE_REVIEW"}
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="w-14 h-14 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-2xl flex items-center justify-center transition-all border border-white/5"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
