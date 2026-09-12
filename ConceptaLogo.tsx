import React from 'react';

interface ConceptaLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ConceptaLogo: React.FC<ConceptaLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  // Dimensions based on size
  const markDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const textSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-base tracking-[0.28em]',
    lg: 'text-xl tracking-[0.32em]',
    xl: 'text-2xl tracking-[0.35em]',
  }[size];

  const Mark = (
    <div className={`relative flex items-center justify-center shrink-0 ${markDimensions}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(139,92,246,0.3)]"
      >
        <defs>
          <linearGradient id="conceptaVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        {/* White Stylized 'C' curve */}
        <path
          d="M 52 24 
             C 34 24 20 36 20 50 
             C 20 64 34 76 52 76 
             L 52 64 
             C 41 64 32 58 32 50 
             C 32 42 41 36 52 36 
             Z"
          fill="#FFFFFF"
        />

        {/* Violet / Purple Chevron Arrow '>' */}
        <path
          d="M 54 24 
             L 72 50 
             L 54 76 
             L 66 76 
             L 84 50 
             L 66 24 
             Z"
          fill="url(#conceptaVioletGrad)"
        />
      </svg>
    </div>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{Mark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        {Mark}
        <span className={`font-display font-extrabold uppercase text-white ${textSizes}`}>
          CONCEPTA
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {Mark}
      <span className={`font-display font-extrabold uppercase text-white ${textSizes}`}>
        CONCEPTA
      </span>
    </div>
  );
};
