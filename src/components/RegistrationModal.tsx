import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  MessageCircle, 
  Clock, 
  Video, 
  ArrowRight, 
  Lock, 
  QrCode, 
  CreditCard, 
  Smartphone,
  Copy,
  Download
} from 'lucide-react';
import { COURSE_DETAILS } from '../data/courseData';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessType: 'E-Commerce / D2C',
    experienceLevel: 'Complete Beginner',
    paymentMethod: 'upi',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      return;
    }
    setStep('payment');
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1200);
  };

  const handleCopyZoom = () => {
    navigator.clipboard.writeText('https://zoom.us/j/98421038291?pwd=metaminds_batch10_11_12');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Google Calendar URL generator for 10th, 11th, 12th
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Meta Ads 3-Days Live Masterclass (Dates 10, 11, 12)");
    const details = encodeURIComponent("Live 3-Days Meta Ads Bootcamp by MetaMinds Academy. Zoom link and WhatsApp updates included. 7:30 PM to 9:30 PM IST.");
    const location = encodeURIComponent("Zoom Live Meeting");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                {step === 'success' ? 'Registration Confirmed!' : 'Enroll In 3-Days Live Masterclass'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {COURSE_DETAILS.fullDatesText} • {COURSE_DETAILS.time}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
          <div className={`flex items-center gap-1.5 ${step === 'form' ? 'text-blue-600 font-bold' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">1</span>
            <span>Your Info</span>
          </div>
          <div className="w-6 h-px bg-slate-300"></div>
          <div className={`flex items-center gap-1.5 ${step === 'payment' ? 'text-blue-600 font-bold' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">2</span>
            <span>Payment</span>
          </div>
          <div className="w-6 h-px bg-slate-300"></div>
          <div className={`flex items-center gap-1.5 ${step === 'success' ? 'text-emerald-600 font-bold' : 'text-slate-500'}`}>
            <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">3</span>
            <span>VIP Access</span>
          </div>
        </div>

        {/* Step 1: User Registration Info */}
        {step === 'form' && (
          <form onSubmit={handleFormSubmit} className="p-4 sm:p-6 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Karthikeyan"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                WhatsApp Phone Number * (For VIP Group Invite)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-xs font-bold text-slate-600 bg-slate-200 border border-r-0 border-slate-300 rounded-l-lg">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Email Address * (For Zoom Link & Recording Access)
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  What describes you?
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="E-Commerce / D2C">E-Commerce / D2C</option>
                  <option value="Freelancer / Agency">Freelancer / Agency</option>
                  <option value="Local Business Owner">Local Business Owner</option>
                  <option value="Student / Career Seeker">Student / Job Seeker</option>
                  <option value="Course Creator / Coach">Course Creator</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Meta Ads Experience
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="w-full px-2.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Complete Beginner">Complete Beginner</option>
                  <option value="Boosted a few posts">Boosted a few posts</option>
                  <option value="Running Ads but low ROAS">Running ads, low ROAS</option>
                  <option value="Intermediate">Intermediate</option>
                </select>
              </div>
            </div>

            {/* Summary Price Card */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs">
              <div className="flex items-center justify-between text-slate-600 mb-1">
                <span>Workshop Pass (3 Days Live on 10, 11, 12):</span>
                <span className="line-through text-slate-400">₹{COURSE_DETAILS.originalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 mb-1">
                <span>Fast Action Discount:</span>
                <span className="text-emerald-600 font-bold">-₹1,800</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 mb-1">
                <span>4 Free VIP Bonuses (Worth ₹9,999):</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>
              <div className="border-t border-indigo-200 pt-1.5 mt-1 flex items-center justify-between font-black text-slate-900 text-sm">
                <span>Total Amount:</span>
                <span className="text-blue-600 text-base">₹{COURSE_DETAILS.discountPrice} Only</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue to Instant Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1 font-medium">
              <Lock className="w-3 h-3 text-slate-400" />
              256-Bit SSL Encrypted & Secure Checkout
            </p>
          </form>
        )}

        {/* Step 2: Payment Simulation */}
        {step === 'payment' && (
          <div className="p-4 sm:p-6 space-y-4">
            <div className="text-center pb-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Amount Payable</span>
              <div className="text-3xl font-black text-blue-600">₹{COURSE_DETAILS.discountPrice}</div>
              <p className="text-[11px] text-slate-500">Live 3-Days Meta Ads Masterclass (10, 11, 12)</p>
            </div>

            {/* Payment Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Select Payment Method:</label>
              
              <div 
                onClick={() => setFormData(p => ({ ...p, paymentMethod: 'upi' }))}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'upi' ? 'border-blue-600 bg-blue-50/60' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Instant UPI (GPay / PhonePe / Paytm)</span>
                    <span className="text-[10px] text-slate-500">Fastest confirmation</span>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="pm" 
                  checked={formData.paymentMethod === 'upi'} 
                  onChange={() => {}}
                  className="w-4 h-4 text-blue-600"
                />
              </div>

              <div 
                onClick={() => setFormData(p => ({ ...p, paymentMethod: 'qr' }))}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'qr' ? 'border-blue-600 bg-blue-50/60' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <QrCode className="w-5 h-5 text-indigo-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Scan QR Code</span>
                    <span className="text-[10px] text-slate-500">Scan via any UPI App</span>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="pm" 
                  checked={formData.paymentMethod === 'qr'} 
                  onChange={() => {}}
                  className="w-4 h-4 text-blue-600"
                />
              </div>

              <div 
                onClick={() => setFormData(p => ({ ...p, paymentMethod: 'card' }))}
                className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${formData.paymentMethod === 'card' ? 'border-blue-600 bg-blue-50/60' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Cards & Net Banking</span>
                    <span className="text-[10px] text-slate-500">Debit / Credit / Net Banking</span>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="pm" 
                  checked={formData.paymentMethod === 'card'} 
                  onChange={() => {}}
                  className="w-4 h-4 text-blue-600"
                />
              </div>
            </div>

            {/* Pay Button */}
            <div className="pt-2">
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Secure Payment...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pay ₹{COURSE_DETAILS.discountPrice} & Join VIP Batch</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => setStep('form')}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-semibold"
            >
              ← Edit Contact Details
            </button>
          </div>
        )}

        {/* Step 3: Success Screen with WhatsApp VIP Link & Zoom Credentials */}
        {step === 'success' && (
          <div className="p-4 sm:p-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Payment Successful • Order #MM-9824
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                Welcome, {formData.fullName || 'Marketer'}! 🎉
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Your seat for the <span className="font-bold text-slate-900">Dates Oct 10, 11, 12 Live Masterclass</span> is confirmed!
              </p>
            </div>

            {/* Action 1: Join WhatsApp Group Button */}
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-4 text-left shadow-xs">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-sm mb-1">
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span>STEP 1: Join The WhatsApp VIP Group</span>
              </div>
              <p className="text-xs text-emerald-800 font-medium mb-3">
                Daily Zoom joining links, Q&A notes, and all 4 Bonuses (worth ₹9,999) are shared inside this group.
              </p>
              <a
                href="https://chat.whatsapp.com/sample-metaminds-meta-ads-batch10-11-12"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Opening MetaMinds WhatsApp VIP Group invite link! Check your WhatsApp.");
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>👉 Click Here To Join WhatsApp VIP Group</span>
              </a>
            </div>

            {/* Action 2: Calendar & Zoom details */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left text-xs space-y-2">
              <div className="font-bold text-slate-800 flex items-center justify-between">
                <span>Workshop Live Schedule:</span>
                <span className="text-blue-600 font-bold">Oct 10, 11, 12 (6:00 PM)</span>
              </div>
              
              <div className="flex items-center justify-between text-slate-600 bg-white p-2 rounded border border-slate-200">
                <span className="truncate mr-2">Zoom ID: 984 2103 8291 (Pass: live2026)</span>
                <button
                  onClick={handleCopyZoom}
                  className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 shrink-0"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2 rounded border border-blue-200 text-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Add Dates Oct 10, 11, 12 to Google Calendar</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline pt-1"
            >
              Done / Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
