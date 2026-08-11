import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

export const tabPanel: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: { opacity: 0, x: -12, transition: { duration: 0.2 } },
}

export const navPanel: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.12 } },
}

export const cardHover = {
  y: -4,
  boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
  transition: { type: 'spring' as const, stiffness: 380, damping: 28 },
}

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export const slideIn: Variants = {
  hidden: (direction: 'left' | 'right' | 'up' | 'down' = 'left') => {
    const offsets = {
      left: { x: -32, y: 0 },
      right: { x: 32, y: 0 },
      up: { x: 0, y: -32 },
      down: { x: 0, y: 32 },
    }
    return { opacity: 0, ...offsets[direction] }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25 },
  },
}

export const parallaxChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
