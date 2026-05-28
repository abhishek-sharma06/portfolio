import { ComponentType } from 'react';
import { Code2, Layout, Server, Database, Cpu, BrainCircuit, GitBranch } from 'lucide-react';
import { skillsData } from '../data';

const iconMap: Record<string, ComponentType<any>> = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  BrainCircuit: BrainCircuit,
  GitBranch: GitBranch
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">02 / Stack</h2>
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Skills & Capabilities</h3>
          <div className="h-1 w-12 bg-cyan-500 mt-3 mx-auto md:mx-0 rounded" />
        </div>

        {/* Bento Grid layout for categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
          {skillsData.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            
            return (
              <div
                key={category.title}
                className="bento-card p-6 flex flex-col justify-between cursor-default group"
                id={`skill-card-${index}`}
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/85 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <h4 className="text-md font-sans font-semibold text-white tracking-tight">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((sku) => {
                      return (
                        <span
                          key={sku}
                          className="skill-tag"
                        >
                          {sku}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Micro accent at the bottom */}
                <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300 mt-6 rounded" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
