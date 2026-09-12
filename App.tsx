/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { WhyConceptaSection } from './components/WhyConceptaSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>();

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      const navOffset = 80;
      const elementPosition = workElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleSelectIndustry = (industryName: string) => {
    setSelectedIndustry(industryName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-600 selection:text-white antialiased">
      {/* 00. Sticky Navbar */}
      <Navbar onOpenContact={scrollToContact} />

      <main>
        {/* 01. Hero Section */}
        <HeroSection
          onWorkTogetherClick={scrollToContact}
          onSeeWorkClick={scrollToWork}
        />

        {/* 02. What is Concepta? */}
        <AboutSection />

        {/* 03. Services (7 Cards) */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* 04. Our Approach (4 Steps) */}
        <ApproachSection />

        {/* 05. Selected Work (What We're Capable Of) */}
        <SelectedWorkSection onInquireAboutProject={handleSelectService} />

        {/* 06. Why Concepta? */}
        <WhyConceptaSection />

        {/* 07. Who We Work With (Built for Ambitious Businesses) */}
        <IndustriesSection onSelectIndustryForInquiry={handleSelectIndustry} />

        {/* 08. Big CTA Section */}
        <CtaSection onStartConversation={scrollToContact} />

        {/* 09. Contact Section (WhatsApp, Email, Minimal Form) */}
        <ContactSection
          key={`${selectedService || ''}-${selectedIndustry || ''}`}
          initialService={selectedService}
          initialIndustry={selectedIndustry}
        />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
