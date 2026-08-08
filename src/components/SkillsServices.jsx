import React from 'react';
import { Sparkles, Code2, Layers, Terminal, Check } from 'lucide-react';
import { Figma } from './Icons';
import { skillsCategories, servicesOffered } from '../data/portfolioData';

export default function SkillsServices() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Figma': return <Figma className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-sky-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* --- PART 1: SKILLS MATRIX --- */}
        <div className="space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>05 // TECHNICAL & CREATIVE STACK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">&</span> Capabilities
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Categorized breakdown of technical frameworks, machine learning libraries, languages, and design software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsCategories.map((cat, idx) => (
              <div
                key={idx}
                className="glass-card p-7 rounded-3xl border border-slate-800 space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 text-xs font-mono bg-slate-900/90 text-slate-200 border border-slate-700/80 rounded-xl hover:border-sky-400/60 hover:text-sky-300 hover:scale-105 transition-all duration-200 flex items-center gap-2"
                    >
                      <Check className="w-3 h-3 text-sky-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* --- PART 2: SERVICES OFFERED --- */}
        <div id="services" className="space-y-12 pt-6 border-t border-slate-800/80">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>06 // SERVICE OFFERINGS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Solutions <span className="text-slate-500 font-mono text-3xl">&</span> Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              End-to-end technical execution from AI model prototyping to production UI design and brand identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesOffered.map((service, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/90 space-y-5 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center group-hover:border-sky-400/50 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">
                    {service.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
