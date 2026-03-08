import { Section } from '../ui/section';
import { ProjectCard } from './project-card';
import { projectsData } from '../../data/home-data';

export const Projects = () => (
  <Section id="projects" className="bg-white dark:bg-zinc-950">
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">Projetos em Destaque</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">Alguns dos trabalhos recentes que tive o prazer de desenvolver</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.slice(0, 3).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);
