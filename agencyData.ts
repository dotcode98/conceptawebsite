import { ServiceItem, ApproachStep, CaseStudy, WhyPillar, IndustryNiche, AdditionalIndustry } from '../types';

export const HERO_TAGS = ['Marketing', 'Paid Ads', 'Content', 'Design', 'Sales'];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'marketing',
    number: '01',
    title: 'Marketing',
    tagline: 'Build a strategy that puts your brand in front of the right people.',
    includes: [
      'Digital Marketing',
      'Social Media Marketing',
      'Marketing Strategy',
      'Campaign Planning',
    ],
    icon: 'TrendingUp',
    accentGradient: 'from-purple-500/20 to-indigo-500/10',
  },
  {
    id: 'paid-ads',
    number: '02',
    title: 'Paid Ads',
    tagline: 'Turn your marketing budget into measurable business growth.',
    includes: [
      'Meta Ads',
      'Google Ads',
      'Campaign Strategy',
      'Ad Creative',
      'Performance Optimization',
    ],
    icon: 'Target',
    accentGradient: 'from-violet-500/20 to-purple-500/10',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    tagline: 'Create a visual identity people remember.',
    includes: [
      'Brand Identity',
      'Social Media Design',
      'Ad Creatives',
      'Posters',
      'Marketing Materials',
      'UI/UX',
    ],
    icon: 'Palette',
    accentGradient: 'from-violet-500/20 to-pink-500/10',
  },
  {
    id: 'editing',
    number: '04',
    title: 'Editing',
    tagline: 'Turn raw footage into content people want to watch.',
    includes: [
      'Short-form Videos',
      'Reels & TikToks',
      'YouTube Videos',
      'Motion Graphics',
      'Promotional Videos',
    ],
    icon: 'Scissors',
    accentGradient: 'from-purple-500/20 to-violet-500/10',
  },
  {
    id: 'sales',
    number: '05',
    title: 'Sales',
    tagline: 'Turn attention and leads into actual customers.',
    includes: [
      'Lead Generation',
      'Sales Strategy',
      'Cold Outreach',
      'Sales Funnels',
      'Conversion Strategy',
    ],
    icon: 'BadgePercent',
    accentGradient: 'from-indigo-500/20 to-purple-500/10',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business, audience, goals, and challenges.',
    details: 'Deep dive into your market position, customer profile, and current bottlenecks to uncover high-leverage opportunities.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We build the right marketing and creative strategy for your brand.',
    details: 'Designing the blueprint: brand messaging, channel selection, content roadmap, and campaign architectures.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'We produce the content, campaigns, designs, and assets your business needs.',
    details: 'High-caliber execution across brand identity, motion design, ad creatives, and high-converting marketing assets.',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'We launch, measure, optimize, and continuously improve.',
    details: 'Deploying campaigns, tracking real revenue metrics, iterating on what works, and scaling customer acquisition.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ember-spice',
    title: 'Ember & Spice',
    subtitle: 'Restaurant Branding & Digital Marketing Concept',
    category: 'Hospitality / Restaurant Concept',
    tags: ['Brand Identity', 'Social Media', 'Content', 'Marketing'],
    image: '/src/assets/images/ember_spice_case_1788551078059.jpg',
    summary: 'A contemporary artisanal dining concept blending fire-roasted flavours with an intimate, mood-lit atmosphere and high-conversion social promotion.',
    conceptBrief: 'Developed to demonstrate how fine dining establishments can transition from static food photos to dynamic, sensory-rich short-form video and sleek brand identity that drives reservations.',
    deliverables: [
      'Visual Identity & Monogram System',
      'Atmospheric Art Direction & Visual Aesthetics',
      'Short-form Sensory Video Concept for Instagram & TikTok',
      'High-conversion Table Booking Ad Campaign Strategy',
    ],
    resultsHypothesis: 'Targeting 3.4x reservation lift within 60 days using geo-fenced Meta Ads and high-contrast culinary reel content.',
  },
  {
    id: 'form-veil',
    title: 'Form & Veil',
    subtitle: 'Minimalist Luxury Fashion & Skincare Concept',
    category: 'Fashion & Beauty Concept',
    tags: ['Brand Identity', 'Ad Creative', 'Content & Editing', 'UI/UX'],
    image: '/src/assets/images/form_veil_case_1788551092112.jpg',
    summary: 'An editorial-first e-commerce concept built around understated luxury, tactile textures, and sleek digital storytelling.',
    conceptBrief: 'Crafted to showcase how premium apparel and cosmetic brands can command higher price points with elevated visual pacing and cohesive brand design.',
    deliverables: [
      'Minimalist Typography & Packaging Guidelines',
      'Studio Product Showcase & Motion Design Suite',
      'Direct-to-Consumer Paid Ads Creative Suite',
      'Landing Page & Lookbook Interactive Layout',
    ],
    resultsHypothesis: 'Constructed to reduce ad fatigue by 40% through varied lifestyle vignettes and high aesthetic consistency.',
  },
  {
    id: 'aura-performance',
    title: 'Aura Performance',
    subtitle: 'Athletic Club & Membership Campaign Concept',
    category: 'Fitness & Wellness Concept',
    tags: ['Content Strategy', 'Meta Ads', 'Lead Generation', 'Sales'],
    image: '/src/assets/images/aura_gym_case_1788551108042.jpg',
    summary: 'A high-energy gym and wellness hub concept focused on turning trial passes into committed recurring members.',
    conceptBrief: 'Engineered to demonstrate Concepta’s end-to-end sales funnel methodology, connecting energetic athletic video with automated lead capture.',
    deliverables: [
      'Fast-paced Training Reels & Coach Spotlights',
      'Local Lead Generation Meta Ad Funnel',
      'Trial Pass Booking Automation & Outreach Scripting',
      'Community Showcase Social Content System',
    ],
    resultsHypothesis: 'Demonstrates a scalable formula for acquiring local club memberships under $22 cost-per-lead.',
  },
];

