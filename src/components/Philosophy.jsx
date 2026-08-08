import React from 'react';
import { Brain, Layout, Palette, Cpu, Quote } from 'lucide-react';
import { philosophyStats, scopePillars } from '../data/portfolioData';

export default function Philosophy() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-sky-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-400" />;
      default: return <Brain className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>01 // PHILOSOPHY & SCOPE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Where Intelligence Meets <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Creativity.</span>
          </h2>
        </div>

        {/* Highlight Quote Block */}
        <div className="relative glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/90 overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-400 group-hover:opacity-10 transition-opacity">
            <Quote className="w-32 h-32" />
          </div>
          <blockquote className="relative z-10 space-y-4">
            <p className="text-2xl sm:text-3xl font-medium text-slate-100 italic leading-relaxed font-sans">
              "Technology solves problems. Design makes solutions meaningful."
            </p>
            <footer className="text-xs font-mono text-sky-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-4 h-[1px] bg-sky-400"></span>
              Surampudi Shashank Sai — Design & Engineering Philosophy
            </footer>
          </blockquote>
        </div>

        {/* Stat Counter Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyStats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl group-hover:bg-sky-500/10 transition-all"></div>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent font-mono">
                {item.stat}
              </h3>
              <p className="text-sm font-bold text-slate-200 tracking-wide">
                {item.label}
              </p>
              <p className="text-xs text-slate-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Scope Pillars Grid */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold text-slate-200 uppercase font-mono tracking-wider">
            Core Engineering Pillars
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scopePillars.map((pillar, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover p-7 rounded-3xl space-y-4 border border-slate-800/90 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center">
                    {getIcon(pillar.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-sky-400">
                  <span>SPECIALIZED AREA</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
