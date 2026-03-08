import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/generated/types';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={cardStyles}>
      <Link href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
        <span className="sr-only">Ver projeto {project.title}</span>
      </Link>

      <div className={imageContainerStyles}>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`Capa do projeto ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={placeholderStyles}>
            <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      <div className={contentStyles}>
        <h3 className={titleStyles}>{project.title}</h3>
        <p className={descriptionStyles}>{project.description}</p>

        <div className={tagContainerStyles}>
          {project.tags.map(tag => (
            <span key={tag} className={tagStyles}>{tag}</span>
          ))}
        </div>

        <div className={linkStyles}>
          View Project
          <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}

const cardStyles = 'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900';
const imageContainerStyles = 'relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800';
const placeholderStyles = 'absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500';
const contentStyles = 'flex flex-1 flex-col p-6';
const titleStyles = 'font-bold text-xl mb-2 text-zinc-900 group-hover:text-amber-500 dark:text-zinc-50 dark:group-hover:text-amber-400 transition-colors duration-300';
const descriptionStyles = 'text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-1';
const tagContainerStyles = 'flex flex-wrap gap-2 mb-6';
const tagStyles = 'inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200';
const linkStyles = 'inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300';
