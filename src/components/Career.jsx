import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Shield, Flag } from 'lucide-react'

const roadmap = [
  { step: '01', title: 'B.Com (Honours)', desc: 'Build strong academic foundation', icon: '🎓' },
  { step: '02', title: 'UPSC Preparation', desc: 'Rigorous civil services prep', icon: '📖' },
  { step: '03', title: 'Civil Services Exam', desc: 'Crack the prestigious UPSC', icon: '✍️' },
  { step: '04', title: 'Indian Foreign Service', desc: 'Represent India worldwide', icon: '🇮🇳' },
]

export default function Career() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="career" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-widest">My Calling</span>
          <h2 className="section-title text-white mt-2 text-3xl sm:text-4xl md:text-5xl">
            My Mission:{' '}
            <span className="text-gradient">Indian Foreign Service</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg mt-2">
            My ultimate goal is to become an Indian Foreign Service Officer — representing India internationally, strengthening diplomatic relations, and contributing to the nation's growth.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {[
            { icon: Globe, title: 'Global Diplomacy', desc: 'Represent India on the international stage and build meaningful diplomatic relationships.', color: 'from-blue-500 to-cyan-500' },
            { icon: Shield, title: 'National Service', desc: "Dedicate life to serving the nation and protecting India's interests worldwide.", color: 'from-primary-500 to-pink-500' },
            { icon: Flag, title: 'Proud Ambassador', desc: 'Carry the Indian flag with pride and honor across every corner of the globe.', color: 'from-orange-500 to-gold-500' },
          ].map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-5 sm:p-6 text-center group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-white font-display text-xl sm:text-2xl font-bold mb-6 sm:mb-10">
            🗺️ Achievement Roadmap
          </h3>

          {/* Mobile: vertical stack | Desktop: horizontal row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {roadmap.map((item, i) => (
              <div key={i} className="flex sm:flex-col items-center gap-3 sm:gap-0 w-full sm:w-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-4 sm:p-5 text-center w-full sm:min-w-[140px] sm:max-w-[160px] border border-white/10 hover:border-primary-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-primary-400 text-[10px] sm:text-xs font-bold mb-1">STEP {item.step}</div>
                  <div className="text-white font-semibold text-xs sm:text-sm">{item.title}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs mt-1">{item.desc}</div>
                </motion.div>
                {/* Arrow between steps */}
                {i < roadmap.length - 1 && (
                  <div className="text-primary-400 text-lg sm:hidden">↓</div>
                )}
                {i < roadmap.length - 1 && (
                  <div className="text-primary-400 hidden sm:block sm:mt-2">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
