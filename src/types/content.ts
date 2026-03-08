// Local: src/types/content.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Tools' | 'Soft Skills';
  icon?: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    ctaLabel?: string;
  };
  projects: Project[];
  skills: Skill[];
  testimonials: Testimonial[];
}
