'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FadeInViewProps {
 children: ReactNode
 className?: string
 delay?: number
 once?: boolean
}

export function FadeInView({
 children,
 className,
 delay = 0,
 once = true,
}: FadeInViewProps) {
 const ref = useRef<HTMLDivElement>(null)
 const isInView = useInView(ref, { once, margin: '-80px' })

 return (
 <motion.div
 ref={ref}
 variants={fadeUp}
 initial="hidden"
 animate={isInView ? 'visible' : 'hidden'}
 transition={{ delay }}
 className={cn(className)}
 >
 {children}
 </motion.div>
 )
}
