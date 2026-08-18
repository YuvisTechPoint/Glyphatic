'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Trophy, Plus } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { FadeInView } from '@/components/animations/FadeInView'
import { tabPanel } from '@/lib/animations'
import { cn } from '@/lib/utils'

type ThemeColor = 'yellow' | 'green' | 'emerald' | 'blue' | 'purple' | 'orange'

interface PlatformTab {
  id: string
  label: string
  headline: string
  body: string
  themeColor: ThemeColor
  stats: { value: number | string; suffix?: string; label: string; decimals?: number }[]
  ctaText: string
  ctaHref: string
  awards: { name: string; url?: string; org?: string }[]
  logos: { name: string }[]
}

const PLATFORM_TABS: PlatformTab[] = [
  {
    id: 'ai-transformation',
    label: 'AI Transformation',
    headline: 'AI TRANSFORMATION',
    themeColor: 'yellow',
    body: 'Make AI operational across your organization. We help you move from AI experimentation to AI operations.',
    stats: [
      { value: 'AI', suffix: '-native', label: 'STRATEGY TO EXECUTION' },
      { value: '10+', suffix: '', label: 'CORE CAPABILITIES' },
    ],
    ctaText: 'Explore AI Transformation',
    ctaHref: '/solutions/ai-transformation',
    awards: [
      { org: 'Service', name: 'AI Strategy & Roadmap Development' },
      { org: 'Service', name: 'Custom AI Solution Development' },
      { org: 'Service', name: 'AI Agent Development & Deployment' },
      { org: 'Service', name: 'Generative AI Implementation' },
    ],
    logos: [
      { name: 'Salesforce' },
      { name: 'Infosys' },
      { name: 'Toyota' },
      { name: 'Panasonic' },
      { name: 'Colgate' },
      { name: 'Pfizer' },
      { name: 'Westfield' },
    ],
  },
  {
    id: 'automation',
    label: 'Intelligent Automation',
    headline: 'INTELLIGENT AUTOMATION',
    themeColor: 'green',
    body: 'Eliminate manual work systematically. We design and deploy automation systems that streamline operations.',
    stats: [
      { value: 'Zero', suffix: '-error', label: 'WORKFLOW DESIGN' },
      { value: 'RPA', suffix: '', label: 'PROCESS AUTOMATION' },
    ],
    ctaText: 'Explore Automation',
    ctaHref: '/services/ai-automation',
    awards: [
      { org: 'Service', name: 'Workflow Automation Design' },
      { org: 'Service', name: 'Robotic Process Automation (RPA)' },
      { org: 'Service', name: 'Intelligent Document Processing' },
      { org: 'Service', name: 'Customer Service Automation' },
    ],
    logos: [
      { name: 'TriHealth' },
      { name: 'Maximus' },
      { name: 'Transgourmet' },
      { name: 'Sabre' },
      { name: 'ADT' },
      { name: 'Flex' },
      { name: 'AutoNation' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Digital Infrastructure',
    headline: 'DIGITAL INFRASTRUCTURE',
    themeColor: 'emerald',
    body: 'Build modern, scalable technology foundations. We architect cloud-native environments and robust backend systems.',
    stats: [
      { value: 'Cloud', suffix: '-native', label: 'INFRASTRUCTURE' },
      { value: 'Secure', suffix: '', label: 'CYBERSECURITY' },
    ],
    ctaText: 'Explore Digital Infrastructure',
    ctaHref: '/services/digital-infrastructure',
    awards: [
      { org: 'Service', name: 'Cloud Architecture & Migration' },
      { org: 'Service', name: 'Enterprise Application Development' },
      { org: 'Service', name: 'Web & Mobile App Development' },
      { org: 'Service', name: 'System Integration & API Dev' },
    ],
    logos: [
      { name: 'Salesforce' },
      { name: 'Schlumberger' },
      { name: 'Northern Trust' },
      { name: 'Invest Bank' },
      { name: 'Caesar\'s' },
      { name: 'Resolution Life' },
      { name: 'NBC Universal' },
    ],
  },
  {
    id: 'growth',
    label: 'Growth & Revenue',
    headline: 'GROWTH & REVENUE OPERATIONS',
    themeColor: 'blue',
    body: 'Build high-performance revenue engines. We optimize sales processes and marketing technology stack.',
    stats: [
      { value: 'RevOps', suffix: '', label: 'STRATEGY & DESIGN' },
      { value: 'CRM', suffix: '', label: 'IMPLEMENTATION & OPTIM.' },
    ],
    ctaText: 'Explore Growth & Revenue',
    ctaHref: '/services/growth-marketing',
    awards: [
      { org: 'Service', name: 'Revenue Operations Strategy' },
      { org: 'Service', name: 'Sales Process Design & Optimization' },
      { org: 'Service', name: 'CRM Implementation & Optimization' },
      { org: 'Service', name: 'Marketing Automation' },
    ],
    logos: [
      { name: 'Village Roadshow' },
      { name: 'US Signals' },
      { name: 'Grupo Bimbo' },
      { name: 'Carnival Corporation' },
      { name: 'Grant Thornton' },
      { name: 'Dish' },
      { name: 'Aaron\'s' },
    ],
  },
  {
    id: 'brand',
    label: 'Brand & Authority',
    headline: 'BRAND & MARKET AUTHORITY',
    themeColor: 'purple',
    body: 'Build recognition, trust, and market presence. We establish strategic thought leadership programs.',
    stats: [
      { value: 'SEO', suffix: '', label: 'SEARCH & STRATEGY' },
      { value: 'Brand', suffix: '', label: 'POSITIONING & DESIGN' },
    ],
    ctaText: 'Explore Brand & Authority',
    ctaHref: '/services/brand-authority',
    awards: [
      { org: 'Service', name: 'Brand Strategy & Positioning' },
      { org: 'Service', name: 'Content Strategy & Creation' },
      { org: 'Service', name: 'Thought Leadership Programs' },
      { org: 'Service', name: 'SEO & Search Strategy' },
    ],
    logos: [
      { name: 'Panasonic' },
      { name: 'Infosys' },
      { name: 'Toyota' },
      { name: 'Colgate' },
      { name: 'Maximus' },
      { name: 'Transgourmet' },
      { name: 'Sabre' },
    ],
  },
  {
    id: 'operations',
    label: 'Intelligent Operations',
    headline: 'INTELLIGENT OPERATIONS (BPO)',
    themeColor: 'orange',
    body: 'Run critical business functions with AI-enhanced teams. We deliver operational excellence at scale.',
    stats: [
      { value: '24/7', suffix: '', label: 'OPERATIONS MANAGEMENT' },
      { value: 'BPO', suffix: '', label: 'MANAGED SERVICES' },
    ],
    ctaText: 'Explore Operations',
    ctaHref: '/services/managed-services',
    awards: [
      { org: 'Service', name: 'Customer Service Operations' },
      { org: 'Service', name: 'Technical Support Operations' },
      { org: 'Service', name: 'Sales Development & Lead Qual.' },
      { org: 'Service', name: 'Data Management & Processing' },
    ],
    logos: [
      { name: 'Pfizer' },
      { name: 'TriHealth' },
      { name: 'Westfield' },
      { name: 'Flex' },
      { name: 'AutoNation' },
      { name: 'ADT' },
      { name: 'Northern Trust' },
    ],
  },
  {
    id: 'analytics',
    label: 'BI & Analytics',
    headline: 'BUSINESS INTELLIGENCE & ANALYTICS',
    themeColor: 'emerald',
    body: 'Turn data into competitive advantage. We build unified data architectures and predictive analytics systems.',
    stats: [
      { value: 'BI', suffix: '', label: 'ARCHITECTURE & PORTALS' },
      { value: 'Data', suffix: '', label: 'STRATEGY & GOVERNANCE' },
    ],
    ctaText: 'Explore BI & Analytics',
    ctaHref: '/services/data-intelligence',
    awards: [
      { org: 'Service', name: 'Data Strategy & Governance' },
      { org: 'Service', name: 'Business Intelligence Architecture' },
      { org: 'Service', name: 'Dashboard & Reporting Development' },
      { org: 'Service', name: 'Advanced Analytics & Forecasting' },
    ],
    logos: [
      { name: 'Salesforce' },
      { name: 'Schlumberger' },
      { name: 'Grant Thornton' },
      { name: 'Invest Bank' },
      { name: 'Resolution Life' },
      { name: 'NBC Universal' },
      { name: 'Dish' },
    ],
  },
]

const THEME_STYLES = {
  yellow: {
    title: 'text-[#FACC15]',
    btnBg: 'bg-[#FACC15]',
    btnText: 'text-black',
    awardBg: 'bg-[#FACC15]',
    iconColor: 'text-[#FACC15]',
    borderLine: 'bg-[#FACC15]',
  },
  green: {
    title: 'text-[#00E676]',
    btnBg: 'bg-[#00E676]',
    btnText: 'text-black',
    awardBg: 'bg-[#00E676]',
    iconColor: 'text-[#00E676]',
    borderLine: 'bg-[#00E676]',
  },
  emerald: {
    title: 'text-[#00C853]', 
    btnBg: 'bg-[#00C853]',
    btnText: 'text-black',
    awardBg: 'bg-[#00C853]',
    iconColor: 'text-[#00C853]',
    borderLine: 'bg-[#00C853]',
  },
  blue: {
    title: 'text-[#2962FF]',
    btnBg: 'bg-[#2962FF]',
    btnText: 'text-white',
    awardBg: 'bg-[#84FFFF]',
    iconColor: 'text-[#2962FF]',
    borderLine: 'bg-[#2962FF]',
  },
  purple: {
    title: 'text-[#B388FF]',
    btnBg: 'bg-[#B388FF]',
    btnText: 'text-black',
    awardBg: 'bg-[#B388FF]',
    iconColor: 'text-[#B388FF]',
    borderLine: 'bg-[#B388FF]',
  },
  orange: {
    title: 'text-[#FA582D]',
    btnBg: 'bg-[#FA582D]',
    btnText: 'text-white',
    awardBg: 'bg-[#FFAB91]',
    iconColor: 'text-[#FA582D]',
    borderLine: 'bg-[#FA582D]',
  },
}

export function PlatformTabsSection() {
  const [activeTab, setActiveTab] = useState(PLATFORM_TABS[0].id)
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const numTabs = PLATFORM_TABS.length
    const segment = 1 / numTabs
    
    let index = Math.floor(latest / segment)
    if (index >= numTabs) index = numTabs - 1
    
    const targetTabId = PLATFORM_TABS[index].id
    if (activeTab !== targetTabId) {
      setActiveTab(targetTabId)
    }
  })

  // Prevent default click from breaking the scroll sync. Instead, let them know it's scroll-based.
  // Or alternatively, we can scroll the window to the corresponding segment.
  const handleTabClick = (index: number) => {
    if (!containerRef.current) return
    
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const scrollHeightPerTab = containerHeight / PLATFORM_TABS.length
    
    // Calculate the target scroll position for this tab
    const targetScrollY = containerTop + (scrollHeightPerTab * index) + (scrollHeightPerTab * 0.1)
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    })
  }

  const current = PLATFORM_TABS.find((t) => t.id === activeTab) ?? PLATFORM_TABS[0]
  const styles = THEME_STYLES[current.themeColor]

  return (
    <section ref={containerRef} className="relative h-[700vh] bg-neutral-50 dark:bg-[#111111] transition-colors duration-200">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-16 md:py-24 overflow-hidden">
        <div className="container-wide relative z-10 w-full">
          <FadeInView>
            <div className="w-[120px] md:w-[150px] border-t border-[#FA582D] mb-6" />
            <h2 className="max-w-2xl font-display text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.2] text-neutral-900 dark:text-white">
              Intelligent transformation<br className="hidden md:block" />across the entire business.
            </h2>
          </FadeInView>

          <div className="mt-12 md:mt-16">
            <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10">
              {PLATFORM_TABS.map((tab, index) => {
                const isActive = activeTab === tab.id
                const tabStyles = THEME_STYLES[tab.themeColor]
                return (
                  <div key={tab.id} className="relative pb-2">
                    <button
                      type="button"
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        'shrink-0 flex items-center gap-3 py-2 text-[13px] md:text-[14px] font-medium transition-colors',
                        isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-[#999999] hover:text-neutral-900 dark:hover:text-white',
                      )}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("transition-colors", isActive ? tabStyles.iconColor : "text-[#666666]")}>
                        <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {tab.label}
                    </button>
                    {isActive && (
                      <motion.div
                        layoutId="platform-tab-underline"
                        className={cn("absolute bottom-0 left-0 right-0 h-[2px]", tabStyles.borderLine)}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-10 md:mt-16 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={tabPanel}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative"
              >
                {/* Ambient Background Graphic behind content */}
                <div className="absolute inset-0 right-1/4 opacity-10 pointer-events-none">
                  <div className={cn("w-full h-[600px] bg-gradient-to-tr from-transparent via-current to-transparent", styles.iconColor)} style={{ maskImage: 'repeating-linear-gradient(45deg, black 0, black 1px, transparent 2px, transparent 8px)' }}></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
                  {/* Left Content Side */}
                  <div>
                    <h3 className={cn("font-display text-[2rem] md:text-[2.5rem] leading-tight tracking-[0.15em] uppercase mb-6 md:mb-8", styles.title)}>
                      {current.headline}
                    </h3>
                    
                    <p className="max-w-2xl text-[15px] md:text-[16px] text-neutral-800 dark:text-white leading-relaxed font-medium">
                      {current.body}
                    </p>

                    <div className="mt-10 md:mt-12 flex gap-12 md:gap-16">
                      {current.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-[2rem] md:text-[2.5rem] font-bold text-neutral-900 dark:text-white mb-2 leading-none flex items-baseline">
                            {stat.value}
                            {stat.suffix && <span className="text-[1.5rem] ml-1">{stat.suffix}</span>}
                          </div>
                          <div className="text-[10px] md:text-[11px] font-bold text-neutral-900 dark:text-white uppercase tracking-widest">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <Link
                        href={current.ctaHref}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold transition-transform hover:scale-105",
                          styles.btnBg,
                          styles.btnText
                        )}
                      >
                        {current.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Content Side - Capability Cards */}
                  <div className="flex flex-col">
                    <div className="flex justify-end mb-4">
                      <button className="flex items-center gap-2 text-[12px] font-bold text-neutral-600 dark:text-white hover:text-neutral-900 dark:hover:text-gray-300 transition-colors uppercase tracking-wider">
                        See all
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {current.awards.map((award) => (
                        <div
                          key={award.name}
                          className={cn("flex items-start gap-4 p-5 rounded-lg border border-transparent shadow-lg hover:brightness-110 transition-all", styles.awardBg)}
                        >
                          <Trophy className="h-6 w-6 text-black shrink-0" strokeWidth={1.5} />
                          <div className="flex flex-col">
                            {award.org && (
                              <span className="text-[13px] font-bold text-black mb-1">
                                {award.org}
                              </span>
                            )}
                            <span className="text-[12px] text-black font-medium leading-snug">
                              {award.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <TrustedByLogos logos={current.logos} className="mt-12 md:mt-20 border-t border-white/10 pt-10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
