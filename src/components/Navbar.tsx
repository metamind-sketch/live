import React from 'react';
import { CheckCircle2, Globe, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenCheckout,
}) => {
  return (
    <nav className="bg-white border-b border-slate-100 py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Lockup matching screenshot */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 p-0.5 shadow-xs flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border border-white/20">
              <span className="text-white font-extrabold text-xs tracking-tighter">META</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none">
                METAMINDS
              </span>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider hidden xs:inline">
                ACADEMY
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Meta Certified Partner Format</p>
          </div>
        </div>

        {/* Verified Badge and Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Verified Academy badge exact match to screenshot */}
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="whitespace-nowrap">Verified Masterclass</span>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(language === 'ta' ? 'en' : 'ta')}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-blue-700">{language === 'ta' ? 'தமிழ்' : 'English'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
