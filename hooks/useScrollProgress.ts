'use client'

import { useEffect, useState, type RefObject } from 'react'

export interface UseScrollProgressOptions {
  offset?: [string, string]
}

export function useScrollProgress<T extends Element = Element>(
  ref: RefObject<T>,
  options: UseScrollProgressOptions = {}
): number {
  const { offset = ['start end', 'end start'] } = options
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      const start = windowHeight
      const end = -elementHeight
      const current = rect.top
      const raw = (start - current) / (start - end)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ref, offset])

  return progress
}
