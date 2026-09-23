import React from 'react';
import { Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';

interface HeroSectionProps {
  onWorkTogetherClick: () => void;
  onSeeWorkClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWorkTogetherClick,
  onSeeWorkClick,
}) => {
  const quickServices = [
    { title: 'Marketing', desc: 'Growth Strategy', href: '#services' },
    { title: 'Paid Ads', desc: 'Meta & Google', href: '#services' },
    { title: 'Content', desc: 'Video & Photo', href: '#services' },
    { title: 'Sales', desc: 'Lead Gen', href: '#services' },
  ];

  const featuredWork = CASE_STUDIES[0] || {
    title: 'Ember & Spice',
    subtitle: 'Restaurant Branding & Growth',
    image: '/src/assets/images/concepta_hero_visual_1788551060693.jpg',
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-black text-white"
    >
      {/* Ambient violet glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Col 7: Main Hero Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1
              id="hero-main-headline"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] mb-6 sm:mb-8 tracking-tight font-display text-white"
            >
              Your Business Deserves{' '}
              <span className="text-violet-400">More Than Just Marketing.</span>
            </h1>

            <p
              id="hero-subtext"
              className="text-lg sm:text-xl text-gray-400 max-w-lg mb-8 sm:mb-10 leading-relaxed font-normal"
            >
              We build the strategy, content, and campaigns that make your brand stand out and move people to action.
            </p>

            <div id="hero-cta-buttons" className="flex flex-wrap gap-4 items-center">
              <button
                id="hero-primary-cta"
                onClick={onWorkTogetherClick}
                className="bg-violet-600 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-violet-500 text-white transition-all cursor-pointer shadow-lg shadow-violet-600/20"
              >
                Let's Work Together →
              </button>
              <button
                id="hero-secondary-cta"
                onClick={onSeeWorkClick}
                className="border border-gray-700 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/5 text-white transition-all cursor-pointer"
              >
                See Our Work ↓
              </button>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-purple-300/80 uppercase tracking-widest">
              <span className="text-purple-200">Marketing</span>
              <span className="text-purple-400/50">•</span>
              <span className="text-purple-200">Ads</span>
              <span className="text-purple-400/50">•</span>
              <span className="text-purple-200">Content</span>
              <span className="text-purple-400/50">•</span>
              <span className="text-purple-200">Design</span>
              <span className="text-purple-400/50">•</span>
              <span className="text-purple-200">Sales</span>
            </div>
          </div>

          {/* Col 5: Right Aside Matrix + Featured Concept Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {/* Our Services 2x2 matrix */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono uppercase text-violet-400 tracking-widest font-semibold">
                  Our Services
                </h3>
                <a
                  href="#services"
                  onClick={handleScrollToServices}
                  className="text-xs text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-wider"
                >
                  View all (7) →
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickServices.map((srv) => (
                  <a
                    key={srv.title}
                    href={srv.href}
                    onClick={handleScrollToServices}
                    className="bg-zinc-800/90 p-4 rounded-xl border border-zinc-700/50 hover:border-violet-500/60 hover:bg-zinc-800 transition-all duration-200 group block"
                  >
                    <div className="text-sm font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      {srv.title}
                    </div>
                    <div className="text-[10px] text-gray-400">
                      {srv.desc}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Featured Work card */}
            <div className="relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 min-h-[260px] sm:min-h-[280px] flex flex-col justify-end shadow-xl">
              {/* Background visual */}
              <img
                src={featuredWork.image}
                alt={featuredWork.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 z-10" />

              {/* Top details */}
              <div className="absolute top-6 left-6 z-20 flex flex-col text-left">
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-1 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  Featured Work
                </span>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {featuredWork.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {featuredWork.subtitle}
                </p>
              </div>

              {/* Bottom right action */}
              <div className="absolute bottom-6 right-6 z-20">
                <button
                  onClick={onSeeWorkClick}
                  className="bg-white/10 backdrop-blur-md text-white text-xs font-bold py-2.5 px-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer shadow-lg"
                >
                  View Concept →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

