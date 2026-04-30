"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

export default function Hero() {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "circOut" },
    },
  } as const;

  const badgeVariants = (direction: "left" | "right") => ({
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -50 : 50, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 1, ease: "circOut", delay: 0.8 }
    },
  }) as const;

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background font-poppins" 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[100px]"
        ></motion.div>
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Side Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl md:text-2xl font-medium text-blue-400 tracking-wide">Hi, I'm</h3>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              {["Md Mehedi", "Hasan"].map((word, i) => (
                <motion.span 
                  key={i}
                  className="inline-block mr-4 text-gradient"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed opacity-90"
          >
            A dedicated <span className="text-blue-400 font-semibold">Competitive Programmer</span> and 
            <span className="text-pink-400 font-semibold"> Full-Stack Developer</span>. I thrive on solving 
            complex algorithmic challenges and architecting efficient, scalable web applications with a focus on precision and performance.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-on-surface font-bold rounded-full overflow-hidden transition-all shadow-lg flex items-center justify-center"
            >
              <span className="relative z-10">View Profile</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 glass-card text-on-surface font-semibold rounded-full border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-center"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>

        </div>

        {/* Right Side Image & Stats */}
        <div className="relative flex justify-center lg:justify-end perspective-1000">
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] group"
          >
            {/* Animated Ring */}
            <div className="absolute inset-[-20px] rounded-full border border-blue-500/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-[-10px] rounded-full border border-pink-500/20 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="relative w-full h-full rounded-full p-4 glass-card border-white/10 overflow-hidden group-hover:border-blue-500/30 transition-colors duration-700">
              <img 
                src=".././portfolio_img.png" 
                alt="Mehedi Hasan" 
                className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Floating Stat Cards */}
            {/* Card 1: Codeforces */}
            <motion.div 
              variants={badgeVariants("left")}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -left-8 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-4 z-20 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <a href="https://codeforces.com/profile/Mehethe_hasan" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="4" height="9" fill="#BFC9D2"/>
                  <rect x="10" y="3" width="4" height="17" fill="#3B82F6"/>
                  <rect x="17" y="7" width="4" height="13" fill="#EF4444"/>
                </svg>
              </a>
              <a href="https://codeforces.com/profile/Mehethe_hasan">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Codeforces</p>
                <p className="text-on-surface font-bold text-sm">350+ Solved</p>
              </a>
            </motion.div>

            {/* Card 2: CodeChef */}
            <motion.div 
              variants={badgeVariants("right")}
              animate={{ y: [0, 15, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-12 -right-8 md:-right-12 glass-card p-4 rounded-2xl flex items-center gap-4 z-20 border border-white/10 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
            >
              <a href="https://www.codechef.com/users/mehedi_067" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10C40 10 32 18 32 28C32 30 33 32 34 34L30 45H70L66 34C67 32 68 30 68 28C68 18 60 10 50 10Z" fill="#F0E6D2" stroke="#5C3B1B" strokeWidth="2"/>
                  <path d="M35 45L38 55H62L65 45" fill="#F0E6D2" stroke="#5C3B1B" strokeWidth="2"/>
                  <circle cx="50" cy="70" r="15" fill="#F0E6D2" stroke="#5C3B1B" strokeWidth="2"/>
                  <text x="42" y="72" fill="#5C3B1B" fontSize="10" fontWeight="bold">&lt;</text>
                  <text x="54" y="72" fill="#5C3B1B" fontSize="10" fontWeight="bold">&gt;</text>
                  <circle cx="46" cy="68" r="1.5" fill="#5C3B1B"/>
                  <circle cx="54" cy="68" r="1.5" fill="#5C3B1B"/>
                </svg>
              </a>
              <a href="https://www.codechef.com/users/mehedi_067">
                <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">CodeChef</p>
                <p className="text-on-surface font-bold text-sm">3★ (1615 Max)</p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
