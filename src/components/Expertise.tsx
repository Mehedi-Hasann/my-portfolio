"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Expertise() {
  const skills = [
    { 
      name: 'Frontend Development', 
      desc: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
      color: 'text-blue-400',
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )
    },
    { 
      name: 'Backend Development', 
      desc: ['Node.js','Express.js','TypeScript', 'RESTful APIs'],
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
      desc: ['JWT', 'Bcrypt', 'OAuth Integration', 'Stripe Payments'],
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
    <section className="relative pb-24 pt-0 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="expertise">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
      >
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] border border-white/5 relative group transition-all duration-500"
          >
            <div className={`w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-lg md:rounded-xl lg:rounded-2xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 lg:mb-8 ${skill.color} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:w-7 md:h-7 lg:w-8 lg:h-8">
                {skill.icon}
              </svg>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-on-surface mb-3 md:mb-4 lg:mb-6 font-space-grotesk tracking-tight group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {skill.desc.map((item, i) => (
                <li key={i} className="flex items-center gap-2 md:gap-3 text-on-surface-variant text-xs md:text-sm opacity-90 font-bold">
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
