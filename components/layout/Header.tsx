'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { MegaNav } from '@/components/layout/MegaNav'
import { LanguageSelector } from '@/components/layout/LanguageSelector'
import { SearchOverlay } from '@/components/layout/SearchOverlay'
import { MobileNav } from '@/components/layout/MobileNav'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export interface HeaderProps {
  className?: string
}

function Logo({ className, variant = 'light' }: { className?: string; variant?: 'light' | 'dark' }) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2', className)}
      aria-label="Glyphatic home"
    >
      <Image src="/images/Glyphatic%20Orange%20Logo.png" alt="Glyphatic Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 rounded-md object-contain" />
      <span className={cn(
        "text-xl md:text-2xl font-bold tracking-tight lowercase transition-colors duration-200",
        variant === 'light' ? 'text-white' : 'text-neutral-900 dark:text-white'
      )}>
        glyphatic
      </span>
    </Link>
  )
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Always use responsive dark/light classes since all page top sections (including the hero) are now responsive
  const textClass = 'text-neutral-800 dark:text-white'
  const hoverTextClass = 'hover:text-neutral-600 dark:hover:text-white/80'
  const hoverBgClass = 'hover:bg-neutral-200 dark:hover:bg-white/10'
  const borderClass = 'border-neutral-300 dark:border-white/20'

  return (
    <>
      <header
        className={cn(
          'absolute top-0 z-[100] w-full h-[60px] lg:h-[74px] bg-transparent border-b border-neutral-200 dark:border-white/10 transition-colors duration-200',
          className
        )}
      >
        <div className="container-wide flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-6 lg:gap-10">
            <Logo className="shrink-0" variant="dark" />
            <MegaNav />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className={cn("transition-colors focus-visible:outline-none", textClass, hoverTextClass)}
              aria-label="Open search"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2.5} />
            </button>

            <LanguageSelector />
            <ThemeToggle className={cn("hidden md:inline-flex border-none", hoverBgClass, textClass)} />

            <Link
              href="/about-us"
              className={cn(
                "hidden md:inline-flex items-center justify-center rounded-full border px-5 py-2 text-[14px] font-medium transition-all",
                textClass,
                borderClass,
                hoverBgClass,
                'hover:border-neutral-400 dark:hover:border-white/40'
              )}
            >
              About Glyphatic
            </Link>

            <Link
              href="/company/contact-sales"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#FA582D] px-5 py-2 text-[14px] font-semibold text-black transition-colors hover:bg-[#E0431A]"
            >
              Talk to Us →
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className={cn("rounded-md p-2 lg:hidden focus-visible:outline-none transition-colors", textClass, hoverBgClass)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      {/* Mobile Navigation */}
      <MobileNav
        open={isMobileNavOpen}
        onOpenChange={setIsMobileNavOpen}
        onSearchOpen={() => {
          setIsMobileNavOpen(false)
          setTimeout(() => setIsSearchOpen(true), 200)
        }}
      />
    </>
  )
}

export { Logo }
