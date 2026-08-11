import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
  default: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
  brand: 'bg-brand-50 text-brand-700 border border-brand-200',
  outline: 'bg-transparent text-neutral-700 border border-neutral-300',
  teal: 'bg-teal-100 text-teal-700 border border-teal-300',
} as const

export type BadgeVariant = keyof typeof variantStyles

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-wide',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}
