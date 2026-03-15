import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'link' | 'cta';
}

export const Button: React.FC<ButtonProps> = ({ variant, children, className = '', disabled, ...props }) => {
  const baseStyles = 'flex items-center justify-center text-white font-semibold transition-opacity duration-200';

  const variantStyles = {
    link: 'bg-transparent border border-white hover:opacity-80',
    cta: 'bg-[var(--color-accent)] hover:opacity-90 w-full',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`}
      style={{
        height: 'var(--height-md)',
        borderRadius: 'var(--radius-md)',
        padding: '0 14px',
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
