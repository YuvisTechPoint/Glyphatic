'use client'

import Link from 'next/link'
import {
 forwardRef,
 type AnchorHTMLAttributes,
 type ButtonHTMLAttributes,
 type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
 primary:
 'bg-brand-500 text-neutral-900 border border-brand-500 hover:bg-brand-600 hover:border-brand-600 active:bg-brand-700',
 secondary:
 'bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 active:bg-neutral-100',
 ghost:
 'bg-transparent text-neutral-800 border border-transparent hover:text-brand-500 hover:bg-brand-50 active:bg-brand-100',
 dark: 'bg-white text-neutral-950 border border-white hover:bg-neutral-100 active:bg-neutral-200',
} as const

const sizeStyles = {
 sm: 'h-9 px-3.5 text-sm gap-1.5',
 md: 'h-11 px-5 text-sm gap-2',
 lg: 'h-12 px-6 text-base gap-2',
} as const

export type ButtonVariant = keyof typeof variantStyles
export type ButtonSize = keyof typeof sizeStyles

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: ButtonVariant
 size?: ButtonSize
 leftIcon?: ReactNode
 rightIcon?: ReactNode
 isLoading?: boolean
 href?: string
 external?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
 (
 {
 className,
 variant = 'primary',
 size = 'md',
 leftIcon,
 rightIcon,
 isLoading = false,
 disabled,
 children,
 type = 'button',
 href,
 external,
 ...props
 },
 ref
 ) => {
 const classes = cn(
 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200',
 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
 'disabled:pointer-events-none disabled:opacity-50',
 variantStyles[variant],
 sizeStyles[size],
 className
 )

 const content = (
 <>
 {isLoading ? (
 <span
 className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
 aria-hidden
 />
 ) : (
 leftIcon
 )}
 {children}
 {!isLoading && rightIcon}
 </>
 )

 if (href) {
 if (external) {
 return (
 <a
 href={href}
 className={classes}
 target="_blank"
 rel="noopener noreferrer"
 {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
 >
 {content}
 </a>
 )
 }
 return (
 <Link href={href} className={classes}>
 {content}
 </Link>
 )
 }

 return (
 <button
 ref={ref}
 type={type}
 disabled={disabled || isLoading}
 className={classes}
 {...props}
 >
 {content}
 </button>
 )
 }
)

Button.displayName = 'Button'

export default Button
