import { Project } from '@/types/content';
import { Badge } from '../atoms/badge';
import { Heading } from '../atoms/heading';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

/**
 * Molecule component to display a project with its details.
 */
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
      <div className="aspect-video relative overflow-hidden">
        {/* Using a placeholder if imageUrl is relative/missing for now, but following the spec */}
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
        <Image
          src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        
        <Heading level={4} className="mb-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          {project.title}
        </Heading>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
          >
            Ver projeto
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
