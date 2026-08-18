export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type MegaNavColumn = {
  heading: string
  headingHref?: string
  links: NavLink[]
}

export type MegaNavFeatured = {
  label: string
  title: string
  href: string
  description?: string
  image?: string
}

export type MegaNavMenu = {
  id: string
  label: string
  columns: MegaNavColumn[]
  featured?: MegaNavFeatured
}

export const MEGA_NAV: MegaNavMenu[] = [
  {
    id: 'products',
    label: 'Products',
    columns: [
      {
        heading: 'Platforms',
        links: [
          { label: 'Mewayz — Business Operating System', href: '/products/mewayz' },
          { label: 'Edquate — AI-Powered Education Intelligence', href: '/products/edquate' },
        ],
      },
      {
        heading: 'AI Products',
        links: [
          { label: 'AI Copilots', href: '/products/ai-copilots' },
          { label: 'AI Agents', href: '/products/ai-agents' },
          { label: 'Business Intelligence Systems', href: '/products/business-intelligence' },
          { label: 'Automation Platforms', href: '/products/automation-platforms' },
        ],
      },
    ],
    featured: {
      label: 'FEATURED',
      title: 'Mewayz: The Business Operating System',
      description: 'One platform to run, measure, and scale your business operations.',
      href: '/products/mewayz',
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        heading: 'Business Transformation',
        links: [
          { label: 'AI Transformation', href: '/solutions/ai-transformation' },
          { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
          { label: 'Revenue Transformation', href: '/solutions/revenue-transformation' },
          { label: 'Operational Transformation', href: '/solutions/operational-transformation' },
        ],
      },
      {
        heading: 'Experience & Growth',
        links: [
          { label: 'Customer Experience', href: '/solutions/customer-experience' },
          { label: 'Workforce Transformation', href: '/solutions/workforce-transformation' },
          { label: 'Brand Transformation', href: '/solutions/brand-transformation' },
          { label: 'Business Modernization', href: '/solutions/business-modernization' },
        ],
      },
    ],
    featured: {
      label: 'FEATURED',
      title: 'AI Transformation Playbook',
      description: 'A practical guide to making AI operational across your organization.',
      href: '/resources/ai-transformation-playbook',
    },
  },
  {
    id: 'services',
    label: 'Services',
    columns: [
      {
        heading: 'Advisory & Technology',
        links: [
          { label: 'Consulting & Advisory', href: '/services/consulting' },
          { label: 'AI & Automation', href: '/services/ai-automation' },
          { label: 'Digital Infrastructure', href: '/services/digital-infrastructure' },
          { label: 'Data & Intelligence', href: '/services/data-intelligence' },
        ],
      },
      {
        heading: 'Growth & Operations',
        links: [
          { label: 'Growth & Marketing', href: '/services/growth-marketing' },
          { label: 'Brand & Authority', href: '/services/brand-authority' },
          { label: 'BPO', href: '/services/bpo' },
          { label: 'Managed Services', href: '/services/managed-services' },
        ],
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    columns: [
      {
        heading: 'Industries',
        links: [
          { label: 'Education', href: '/industries/education' },
          { label: 'Healthcare', href: '/industries/healthcare' },
          { label: 'Real Estate', href: '/industries/real-estate' },
          { label: 'Financial Services', href: '/industries/financial-services' },
          { label: 'Retail & E-commerce', href: '/industries/retail' },
          { label: 'Technology', href: '/industries/technology' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Professional Services', href: '/industries/professional-services' },
          { label: 'Hospitality & Travel', href: '/industries/hospitality' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    columns: [
      {
        heading: 'Glyphatic Intelligence',
        links: [
          { label: 'Insights', href: '/resources/insights' },
          { label: 'Research', href: '/resources/research' },
          { label: 'Reports', href: '/resources/reports' },
          { label: 'Playbooks', href: '/resources/playbooks' },
          { label: 'Case Studies', href: '/resources/case-studies' },
        ],
      },
      {
        heading: 'More Resources',
        links: [
          { label: 'Frameworks', href: '/resources/frameworks' },
          { label: 'Webinars', href: '/resources/webinars' },
          { label: 'Podcasts', href: '/resources/podcasts' },
          { label: 'Events', href: '/resources/events' },
          { label: 'Tools & Assessments', href: '/resources/tools' },
        ],
      },
    ],
    featured: {
      label: 'FEATURED',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI-powered transformation.',
      href: '/resources/tools/ai-readiness-assessment',
    },
  },
  {
    id: 'partners',
    label: 'Partners',
    columns: [
      {
        heading: 'Partner Ecosystem',
        links: [
          { label: 'Technology Partners', href: '/partners/technology' },
          { label: 'Strategic Partners', href: '/partners/strategic' },
          { label: 'Implementation Partners', href: '/partners/implementation' },
          { label: 'Channel Partners', href: '/partners/channel' },
          { label: 'Become a Partner', href: '/partners/become-a-partner' },
        ],
      },
    ],
  },
]

export const FOOTER_COMPANY = [
  { label: 'About Glyphatic', href: '/about-us' },
  { label: 'Leadership', href: '/about-us/leadership' },
  { label: 'Careers', href: '/about-us/careers' },
  { label: 'Newsroom', href: '/about-us/newsroom' },
  { label: 'Contact', href: '/company/contact-sales' },
]

export const FOOTER_PRODUCTS = [
  { label: 'Mewayz', href: '/products/mewayz' },
  { label: 'Edquate', href: '/products/edquate' },
  { label: 'AI Products', href: '/products/ai-copilots' },
  { label: 'Business Platforms', href: '/products/automation-platforms' },
]

export const FOOTER_SOLUTIONS = [
  { label: 'AI Transformation', href: '/solutions/ai-transformation' },
  { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
  { label: 'Revenue Transformation', href: '/solutions/revenue-transformation' },
  { label: 'Operational Transformation', href: '/solutions/operational-transformation' },
  { label: 'Customer Experience', href: '/solutions/customer-experience' },
  { label: 'Workforce Transformation', href: '/solutions/workforce-transformation' },
]

export const FOOTER_SERVICES = [
  { label: 'Consulting', href: '/services/consulting' },
  { label: 'AI & Automation', href: '/services/ai-automation' },
  { label: 'Technology', href: '/services/digital-infrastructure' },
  { label: 'Growth', href: '/services/growth-marketing' },
  { label: 'Brand & Authority', href: '/services/brand-authority' },
  { label: 'BPO', href: '/services/bpo' },
  { label: 'Managed Services', href: '/services/managed-services' },
]

export const FOOTER_INDUSTRIES = [
  { label: 'Education', href: '/industries/education' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Technology', href: '/industries/technology' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Retail', href: '/industries/retail' },
  { label: 'Professional Services', href: '/industries/professional-services' },
]

export const FOOTER_RESOURCES = [
  { label: 'Insights', href: '/resources/insights' },
  { label: 'Research', href: '/resources/research' },
  { label: 'Reports', href: '/resources/reports' },
  { label: 'Case Studies', href: '/resources/case-studies' },
  { label: 'Playbooks', href: '/resources/playbooks' },
  { label: 'Events', href: '/resources/events' },
  { label: 'Webinars', href: '/resources/webinars' },
]

export const FOOTER_PARTNERS = [
  { label: 'Technology Partners', href: '/partners/technology' },
  { label: 'Strategic Partners', href: '/partners/strategic' },
  { label: 'Channel Partners', href: '/partners/channel' },
  { label: 'Become a Partner', href: '/partners/become-a-partner' },
]

export const FOOTER_POPULAR = [
  { label: 'AI Transformation', href: '/solutions/ai-transformation' },
  { label: 'Case Studies', href: '/resources/case-studies' },
  { label: 'AI Readiness Assessment', href: '/resources/tools/ai-readiness-assessment' },
  { label: 'Transformation Framework', href: '/why-glyphatic/platformization' },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Security', href: '/legal/security' },
  { label: 'Compliance', href: '/legal/compliance' },
  { label: 'Accessibility', href: '/legal/accessibility' },
]
