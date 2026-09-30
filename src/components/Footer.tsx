import React from 'react';
import { ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 pb-28 sm:pb-24 px-4 sm:px-6 text-xs border-t border-slate-800">
      <div className="max-w-xl mx-auto text-center space-y-4">
        
        <div className="flex items-center justify-center gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-[10px]">
            M
          </div>
          <span className="font-extrabold text-sm text-white tracking-tight">
            METAMINDS ACADEMY
          </span>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
          Empowering entrepreneurs, marketers, and freelancers with high-performance Meta Ads skills to generate predictable leads & profitable sales.
        </p>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium pt-2">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure Checkout
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Instant Access
          </span>
        </div>

        {/* Disclaimer per advertising guidelines */}
        <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-4 leading-relaxed space-y-1">
          <p>
            Disclaimer: This site and training program is not part of the Facebook™ website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of META PLATFORMS, INC.
          </p>
          <p>
            © {new Date().getFullYear()} MetaMinds Academy. All Rights Reserved. Dates: 10, 11, 12 Live Workshop.
          </p>
        </div>

      </div>
    </footer>
  );
};
