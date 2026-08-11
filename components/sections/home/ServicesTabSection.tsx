'use client'

import Link from 'next/link'
import StatCounter from '@/components/charts/StatCounter'
import Button from '@/components/ui/Button'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'
import { FadeInView } from '@/components/animations/FadeInView'

const LEAD_STATS = [
  { value: 1, suffix: 'K+', label: 'MATTERS PER YEAR' },
  { value: 24, suffix: '/7/365', label: 'incident response' },
] as const

const SUPPORTING_STATS = [
  { value: 200, suffix: '+', label: 'threat researchers' },
  { value: 30, suffix: 'M', label: 'malware samples analyzed per day' },
  { value: 1, suffix: 'K+', label: 'incident response engagements a year' },
  { value: 150, suffix: '+', label: 'trusted partner of law firms' },
] as const

const UNIT42_LOGOS = [
  { name: 'Colgate' },
  { name: 'Grant Thornton' },
  { name: 'Invest Bank' },
  { name: 'Sabre' },
  { name: 'ADT' },
]

export function ServicesTabSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeInView>
          <h2 className="font-display text-display-md text-neutral-900">
            Intelligence-driven. Response-ready.
          </h2>

          <div className="mt-6 inline-flex rounded-md border border-brand-500/30 bg-brand-50 px-4 py-2">
            <span className="text-body-sm font-semibold text-brand-700">
              Threat Intel & Incident Response
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600">
            Unit 42&apos;s world-renowned threat researchers, elite incident responders and
            expert security consultants will guide you with a threat-informed approach
            before, during and after an incident.
          </p>
        </FadeInView>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {LEAD_STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              size="lg"
              theme="light"
              color="brand"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORTING_STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              size="md"
              theme="light"
              color="default"
            />
          ))}
        </div>

        <div className="mt-10">
          <Button variant="primary" size="lg" href="/unit42">
            Explore Unit 42
          </Button>
        </div>

        <TrustedByLogos logos={UNIT42_LOGOS} className="mt-16" />
      </div>
    </section>
  )
}
