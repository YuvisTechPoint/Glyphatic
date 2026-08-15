import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Glyphatic',
  description: 'Build the systems that transform businesses for the AI era.',
}

const ROLES = [
  { title: 'AI Systems Engineer', type: 'Engineering', location: 'India (Remote)' },
  { title: 'Transformation Consultant', type: 'Strategy', location: 'India (Remote)' },
  { title: 'Automation Architect', type: 'Systems', location: 'India (Remote)' },
  { title: 'Growth & Revenue Lead', type: 'Growth', location: 'India (Remote)' },
  { title: 'Operations Manager (BPO)', type: 'Operations', location: 'India' },
  { title: 'Brand & Authority Strategist', type: 'Authority', location: 'India (Remote)' },
]

export default function CareersPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Careers
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Build the systems that transform businesses.
          </h1>
          <p className="mt-6 text-[1.125rem] text-neutral-600 leading-relaxed max-w-2xl">
            We&apos;re a team of senior operators, engineers, and strategists building the
            operating layer of the AI era — across seven integrated divisions.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-medium text-neutral-900">
            Open roles
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between rounded-lg border border-black/10 bg-white p-5 transition-all hover:border-[#0F4C81]/40"
              >
                <div>
                  <h3 className="font-semibold text-neutral-900">{role.title}</h3>
                  <p className="mt-1 text-[13px] text-neutral-500">
                    {role.type} · {role.location}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#0F4C81]" />
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-black/10 bg-gray-50 p-8">
            <p className="text-neutral-700">
              Don&apos;t see your role? We&apos;re always looking for exceptional people.
            </p>
            <Link
              href="/discuss-architecture"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-[#0F4C81] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
