import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
 default: 'bg-neutral-100 text-neutral-600 border border-neutral-200',
 brand: 'bg-brand-50 text-brand-600 border border-brand-200',
 teal: 'bg-teal-100 text-teal-700 border border-teal-300',
 dark: 'bg-neutral-800 text-neutral-200 border border-neutral-700',
} as const

const sizeStyles = {
 sm: 'px-2 py-0.5 text-xs gap-1',
 md: 'px-2.5 py-1 text-xs gap-1.5',
} as const

export type TagVariant = keyof typeof variantStyles
export type TagSize = keyof typeof sizeStyles

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
 variant?: TagVariant
 size?: TagSize
 /** Optional leading icon element */
 icon?: React.ReactNode
}

/**
 * Tag / Chip — Level 1 metadata label primitive.
 * Used for categories, topic labels, status pills, etc.
 */
export function Tag({
 className,
 variant = 'default',
 size = 'md',
 icon,
 children,
 ...props
}: TagProps) {
 return (
 <span
 className={cn(
 'inline-flex items-center rounded-md font-medium transition-colors',
 variantStyles[variant],
 sizeStyles[size],
 className
 )}
 {...props}
 >
 {icon && <span className="shrink-0">{icon}</span>}
 {children}
 </span>
 )
}
