import React, { useState } from 'react';
import { X, Search, Play, Filter, Sparkles, Grid, Eye } from 'lucide-react';
import { designsData } from '../data/portfolioData';
import MediaViewerModal from './MediaViewerModal';

export default function DesignShowcaseModal({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMediaItem, setActiveMediaItem] = useState(null);

  const categories = ['All', 'UI/UX Prototypes', 'Brand Identity', 'Graphic Art', 'Video Reels'];

  const filteredDesigns = designsData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0d14]/95 backdrop-blur-2xl overflow-y-auto animate-fadeIn">
      
      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 space-y-8 min-h-screen flex flex-col justify-between">
        
        {/* Header Controls */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                  Design Lab <span className="text-sky-400">Discovery Showcase</span>
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  Inspired by Interactive Visual Media Engines • {filteredDesigns.length} Items
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 transition-colors flex items-center gap-2 text-xs font-mono"
            >
              <span>EXIT GALLERY</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search designs, Figma, client, or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-2xl text-white text-xs font-mono focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                    selectedCategory === cat
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Interactive Grid Nodes Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6 flex-1">
          {filteredDesigns.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMediaItem(item)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/90 cursor-pointer group flex flex-col justify-between"
            >
              
              {/* Media Preview Box */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Is Video Overlay Badge */}
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-sky-500/90 rounded-full flex items-center justify-center text-slate-950 shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono bg-slate-950/90 text-sky-400 px-3 py-1 rounded-full border border-sky-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover Eye Badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700 text-sky-300 flex items-center gap-1 text-xs">
                    <Eye className="w-3.5 h-3.5" /> View
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.shortDesc}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Client: {item.client}</span>
                  <span className="text-sky-400 font-bold">CLICK TO EXPAND</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Lightbox Popup */}
        {activeMediaItem && (
          <MediaViewerModal
            mediaItem={activeMediaItem}
            designs={filteredDesigns}
            onSelectMedia={setActiveMediaItem}
            onClose={() => setActiveMediaItem(null)}
          />
        )}

      </div>
    </div>
  );
}
