'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCounterProps {
 value: number
 suffix?: string
 prefix?: string
 decimals?: number
 label: string
 size?: 'sm' | 'md' | 'lg' | 'xl'
 theme?: 'light' | 'dark'
 color?: 'default' | 'brand'
}

const sizeClasses = {
 sm: 'text-stat-md',
 md: 'text-stat-md',
 lg: 'text-stat-lg',
 xl: 'text-stat-xl',
}

export default function StatCounter({
 value,
 suffix = '',
 prefix = '',
 decimals = 0,
 label,
 size = 'md',
 theme = 'light',
 color = 'default',
}: StatCounterProps) {
 const ref = useRef<HTMLDivElement>(null)
 const isInView = useInView(ref, { once: true, margin: '-60px' })
 const spring = useSpring(0, { duration: 1.6, bounce: 0 })
 const display = useTransform(spring, (v) =>
 `${prefix}${v.toFixed(decimals)}${suffix}`,
 )
 const [text, setText] = useState(`${prefix}0${suffix}`)

 useEffect(() => {
 if (isInView) spring.set(value)
 }, [isInView, spring, value])

 useEffect(() => {
 return display.on('change', (v) => setText(v))
 }, [display])

 return (
 <div ref={ref}>
 <motion.p
 className={cn(
 'font-display tabular-nums',
 sizeClasses[size],
 theme === 'dark'
 ? color === 'brand'
 ? 'text-brand-400'
 : 'text-neutral-900'
 : color === 'brand'
 ? 'text-brand-500'
 : 'text-neutral-900',
 )}
 >
 {text}
 </motion.p>
 <p
 className={cn(
 'mt-2 text-body-sm uppercase tracking-wide',
 theme === 'dark' ? 'text-darkSection-textMuted' : 'text-neutral-500',
 )}
 >
 {label}
 </p>
 </div>
 )
}
