export const SITE_NAME = 'Glyphatic'
export const SITE_TAGLINE = 'The Global Cybersecurity Leader'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.glyphatic.com'
export const LOCALE = process.env.NEXT_PUBLIC_LOCALE || 'en-IN'
export const COPYRIGHT_YEAR = 2026

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/user/paloaltonetworks',
  facebook: 'https://www.facebook.com/PaloAltoNetworks/',
  linkedin: 'https://www.linkedin.com/company/palo-alto-networks',
  twitter: 'https://twitter.com/PaloAltoNtwks',
  podcast: 'https://www.paloaltonetworks.in/podcasts/threat-vector',
} as const

export const MISSION =
  'We are the global cybersecurity leader. Our mission is to protect our way of life in the digital age by preventing successful cyberattacks.'

export const STATS = {
  aiGrowth: { value: 78, suffix: '%', label: '~1.5X growth in usage in last 12 months' },
  genAiEnterprises: { value: 94, suffix: '%', label: 'development enterprises using gen AI software' },
  zeroDays: { value: 56, suffix: '%', label: 'INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)' },
  ransomware: { value: 73, suffix: '%', label: 'INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)' },
  breaches: { value: 56, suffix: '%', label: 'INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)' },
  mttr: { value: 90, suffix: '%', label: 'reduction in MTTR' },
  attacksBlocked: { value: 30.9, suffix: 'B', label: 'inline attacks blocked per day', decimals: 1 },
  endpointsScanned: { value: 480, suffix: 'B', label: 'endpoints scanned daily' },
  fortune100: { value: 95, suffix: '%', label: 'of the Fortune 100' },
  networkCustomers: { value: 70, suffix: 'K', label: 'Customers' },
  networkLeader: { value: 13, suffix: 'x', label: 'network security leader' },
  partnerIntegrations: { value: 700, suffix: '+', label: 'partner integrations' },
  secopsLeader: { value: 15, suffix: 'x', label: 'Leader from Code to Cloud to SOC' },
  cloudRiskReduction: { value: 90, suffix: '%', label: 'risk reduction with shift left' },
  alertReduction: { value: 25, suffix: 'x', label: 'reduction in alerts & remediation workflows' },
  idiraCustomers: { value: 10, suffix: 'K', label: 'Customers' },
  fortune500: { value: 55, suffix: '%', label: 'OF THE FORTUNE 500' },
  unit42Matters: { value: 1, suffix: 'K+', label: 'MATTERS PER YEAR' },
  researchers: { value: 200, suffix: '+', label: 'threat researchers' },
  malwareSamples: { value: 30, suffix: 'M', label: 'malware samples analyzed per day' },
  irEngagements: { value: 1, suffix: 'K+', label: 'incident response engagements a year' },
  lawFirms: { value: 150, suffix: '+', label: 'trusted partner of law firms' },
} as const

export const CUSTOMER_LOGOS = {
  network: ['Westfield', 'TriHealth', 'Village Roadshow', 'US Signals', 'Salesforce'],
  secops: ['Infosys', 'Schlumberger', 'Grupo Bimbo', 'Better', 'Toyota'],
  identity: ['Carnival Corporation', 'Maximus', 'Northern Trust', 'Transgourmet', 'Panasonic'],
  unit42: ['Colgate', 'Grant Thornton', 'Invest Bank', 'Sabre', 'ADT'],
  customers: [
    'Resolution Life',
    'Better',
    'Dish',
    'Salesforce',
    "Caesar's",
    'Flex',
    'AutoNation',
    "Aaron's",
    'Pfizer',
    'NBC Universal',
    'Schlumberger',
    'Grupo Bimbo',
  ],
} as const
