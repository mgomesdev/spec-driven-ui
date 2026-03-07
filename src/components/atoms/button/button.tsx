import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer text-sm active:scale-95 inline-flex items-center justify-center';
const variants = {
    primary: 'bg-foreground text-background hover:bg-foreground/90',
    secondary: 'bg-muted text-muted-foreground hover:bg-muted/80',
    ghost: 'hover:bg-muted text-foreground',
};
