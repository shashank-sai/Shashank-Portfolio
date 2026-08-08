import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>08 // CONTACT & CONNECT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Exceptional</span> Together.
          </h2>
          <p className="text-slate-400 text-sm">
            Whether you have an upcoming AI model engineering project, UI/UX design collaboration, or technical inquiry, reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-extrabold text-white tracking-wide">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {personalDetails.email}
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalDetails.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Connections */}
              <div className="pt-4 space-y-3 border-t border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400 block tracking-widest">
                  Social Channels
                </span>
                
                <div className="flex items-center gap-3">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 hover:text-sky-400 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href={personalDetails.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 hover:text-sky-400 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center text-teal-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out, Shashank will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-300 tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Surampudi Shashank Sai"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-slate-300 tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-slate-300 tracking-wider block">
                      Subject / Project Goal
                    </label>
                    <input
                      type="text"
                      placeholder="AI Model Integration / UI UX Design Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-slate-300 tracking-wider block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2.5 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
