export type Language = 'ta' | 'en';

export interface CurriculumDay {
  dayNumber: number;
  date: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  topics: string[];
  takeaways: string[];
}

export interface BonusItem {
  id: string;
  title: string;
  value: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  result: string;
  quote: string;
  roas: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  experienceLevel: string;
  paymentMethod: 'upi' | 'gpay' | 'phonepe' | 'card' | 'qr';
}
