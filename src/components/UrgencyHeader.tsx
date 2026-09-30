import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface UrgencyHeaderProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({
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
    <div className="bg-[#ffe4e6] border-b border-rose-200 py-2.5 px-4 text-center sticky top-0 z-40 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-rose-900 font-bold text-xs sm:text-sm tracking-wide">
        <Clock className="w-4 h-4 text-red-600 animate-pulse shrink-0" />
        <span className="uppercase text-red-700 tracking-wider">SPECIAL OFFER ENDS IN:</span>
        <span className="bg-red-600 text-white font-mono font-black px-2.5 py-0.5 rounded-sm shadow-xs text-xs sm:text-sm tracking-widest tabular-nums">
          {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};
