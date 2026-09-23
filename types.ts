export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  includes: string[];
  icon: string;
  accentGradient?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  summary: string;
  conceptBrief: string;
  deliverables: string[];
  resultsHypothesis: string;
}

export interface WhyPillar {
  number: string;
  title: string;
  description: string;
}

export interface IndustryNiche {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface AdditionalIndustry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  email: string;
  phoneOrWhatsapp: string;
  servicesNeeded: string[];
  message: string;
}
