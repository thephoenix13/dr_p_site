import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useAnimation, type Variant } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function ScrollReveal({ children, className, delay = 0, direction = 'up', duration = 0.6 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: directionMap[direction].x,
        y: directionMap[direction].y,
      }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: directionMap[direction].x, y: directionMap[direction].y }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, label, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const [displayValue, setDisplayValue] = useState('0');

  const numericPart = value.replace(/[^0-9.]/g, '');
  const prefix = value.replace(/[0-9.]/g, '').trim();
  const target = parseFloat(numericPart);

  useEffect(() => {
    if (!isInView || isNaN(target)) {
      if (!isNaN(target)) return;
      setDisplayValue(value);
      return;
    }

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplayValue(prefix + current + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, prefix, suffix, value]);

  return (
    <div ref={ref} className={className}>
      <div className="text-4xl md:text-5xl font-bold text-accent mb-1 tabular-nums">
        {isInView ? displayValue : '0'}
      </div>
      <div className="text-sm text-white/70 font-medium">{label}</div>
    </div>
  );
}

interface MarqueeProps {
  children: ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export function Marquee({ children, speed = 'normal', className }: MarqueeProps) {
  const durationMap = { slow: '50s', normal: '30s', fast: '20s' };

  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <div
        className="flex gap-12 animate-marquee w-max"
        style={{ animationDuration: durationMap[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerChildren({ children, className, staggerDelay = 0.1 }: StaggerChildrenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
