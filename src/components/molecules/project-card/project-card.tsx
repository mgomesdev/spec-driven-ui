import React from 'react';
import { Button } from '../../atoms/button/button';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  link
}) => {
  return (
    <div className="group relative flex flex-col bg-muted/30 rounded-3xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="primary" className="rounded-full px-6">Ver Projeto</Button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-background rounded-md text-muted-foreground border border-border/50">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};
