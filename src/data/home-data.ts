import { Project, Skill, SocialProof } from '../generated/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Design System Platform',
    description: 'A comprehensive design system and component library built for scale.',
    url: 'https://github.com/example/ds',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook']
  },
  {
    id: 'proj-2',
    title: 'E-commerce Checkout Flow',
    description: 'High-conversion checkout experience with complex state management.',
    url: 'https://github.com/example/checkout',
    tags: ['Next.js', 'React Query', 'Zustand']
  },
  {
    id: 'proj-3',
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive data visualization.',
    url: 'https://github.com/example/analytics',
    tags: ['React', 'D3.js', 'Framer Motion']
  }
];

export const skillsData: Skill[] = [
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'Tailwind CSS', category: 'tools' },
  { name: 'Git', category: 'tools' }
];

export const socialProofData: SocialProof[] = [
  {
    author: 'Jane Doe',
    role: 'CTO at Tech Innovators',
    quote: 'An exceptional developer who consistently delivers high-quality architectural solutions and beautiful user interfaces.'
  },
  {
    author: 'John Smith',
    role: 'Product Manager at Web Solutions',
    quote: 'Transformed our frontend ecosystem, significantly improving both performance and developer velocity.'
  }
];
