import { Award, ShieldAlert, BadgeCheck, ExternalLink, Sparkles } from 'lucide-react';
import { certificationsData } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">04 / Badges</h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Professional Certifications</h3>
          <div className="h-1 w-12 bg-cyan-500 mt-3 mx-auto md:mx-0 rounded" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="certifications-list">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="group relative bento-card p-6 flex flex-col justify-between cursor-default"
              id={`cert-card-${cert.badge?.toLowerCase()}`}
            >
              {/* Outer decorative line accent that glows on hover */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/40 group-hover:via-cyan-500/60 group-hover:to-cyan-500/40 transition-all duration-300 rounded-t-2xl" />

              <div>
                {/* Visual Badge Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-center text-cyan-400">
                    {cert.badge === 'AWS-CCP' ? (
                      <BadgeCheck size={24} className="text-cyan-400" />
                    ) : cert.badge === 'FSD-UDEMY' ? (
                      <Award size={24} className="text-blue-400" />
                    ) : (
                      <Sparkles size={24} className="text-purple-400" />
                    )}
                  </div>
                  
                  {/* Credential Code */}
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950/80 border border-slate-900 px-2 py-0.5 rounded">
                    {cert.badge}
                  </span>
                </div>

                {/* Information */}
                <h4 className="text-base sm:text-lg font-sans font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-slate-400 mt-1.5 leading-snug">
                  Issued By: {cert.issuer}
                </p>
              </div>

              {/* Years/Dates Info Panel */}
              <div className="border-t border-slate-800/60 pt-4 mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Year Achieved
                </span>
                <span className="text-xs font-semibold text-white font-mono bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
