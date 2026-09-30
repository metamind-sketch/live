import React from 'react';
import { Flame } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsSectionProps {
  language: Language;
  onOpenCheckout?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenCheckout,
}) => {
  return (
    <section className="py-10 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-xl mx-auto relative z-10 text-center">
        
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
          Ready to Master Meta Ads? 🚀
        </h2>

        {/* Subtitle Badge */}
        <div className="inline-block bg-blue-500/20 border border-blue-400/40 text-blue-300 font-extrabold text-sm sm:text-base px-4 py-1.5 rounded-full mb-4 shadow-xs">
          10 • 11 • 12 — 3 Days. One Powerful Skill.
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-6">
          Zero-லிருந்து தொடங்கி,<br />
          <span className="text-white font-bold">Facebook & Instagram Ads-ஐ Practical-ஆ</span> கற்றுக்கொள்ளுங்கள்.
        </p>

        {/* 5 Feature Checklist */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-left space-y-3 mb-6 shadow-lg backdrop-blur-xs">
          {[
            'Live Practical Training',
            'Real Campaign Practice',
            'Live Doubt Clearing',
            'Course Resources',
            'Certificate (if provided)',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-black border border-emerald-500/40">
                ✓
              </div>
              <span className="text-sm sm:text-base font-bold text-slate-100">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bonus Highlight Card */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/15 to-amber-500/10 border-2 border-dashed border-amber-400/60 rounded-2xl p-4 sm:p-5 mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-xs">
            <span>🎁</span>
            <span>BONUS</span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-amber-300 mb-1">
            Join Now & Unlock Your Exclusive Bonuses!
          </h3>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-800/60 mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>Seats are Limited!</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenCheckout}
          className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer pulse-cta mb-5"
        >
          <Flame className="w-5 h-5 text-yellow-200 fill-yellow-200" />
          <span>🔥 RESERVE YOUR SEAT</span>
        </button>

        {/* Footer Tagline */}
        <p className="text-xs sm:text-sm font-extrabold text-blue-300 tracking-wide">
          10 | 11 | 12 — உங்கள் Meta Ads Journey இங்கே தொடங்கட்டும்! 🚀
        </p>

      </div>
    </section>
  );
};
