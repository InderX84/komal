import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Education', 'Career', 'Dreams', 'Skills']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const offsets = links.map((l) => {
        const el = document.getElementById(l.toLowerCase())
        return { id: l, top: el ? el.getBoundingClientRect().top : Infinity }
      })
      const current = offsets.filter(o => o.top <= 100).at(-1)
      if (current) setActive(current.id)
      else setActive('Home')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/10 dark:shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="font-display text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            Komal
          </motion.span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="relative px-3 py-2 text-sm font-medium transition-colors rounded-lg group"
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  active === l
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-primary-400'
                }`}>
                  {l}
                </span>
                {/* Active underline pill */}
                {active === l && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-primary-500/10 border border-primary-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-full glass text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    active === l
                      ? 'bg-primary-500/20 text-primary-400 font-semibold'
                      : 'text-gray-200 hover:bg-primary-900/20 hover:text-primary-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
