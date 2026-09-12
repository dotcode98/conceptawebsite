import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInquire,
}) => {
  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    if (!caseStudy) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn cursor-pointer"
      role="dialog"
      aria-modal="true"
      aria-label={`${caseStudy.title} Case Study`}
    >
      {/* Floating Viewport Close / Back Button */}
      <button
        id="case-study-floating-close-btn"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Go back and close modal"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-violet-500/50 shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer group"
      >
        <div className="w-6 h-6 rounded-full bg-zinc-800 group-hover:bg-violet-600/30 flex items-center justify-center text-white transition-colors">
          <X className="w-4 h-4 text-gray-200 group-hover:text-white" />
        </div>
        <span className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-200 group-hover:text-white">
          Back
        </span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-gray-400">
          ESC
        </kbd>
      </button>

      <div
        id="case-study-modal"
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Card Header Close Button */}
        <button
          id="case-study-card-close-btn"
          onClick={onClose}
          aria-label="Close modal and go back"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/95 border border-white/20 hover:border-violet-400/50 text-white flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <X className="w-5 h-5 text-gray-200 group-hover:text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600 backdrop-blur-md text-xs font-bold text-white shadow-md">
              <Sparkles className="w-3 h-3" />
              Creative Concept
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
              {caseStudy.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-gray-300 mt-1 font-medium">{caseStudy.subtitle}</p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700/50 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Concept Brief */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-2">
              Concept Overview
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {caseStudy.summary}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
              {caseStudy.conceptBrief}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-400" />
              Creative & Strategic Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-xs sm:text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projected Impact / Strategy */}
          <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-800/40">
            <span className="text-xs font-mono font-bold text-violet-300 uppercase tracking-wider block mb-1">
              Performance Hypothesis
            </span>
            <p className="text-xs sm:text-sm text-gray-300">
              {caseStudy.resultsHypothesis}
            </p>
          </div>

          {/* Action footer */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              Interested in a similar concept for your brand?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                id="modal-footer-back-btn"
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/60 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Go Back</span>
              </button>
              <button
                id="modal-footer-inquire-btn"
                onClick={() => {
                  onInquire(caseStudy.title);
                  onClose();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all cursor-pointer"
              >
                <span>Build Something Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
