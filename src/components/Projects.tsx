"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: 'MediStore',
      desc: 'An enterprise-grade online medicine shop with role-based access for Customers, Sellers, and Admins. Built with high-security standards and real-time inventory management.',
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
    <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="projects">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-space-grotesk text-on-surface">
              Selected <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl text-lg md:text-xl opacity-80 leading-relaxed">
              A curated showcase of architectural precision and high-impact engineering.
            </p>
          </div>
          <motion.a 
            href="#"
            whileHover={{ x: 10 }}
            className="group flex items-center gap-3 text-blue-400 font-bold tracking-widest uppercase text-sm"
          >
            Explore Archive 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
        </motion.div>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="group relative glass-card rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Project Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              
              {/* Tags Overlay */}
              <div className="absolute top-8 left-8 flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-on-surface/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-12 space-y-6 relative">
              <div className={`absolute top-0 left-12 right-12 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-on-surface font-space-grotesk tracking-tight">
                {project.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-80">
                {project.desc}
              </p>

              <footer className="pt-8 border-t border-white/5 flex justify-between items-center">
                <motion.a 
                  href={project.live}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-on-surface font-bold tracking-widest uppercase text-xs"
                >
                  Live View
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href={project.github}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </footer>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
