import Link from 'next/link'
import { ArrowRight, Shield, Zap, Lock, BarChart3, Globe2, Activity } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export default function PlatformPillarPage() {
  return (
    <main className="bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-200 dark:border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FA582D]/5 to-transparent dark:from-[#FA582D]/10 dark:to-transparent opacity-50" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <div className="w-16 border-t-2 border-[#FA582D] mb-8" />
            <h1 className="font-display text-[3.5rem] md:text-[5rem] font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-8 max-w-4xl">
              Next-Generation Network Security.
            </h1>
            <p className="text-[1.25rem] text-neutral-600 dark:text-neutral-300 max-w-2xl mb-10 leading-relaxed font-medium">
              Protect your entire enterprise with industry-leading AI-powered network security. Stop zero-day threats in zero time across hardware, software, and cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/company/contact-sales"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FA582D] px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-[#E0431A]"
              >
                Get a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white dark:bg-white/10 px-8 py-4 text-[15px] font-bold text-neutral-900 dark:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-white/20 border border-neutral-200 dark:border-transparent"
              >
                Explore Capabilities
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-[#111111] border-b border-neutral-200 dark:border-white/5">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-white/10">
            <FadeInView delay={0.1} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:px-0">
              <div className="text-[3rem] font-bold text-neutral-900 dark:text-white mb-2 leading-none">95%</div>
              <div className="text-[13px] font-bold text-neutral-500 uppercase tracking-widest">of the Fortune 100</div>
            </FadeInView>
            <FadeInView delay={0.2} className="pt-8 md:pt-0 md:px-8">
              <div className="text-[3rem] font-bold text-neutral-900 dark:text-white mb-2 leading-none">70K+</div>
              <div className="text-[13px] font-bold text-neutral-500 uppercase tracking-widest">Global Customers</div>
            </FadeInView>
            <FadeInView delay={0.3} className="pt-8 md:pt-0 md:px-8">
              <div className="text-[3rem] font-bold text-neutral-900 dark:text-white mb-2 leading-none">13x</div>
              <div className="text-[13px] font-bold text-neutral-500 uppercase tracking-widest">Industry Leader</div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-24 md:py-32">
        <div className="container-wide">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white max-w-3xl mb-16">
              Complete visibility and control across your entire infrastructure.
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Next-Gen Firewalls', desc: 'Industry-leading ML-powered firewalls that stop known and unknown threats.' },
              { icon: Zap, title: 'Zero Trust Network Access', desc: 'Secure access for all users, to all applications, from anywhere.' },
              { icon: Lock, title: 'Advanced Threat Prevention', desc: 'Inline, AI-powered threat prevention to stop patient zero.' },
              { icon: BarChart3, title: 'Centralized Management', desc: 'Unified security policy and management across all environments.' },
              { icon: Globe2, title: 'Cloud Security', desc: 'Seamlessly extend enterprise-grade security to your cloud deployments.' },
              { icon: Activity, title: 'Security Analytics', desc: 'Deep visibility into network traffic, user behavior, and threat patterns.' }
            ].map((feature, i) => (
              <FadeInView key={feature.title} delay={0.1 * i}>
                <div className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-white/5 rounded-2xl p-8 h-full transition-all hover:border-[#FA582D]/30 group shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FA582D]/10 transition-colors">
                    <feature.icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300 group-hover:text-[#FA582D] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FA582D]">
        <div className="container-wide text-center">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-white mb-8">
              Ready to secure your network?
            </h2>
            <Link
              href="/company/contact-sales"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-black transition-transform hover:scale-105"
            >
              Contact Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeInView>
        </div>
      </section>

    </main>
  )
}
