'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/types/home';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20">
      <div className="relative h-40 w-full overflow-hidden">
        {!isImageError && project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setIsImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30" />
        )}
      </div>
      
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-300 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
        >
          Ver projeto {project.title}
        </a>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
        >
          Ver projeto
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};
