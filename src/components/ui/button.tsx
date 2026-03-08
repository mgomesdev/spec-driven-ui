import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'outline';
  href?: string;
}

export function Button({ children, variant, href, className = '', ...props }: ButtonProps) {
  const cn = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
}

const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

const variantStyles = {
  primary: 'bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-lg focus:ring-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200',
  outline: 'border-2 border-zinc-200 bg-transparent text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-900 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800'
};

