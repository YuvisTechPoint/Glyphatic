'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  /** The quoted testimonial text */
  quote: string
  /** Name of the person quoted */
  authorName: string
  /** Their role / title */
  authorTitle: string
  /** Company or organization name */
  company?: string
  /** URL to the author's avatar image */
  avatarSrc?: string
  /** URL to the company's logo */
  companyLogoSrc?: string
  /** Style variant */
  variant?: 'light' | 'dark'
}

/**
 * TestimonialCard — Level 2 Pattern.
 * Customer quote card for use in testimonial carousels, grid sections,
 * and "customers" pages. Composes Card layout with brand styling.
 */
const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      className,
      quote,
      authorName,
      authorTitle,
      company,
      avatarSrc,
      companyLogoSrc,
      variant = 'light',
      ...props
    },
    ref
  ) => {
    const isLight = variant === 'light'

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-6 rounded-md p-6',
          isLight
            ? 'bg-white border border-base-border shadow-card hover:shadow-hover transition-shadow duration-200'
            : 'bg-neutral-900 border border-neutral-800',
          className
        )}
        {...props}
      >
        {/* Quote icon */}
        <Quote
          className={cn(
            'h-6 w-6 shrink-0',
            isLight ? 'text-brand-500' : 'text-brand-400'
          )}
          aria-hidden="true"
        />

        {/* Quote text */}
        <blockquote
          className={cn(
            'flex-1 text-body-md leading-relaxed',
            isLight ? 'text-neutral-700' : 'text-neutral-300'
          )}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt={authorName}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold',
                  isLight
                    ? 'bg-brand-50 text-brand-700'
                    : 'bg-neutral-700 text-neutral-200'
                )}
                aria-hidden="true"
              >
                {authorName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            )}

            {/* Name + title */}
            <div>
              <p
                className={cn(
                  'text-sm font-semibold leading-tight',
                  isLight ? 'text-neutral-900' : 'text-white'
                )}
              >
                {authorName}
              </p>
              <p
                className={cn(
                  'mt-0.5 text-xs leading-tight',
                  isLight ? 'text-neutral-500' : 'text-neutral-400'
                )}
              >
                {authorTitle}
                {company && `, ${company}`}
              </p>
            </div>
          </div>

          {/* Company logo */}
          {companyLogoSrc && (
            <Image
              src={companyLogoSrc}
              alt={company ?? 'Company logo'}
              width={80}
              height={32}
              className={cn(
                'h-8 w-auto object-contain',
                isLight ? 'opacity-70' : 'opacity-50 brightness-200'
              )}
            />
          )}
        </div>
      </div>
    )
  }
)
TestimonialCard.displayName = 'TestimonialCard'

export { TestimonialCard }
