import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent hover:bg-accent-600 text-white shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/30',
  secondary: 'bg-primary hover:bg-primary-600 text-white shadow-sm shadow-primary/20 hover:shadow-md',
  ghost: 'bg-transparent hover:bg-neutral-100 text-primary border border-neutral-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({ variant = 'primary', size = 'md', href, children, className, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
