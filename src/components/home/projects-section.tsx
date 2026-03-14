import type { Project } from '@/types/home';
import { ProjectCard } from './project-card';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Projetos em Destaque</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);
