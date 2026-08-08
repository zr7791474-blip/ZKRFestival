import { useRef, memo } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiArrowRight } from 'react-icons/fi'
import { useMousePosition } from '../../hooks/useMousePosition'
import { eventInfo } from '../../data/event'
import MagneticButton from '../MagneticButton'
import WarpText from '../EchoText'
import NoiseOverlay from '../NoiseOverlay'

// Isolates mouse-reactive blobs so mouse movement does NOT re-render
// WarpText, buttons, or any other hero content
const ParallaxBlobs = memo(function ParallaxBlobs() {
  const { normalizedX, normalizedY } = useMousePosition()

  return (
    <>
      <div
        className="absolute -z-10 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #7c3aed, transparent 70%)',
          top: '20%',
          left: '10%',
          transform: `translate(${normalizedX * 15}px, ${normalizedY * 15}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute -z-10 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent 70%)',
          bottom: '20%',
          right: '10%',
          transform: `translate(${normalizedX * -10}px, ${normalizedY * -10}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute -z-10 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #06b6d4, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${normalizedX * 8}px), calc(-50% + ${normalizedY * 8}px))`,
          transition: 'transform 0.3s ease-out',
        }}
      />
    </>
  )
})

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{ contain: 'layout style paint' }}
      className="relative h-screen h-dvh overflow-hidden"
    >
      {/* GIF Background — full screen, behind all content */}
      <img
        src="/hero/beach.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="eager"
      />

      {/* Gradient overlay for text readability over the GIF */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-void" />

      {/* Parallax Blobs — isolated to prevent Hero re-renders on mouse move */}
      <ParallaxBlobs />

      {/* Light Rays — own compositing layer prevents hero repaints on spin */}
      <div
        className="absolute inset-0 light-rays -z-10"
        style={{ willChange: 'transform' }}
      />

      {/* Noise */}
      <NoiseOverlay />

      {/* Content — does not re-render on mouse movement */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <WarpText text={eventInfo.name} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/80 mb-4"
        >
          {eventInfo.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-xl text-sm sm:text-base text-white/50 leading-relaxed mb-10 text-balance"
        >
          {eventInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton strength={0.25}>
            <a
              href="#tickets"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              <span className="relative z-10">Get Tickets</span>
              <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <button
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-sm font-medium hover:bg-white/10 transition-all duration-300"
              data-cursor-hover
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiPlay size={14} className="ml-0.5" />
              </span>
              Watch Trailer
            </button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float"
        >
          <div className="glass-strong rounded-2xl p-5 sm:p-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-2xl">
            {eventInfo.highlights.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-white font-clash font-semibold text-sm sm:text-base">
                  {item.value}
                </p>
                <p className="text-white/40 text-xs mt-0.5 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}