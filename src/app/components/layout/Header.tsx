import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const links = [
  { to: '/services', label: 'Послуги' },
  { to: '/pricing', label: 'Ціни' },
  { to: '/contact', label: 'Контакти' },
]

export function Header() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            'mx-auto flex items-center justify-between transition-all duration-500 ease-out',
            scrolled
              ? 'max-w-none rounded-none border-transparent bg-burgundy px-6 py-4 text-bg shadow-[0_1px_0_0_rgba(0,0,0,0.06)] md:px-12'
              : 'mt-4 max-w-5xl rounded-full border border-nude bg-bg/80 px-5 py-3 text-ink backdrop-blur-md md:px-7',
          )}
        >
          {/* Wordmark — Latin, renders in Playfair */}
          <Link
            to="/"
            className={cn(
              'font-display text-2xl leading-none tracking-tight transition-colors duration-500',
              scrolled ? 'text-bg' : 'text-burgundy',
            )}
          >
            kurd<span className={scrolled ? 'text-bg/60' : 'text-ink/40'}>.</span>studio
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 font-body text-[0.875rem] uppercase tracking-wide md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'transition-colors duration-300',
                    scrolled
                      ? isActive
                        ? 'text-bg'
                        : 'text-bg/65 hover:text-bg'
                      : isActive
                        ? 'text-burgundy'
                        : 'text-ink/60 hover:text-ink',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={cn(
              'hidden rounded-full px-6 py-2.5 font-body text-[0.875rem] tracking-wide transition-colors duration-500 md:inline-flex',
              scrolled
                ? 'bg-bg text-burgundy hover:bg-nude'
                : 'bg-burgundy text-bg hover:bg-burgundy-dark',
            )}
          >
            Обговорити проект
          </Link>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Відкрити меню"
            className="md:hidden"
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={
              reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'circle(150% at 90% 5%)' }
            }
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-burgundy text-bg md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-2xl tracking-tight">
                kurd<span className="text-bg/60">.</span>studio
              </span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Закрити меню">
                <X className="size-7" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl leading-tight tracking-tight text-bg transition-colors hover:text-nude"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="px-6 pb-12">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-bg px-7 py-3 font-body text-[0.875rem] uppercase tracking-wide text-burgundy"
              >
                Обговорити проект
              </Link>
              <p className="mt-8 font-mono text-caption uppercase tracking-wider text-bg/50">
                Hmelnytskyi, UA · 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
