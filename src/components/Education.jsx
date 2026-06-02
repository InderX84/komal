import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

const timeline = [
  {
    level: 'B.Com (Honours)',
    school: 'Patel Memorial National College (PMN)',
    location: 'Rajpura',
    desc: 'Admission secured! Classes are yet to begin. Preparing to pursue higher education in commerce and develop knowledge in finance, economics, business, and management.',
    icon: '🎓',
    color: 'from-gold-500 to-orange-500',
    year: 'Admitted',
    upcoming: true,
  },
  {
    level: 'Senior Secondary (+2)',
    school: 'Govt. Sr. Sec. School Mohinder Ganj',
    location: 'Rajpura — School of Eminence',
    desc: 'Completed higher secondary education with Commerce stream and strengthened the foundation for future academic and professional goals.',
    icon: '📚',
    color: 'from-primary-500 to-pink-500',
    year: 'Commerce',
  },
  {
    level: 'Class 10th',
    school: 'Rishi Model Public School',
    location: 'Rajpura Town',
    desc: 'Successfully completed secondary education with General stream while developing strong academic values and discipline.',
    icon: '🏫',
    color: 'from-blue-500 to-cyan-500',
    year: 'General',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-widest">Academic Journey</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Every step of learning has shaped my path toward serving the nation.
          </p>
        </motion.div>

        {/* Timeline — left-aligned on all screens, centered line */}
        <div className="relative">
          {/* Vertical line — always on left at 20px */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-pink-500 to-blue-500" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex items-start gap-6 sm:gap-8 pl-14 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-base shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {item.upcoming && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400">
                        🎉 Admission Done
                      </span>
                    )}
                    <span className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{item.level}</h3>
                  <div className="flex items-start gap-1 text-primary-500 font-medium text-xs sm:text-sm mb-1">
                    <GraduationCap size={13} className="mt-0.5 flex-shrink-0" />
                    <span>{item.school}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-xs mb-2 sm:mb-3">
                    <MapPin size={11} className="flex-shrink-0" />
                    {item.location}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
