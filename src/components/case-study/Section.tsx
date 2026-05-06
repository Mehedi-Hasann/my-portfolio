"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-space-grotesk">{title}</h2>
      </div>
      <div className="text-on-surface-variant text-lg leading-relaxed opacity-90 pl-5 border-l-2 border-on-surface/5">
        {children}
      </div>
    </motion.section>
  );
}