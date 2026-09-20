import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-neutral-200 p-6',
      hover && 'hover:shadow-lg hover:border-accent transition-all duration-200',
      className
    )}>
      {children}
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <a href={href} className="block group">
      <Card hover className="h-full">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
        <span className="inline-flex items-center mt-4 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
          Learn more →
        </span>
      </Card>
    </a>
  );
}

interface IndustryCardProps {
  title: string;
  icon: ReactNode;
  painPoints: string[];
  href: string;
}

export function IndustryCard({ title, icon, painPoints, href }: IndustryCardProps) {
  return (
    <a href={href} className="block group">
      <Card hover className="h-full">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
        <ul className="space-y-1.5">
          {painPoints.slice(0, 3).map((point) => (
            <li key={point} className="text-sm text-neutral-500 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </Card>
    </a>
  );
}

interface ContactChannelCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
}

export function ContactChannelCard({ icon, title, description, href, actionLabel }: ContactChannelCardProps) {
  return (
    <Card className="text-center">
      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-neutral-500 text-sm mb-4">{description}</p>
      <a href={href} className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-accent hover:bg-accent-600 text-white font-medium rounded-lg transition-colors">
        {actionLabel}
      </a>
    </Card>
  );
}
