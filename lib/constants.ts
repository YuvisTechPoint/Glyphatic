export const SITE_NAME = 'Glyphatic'
export const SITE_TAGLINE = 'Transform. Automate. Operate. Scale.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.glyphatic.com'
export const LOCALE = process.env.NEXT_PUBLIC_LOCALE || 'en-IN'
export const COPYRIGHT_YEAR = 2026

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@glyphatic',
  facebook: 'https://www.facebook.com/glyphatic',
  linkedin: 'https://www.linkedin.com/company/glyphatic',
  twitter: 'https://twitter.com/glyphatic',
  podcast: 'https://www.glyphatic.com/resources/podcasts',
} as const

export const MISSION =
  'We help organizations modernize their businesses, deploy intelligent technology, automate critical workflows, strengthen their growth engines, and operate at scale.'

export const STATS = {
  // Transformation Impact
  transformationPartners: { value: 1, suffix: '', label: 'One transformation partner — strategy through execution' },
  industriesServed: { value: 9, suffix: '+', label: 'Industries served' },
  capabilityAreas: { value: 7, suffix: '', label: 'Core capability areas' },
  frameworkSteps: { value: 7, suffix: '', label: 'Transformation framework steps' },
  // Products
  products: { value: 2, suffix: '+', label: 'Proprietary platforms' },
  // Services
  serviceLines: { value: 8, suffix: '', label: 'Integrated service lines' },
  solutionAreas: { value: 8, suffix: '', label: 'Business solution areas' },
} as const

export const CUSTOMER_LOGOS = {
  transformation: ['Education Leader', 'Healthcare Innovator', 'Real Estate Group', 'Financial Services Co', 'Retail Enterprise'],
  technology: ['SaaS Platform', 'Cloud Services', 'AI Startup', 'Enterprise Tech', 'Digital Agency'],
  operations: ['Manufacturing Co', 'Professional Services', 'Hospitality Group', 'Travel Enterprise', 'Media Corp'],
  customers: [
    'Education Leader',
    'Healthcare Innovator',
    'Real Estate Group',
    'Financial Services Co',
    'Retail Enterprise',
    'SaaS Platform',
    'Cloud Services',
    'Manufacturing Co',
    'Professional Services',
    'Hospitality Group',
    'Travel Enterprise',
    'Media Corp',
  ],
} as const
