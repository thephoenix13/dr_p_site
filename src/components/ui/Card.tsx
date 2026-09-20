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
      'bg-white rounded-2xl border border-neutral-200/80 p-6',
      hover && 'card-hover',
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
    <a href={href} className="block group h-full">
      <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200 card-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Learn more →
          </span>
        </div>
      </div>
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
    <a href={href} className="block group h-full">
      <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200 card-hover relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{title}</h3>
          <ul className="space-y-1.5">
            {painPoints.slice(0, 3).map((point) => (
              <li key={point} className="text-sm text-neutral-500 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
    <div className="text-center p-6 rounded-2xl bg-white border border-neutral-200 card-hover">
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-neutral-500 text-sm mb-5">{description}</p>
      <a href={href} className="inline-flex items-center justify-center w-full px-4 py-3 bg-accent hover:bg-accent-600 text-white font-semibold rounded-xl transition-all shadow-sm shadow-accent/20 hover:shadow-md hover:-translate-y-0.5">
        {actionLabel}
      </a>
    </div>
  );
}
