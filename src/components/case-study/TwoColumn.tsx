"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

type Props = {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
};

export default function TwoColumn({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 rounded-[2.5rem] border border-red-500/10"
      >
        <h3 className="text-2xl font-bold mb-8 font-space-grotesk flex items-center gap-3 text-red-400">
          <FiAlertCircle />
          {leftTitle}
        </h3>
        <ul className="space-y-4">
          {leftItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-on-surface-variant opacity-90">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 rounded-[2.5rem] border border-green-500/10"
      >
        <h3 className="text-2xl font-bold mb-8 font-space-grotesk flex items-center gap-3 text-green-400">
          <FiCheckCircle />
          {rightTitle}
        </h3>
        <ul className="space-y-4">
          {rightItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-on-surface-variant opacity-90">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2.5 shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}