export const WHY_PILLARS: WhyPillar[] = [
  {
    number: '01',
    title: 'Strategy First',
    description: "We don't create content just to fill your social media calendar. Every creative has a purpose, a target audience, and a measurable goal.",
  },
  {
    number: '02',
    title: 'Creative + Marketing',
    description: 'We combine creative production with marketing thinking. Beautiful visuals mean nothing if they don’t capture attention and drive business.',
  },
  {
    number: '03',
    title: 'One Team',
    description: 'Strategy, content, design, ads, and sales — all working together. No managing five different freelance contractors or disconnected vendors.',
  },
  {
    number: '04',
    title: 'Built for Growth',
    description: "Our goal isn't simply to make your brand look good. It's to help your business move forward, gain clients, and scale sustainably.",
  },
];

export const INDUSTRY_NICHES: IndustryNiche[] = [
  {
    id: 'education',
    title: 'Training & Education',
    tagline: 'Help training centres attract students and build trust.',
    description: 'Student enrollment funnels, curriculum highlight reels, and authority-building content that validates your academy.',
    icon: 'GraduationCap',
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Food Brands',
    tagline: 'Turn great food into attention, visits, and sales.',
    description: 'Mouthwatering visual cinematography, viral food reels, and geo-targeted ads that pack your dining room every week.',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'consultancy',
    title: 'Consultancy Businesses',
    tagline: 'Build authority and generate qualified leads.',
    description: 'Executive positioning, professional thought leadership videos, and clean B2B conversion funnels that book discovery calls.',
    icon: 'Briefcase',
  },
  {
    id: 'fashion',
    title: 'Clothing & Beauty Brands',
    tagline: 'Create content that makes people stop, look, and buy.',
    description: 'High-fashion aesthetic lookbooks, influencer-style unboxings, and conversion-tested Meta ad creatives for e-commerce.',
    icon: 'Sparkles',
  },
  {
    id: 'fitness',
    title: 'Gyms & Fitness Brands',
    tagline: 'Build a stronger community and bring in new members.',
    description: 'High-octane workout video captures, member transformation stories, and hyper-local lead generation campaigns.',
    icon: 'Dumbbell',
  },
];

export const ADDITIONAL_INDUSTRIES: AdditionalIndustry[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce & D2C Brands',
    description: 'Create content and campaigns that attract, engage, and convert.',
    icon: 'ShoppingBag',
  },
  {
    id: 'technology',
    title: 'Technology & SaaS',
    description: 'Turn complex products into clear, compelling marketing.',
    icon: 'Laptop',
  },
  {
    id: 'startups',
    title: 'Startups & New Brands',
    description: 'Build a strong brand, content, and marketing foundation from the ground up.',
    icon: 'Rocket',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    description: 'Build trust, educate audiences, and attract more patients.',
    icon: 'HeartPulse',
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'Build authority and generate consistent, qualified enquiries.',
    icon: 'ShieldCheck',
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'Create visual experiences that inspire attention and bookings.',
    icon: 'Compass',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Showcase products, services, and offers through high-impact content.',
    icon: 'Car',
  },
  {
    id: 'creators',
    title: 'Personal Brands & Creators',
    description: 'Build a recognizable personal brand through strategic content.',
    icon: 'UserCheck',
  },
  {
    id: 'local-business',
    title: 'Local Businesses',
    description: 'Get discovered locally and turn attention into consistent enquiries.',
    icon: 'Store',
  },
];
