import React from 'react';
import {
  GraduationCap,
  UtensilsCrossed,
  Briefcase,
  Sparkles,
  Dumbbell,
  ArrowRight,
} from 'lucide-react';
import { INDUSTRY_NICHES } from '../data/agencyData';
import { IndustryNiche } from '../types';

interface IndustriesSectionProps {
  onSelectIndustryForInquiry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryForInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-violet-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="industries" className="py-24 sm:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-6">
            <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
              Industries We Serve
            </span>
          </div>
          <h2
            id="industries-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Built for Ambitious Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Specialized marketing and creative frameworks customized for high-potential industries.
          </p>
        </div>

        {/* 5 Industry Cards */}
        <div
          id="industries-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRY_NICHES.map((niche: IndustryNiche, idx: number) => {
            const isLast = idx === INDUSTRY_NICHES.length - 1;
            return (
              <div
                key={niche.id}
                id={`industry-card-${niche.id}`}
                className={`p-7 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:border-violet-500/50 transition-colors">
                    {getIcon(niche.icon)}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {niche.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-violet-400">
                    {niche.tagline}
                  </p>

                  <p className="mt-4 text-sm text-gray-400 leading-relaxed font-normal">
                    {niche.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onSelectIndustryForInquiry(niche.title)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>Start a project in {niche.title.split('&')[0].trim()}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
