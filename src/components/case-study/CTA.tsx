"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Props = {
  liveLink: string;
  githubFrontend: string;
  githubBackend?: string;
};

export default function CTA({ liveLink, githubFrontend, githubBackend }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative glass-card p-12 md:p-20 rounded-[3.5rem] border border-blue-500/20 text-center space-y-10 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]"></div>

      <div className="relative z-10 space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight">
          Ready to see it in <span className="text-gradient">Action?</span>
        </h3>
        <p className="text-xl text-on-surface-variant opacity-80 max-w-2xl mx-auto">
          Explore the live deployment or deep dive into the source code on GitHub.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        <motion.a
          href={liveLink}
          target="_blank"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)] transition-all"
        >
          <FiExternalLink className="text-xl" />
          <span>Launch Live Demo</span>
        </motion.a>
        
        <motion.a
          href={githubFrontend}
          target="_blank"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-10 py-5 bg-on-surface/5 border border-on-surface/10 font-bold rounded-2xl hover:bg-on-surface/10 transition-all"
        >
          <FiGithub className="text-xl" />
          <span>{githubBackend ? "Frontend Repo" : "Explore Source"}</span>
        </motion.a>

        {githubBackend && (
          <motion.a
            href={githubBackend}
            target="_blank"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-5 bg-on-surface/5 border border-on-surface/10 font-bold rounded-2xl hover:bg-on-surface/10 transition-all"
          >
            <FiGithub className="text-xl" />
            <span>Backend Repo</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}