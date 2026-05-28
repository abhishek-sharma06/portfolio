import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Engineer',
    'AI/ML Developer',
    'Computer Science Graduate\'26'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        // Typing characters
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        
        if (typedText === currentFullText) {
          // Pause at end of text before deleting
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        // Deleting characters
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
      // Find the button inside the header and trigger it or trigger the exact resume download code.
      // Doing the Blob direct download here ensures total safety.
      const markdownResume = `# ABHISHEK SHARMA M
Bengaluru, Karnataka, India | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

## PROFESSIONAL SUMMARY
Technical Full Stack Engineer and AI/ML Developer (B.E. Computer Science, Class of 2026) with deep analytical and server engineering skills. Specialised in modular PHP MVC, Python computational frameworks, and advanced front-end AI integration (TensorFlow.js & face-api.js). Demonstrated history of shipping secure proctored structures, multimedia verification platforms, and high-performance system automations.

## EDUCATION
*   **Bachelor of Engineering in Computer Science and Engineering**
    East West Institute of Technology (EWIT), Bengaluru | CGPA: 8.0/10.0
    Expected Graduation: 2026

## PROFESSIONAL EXPERIENCE
*   **AI/ML Intern** | Bambhari Pvt. Ltd., Bengaluru (Present)
    *   Designed and engineered an automated AI-proctored online examination software.
    *   Synthesized raw face-api.js landmarks for fast facial authentication and head pose calculations.
    *   Integrated edge client-side TensorFlow.js COCO-SSD object classifier models to flag forbidden physical devices (phones) in real-time.
    *   Developed complex multi-weight candidate monitoring mechanisms with automatic exam lockout rules.

## CORE TECHNICAL SKILLS
*   **Programming Languages:** Python, Java, JavaScript (ES6+), SQL
*   **Frontend Technologies:** React, HTML5, CSS3, face-api.js, TensorFlow.js, Chart.js, Tailwind CSS
*   **Backend & DBs:** PHP MVC Architecture, Node.js, Express.js, MySQL
*   **Cloud & Deployment:** AWS (Cloud Practitioner Certified, 2025), Git, GitHub
*   **Hardware & Core APIs:** WebRTC Media Streams, Canvas API, PHPMailer SMTP, Biometric Sensor Integration
*   **Core Methodologies:** OOP, Systems Design, Data Structures & Algorithms (DSA), Agile/Scrum
`;
      const blob = new Blob([markdownResume], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abhishek_Sharma_M_Resume.md';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden"
    >
      {/* Visual background grids & shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-16">
        {/* Work Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-cyan-400 text-xs px-3.5 py-1.5 rounded-full font-mono mb-6 shadow-sm"
          id="hero-badge"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {personalInfo.subtitle}
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans"
          id="hero-name"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mt-3 text-lg sm:text-2xl md:text-3xl font-mono text-slate-300 font-medium"
          id="hero-typewriter-container"
        >
          <span>
            I build things as a{' '}
            <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 animate-pulse pr-1 inline-block">
              {typedText || '\u00A0'}
            </span>
          </span>
        </motion.div>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-sans"
          id="hero-tagline"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          id="hero-ctas"
        >
          <button
            onClick={handleScrollToProjects}
            className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
            id="btn-hero-projects"
          >
            Explore Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-mono text-xs px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
            id="btn-hero-resume"
          >
            <FileDown size={15} className="text-cyan-400" />
            Download Resume (Markdown)
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center items-center mt-12"
          id="hero-socials"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-lg"
            id="link-hero-linkedin"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-lg"
            id="link-hero-github"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Tech Accents / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-900 pt-8"
          id="hero-stats"
        >
          <div className="bg-slate-900/30 p-4 rounded-xl border border-slate-900/60">
            <div className="text-cyan-400 font-mono text-xl sm:text-2xl font-bold">2026</div>
            <div className="text-slate-500 text-xs font-sans mt-1">Computer Science B.E.</div>
          </div>
          <div className="bg-slate-900/30 p-4 rounded-xl border border-slate-900/60">
            <div className="text-cyan-400 font-mono text-xl sm:text-2xl font-bold">8.0</div>
            <div className="text-slate-500 text-xs font-sans mt-1">Academic CGPA</div>
          </div>
          <div className="bg-slate-900/30 p-4 rounded-xl border border-slate-900/60">
            <div className="text-cyan-400 font-mono text-xl sm:text-2xl font-bold">AWS</div>
            <div className="text-slate-500 text-xs font-sans mt-1">Certified Cloud Prac.</div>
          </div>
          <div className="bg-slate-900/30 p-4 rounded-xl border border-slate-900/60">
            <div className="text-cyan-400 font-mono text-xl sm:text-2xl font-bold">AI/ML</div>
            <div className="text-slate-500 text-xs font-sans mt-1">Engineered Internships</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
