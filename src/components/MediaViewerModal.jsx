import React from 'react';
import { X, Play, ChevronLeft, ChevronRight, Download, Calendar, Layers, Tag } from 'lucide-react';
import { Figma } from './Icons';

export default function MediaViewerModal({ mediaItem, designs, onSelectMedia, onClose }) {
  if (!mediaItem) return null;

  const currentIndex = designs.findIndex((d) => d.id === mediaItem.id);
  const prevMedia = currentIndex > 0 ? designs[currentIndex - 1] : designs[designs.length - 1];
  const nextMedia = currentIndex < designs.length - 1 ? designs[currentIndex + 1] : designs[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-card rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">
              {mediaItem.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Client: {mediaItem.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-sky-400 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Presentation Stage */}
        <div className="relative w-full min-h-[350px] sm:min-h-[480px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center group">
          {mediaItem.isVideo ? (
            <video
              src={mediaItem.videoUrl}
              controls
              autoPlay
              className="w-full max-h-[500px] object-contain bg-black"
            >
              Your browser does not support HTML5 video.
            </video>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}${mediaItem.image.replace(/^\//, '')}`}
              alt={mediaItem.title}
              className="w-full max-h-[520px] object-contain object-center"
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={() => onSelectMedia(prevMedia)}
            className="absolute left-4 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white opacity-80 hover:opacity-100 hover:border-sky-400 transition-all"
            aria-label="Previous Media"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onSelectMedia(nextMedia)}
            className="absolute right-4 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white opacity-80 hover:opacity-100 hover:border-sky-400 transition-all"
            aria-label="Next Media"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Media Details & Tools */}
        <div className="grid md:grid-cols-12 gap-6 text-sm text-slate-300">
          
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-2xl font-extrabold text-white">
              {mediaItem.title}
            </h3>
            <p className="leading-relaxed text-slate-300 text-sm">
              {mediaItem.fullDesc || mediaItem.shortDesc}
            </p>
          </div>

          <div className="md:col-span-4 space-y-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                Tools & Software Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {mediaItem.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Year: {mediaItem.year || "2024"}</span>
              <a
                href={mediaItem.image}
                download
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
