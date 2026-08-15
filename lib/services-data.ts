export type ServiceGroup = {
  name: string
  items: string[]
}

export type ServiceCategory = {
  id: string
  number: string
  title: string
  description?: string
  groups: ServiceGroup[]
}

export type Division = {
  id: string
  name: string
  tagline: string
  description: string
  categoryIds: string[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Strategy & Business Consulting',
    groups: [
      {
        name: 'Business Transformation',
        items: [
          'Business transformation strategy',
          'Digital transformation strategy',
          'AI transformation strategy',
          'Business modernization',
          'Operating model redesign',
          'Organizational transformation',
          'Business process re-engineering',
          'Growth strategy',
          'Market-entry strategy',
          'Expansion strategy',
          'Competitive intelligence',
          'Business diagnostics',
          'Digital maturity assessment',
          'AI-readiness assessment',
        ],
      },
      {
        name: 'Executive Advisory',
        items: [
          'CEO advisory',
          'Founder advisory',
          'Strategic planning',
          'Decision-support systems',
          'Business intelligence',
          'KPI architecture',
          'Performance management',
          'Transformation roadmaps',
        ],
      },
    ],
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI Transformation',
    groups: [
      {
        name: 'AI Strategy',
        items: [
          'AI readiness assessment',
          'AI adoption roadmap',
          'AI use-case identification',
          'AI implementation strategy',
          'AI governance frameworks',
          'AI workforce strategy',
        ],
      },
      {
        name: 'AI Implementation',
        items: [
          'AI assistants',
          'AI copilots',
          'AI customer support',
          'AI sales assistants',
          'AI knowledge bases',
          'AI document processing',
          'AI workflow automation',
          'AI-powered analytics',
          'AI reporting',
          'AI internal knowledge systems',
        ],
      },
      {
        name: 'AI Workforce Transformation',
        items: [
          'Employee AI enablement',
          'AI productivity systems',
          'AI-assisted workflows',
          'AI training',
          'AI SOP development',
          'Human-AI workflow design',
        ],
      },
    ],
  },
  {
    id: 'automation',
    number: '03',
    title: 'Business Automation',
    groups: [
      {
        name: 'Process Automation',
        items: [
          'Workflow automation',
          'Lead automation',
          'Sales automation',
          'Marketing automation',
          'Customer-support automation',
          'HR automation',
          'Finance workflow automation',
          'Document automation',
          'Reporting automation',
          'Notification systems',
          'Approval workflows',
        ],
      },
      {
        name: 'CRM Automation',
        items: [
          'CRM implementation',
          'CRM migration',
          'Pipeline design',
          'Lead routing',
          'Automated follow-ups',
          'Customer lifecycle automation',
          'Sales dashboards',
          'CRM optimization',
        ],
      },
    ],
  },
  {
    id: 'infrastructure',
    number: '04',
    title: 'Digital Business Infrastructure',
    description: 'Glyphatic designs the digital operating layer of the company.',
    groups: [
      {
        name: 'Operating Layer',
        items: [
          'Business operating systems',
          'CRM systems',
          'ERP integration',
          'Project management systems',
          'Internal communication systems',
          'Knowledge management',
          'Executive dashboards',
          'Business intelligence systems',
          'Digital workflow architecture',
          'Software-stack optimization',
          'API integrations',
          'Data integration',
          'Cloud systems',
          'Digital workplace infrastructure',
        ],
      },
    ],
  },
  {
    id: 'mewayz',
    number: '05',
    title: 'Mewayz Implementation',
    description: 'Don\u2019t sell Mewayz as software. Sell Business Operating System Implementation.',
    groups: [
      {
        name: 'Mewayz Services',
        items: [
          'Mewayz deployment',
          'Business setup',
          'CRM configuration',
          'Website implementation',
          'Funnel implementation',
          'Lead management',
          'Client management',
          'Automation',
          'Appointment systems',
          'Team workflows',
          'Payment workflows',
          'Business dashboards',
          'Integration',
          'Staff training',
          'Ongoing administration',
        ],
      },
    ],
  },
  {
    id: 'revenue',
    number: '06',
    title: 'Sales & Revenue Infrastructure',
    groups: [
      {
        name: 'Sales Systems',
        items: [
          'Sales process design',
          'Sales pipeline architecture',
          'CRM implementation',
          'Lead qualification',
          'Lead scoring',
          'Lead routing',
          'Sales automation',
          'Follow-up systems',
          'Appointment setting',
          'Sales dashboards',
          'Sales analytics',
        ],
      },
      {
        name: 'Revenue Optimization',
        items: [
          'Conversion optimization',
          'Funnel optimization',
          'Customer journey optimization',
          'Retention systems',
          'Upselling systems',
          'Cross-selling systems',
          'Referral systems',
          'Revenue leakage analysis',
        ],
      },
    ],
  },
  {
    id: 'growth',
    number: '07',
    title: 'Marketing & Growth',
    description: 'Not \u201cwe\u2019ll post 30 reels.\u201d Actual growth infrastructure.',
    groups: [
      {
        name: 'Digital Marketing',
        items: [
          'Performance marketing',
          'Search marketing',
          'Social advertising',
          'Lead generation',
          'Demand generation',
          'Conversion optimization',
          'Marketing automation',
          'Funnel development',
          'Landing pages',
          'Campaign management',
        ],
      },
      {
        name: 'Growth Strategy',
        items: [
          'Go-to-market strategy',
          'Customer acquisition',
          'Growth experimentation',
          'Retention strategy',
          'Referral engineering',
          'Lifecycle marketing',
          'Customer segmentation',
          'Growth analytics',
        ],
      },
    ],
  },
  {
    id: 'authority',
    number: '08',
    title: 'Brand & Authority Engineering',
    description: 'Glyphatic\u2019s premium branding division.',
    groups: [
      {
        name: 'Brand Strategy',
        items: [
          'Brand positioning',
          'Brand architecture',
          'Brand identity',
          'Brand messaging',
          'Value proposition',
          'Competitive positioning',
          'Brand strategy',
        ],
      },
      {
        name: 'Authority Engineering',
        items: [
          'Founder positioning',
          'Executive branding',
          'LinkedIn strategy',
          'Thought leadership',
          'Reputation architecture',
          'Media positioning',
          'Public presence',
          'Authority content',
        ],
      },
      {
        name: 'Creative',
        items: [
          'Visual identity',
          'Corporate identity',
          'Website design',
          'Presentation design',
          'Sales collateral',
          'Corporate communications',
        ],
      },
    ],
  },
  {
    id: 'digital-experience',
    number: '09',
    title: 'Digital Experience',
    groups: [
      {
        name: 'Websites & Platforms',
        items: [
          'Corporate websites',
          'Business websites',
          'E-commerce platforms',
          'Landing pages',
          'Web applications',
          'Customer portals',
          'Internal portals',
        ],
      },
      {
        name: 'UX',
        items: [
          'UX strategy',
          'UI design',
          'Conversion-focused design',
          'Customer journey design',
          'Digital experience optimization',
        ],
      },
    ],
  },
  {
    id: 'bpo',
    number: '10',
    title: 'Business Process Outsourcing',
    description: 'A major Glyphatic division.',
    groups: [
      {
        name: 'Customer Operations',
        items: [
          'Customer support',
          'Inbound support',
          'Outbound support',
          'Email support',
          'Chat support',
          'WhatsApp support',
          'Complaint management',
          'Customer onboarding',
          'Customer retention',
        ],
      },
      {
        name: 'Sales BPO',
        items: [
          'Tele-sales',
          'Lead qualification',
          'Lead verification',
          'Appointment setting',
          'Follow-up calling',
          'Sales administration',
          'CRM management',
        ],
      },
      {
        name: 'Back Office BPO',
        items: [
          'Data processing',
          'Data entry',
          'Document processing',
          'Order processing',
          'Invoice processing',
          'MIS reporting',
          'Administrative support',
          'Digital documentation',
        ],
      },
      {
        name: 'Finance Operations',
        items: [
          'Bookkeeping',
          'Accounts payable support',
          'Accounts receivable support',
          'Invoice processing',
          'Reconciliation support',
          'Payroll administration',
        ],
      },
      {
        name: 'HR Operations',
        items: [
          'Recruitment support',
          'Candidate screening',
          'Interview coordination',
          'Employee onboarding',
          'HR documentation',
          'HR helpdesk',
          'Recruitment process outsourcing',
        ],
      },
      {
        name: 'E-commerce BPO',
        items: [
          'Order management',
          'Customer support',
          'Returns management',
          'Catalog management',
          'Marketplace operations',
          'Seller support',
        ],
      },
    ],
  },
  {
    id: 'industry',
    number: '11',
    title: 'Industry-Specific Operations',
    description: 'Verticalized Glyphatic solutions.',
    groups: [
      {
        name: 'Education',
        items: [
          'Admission operations',
          'Student support',
          'Lead qualification',
          'Counselling coordination',
          'Fee follow-up',
          'Parent communication',
          'Student CRM',
          'Institution automation',
        ],
      },
      {
        name: 'Real Estate',
        items: [
          'Lead qualification',
          'Property inquiry handling',
          'Site-visit scheduling',
          'Lead follow-up',
          'CRM management',
          'Sales operations',
        ],
      },
      {
        name: 'Healthcare',
        items: [
          'Appointment management',
          'Patient support',
          'Follow-up',
          'Documentation coordination',
          'Customer service',
        ],
      },
      {
        name: 'Recruitment',
        items: [
          'Candidate sourcing',
          'Screening',
          'Interview scheduling',
          'Candidate CRM',
          'Recruitment administration',
        ],
      },
      {
        name: 'E-commerce',
        items: [
          'Customer service',
          'Order operations',
          'Returns',
          'Marketplace management',
          'Customer retention',
        ],
      },
    ],
  },
  {
    id: 'intelligence',
    number: '12',
    title: 'Data & Business Intelligence',
    groups: [
      {
        name: 'Analytics',
        items: [
          'Business dashboards',
          'Executive dashboards',
          'Sales analytics',
          'Marketing analytics',
          'Customer analytics',
          'Operational analytics',
        ],
      },
      {
        name: 'Intelligence',
        items: [
          'KPI systems',
          'Performance reporting',
          'Forecasting',
          'Data visualization',
          'Business intelligence',
          'Decision-support systems',
          'Management reporting',
        ],
      },
    ],
  },
  {
    id: 'cybersecurity',
    number: '13',
    title: 'Cybersecurity & Digital Risk',
    description: 'Delivered with qualified specialists.',
    groups: [
      {
        name: 'Risk Services',
        items: [
          'Cybersecurity assessment',
          'Security awareness',
          'Access management',
          'Security policies',
          'Data protection frameworks',
          'Security monitoring coordination',
          'Incident-response planning',
          'Compliance support',
        ],
      },
    ],
  },
  {
    id: 'training',
    number: '14',
    title: 'Training & Change Management',
    description: 'Transformation fails when employees refuse to use the new system.',
    groups: [
      {
        name: 'Enablement',
        items: [
          'AI training',
          'Digital transformation training',
          'Employee technology training',
          'CRM training',
          'Automation training',
          'Process training',
          'Leadership workshops',
          'Change-management programs',
          'SOP training',
        ],
      },
    ],
  },
  {
    id: 'managed',
    number: '15',
    title: 'Managed Services',
    description: 'Glyphatic stays embedded as your Digital Transformation Partner.',
    groups: [
      {
        name: 'Digital Transformation Partner',
        items: [
          'System management',
          'Automation management',
          'CRM administration',
          'AI system management',
          'BPO operations',
          'Analytics',
          'Growth optimization',
          'Technical support',
          'Continuous improvement',
        ],
      },
    ],
  },
]

