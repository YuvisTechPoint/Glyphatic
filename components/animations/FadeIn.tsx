'use client'

import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export interface FadeInProps extends HTMLMotionProps<'div'> {
 children: ReactNode
 delay?: number
 once?: boolean
 className?: string
}

export function FadeIn({
 children,
 delay = 0,
 once = true,
 className,
 ...props
}: FadeInProps) {
 const { ref, inView } = useInView<HTMLDivElement>({ once, threshold: 0.1 })

 return (
 <motion.div
 ref={ref}
 initial="hidden"
 animate={inView ? 'visible' : 'hidden'}
 variants={fadeIn}
 transition={{ delay }}
 className={cn(className)}
 {...props}
 >
 {children}
 </motion.div>
 )
}
