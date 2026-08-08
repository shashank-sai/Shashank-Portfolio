import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import DesignGallery from './components/DesignGallery';
import SkillsServices from './components/SkillsServices';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-sky-500 selection:text-white font-sans antialiased">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="space-y-12">
        <Hero />
        <Philosophy />
        <ExperienceTimeline />
        <Projects />
        <DesignGallery />
        <SkillsServices />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
