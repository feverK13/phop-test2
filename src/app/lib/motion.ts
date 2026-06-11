import { type Variants } from 'framer-motion'

/** Shared easing — matches the hero/Home motion language. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Fade + rise. Pass useReducedMotion() result to disable the y offset. */
export const fadeUp = (reduce: boolean | null): Variants => ({
  hidden: { opacity: 0, y: reduce ? 0 : 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
})

/** Stagger container for children using `fadeUp`. */
export const stagger = (reduce: boolean | null, amount = 0.12): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: reduce ? 0 : amount } },
})
