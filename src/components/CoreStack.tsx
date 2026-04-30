"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiGit,
  SiC,
  SiCplusplus,
  SiStripe,
  SiJsonwebtokens,
  SiAuth0,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techStack = [
  { name: "C", icon: <SiC />, color: "text-blue-600", glow: "shadow-blue-600/20" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-500", glow: "shadow-blue-500/20" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", glow: "shadow-yellow-400/20" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", glow: "shadow-blue-400/20" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400", glow: "shadow-cyan-400/20" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", glow: "shadow-white/20" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", glow: "shadow-green-500/20" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300", glow: "shadow-gray-300/20" },
  { name: "NestJS", icon: <SiNestjs />, color: "text-red-500", glow: "shadow-red-500/20" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300", glow: "shadow-blue-300/20" },
  { name: "Prisma ORM", icon: <SiPrisma />, color: "text-white", glow: "shadow-white/20" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300", glow: "shadow-cyan-300/20" },
  { name: "Better Auth", icon: <SiAuth0 />, color: "text-orange-600", glow: "shadow-orange-600/20" },
  { name: "Stripe", icon: <SiStripe />, color: "text-blue-400", glow: "shadow-blue-400/20" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "text-pink-500", glow: "shadow-pink-500/20" },
  { name: "Git", icon: <SiGit />, color: "text-orange-500", glow: "shadow-orange-500/20" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
} as const;

export default function CoreStack() {
  return (
    <section className="relative px-6 overflow-hidden bg-background font-poppins" id="tech">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight font-space-grotesk text-on-surface"
          >
            Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-sm md:text-base uppercase tracking-[0.3em] opacity-70 font-medium"
          >
            My Technical Arsenal
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-12 justify-items-center"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center group w-full"
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full glass-card flex items-center justify-center text-4xl md:text-5xl transition-all duration-500 group-hover:${tech.glow} border border-white/5 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <span className={`${tech.color} transition-all duration-500 group-hover:scale-110 drop-shadow-sm`}>
                  {tech.icon}
                </span>
              </div>

              <p className="mt-5 text-xs md:text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors uppercase tracking-[0.1em] text-center opacity-80 group-hover:opacity-100">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <header className="mt-30 mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight font-space-grotesk text-on-surface"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-sm md:text-base uppercase tracking-[0.3em] opacity-70 font-medium"
          >
            My Technical Level
          </motion.p>
        </header>
      </div>
    </section>
  );
}
