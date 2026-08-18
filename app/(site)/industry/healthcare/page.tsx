import Link from 'next/link'
import { ArrowRight, Activity, Heart, ShieldPlus, FileDigit } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { TrustedByLogos } from '@/components/sections/home/TrustedByLogos'

export default function IndustryTemplatePage() {
  return (
    <main className="bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-200 dark:border-white/5 bg-[#005c5c] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest bg-white/10">
                Industry Solution
              </span>
            </div>
            <h1 className="font-display text-[3.5rem] md:text-[5rem] font-bold leading-[1.05] tracking-tight mb-8 max-w-4xl">
              Cybersecurity for Healthcare.
            </h1>
            <p className="text-[1.25rem] text-white/80 max-w-2xl mb-10 leading-relaxed font-medium">
              Protect patient data, secure medical devices, and ensure operational resilience with zero trust security built for modern healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/company/contact-sales"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-[#005c5c] transition-colors hover:bg-neutral-100"
              >
                Contact Healthcare Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      <TrustedByLogos 
        title="TRUSTED BY LEADING HEALTHCARE PROVIDERS" 
        logos={[{name: 'Pfizer'}, {name: 'TriHealth'}, {name: 'Maximus'}, {name: 'Colgate'}, {name: 'Bayer'}]} 
        className="bg-white dark:bg-[#111111]"
      />

      {/* Challenges Section */}
      <section className="py-24 md:py-32 border-t border-neutral-200 dark:border-white/5">
        <div className="container-wide">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white max-w-3xl mb-16">
              Modern healthcare faces unprecedented security challenges.
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInView delay={0.1}>
              <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-sm h-full">
                <ShieldPlus className="h-10 w-10 text-[#005c5c] mb-6" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Ransomware Protection</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Healthcare is the #1 target for ransomware. Our platform stops zero-day threats inline and prevents lateral movement across hospital networks.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-sm h-full">
                <Activity className="h-10 w-10 text-[#005c5c] mb-6" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">IoMT Device Security</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Automatically discover, assess, and secure every connected medical device on your network without deploying new sensors.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-sm h-full">
                <FileDigit className="h-10 w-10 text-[#005c5c] mb-6" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">HIPAA Compliance</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Simplify compliance reporting with built-in templates and continuous monitoring of ePHI data across cloud and on-premise infrastructure.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.4}>
              <div className="bg-[#005c5c] p-10 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                <Heart className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Patient-First Security</h3>
                <Link href="/company/contact-sales" className="text-white underline font-bold mt-4">
                  Read the Whitepaper
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

    </main>
  )
}
