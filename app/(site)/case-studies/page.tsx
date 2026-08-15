import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Glyphatic',
  description: 'Real transformations, measured outcomes.',
}

const CASES = [
  {
    title: 'Modernizing a staffing firm with AI-led candidate operations',
    result: '3.5x faster candidate turnaround',
    tag: 'Recruitment',
  },
  {
    title: 'Automating admission operations for a growing institution',
    result: '80% reduction in manual follow-up',
    tag: 'Education',
  },
  {
    title: 'Building the revenue engine for a B2B services company',
    result: '2x pipeline within two quarters',
    tag: 'Sales & Revenue',
  },
  {
    title: 'Outsourcing back-office operations for a healthcare provider',
    result: '45% lower operational cost',
    tag: 'Healthcare',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Case Studies
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Real transformations. Measured outcomes.
          </h1>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="group rounded-lg border border-black/10 bg-white p-7 transition-all hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#A8861D]">
                  {c.tag}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-neutral-900 leading-snug">
                  {c.title}
                </h2>
                <p className="mt-3 text-[15px] font-bold text-[#0F4C81]">{c.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-black/10 bg-gray-50 p-8 text-center">
            <p className="text-neutral-700">
              Want to be our next case study? Let&apos;s diagnose your business problem.
            </p>
            <Link
              href="/discuss-architecture"
              className="mt-4 inline-flex h-12 items-center gap-2 rounded-md bg-[#0F4C81] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Discuss Architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
