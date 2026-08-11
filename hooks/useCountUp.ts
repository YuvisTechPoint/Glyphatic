'use client'

import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export interface UseCountUpOptions {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  enabled?: boolean
}

function formatCountValue(value: number, decimals: number, suffix: string, prefix: string): string {
  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toString()

  return `${prefix}${formatted}${suffix}`
}

export function useCountUp({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.6,
  enabled = true,
}: UseCountUpOptions): string {
  const reducedMotion = usePrefersReducedMotion()
  const [display, setDisplay] = useState(() =>
    formatCountValue(reducedMotion && enabled ? value : 0, decimals, suffix, prefix)
  )

  useEffect(() => {
    if (!enabled) {
      setDisplay(formatCountValue(0, decimals, suffix, prefix))
      return
    }

    if (reducedMotion) {
      setDisplay(formatCountValue(value, decimals, suffix, prefix))
      return
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(formatCountValue(latest, decimals, suffix, prefix))
      },
    })

    return () => controls.stop()
  }, [value, suffix, prefix, decimals, duration, enabled, reducedMotion])

  return display
}
