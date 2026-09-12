import React from 'react';
import { ArrowRight, Compass, Sparkles, Megaphone, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const steps = [
    { title: 'Strategy', icon: Compass, label: '01', desc: 'Market insights & roadmap' },
    { title: 'Create', icon: Sparkles, label: '02', desc: 'Content, design & visual media' },
    { title: 'Promote', icon: Megaphone, label: '03', desc: 'Paid ads & distribution' },
    { title: 'Grow', icon: TrendingUp, label: '04', desc: 'Sales, leads & retention' },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-black border-t border-b border-zinc-900 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Marker */}
          <div className="mb-6">
            <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
              About Concepta
            </span>
          </div>

          {/* Heading */}
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            More Than Just a Creative Agency.
          </h2>

          {/* Copy */}
          <div className="mt-8 space-y-5 text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            <p>
              We combine{' '}
              <span className="text-white font-semibold">
                strategy, creativity, content, and marketing
              </span>{' '}
              to help businesses become more visible, more memorable, and more profitable.
            </p>
            <p className="text-base sm:text-lg text-gray-400">
              From your first idea to the final campaign, Concepta helps you build a stronger
              digital presence and turn attention into action.
            </p>
          </div>

          {/* Small Visual: Strategy → Create → Promote → Grow */}
          <div className="mt-16 pt-8 border-t border-zinc-900">
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
              Our Core Formula For Real Impact
            </p>

            <div
              id="about-flow-steps"
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    id={`flow-step-${item.title.toLowerCase()}`}
                    className="relative group p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-900/80 transition-all duration-200 text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-violet-400 font-mono">
                          {item.label}
                        </span>
                        <Icon className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Step indicator arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
