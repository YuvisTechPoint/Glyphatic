import { DIVISIONS, SERVICE_CATEGORIES } from '@/lib/services-data'

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
    id: 'divisions',
    label: 'Divisions',
    columns: DIVISIONS.map((division) => ({
      heading: division.name,
      headingHref: `/services#${division.id}`,
      links: division.categoryIds.map((categoryId) => {
        const category = SERVICE_CATEGORIES.find((c) => c.id === categoryId)
        return {
          label: category?.title ?? categoryId,
          href: `/services#${categoryId}`,
        }
      }),
    })),
    featured: {
      label: 'THE GLYPHATIC ARCHITECTURE',
      title: 'Seven capabilities. One transformation partner.',
      description:
        'Diagnose → Strategize → Transform → Automate → Implement → Operate → Optimize → Scale',
      href: '/services#journey',
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        heading: 'By Business Need',
        links: [
          { label: 'Strategy & Business Consulting', href: '/services#strategy' },
          { label: 'AI Transformation', href: '/services#ai' },
          { label: 'Business Automation', href: '/services#automation' },
          { label: 'Digital Infrastructure', href: '/services#infrastructure' },
          { label: 'Sales & Revenue Systems', href: '/services#revenue' },
          { label: 'Marketing & Growth', href: '/services#growth' },
          { label: 'Brand & Authority Engineering', href: '/services#authority' },
          { label: 'Digital Experience', href: '/services#digital-experience' },
        ],
      },
      {
        heading: 'Operations & Delivery',
        links: [
          { label: 'Business Process Outsourcing', href: '/services#bpo' },
          { label: 'Managed Services', href: '/services#managed' },
          { label: 'Training & Change Management', href: '/services#training' },
          { label: 'Data & Business Intelligence', href: '/services#intelligence' },
          { label: 'Cybersecurity & Digital Risk', href: '/services#cybersecurity' },
        ],
      },
      {
        heading: 'By Industry',
        links: [
          { label: 'Education', href: '/services#industry' },
          { label: 'Real Estate', href: '/services#industry' },
          { label: 'Healthcare', href: '/services#industry' },
          { label: 'Recruitment & Staffing', href: '/services#industry' },
          { label: 'E-commerce', href: '/services#industry' },
        ],
      },
    ],
    featured: {
      label: 'PLATFORM',
      title: 'Mewayz — Business Operating System',
      description:
        'Not software. A business operating system — deploy, configure, and manage your entire operating layer.',
      href: '/services#mewayz',
    },
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        heading: 'About Glyphatic',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'The Glyphatic Architecture', href: '/services' },
          { label: 'Leadership', href: '/about-us/leadership' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact Us', href: '/discuss-architecture' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    columns: [
      {
        heading: 'Knowledge Base',
        links: [
          { label: 'Blog', href: '/blog' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Architecture Patterns', href: '/resources/architecture-patterns' },
          { label: 'AI Readiness Guide', href: '/resources/ai-readiness' },
        ],
      },
    ],
  },
]

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Leadership', href: '/about-us/leadership' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/discuss-architecture' },
]

export const FOOTER_POPULAR: NavLink[] = [
  { label: 'The Glyphatic Architecture', href: '/services' },
  { label: 'Client Journey', href: '/services#journey' },
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Architecture Patterns', href: '/resources/architecture-patterns' },
  { label: 'AI Readiness Guide', href: '/resources/ai-readiness' },
]

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Security Center', href: '/legal/security' },
]
