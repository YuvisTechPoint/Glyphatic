import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customers | Glyphatic',
  description: 'Our customers are securing their digital transformation.',
}

const STORIES = [
  { company: 'Education Group', industry: 'Education', quote: 'Admissions, counselling, and fee follow-ups now run on autopilot.' },
  { company: 'Realty Firm', industry: 'Real Estate', quote: 'Every inquiry is qualified, tracked, and followed up — nothing leaks.' },
  { company: 'Healthcare Provider', industry: 'Healthcare', quote: 'Appointments and patient follow-ups are handled end to end.' },
  { company: 'Staffing Company', industry: 'Recruitment', quote: 'Candidate sourcing and screening scaled without adding headcount.' },
  { company: 'D2C Brand', industry: 'E-commerce', quote: 'Order ops, support, and returns run through one managed system.' },
  { company: 'B2B Services Co', industry: 'Professional Services', quote: 'The pipeline architecture doubled qualified opportunities.' },
]

export default function CustomersPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Customers
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Our customers are securing their digital transformation.
          </h1>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STORIES.map((s) => (
              <div
                key={s.company}
                className="flex flex-col rounded-lg border border-black/10 bg-white p-7"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#A8861D]">
                  {s.industry}
                </span>
                <p className="mt-4 flex-1 text-[16px] leading-relaxed text-neutral-700">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-neutral-900">{s.company}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-black/10 bg-gray-50 p-8 text-center">
            <p className="text-neutral-700">
              Ready to secure your own transformation? Give us the business problem.
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
