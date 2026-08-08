import React from 'react';
import { ShieldCheck, MapPin, GraduationCap, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] pt-36 pb-20 flex items-center justify-center cyber-grid">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Main Info */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-widest uppercase shadow-glow-cyan">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span>{personalDetails.tagline}</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-white">
              Surampudi<br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent text-glow-cyan">
                Shashank
              </span><br />
              Sai
            </h1>
          </div>

          {/* Subheading */}
          <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-slate-300">
            <span>AI Engineer</span>
            <span className="text-sky-400 font-mono text-xl">×</span>
            <span className="bg-gradient-to-r from-indigo-300 to-slate-200 bg-clip-text text-transparent">
              Creative Technologist
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
            {personalDetails.bio}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/25 flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 text-slate-200 font-semibold text-sm rounded-xl flex items-center gap-2.5 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-6 pt-4 text-slate-400 text-xs font-mono border-t border-slate-800/80">
            <span className="text-slate-500 uppercase tracking-widest">Connect:</span>
            <div className="flex items-center gap-4">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg hover:text-sky-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg hover:text-sky-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.socials.email}
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg hover:text-sky-400 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column - Interactive Cyber Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md group">
            
            {/* Ambient Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Profile Card Container */}
            <div className="relative bg-slate-900/90 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl shadow-2xl space-y-5">
              
              {/* Header Badges */}
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 tracking-wider">
                  ID: <span className="text-slate-200 font-bold">{personalDetails.idBadge}</span>
                </span>
                <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full border border-teal-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                  <span>{personalDetails.status}</span>
                </span>
              </div>

              {/* Portrait Photo Container */}
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group-hover:border-sky-500/40 transition duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}profile_photo.jpg`}
                  alt="Surampudi Shashank Sai"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Quick Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono">
                  <span className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-sky-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    AI & ML Core
                  </span>
                  <span className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-slate-300">
                    CGPA 7.13
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="flex justify-between items-end pt-1">
                <div>
                  <h3 className="font-extrabold text-xl text-white tracking-wide">
                    {personalDetails.name}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {personalDetails.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1.5 rounded-lg border border-indigo-500/20 font-mono">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    {personalDetails.educationDegree}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
