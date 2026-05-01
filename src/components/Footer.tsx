"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  const socialLinks = [
    {
  name: 'Facebook',
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.5v-3h3V9.5c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2v2.4h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z"/>
    </svg>
  ),
  href: 'https://www.facebook.com/Mehedihasa67/',
},
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/mehedi-hasan-35a681324/", 
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      )
    },
    { 
      
      name: "GitHub", 
      href: "https://github.com/Mehedi-Hasann", 
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      )
    },

    { 
      name: "Email", 
      href: "https://mail.google.com/mail/u/0/#compose/to=mehedi6to7@gmail.com",
      icon: (
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      )
    }
  ];

  return (
    <footer className="relative py-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-white/5 overflow-hidden font-poppins">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-bold text-white font-space-grotesk tracking-tighter uppercase">
            Mehedi <span className="text-blue-500">Hasan</span>
          </span>
          <p className="text-xs text-on-surface-variant opacity-60 tracking-widest uppercase">
            © 2024 Engineering the Digital Frontier
          </p>
        </div>

        <nav className="flex gap-10">
          {socialLinks.map((social) => (
            <motion.a 
              key={social.name} 
              href={social.href}
              whileHover={{ y: -5, color: "#3b82f6" }}
              className="text-on-surface-variant transition-colors flex items-center font-bold text-2xl gap-3 font-bold tracking-widest uppercase text-[10px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                {social.icon}
              </svg>
              {social.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
