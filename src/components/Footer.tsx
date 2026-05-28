import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand/Signature */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('hero')} id="footer-logo">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold text-lg font-mono">
              AS
            </div>
            <div className="text-left">
              <span className="block text-white font-sans font-semibold text-sm leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                Full Stack & AI/ML Developer
              </span>
            </div>
          </div>

          {/* Core Navigation Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" id="footer-shortcuts">
            <button
              onClick={() => handleScrollTo('about')}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo('skills')}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo('certifications')}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Certifications
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Credits and Tech Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8" id="footer-bottom">
          <p className="text-xs font-mono text-slate-600">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-600">
            <span>Built with</span>
            <span className="text-teal-400 font-semibold">React</span>
            <span>+</span>
            <span className="text-teal-400 font-semibold">Tailwind CSS</span>
            <span>+</span>
            <span className="text-teal-400 font-semibold">Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
