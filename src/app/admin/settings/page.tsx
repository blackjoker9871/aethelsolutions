"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Palette,
  Check
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { name: "Profile", icon: User },
    { name: "Notifications", icon: Bell },
    { name: "Security", icon: Shield },
    { name: "General", icon: Globe },
    { name: "Appearance", icon: Palette },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Settings</h1>
        <p className="text-gray-400">Manage your administrative preferences and account security.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.name 
                  ? "bg-accent text-dark-bg" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-3xl border border-white/10 p-8 space-y-8"
          >
            <div className="flex justify-between items-center pb-6 border-b border-white/10">
              <h2 className="text-xl font-bold">{activeTab} Settings</h2>
              <button className="bg-accent hover:bg-accent-hover text-dark-bg font-bold px-6 py-2 rounded-xl text-sm transition-all flex items-center gap-2">
                <Check className="h-4 w-4" />
                Save Changes
              </button>
            </div>

            {activeTab === "Profile" && (
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-accent to-amber-200 p-[1px]">
                    <div className="h-full w-full rounded-full bg-dark-surface flex items-center justify-center font-bold text-2xl text-accent">
                      AU
                    </div>
                  </div>
                  <div>
                    <button className="text-sm font-bold text-accent hover:underline mb-1">Change Avatar</button>
                    <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Admin User"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="admin@aethelsolutions.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bio</label>
                  <textarea 
                    rows={4}
                    defaultValue="Managing growth and digital transformation for Aethel Solutions clients."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab !== "Profile" && (
              <div className="py-20 text-center text-gray-500">
                <p>Content for {activeTab} will be available in the next version.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
