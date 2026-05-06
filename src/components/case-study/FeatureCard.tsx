"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  title: string;
  desc: string;
};

export default function FeatureCard({ title, desc }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card p-8 rounded-3xl border border-white/5 group relative overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 text-2xl group-hover:scale-110 transition-transform">
        <FiCheckCircle />
      </div>
      
      <h3 className="text-xl font-bold mb-3 font-space-grotesk">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">{desc}</p>
    </motion.div>
  );
}