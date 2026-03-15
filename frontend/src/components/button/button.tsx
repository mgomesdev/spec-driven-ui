export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'link' | 'cta';
}

export const Button = ({
  variant,
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`
      h-[--height-md] rounded-[--radius-md] transition-opacity cursor-pointer font-medium
      ${variant === 'link' ? 'bg-transparent border border-[--color-accent] text-[--color-accent] hover:opacity-80' : ''}
      ${variant === 'cta' ? 'bg-[--color-accent] text-white w-full hover:opacity-90' : ''}
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
  >
    {children}
  </button>
)
