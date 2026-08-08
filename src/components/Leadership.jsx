import React from 'react';
import { Award, Users, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Leadership() {
  const leadershipRoles = [
    {
      title: "Head Graphic Designer",
      organization: "Club Literati — MLRIT",
      period: "August 2023 – Present",
      description: "Directing overall brand identity, visual collateral, and media presence for campus literary and cultural events.",
      badges: ["Design Leadership", "Visual Identity", "Team Management"]
    },
    {
      title: "Designing Advisor",
      organization: "Google Developer Groups On Campus (GDGC) — MLRIT",
      period: "September 2025 – Present",
      description: "Advising hackathon teams on UI/UX standards, component design consistency, and visual presentation.",
      badges: ["UI/UX Advisory", "Mentorship", "Community Engagement"]
    }
  ];

  const certifications = [
    "AI & Machine Learning Foundations — MLRIT",
    "Generative AI & LLM Prompting Systems",
    "UI/UX Design & Prototyping Systems — Figma",
    "Deep Learning & Neural Network Architecture Specialization"
  ];

  return (
    <section id="leadership" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>07 // LEADERSHIP & ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Leadership <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">&</span> Roles
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Mentoring junior developers, leading design teams, and driving technical community initiatives.
          </p>
        </div>

        {/* Leadership & Certifications Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Leadership Roles */}
          <div className="lg:col-span-7 space-y-6">
            {leadershipRoles.map((role, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-7 rounded-3xl border border-slate-800 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {role.title}
                    </h3>
                    <p className="text-sm text-sky-400 font-medium">
                      {role.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                    {role.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {role.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[11px] font-mono bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-lg border border-indigo-500/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Recognition */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Certifications & Focus
                  </h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-800 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
                <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  Open for technical advisory & design leadership roles.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
