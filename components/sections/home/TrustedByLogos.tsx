'use client'

import { cn } from '@/lib/utils'
import { FadeInView } from '@/components/animations/FadeInView'
import { 
  Cloud, Monitor, Car, Tv, Droplet, Activity, Building, Shield, ShoppingCart, Plane, Lock, Hexagon,
  BookOpen, Landmark, Briefcase, GraduationCap, Heart, Stethoscope
} from 'lucide-react'

interface LogoItem {
  name: string
}

interface TrustedByLogosProps {
  logos?: LogoItem[]
  title?: string
  className?: string
}

const DEFAULT_LOGOS: LogoItem[] = [
  { name: 'Salesforce' },
  { name: 'Infosys' },
  { name: 'Toyota' },
  { name: 'Panasonic' },
  { name: 'Colgate' },
  { name: 'Pfizer' },
  { name: 'Westfield' },
  { name: 'TriHealth' },
  { name: 'Maximus' },
  { name: 'Transgourmet' },
  { name: 'Sabre' },
  { name: 'ADT' },
]

const getIconForCompany = (name: string) => {
  const n = name.toLowerCase()
  if (n.includes('salesforce') || n.includes('cloud')) return Cloud
  if (n.includes('infosys') || n.includes('tech')) return Monitor
  if (n.includes('toyota') || n.includes('car')) return Car
  if (n.includes('panasonic') || n.includes('media')) return Tv
  if (n.includes('colgate')) return Droplet
  if (n.includes('pfizer') || n.includes('health') || n.includes('trihealth')) return Activity
  if (n.includes('westfield') || n.includes('estate') || n.includes('building')) return Building
  if (n.includes('maximus')) return Shield
  if (n.includes('transgourmet') || n.includes('retail')) return ShoppingCart
  if (n.includes('sabre') || n.includes('travel')) return Plane
  if (n.includes('adt') || n.includes('security')) return Lock
  if (n.includes('education') || n.includes('school')) return GraduationCap
  if (n.includes('finance') || n.includes('bank')) return Landmark
  if (n.includes('hospital')) return Stethoscope
  return Hexagon
}

export function TrustedByLogos({ logos = DEFAULT_LOGOS, title, className }: TrustedByLogosProps) {
  // Duplicate logos a few times to ensure smooth infinite marquee scroll
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className={cn('py-12 md:py-16 transition-colors duration-200 overflow-hidden', className)}>
      {title && (
        <FadeInView>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-300 dark:to-neutral-700"></div>
            <p className="text-center text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              {title}
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-300 dark:to-neutral-700"></div>
          </div>
        </FadeInView>
      )}
      
      <FadeInView delay={0.2}>
        <div 
          className="relative flex w-full overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="animate-marquee flex w-max items-center justify-start gap-16 md:gap-20 lg:gap-28 py-6 pr-16 md:pr-20 lg:pr-28">
            {marqueeLogos.map((logo, i) => {
              const Icon = getIconForCompany(logo.name)
              return (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex items-center justify-center gap-2.5 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 group cursor-default grayscale hover:grayscale-0"
                >
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-neutral-700 dark:text-neutral-300 group-hover:text-[#FA582D] transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(250,88,45,0.4)]" strokeWidth={2.5} />
                  <span className="text-[18px] md:text-[22px] font-display font-bold tracking-tight text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                    {logo.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
