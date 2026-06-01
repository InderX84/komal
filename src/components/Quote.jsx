import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl sm:text-8xl text-white/20 font-display leading-none mb-2 sm:mb-4">"</div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl md:text-4xl text-white font-bold leading-relaxed -mt-6 sm:-mt-12 px-2"
          >
            Success is not measured by where you start, but by how far your determination takes you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 sm:mt-8 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 sm:w-12 bg-white/50" />
            <span className="text-white/80 font-medium text-sm sm:text-base">Komal's Motto</span>
            <div className="h-px w-8 sm:w-12 bg-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
