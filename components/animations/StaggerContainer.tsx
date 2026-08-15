'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { stagger } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface StaggerContainerProps {
 children: ReactNode
 className?: string
 once?: boolean
}

export function StaggerContainer({
 children,
 className,
 once = true,
}: StaggerContainerProps) {
 const ref = useRef<HTMLDivElement>(null)
 const isInView = useInView(ref, { once, margin: '-60px' })

 return (
 <motion.div
 ref={ref}
 variants={stagger}
 initial="hidden"
 animate={isInView ? 'visible' : 'hidden'}
 className={cn(className)}
 >
 {children}
 </motion.div>
 )
}
