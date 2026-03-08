import { Section } from '../ui/section';
import { ProjectCard } from './project-card';
import { projectsData } from '../../data/home-data';

export function Projects() {
  return (
    <Section id="projects" className={sectionStyles}>
      <div className={headerStyles}>
        <h2 className={titleStyles}>Projetos em Destaque</h2>
        <p className={subtitleStyles}>Alguns dos trabalhos recentes que tive o prazer de desenvolver</p>
      </div>

      <div className={gridStyles}>
        {projectsData.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

const sectionStyles = 'bg-white dark:bg-zinc-950';
const headerStyles = 'mb-12 md:mb-16';
const titleStyles = 'text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50';
const subtitleStyles = 'text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl';
const gridStyles = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
