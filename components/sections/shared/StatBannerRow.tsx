'use client'

import StatCounter from '@/components/charts/StatCounter'
import { FadeInView } from '@/components/animations/FadeInView'
import { cn } from '@/lib/utils'

export interface StatBannerItem {
 value: number
 suffix?: string
 prefix?: string
 decimals?: number
 label: string
 sublabel?: string
}

interface StatBannerRowProps {
 stats: StatBannerItem[]
 theme?: 'light' | 'dark'
 size?: 'sm' | 'md' | 'lg' | 'xl'
 className?: string
 columns?: 2 | 3 | 4
}

export function StatBannerRow({
 stats,
 theme = 'light',
 size = 'lg',
 className,
 columns = 3,
}: StatBannerRowProps) {
 const gridCols = {
 2: 'sm:grid-cols-2',
 3: 'sm:grid-cols-2 lg:grid-cols-3',
 4: 'sm:grid-cols-2 lg:grid-cols-4',
 }

 return (
 <div
 className={cn(
 'grid gap-8',
 gridCols[columns],
 className,
 )}
 >
 {stats.map((stat, index) => (
 <FadeInView key={stat.label} delay={index * 0.15}>
 <StatCounter
 value={stat.value}
 suffix={stat.suffix}
 prefix={stat.prefix}
 decimals={stat.decimals}
 label={stat.sublabel ?? stat.label}
 size={size}
 theme={theme}
 color={theme === 'dark' ? 'brand' : 'default'}
 />
 </FadeInView>
 ))}
 </div>
 )
}
