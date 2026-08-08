import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../../data/experience'
import SectionReveal from '../SectionReveal'

const AUTOPLAY_MS = 5500

export default function Experience() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([])
  const count = experiences.length

  const goTo = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  )
  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  // Auto-advance the featured image, pausing on hover/focus and whenever the
  // person prefers reduced motion — same pattern already used in Testimonials.
  useEffect(() => {
    if (isPaused) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const id = window.setInterval(() => setActive((p) => (p + 1) % count), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [isPaused, count])

  useEffect(() => {
    thumbRefs.current[active]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [active])

  const current = experiences[active]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="px-4 sm:px-6 mb-10 sm:mb-14">
        <SectionReveal>
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Beyond The Music
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              The{' '}
              <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.1}>
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Featured cinematic image */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[16/9] glass">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                  loading={active === 0 ? 'eager' : 'lazy'}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${current.gradient} to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-medium bg-black/40 backdrop-blur-md rounded-full text-white/80 border border-white/10">
                <span>{current.icon}</span>
                {current.badge}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10">
              <h3 className="font-clash text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {current.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl">
                {current.description}
              </p>
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous experience"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white transition-colors"
              data-cursor-hover
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next experience"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full glass-strong flex items-center justify-center text-white/70 hover:text-white transition-colors"
              data-cursor-hover
            >
              ›
            </button>
          </div>

          {/* Thumbnail rail — native horizontal scroll, no scroll-jacking */}
          <div
            className="mt-5 sm:mt-6 flex gap-3 sm:gap-4 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-hide"
            role="tablist"
            aria-label="Experience selector"
          >
            {experiences.map((exp, i) => (
              <button
                key={exp.id}
                ref={(el) => {
                  thumbRefs.current[i] = el
                }}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={exp.title}
                onClick={() => goTo(i)}
                className={`relative flex-shrink-0 w-24 sm:w-32 rounded-xl overflow-hidden snap-start transition-all duration-300 ${
                  i === active
                    ? 'ring-2 ring-violet-400'
                    : 'ring-1 ring-white/10 opacity-50 hover:opacity-80'
                }`}
                data-cursor-hover
              >
                <div className="aspect-[4/3]">
                  <img
                    src={exp.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {i === active && !isPaused && (
                  <motion.div
                    key={active}
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
