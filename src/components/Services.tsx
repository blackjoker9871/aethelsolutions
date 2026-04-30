"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Zap, 
  LineChart, 
  MessageSquare, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "High-Performance Websites",
    desc: "Blazing fast, Next.js powered websites optimized for maximum visibility and conversion.",
    className: "md:col-span-2 md:row-span-2",
    delay: 0,
  },
  {
    icon: MessageSquare,
    title: "Business Automation",
    desc: "Streamline workflows with WhatsApp bots, CRM integrations, and smart lead systems.",
    className: "",
    delay: 0.1,
  },
  {
    icon: LineChart,
    title: "Growth Optimization",
    desc: "Turn underperforming assets into revenue drivers with expert audits.",
    className: "",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Speed & SEO Mastery",
    desc: "Achieve sub-1.5s LCP scores and rank higher on search engines.",
    className: "",
    delay: 0.3,
  },
  {
    icon: Database,
    title: "Custom Web Apps",
    desc: "Tailored SaaS solutions and internal tools built to scale.",
    className: "md:col-span-2",
    delay: 0.4,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4"
          >
            <div className="w-10 h-[1px] bg-accent" />
            Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-[-0.05em] leading-[0.9]"
          >
            Tailored solutions <br />
            <span className="text-gray-500">designed to scale.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isMainCard = service.title === "High-Performance Websites";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`glass-effect p-10 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer hover:border-accent/30 transition-colors relative overflow-hidden ${service.className}`}
              >
                {/* Advanced Computer Window Preview */}
                {isMainCard && (
                  <div className="absolute top-10 right-[-10%] w-[65%] h-[150%] -rotate-[15deg] pointer-events-none opacity-40 group-hover:opacity-100 group-hover:rotate-[-10deg] group-hover:scale-105 transition-all duration-1000 ease-[0.22, 1, 0.36, 1] hidden md:block">
                    <div className="w-full h-full glass-effect rounded-[2rem] border border-white/20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]">
                      {/* Window Frame Header */}
                      <div className="w-full h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 backdrop-blur-2xl">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
                        </div>
                        {/* URL Bar */}
                        <div className="w-3/5 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center px-3">
                          <div className="w-full h-1 bg-white/10 rounded-full" />
                        </div>
                        <div className="flex gap-2">
                          <div className="w-4 h-4 rounded-md bg-white/5" />
                        </div>
                      </div>

                      {/* Scrolling Browser Content with Page Changes */}
                      <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
                        <motion.div 
                          animate={{ 
                            y: [0, -800, -800, 0],
                            opacity: [1, 1, 0, 1]
                          }}
                          transition={{ 
                            duration: 25, 
                            repeat: Infinity, 
                            times: [0, 0.4, 0.5, 1],
                            ease: "easeInOut" 
                          }}
                          className="w-full"
                        >
                          {/* Page 1 */}
                          <div className="relative">
                            <img 
                              src="/premium_website_layout_1777537927835.png" 
                              alt="Landing Page" 
                              className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40" />
                          </div>

                          {/* Page Change Buffer */}
                          <div className="h-[200px] bg-[#0A0A0A] flex items-center justify-center">
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-12 h-1 bg-accent/20 rounded-full" 
                            />
                          </div>

                          {/* Page 2 */}
                          <div className="relative">
                            <img 
                              src="/premium_dashboard_layout_1777538188161.png" 
                              alt="Dashboard UI" 
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </motion.div>

                        {/* Mouse Cursor Animation */}
                        <motion.div
                          animate={{
                            x: [100, 300, 200, 150, 400],
                            y: [200, 400, 600, 300, 500],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute z-50 pointer-events-none drop-shadow-2xl"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L3 14.5905V3L13.7959 11.082L10.3644 11.2323L10.1873 11.2396L10.1066 11.3963L8.52926 14.5905L6.15546 12.5937L6.00977 12.4712L5.82397 12.4172L5.65376 12.3673Z" fill="white" stroke="black" strokeWidth="1.5"/>
                          </svg>
                          {/* Magnetic Ring around cursor */}
                          <motion.div 
                            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -left-2 w-10 h-10 border border-accent rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-dark-bg transition-colors duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 tracking-tighter">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
