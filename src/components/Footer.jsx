import { motion } from 'framer-motion'
import { Heart, ExternalLink } from 'lucide-react'

const links = ['Home', 'About', 'Education', 'Career', 'Dreams', 'Skills']

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-14 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pb-10 sm:pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('home')}
              className="font-display text-3xl sm:text-4xl font-bold text-gradient cursor-pointer inline-block mb-2"
            >
              Komal
            </motion.div>
            <p className="text-primary-400 text-xs sm:text-sm font-medium mb-3">
              Future Indian Foreign Service Officer 🇮🇳
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Dreaming Big, Working Hard, and Building a Better Future — one step at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-gray-400 hover:text-primary-400 text-xs sm:text-sm transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Developer */}
          <div className="text-center sm:text-right">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Built With Love</h4>
            <p className="text-gray-500 text-xs mb-3 leading-relaxed">
              This portfolio was crafted as a heartfelt gift for Komal by her friend.
            </p>
            <a
              href="https://inderx84.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                         bg-gradient-to-r from-primary-500/20 to-pink-500/20
                         border border-primary-500/30 hover:border-primary-400/60
                         text-primary-400 hover:text-primary-300 text-xs font-semibold
                         transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
            >
              💙 Inder's Portfolio
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-[10px] sm:text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} Komal. All rights reserved.
          </p>

          <p className="text-gray-400 text-[10px] sm:text-xs flex items-center gap-1 order-1 sm:order-2">
            Made with <Heart size={11} className="text-red-400 fill-current mx-0.5" /> for Komal — a gift from Inder 💙
          </p>
        </div>
      </div>
    </footer>
  )
}
