import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenCheckout,
  initialHours = 8,
  initialMinutes = 37,
  initialSeconds = 57,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-2.5 px-4 shadow-2xl">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
        {/* Left Side exact replica from screenshot */}
        <div className="text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-sm">🔥</span>
            <span className="text-sm sm:text-base font-black text-white tracking-tight">
              ₹{COURSE_DETAILS.discountPrice} Only
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium block mt-0.5 tabular-nums">
            Offer ends in {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
          </span>
        </div>

        {/* Right Side BUY NOW Button exact replica from screenshot */}
        <button
          onClick={onOpenCheckout}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-xs sm:text-sm py-2.5 px-5 sm:px-6 rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-1.5 uppercase tracking-wider cursor-pointer shrink-0"
        >
          <span>BUY NOW ₹{COURSE_DETAILS.discountPrice}</span>
        </button>
      </div>
    </div>
  );
};
