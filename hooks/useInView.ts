'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

export interface UseInViewOptions {
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export function useInView<T extends Element = Element>(
  options: UseInViewOptions = {}
): { ref: RefObject<T>; inView: boolean } {
  const { once = true, threshold = 0.1, rootMargin = '0px' } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return { ref, inView }
}
