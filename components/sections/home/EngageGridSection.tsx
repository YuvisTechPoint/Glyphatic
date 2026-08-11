'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

type Persona = 'architecture' | 'boutique' | 'deliverables' | 'handoff'

interface EngageCard {
  id: string
  title: string
  description: string
  cta: string
  href: string
  image: string
}

const TABS: { id: Persona; label: string; cards: EngageCard[] }[] = [
  {
    id: 'architecture',
    label: 'Architecture First',
    cards: [
      {
        id: 'scalability',
        title: 'Built for Scale',
        description: 'We don\'t just write code; we design systems that handle massive concurrency and data throughput from day one.',
        cta: 'View Architecture Patterns',
        href: '/resources/architecture-patterns',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'infrastructure',
        title: 'Cloud-Native Infrastructure',
        description: 'Leveraging Kubernetes, AWS, and GCP to ensure high availability and zero-downtime deployments for mission-critical applications.',
        cta: 'Explore Cloud Services',
        href: '/services/cloud-infrastructure',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'boutique',
    label: 'Boutique by Design',
    cards: [
      {
        id: 'senior-talent',
        title: 'Senior Talent Only',
        description: 'No juniors learning on your dime. Our teams consist entirely of senior engineers who have built systems at scale before.',
        cta: 'Meet the Team',
        href: '/about-us/leadership',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'direct-access',
        title: 'Direct Access',
        description: 'You communicate directly with the engineers building your product. No account managers playing telephone with your requirements.',
        cta: 'Talk to an Engineer',
        href: '/contact-us',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'deliverables',
    label: 'Measurable Deliverables',
    cards: [
      {
        id: 'sprints',
        title: 'Predictable Velocity',
        description: 'We work in transparent, two-week sprints with clear deliverables, ensuring you always know exactly what you are paying for.',
        cta: 'See Our Process',
        href: '/why-us#deliverables',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'metrics',
        title: 'Data-Driven Outcomes',
        description: 'Success is measured in milliseconds of latency reduced, dollars of infrastructure saved, and user acquisition metrics.',
        cta: 'Read Case Studies',
        href: '/case-studies',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'handoff',
    label: 'Post-Engagement',
    cards: [
      {
        id: 'documentation',
        title: 'Immaculate Documentation',
        description: 'We leave your internal teams with comprehensive documentation, runbooks, and architecture decision records (ADRs).',
        cta: 'View Sample Docs',
        href: '/open-source',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'training',
        title: 'Team Enablement',
        description: 'We don\'t just throw code over the wall. We actively train your engineers on the systems we\'ve built for a seamless handoff.',
        cta: 'Learn About Handoff',
        href: '/why-us#handoff',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      }
    ]
  }
]

export function EngageGridSection() {
  const [activeTab, setActiveTab] = useState<Persona>('architecture')

  const activeData = TABS.find((t) => t.id === activeTab)!

  return (
    <section className="py-20 lg:py-32 bg-[#141414]">
      <div className="container-wide">
        <FadeInView>
          <div className="mb-12">
            {/* Orange graphic line matching screenshot */}
            <div className="flex items-center mb-8 opacity-80">
              <div className="h-6 w-[1px] bg-[#FA582D]" />
              <div className="h-[1px] w-[260px] bg-[#FA582D]" />
            </div>

            <h2 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-medium leading-[1.1] text-white tracking-tight">
              Why Glyphatic?<br />
              We'll Give You <span className="text-[#FA582D]">Four Specific Reasons.</span>
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
                  ? 'bg-[#FA582D] text-[#111111]'
                  : 'text-white hover:bg-white/5'
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
                  className="group flex flex-col xl:flex-row rounded-[1.25rem] bg-[#1a1a1a] border border-white/5 overflow-hidden transition-colors hover:border-white/20 hover:bg-[#222222]"
                >
                  {/* Image side */}
                  <div className="relative h-[240px] xl:h-auto xl:w-[45%] shrink-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Text side */}
                  <div className="flex flex-col justify-center p-8 xl:p-10 flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-medium text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-white/70 leading-relaxed mb-8 flex-1">
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
