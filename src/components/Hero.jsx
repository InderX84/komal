import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import komalPic from '../assests/pic.jpg'

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 4,
}))

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs sm:text-sm text-primary-300 mb-4 sm:mb-6"
            >
              <Star size={12} className="fill-current" />
              Aspiring IFS Officer
              <Star size={12} className="fill-current" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Komal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-primary-300 font-medium mb-4 sm:mb-6"
            >
              Aspiring Indian Foreign Service (IFS) Officer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0"
            >
              I am a passionate and determined student who believes that dedication, education, and hard work can turn dreams into reality. My goal is to serve my nation as an Indian Foreign Service Officer and make my family proud.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="italic text-gold-400 text-sm sm:text-base mb-6 sm:mb-8 font-display"
            >
              "Dreaming Big, Working Hard, and Building a Better Future."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('education')}
                className="btn-primary text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3"
              >
                View Journey
              </motion.button>
              <motion.a
                href="https://inderx84.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3"
              >
                Meet the Developer
              </motion.a>
            </motion.div>
          </div>

          {/* Avatar — shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-pink-500 blur-2xl opacity-40 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-400/30 animate-spin" style={{ animationDuration: '20s' }} />

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                           rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-primary-500/30"
              >
                <img
                  src={komalPic}
                  alt="Komal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-purple-900/60 to-transparent" />
              </motion.div>

              {/* Badges — repositioned to not clip */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-[10px] sm:text-xs text-white font-medium shadow-lg whitespace-nowrap"
              >
                🇮🇳 Future IFS Officer
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-[10px] sm:text-xs text-white font-medium shadow-lg"
              >
                ✨ Dream Big
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
