"use client";

import { motion } from "framer-motion";

export default function TechBadge({ name }: { name: string }) {
  return (
    <motion.span 
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)' }}
      className="px-5 py-2 rounded-xl bg-on-surface/5 border border-on-surface/10 text-sm font-bold tracking-wide transition-colors cursor-default"
    >
      {name}
    </motion.span>
  );
}