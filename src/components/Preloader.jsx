import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200)
    const t2 = setTimeout(() => setPhase(2), 3200)
    const t3 = setTimeout(() => onDone(), 4000)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [onDone])

  const letters = 'Komal'.split('')

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
                     bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden px-4"
        >
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 text-center w-full max-w-sm sm:max-w-lg">
            {/* Name letters */}
            <div className="flex items-end gap-1 sm:gap-2">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-bold text-6xl sm:text-8xl md:text-9xl bg-gradient-to-b from-white via-primary-200 to-primary-400 bg-clip-text text-transparent"
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-primary-400 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase"
            >
              Aspiring IFS Officer 🇮🇳
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
              className="w-32 sm:w-48 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent origin-center"
            />

            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full"
                >
                  <p className="font-display text-lg sm:text-xl md:text-2xl text-white/90 italic leading-relaxed">
                    "Work hard in silence,
                    <br />
                    let success make a noise"
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="mt-3 text-xl sm:text-2xl"
                  >
                    💗💗👍
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.2, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-primary-500 via-pink-500 to-gold-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
