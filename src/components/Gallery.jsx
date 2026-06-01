import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

const categories = [
  { label: 'School Life', emoji: '🏫', color: 'from-blue-400 to-cyan-400', span: 'col-span-2' },
  { label: 'Achievements', emoji: '🏆', color: 'from-gold-400 to-orange-400', span: '' },
  { label: 'Future Goals', emoji: '🎯', color: 'from-primary-400 to-pink-400', span: '' },
  { label: 'Inspirational Moments', emoji: '✨', color: 'from-rose-400 to-red-400', span: 'col-span-2' },
  { label: 'Study Time', emoji: '📚', color: 'from-green-400 to-teal-400', span: '' },
  { label: 'Dreams', emoji: '🌟', color: 'from-purple-400 to-indigo-400', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest">Memories & Moments</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            My <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A visual journey through life's beautiful chapters.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`${cat.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {/* Placeholder gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-80`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-2"
                >
                  {cat.emoji}
                </motion.div>
                <span className="font-semibold text-sm text-center px-2">{cat.label}</span>
                <div className="mt-2 flex items-center gap-1 text-white/70 text-xs">
                  <ImageIcon size={12} />
                  <span>Add Photos</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-400 dark:text-gray-500 text-sm mt-6"
        >
          📸 Photo placeholders — replace with real images to bring this gallery to life!
        </motion.p>
      </div>
    </section>
  )
}
