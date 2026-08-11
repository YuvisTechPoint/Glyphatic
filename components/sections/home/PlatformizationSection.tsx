'use client'

import { FadeInView } from '@/components/animations/FadeInView'

const STATS = [
  {
    value: '90%',
    label: 'Reduction in Latency',
    description: 'When modernizing with our systems engineering team.',
  },
  {
    value: '10x',
    label: 'Faster Deployments',
    description: 'Accelerated through our CI/CD pipelines.',
  },
  {
    value: '40%',
    label: 'Cost Savings',
    description: 'By optimizing cloud infrastructure.',
  },
]

export function PlatformizationSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-24 border-t border-white/10">
      <div className="container-wide">
        <FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-[3rem] lg:text-[4rem] font-display font-bold text-[#FA582D] leading-none mb-4">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-white/70 max-w-[250px]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
