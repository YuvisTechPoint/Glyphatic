import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DemoForm } from '@/components/forms/DemoForm'

export const metadata: Metadata = {
  title: 'Get Started | Glyphatic',
  description: 'Future-proof your business. Demos, trials, and next steps.',
}

const ENTRY_POINTS = [
  {
    title: 'Discuss Architecture',
    description: 'Give us the business problem. We\u2019ll diagnose it and design the transformation.',
    href: '/discuss-architecture',
  },
  {
    title: 'Explore the Ecosystem',
    description: 'See the seven divisions and the full delivery portfolio.',
    href: '/services',
  },
  {
    title: 'See Case Studies',
    description: 'Real transformations, measured outcomes.',
    href: '/case-studies',
  },
]

export default function GetStartedPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Get Started
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Future-proof your business.
          </h1>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENTRY_POINTS.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group flex flex-col rounded-lg border border-black/10 bg-white p-7 transition-all hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <h2 className="font-display text-lg font-semibold text-neutral-900">
                  {e.title}
                </h2>
                <p className="mt-3 flex-1 text-[14px] text-neutral-600 leading-relaxed">
                  {e.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0F4C81]">
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-black/5 bg-gray-50">
        <div className="container-wide max-w-2xl">
          <h2 className="font-display text-2xl font-medium text-neutral-900">
            Request a demo
          </h2>
          <p className="mt-3 text-neutral-600">
            See how Glyphatic can transform, automate, and operate your business.
          </p>
          <div className="mt-8 rounded-lg border border-black/10 bg-white p-8">
            <DemoForm />
          </div>
        </div>
      </section>
    </main>
  )
}
