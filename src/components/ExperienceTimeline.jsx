import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>02 & 03 // ACADEMIC & CAREER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Journey <span className="text-slate-500 font-mono text-3xl">&</span> Roles
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A chronological timeline of industry experience, design leadership, academic excellence, and advisory roles.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-800">
          
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-10 sm:pl-16 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-950/50 transition-all duration-300 shadow-lg">
                {item.type.includes('Academic') ? (
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                ) : (
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 space-y-6">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {item.role}
                      </h3>
                      <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700 font-mono">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sky-400 font-semibold text-base">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{item.date}</span>
                    </div>
                    
                    {item.verified && (
                      <div className="inline-flex items-center gap-1.5 text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Role</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-sm text-slate-300 font-normal">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono bg-slate-900 text-sky-300 px-3 py-1 rounded-lg border border-slate-800/80"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
