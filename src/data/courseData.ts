import { BonusItem, CurriculumDay, FaqItem, Testimonial } from '../types';

export const COURSE_DETAILS = {
  name: "Complete 3-Days Live Meta Ads Masterclass",
  shortName: "Meta Ads 3-Day Live",
  dates: "Oct 10, 11, 12",
  fullDatesText: "Dates: Oct 10th, 11th & 12th (Upcoming 3 Days)",
  time: "6:00 PM - 7:30 PM IST",
  mode: "Live on Zoom + Daily Q&A",
  languageDisplay: "Tamil & English (Tanglish)",
  originalPrice: 2999,
  discountPrice: 999,
  whatsappSupportHours: "24/7 VIP Community",
  totalBonusesValue: "₹9,999",
  rating: "4.9",
  studentsCount: "1,500+",
  adSpendHandled: "₹1.5+ Cr",
};

export const CURRICULUM_DAYS: CurriculumDay[] = [
  {
    dayNumber: 1,
    date: "Day 1 — Oct 10th",
    badge: "Foundation & Setup",
    title: "Meta Ads Foundations, Pixel Setup & Laser Targeting",
    subtitle: "Business Manager & Pixel-ஐ Ban ஆகாம செட் பண்ணி Laser-Targeted Audiences பிடிக்கலாம்",
    duration: "6:00 PM - 7:30 PM (1.5 Hours Live)",
    topics: [
      "Meta Business Manager & Ad Account 100% Secure Setup (No account disable)",
      "Meta Pixel & CAPI (Conversions API) Setup on Shopify / WordPress / Websites",
      "Event Aggregation & Custom Conversions for accurate tracking",
      "Audience Targeting Decoded: Broad vs Detailed Interests vs Behaviors",
      "How to create high-intent Custom Audiences & 1% Lookalikes",
      "Live Ad Account Setup Demo & Common Mistakes to Avoid"
    ],
    takeaways: [
      "Ban-proof Ad Account blueprint",
      "Working Pixel tracking every purchase/lead",
      "Targeting cheatsheet for Indian buyers"
    ]
  },
  {
    dayNumber: 2,
    date: "Day 2 — Oct 11th",
    badge: "Creatives & Copy",
    title: "High-Converting Ad Creatives & AI Copywriting",
    subtitle: "Stop the Scroll! 3-Second Hook-ல Reels & Carousel Ads Create பண்ணுங்க",
    duration: "6:00 PM - 7:30 PM (1.5 Hours Live)",
    topics: [
      "The Anatomy of a 5X ROAS Ad Creative: Hook, Hold & Call-to-Action",
      "Reels & Vertical Video Ads formula: How to script in Tamil & English",
      "Using Free Canva & AI Tools (ChatGPT, Midjourney) to generate 10+ creatives in 30 mins",
      "Ad Copywriting Masterclass: AIDA & PAS frameworks that trigger buying decisions",
      "Meta Ad Library Secrets: How to spy on top competitors' winning ads",
      "Compliance Rules: What words trigger ad rejection and how to bypass them legally"
    ],
    takeaways: [
      "50+ Ready-to-use Ad Copy swipe templates",
      "Canva Ad design templates & hook library",
      "Competitor spying checklist"
    ]
  },
  {
    dayNumber: 3,
    date: "Day 3 — Oct 12th",
    badge: "Live Launch & Scaling",
    title: "Live Campaign Launch, Scaling & ROAS Optimization",
    subtitle: "Live-ஆ Campaign Launch பண்ணி, ₹200 Budget-ல Start பண்ணி Scale பண்ணுவோம்",
    duration: "6:00 PM - 7:30 PM + Extended Live Q&A",
    topics: [
      "Live Step-by-Step Campaign Launch: Sales vs Lead Generation",
      "ABO (Ad Set Budget) vs CBO (Advantage Campaign Budget) - எப்போ எது use பண்ணனும்?",
      "Budget Strategy: Starting profitably with just ₹200 to ₹500/day budget",
      "Ad Metrics Masterclass: CPC, CTR, CPM, ROAS - எது நல்ல metric? எது bad metric?",
      "Scaling Rules: When to increase budget and how to kill losing ads without wasting money",
      "Special Session: How Freelancers can pitch & get ₹20,000/month Meta Ads clients",
      "Live Campaign Audits of Students' Ad Accounts & Open Interactive Q&A"
    ],
    takeaways: [
      "Ready-to-launch campaign structure",
      "ROAS & Budget Calculator Excel Sheet",
      "Client pitching script for freelancers"
    ]
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    title: "50+ High-Converting Ad Copy & Hook Templates",
    value: "₹2,999",
    description: "Plug-and-play headlines, reel hooks, and primary text in Tamil & English designed to get 3X higher CTR.",
    iconName: "CopyCheck"
  },
  {
    id: "bonus-2",
    title: "Meta Ads Ban-Prevention & Recovery SOP",
    value: "₹1,999",
    description: "Step-by-step SOP to protect your Ad Account, Business Manager, and warm up new accounts securely.",
    iconName: "ShieldAlert"
  },
  {
    id: "bonus-3",
    title: "Profitable Ad Budget & ROAS Calculator Spreadsheet",
    value: "₹1,499",
    description: "Easily calculate your breakeven ROAS, customer acquisition cost (CAC), and maximum allowable CPC.",
    iconName: "Calculator"
  },
  {
    id: "bonus-4",
    title: "Lifetime VIP WhatsApp Community & Recordings",
    value: "₹3,500",
    description: "Connect with 1500+ past students, get your doubts cleared anytime, plus lifetime access to Zoom recordings.",
    iconName: "MessageCircle"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Senthil Nathan",
    role: "E-Commerce Saree Brand Owner",
    location: "Salem, Tamil Nadu",
    result: "₹3.8 Lakhs Revenue in 2 Weeks",
    quote: "Bro, before this masterclass I was just clicking 'Boost Post' and losing ₹10k monthly. Day 1 Pixel setup and Day 2 Reels hook strategy changed everything! Got 4.6X ROAS on my Silk Saree collection.",
    roas: "4.6X ROAS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Praveen Kumar",
    role: "Digital Marketing Freelancer",
    location: "Chennai",
    result: "Closed 2 Clients @ ₹25,000/month",
    quote: "The Day 3 client acquisition framework alone is worth ₹10,000! I showed my first client the Ad audit template given in class and closed them immediately for retainer.",
    roas: "₹50k/mo Income",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Kavitha R.",
    role: "Home Baker & Cloud Kitchen",
    location: "Coimbatore",
    result: "140+ Custom Cake Inquiries",
    quote: "Tamil-la ivlo clear-ah explain panna yaarum illa. Local WhatsApp leads campaign setup panren, now my weekend slots are fully booked!",
    roas: "12X Lead Flow",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Manoj V.",
    role: "D2C Organic Skincare",
    location: "Madurai",
    result: "CAC dropped from ₹380 to ₹140",
    quote: "Targeting Broad Audience with Day 2 Creative Hooks brought our cost per purchase down significantly. The ₹199 investment gave me 100X return.",
    roas: "5.1X ROAS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const TARGET_AUDIENCE = [
  {
    title: "E-Commerce & D2C Brands",
    description: "Want to stop wasting ad spend and scale sales with consistent 3X-5X ROAS on Shopify, WooCommerce or Instagram stores.",
    icon: "ShoppingBag"
  },
  {
    title: "Freelancers & Agencies",
    description: "Master high-ticket performance marketing to offer Meta Ads service to clients and charge ₹20,000 to ₹50,000/month.",
    icon: "Briefcase"
  },
  {
    title: "Local Business Owners",
    description: "Get daily high-quality inbound WhatsApp leads and walk-ins for salons, clinics, retail shops, or real estate.",
    icon: "MapPin"
  },
  {
    title: "Coaches, Creators & Students",
    description: "Sell online courses, webinars, digital products or start a lucrative career in digital marketing from scratch.",
    icon: "GraduationCap"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I am a complete beginner with zero technical knowledge. Can I attend?",
    answer: "Yes, 100%! The masterclass starts from scratch on Day 1 (10th) with Business Manager and Pixel basics explained simply with step-by-step screen sharing. No coding required."
  },
  {
    question: "What if I miss a live session on 10, 11, or 12?",
    answer: "Don't worry! All live sessions are recorded in full HD. You will receive lifetime access to all 3-day recordings in the VIP WhatsApp community, along with all presentation slides and bonus materials."
  },
  {
    question: "In what language will the live classes be conducted?",
    answer: "The sessions will be conducted in friendly, easy-to-understand Tamil + English (Tanglish), with English screen navigation and terminology explained clearly."
  },
  {
    question: "How much minimum ad budget do I need to start running Meta Ads?",
    answer: "You can start with as low as ₹150 to ₹200 per day! On Day 3, we teach you how to test creatives safely with micro-budgets before increasing your spend."
  },
  {
    question: "Will I be able to ask questions and get my doubts cleared?",
    answer: "Yes! At the end of every live class on 10th, 11th, and 12th, we hold a dedicated live Q&A session where you can unmute or ask in chat. Plus, the VIP WhatsApp group remains open for continuous support."
  }
];
