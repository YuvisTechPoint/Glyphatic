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
    id: 'services',
    label: 'Services',
    columns: [
      {
        heading: 'Core Engineering',
        links: [
          { label: 'AI & Machine Learning', href: '/services/ai-and-ml' },
          { label: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure' },
          { label: 'High-Performance Backends', href: '/services/backend-engineering' },
          { label: 'Data Engineering & MLOps', href: '/services/data-engineering' },
        ],
      },
      {
        heading: 'Digital & Operations',
        links: [
          { label: 'Web Development', href: '/services/web-development' },
          { label: 'Android & Mobile Development', href: '/services/mobile-development' },
          { label: 'Business Process Outsourcing (BPO)', href: '/services/bpo' },
          { label: 'Enterprise Security', href: '/services/enterprise-security' },
        ],
      }
    ],
    featured: {
      label: 'FEATURED',
      title: 'Architecting for the Next Billion',
      description: 'See how we build high-availability systems for the Indian enterprise market.',
      href: '/case-studies',
      image: '/images/nav-featured-idira.jpg',
    },
  },
  {
    id: 'why-us',
    label: 'Why Us',
    columns: [
      {
        heading: 'Our Differentiators',
        links: [
          { label: 'Architecture-First Culture', href: '/why-us#architecture' },
          { label: 'Boutique by Design', href: '/why-us#boutique' },
          { label: 'Measurable Deliverables', href: '/why-us#deliverables' },
          { label: 'Post-Engagement Handoff', href: '/why-us#handoff' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        heading: 'About GlyphaticSystems',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Leadership', href: '/about-us/leadership' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact Us', href: '/contact-us' },
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
          { label: 'Open Source', href: '/open-source' },
          { label: 'Architecture Patterns', href: '/resources/architecture-patterns' },
        ],
      },
    ],
  },
]

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Leadership', href: '/about-us/leadership' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const FOOTER_POPULAR = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Architecture Patterns', href: '/resources/architecture-patterns' },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Security Center', href: '/legal/security' },
]
