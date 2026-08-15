import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Architecture Patterns | Glyphatic',
  description: 'How Glyphatic designs scalable, automatable operating layers.',
}

const PATTERNS = [
  {
    title: 'The Operating Layer',
    body: 'Every business runs on a digital operating layer — CRM, ERP, project systems, dashboards, and workflows. We design it as one coherent architecture, not a pile of tools.',
  },
  {
    title: 'Automation Before Headcount',
    body: 'Before adding people, automate the workflow. Process automation, CRM automation, and notification systems remove the manual work that silently eats margin.',
  },
  {
    title: 'AI as Infrastructure',
    body: 'AI assistants, copilots, and document processing are not bolt-ons. They are components of the operating layer, designed to compound with the workflows around them.',
  },
  {
    title: 'Data-First Decisions',
    body: 'Executive dashboards, KPI systems, and management reporting turn operating data into decisions. Without the intelligence layer, transformation is guesswork.',
  },
]

export default function ArchitecturePatternsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Resources
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Architecture Patterns
          </h1>
          <p className="mt-6 text-[1.125rem] text-neutral-600 leading-relaxed">
            The patterns we use to design the digital operating layer of a company.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide max-w-3xl">
          <div className="space-y-6">
            {PATTERNS.map((p) => (
              <div key={p.title} className="rounded-lg border border-black/10 bg-white p-7">
                <h2 className="font-display text-xl font-semibold text-neutral-900">
                  {p.title}
                </h2>
                <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/discuss-architecture"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-[#0F4C81] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
          >
            Discuss Architecture <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
