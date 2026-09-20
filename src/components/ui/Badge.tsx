import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-700',
    accent: 'bg-accent/10 text-accent-600',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{value}</div>
      <div className="text-sm text-neutral-500 font-medium">{label}</div>
    </div>
  );
}
