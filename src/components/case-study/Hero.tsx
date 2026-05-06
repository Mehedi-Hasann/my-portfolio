"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

type Props = {
  title: string;
  subtitle: string;
  liveLink: string;
  githubLink: string;
};

export default function Hero({ title, subtitle, liveLink, githubLink }: Props) {
  return (
    <section className="relative pt-20 pb-10">
     
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-blue-500 transition-colors mb-10 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-space-grotesk">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className={i >= 6 ? "text-gradient" : ""}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 opacity-90">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href={liveLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <FiExternalLink />
            Live Demo
          </motion.a>
          <motion.a
            href={githubLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-on-surface/5 border border-on-surface/10 font-bold rounded-2xl hover:bg-on-surface/10 transition-all"
          >
            <FiGithub />
            Source Code
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}