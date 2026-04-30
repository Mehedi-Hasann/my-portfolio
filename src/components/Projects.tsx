"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: 'MediStore',
      desc: 'An enterprise-grade online medicine shop with role-based access for Customers, Sellers, and Admins.',
      tags: ['Next.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Better Auth'],
      image: '/medi_image.png',
      color: 'from-blue-600 to-cyan-400',
      github: 'https://github.com/Mehedi-Hasann/MediStore-Frontend',
      live: 'https://medi-store-one.vercel.app/'
    },
    // {
    //   title: 'AlgoFlow',
    //   desc: 'A high-performance algorithm visualization engine designed to demonstrate complex data structures and dynamic programming concepts with interactive neural paths.',
    //   tags: ['TypeScript', 'C++', 'React', 'Framer Motion'],
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    //   color: 'from-pink-500 to-purple-500',
    //   github: 'https://github.com/Mehedi-Hasann',
    //   live: '#'
    // }
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "circOut" }
    }
  } as const;

  return (
    <section className="relative pb-15  px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="projects">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <header className="mb-24 text-center">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tight font-space-grotesk text-on-surface"
        >
          Selected <span className="text-gradient">Creations</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl opacity-80 leading-relaxed"
        >
          A curated showcase of architectural precision, high-impact engineering, and seamless user experiences.
        </motion.p>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="group relative flex flex-col"
          >
            {/* Browser Mockup Image Container */}
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-blue-900/10"
            >
              {/* Browser Header */}
              <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-5 gap-2 relative z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 flex-1 h-5 bg-white/5 rounded-md flex items-center px-3">
                  <div className="w-20 h-1 bg-white/10 rounded-full"></div>
                </div>
              </div>

              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" 
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* View Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-blue-500/5">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    className="px-8 py-3 bg-white text-black font-bold rounded-full scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl"
                  >
                    View Case Study
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Content Container */}
            <div className="mt-10 px-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-on-surface font-space-grotesk tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)' }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-on-surface hover:text-white transition-all shadow-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                  <motion.a 
                    href={project.live}
                    target="_blank"
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0062ff] border border-blue-400/30 text-xs font-black text-white uppercase tracking-[0.15em] transition-all shadow-[0_10px_30px_-10px_rgba(0,98,255,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(0,98,255,0.6)]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Link
                  </motion.a>
                </div>
              </div>

              <p className="text-on-surface-variant text-lg leading-relaxed opacity-80 mb-8 line-clamp-3 font-medium">
                {project.desc}
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-4 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[12px] font-bold uppercase tracking-widest text-blue-300 group-hover:text-blue-200 group-hover:bg-blue-500/20 transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
