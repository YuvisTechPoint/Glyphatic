import Link from 'next/link'
import { ArrowRight, Bot, Cpu, LineChart, ShieldCheck } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'

export default function SolutionTemplatePage() {
  return (
    <main className="bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-200 dark:border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/10 dark:to-transparent opacity-50" />
        <div className="container-wide relative z-10">
          <FadeInView>
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/5">
                Solution
              </span>
            </div>
            <h1 className="font-display text-[3.5rem] md:text-[5rem] font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-8 max-w-4xl">
              AI Transformation.
            </h1>
            <p className="text-[1.25rem] text-neutral-600 dark:text-neutral-300 max-w-2xl mb-10 leading-relaxed font-medium">
              Make AI operational across your organization. Move beyond pilots to enterprise-wide implementation securely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/company/contact-sales"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-blue-700"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInView>
              <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 dark:text-white mb-8">
                The intelligence era is here. Are you ready?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Organizations are racing to adopt generative AI, but integrating it securely into existing enterprise infrastructure is a massive challenge.
              </p>
              <ul className="space-y-4 mb-10">
                {['Secure AI model deployment', 'Data privacy and governance', 'Automated operational workflows'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-900 dark:text-white font-medium">
                    <ShieldCheck className="h-5 w-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>
            <FadeInView delay={0.2} className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                <Bot className="h-8 w-8 text-blue-500 mb-6" />
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Generative AI</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Deploy custom LLMs safely.</p>
              </div>
              <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm mt-8">
                <Cpu className="h-8 w-8 text-blue-500 mb-6" />
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Machine Learning</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Predictive modeling and analytics.</p>
              </div>
              <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm -mt-8">
                <LineChart className="h-8 w-8 text-blue-500 mb-6" />
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">AIOps</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Automate IT operations entirely.</p>
              </div>
              <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl border border-neutral-200 dark:border-white/5 shadow-sm">
                <ShieldCheck className="h-8 w-8 text-blue-500 mb-6" />
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">AI Security</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Protect the models themselves.</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-center">
        <div className="container-wide">
          <FadeInView>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-white mb-8 max-w-3xl mx-auto">
              Ready to harness the power of AI?
            </h2>
            <Link
              href="/company/contact-sales"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-blue-900 transition-transform hover:scale-105 shadow-xl"
            >
              Talk to an AI Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeInView>
        </div>
      </section>
    </main>
  )
}
