import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'

export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
