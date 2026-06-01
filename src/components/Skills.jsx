import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Communication', icon: '🗣️', level: 90, color: 'from-violet-500 to-purple-600' },
  { name: 'Leadership', icon: '👑', level: 85, color: 'from-amber-400 to-orange-500' },
  { name: 'Time Management', icon: '⏰', level: 88, color: 'from-cyan-400 to-blue-500' },
  { name: 'Teamwork', icon: '🤝', level: 92, color: 'from-emerald-400 to-teal-500' },
  { name: 'Public Speaking', icon: '🎤', level: 80, color: 'from-pink-400 to-rose-500' },
  { name: 'Problem Solving', icon: '🧩', level: 87, color: 'from-primary-400 to-primary-600' },
  { name: 'Critical Thinking', icon: '🧠', level: 85, color: 'from-indigo-400 to-violet-500' },
  { name: 'Microsoft Office', icon: '💻', level: 82, color: 'from-blue-400 to-cyan-500' },
  { name: 'Computer Skills', icon: '🖥️', level: 78, color: 'from-slate-400 to-slate-600' },
  { name: 'Adaptability', icon: '🌱', level: 93, color: 'from-green-400 to-emerald-500' },
]

function CircleRing({ level }) {
  const r = 26
  const circ = 2 * Math.PI * r
  const dash = (level / 100) * circ
  return (
    <svg width="64" height="64" className="absolute inset-0 -rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeWidth="3"
        className="text-gray-100 dark:text-slate-700" />
      <motion.circle
        cx="32" cy="32" r={r} fill="none" strokeWidth="3"
        stroke="url(#sg)" strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - dash }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SkillCard({ skill, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative flex flex-col items-center gap-2 bg-white dark:bg-slate-800
                 rounded-2xl px-3 py-4 shadow-md hover:shadow-xl border border-gray-100
                 dark:border-slate-700 transition-all duration-300 cursor-default"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative w-16 h-16 flex items-center justify-center">
        <CircleRing level={skill.level} />
        <span className="text-xl z-10">{skill.icon}</span>
      </div>
      <p className="text-center text-[11px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 leading-tight">
        {skill.name}
      </p>
      <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
        {skill.level}%
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/60 dark:bg-primary-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100/60 dark:bg-pink-900/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">What I Bring</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-xs sm:text-sm mt-2">
            A blend of soft skills and technical abilities that define who I am.
          </p>
        </motion.div>

        {/* Responsive grid: 3 cols on mobile, 4 on sm, 5 on lg */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} inView={inView} />
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-14 rounded-2xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 p-px"
        >
          <div className="rounded-2xl bg-white dark:bg-slate-900 px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-display text-base sm:text-lg font-bold text-gray-900 dark:text-white">Always Growing 🌱</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Continuously learning new skills every day.</p>
            </div>
            <div className="flex gap-5 sm:gap-6">
              {[['10+', 'Skills'], ['100%', 'Dedication'], ['∞', 'Potential']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient">{val}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
