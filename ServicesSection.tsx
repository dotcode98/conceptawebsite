import React from 'react';
import {
  TrendingUp,
  Target,
  Palette,
  Scissors,
  BadgePercent,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-violet-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-violet-400" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-violet-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-violet-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-t border-zinc-900/60"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/50 border border-violet-800/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-violet-300 font-mono text-xs tracking-widest uppercase font-semibold">
              Core Capabilities
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            What We Do
          </h2>
          <p
            id="services-subheading"
            className="mt-4 text-lg sm:text-xl text-gray-400 font-normal leading-relaxed"
          >
            Focused, high-impact capabilities engineered to grow attention, conversion, and revenue.
          </p>
        </div>

        {/* 5 Service Cards Grid: 3 in row 1, 2 in row 2 on desktop */}
        <div
          id="services-grid"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            // First 3 items take 2 columns on lg (3 items = 6 cols).
            // Last 2 items take 3 columns on lg (2 items = 6 cols).
            const lgColSpan = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            // On md (2 columns), the 5th item spans 2 columns
            const mdColSpan = index === 4 ? 'md:col-span-2' : 'md:col-span-1';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/90 hover:border-violet-500/50 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 ${mdColSpan} ${lgColSpan}`}
              >
                <div>
                  {/* Top card bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:border-violet-500/50 group-hover:scale-105 transition-all duration-200 shadow-inner">
                      {getIcon(service.icon)}
                    </div>
                    <span className="font-mono text-xs font-bold text-violet-300 bg-violet-950/60 border border-violet-800/40 px-3 py-1 rounded-full">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* What is included */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/80">
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3.5 font-medium">
                      Core Scope
                    </p>
                    <ul className="space-y-2.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4">
                  <button
                    id={`service-inquire-${service.id}`}
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="w-full inline-flex items-center justify-between px-4.5 py-3 rounded-xl text-xs font-bold text-white bg-zinc-800/90 border border-zinc-700/60 hover:bg-violet-600 hover:border-violet-600 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
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
