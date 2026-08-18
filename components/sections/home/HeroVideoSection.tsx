'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export function HeroVideoSection() {
  return (
    <section 
      className="hero ai-home-hero link-position-underText relative flex min-h-[85vh] items-center overflow-hidden bg-white dark:bg-[#0A0D14] lg:min-h-[90vh] transition-colors duration-300" 
      data-type="idira" 
      id="id_22df1ceb-0b83-49ed-b1cb-719422340508"
    >
      {/* Background Image Layer: Clean and high contrast, aligned right on desktop */}
      <div 
        className="absolute inset-0 bg-cover lg:bg-right bg-center opacity-85 dark:opacity-100 transition-opacity duration-300" 
        style={{ backgroundImage: "url('https://www.paloaltonetworks.in/content/dam/pan/en_US/images/idira/idira-always-on-homepage-hero-banner.jpg')" }}
      />
      
      {/* Gradient Overlay: Solid white/black on the left for text readability, clear on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black/85 dark:via-black/40 dark:to-transparent transition-colors duration-300" aria-hidden />

      <div className="container-wide relative z-10 pt-20 lg:pt-32">
        <motion.h1
          className="max-w-3xl font-display text-[3rem] lg:text-[3.75rem] tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-neutral-900 dark:text-white font-normal mb-1">Transform. Automate. Operate. Scale.</div>
          <div className="text-brand-500 dark:text-[#8ad3de] font-normal">AI-native enterprise transformation & operations.</div>
        </motion.h1>

        <FadeInView delay={0.2}>
          <p className="mt-6 max-w-[550px] text-[1.125rem] lg:text-[1.25rem] font-medium leading-[1.4] text-neutral-700 dark:text-white/90">
            Modernize, automate, and operate at scale across India and APAC.
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/company/contact-sales"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#2F6BFF] px-8 text-[16px] font-bold text-white transition-all hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0A0D14]"
            >
              Start Your Transformation <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <Link 
              href="/services"
              className="text-[16px] font-bold text-neutral-800 dark:text-white underline decoration-neutral-800 dark:decoration-white decoration-2 underline-offset-8 transition-colors hover:text-neutral-600 dark:hover:text-gray-200"
            >
              Explore Our Capabilities
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
