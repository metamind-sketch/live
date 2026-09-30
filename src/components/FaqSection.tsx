import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/courseData';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-8 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-2.5 mb-8">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help prompt */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
          <p className="text-xs font-bold text-emerald-950 mb-2">
            Still have any specific questions about dates 10, 11, 12?
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Coursezy%20Academy,%20I%20have%20a%20doubt%20about%20the%20Meta%20Ads%203-Days%20Live%20Masterclass%20(Dates%2010,11,12)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
