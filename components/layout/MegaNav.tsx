'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MEGA_NAV } from '@/lib/nav-data'
import { useMegaNavState } from '@/hooks/useMegaNavState'
import { MegaNavPanel } from '@/components/layout/MegaNavPanel'

export function MegaNav() {
  const {
    activeMenu,
    openMenu,
    handleMenuEnter,
    handleMenuLeave,
    handlePanelEnter,
    handlePanelLeave,
    closeMenu,
  } = useMegaNavState()

  return (
    <nav
      className="hidden lg:block"
      aria-label="Main navigation"
      onMouseLeave={handleMenuLeave}
    >
      <ul className="flex items-center gap-1">
        {MEGA_NAV.map((menu) => {
          const isActive = activeMenu === menu.id
          return (
            <li key={menu.id} className="relative">
              <button
                type="button"
                className={cn(
                  'relative px-3 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none',
                  'text-neutral-800 dark:text-white hover:text-neutral-600 dark:hover:text-white/80',
                  isActive && 'text-neutral-900 dark:text-white'
                )}
                aria-expanded={isActive}
                aria-haspopup="true"
                onMouseEnter={() => handleMenuEnter(menu.id)}
                onFocus={() => handleMenuEnter(menu.id)}
                onClick={() => (isActive ? closeMenu() : openMenu(menu.id))}
              >
                {menu.label}
                <span
                  className={cn(
                    'absolute inset-x-2 -bottom-[25px] h-[3px] rounded-t-full bg-[#FA582D] transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                  aria-hidden
                />
              </button>
            </li>
          )
        })}
      </ul>

      {MEGA_NAV.map((menu) => (
        <MegaNavPanel
          key={`panel-${menu.id}`}
          menu={menu}
          isActive={activeMenu === menu.id}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
        />
      ))}

      {/* Skip rendering duplicate links for SEO — primary nav is button-driven */}
      <div className="sr-only">
        {MEGA_NAV.map((menu) =>
          menu.columns.flatMap((col) =>
            col.links.map((link) => (
              <Link key={`${menu.id}-${link.href}`} href={link.href}>
                {link.label}
              </Link>
            ))
          )
        )}
      </div>
    </nav>
  )
}
