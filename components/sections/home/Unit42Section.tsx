'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function Unit42Section() {
  return (
    <section className="bg-[#111111] section-padding relative overflow-hidden">
      <div className="container-wide relative z-10">
        <FadeInView>
          <div className="w-[120px] md:w-[150px] border-t border-[#FA582D] mb-6" />
          <h2 className="max-w-2xl font-display text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.2] text-white">
            Intelligence-driven.<br />Response-ready.
          </h2>
        </FadeInView>

        <div className="mt-16 md:mt-24 grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <div className="flex flex-col">
            <FadeInView delay={0.2}>
              <div className="text-[11px] font-bold tracking-[0.15em] text-[#FA582D] uppercase mb-4">
                SERVICES
              </div>
              <h3 className="text-[2rem] md:text-[2.5rem] font-medium leading-[1.2] text-white mb-6">
                Threat Intel &<br />Incident Response
              </h3>
              <p className="max-w-md text-[15px] md:text-[16px] text-white font-medium leading-relaxed mb-12">
                Unit 42's world-renowned threat researchers, elite incident responders and expert security consultants will guide you with a threat-informed approach before, during and after an incident.
              </p>

              <div className="flex gap-12 md:gap-16">
                <div>
                  <div className="text-[1.75rem] md:text-[2rem] font-bold text-white mb-2 leading-none">1 K+</div>
                  <div className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.15em]">MATTERS PER YEAR</div>
                </div>
                <div>
                  <div className="text-[1.75rem] md:text-[2rem] font-bold text-white mb-2 leading-none">24 / 7 / 365</div>
                  <div className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.15em]">INCIDENT RESPONSE</div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start lg:items-end relative">
            <FadeInView delay={0.3} className="w-full flex justify-end mb-8 md:mb-12">
              <Link
                href="/unit42"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-white/5"
              >
                Explore Unit 42
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeInView>

            {/* Ambient Background SVG Graphic behind grid */}
            <div className="absolute inset-0 right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.05] pointer-events-none scale-150 mix-blend-screen">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="#FA582D" strokeWidth="8" strokeDasharray="2 12" />
                <circle cx="200" cy="200" r="140" stroke="#FA582D" strokeWidth="4" strokeDasharray="2 12" />
                <circle cx="200" cy="200" r="100" stroke="#FA582D" strokeWidth="8" strokeDasharray="2 12" />
                <circle cx="200" cy="200" r="60" stroke="#FA582D" strokeWidth="4" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full md:max-w-lg lg:max-w-none relative z-10">
              <FadeInView delay={0.4} className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#c84727] to-[#9e3319] border border-white/5 shadow-xl min-h-[160px]">
                <div className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-none mb-2">200+</div>
                <div className="text-[12px] md:text-[14px] text-white/90 font-medium leading-snug">threat researchers</div>
              </FadeInView>
              <FadeInView delay={0.5} className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#c84727] to-[#9e3319] border border-white/5 shadow-xl min-h-[160px]">
                <div className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-none mb-2">30 M</div>
                <div className="text-[12px] md:text-[14px] text-white/90 font-medium leading-snug">malware samples analyzed per day</div>
              </FadeInView>
              <FadeInView delay={0.6} className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#c84727] to-[#9e3319] border border-white/5 shadow-xl min-h-[160px]">
                <div className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-none mb-2">1 K+</div>
                <div className="text-[12px] md:text-[14px] text-white/90 font-medium leading-snug">incident response engagements a year</div>
              </FadeInView>
              <FadeInView delay={0.7} className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#c84727] to-[#9e3319] border border-white/5 shadow-xl min-h-[160px]">
                <div className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-none mb-2">150+</div>
                <div className="text-[12px] md:text-[14px] text-white/90 font-medium leading-snug">trusted partner of law firms</div>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
