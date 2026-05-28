import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">01 / Profile</h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">About Me</h3>
          <div className="h-1 w-12 bg-cyan-500 mt-3 mx-auto md:mx-0 rounded" />
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center" id="about-avatar-container">
            <div className="relative group">
              {/* Outer Glow Wrapper */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 group-hover:opacity-60 blur transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative border-2 border-slate-800 bg-slate-950 p-2.5 rounded-full w-56 h-56 sm:w-64 sm:h-64 overflow-hidden flex items-center justify-center">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="rounded-full w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  id="about-profile-image"
                />
              </div>
            </div>

            {/* Quick Badge Details */}
            <div className="mt-8 flex flex-wrap gap-2.5 justify-center max-w-sm" id="about-badges">
              <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
                🇮🇳 Bengaluru Based
              </span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-cyan-400 font-mono">
                💻 Full Stack + AI/ML
              </span>
              <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
                🎓 CS Graduate 2026
              </span>
            </div>
          </div>

          {/* Right Column: Bio Narrative & College Bento Info */}
          <div className="lg:col-span-7 space-y-6" id="about-text-container">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans" id="about-bio-1">
              {personalInfo.aboutText}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans" id="about-bio-2">
              During my current internship at <strong>Bambhari Pvt. Ltd.</strong>, I led the technical development of an advanced client-side AI-proctored online examination module. By combining <strong>face-api.js</strong> for live head pose estimation and <strong>TensorFlow.js COCO-SSD</strong> for external device classification, I successfully built offline-capable visual monitoring solutions directly within general browsers, bypassing complex backend processing and reducing infrastructure costs.
            </p>

            {/* Structured Academic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" id="about-academic-cards">
              {/* Card 1: Education */}
              <div className="bento-card p-5 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                    <GraduationCap size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-slate-500 uppercase">Education</h4>
                    <p className="text-sm font-semibold text-white leading-snug">
                      B.E. Computer Science
                    </p>
                    <p className="text-xs text-slate-400 leading-snug">
                      East West Institute of Technology (EWIT)
                    </p>
                    <p className="text-[10px] font-mono text-cyan-400">
                      Bengaluru, India • Class of 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Academic Standings */}
              <div className="bento-card p-5 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Award size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-slate-500 uppercase">Highlights</h4>
                    <p className="text-sm font-semibold text-white leading-snug">
                      CGPA 8.0 & AWS Cloud
                    </p>
                    <p className="text-xs text-slate-400 leading-snug">
                      AWS Certified Cloud Practitioner (2025)
                    </p>
                    <p className="text-[10px] font-mono text-blue-400">
                      Bambhari Research Institute Python Graduate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Location & Status Info */}
            <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4" id="about-status-banner">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
                <MapPin size={14} className="text-cyan-400" />
                <span>Operating from Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Seeking Full-Time 2026 Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
