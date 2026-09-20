import type { Transition, Variants } from 'motion/react'

export const ease = {
  out: [0.23, 1, 0.32, 1] as const,
  drawer: [0.32, 0.72, 0, 1] as const,
}

export const spring = {
  press: { type: 'spring', stiffness: 560, damping: 34, mass: 0.6 } as Transition,
  ui: { type: 'spring', stiffness: 340, damping: 32, mass: 0.8 } as Transition,
  soft: { type: 'spring', stiffness: 220, damping: 28 } as Transition,
}

export const rise: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.44, ease: ease.out } },
}

export const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.042, delayChildren: 0.04 } },
}

export const viewport = { once: true, amount: 0.25, margin: '0px 0px -8% 0px' } as const
