import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * Componente Badge para exibir tags e tecnologias
 */
export const Badge = ({ 
  children, 
  className = '', 
  variant = 'secondary' 
}: BadgeProps) => {
  const variants = {
    primary: 'bg-foreground text-background',
    secondary: 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100',
    outline: 'border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
