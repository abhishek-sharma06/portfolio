export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'AI/ML' | 'System';
  tags: string[];
  githubUrl: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badge?: string;
}
