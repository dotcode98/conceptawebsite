import React, { useState, useEffect } from 'react';
import { ConceptaLogo } from './ConceptaLogo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#approach' },
    { name: 'Work', href: '#work' },
    { name: 'Why Us', href: '#why' },
    { name: 'Industries', href: '#industries' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800/90 shadow-2xl shadow-black/80 py-4'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo-link"
          className="group flex items-center transition-transform hover:opacity-95"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ConceptaLogo size="md" />
        </a>

        {/* Desktop Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-white opacity-60 hover:opacity-100 hover:text-violet-400 transition-all duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-contact-button"
            onClick={onOpenContact}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-black bg-white hover:bg-violet-400 hover:text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <span className="text-black group-hover:text-white transition-colors">→</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-medium text-white/70 hover:text-violet-400 py-2 border-b border-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-black bg-white hover:bg-violet-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Let's Talk →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
