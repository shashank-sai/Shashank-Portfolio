import React, { useState } from 'react';
import { Play, Sparkles, Eye, ArrowUpRight, Grid, Film } from 'lucide-react';
import { Figma } from './Icons';
import { designsData } from '../data/portfolioData';
import DesignShowcaseModal from './DesignShowcaseModal';
import MediaViewerModal from './MediaViewerModal';

export default function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [activeMediaItem, setActiveMediaItem] = useState(null);

  const categories = ['All', 'UI/UX Prototypes', 'Brand Identity', 'Graphic Art', 'Video Reels'];

  const filteredDesigns = selectedCategory === 'All'
    ? designsData
    : designsData.filter((d) => d.category === selectedCategory);

  return (
    <section id="designs" className="py-20 relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>05 // CREATIVE MEDIA & DESIGNS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Visual Design <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">& Motion</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Figma UI UX prototypes, brand identities, event art direction, and motion graphics video reels.
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

        {/* Design Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMediaItem(item)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between cursor-pointer group"
            >
              
              {/* Media Preview Box */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono bg-slate-950/90 text-sky-400 px-3 py-1 rounded-full border border-sky-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Video Play Button Indicator */}
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-sky-500/90 rounded-full flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Tools & Expand Action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:text-sky-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Press Designs More CTA Banner */}
        <div className="relative glass-card p-8 sm:p-10 rounded-3xl border border-sky-500/30 overflow-hidden text-center space-y-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-cyan-500/10 blur-xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400 mx-auto">
              <Grid className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Looking for More Designs & Video Reels?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Explore the full interactive Design Lab gallery with live filtering, tool search, motion reels, and voronoi grid discovery.
            </p>

            <button
              onClick={() => setShowcaseOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/25 inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Design Lab (Interactive Gallery)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Interactive Showcase Modal ("See More") */}
      {showcaseOpen && (
        <DesignShowcaseModal onClose={() => setShowcaseOpen(false)} />
      )}

      {/* Media Viewer Lightbox */}
      {activeMediaItem && (
        <MediaViewerModal
          mediaItem={activeMediaItem}
          designs={designsData}
          onSelectMedia={setActiveMediaItem}
          onClose={() => setActiveMediaItem(null)}
        />
      )}

    </section>
  );
}
