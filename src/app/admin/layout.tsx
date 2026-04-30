"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Search,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Feedback", href: "/admin/feedback", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // If we're on the login page, don't show the sidebar/header
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white flex overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="hidden md:flex flex-col bg-dark-surface border-r border-white/10 relative z-20"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen ? (
              <motion.div
                key="logo-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-dark-bg">
                  A
                </div>
                <span className="font-bold text-xl tracking-tight">Aethel<span className="text-accent">Admin</span></span>
              </motion.div>
            ) : (
              <motion.div
                key="logo-compact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-dark-bg mx-auto"
              >
                A
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-accent text-dark-bg font-semibold shadow-lg shadow-accent/20" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "" : "group-hover:text-accent"}`} />
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {item.name}
                  </motion.span>
                )}
                {isActive && isSidebarOpen && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
          >
            <Menu className="h-5 w-5" />
            {isSidebarOpen && <span>Collapse</span>}
          </button>
          <Link
            href="/"
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all mt-2"
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-dark-surface border border-white/10 rounded-lg text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-y-0 left-0 w-72 bg-dark-surface z-50 p-6 md:hidden flex flex-col"
            >
              <div className="flex items-center gap-2 mb-10">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-dark-bg">
                  A
                </div>
                <span className="font-bold text-xl">Aethel<span className="text-accent">Admin</span></span>
              </div>
              <nav className="flex-1 space-y-2">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                        isActive 
                          ? "bg-accent text-dark-bg font-semibold" 
                          : "text-gray-400 hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="pt-6 border-t border-white/10">
                <Link
                  href="/"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-dark-bg/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="relative max-w-md w-full hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search leads, projects..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-dark-bg" />
            </button>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-accent to-amber-200 p-[1px]">
                <div className="h-full w-full rounded-full bg-dark-surface flex items-center justify-center font-bold text-accent">
                  AU
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
