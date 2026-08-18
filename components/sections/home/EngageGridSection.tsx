'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

type Phase = 'diagnose' | 'design' | 'operate' | 'scale'

interface EngageCard {
  id: string
  title: string
  description: string
  cta: string
  href: string
  image: string
}

const TABS: { id: Phase; label: string; cards: EngageCard[] }[] = [
  {
    id: 'diagnose',
    label: 'Diagnose & Strategize',
    cards: [
      {
        id: 'diagnose',
        title: '01 — Diagnose',
        description: 'Understand the business. We conduct a deep operational assessment to identify bottlenecks, inefficiencies, and opportunities across your organization.',
        cta: 'Learn About Our Approach',
        href: '/why-glyphatic/platformization',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'strategize',
        title: '02 — Strategize',
        description: 'Define the transformation roadmap. We create a phased plan that connects technology, AI, automation, and human operations to your specific business objectives.',
        cta: 'See Our Framework',
        href: '/why-glyphatic/platformization',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'design',
    label: 'Design & Implement',
    cards: [
      {
        id: 'design',
        title: '03 — Design',
        description: 'Architect the technology, workflows, and operating model. We design systems that are built to scale — not just to launch.',
        cta: 'Explore Our Capabilities',
        href: '/services',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'implement',
        title: '04 — Implement',
        description: 'Deploy systems, AI, and automation. We build and integrate the technology stack, train teams, and ensure everything works in production — not just in a demo.',
        cta: 'View Our Services',
        href: '/services/digital-infrastructure',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'operate',
    label: 'Operate & Optimize',
    cards: [
      {
        id: 'operate',
        title: '05 — Operate',
        description: 'Run critical business functions where required. Unlike typical consultants who leave after the presentation, we stay to operate and ensure the transformation delivers results.',
        cta: 'Learn About Managed Services',
        href: '/services/managed-services',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'optimize',
        title: '06 — Optimize',
        description: 'Measure and continuously improve. We use data, analytics, and AI to identify performance gaps and optimize systems for better outcomes over time.',
        cta: 'See Our Intelligence Tools',
        href: '/resources/tools',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'scale',
    label: 'Scale',
    cards: [
      {
        id: 'scale',
        title: '07 — Scale',
        description: 'Expand the system across the organization. Once the transformation proves itself in one area, we help replicate and scale it across departments, geographies, and business units.',
        cta: 'Talk to Glyphatic',
        href: '/company/contact-sales',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'framework-overview',
        title: 'The Complete Framework',
        description: 'Diagnose → Strategize → Design → Implement → Operate → Optimize → Scale. This is how Glyphatic transforms businesses — not just with technology, but with a methodology that delivers lasting results.',
        cta: 'Explore the Full Framework',
        href: '/why-glyphatic/platformization',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      }
    ]
  }
]

export function EngageGridSection() {
  const [activeTab, setActiveTab] = useState<Phase>('diagnose')

  const activeData = TABS.find((t) => t.id === activeTab)!

  return (
    <section className="py-20 lg:py-32 bg-neutral-100 dark:bg-[#141414] transition-colors duration-200">
      <div className="container-wide">
        <FadeInView>
          <div className="mb-12">
            {/* Orange graphic line matching screenshot */}
            <div className="flex items-center mb-8 opacity-80">
              <div className="h-6 w-[1px] bg-[#FA582D]" />
              <div className="h-[1px] w-[260px] bg-[#FA582D]" />
            </div>

            <h2 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-medium leading-[1.1] text-neutral-900 dark:text-white tracking-tight">
              The Glyphatic<br />
              <span className="text-[#FA582D]">Transformation Framework.</span>
            </h2>
          </div>
        </FadeInView>

        {/* Tabs - Pill style matching screenshot */}
        <div className="mb-12 inline-flex items-center gap-1 md:gap-2 p-2 rounded-full border border-white/10 bg-transparent overflow-x-auto max-w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'relative rounded-full px-8 py-3 text-[16px] font-bold transition-colors whitespace-nowrap',
                activeTab === tab.id
                  ? 'bg-[#FA582D] text-white dark:text-[#111111]'
                  : 'text-neutral-600 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/5'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Horizontal Cards Grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {activeData.cards.map((card) => (
                <div
                  key={card.id}
                  className="group flex flex-col xl:flex-row rounded-[1.25rem] bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-white/5 overflow-hidden transition-colors hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-[#222222]"
                >
                  {/* Image side */}
                  <div className="relative h-[240px] xl:h-auto xl:w-[45%] shrink-0 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Text side */}
                  <div className="flex flex-col justify-center p-8 xl:p-10 flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-medium text-neutral-900 dark:text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-neutral-600 dark:text-white/70 leading-relaxed mb-8 flex-1">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="group/link inline-flex items-center gap-2 text-[15px] font-bold text-[#FA582D] transition-colors"
                    >
                      {card.cta}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
