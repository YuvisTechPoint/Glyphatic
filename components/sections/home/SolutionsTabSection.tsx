'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Hexagon, Box, Bot, Brain, BarChart3, Workflow } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

interface ProductLink {
  label: string
  href: string
}

interface ProductTab {
  id: string
  label: string
  Icon: any
  links: ProductLink[]
}

const PRODUCT_TABS: ProductTab[] = [
  {
    id: 'mewayz',
    label: 'Mewayz — Business Operating System',
    Icon: Box,
    links: [
      {
        label: 'Unified CRM & Sales Management for growing teams',
        href: '/products/mewayz#crm',
      },
      {
        label: 'Project & Operations Management to track client delivery',
        href: '/products/mewayz#operations',
      },
      {
        label: 'Customer Service & Support Management with AI routing',
        href: '/products/mewayz#support',
      },
      {
        label: 'Process Automation & Workflow Management for manual tasks',
        href: '/products/mewayz#automation',
      },
    ],
  },
  {
    id: 'edquate',
    label: 'Edquate — Education Intelligence Platform',
    Icon: Brain,
    links: [
      {
        label: 'AI-Powered Student Information System & profiles',
        href: '/products/edquate#sis',
      },
      {
        label: 'Learning Management System & Academic Analytics',
        href: '/products/edquate#lms',
      },
      {
        label: 'Admissions & Enrollment Automation for parent inquiries',
        href: '/products/edquate#admissions',
      },
      {
        label: 'Fee Management & Finance Automation with online payments',
        href: '/products/edquate#finance',
      },
    ],
  },
  {
    id: 'ai-platforms',
    label: 'AI Products & Business Platforms',
    Icon: Bot,
    links: [
      {
        label: 'Intelligent solutions for specific business functions',
        href: '/products',
      },
      {
        label: 'Explore our growing suite of proprietary products',
        href: '/products#roadmap',
      },
    ],
  },
]

export function SolutionsTabSection() {
  const [activeTab, setActiveTab] = useState(PRODUCT_TABS[0].id)
  const current = PRODUCT_TABS.find((t) => t.id === activeTab) ?? PRODUCT_TABS[0]

  return (
    <section className="relative min-h-[800px] w-full overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 dark:from-black dark:via-black/80 to-transparent z-10 transition-colors duration-200" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent dark:from-black dark:via-transparent to-transparent z-10 transition-colors duration-200" />
        {/* CSS-only ambient background — no external images */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 60% 40%, rgba(250,88,45,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(41,98,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 40% 80%, rgba(0,200,83,0.08) 0%, transparent 40%)',
          }}
        />
      </div>

      <div className="container-wide relative z-20 flex h-full flex-col lg:flex-row py-20 lg:py-32">
        
        {/* Left Column (Heading + Tabs) */}
        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 flex flex-col">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.1] font-medium text-neutral-900 dark:text-white mb-16">
              Technology that<br />powers<br />transformation.
            </h2>
          </FadeInView>

          <div className="flex flex-col gap-6">
            {PRODUCT_TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="group flex items-center gap-4 text-left transition-colors"
                >
                  <tab.Icon
                    className={cn(
                      'w-5 h-5 transition-colors',
                      isActive ? 'text-[#00E5FF]' : 'text-neutral-400 dark:text-gray-500 group-hover:text-neutral-600 dark:group-hover:text-gray-400'
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={cn(
                      'text-[15px] font-medium transition-colors',
                      isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-gray-400 group-hover:text-neutral-900 dark:group-hover:text-white'
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column (Links) */}
        <div className="flex-1 mt-16 lg:mt-0 flex flex-col justify-end lg:pl-16 xl:pl-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-x-12 gap-y-8 md:grid-cols-2 lg:pb-12"
            >
              {current.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start justify-between gap-4 text-neutral-800 dark:text-white hover:text-[#00E5FF] dark:hover:text-[#00E5FF] transition-colors"
                >
                  <span className="text-[17px] font-medium leading-snug">
                    {link.label}
                  </span>
                  <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
