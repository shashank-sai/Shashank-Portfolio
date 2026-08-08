import React, { useState } from 'react';
import { ExternalLink, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Generative AI', 'NLP & Transformers', 'Deep Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(selectedCategory) || p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>04 // CORE ENGINEERING & SYSTEMS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Production-grade machine learning models, generative story frameworks, and time-series neural networks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              
              {/* Card Header Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono bg-slate-950/90 text-sky-400 px-3 py-1 rounded-full border border-sky-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono text-slate-500 py-1">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Card Action Links */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>View Architecture</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Popup */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
}
