import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Target, BookOpen, Globe } from 'lucide-react'

const stats = [
  { icon: BookOpen, label: 'Years of Study', value: '12+' },
  { icon: Target, label: 'Clear Goal', value: 'IFS' },
  { icon: Globe, label: 'Dream', value: 'Diplomat' },
  { icon: Heart, label: 'Passion', value: '100%' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Who I Am</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-pink-500 p-px">
              <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 sm:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map(({ icon: Icon, label, value }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="bg-gradient-to-br from-primary-50 to-pink-50 dark:from-primary-900/30 dark:to-pink-900/30
                                 rounded-2xl p-4 sm:p-5 text-center card-hover cursor-default"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gradient">{value}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <span className="text-2xl sm:text-3xl">🎯</span>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">Goal-Oriented</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Every action aligned with a bigger purpose</div>
                  </div>
                </div>

                <a
                  href="https://inderx84.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-primary-50 to-pink-50 dark:from-primary-900/20 dark:to-pink-900/20 hover:from-primary-100 hover:to-pink-100 dark:hover:from-primary-900/30 dark:hover:to-pink-900/30 transition-all group"
                >
                  <span className="text-xl sm:text-2xl">💙</span>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white text-sm group-hover:text-primary-500 transition-colors">Built by Inder</div>
                    <div className="text-[10px] sm:text-xs text-primary-400">inderx84.vercel.app ↗</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-400/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400/20 rounded-full blur-xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              A Determined Student with a{' '}
              <span className="text-gradient">Clear Vision</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              Born and raised in Rajpura, Punjab, I am a commerce student with a sharp focus on academics and self-development. I thrive on challenges and believe every obstacle is a stepping stone.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              My long-term vision is to clear the UPSC Civil Services Examination and serve the country through the Indian Foreign Service — bringing honour to my family and my nation.
            </p>

            <div className="space-y-2 sm:space-y-3">
              {['Discipline & Dedication', 'Continuous Learning', 'National Service', 'Global Perspective'].map((trait, i) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
