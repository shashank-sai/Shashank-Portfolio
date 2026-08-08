import React from 'react';
import { X, ExternalLink, Cpu, Layers, CheckCircle } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-500/30">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {project.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Timeframe: {project.timeframe}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
              System Overview & Problem Statement
            </h4>
            <p className="leading-relaxed text-slate-300 text-base">
              {project.fullDesc}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Technical Architecture Highlights
            </h4>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Tech Stack & Libraries Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-slate-900 text-sky-300 px-3 py-1 rounded-lg border border-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code on GitHub</span>
            </a>
            
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl font-mono"
            >
              Close Drawer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
