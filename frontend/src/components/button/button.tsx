import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'link' | 'cta';
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center text-white font-semibold transition-opacity duration-200 h-(--height-md) rounded-md px-3.5 ${variant === 'link' ? 'bg-transparent border border-white hover:opacity-80' : 'bg-(--color-accent) hover:opacity-90 w-full'} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${props.className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
