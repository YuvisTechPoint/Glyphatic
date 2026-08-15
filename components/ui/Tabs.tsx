'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = forwardRef<
 ElementRef<typeof TabsPrimitive.List>,
 ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
 <TabsPrimitive.List
 ref={ref}
 className={cn(
 'inline-flex items-center gap-1 border-b border-neutral-200 w-full',
 className
 )}
 {...props}
 />
))
TabsList.displayName = TabsPrimitive.List.displayName

export interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
 showIndicator?: boolean
}

const TabsTrigger = forwardRef<
 ElementRef<typeof TabsPrimitive.Trigger>,
 TabsTriggerProps
>(({ className, children, showIndicator = true, ...props }, ref) => (
 <TabsPrimitive.Trigger
 ref={ref}
 className={cn(
 'group relative inline-flex items-center justify-center whitespace-nowrap px-4 py-3',
 'text-sm font-medium text-neutral-600 transition-colors duration-200',
 'hover:text-neutral-900 focus-visible:outline-none',
 'data-[state=active]:text-neutral-900',
 'disabled:pointer-events-none disabled:opacity-50',
 className
 )}
 {...props}
 >
 {children}
 {showIndicator && (
 <span className="absolute inset-x-0 -bottom-px h-0.5 bg-transparent group-data-[state=active]:bg-brand-500" />
 )}
 </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
 ElementRef<typeof TabsPrimitive.Content>,
 ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & { animated?: boolean }
>(({ className, animated = true, ...props }, ref) => (
 <TabsPrimitive.Content
 ref={ref}
 className={cn(
 'mt-6 focus-visible:outline-none',
 animated && 'data-[state=inactive]:hidden',
 className
 )}
 {...props}
 />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

/** Underline indicator that slides between tabs via shared layoutId */
function TabsUnderlineIndicator({ layoutId = 'tab-underline' }: { layoutId?: string }) {
 return (
 <motion.div
 layoutId={layoutId}
 className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-500"
 transition={{ type: 'spring', stiffness: 420, damping: 32 }}
 />
 )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsUnderlineIndicator }
