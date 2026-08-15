'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'

export interface PlatformCTAProps {
 headline: string
 subheadline: string
 buttonText: string
 buttonHref: string
}

export function PlatformCTA({ headline, subheadline, buttonText, buttonHref }: PlatformCTAProps) {
 return (
 <section className="relative overflow-hidden bg-[#0B1120] py-24 lg:py-32">
 <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none" />
 
 <div className="container-content relative z-10">
 <FadeInView className="mx-auto max-w-4xl text-center">
 <h2 className="font-display text-display-md text-neutral-900 md:text-display-lg leading-tight">
 {headline}
 </h2>
 <p className="mt-6 text-body-xl text-neutral-700">
 {subheadline}
 </p>
 <div className="mt-10 flex justify-center">
 <Button variant="primary" size="lg" className="bg-brand-500 hover:bg-brand-600 text-neutral-900 border-transparent" href={buttonHref}>
 {buttonText}
 </Button>
 </div>
 </FadeInView>
 </div>
 </section>
 )
}
