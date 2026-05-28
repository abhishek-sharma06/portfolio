import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the header
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

  const handleDownloadResume = () => {
    // Generate a high-quality Markdown Resume for Abhishek Sharma M on the fly to download.
    // Extremely cool, engineering-first feature with zero broken links!
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

## KEY COMPLETED PROJECTS
1. **AI-Proctored Online Exam System:** PHP, MySQL, face-api.js, TensorFlow.js COCO-SSD, PHPMailer SMTP.
   * Built complete verification logs, strict OTP registration gates, and automated suspicion scorecards.
2. **Document Signing Platform with Geotagging:** PHP MVC, MySQL, WebRTC, HTML5 Canvas API, Geolocation.
   * Crafted biometric audio-visual sign-off logs, responsive signature vector grids, and audit-ready receipts.
3. **Windows Voice-Activated Assistant:** Python, Natural Language Interpreters, Speech-to-Text, Web Services.
   * Programmed multi-threaded environment actions, desktop task automations, and JSON endpoint bindings.
4. **Kundalini Yoga & Meditation Biometric Monitor:** Python, NumPy, Pandas, Matplotlib, Signal Filtering.
   * Programmed dynamic digital signal filtering pipelines to clean sensor artifacts and map wellness fluctuations.

## KEY CERTIFICATIONS
*   AWS Certified Cloud Practitioner - Amazon Web Services (2025)
*   Full Stack Web Development - Udemy Academy (2024 - 2025)
*   Python Software & ML Development Bootcamp - Bambhari Research Institute (2025)
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
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => handleScrollTo('hero')} id="nav-brand">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-lg font-mono tracking-tighter">
              A
            </div>
            <span className="text-white font-sans font-semibold text-lg tracking-tight hover:text-cyan-400 transition-colors">
              Abhishek Sharma M
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-xs font-mono transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                id={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-1.5 text-cyan-400 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/10 px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-transform duration-200 active:scale-95 cursor-pointer ml-4"
              id="btn-nav-resume"
            >
              <FileDown size={14} />
              Resume
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id="mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              id="btn-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800" id="mobile-nav-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-cyan-950/40 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
                id={`nav-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-3 flex flex-col gap-3">
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg text-sm font-semibold font-mono transition-colors cursor-pointer"
                id="btn-mobile-resume"
              >
                <FileDown size={16} />
                Download Resume (.md)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
