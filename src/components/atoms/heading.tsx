import type { ElementType, ReactNode } from 'react';

interface HeadingProps {
  as?: ElementType;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

/**
 * Componente de Heading com suporte a diferentes níveis e tags semânticas
 */
export const Heading = ({ 
  as, 
  level = 1, 
  children, 
  className = '' 
}: HeadingProps) => {
  const Tag = as || (`h${level}` as ElementType);
  
  const styles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    2: 'text-3xl md:text-4xl font-semibold tracking-tight',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-medium',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <Tag className={`${styles[level as keyof typeof styles]} ${className}`}>
      {children}
    </Tag>
  );
};
