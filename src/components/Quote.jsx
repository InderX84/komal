import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,58,237,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
        >
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary-500" />
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-widest">Komal's Motto</span>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary-500" />
        </motion.div>

        {/* Main quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          {/* Glow border */}
          <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-500 via-pink-500 to-gold-400 opacity-60 blur-sm" />

          <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl px-6 sm:px-12 md:px-16 py-10 sm:py-14 text-center overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_70%)]" />

            {/* Big decorative quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-[80px] sm:text-[120px] leading-none text-primary-500/20 select-none absolute -top-4 sm:-top-6 left-4 sm:left-10"
            >
              "
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-[80px] sm:text-[120px] leading-none text-pink-500/20 select-none absolute -bottom-10 sm:-bottom-14 right-4 sm:right-10"
            >
              "
            </motion.div>

            {/* Quote text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            >
              Success is not measured by{' '}
              <span className="text-gradient">where you start,</span>
              <br className="hidden sm:block" />
              {' '}but by how far your{' '}
              <span className="bg-gradient-to-r from-pink-400 to-gold-400 bg-clip-text text-transparent">
                determination
              </span>
              {' '}takes you.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-16 sm:w-24 h-px bg-gradient-to-r from-primary-500 to-pink-500 mx-auto my-6 sm:my-8 origin-center"
            />

            {/* Author tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 flex items-center justify-center text-sm sm:text-base font-bold text-white shadow-lg">
                K
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm sm:text-base leading-none">Komal</p>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">Aspiring IFS Officer 🇮🇳</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom floating tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10"
        >
          {['✨ Dream Big', '🔥 Work Hard', '🇮🇳 Serve India', '💪 Never Give Up', '🌟 Stay Focused'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold
                         bg-white/5 border border-white/10 text-gray-300
                         hover:bg-white/10 hover:border-primary-500/40 hover:text-white
                         transition-all duration-200 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
