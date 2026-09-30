import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle } from 'lucide-react';

const RECENT_ENROLLMENTS = [
  { name: 'Senthil', city: 'Chennai', time: '2 mins ago' },
  { name: 'Divya', city: 'Coimbatore', time: '4 mins ago' },
  { name: 'Arun', city: 'Madurai', time: '7 mins ago' },
  { name: 'Praveen', city: 'Trichy', time: '9 mins ago' },
  { name: 'Kavitha', city: 'Salem', time: '11 mins ago' },
  { name: 'Vignesh', city: 'Bengaluru', time: '14 mins ago' },
];

export const RecentSignupToast: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show toast after 4 seconds initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_ENROLLMENTS.length);
        setVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const current = RECENT_ENROLLMENTS[currentIdx];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-xl p-2.5 shadow-lg flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 fill-emerald-600" />
        </div>
        <div className="text-left text-xs leading-tight">
          <span className="font-extrabold text-slate-900 block">
            {current.name} from {current.city}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Enrolled for Dates 10, 11, 12 • <span className="text-emerald-600 font-semibold">{current.time}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
