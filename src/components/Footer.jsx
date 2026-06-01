import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const links = ['Home', 'About', 'Education', 'Career', 'Dreams', 'Skills']

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 text-white py-10 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-3xl sm:text-4xl font-bold text-gradient cursor-pointer inline-block mb-2"
            onClick={() => scrollTo('home')}
          >
            Komal
          </motion.div>
          <p className="text-primary-400 font-medium text-sm sm:text-base">Future Indian Foreign Service Officer 🇮🇳</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-gray-400 hover:text-primary-400 text-xs sm:text-sm transition-colors py-1"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center space-y-2 sm:space-y-3">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1">
            Made with <Heart size={13} className="text-red-400 fill-current" /> for Komal
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs">
            © {new Date().getFullYear()} Komal. All rights reserved. | Dreaming Big, Working Hard.
          </p>
          <p className="text-gray-600 text-[10px] sm:text-xs">
            Designed &amp; Developed by{' '}
            <a
              href="https://inderx84.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold transition-colors underline underline-offset-2"
            >
              Inder 💙
            </a>
            {' '}— a gift for his friend Komal
          </p>
        </div>
      </div>
    </footer>
  )
}
