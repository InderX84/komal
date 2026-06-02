import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const dreams = [
  {
    emoji: '🏛️',
    title: 'Become an IFS Officer',
    desc: 'Walk the halls of South Block, negotiate treaties, and represent India at the United Nations. This badge of honour drives every hour of my preparation.',
    color: 'from-primary-500 to-pink-500',
    bg: 'from-primary-50 to-pink-50 dark:from-primary-900/20 dark:to-pink-900/20',
    tag: 'Life Goal',
  },
  {
    emoji: '🚙',
    title: 'Buy a Mahindra Thar Roxx',
    desc: 'One of my biggest dreams is to gift a Mahindra Thar Roxx to my family as a symbol of gratitude for their sacrifices, support, and unconditional love.',
    color: 'from-gold-500 to-orange-500',
    bg: 'from-gold-50 to-orange-50 dark:from-gold-900/20 dark:to-orange-900/20',
    tag: 'Family Dream',
  },
  {
    emoji: '❤️',
    title: 'Make My Family Proud',
    desc: 'Achieve success through hard work and create a better future for my loved ones. Their smiles are my greatest reward.',
    color: 'from-rose-500 to-red-500',
    bg: 'from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20',
    tag: "Heart's Desire",
  },
]

export default function Dreams() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dreams" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-primary-100/50 to-pink-100/50 dark:from-primary-900/10 dark:to-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">What Drives Me</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Dreams That <span className="text-gradient">Inspire Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            These dreams fuel my determination every single day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {dreams.map((dream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${dream.bg} border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r ${dream.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{dream.emoji}</div>
                <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r ${dream.color} text-white mb-3 sm:mb-4`}>
                  {dream.tag}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{dream.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{dream.desc}</p>
                <div className={`mt-4 sm:mt-6 h-1 rounded-full bg-gradient-to-r ${dream.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
