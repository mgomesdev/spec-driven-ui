import type { Project } from '@/types/home';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho, checkout e painel admin.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    url: 'https://github.com/matheusgomes/ecommerce',
  },
  {
    id: '2',
    title: 'Task Manager',
    description: 'Aplicação de gestão de tarefas com drag-and-drop e teamwork.',
    stack: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    url: 'https://github.com/matheusgomes/taskmanager',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico com visualização de dados em tempo real.',
    stack: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    url: 'https://github.com/matheusgomes/weather',
  },
];
