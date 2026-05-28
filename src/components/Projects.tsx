import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ShieldCheck, Cpu, Code2, Sparkles, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI/ML' | 'System'>('All');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const categories: ('All' | 'Full Stack' | 'AI/ML' | 'System')[] = [
    'All',
    'Full Stack',
    'AI/ML',
    'System'
  ];

  const handleToggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">03 / Works</h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Technical Projects</h3>
            <div className="h-1 w-12 bg-cyan-500 mt-3 rounded" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 mt-8 md:mt-0 bg-slate-950/70 p-1 rounded-xl border border-slate-800/80 max-w-full overflow-x-auto" id="projects-filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setExpandedCard(null); // Close any expanded cards on filter switch
                }}
                className={`text-xs font-mono px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
                id={`btn-filter-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedCard === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bento-card flex flex-col justify-between overflow-hidden group shadow-lg"
                  id={`project-card-${project.id}`}
                >
                  <div className="p-6">
                    {/* Header: Title & Category tag */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider bg-cyan-950/40 border border-cyan-400/25 px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                        <h4 className="text-xl font-sans font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      
                      {/* Brand Icon or Security symbol */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-cyan-400 group-hover:scale-105 transition-transform">
                        {project.category === 'Full Stack' ? (
                          <ShieldCheck size={20} className="text-cyan-400" />
                        ) : project.category === 'AI/ML' ? (
                          <Sparkles size={20} className="text-blue-400" />
                        ) : (
                          <Cpu size={20} className="text-amber-400" />
                        )}
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Tech Stack Badge Row */}
                    <div className="flex flex-wrap gap-1.5 mb-6" id={`tech-stack-${project.id}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="project-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Accordion Highlights Trigger */}
                    <button
                      onClick={() => handleToggleExpand(project.id)}
                      className="flex items-center gap-1 text-xs font-mono text-cyan-400/90 hover:text-cyan-400 mb-2 cursor-pointer transition-colors"
                      id={`btn-expand-${project.id}`}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={14} className="animate-bounce" />
                          <span>Hide Project Specs</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          <span>View Technical Specs & Deep Dive</span>
                        </>
                      )}
                    </button>

                    {/* Expandable Core Mechanics */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-slate-900/40 border border-slate-900 p-4 rounded-xl mt-4"
                          id={`deep-dive-${project.id}`}
                        >
                          <h5 className="text-xs font-mono text-slate-300 mb-3 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                            <Code2 size={12} className="text-cyan-500" />
                            Core Mechanics & Architecture
                          </h5>
                          <ul className="space-y-2 text-xs text-slate-400 leading-normal pl-4 list-disc marker:text-cyan-400 font-sans">
                            {project.highlights.map((hlt, i) => (
                              <li key={i}>{hlt}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom Panel CTA */}
                  <div className="border-t border-slate-900 px-6 py-4 bg-slate-950/40 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">
                      GitHub Repo: /{project.title.toLowerCase().replace(/ /g, '-')}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-mono text-xs px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                      id={`link-project-github-${project.id}`}
                    >
                      <Github size={13} className="text-slate-400" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
