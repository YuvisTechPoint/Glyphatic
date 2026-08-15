import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DIVISIONS } from '@/lib/services-data'
import { MISSION, CEO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | Glyphatic',
  description: MISSION,
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(15,76,129,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="container-wide relative z-10 max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            About Glyphatic
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.08] text-neutral-900">
            We are the global AI-era transformation partner.
          </h1>
          <p className="mt-6 text-[1.125rem] md:text-[1.25rem] text-neutral-600 leading-relaxed">
            {MISSION}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-black/5">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900">
            The seven divisions
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((d, i) => (
              <Link
                key={d.id}
                href={`/services#${d.id}`}
                className="group rounded-lg border border-black/10 bg-white p-6 transition-all hover:border-[#0F4C81]/40 hover:shadow-hover"
              >
                <span className="font-display text-sm font-bold text-[#C9A227]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-neutral-900">
                  {d.name}
                </h3>
                <p className="mt-1 text-[12px] text-neutral-600">{d.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50 border-t border-black/5">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative aspect-[3/4] w-full max-w-[320px] mx-auto overflow-hidden rounded-lg bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CEO.image}
                alt={CEO.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
              Founder &amp; CEO
            </span>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-medium text-neutral-900">
              {CEO.name}
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed max-w-2xl">
              Transformation isn&apos;t won in boardrooms. It&apos;s won at 9 AM on a Tuesday,
              three months after go-live, when the new system has to actually work for the
              person using it. That&apos;s the moment most firms aren&apos;t there for — and the
              moment Glyphatic was built for.
            </p>
            <Link
              href="/discuss-architecture"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0F4C81] px-7 text-[14px] font-bold text-white transition-colors hover:bg-[#0B3A66]"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
