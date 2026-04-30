"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [allLeads, setAllLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setAllLeads(data);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = Array.isArray(allLeads) ? allLeads.filter(lead => {
    const name = lead.name || "";
    const company = lead.company || "";
    const email = lead.email || "";
    
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  }) : [];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Leads Management</h1>
          <p className="text-gray-400">Review and manage your strategy consultation requests.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-sm transition-all">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-dark-bg font-bold px-4 py-2 rounded-xl text-sm transition-all">
            Add Manual Lead
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass-effect rounded-2xl p-4 border border-white/10 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search leads by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative shrink-0">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-8 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer min-w-[140px]"
            >
              <option value="All" className="bg-dark-surface">All Statuses</option>
              <option value="New" className="bg-dark-surface">New</option>
              <option value="Contacted" className="bg-dark-surface">Contacted</option>
              <option value="In Progress" className="bg-dark-surface">In Progress</option>
              <option value="Closed" className="bg-dark-surface">Closed</option>
            </select>
          </div>
          
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-xl transition-all">
            <MoreHorizontal className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-effect rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-white/10">
                <th className="px-6 py-5 font-bold">Client & Company</th>
                <th className="px-6 py-5 font-bold">Category</th>
                <th className="px-6 py-5 font-bold">Budget Range</th>
                <th className="px-6 py-5 font-bold">Status</th>
                <th className="px-6 py-5 font-bold">Submission Date</th>
                <th className="px-6 py-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      <p>FETCHING_REAL_TIME_DATA...</p>
                    </div>
                  </td>
                </tr>
              ) : filteredLeads.map((lead, index) => (
                <motion.tr 
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-white group-hover:text-accent transition-colors">{lead.name}</span>
                      <span className="text-sm text-gray-500">{lead.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-300">{lead.type}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-300">{lead.budget}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                      lead.status === "New" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      lead.status === "Contacted" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                      lead.status === "In Progress" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                      "bg-green-500/10 text-green-400 border border-green-500/20"
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-400">{lead.date}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-500 hover:text-accent hover:bg-accent/10 rounded-lg transition-all" title="Send Email">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-accent hover:bg-accent/10 rounded-lg transition-all" title="Call">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="View Details">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {!loading && filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="h-10 w-10 opacity-20" />
                      <p>No leads found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-sm text-gray-500">
          <p>Showing <span className="text-white font-medium">{filteredLeads.length}</span> of <span className="text-white font-medium">{allLeads.length}</span> results</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 disabled:opacity-30 transition-all" disabled>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-lg border border-white/10 bg-accent text-dark-bg font-bold transition-all">
              1
            </button>
            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all">
              2
            </button>
            <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
