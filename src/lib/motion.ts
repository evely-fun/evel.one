import type { Transition, Variants } from 'motion/react'

export const ease = {
  doc: [0.22, 1, 0.36, 1] as const,
}

export const spring = {
  press: { type: 'spring', stiffness: 520, damping: 34, mass: 0.6 } as Transition,
}

export const rise: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: ease.doc } },
}

export const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
}

export const viewport = { once: true, amount: 0.2, margin: '0px 0px -6% 0px' } as const
