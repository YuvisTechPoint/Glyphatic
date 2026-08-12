'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function HeroVideoSection() {
  return (
    <section 
      className="hero ai-home-hero theme-dark link-position-underText bg-cover bg-center type-normal relative flex min-h-[85vh] items-center overflow-hidden bg-[#0A0D14] lg:min-h-[90vh]" 
      data-type="idira" 
      style={{ backgroundImage: "url('https://www.paloaltonetworks.in/content/dam/pan/en_US/images/idira/idira-always-on-homepage-hero-banner.jpg')" }}
      id="id_22df1ceb-0b83-49ed-b1cb-719422340508"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" aria-hidden />

      <div className="container-wide relative z-10 pt-20 lg:pt-32">
        <motion.h1
          className="max-w-3xl font-display text-[3rem] lg:text-[3.75rem] tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-white font-normal mb-1">Boutique Systems Engineering.</div>
          <div className="text-[#8ad3de] font-normal">Built for India's Next Billion-Dollar Infrastructure.</div>
        </motion.h1>

        <FadeInView delay={0.2}>
          <p className="mt-6 max-w-[550px] text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-medium leading-[1.4] text-white/90">
            We architect the high-performance technology foundations that ambitious companies rely on to scale without limits.
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/discuss-architecture"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#2F6BFF] px-8 text-[16px] font-bold text-white transition-all hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
            >
              Discuss Your Architecture <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <Link 
              href="/services"
              className="text-[16px] font-bold text-white underline decoration-white decoration-2 underline-offset-8 transition-colors hover:text-gray-200"
            >
              View Our Services
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
