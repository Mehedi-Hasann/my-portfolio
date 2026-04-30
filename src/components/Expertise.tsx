"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Expertise() {
  const skills = [
    { 
      name: 'Frontend Development', 
      desc: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'text-blue-400',
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    { 
      name: 'Backend Development', 
      desc: ['Node.js & Express', 'Python', 'Better Auth', 'RESTful APIs'],
      color: 'text-green-400',
      icon: (
        <path d="M4 17h16M4 12h16M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    { 
      name: 'Database & ORM', 
      desc: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Database Design'],
      color: 'text-purple-400',
      icon: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    { 
      name: 'Modern Security', 
      desc: ['JWT & Bcrypt', 'OAuth Integration', 'Stripe Payments', 'SSL/TLS'],
      color: 'text-pink-400',
      icon: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "circOut" }
    }
  } as const;

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="expertise">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <header className="mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-space-grotesk text-on-surface"
        >
          Core <span className="text-gradient">Expertise</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl opacity-80 leading-relaxed"
        >
          Mastering the modern stack to architect seamless, scalable digital solutions that drive global transformation.
        </motion.p>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative group transition-all duration-500"
          >
            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${skill.color} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                {skill.icon}
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-6 font-space-grotesk tracking-tight group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h3>
            <ul className="space-y-3">
              {skill.desc.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm opacity-90 font-bold">
                  <span className={`w-1.5 h-1.5 rounded-full bg-current ${skill.color}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
