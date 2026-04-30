"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden font-poppins" id="about">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <header className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-space-grotesk text-on-surface"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto rounded-full"></div>
      </header>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left: Identity Card */}
        <motion.aside 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 glass-card rounded-[3.5rem] p-12 border border-white/10 relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden mb-12 glass-card border border-white/10 group">
            <Image 
              src="/portfolio_img.png" 
              alt="Mehedi Hasan"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300 font-bold uppercase tracking-[0.2em]">Available for work</span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight mb-4 text-on-surface uppercase font-space-grotesk">Md Mehedi Hasan</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 opacity-80 italic">
            &quot;Passionate about creating efficient code and elegant user experiences.&quot;
          </p>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            {[
              { name: 'GitHub', icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>, href: 'https://github.com/Mehedi-Hasann' },
              { name: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>, href: 'https://www.linkedin.com/in/mehedi-hasan-35a681324/' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 text-gray-400 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </motion.a>
              
            ))}
            <Link href="#contact">
              <motion.div
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6' }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 text-gray-400 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </motion.div>
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <a 
              href="/Mehedi_Hasan.pdf" 
              target="_blank"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-on-surface font-bold rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.aside>
        

        {/* Right: Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Bio Area */}
          <motion.article 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10 group-hover:bg-blue-500/10 transition-colors duration-700"></div>
            <h4 className="text-3xl md:text-5xl font-bold mb-10 text-on-surface leading-tight font-space-grotesk">Professional Profile</h4>
            <div className="space-y-5 text-on-surface-variant text-lg md:text-xl leading-relaxed opacity-90">
              <p>
                Hi! I&apos;m <span className="text-on-surface font-bold">Md Mehedi Hasan</span>, a visionary developer and dedicated Computer Science student at 
                <span className="text-blue-400 font-semibold"> Chittagong University of Engineering & Technology (CUET)</span>. 
                I bridge the gap between complex algorithmic problem-solving and high-performance full-stack development.
              </p>
              <p>
                With a strong foundation in <span className="text-pink-400 font-semibold">Competitive Programming</span> (350+ CF solved, 3* CodeChef), 
                I approach every project with a mindset geared towards efficiency, scalability, and elegant architecture. My expertise spans the 
                modern web stack, from <span className="text-on-surface">Next.js</span> and <span className="text-on-surface">TypeScript</span> to <span className="text-on-surface">Prisma</span> and <span className="text-on-surface">PostgreSQL</span>.
              </p>
              <p>
                On the backend, I specialize in building robust, high-performance architectures using <span className="text-blue-400 font-semibold">Node.js</span> and <span className="text-on-surface font-bold">NestJS</span>. 
                I am deeply experienced in designing relational and non-relational database schemas with <span className="text-blue-400 font-semibold">PostgreSQL</span> and <span className="text-green-400 font-semibold">MongoDB</span>, 
                often leveraging <span className="text-on-surface">Prisma ORM</span> for type-safe data management.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
