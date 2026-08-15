import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Glyphatic',
  description: 'Architecture patterns, AI readiness guides, and transformation playbooks.',
}

const RESOURCES = [
  {
    title: 'Architecture Patterns',
    description: 'How we design scalable, automatable operating layers for the AI era.',
    href: '/resources/architecture-patterns',
  },
  {
    title: 'AI Readiness Guide',
    description: 'Diagnose whether your business is ready for AI transformation — and where to start.',
    href: '/resources/ai-readiness',
  },
  {
    title: 'The Glyphatic Architecture',
    description: 'Seven divisions, 15 disciplines, one transformation partner.',
    href: '/services',
  },
  {
    title: 'The Ultimate Client Journey',
    description: 'Diagnose → Strategize → Transform → Automate → Implement → Operate → Optimize → Scale.',
    href: '/services#journey',
  },
]

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Resources
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Playbooks for the AI-era transformation.
          </h1>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex flex-col rounded-lg border border-black/10 bg-white p-7 transition-all hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <h2 className="font-display text-xl font-semibold text-neutral-900">
                  {r.title}
                </h2>
                <p className="mt-3 flex-1 text-[14px] text-neutral-600 leading-relaxed">
                  {r.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0F4C81]">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
