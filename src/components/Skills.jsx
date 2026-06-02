import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Soft Skills',
    icon: '🌟',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/20',
    skills: [
      { name: 'Communication', icon: '🗣️', level: 90 },
      { name: 'Leadership', icon: '👑', level: 85 },
      { name: 'Public Speaking', icon: '🎤', level: 80 },
      { name: 'Adaptability', icon: '🌱', level: 93 },
    ],
  },
  {
    category: 'Professional',
    icon: '💼',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500/20',
    skills: [
      { name: 'Time Management', icon: '⏰', level: 88 },
      { name: 'Teamwork', icon: '🤝', level: 92 },
      { name: 'Problem Solving', icon: '🧩', level: 87 },
      { name: 'Critical Thinking', icon: '🧠', level: 85 },
    ],
  },
  {
    category: 'Technical',
    icon: '💻',
    color: 'from-cyan-400 to-blue-500',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    skills: [
      { name: 'Microsoft Office', icon: '📊', level: 82 },
      { name: 'Computer Skills', icon: '🖥️', level: 78 },
      { name: 'Tally', icon: '🧾', level: 75 },
    ],
  },
]

function SkillBar({ skill, color, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${color} text-white`}>
          {skill.level}%
        </span>
      </div>
      {/* Bar track */}
      <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 1.5, delay: 1 + i * 0.08, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/40 dark:bg-pink-900/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
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

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className={`bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6
                          border ${group.border} shadow-lg hover:shadow-xl ${group.glow}
                          transition-all duration-300`}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-lg shadow-md`}>
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{group.category}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">{group.skills.length} skills</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} color={group.color} i={si + gi * 4} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { val: '11+', lbl: 'Total Skills', icon: '🎯', color: 'from-violet-500 to-purple-600' },
            { val: '100%', lbl: 'Dedication', icon: '🔥', color: 'from-pink-500 to-rose-500' },
            { val: '∞', lbl: 'Potential', icon: '⚡', color: 'from-cyan-400 to-blue-500' },
          ].map(({ val, lbl, icon, color }, i) => (
            <motion.div
              key={lbl}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.04, y: -3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 text-center border border-gray-100 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-1">{icon}</div>
              <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{val}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 mt-1 font-medium">{lbl}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
