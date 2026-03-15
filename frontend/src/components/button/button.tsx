import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'link' | 'cta';
}

export const Button = ({ variant, children, className = '', disabled, ...props }: ButtonProps) => {
  const baseStyles = 'flex items-center justify-center text-white font-semibold transition-opacity duration-200 h-[var(--height-md)] rounded-[var(--radius-md)] px-[14px]';

  const variantStyles = {
    link: 'bg-transparent border border-white hover:opacity-80',
    cta: 'bg-[var(--color-accent)] hover:opacity-90 w-full',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
