import React from 'react';
import { ConceptaLogo } from './ConceptaLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero-section' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Work', href: '#work' },
    { name: 'Why Concepta', href: '#why' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Marketing',
    'Paid Ads',
    'Design',
    'Editing',
    'Sales',
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-zinc-900 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <ConceptaLogo size="md" />
            <p className="font-display text-lg font-medium text-zinc-300">
              Ideas. Creativity. Growth.
            </p>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              A creative marketing agency helping businesses grow through marketing, paid advertising, content, design, and sales.
            </p>
            <div className="pt-2 space-y-1">
              <a
                href="mailto:growwithconcepta@gmail.com"
                className="text-xs text-gray-400 hover:text-white font-mono block transition-colors"
              >
                Direct Email: growwithconcepta@gmail.com
              </a>
              <a
                href="https://wa.me/8801758227620?text=Hi%20Concepta%20team%2C%20I%27d%20like%20to%20discuss%20creative%20marketing%20and%20growth%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400/90 hover:text-emerald-300 font-mono inline-flex items-center gap-1.5 transition-colors"
              >
                <span>WhatsApp: +880 1758-227620</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-white transition-colors opacity-75 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold mb-4">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {servicesList.map((service) => (
                <a
                  key={service}
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="hover:text-white transition-colors opacity-75 hover:opacity-100"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-4 text-xs font-mono text-gray-500 text-center md:text-left">
          <p>© 2026 Concepta. All rights reserved.</p>

          {/* Social handle links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-4 gap-y-1.5 text-gray-400">
            <span className="text-gray-500 w-full xs:w-auto block xs:inline mb-0.5 xs:mb-0">
              @growwithconcepta:
            </span>
            <a
              href="https://instagram.com/growwithconcepta"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-1 hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-zinc-700 select-none">•</span>
            <a
              href="https://facebook.com/growwithconcepta"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-1 hover:text-blue-400 transition-colors"
            >
              Facebook
            </a>
            <span className="text-zinc-700 select-none">•</span>
            <a
              href="https://linkedin.com/company/growwithconcepta"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-1 hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer py-1 px-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
