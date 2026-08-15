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
    columns: [
      {
        heading: 'Glyphatic Advisory',
        headingHref: '/services#advisory',
        links: [
          { label: 'Business Transformation', href: '/services#advisory' },
          { label: 'AI Strategy & Readiness', href: '/services#advisory' },
          { label: 'Operating Model Redesign', href: '/services#advisory' },
          { label: 'Executive & CEO Advisory', href: '/services#advisory' },
        ],
      },
      {
        heading: 'Glyphatic AI',
        headingHref: '/services#ai',
        links: [
          { label: 'AI Assistants & Copilots', href: '/services#ai' },
          { label: 'AI Workflow Automation', href: '/services#ai' },
          { label: 'AI Document Processing', href: '/services#ai' },
          { label: 'AI Workforce Transformation', href: '/services#ai' },
        ],
      },
      {
        heading: 'Glyphatic Systems',
        headingHref: '/services#systems',
        links: [
          { label: 'Business Operating Systems', href: '/services#systems' },
          { label: 'Process & CRM Automation', href: '/services#systems' },
          { label: 'Mewayz Implementation', href: '/services#systems' },
          { label: 'API & ERP Integrations', href: '/services#systems' },
        ],
      },
      {
        heading: 'Glyphatic Growth',
        headingHref: '/services#growth',
        links: [
          { label: 'Sales Pipeline Architecture', href: '/services#growth' },
          { label: 'Performance Marketing', href: '/services#growth' },
          { label: 'Revenue Optimization', href: '/services#growth' },
          { label: 'Go-to-Market Strategy', href: '/services#growth' },
        ],
      },
      {
        heading: 'Glyphatic Authority',
        headingHref: '/services#authority',
        links: [
          { label: 'Brand Strategy & Positioning', href: '/services#authority' },
          { label: 'Executive Thought Leadership', href: '/services#authority' },
          { label: 'Corporate & Visual Identity', href: '/services#authority' },
          { label: 'Digital Experience (UX/UI)', href: '/services#authority' },
        ],
      },
      {
        heading: 'Glyphatic Operations',
        headingHref: '/services#operations',
        links: [
          { label: 'Customer Operations & Support', href: '/services#operations' },
          { label: 'Sales & Lead Qualification BPO', href: '/services#operations' },
          { label: 'Back Office & Finance BPO', href: '/services#operations' },
          { label: 'Industry-Specific Operations', href: '/services#operations' },
        ],
      },
      {
        heading: 'Glyphatic Intelligence',
        headingHref: '/services#intelligence',
        links: [
          { label: 'Executive Dashboards', href: '/services#intelligence' },
          { label: 'Business Intelligence Systems', href: '/services#intelligence' },
          { label: 'KPI Architecture & Reporting', href: '/services#intelligence' },
          { label: 'Sales & Marketing Analytics', href: '/services#intelligence' },
        ],
      },
    ],
    featured: {
      label: 'FEATURED',
      title: 'The Ultimate Client Journey',
      description: 'Diagnose → Strategize → Transform → Automate → Implement → Operate → Optimize → Scale',
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
          { label: 'AI Transformation', href: '/services#ai' },
          { label: 'Business Automation', href: '/services#systems' },
          { label: 'Sales & Revenue Infrastructure', href: '/services#growth' },
          { label: 'Marketing & Growth', href: '/services#growth' },
          { label: 'Brand & Authority Engineering', href: '/services#authority' },
          { label: 'Digital Experience', href: '/services#authority' },
        ],
      },
      {
        heading: 'By Industry',
        links: [
          { label: 'Education', href: '/services#operations' },
          { label: 'Real Estate', href: '/services#operations' },
          { label: 'Healthcare', href: '/services#operations' },
          { label: 'Recruitment & Staffing', href: '/services#operations' },
          { label: 'E-commerce', href: '/services#operations' },
        ],
      },
      {
        heading: 'Specialized Services',
        links: [
          { label: 'Cybersecurity & Digital Risk', href: '/services#cybersecurity' },
          { label: 'Training & Change Management', href: '/services#training' },
          { label: 'Managed Services', href: '/services#managed' },
        ],
      },
    ],
    featured: {
      label: 'PLATFORM',
      title: 'Mewayz — Business Operating System',
      description: 'Deploy, configure, and manage your entire business operating layer on one platform.',
      href: '/services#systems',
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
          { label: 'Our Architecture', href: '/services' },
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
