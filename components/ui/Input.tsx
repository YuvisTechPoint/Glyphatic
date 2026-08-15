'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
 error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
 ({ className, type = 'text', error, ...props }, ref) => {
 return (
 <input
 ref={ref}
 type={type}
 className={cn(
 'flex h-11 w-full rounded-md border bg-white px-4 text-sm text-neutral-900',
 'placeholder:text-neutral-600 transition-colors duration-200',
 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0',
 'disabled:cursor-not-allowed disabled:opacity-50',
 error ? 'border-error focus-visible:ring-error' : 'border-neutral-300 focus-visible:border-brand-500',
 className
 )}
 {...props}
 />
 )
 }
)

Input.displayName = 'Input'
