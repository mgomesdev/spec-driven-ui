import React from 'react';
import { ProjectCard, ProjectCardProps } from '../../molecules/project-card/project-card';

const projects: ProjectCardProps[] = [
  {
    title: "E-commerce Premium",
    description: "Plataforma de vendas com foco em performance e animações fluidas, utilizando Next.js 15 e Tailwind v4.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/projects/project1.png",
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "Interface administrativa complexa com visualização de dados em tempo real e design system customizado.",
    tags: ["React", "Recharts", "Shadcn"],
    imageUrl: "/projects/project2.png",
    link: "#"
  },
  {
    title: "App de Finanças",
    description: "Aplicativo mobile-first para gestão financeira pessoal com gráficos interativos e integração bancária fictícia.",
    tags: ["Next.js", "PWA", "Framer Motion"],
    imageUrl: "/projects/project3.png",
    link: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Projetos Selecionados
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma mostra do meu trabalho focado em unir design impecável e excelência técnica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
