export interface Service {
  icon: string           // lucide icon name as string
  title: string
  description: string
  outcomes: string[]     // 2-3 bullet outcomes
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  avatarUrl?: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatarUrl?: string
  linkedin?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CaseStudy {
  client: string          // can be anonymized e.g. "SaaS company, Series B"
  industry: string
  challenge: string
  result: string
  metrics: {
    label: string
    value: string
  }[]
}
