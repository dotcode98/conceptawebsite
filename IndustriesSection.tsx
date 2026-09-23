import React from 'react';
import {
  GraduationCap,
  UtensilsCrossed,
  Briefcase,
  Sparkles,
  Dumbbell,
  ShoppingBag,
  Laptop,
  Rocket,
  HeartPulse,
  ShieldCheck,
  Compass,
  Car,
  UserCheck,
  Store,
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { INDUSTRY_NICHES } from '../data/agencyData';
import { IndustryNiche } from '../types';

interface IndustriesSectionProps {
  onSelectIndustryForInquiry: (industryName: string) => void;
}

const MARQUEE_ITEMS = [
  'EDUCATION',
  'RESTAURANTS',
  'HEALTHCARE',
  'E-COMMERCE',
  'SAAS',
  'FITNESS',
  'BEAUTY',
  'STARTUPS',
  'AUTOMOTIVE',
  'TRAVEL',
  'LOCAL BUSINESSES',
  'MORE',
];

interface PillIndustry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const MORE_PILL_INDUSTRIES: PillIndustry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    description: 'Build trust, educate audiences, and attract more patients.',
    icon: 'HeartPulse',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Build authority and generate consistent, qualified enquiries.',
    icon: 'ShieldCheck',
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'Create visual experiences that inspire attention and bookings.',
    icon: 'Compass',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Showcase products, services, and offers through high-impact content.',
    icon: 'Car',
  },
  {
    id: 'creators',
    title: 'Personal Brands & Creators',
    description: 'Build a recognizable personal brand through strategic content.',
    icon: 'UserCheck',
  },
  {
    id: 'local-business',
    title: 'Local Businesses',
    description: 'Get discovered locally and turn attention into consistent enquiries.',
    icon: 'Store',
  },
];

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryForInquiry,
}) => {
  const getIcon = (iconName: string, className = 'w-5 h-5 text-violet-400') => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Dumbbell':
        return <Dumbbell className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Laptop':
        return <Laptop className={className} />;
      case 'Rocket':
        return <Rocket className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'Store':
        return <Store className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="industries" className="py-24 sm:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
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
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Specialized marketing and creative frameworks customized for high-potential industries.
          </p>
        </div>

        {/* 1. Core Primary Industries (5 Cards) */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
              Core Specializations
            </span>
            <div className="h-px flex-1 bg-zinc-800/80" />
          </div>

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
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Editorial Showcase: "WE WORK ACROSS INDUSTRIES" */}
        <div id="additional-industries-showcase" className="mt-24 pt-20 border-t border-zinc-800/90">
          {/* Showcase Section Heading */}
          <div className="max-w-3xl mb-12">
            <div className="mb-4">
              <span className="text-violet-400 font-mono text-xs tracking-widest uppercase font-semibold">
                WE WORK ACROSS INDUSTRIES
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Different Businesses. <br className="hidden sm:inline" />
              <span className="text-violet-400">One Obsession: Growth.</span>
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-normal">
              From education and restaurants to SaaS, e-commerce, healthcare, and emerging brands — we build marketing that fits the business, not the other way around.
            </p>
          </div>

          {/* Part 1 — Industry Horizontal Marquee */}
          <div className="mb-14 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
            <div className="marquee-container relative w-full overflow-hidden border-y border-zinc-800/80 bg-zinc-950/60 py-4.5 group backdrop-blur-sm">
              {/* Subtle edge fade masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

              <div className="animate-marquee-track flex items-center select-none">
                {/* Loop Sequence A */}
                <div className="flex items-center gap-7 sm:gap-10 pr-7 sm:pr-10 shrink-0">
                  {MARQUEE_ITEMS.map((item, idx) => (
                    <React.Fragment key={`marquee-a-${idx}`}>
                      <span className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-zinc-400 hover:text-white transition-colors">
                        {item}
                      </span>
                      <span className="text-violet-400/70 text-sm sm:text-base select-none">
                        •
                      </span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Loop Sequence B (duplicate for continuous smooth loop) */}
                <div className="flex items-center gap-7 sm:gap-10 pr-7 sm:pr-10 shrink-0" aria-hidden="true">
                  {MARQUEE_ITEMS.map((item, idx) => (
                    <React.Fragment key={`marquee-b-${idx}`}>
                      <span className="font-mono text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-zinc-400 hover:text-white transition-colors">
                        {item}
                      </span>
                      <span className="text-violet-400/70 text-sm sm:text-base select-none">
                        •
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 — Asymmetric Editorial Layout (Featured 3 Industries) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {/* Feature 1: E-Commerce & D2C Brands (Large Desktop Feature: lg:col-span-7) */}
            <div
              id="featured-industry-ecommerce"
              className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle ambient gradient mesh */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-3xl pointer-events-none rounded-full group-hover:bg-violet-600/15 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                    RETAIL & D2C
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                  E-Commerce & D2C Brands
                </h4>

                <p className="mt-3 text-sm sm:text-base text-violet-400/90 font-medium">
                  “Create content and campaigns that attract, engage, and convert.”
                </p>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed font-normal max-w-lg">
                  Scroll-stopping video hooks, high-ROAS catalog scaling on Meta and TikTok, and retention creative designed to lower acquisition costs.
                </p>

                {/* Abstract CSS Graphic: E-commerce conversion & product wireframe widget */}
                <div className="mt-8 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-sm group-hover:border-zinc-700/90 group-hover:scale-[1.01] transition-all duration-500">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 text-xs font-mono">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Ad Campaign</span>
                    </div>
                    <span className="text-violet-300 font-semibold">+184% CVR</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800">
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">ROAS</span>
                      <span className="text-sm font-bold text-white font-mono">4.62x</span>
                    </div>
                    <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800">
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">AOV</span>
                      <span className="text-sm font-bold text-white font-mono">$138</span>
                    </div>
                    <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800">
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">CTR</span>
                      <span className="text-sm font-bold text-violet-400 font-mono">3.4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800 relative z-10">
                <button
                  onClick={() => onSelectIndustryForInquiry('E-commerce & D2C Brands')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer group/btn"
                >
                  <span>Start an E-commerce Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                </button>
              </div>
            </div>

            {/* Feature 2: Technology & SaaS (Beside it: lg:col-span-5) */}
            <div
              id="featured-industry-saas"
              className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle ambient gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-3xl pointer-events-none rounded-full group-hover:bg-violet-600/15 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                    <Laptop className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                    SOFTWARE & B2B TECH
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                  Technology & SaaS
                </h4>

                <p className="mt-3 text-sm sm:text-base text-violet-400/90 font-medium">
                  “Turn complex products into clear, compelling marketing.”
                </p>

                <p className="mt-2 text-sm text-gray-400 leading-relaxed font-normal">
                  Distill complex software architecture into crisp product-led stories, feature breakdown clips, and high-intent acquisition pipelines.
                </p>

                {/* Abstract CSS Graphic: Sleek code pipeline / SaaS metrics node */}
                <div className="mt-8 p-4.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 font-mono text-xs text-gray-300 group-hover:border-zinc-700/90 group-hover:scale-[1.01] transition-all duration-500">
                  <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-zinc-800 text-[11px] text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-zinc-600" />
                    <span className="w-2 h-2 rounded-full bg-zinc-600" />
                    <span className="w-2 h-2 rounded-full bg-zinc-600" />
                    <span className="ml-2 text-gray-400">positioning.engine</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-zinc-400">
                      <span className="text-violet-400">const</span> message = <span className="text-emerald-400">"Clear Value"</span>;
                    </div>
                    <div className="text-zinc-400">
                      <span className="text-violet-400">await</span> demo.<span className="text-purple-300">accelerateTrial</span>();
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5 pt-1">
                      <span className="text-violet-400">✓</span> High-Intent Signups Active
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800 relative z-10">
                <button
                  onClick={() => onSelectIndustryForInquiry('Technology & SaaS')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer group/btn"
                >
                  <span>Start a SaaS Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                </button>
              </div>
            </div>

            {/* Feature 3: Startups & New Brands (Large Horizontal Feature: col-span-12) */}
            <div
              id="featured-industry-startups"
              className="col-span-1 md:col-span-2 lg:col-span-12 p-7 sm:p-9 lg:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 group shadow-xl hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Ambient radial blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-64 bg-violet-600/10 blur-3xl pointer-events-none rounded-full group-hover:bg-violet-600/15 transition-colors duration-500" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left col: Messaging & CTA */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                        <Rocket className="w-5 h-5 text-violet-400" />
                      </div>
                      <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                        VENTURE & SCALE-UPS
                      </span>
                    </div>

                    <h4 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                      Startups & New Brands
                    </h4>

                    <p className="mt-3 text-base sm:text-lg text-violet-400/90 font-medium">
                      “Build a strong brand, content, and marketing foundation from the ground up.”
                    </p>

                    <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal max-w-xl">
                      From zero to traction: establishing sharp brand identity, high-converting launch content, and repeatable customer acquisition loops designed for speed.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800">
                    <button
                      onClick={() => onSelectIndustryForInquiry('Startups & New Brands')}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer group/btn"
                    >
                      <span>Start a Startup Launch Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                    </button>
                  </div>
                </div>

                {/* Right col: Abstract launch telemetry & roadmap graphic */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 group-hover:border-zinc-700/90 group-hover:scale-[1.01] transition-all duration-500">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-xs font-mono">
                      <span className="text-gray-400 uppercase tracking-wider">Launch Velocity</span>
                      <span className="text-violet-400 font-semibold">Traction Stage</span>
                    </div>

                    {/* Step milestones */}
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                        <div className="flex items-center gap-2.5 text-white">
                          <span className="w-5 h-5 rounded-md bg-violet-500/20 text-violet-300 flex items-center justify-center text-[10px] font-bold">01</span>
                          <span>Brand Identity & Positioning</span>
                        </div>
                        <span className="text-[11px] text-emerald-400">Complete</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                        <div className="flex items-center gap-2.5 text-white">
                          <span className="w-5 h-5 rounded-md bg-violet-500/20 text-violet-300 flex items-center justify-center text-[10px] font-bold">02</span>
                          <span>Hero Content & Funnel Asset</span>
                        </div>
                        <span className="text-[11px] text-emerald-400">Deployed</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 border border-violet-500/30">
                        <div className="flex items-center gap-2.5 text-white">
                          <span className="w-5 h-5 rounded-md bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">03</span>
                          <span>Acquisition & Scaling Loop</span>
                        </div>
                        <span className="text-[11px] text-violet-300 animate-pulse">Accelerating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3 — More Industries ("AND MORE" Compact Pills Section) */}
          <div className="mt-16 sm:mt-20 p-7 sm:p-9 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full inline-block mb-3">
                AND MORE
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Additional Industries We Partner With
              </h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed font-normal">
                We work with ambitious businesses across industries — even if you don't see yours here.
              </p>
            </div>

            {/* Interactive Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {MORE_PILL_INDUSTRIES.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => onSelectIndustryForInquiry(industry.title)}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-violet-500/40 hover:bg-zinc-800/70 transition-all duration-200 text-left group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                    {getIcon(industry.icon, 'w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-display font-semibold text-sm text-white group-hover:text-violet-200 transition-colors truncate">
                      {industry.title}
                    </span>
                    <span className="block text-xs text-gray-400 font-normal leading-relaxed line-clamp-1">
                      {industry.description}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Part 4 — Final CTA: "Don't see your industry?" */}
          <div
            id="industry-custom-cta"
            className="mt-14 sm:mt-18 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-950 border border-zinc-800 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Ambient lavender glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-36 bg-violet-600/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-violet-400 font-mono text-xs uppercase tracking-widest font-semibold mb-3">
                Don’t see your industry?
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Let’s talk about what you’re building.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed font-normal">
                From novel concepts to specialized business models, we build tailored marketing and content systems that deliver growth.
              </p>
              <button
                onClick={() => onSelectIndustryForInquiry('Custom Industry Inquiry')}
                className="mt-7 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
