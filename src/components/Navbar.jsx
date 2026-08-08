import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav link based on scroll position
      const sections = ['about', 'philosophy', 'experience', 'projects', 'designs', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Designs & Media', href: '#designs', id: 'designs' },
    { name: 'Skills & Services', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a href="#about" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-11 h-11 bg-slate-900 border border-slate-700/80 rounded-xl flex items-center justify-center font-extrabold text-lg text-white group-hover:border-sky-400 transition-colors">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                SS
              </span>
            </div>
          </div>
          <div>
            <span className="font-extrabold text-sm tracking-widest text-white uppercase block leading-tight group-hover:text-sky-400 transition-colors">
              Shashank Sai
            </span>
            <span className="text-[10px] text-sky-400 font-mono tracking-widest block uppercase">
              AI Engineer × Creative
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="relative group inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium text-xs text-white shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 rounded-full group-hover:opacity-90 transition-opacity"></span>
            <span className="relative px-5 py-2.5 bg-slate-950 rounded-full flex items-center gap-2 group-hover:bg-opacity-0 transition-all duration-300">
              <span>Let's Connect</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover:text-white transition-colors" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-lg shadow-sky-500/20"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
