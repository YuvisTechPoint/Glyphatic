'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'

export interface PlatformHeroProps {
  eyebrow: string
  title: string
  description: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  visual?: React.ReactNode // Pass SceneCanvas or an Image component here
}

export function PlatformHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: PlatformHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <FadeInView>
              <p className="label-eyebrow">{eyebrow}</p>
              <h1 className="mt-4 font-display text-display-lg text-neutral-900 leading-tight">
                {title}
              </h1>
              <p className="mt-6 text-body-lg text-neutral-600">
                {description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href={primaryCta.href}>
                  {primaryCta.text}
                </Button>
                {secondaryCta && (
                  <Button variant="secondary" size="lg" href={secondaryCta.href}>
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            </FadeInView>
          </div>
          
          {visual && (
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-[#0B1120] border border-slate-800 shadow-2xl">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
