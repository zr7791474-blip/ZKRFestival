import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../../constants/navigation'
import MagneticButton from '../MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="/logo/zkr.jpg"
                alt="ZKR Festival"
                className="w-10 h-10 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-violet-500/50 transition-all duration-300"
              />
              <span className="font-clash font-bold text-lg tracking-tight hidden sm:block">
                ZKR<span className="text-violet-400">.</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton strength={0.2}>
                <a
                  href="#tickets"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-medium hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  Buy Tickets
                </a>
              </MagneticButton>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-strong p-8 pt-24 flex flex-col gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-lg text-white/70 hover:text-white py-3 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#tickets"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-medium"
              >
                Buy Tickets
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}