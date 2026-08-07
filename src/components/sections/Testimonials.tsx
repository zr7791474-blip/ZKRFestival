import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'
import SectionReveal from '../SectionReveal'
import GlassCard from '../GlassCard'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance, but pause on hover/focus and respect reduced-motion so the
  // content isn't a moving target for users who need more time to read it.
  useEffect(() => {
    if (isPaused) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next, isPaused])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">
              What People Say
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              From Our{' '}
              <span className="gradient-text">Community</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <GlassCard className="p-8 sm:p-12 min-h-[280px] flex flex-col justify-center" glow="purple">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 font-serif italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/30"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-clash font-semibold text-white">{t.name}</p>
                      <p className="text-white/40 text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/30 transition-all"
                aria-label="Previous testimonial"
                data-cursor-hover
              >
                <FiChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-gradient-to-r from-violet-500 to-fuchsia-500'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/30 transition-all"
                aria-label="Next testimonial"
                data-cursor-hover
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}