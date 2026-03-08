import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Atomic Badge component for technology tags and labels.
 */
export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 ${className}`}>
      {children}
    </span>
  );
};
