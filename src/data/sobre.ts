import type { AboutData } from '@/types/sobre';

export const ABOUT: AboutData = {
  profile: {
    name: 'Matheus Gomes',
    role: 'Desenvolvedor Frontend Sênior',
  },
  bio: [
    'Especializado em criar interfaces modernas e performáticas com React, Next.js e TypeScript. Apaixonado por UX eUI design, busco sempre entregar experiências digitais memoráveis.',
    'Com mais de 8 anos de experiência no mercado, trabalho com startups e empresas de diversos portes, sempre focado em entregar código limpo, escalável e bem testado.',
  ],
  experience: [
    {
      id: '1',
      role: 'Desenvolvedor Frontend Sênior',
      company: 'Tech Corp',
      period: '2022 - Presente',
      description: 'Liderando a equipe de frontend, arquitetando soluções escaláveis e implementando boas práticas de desenvolvimento.',
    },
    {
      id: '2',
      role: 'Desenvolvedor Frontend',
      company: 'Startup XYZ',
      period: '2019 - 2022',
      description: 'Desenvolvimento de interfaces responsivas e interativas utilizando React, TypeScript e ferramentas modernas.',
    },
    {
      id: '3',
      role: 'Desenvolvedor Web',
      company: 'Agência Digital',
      period: '2017 - 2019',
      description: 'Criação de sites e aplicações web para diversos clientes, utilizando React, Vue.js e WordPress.',
    },
  ],
  skills: [
    {
      id: 'frontend',
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      id: 'tools',
      name: 'Ferramentas',
      skills: ['Git', 'Docker', 'Figma', 'VS Code'],
    },
  ],
  contact: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/matheusgomes',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/matheusgomes',
      icon: 'github',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:matheus@example.com',
      icon: 'email',
    },
  ],
};
