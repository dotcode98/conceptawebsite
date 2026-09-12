import React from 'react';
import { APPROACH_STEPS } from '../data/agencyData';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  return (
    <section
      id="approach"
      className="py-24 sm:py-32 bg-black border-t border-b border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="mb-6">
            <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
              Our Approach
            </span>
          </div>
          <h2
            id="approach-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            From Idea to Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            A disciplined, 4-step creative execution cycle engineered for sustainable business results.
          </p>
        </div>

        {/* 4 Steps Cards in sequence */}
        <div
          id="approach-steps-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`approach-step-${step.number}`}
              className="relative p-7 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full">
                    {step.number}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                    Phase {idx + 1}
                  </span>
                </div>

                {/* Step Title & Core Description */}
                <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
                <p className="mt-3 text-xs text-gray-400 leading-normal">
                  {step.details}
                </p>
              </div>

              {/* Bottom decorative timeline indicator */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-gray-500">
                <span>Concepta Workflow</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line callout banner */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div
            id="approach-bottom-line"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-8 py-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-xl"
          >
            <div className="flex items-center gap-2 text-violet-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-violet-300 font-semibold">
                The Bottom Line
              </span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white font-display tracking-wide">
              Strategy + Creativity + Distribution ={' '}
              <span className="text-violet-400">
                Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
