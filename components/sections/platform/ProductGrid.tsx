'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'

export interface ProductItem {
  id: string
  title: string
  description: string
  href: string
  icon?: LucideIcon
}

export interface ProductGridProps {
  title: string
  description?: string
  products: ProductItem[]
}

export function ProductGrid({ title, description, products }: ProductGridProps) {
  return (
    <section className="section-padding bg-base-surface">
      <div className="container-content">
        <FadeInView className="max-w-3xl">
          <h2 className="font-display text-display-md text-neutral-900">{title}</h2>
          {description && (
            <p className="mt-4 text-body-lg text-neutral-600">{description}</p>
          )}
        </FadeInView>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUp} className="group relative">
              <div className="flex h-full flex-col rounded-xl border border-base-border bg-white p-8 transition-all hover:shadow-card">
                {product.icon && (
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <product.icon className="h-6 w-6" aria-hidden />
                  </div>
                )}
                <h3 className="text-display-xs font-semibold text-neutral-900">
                  {product.title}
                </h3>
                <p className="mt-3 flex-1 text-body-md text-neutral-600">
                  {product.description}
                </p>
                <div className="mt-8 flex items-center text-body-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-500">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <Link href={product.href} className="absolute inset-0">
                  <span className="sr-only">Learn more about {product.title}</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
