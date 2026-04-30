"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Briefcase,
  DollarSign
} from "lucide-react";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalLeads = Array.isArray(leads) ? leads.length : 0;
  const activeProjects = Array.isArray(leads) ? leads.filter(l => l.status === "In Progress").length : 0;
  const closedLeads = Array.isArray(leads) ? leads.filter(l => l.status === "Closed").length : 0;
  const conversionRate = totalLeads > 0 ? ((closedLeads / totalLeads) * 100).toFixed(1) : "0";
  
  // Mock revenue calculation: ₹50k per closed lead
  const estimatedRevenue = (closedLeads * 50000).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  });

  const stats = [
    { 
      label: "Total Leads", 
      value: totalLeads.toString(), 
      change: "+12.5%", 
      isPositive: true, 
      icon: Users,
      color: "bg-blue-500/10 text-blue-500"
    },
    { 
      label: "Active Projects", 
      value: activeProjects.toString(), 
      change: "+5.2%", 
      isPositive: true, 
      icon: Briefcase,
      color: "bg-accent/10 text-accent"
    },
    { 
      label: "Conversion Rate", 
      value: `${conversionRate}%`, 
      change: "-2.1%", 
      isPositive: false, 
      icon: TrendingUp,
      color: "bg-purple-500/10 text-purple-500"
    },
    { 
      label: "Estimated Revenue", 
      value: estimatedRevenue, 
      change: "+18.4%", 
      isPositive: true, 
      icon: DollarSign,
      color: "bg-green-500/10 text-green-500"
    },
  ];

  const recentLeads = Array.isArray(leads) ? leads.slice(0, 5) : [];
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back, Admin. Here's what's happening with Aethel Solutions today.</p>
      </div>      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <button className="text-gray-500 hover:text-white">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                {loading ? (
                  <div className="h-8 w-16 bg-white/5 animate-pulse rounded-md" />
                ) : (
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                )}
                {!loading && (
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.isPositive ? "text-green-400" : "text-red-400"}`}>
                    {stat.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Leads Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass-effect rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Leads</h2>
            <Link href="/admin/leads" className="text-sm text-accent hover:underline">View all leads</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/5">
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Company</th>
                  <th className="px-6 py-4 font-semibold">Budget</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500 font-mono text-xs animate-pulse">
                      SYNCING_DASHBOARD_METRICS...
                    </td>
                  </tr>
                ) : recentLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500 font-mono text-xs">
                      NO_RECENT_ACTIVITY_DETECTED
                    </td>
                  </tr>
                ) : recentLeads.map((lead: any) => (
                  <tr key={lead.id} className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{lead.name}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{lead.company}</td>
                    <td className="px-6 py-4 text-gray-400">{lead.budget}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        lead.status === "New" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                        lead.status === "Contacted" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        lead.status === "In Progress" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                        "bg-green-500/10 text-green-400 border border-green-500/20"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-right text-sm">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Activity Feed / Notifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-3xl border border-white/10 p-6 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-6">Upcoming Tasks</h2>
          <div className="space-y-6">
            {[
              { title: "Call Rahul Sharma", time: "2:30 PM Today", icon: Clock, color: "text-amber-400" },
              { title: "Strategy Meeting", time: "4:00 PM Today", icon: Briefcase, color: "text-blue-400" },
              { title: "Review Website Audit", time: "Tomorrow", icon: CheckCircle, color: "text-green-400" },
            ].map((task, i) => (
              <div key={i} className="flex gap-4 group">
                <div className={`h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <task.icon className={`h-5 w-5 ${task.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{task.title}</h4>
                  <p className="text-xs text-gray-500">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-bold mb-1">Growth Tip</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                LinkedIn outreach is showing 20% higher conversion this week. Consider increasing daily message limits.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
              <TrendingUp className="h-24 w-24 text-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
