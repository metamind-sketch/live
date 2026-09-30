import React from 'react';
import { 
  Zap, 
  Infinity, 
  ShieldCheck, 
  Trophy, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Video, 
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';
import { Language } from '../types';

interface HeroSectionProps {
  language: Language;
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenCheckout,
}) => {
  return (
    <section className="pt-6 pb-8 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Urgent Live Batch Dates Pill */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-2xs animate-gentle-bounce">
          <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            {language === 'ta' 
              ? '3 Days Live Batch: தேதி 10, 11, 12' 
              : '3 Days Live Workshop: Dates 10, 11, 12'}
          </span>
        </div>

        {/* Primary Headline matching screenshot structure */}
        <h1 className="text-3xl sm:text-4xl xs:text-3.5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-2">
          {language === 'ta' ? (
            <>
              Complete <span className="text-orange-600">3-Days Live</span>
              <br />
              Meta Ads Masterclass
            </>
          ) : (
            <>
              Complete <span className="text-orange-600">3-Days Live</span>
              <br />
              Meta Ads Masterclass
            </>
          )}
        </h1>

        {/* Subtitle matching screenshot */}
        <p className="text-base sm:text-lg font-extrabold tracking-wide uppercase text-blue-600 italic leading-snug mb-4">
          {language === 'ta' ? (
            <>
              Facebook & Instagram Ads
              <br />
              All–in–One
            </>
          ) : (
            <>
              Facebook & Instagram Ads
              <br />
              All–in–One
            </>
          )}
        </p>

        {/* Mixed Colors Highlight Bullet Flow with Arrows */}
        <div className="text-xs sm:text-sm font-bold leading-relaxed px-2 mb-6">
          <span className="text-emerald-600">Beginner Friendly</span>
          <span className="mx-1.5 text-slate-400">→</span>
          <span className="text-red-600">3 Days Live Zoom</span>
          <span className="mx-1.5 text-slate-400">→</span>
          <span className="text-purple-600">24/7 VIP Community</span>
          <br className="sm:hidden" />
          <span className="mx-1.5 text-slate-400 hidden sm:inline">→</span>
          <span className="text-blue-600">Language – Tamil + English</span>
          <span className="mx-1.5 text-slate-400">→</span>
          <span className="text-teal-600">100% Practical Implementation</span>
        </div>

        {/* The Signature Dashed Offer Box (Purple / Indigo Dashed Border matching screenshot) */}
        <div className="relative border-2 border-dashed border-indigo-500/80 bg-indigo-50/20 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
          <div className="flex items-center justify-between gap-4 border-b border-indigo-200/60 pb-3 mb-3">
            <div className="text-left">
              <span className="text-lg sm:text-xl font-black text-slate-900 block leading-tight">
                Limited
              </span>
              <span className="text-lg sm:text-xl font-black text-slate-900 block leading-tight">
                Offer
              </span>
            </div>

            <div className="text-right flex items-baseline gap-2">
              <span className="text-slate-400 text-lg sm:text-xl font-bold line-through">
                ₹{COURSE_DETAILS.originalPrice}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-orange-600 tracking-tight">
                ₹999
              </span>
              <span className="text-slate-900 font-bold text-base sm:text-lg">Only</span>
            </div>
          </div>

          {/* Offer inclusions inside box */}
          <div className="text-indigo-900 font-semibold text-xs sm:text-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>₹15,000+ Ad Creatives & Swipe Pack</span>
            <span className="text-indigo-400">●</span>
            <span>Lifetime Recording Access</span>
            <span className="text-indigo-400">●</span>
            <span>Dedicated Live Q&A</span>
          </div>
        </div>

        {/* Social Proof Badges matching screenshot (5.0 Rating | 1000+ Students) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">
          <div className="flex-1 bg-white border border-amber-200/90 rounded-xl py-2 px-3 flex items-center justify-center gap-2 shadow-2xs">
            <Trophy className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="font-extrabold text-xs sm:text-sm text-slate-900">
              {COURSE_DETAILS.rating} Rating
            </span>
          </div>

          <div className="flex-1 bg-white border border-indigo-200/90 rounded-xl py-2 px-3 flex items-center justify-center gap-2 shadow-2xs">
            <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-extrabold text-xs sm:text-sm text-slate-900">
              {COURSE_DETAILS.studentsCount} Students
            </span>
          </div>
        </div>

        {/* Primary CTA Button matching the high-converting orange button from screenshot */}
        <button
          onClick={onOpenCheckout}
          className="w-full pulse-cta bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 tracking-wide cursor-pointer active:scale-[0.98]"
        >
          <Zap className="w-5 h-5 fill-white text-white shrink-0" />
          <span>
            {language === 'ta' 
              ? `⚡ GET INSTANT ACCESS — ₹${COURSE_DETAILS.discountPrice}` 
              : `⚡ GET INSTANT ACCESS — ₹${COURSE_DETAILS.discountPrice}`}
          </span>
        </button>

        {/* Reassurance line under button matching screenshot */}
        <div className="flex items-center justify-center gap-4 text-slate-600 text-xs sm:text-sm font-semibold mt-3.5 mb-6">
          <div className="flex items-center gap-1.5">
            <Infinity className="w-4 h-4 text-blue-600" />
            <span>Lifetime Recording Access</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>100% Instant Delivery</span>
          </div>
        </div>

        {/* Live Workshop Timing Card with Round Border Animation */}
        <div className="relative p-[2.5px] rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10">
          {/* Animated Rotating Gradient Border going around */}
          <div className="absolute -inset-[150%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0_240deg,#3b82f6_280deg,#8b5cf6_320deg,#f97316_360deg)] opacity-90" />
          
          <div className="relative bg-black text-white rounded-[14px] p-4 sm:p-5 text-left">
            <div className="flex items-center justify-center gap-2 border-b border-slate-800 pb-2.5 mb-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider text-center">
                Upcoming Live Sessions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="flex items-center gap-2 bg-white text-slate-900 border border-slate-100 p-2.5 rounded-xl shadow-xs">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold uppercase">DATES</span>
                  <span className="font-extrabold text-slate-900 text-xs">Oct 10, 11, 12 Live</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white text-slate-900 border border-slate-100 p-2.5 rounded-xl shadow-xs">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-blue-600 block font-bold uppercase">TIMING</span>
                  <span className="font-black text-slate-900 text-xs">6:00 PM - 7:30 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white text-slate-900 border border-slate-100 p-2.5 rounded-xl shadow-xs">
                <Video className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold uppercase">PLATFORM</span>
                  <span className="font-extrabold text-slate-900 text-xs">Zoom Live + Q&A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
