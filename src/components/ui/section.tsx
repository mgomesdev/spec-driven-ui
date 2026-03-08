import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section className={`${baseStyles} ${className}`} {...props}>
      <div className={containerStyles}>
        {children}
      </div>
    </section>
  );
}

const baseStyles = 'w-full px-4 py-16 md:py-24 lg:py-32';
const containerStyles = 'mx-auto max-w-7xl';