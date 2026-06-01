import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from './hooks/useDarkMode'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Career from './components/Career'
import Dreams from './components/Dreams'
import Skills from './components/Skills'
import Quote from './components/Quote'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'

export default function App() {
  useDarkMode()
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <CustomCursor />
      <Preloader onDone={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="min-h-screen bg-white dark:bg-slate-900"
          >
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Career />
            <Dreams />
            <Skills />
            <Quote />
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
