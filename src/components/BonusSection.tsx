import React from 'react';
import { Gift, Zap } from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';
import { Language } from '../types';

interface BonusSectionProps {
  language: Language;
  onOpenCheckout: () => void;
}

const IMAGE_BONUSES = [
  {
    title: 'Ad Creative Templates (Canva)',
    description: 'Ready-to-use high-converting Canva feed, story & reel ad templates',
    value: '₹2,499',
    iconBg: 'bg-gradient-to-br from-sky-400 to-blue-600',
    emoji: '🎨',
  },
  {
    title: 'Audience Research Guides',
    description: 'Laser-targeting buyer personas, interest stacks & demographic breakdowns',
    value: '₹1,999',
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    emoji: '🔍',
  },
  {
    title: 'Campaign Checklist',
    description: 'Pre-launch setup & scaling checklist to prevent wasted ad budget',
    value: '₹1,499',
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
    emoji: '📋',
  },
  {
    title: 'Sample Ad Copies',
    description: 'Plug-and-play hook & offer copywriting swipe templates in Tamil & English',
    value: '₹1,999',
    iconBg: 'bg-gradient-to-br from-rose-500 to-red-600',
    emoji: '📄',
  },
  {
    title: 'Useful Tools List',
    description: 'Curated list of competitor spy tools, free AI copywriters & analytics tools',
    value: '₹999',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    emoji: '✂️',
  },
  {
    title: 'Lifetime Access Recordings',
    description: 'Unlimited replay access to all 3 days live workshop video recordings',
    value: '₹2,999',
    iconBg: 'bg-gradient-to-br from-slate-800 to-slate-950',
    emoji: '🎬',
  },
];

export const BonusSection: React.FC<BonusSectionProps> = ({
  language,
  onOpenCheckout,
}) => {
  return (
    <section className="py-8 px-4 sm:px-6 bg-gradient-to-b from-amber-50/50 to-orange-50/30 border-y border-amber-200/60">
      <div className="max-w-xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>Free Fast-Action Bonuses</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {language === 'ta' ? (
              <>Register பண்ணும் அனைவருக்கும் <br /><span className="text-amber-600">₹9,999 Value Bonuses</span> முற்றிலும் இலவசம்!</>
            ) : (
              <>Included Absolutely Free: <br /><span className="text-amber-600">₹9,999 Worth VIP Bonuses</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            {language === 'ta'
              ? 'இந்த பேட்ச்சில் சேரும் நபர்களுக்கு மட்டும் கிடைக்கும் பிரத்தியேக SOPs & Templates.'
              : 'Exclusive assets available free only for students registering for dates 10, 11, 12.'}
          </p>
        </div>

        {/* Bonus Card exactly matching image.png */}
        <div className="bg-white rounded-2xl border-2 border-red-200/90 shadow-md overflow-hidden mb-6">
          {/* Header pill exact from image */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 px-4 flex items-center justify-center gap-2 shadow-xs">
            <span className="text-xl">🎁</span>
            <span className="text-lg sm:text-xl font-black tracking-wider uppercase">
              BONUS
            </span>
          </div>

          {/* 6 Bonus Items exact from image.png */}
          <div className="divide-y divide-slate-100 p-2 sm:p-3">
            {IMAGE_BONUSES.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-3 p-3 sm:p-3.5 hover:bg-slate-50/80 rounded-xl transition-colors text-left"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs text-xl`}
                  >
                    {item.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium truncate sm:whitespace-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 line-through block">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    FREE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Bonuses CTA Card */}
        <div className="bg-white border-2 border-dashed border-amber-400 rounded-2xl p-4 text-center">
          <p className="text-xs font-bold text-slate-700 mb-3">
            🔥 All 6 Bonuses will be unlocked inside your VIP WhatsApp Group immediately upon registration!
          </p>

          <button
            onClick={onOpenCheckout}
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Claim Bonuses + Join 3-Days Live for ₹{COURSE_DETAILS.discountPrice}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
