import type { Metadata } from 'next'
import { ArrowRight, Mail, Clock, MapPin } from 'lucide-react'
import { ContactSalesForm } from '@/components/forms/ContactSalesForm'
import { POSITIONING } from '@/lib/services-data'
import { ADDRESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Discuss Architecture | Glyphatic',
  description: POSITIONING.new,
}

export default function DiscussArchitecturePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(15,76,129,0.08)_0%,_transparent_60%)] pointer-events-none" />
        <div className="container-wide relative z-10 max-w-4xl">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase">
            Discuss Architecture
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] text-neutral-900">
            Give us the business problem.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.125rem] md:text-[1.25rem] text-neutral-600 leading-relaxed">
            {POSITIONING.new}
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-black/5">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-black/10 bg-gray-50 p-8">
            <h2 className="font-display text-xl font-semibold text-neutral-900">
              Prefer to talk now?
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href="mailto:hello@glyphatic.com"
                className="flex items-center gap-3 text-neutral-700 hover:text-[#0F4C81] transition-colors"
              >
                <Mail className="h-5 w-5 text-[#0F4C81]" />
                hello@glyphatic.com
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <Clock className="h-5 w-5 text-[#0F4C81]" />
                We respond within one business day.
              </div>
              <div className="flex items-start gap-3 text-neutral-700">
                <MapPin className="h-5 w-5 shrink-0 text-[#0F4C81]" />
                <span className="leading-relaxed">
                  {ADDRESS.building}, {ADDRESS.block}, {ADDRESS.floors},<br />
                  {ADDRESS.locality},<br />
                  {ADDRESS.city} – {ADDRESS.pincode}, {ADDRESS.state}, India
                </span>
              </div>
            </div>
            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="text-[13px] text-neutral-600 leading-relaxed">
                Seven integrated divisions — Strategy, AI, Systems, Growth, Authority,
                Operations, and Intelligence. One partner, end to end.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-8">
            <ContactSalesForm />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide text-center">
          <ArrowRight className="mx-auto h-5 w-5 text-[#C9A227]" />
        </div>
      </section>
    </main>
  )
}
