"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    setIsPending(false);

    if (result.success) {
      setIsSent(true);
      console.log("Form submitted successfully!");
    } else {
      setError(result.error || "An unexpected error occurred.");
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "mehedi6to7@gmail.com",
      icon: (
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    {
      label: "Phone",
      value: "+880 1719 730216",
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        </>
      )
    }
  ];

  return (
    <section className="relative py-10 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="contact">
      {/* Decorative Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="glass-card rounded-[3.5rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 tracking-tight font-space-grotesk text-on-surface">
                Let&apos;s <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg lg:text-xl opacity-80 leading-relaxed max-w-md">
                Have a vision for a project? Let&apos;s architect the future together with precision and passion.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass-card flex items-center justify-center text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="md:w-6 md:h-6">
                      {info.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-0.5 md:mb-1">{info.label}</p>
                    <p className="text-on-surface text-sm sm:text-base md:text-lg font-medium group-hover:text-blue-400 transition-colors truncate sm:truncate-none">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-green-500/20 text-center space-y-4 md:space-y-6"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface font-space-grotesk">Message Sent!</h3>
                <p className="text-on-surface-variant text-sm md:text-lg">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-blue-400 font-bold uppercase tracking-widest text-sm hover:text-blue-300 transition-colors pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 border border-white/10 space-y-6 md:space-y-8 shadow-2xl relative"
              >
                <div className="md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">Your Name</label>
                    <input 
                      required
                      name="name"
                      className="w-full bg-on-surface/5 border border-on-surface/10 focus:border-blue-500/50 focus:bg-on-surface/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-on-surface transition-all outline-none" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">Email Address</label>
                    <input 
                      required
                      name="email"
                      className="w-full bg-on-surface/5 border border-on-surface/10 focus:border-blue-500/50 focus:bg-on-surface/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-on-surface transition-all outline-none" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">Message</label>
                  <textarea 
                    required
                    name="message"
                    className="w-full bg-on-surface/5 border border-on-surface/10 focus:border-blue-500/50 focus:bg-on-surface/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-on-surface transition-all outline-none resize-none" 
                    placeholder="How can I help you today?" 
                    rows={4}
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 text-xs sm:text-sm px-2 animate-pulse">{error}</p>
                )}
                
                <motion.button 
                  whileHover={{ scale: isPending ? 1 : 1.02, boxShadow: isPending ? "none" : "0 0 30px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: isPending ? 1 : 0.98 }}
                  type="submit"
                  disabled={isPending}
                  className={`w-full ${isPending ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 shadow-xl text-sm md:text-lg flex items-center justify-center gap-2 md:gap-3`}
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
