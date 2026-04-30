"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tighter text-white font-space-grotesk cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Mehedi <span className="text-blue-500">Hasan</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm text-on-surface-variant hover:text-blue-400 transition-colors font-space-grotesk font-bold tracking-tight uppercase">About</Link>
          <Link href="#projects" className="text-sm text-on-surface-variant hover:text-blue-400 transition-colors font-space-grotesk font-bold tracking-tight uppercase">Projects</Link>
          <Link href="#expertise" className="text-sm text-on-surface-variant hover:text-blue-400 transition-colors font-space-grotesk font-bold tracking-tight uppercase">Expertise</Link>
          <Link href="#contact" className="text-sm text-on-surface-variant hover:text-blue-400 transition-colors font-space-grotesk font-bold tracking-tight uppercase">Contact</Link>
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-on-surface hover:text-blue-400 hover:border-blue-400/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <a 
            href="/Mehedi_Hasan.pdf" 
            target="_blank"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-on-surface font-bold rounded-full shadow-lg active:scale-95 transform transition-all text-sm"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button - could be added if needed, but keeping it simple for now */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-on-surface transition-all"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
