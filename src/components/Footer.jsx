import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#0a0d14] py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-900 border border-slate-700/80 rounded-xl flex items-center justify-center font-extrabold text-sm text-white">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              SS
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              {personalDetails.name}
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              AI Engineer × Creative Technologist
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Surampudi Shashank Sai. All rights reserved.</p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors flex items-center gap-2 text-xs font-mono"
          aria-label="Back to Top"
        >
          <span>TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
