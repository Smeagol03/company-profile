import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'gold';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center font-body font-semibold uppercase tracking-wider rounded-sm';
  
  const variantStyles = {
    default: 'bg-charcoal-700 text-warm-white',
    outline: 'border border-concrete/50 text-concrete',
    gold: 'bg-gold text-charcoal',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};
