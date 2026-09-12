import React, { useState } from 'react';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface SelectedWorkSectionProps {
  onInquireAboutProject: (projectTitle: string) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  onInquireAboutProject,
}) => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-6">
            <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
              Selected Work
            </span>
          </div>
          <h2
            id="work-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            What We're Capable Of
          </h2>
          <p
            id="work-subheading"
            className="mt-4 text-lg sm:text-xl text-gray-400 font-normal leading-relaxed"
          >
            A selection of concepts, campaigns, and creative projects created by Concepta.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span>Concept prototypes & creative benchmarks</span>
          </div>
        </div>

        {/* Featured Case Study: Ember & Spice */}
        {CASE_STUDIES.length > 0 && (
          <div
            id="featured-case-ember-spice"
            className="mb-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden group shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image side */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-zinc-950">
                <img
                  src={CASE_STUDIES[0].image}
                  alt={CASE_STUDIES[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-xs font-semibold text-white">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    Concept Spotlight
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
                    {CASE_STUDIES[0].category}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    {CASE_STUDIES[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                    {CASE_STUDIES[0].subtitle}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mt-5">
                    {CASE_STUDIES[0].summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {CASE_STUDIES[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700/50 text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    id="btn-view-ember-spice"
                    onClick={() => setActiveModalStudy(CASE_STUDIES[0])}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/20 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-gray-500">Interactive Concept Breakdown</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Concept Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(1).map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-xs font-medium text-zinc-200">
                      Brand Concept
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
                    {study.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {study.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700/50 text-zinc-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 pt-2 flex items-center justify-between border-t border-zinc-800">
                <button
                  id={`btn-view-${study.id}`}
                  onClick={() => setActiveModalStudy(study)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Case Study Concept</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onInquire={(title) => {
          onInquireAboutProject(title);
        }}
      />
    </section>
  );
};
