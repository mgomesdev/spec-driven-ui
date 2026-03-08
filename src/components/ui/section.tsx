import type { HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Section = ({ children, className = '', ...props }: SectionProps) => (
  <section className={`w-full px-4 py-16 md:py-24 lg:py-32 ${className}`} {...props}>
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  </section>
);