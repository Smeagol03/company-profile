import type { ReactNode } from 'react';

interface SkeletonProps {
  className?: string;
  children?: ReactNode;
}

export const Skeleton = ({ className = '', children }: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-concrete/20 rounded-sm ${className}`}>
      {children}
    </div>
  );
};

export const SkeletonText = ({ lines = 3, className = '' }: { lines?: number; className?: string }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} 
        />
      ))}
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-sm shadow-md overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <SkeletonText lines={2} />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <Skeleton className="h-4 w-48 mx-auto bg-gold/20" />
        <Skeleton className="h-16 sm:h-20 w-full bg-warm-white/10" />
        <Skeleton className="h-6 w-3/4 mx-auto bg-concrete/20" />
        <div className="flex gap-4 justify-center pt-4">
          <Skeleton className="h-12 w-40 bg-gold/30" />
          <Skeleton className="h-12 w-32 bg-warm-white/10" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};
