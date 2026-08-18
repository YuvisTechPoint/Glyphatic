'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/theme/ThemeProvider'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-white/10" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-none ${className || ''}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
