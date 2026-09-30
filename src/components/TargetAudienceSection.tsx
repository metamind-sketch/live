import React from 'react';
import { ShoppingBag, Briefcase, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/courseData';
import { Language } from '../types';

interface TargetAudienceSectionProps {
  language: Language;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Target Audience
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2.5">
            {language === 'ta' ? (
              <>
                இந்த <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">3 நாட்கள் Masterclass</span> <span className="text-orange-500">யாருக்கு?</span>
              </>
            ) : (
              <>
                Who Is This <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">3-Day Masterclass</span> <span className="text-orange-500">For?</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            {language === 'ta'
              ? 'நீங்கள் இந்த 4 பிரிவில் ஒருவராக இருந்தால், இந்த வகுப்பு உங்கள் வருமானத்தை பல மடங்கு உயர்த்தும்!'
              : 'If you belong to any of these categories, this workshop will transform your results.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 hover:border-blue-400 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-sm sm:text-base font-black text-blue-900 mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative p-[2.5px] rounded-2xl overflow-hidden shadow-md shadow-emerald-500/10">
          {/* Animated Rotating Gradient Border */}
          <div className="absolute -inset-[150%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0_240deg,#10b981_280deg,#3b82f6_320deg,#10b981_360deg)] opacity-95" />
          
          <div className="relative bg-emerald-50 rounded-[14px] p-3.5 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs font-bold text-emerald-950 leading-relaxed">
              {language === 'ta'
                ? 'Prior technical experience எதுவும் தேவையில்லை. Zero-விலிருந்து step-by-step சொல்லித்தரப்படும்!'
                : 'No prior coding or technical knowledge required. Step-by-step guidance from zero level.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
