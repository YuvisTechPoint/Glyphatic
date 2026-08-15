import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Readiness Guide | Glyphatic',
  description: 'Diagnose whether your business is ready for AI transformation.',
}

const STAGES = [
  {
    title: 'Diagnose',
    body: 'Where is the business leaking time, money, and momentum? Before AI, find the workflows that AI should transform.',
  },
  {
    title: 'Assess readiness',
    body: 'Not every process is ready for AI. We score use cases by impact, data availability, and adoption risk.',
  },
  {
    title: 'Prioritize use cases',
    body: 'Start with the highest-leverage workflows — customer support, sales, document processing — where AI compounds fastest.',
  },
  {
    title: 'Enable the workforce',
    body: 'AI fails when employees refuse to use it. Training, SOP development, and human-AI workflow design make it stick.',
  },
]

export default function AIReadinessPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Resources
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            The AI Readiness Guide
          </h1>
          <p className="mt-6 text-[1.125rem] text-neutral-600 leading-relaxed">
            AI transformation is a workforce problem, not a technology problem. Here is
            how we approach it.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide max-w-3xl">
          <div className="space-y-6">
            {STAGES.map((s, i) => (
              <div key={s.title} className="rounded-lg border border-black/10 bg-white p-7">
                <span className="font-display text-sm font-bold text-[#C9A227]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-neutral-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/discuss-architecture"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-[#0F4C81] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
          >
            Get an AI readiness assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
