export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`
      rounded-[--radius-md] transition-opacity cursor-pointer font-medium
      disabled:opacity-50 disabled:cursor-not-allowed
      ${size === 'sm' ? 'h-8 text-sm px-3' : ''}
      ${size === 'md' ? 'h-10 text-base px-4' : ''}
      ${size === 'lg' ? 'h-12 text-lg px-5' : ''}
      ${variant === 'primary' ? 'bg-[--color-accent] text-white hover:opacity-90' : ''}
      ${variant === 'secondary' ? 'bg-transparent border border-[--color-accent] text-[--color-accent] hover:opacity-80' : ''}
      ${variant === 'ghost' ? 'bg-transparent hover:bg-black/5' : ''}
      ${props.className ?? ''}
    `}
  >
    {children}
  </button>
)
