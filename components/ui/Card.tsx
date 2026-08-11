import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─── Card Variants ─────────────────────────────────────────────────────────
const variantStyles = {
  /** Default: subtle shadow on white */
  default: 'bg-base-white shadow-card',
  /** Surface: slightly off-white, no shadow */
  surface: 'bg-base-surface border border-base-border',
  /** Outlined: white background with a visible border */
  outlined: 'bg-base-white border border-base-border',
  /** Dark: near-black for dramatic sections */
  dark: 'bg-neutral-950 border border-neutral-800 text-white',
} as const

const radiusStyles = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  none: 'rounded-none',
} as const

export type CardVariant = keyof typeof variantStyles
export type CardRadius = keyof typeof radiusStyles

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  radius?: CardRadius
  /** If true, renders a hover shadow transition */
  hoverable?: boolean
}

/**
 * Base Card — the Level 1 container primitive.
 * Composes into testimonial cards, feature cards, nav panels, etc.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      radius = 'md',
      hoverable = false,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden transition-shadow duration-200',
        variantStyles[variant],
        radiusStyles[radius],
        hoverable && 'hover:shadow-hover',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

// ─── Card Subcomponents ─────────────────────────────────────────────────────
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-0', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-display-sm text-neutral-900 font-semibold', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-1 text-body-sm text-neutral-500', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-3 px-6 pb-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'
