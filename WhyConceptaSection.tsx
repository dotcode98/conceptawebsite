import React from 'react';
import { WHY_PILLARS } from '../data/agencyData';
import { Compass, Lightbulb, Users2, TrendingUp } from 'lucide-react';

export const WhyConceptaSection: React.FC = () => {
  const icons = [Compass, Lightbulb, Users2, TrendingUp];

  return (
    <section
      id="why"
      className="py-24 sm:py-32 bg-black border-t border-b border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-6">
            <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
              Why Concepta
            </span>
          </div>
          <h2
            id="why-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Why Work With Concepta?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A creative agency designed without the bloat, disconnected handoffs, or vanity metrics.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          id="why-pillars-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Compass;
            return (
              <div
                key={pillar.number}
                id={`why-pillar-${pillar.number}`}
                className="p-7 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <span className="text-xs text-gray-500 font-mono tracking-wider">
                    Pillar #{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