export const DIVISIONS: Division[] = [
  {
    id: 'advisory',
    name: 'Glyphatic Advisory',
    tagline: 'Strategy & transformation',
    description:
      'Diagnose the business problem, redesign the operating model, and build the roadmap for the AI era.',
    categoryIds: ['strategy', 'training', 'cybersecurity'],
  },
  {
    id: 'ai',
    name: 'Glyphatic AI',
    tagline: 'AI implementation & workforce transformation',
    description:
      'Move from AI talk to AI work — assistants, copilots, automation, and a workforce that actually uses them.',
    categoryIds: ['ai'],
  },
  {
    id: 'systems',
    name: 'Glyphatic Systems',
    tagline: 'Digital infrastructure, automation & Mewayz',
    description:
      'Design and run the digital operating layer of the company — automation, infrastructure, and Mewayz.',
    categoryIds: ['automation', 'infrastructure', 'mewayz', 'digital-experience'],
  },
  {
    id: 'growth',
    name: 'Glyphatic Growth',
    tagline: 'Marketing, sales & revenue systems',
    description:
      'Build the revenue engine — pipeline, performance marketing, and growth systems that compound.',
    categoryIds: ['revenue', 'growth'],
  },
  {
    id: 'authority',
    name: 'Glyphatic Authority',
    tagline: 'Branding & executive authority',
    description:
      'Position the brand and the founder as the obvious choice — strategy, authority, and creative.',
    categoryIds: ['authority'],
  },
  {
    id: 'operations',
    name: 'Glyphatic Operations',
    tagline: 'BPO & managed operations',
    description:
      'Operate the functions you can\u2019t afford to run in-house — customer, sales, back office, and more.',
    categoryIds: ['bpo', 'industry', 'managed'],
  },
  {
    id: 'intelligence',
    name: 'Glyphatic Intelligence',
    tagline: 'Data, analytics & business intelligence',
    description:
      'Turn operating data into decisions — dashboards, KPIs, forecasting, and management reporting.',
    categoryIds: ['intelligence'],
  },
]

export const CLIENT_JOURNEY = [
  { step: '01', name: 'Diagnose', description: 'Find where the business is leaking time, money, and momentum.' },
  { step: '02', name: 'Strategize', description: 'Design the transformation and the operating model behind it.' },
  { step: '03', name: 'Transform', description: 'Modernize the organization for the AI era.' },
  { step: '04', name: 'Automate', description: 'Remove manual work with workflow and process automation.' },
  { step: '05', name: 'Implement', description: 'Deploy the systems, AI, and infrastructure that run the business.' },
  { step: '06', name: 'Operate', description: 'Run the required functions through Glyphatic Operations.' },
  { step: '07', name: 'Optimize', description: 'Measure, tune, and improve the systems continuously.' },
  { step: '08', name: 'Scale', description: 'Compound the wins across the whole organization.' },
]

export const POSITIONING = {
  line: 'AI-Native Business Transformation, Technology & Operations',
  promise: 'Built for the AI era. Operated end to end.',
  old: 'Tell us what digital service you need.',
  new: 'Give us the business problem. We\u2019ll diagnose it, design the transformation, implement the technology, automate the workflows, operate the required functions, and continuously optimize the system.',
}
