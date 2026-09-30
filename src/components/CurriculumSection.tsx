import React, { useState } from 'react';
import { 
  Laptop, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap,
  Target,
  FileSpreadsheet,
  Users
} from 'lucide-react';
import { CURRICULUM_DAYS, COURSE_DETAILS } from '../data/courseData';
import { Language } from '../types';

interface CurriculumSectionProps {
  language: Language;
  onOpenCheckout: () => void;
}

const IMAGE_DAYS = [
  {
    dayNumber: 1,
    headerGradient: 'from-[#ff0055] to-rose-600',
    borderClass: 'border-rose-200/90',
    checkBg: 'bg-rose-600',
    title: 'Meta Ads Basics & Campaign Setup',
    topics: [
      'Meta Ads Introduction',
      'Ads Manager Setup',
      'Business Portfolio & Ad Account',
      'Facebook Page & Instagram Connect',
      'Campaign Objectives Explained',
      'Campaign Structure (Campaign → Ad Set → Ad)',
      'Target Audience & Audience Research',
      'Location, Age, Gender, Interest Targeting',
      'Custom Audience & Lookalike (Intro)',
      'Ad Creative & Copywriting Basics',
    ],
    practicalBox: (
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center gap-2.5 shadow-2xs">
        <span className="text-2xl shrink-0">🚀</span>
        <div className="text-xs sm:text-sm font-black text-rose-700 leading-snug">
          Practical: First Meta Ads Campaign Setup
        </div>
      </div>
    ),
  },
  {
    dayNumber: 2,
    headerGradient: 'from-[#0066ff] to-blue-600',
    borderClass: 'border-blue-200/90',
    checkBg: 'bg-blue-600',
    title: 'Advanced Targeting & Practical Ads',
    topics: [
      'Detailed Targeting Strategies',
      'Custom Audience Creation',
      'Website & Customer List Audience',
      'Retargeting Basics',
      'Lookalike Audience',
      'Facebook & Instagram Placements',
      'Budget & Bidding Basics',
      'Ad Creative Creation using Canva',
      'Primary Text, Headline & Description',
      'Lead Generation / Traffic / Engagement Campaigns',
    ],
    practicalBox: (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2.5 shadow-2xs">
        <span className="text-2xl shrink-0">⚙️</span>
        <div className="text-xs sm:text-sm font-black text-blue-700 leading-snug">
          Practical: Create & Launch a Real Campaign
        </div>
      </div>
    ),
  },
  {
    dayNumber: 3,
    headerGradient: 'from-[#00b050] to-emerald-600',
    borderClass: 'border-emerald-200/90',
    checkBg: 'bg-emerald-600',
    title: 'Optimization, Retargeting & Scaling',
    topics: [
      'Meta Ads Performance Metrics',
      'CPM, CPC, CTR, CPL & ROAS',
      'Campaign Performance Analysis',
      'Ad Set & Ad-Level Optimization',
      'A/B Testing',
      'Retargeting Campaign Setup',
      'Scaling Winning Campaigns',
      'Budget Optimization',
      'Pixel & Conversion API – Introduction',
      'Common Mistakes & Policy Basics',
    ],
    practicalBox: (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 space-y-2 shadow-2xs">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-black text-emerald-800">
          <span className="text-xl">📊</span>
          <span className="leading-snug">Final Practical: Analyze & Optimize a Live Campaign</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-black text-emerald-800">
          <span className="text-xl">💬</span>
          <span className="leading-snug">Doubt Clearing Session</span>
        </div>
      </div>
    ),
  },
];

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  language,
  onOpenCheckout,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleExpand = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  return (
    <section className="py-8 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        
        {/* Style inspired by screenshot's blue card structure */}
        <div className="bg-sky-50/60 border border-sky-200 rounded-3xl p-4 sm:p-6 mb-8 text-center shadow-xs">
          
          {/* Dark pill header badge exact match to screenshot */}
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Laptop className="w-4 h-4 text-sky-400" />
            <span>Mobile & Laptop Meta Ads Masterclass</span>
          </div>

          {/* Subheading matching screenshot style */}
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
            {language === 'ta' ? (
              <>Computer / Mobile-ல Professional-ஆ Meta Ads Run Panni Sales & Leads Edukkalam!</>
            ) : (
              <>Master Professional Meta Ads On Mobile & PC — Launch Campaigns That Convert!</>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto mb-6">
            {language === 'ta'
              ? 'தேதி Oct 10, 11, 12 நடைபெறும் 3 நாட்கள் Live Zoom வகுப்பில் Practical-ஆக கத்துக்கோங்க. Zero Theory, 100% Action.'
              : 'Join the 3-Day Live Workshop on Dates Oct 10, 11, 12. Complete practical hands-on breakdown from setup to 4X ROAS.'}
          </p>

          {/* Day selection tabs */}
          <div className="grid grid-cols-3 gap-2 bg-white/80 p-1.5 rounded-xl border border-sky-100 shadow-2xs mb-6">
            {CURRICULUM_DAYS.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => {
                  setActiveDay(day.dayNumber);
                  setExpandedDay(day.dayNumber);
                }}
                className={`py-2 px-1 text-center rounded-lg transition-all text-xs font-bold cursor-pointer ${
                  activeDay === day.dayNumber
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] opacity-80 uppercase tracking-wider">
                  {day.date.split('—')[0]}
                </div>
                <div className="text-xs font-extrabold truncate">
                  {day.date.split('—')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Day Detail Card matching image.png */}
          {IMAGE_DAYS.filter((d) => d.dayNumber === activeDay).map((day) => (
            <div
              key={day.dayNumber}
              className={`bg-white rounded-2xl border-2 ${day.borderClass} shadow-md overflow-hidden text-left transition-all`}
            >
              {/* Header Badge exact from image */}
              <div className={`bg-gradient-to-r ${day.headerGradient} text-white px-4 py-2.5 flex items-center justify-between shadow-xs`}>
                <span className="text-base sm:text-lg font-black tracking-wide">
                  DAY {day.dayNumber}
                </span>
                <div className="flex items-center gap-1.5 bg-black/25 px-2.5 py-0.5 rounded-md text-[11px] font-bold">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>LIVE CLASS</span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                {/* Title exact from image */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-3.5">
                  {day.title}
                </h3>

                {/* 10 Bullet Points with colored circular checkmarks */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-5">
                  {day.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full ${day.checkBg} text-white flex items-center justify-center shrink-0 text-[10px] font-black mt-0.5 shadow-2xs`}>
                        ✓
                      </div>
                      <span className="font-semibold leading-relaxed text-slate-800">{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Practical Highlight Box exact from image */}
                {day.practicalBox}
              </div>
            </div>
          ))}

          {/* Quick CTA inside Curriculum section */}
          <div className="mt-6">
            <button
              onClick={onOpenCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Lock My Spot For Dates Oct 10, 11, 12 — ₹{COURSE_DETAILS.discountPrice}</span>
            </button>
            <p className="text-[11px] text-slate-500 font-medium mt-2">
              🔒 100% Safe Payment • Instant WhatsApp Group Entry
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
