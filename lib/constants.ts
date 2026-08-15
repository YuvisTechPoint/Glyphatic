export const SITE_NAME = 'Glyphatic'
export const SITE_TAGLINE = 'Built for the AI era. Operated end to end.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.glyphatic.com'
export const LOCALE = process.env.NEXT_PUBLIC_LOCALE || 'en-IN'
export const COPYRIGHT_YEAR = 2026

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@GlyphaticSystems',
  facebook: 'https://www.facebook.com/GlyphaticSystems',
  linkedin: 'https://www.linkedin.com/company/glyphatic',
  twitter: 'https://twitter.com/GlyphaticHQ',
  podcast: 'https://www.glyphatic.com/podcasts',
} as const

export const MISSION =
  'We transform, automate, modernize, and operate businesses for the AI era. Seven integrated divisions — Strategy, AI, Systems, Growth, Authority, Operations, and Intelligence — delivering end-to-end business transformation.'

export const POSITIONING_LINE = 'AI-Native Business Transformation, Technology & Operations'

export const CEO = {
  name: 'Debanjan Sandhaki',
  title: 'Founder & CEO',
  image: '/images/ceo-debanjan-sandhaki.jpg',
}

export const ADDRESS = {
  building: 'Ecospace Business Park',
  block: 'Block 4A',
  floors: '3rd & 5th Floor',
  locality: 'Action Area II, New Town, Rajarhat',
  city: 'Kolkata',
  pincode: '700156',
  state: 'West Bengal',
  full: 'Ecospace Business Park, Block 4A, 3rd & 5th Floor, Action Area II, New Town, Rajarhat, Kolkata – 700156, West Bengal, India',
} as const

export const STATS = {
  aiGrowth: { value: 78, suffix: '%', label: 'growth in AI adoption across enterprises' },
  genAiEnterprises: { value: 94, suffix: '%', label: 'enterprises using AI software in operations' },
  transformationFail: { value: 70, suffix: '%', label: 'digital transformations that fail to reach goals' },
  techFrustration: { value: 63, suffix: '%', label: 'executives frustrated with fragmented tech stacks' },
  productivityLoss: { value: 45, suffix: '%', label: 'productivity loss due to poor system adoption' },
  manualReduction: { value: 80, suffix: '%', label: 'reduction in manual processes' },
  transformationSpeed: { value: 3.5, suffix: 'x', label: 'faster digital transformation', decimals: 1 },
  operationalSupport: { value: 24, suffix: '/7', label: 'managed operational support' },
  divisions: { value: 7, suffix: '', label: 'integrated divisions' },
  services: { value: 74, suffix: '+', label: 'services across the portfolio' },
  journeySteps: { value: 8, suffix: '', label: 'step client journey' },
  industries: { value: 15, suffix: '+', label: 'industries served' },
} as const

export const CUSTOMER_LOGOS = {
  advisory: ['Enterprise A', 'TechCorp', 'GlobalFin', 'HealthPlus', 'RetailX'],
  ai: ['TechCorp', 'Enterprise A', 'GlobalFin', 'HealthPlus', 'RetailX'],
  systems: ['GlobalFin', 'RetailX', 'TechCorp', 'Enterprise A', 'HealthPlus'],
  growth: ['HealthPlus', 'GlobalFin', 'RetailX', 'TechCorp', 'Enterprise A'],
  authority: ['TechCorp', 'Enterprise A', 'GlobalFin', 'HealthPlus', 'RetailX'],
  operations: ['HealthPlus', 'GlobalFin', 'RetailX', 'TechCorp', 'Enterprise A'],
  intelligence: ['Enterprise A', 'TechCorp', 'GlobalFin', 'HealthPlus', 'RetailX'],
  customers: ['Enterprise A', 'TechCorp', 'GlobalFin', 'HealthPlus', 'RetailX'],
} as const
