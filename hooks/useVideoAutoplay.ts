'use client'

import { useEffect, useRef, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export interface UseVideoAutoplayOptions {
  threshold?: number
  rootMargin?: string
}

export function useVideoAutoplay<T extends HTMLVideoElement = HTMLVideoElement>(
  options: UseVideoAutoplayOptions = {}
): RefObject<T> {
  const { threshold = 0.25, rootMargin = '0px' } = options
  const videoRef = useRef<T>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (reducedMotion) {
      video.pause()
      video.removeAttribute('autoplay')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            /* autoplay blocked */
          })
        } else {
          video.pause()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [threshold, rootMargin, reducedMotion])

  return videoRef
}
