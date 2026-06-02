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
    <section id="career" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
            The Indian Foreign Service is India's premier diplomatic service. Cracking UPSC CSE and joining IFS means representing 1.4 billion people on the world stage — a responsibility I embrace with pride.
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
          <h3 className="text-center text-white font-display text-xl sm:text-2xl font-bold mb-10 sm:mb-16">
            🗺️ Achievement Roadmap
          </h3>

          {/* ── DESKTOP: horizontal timeline ── */}
          <div className="hidden sm:block relative">
            {/* Base line */}
            <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-white/10" />
            {/* Animated fill line */}
            <motion.div
              className="absolute top-[52px] left-[12.5%] h-0.5 bg-gradient-to-r from-primary-500 via-pink-500 to-gold-400"
              initial={{ width: '0%' }}
              animate={inView ? { width: '75%' } : {}}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            />

            <div className="grid grid-cols-4 gap-4">
              {roadmap.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.18 }}
                  className="flex flex-col items-center"
                >
                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary-500 to-pink-500
                               flex items-center justify-center shadow-lg shadow-primary-500/40 z-10 mb-5 cursor-default"
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-400/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                    />
                    <span className="text-xl">{item.icon}</span>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="glass rounded-2xl p-4 text-center w-full border border-white/10
                               hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="text-primary-400 text-[10px] font-black tracking-widest mb-1 uppercase">Step {item.step}</div>
                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</div>
                    {/* bottom glow bar */}
                    <div className="mt-3 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── MOBILE: vertical timeline ── */}
          <div className="sm:hidden relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/10" />
            <motion.div
              className="absolute left-[19px] top-0 w-0.5 bg-gradient-to-b from-primary-500 via-pink-500 to-gold-400"
              initial={{ height: '0%' }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
            />

            <div className="space-y-6">
              {roadmap.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Node */}
                  <div className="absolute -left-10 w-[38px] h-[38px] rounded-full bg-gradient-to-br from-primary-500 to-pink-500
                                  flex items-center justify-center shadow-md shadow-primary-500/40 flex-shrink-0 z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-400/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                    />
                    <span className="text-sm">{item.icon}</span>
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-4 flex-1 border border-white/10 hover:border-primary-500/40 transition-colors">
                    <div className="text-primary-400 text-[10px] font-black tracking-widest mb-1 uppercase">Step {item.step}</div>
                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
