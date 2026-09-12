import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { ConceptaLogo } from './ConceptaLogo';

interface CtaSectionProps {
  onStartConversation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartConversation }) => {
  return (
    <section
      id="cta-section"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 md:p-16 bg-zinc-900/50 border border-zinc-800 shadow-2xl overflow-hidden text-center">
          {/* Subtle violet ambient backlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="text-violet-500 font-mono text-xs tracking-widest uppercase font-semibold">
                Start A Conversation
              </span>
            </div>

            {/* Concepta Logo Mark Accent */}
            <div className="flex justify-center mb-6">
              <ConceptaLogo variant="mark-only" size="lg" />
            </div>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Ready to Grow Your Brand?
            </h2>

            {/* Supporting copy */}
            <p
              id="cta-copy"
              className="mt-6 text-lg sm:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Tell us about your business, your goals, and where you want to go. We'll figure out how Concepta can help.
            </p>

            {/* Button */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <button
                id="cta-start-conversation-btn"
                onClick={onStartConversation}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/25 transition-all duration-200 cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Small text */}
              <p
                id="cta-small-text"
                className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-wider flex items-center gap-2 mt-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>No complicated forms • Just a conversation</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
