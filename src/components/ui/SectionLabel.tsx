import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export const SectionLabel = ({
  children,
  light = false,
  centered = false,
  className = '',
}: SectionLabelProps) => {
  const textColor = light ? 'text-warm-white/70' : 'text-concrete';
  const lineColor = light ? 'bg-warm-white/30' : 'bg-concrete/50';
  
  return (
    <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''} ${className}`}>
      <span className={`h-px w-8 ${lineColor}`} />
      <span className={`font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${textColor}`}>
        {children}
      </span>
      {centered && <span className={`h-px w-8 ${lineColor}`} />}
    </div>
  );
};
