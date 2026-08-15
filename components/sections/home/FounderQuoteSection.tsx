'use client'

import { FadeInView } from '@/components/animations/FadeInView'

export function FounderQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32 border-t border-black/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#0F4C81]/5 to-transparent pointer-events-none" />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Photo Side */}
          <FadeInView className="w-full lg:w-[40%] shrink-0">
            <div className="relative">
              {/* Decorative border matching Adani/Enterprise style */}
              <div className="absolute -inset-4 border border-black/10 rounded-2xl hidden lg:block" />
              
              <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto lg:max-w-none rounded-xl overflow-hidden bg-gray-50 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ceo-debanjan-sandhaki.jpg"
                  alt="Debanjan Sandhaki - Founder & CEO, Glyphatic"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-8 h-1 bg-[#C9A227] mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">Debanjan Sandhaki</h3>
                  <p className="text-sm font-medium text-white/70 uppercase tracking-widest">Founder & CEO</p>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Quote Side */}
          <div className="w-full lg:w-[60%]">
            <FadeInView delay={0.2}>
              <span className="block text-[11px] font-bold tracking-[0.15em] text-[#C9A227] uppercase mb-8">
                From the Founder
              </span>
              
              <div className="relative">
                <span className="absolute -top-10 -left-6 text-[120px] font-serif text-black/5 leading-none select-none pointer-events-none">
                  "
                </span>
                <blockquote className="relative z-10 text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] font-display font-medium text-neutral-900 leading-[1.3] tracking-tight">
                  <span className="text-neutral-600">Every consultant I've ever met loves the beginning of a transformation — the strategy sessions, the whiteboards, the big presentations.</span>
                  <br /><br />
                  But transformation isn't won in boardrooms. It's won at 9 AM on a Tuesday, three months after go-live, when the new system has to actually work for the person using it.
                  <br /><br />
                  <span className="text-[#0F4C81]">That's the moment most firms aren't there for. That's the moment we built Glyphatic for.</span>
                </blockquote>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                </div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">
                  We don't just design transformations. We operate them.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  )
}
