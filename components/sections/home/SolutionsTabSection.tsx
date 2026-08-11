'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Hexagon, Shield, Cloud, Lock, Cpu, Crosshair, Building2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

interface SolutionLink {
  label: string
  href: string
}

interface SolutionTab {
  id: string
  label: string
  Icon: any
  links: SolutionLink[]
}

const SOLUTION_TABS: SolutionTab[] = [
  {
    id: 'ai',
    label: 'Secure Your AI ecosystem',
    Icon: Hexagon,
    links: [
      {
        label: 'Secure AI apps, agents, models, and data at every step',
        href: '/ai-security/prisma-airs',
      },
      {
        label: 'Secure the use of GenAI applications in the enterprise',
        href: '/ai-security/ai-access-security',
      },
    ],
  },
  {
    id: 'network',
    label: 'Secure your network',
    Icon: Shield,
    links: [
      {
        label: 'Secure the whole enterprise consistently',
        href: '/network-security/secure-enterprise',
      },
      {
        label: 'Apply AI inline to prevent evasive threats',
        href: '/network-security/ai-inline',
      },
      {
        label: 'Simplify network security operations',
        href: '/network-security/simplify-operations',
      },
      {
        label: 'Adopt Zero Trust across the network',
        href: '/network-security/zero-trust',
      },
      {
        label: 'Reduce complexity with AI-powered SASE',
        href: '/sase',
      },
      {
        label: 'Secure work on any device',
        href: '/network-security/secure-any-device',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Secure your cloud',
    Icon: Cloud,
    links: [
      {
        label: 'The future of real-time cloud, today',
        href: '/cortex/cloud',
      },
      {
        label: 'Stop risks at the source',
        href: '/cortex/cloud/stop-risks',
      },
      {
        label: 'Rapidly prioritize and remediate risks across any cloud',
        href: '/cortex/cloud/remediate-risks',
      },
      {
        label: 'Prevent cloud attacks in real-time',
        href: '/cortex/cloud/prevent-attacks',
      },
      {
        label: 'Detect, investigate and respond to threats across enterprise and cloud',
        href: '/cortex/cloud/detect-respond',
      },
    ],
  },
  {
    id: 'identity',
    label: 'Secure Your Identities',
    Icon: Lock,
    links: [
      {
        label: 'Close the access gaps attackers walk through',
        href: '/idira/access-gaps',
      },
      {
        label: 'Secure machine identities at the scale AI demands',
        href: '/idira/machine-identities',
      },
      {
        label: 'Secure agentic identities to accelerate AI innovation',
        href: '/idira/agentic-identities',
      },
      {
        label: 'Discover and govern every entitlement',
        href: '/idira/govern-entitlements',
      },
      {
        label: 'Eliminate standing privilege',
        href: '/idira/eliminate-standing-privilege',
      },
    ],
  },
  {
    id: 'soc',
    label: 'Automate your SOC',
    Icon: Cpu,
    links: [
      {
        label: 'Reign in security operations with one platform',
        href: '/cortex/unified-soc',
      },
      {
        label: 'Accelerate threat detection and response',
        href: '/cortex/threat-detection',
      },
      {
        label: 'Deliver security at speed and scale with automation',
        href: '/cortex/automation',
      },
      {
        label: 'Secure and shrink your attack surface',
        href: '/cortex/attack-surface',
      },
    ],
  },
  {
    id: 'unit42',
    label: 'Threat intel and incident response services',
    Icon: Crosshair,
    links: [
      {
        label: 'Threat Intel and Incident Response Services (Unit 42)',
        href: '/unit42',
      },
      {
        label: 'Proactive Assessments',
        href: '/unit42/proactive-assessments',
      },
      {
        label: 'Incident Response',
        href: '/unit42/incident-response',
      },
      {
        label: 'Transform Your Security Strategy',
        href: '/unit42/transform-security-strategy',
      },
      {
        label: 'Discover Threat Intelligence',
        href: '/unit42/threat-intelligence',
      },
    ],
  },
  {
    id: 'industry',
    label: 'Solutions by industry',
    Icon: Building2,
    links: [
      { label: 'Public sector', href: '/industry/public-sector' },
      { label: 'Financial services', href: '/industry/financial-services' },
      { label: 'Manufacturing', href: '/industry/manufacturing' },
      { label: 'Healthcare', href: '/industry/healthcare' },
      { label: 'SMB', href: '/industry/smb' },
    ],
  },
]

export function SolutionsTabSection() {
  const [activeTab, setActiveTab] = useState(SOLUTION_TABS[0].id)
  const current = SOLUTION_TABS.find((t) => t.id === activeTab) ?? SOLUTION_TABS[0]

  return (
    <section className="relative min-h-[800px] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
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
            <h2 className="font-display text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] leading-[1.1] font-medium text-white mb-16">
              Secure whatever,<br />whenever, wherever —<br />with less complexity.
            </h2>
          </FadeInView>

          <div className="flex flex-col gap-6">
            {SOLUTION_TABS.map((tab) => {
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
                      isActive ? 'text-[#00E5FF]' : 'text-gray-500 group-hover:text-gray-400'
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={cn(
                      'text-[15px] font-medium transition-colors',
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
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
                  className="group flex items-start justify-between gap-4 text-white hover:text-[#00E5FF] transition-colors"
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
