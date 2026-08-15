import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DIVISIONS, SERVICE_CATEGORIES, CLIENT_JOURNEY, POSITIONING } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Services & The Glyphatic Architecture | Glyphatic',
  description:
    'Seven integrated divisions — Strategy, AI, Systems, Growth, Authority, Operations, and Intelligence — delivering end-to-end business transformation.',
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(15,76,129,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="container-wide relative z-10">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            {POSITIONING.line}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.08] text-neutral-900">
            The Glyphatic Architecture
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.25rem] text-neutral-600 leading-relaxed">
            Seven capabilities. One transformation partner. Behind each division sits
            the full delivery portfolio — 15 disciplines, 74+ services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {DIVISIONS.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="rounded-full border border-black/10 bg-gray-50 px-4 py-1.5 text-[13px] font-medium text-neutral-700 transition-colors hover:border-[#0F4C81]/30 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]"
              >
                {d.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-16 lg:py-24 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((division, i) => (
              <div
                key={division.id}
                id={division.id}
                className="scroll-mt-28 flex flex-col rounded-lg border border-black/10 bg-white p-7"
              >
                <span className="font-display text-2xl font-bold text-neutral-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-neutral-900">
                  {division.name}
                </h2>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#A8861D]">
                  {division.tagline}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-neutral-600">
                  {division.description}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {division.categoryIds.map((id) => {
                    const category = SERVICE_CATEGORIES.find((c) => c.id === id)
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0F4C81] hover:text-[#0B3A66] transition-colors"
                        >
                          {category?.title ?? id}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full portfolio */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-black/5">
        <div className="container-wide">
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium text-neutral-900">
            The full delivery portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 text-[1.125rem] leading-relaxed">
            Behind the seven capabilities sits the enormous delivery portfolio. Every
            service below maps to one of the seven divisions.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 rounded-lg border border-black/10 bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-[#C9A227]">
                    {category.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 leading-snug">
                    {category.title}
                  </h3>
                </div>
                {category.description && (
                  <p className="mt-2 text-[13px] italic text-neutral-500">
                    {category.description}
                  </p>
                )}
                <div className="mt-5 space-y-4">
                  {category.groups.map((group) => (
                    <div key={group.name}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-neutral-500">
                        {group.name}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-[12px] text-neutral-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 lg:py-24 border-t border-black/5" id="journey">
        <div className="container-wide">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            The Ultimate Client Journey
          </span>
          <h2 className="mt-4 font-display text-[2rem] md:text-[2.5rem] font-medium text-neutral-900">
            Give us the business problem.
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 text-[1.125rem] leading-relaxed">
            {POSITIONING.new}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CLIENT_JOURNEY.map((stage) => (
              <div
                key={stage.step}
                className="rounded-lg border border-black/10 bg-white p-6"
              >
                <span className="font-display text-sm font-bold text-[#C9A227]">
                  {stage.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-neutral-900">
                  {stage.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-black/10 bg-white p-8 text-center">
            <p className="font-display text-lg md:text-xl font-medium text-neutral-900">
              Give us the business problem. We&apos;ll build the system, run the
              functions, and optimize the outcomes.
            </p>
            <Link
              href="/discuss-architecture"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0F4C81] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Discuss Architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
