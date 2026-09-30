import React, { useState } from 'react';
import { UrgencyHeader } from './components/UrgencyHeader';
import { HeroSection } from './components/HeroSection';
import { CurriculumSection } from './components/CurriculumSection';
import { BonusSection } from './components/BonusSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { MentorSection } from './components/MentorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { RecentSignupToast } from './components/RecentSignupToast';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ta');

  const handleOpenCheckout = () => {
    // Inactive button only - no page activation as requested
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Urgency Bar matching screenshot */}
      <UrgencyHeader initialHours={8} initialMinutes={37} initialSeconds={57} />

      {/* Main Content Area styled for high-converting sales landing page */}
      <main className="relative">
        {/* Hero Section matching screenshot layout */}
        <HeroSection
          language={language}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 3-Days Live Detailed Curriculum Roadmap (Dates 10, 11, 12) */}
        <CurriculumSection
          language={language}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Free Fast-Action Bonuses (Worth ₹9,999) */}
        <BonusSection
          language={language}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Target Audience: Who Is This For */}
        <TargetAudienceSection
          language={language}
        />

        {/* Mentor / Instructor Credentials */}
        <MentorSection
          language={language}
        />

        {/* Closing Ready to Master Meta Ads Section */}
        <TestimonialsSection
          language={language}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* Frequently Asked Questions */}
        <FaqSection
          language={language}
        />
      </main>

      {/* Mobile & Desktop Sticky Bottom Bar exact replica from screenshot */}
      <StickyBottomBar
        onOpenCheckout={handleOpenCheckout}
        initialHours={8}
        initialMinutes={37}
        initialSeconds={57}
      />

      {/* Real-time subtle social proof toast */}
      <RecentSignupToast />
    </div>
  );
}
