import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Check, 
  BarChart3, 
  Eye, 
  Flame 
} from 'lucide-react';
import { Language } from '../types';

interface DashboardProofSectionProps {
  language: Language;
}

export const DashboardProofSection: React.FC<DashboardProofSectionProps> = ({ language }) => {
  const [imageLoaded1, setImageLoaded1] = useState(true);
  const [imageLoaded2, setImageLoaded2] = useState(true);

  return (
    <section className="py-8 px-4 sm:px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Real Proof • Real Accounts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2.5">
            {language === 'ta' 
              ? 'Results Speak Louder Than Words' 
              : 'Proven Live Campaign Results'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            {language === 'ta'
              ? 'Bookish knowledge இல்ல, live-ஆ run பண்ணி profit பாத்த Meta Ads formulas!'
              : 'No theoretical guessing. Real tested strategies that produce high ROAS and scalable sales.'}
          </p>
        </div>

        {/* Dashboard Showcase Card */}
        <div className="bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl mb-6">
          <div className="p-3 bg-slate-900 flex items-center justify-between border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-slate-200">Meta Ads Manager Live Campaign</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              Active Scaling
            </span>
          </div>

          <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
            {imageLoaded1 ? (
              <img
                src="/src/assets/images/meta_ads_dashboard_showcase_1790745907588.jpg"
                alt="Meta Ads Performance Analytics Dashboard"
                referrerPolicy="no-referrer"
                onError={() => setImageLoaded1(false)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-center">
                <BarChart3 className="w-12 h-12 text-blue-400 mb-2 opacity-80" />
                <p className="text-sm font-bold text-white">Meta Ads Performance Showcase</p>
                <p className="text-xs text-slate-400">5.2X Return on Ad Spend (ROAS)</p>
              </div>
            )}
            
            {/* Live Metrics overlay */}
            <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="text-[10px] text-slate-400 block font-semibold">AD SPEND</span>
                <span className="text-xs sm:text-sm font-extrabold text-white tabular-nums">₹12,450</span>
              </div>
              <div className="border-x border-slate-700/60">
                <span className="text-[10px] text-slate-400 block font-semibold">REVENUE</span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400 tabular-nums">₹64,890</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-semibold">NET ROAS</span>
                <span className="text-xs sm:text-sm font-extrabold text-blue-400 tabular-nums">5.21X</span>
              </div>
            </div>
          </div>

          {/* Quick takeaway bar */}
          <div className="p-3.5 bg-slate-900/70 border-t border-slate-800 text-xs flex items-center justify-between">
            <span className="text-slate-300 font-medium">Average Cost Per Purchase / Lead:</span>
            <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/80">
              ₹11.40 / Lead
            </span>
          </div>
        </div>

        {/* Ad Creative Breakdown Showcase */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-1/3 aspect-square rounded-xl overflow-hidden bg-slate-200 border border-blue-200 shrink-0">
            {imageLoaded2 ? (
              <img
                src="/src/assets/images/ad_creative_breakdown_1790745934158.jpg"
                alt="High-Converting Reels & Feed Ad Mockup"
                referrerPolicy="no-referrer"
                onError={() => setImageLoaded2(false)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center">
                <Eye className="w-8 h-8 text-blue-500 mb-1" />
                <span className="text-[11px] font-bold text-slate-700">Ad Creative Blueprint</span>
              </div>
            )}
          </div>

          <div className="flex-1 text-left">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-[10px] font-black px-2 py-0.5 rounded uppercase mb-1.5">
              Day 2 Focus
            </div>
            <h3 className="text-base font-black text-slate-900 leading-tight mb-1.5">
              {language === 'ta' 
                ? 'High-Converting Ad Creatives & Video Hooks' 
                : 'High-Converting Ad Creatives & Video Hooks'}
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">
              {language === 'ta'
                ? '80% of Meta Ads success depends on your Creatives. Canva & AI tools use panni, high click-through-rate (CTR) ads create panna practical demo!'
                : 'Learn the exact 3-second hook structure that stops scroll on Instagram Reels and delivers qualified buyers at low CPM.'}
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-800">
              <span className="flex items-center gap-1 text-emerald-700">
                <Check className="w-3.5 h-3.5" /> 3.8% Average CTR
              </span>
              <span className="flex items-center gap-1 text-emerald-700">
                <Check className="w-3.5 h-3.5" /> ₹0.45 Cost Per Click
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
