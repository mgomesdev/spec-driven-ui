import { ReactNode, ElementType } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * Atomic Heading component for consistent typography.
 */
export const Heading = ({ children, level = 1, className = '' }: HeadingProps) => {
  const Tag = `h${level}` as ElementType;
  
  const styles = {
    1: 'text-4xl md:text-6xl font-black tracking-tight',
    2: 'text-3xl md:text-5xl font-bold tracking-tight',
    3: 'text-2xl md:text-4xl font-semibold tracking-tight',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium',
  };

  return (
    <Tag className={`${styles[level]} ${className} leading-tight`}>
      {children}
    </Tag>
  );
};
