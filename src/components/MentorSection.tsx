import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';
import { Language } from '../types';

interface MentorSectionProps {
  language: Language;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ language }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section className="py-10 px-4 sm:px-6 bg-gradient-to-b from-[#070d19] via-[#0d1b33] to-[#070d19] text-white border-y border-blue-900/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3.5 py-1 rounded-full border border-blue-800">
            MEET YOUR LEAD MENTOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2.5">
            Learn From a real Meta Ads Expert
          </h2>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-700 border-2 border-blue-500/60 shrink-0 shadow-md">
              {imageLoaded ? (
                <img
                  src="/src/assets/images/trainer_mentor_portrait_1790745919834.jpg"
                  alt="Hariharan - Meta Ads Growth Mentor"
                  referrerPolicy="no-referrer"
                  onError={() => setImageLoaded(false)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-blue-950">
                  <Award className="w-8 h-8 text-blue-400 mb-1" />
                  <span className="text-[10px] font-bold text-slate-300">Lead Mentor</span>
                </div>
              )}
            </div>

            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-[11px] font-bold px-2 py-0.5 rounded border border-blue-500/30 mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Meta Certified Media Buyer</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Hariharan</h3>
              <p className="text-xs sm:text-sm text-white font-medium">
                Founder, Coursezy Academy & Performance Growth Marketer
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3 text-[11px] font-semibold text-slate-300">
                <span className="bg-slate-700/60 px-2 py-1 rounded text-emerald-400 border border-slate-600">
                  ⚡ {COURSE_DETAILS.adSpendHandled} Ad Spend
                </span>
                <span className="bg-slate-700/60 px-2 py-1 rounded text-blue-300 border border-slate-600">
                  🎓 {COURSE_DETAILS.studentsCount} Trained
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/80 pt-4 space-y-2.5 text-xs text-slate-300">
            <p className="leading-relaxed">
              {language === 'ta'
                ? '"நான் Meta Ads-ல பல லட்சங்கள் செலவு செய்து, பல தவறுகள் செய்து கத்துக்கிட்ட நுணுக்கங்களை இந்த 3 நாட்கள் Live வகுப்பில் நேரடியாக கத்துக் கொடுப்பேன். No complicated jargon, only what works in 2026!"'
                : '"I won\'t waste your time with generic textbook definitions. Over 3 live evenings on dates 10, 11, and 12, I will open my actual Meta Ads Manager and show you exactly how profitable campaigns are built and scaled."'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-emerald-300 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero fluff, 100% actionable screen sharing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open interactive Q&A every single day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
