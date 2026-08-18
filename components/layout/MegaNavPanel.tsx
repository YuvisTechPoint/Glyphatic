'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { MegaNavMenu } from '@/lib/nav-data'
import { navPanel } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { MegaNavColumn } from '@/components/layout/MegaNavColumn'
import { MegaNavFeatured } from '@/components/layout/MegaNavFeatured'

export interface MegaNavPanelProps {
  menu: MegaNavMenu
  isActive: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  className?: string
}

export function MegaNavPanel({
  menu,
  isActive,
  onMouseEnter,
  onMouseLeave,
  className,
}: MegaNavPanelProps) {
  // Render the menu content dynamically based on the nav-data
  const renderMenuContent = () => {
    return (
      <div className="container-wide py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Menu Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menu.columns.map((col, i) => (
              <MegaNavColumn key={`${menu.id}-col-${i}`} column={col} />
            ))}
          </div>

          {/* Featured Area */}
          {menu.featured && (
            <div className="w-full lg:w-[280px] shrink-0">
              <MegaNavFeatured featured={menu.featured} />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={menu.id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navPanel}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={cn(
            'absolute left-0 right-0 top-full z-50 border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-[#141414] shadow-2xl backdrop-blur-xl transition-colors duration-200',
            className
          )}
          role="region"
          aria-label={`${menu.label} menu`}
        >
          {renderMenuContent()}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
