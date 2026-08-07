import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { schedule } from '../../data/schedule'
import { getArtistStageName } from '../../data/artists'
import SectionReveal from '../SectionReveal'

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0)
  const activeSchedule = schedule[activeDay]

  return (
    <section id="schedule" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">
              Three Nights
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              The{' '}
              <span className="gradient-text">Schedule</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex justify-center gap-2 sm:gap-4 mb-12" role="tablist" aria-label="Schedule day">
            {schedule.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`relative px-5 sm:px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDay === i
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/60'
                }`}
                data-cursor-hover
                role="tab"
                aria-selected={activeDay === i}
              >
                {activeDay === i && (
                  <motion.div
                    layoutId="schedule-tab"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80 rounded-full"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">
                  {day.day}
                </span>
              </button>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="text-center text-white/30 text-sm mb-10 font-serif italic">
            {activeSchedule.date}
          </p>
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/20 to-transparent" />

            <div className="space-y-0">
              {activeSchedule.items.map((item, i) => {
                const displayName = getArtistStageName(item)

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="relative pl-12 sm:pl-20 py-5 group"
                  >
                    <div className="absolute left-[10px] sm:left-[26px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-violet-500 bg-void group-hover:bg-violet-500 transition-colors duration-300" />
                    <div className="absolute left-[10px] sm:left-[26px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="glass rounded-xl p-4 sm:p-5 group-hover:border-violet-500/20 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="font-clash font-semibold text-white text-base sm:text-lg">
                            {displayName}
                          </h4>
                          <p className="text-white/40 text-xs sm:text-sm mt-0.5">
                            {item.stage}
                          </p>
                        </div>
                        <span className="text-violet-400 font-mono text-sm font-medium">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}