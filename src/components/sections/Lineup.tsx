import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { artists } from '../../data/artists'
import SectionReveal from '../SectionReveal'

function ArtistCard({ artist, index }: { artist: (typeof artists)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const isFeatured = artist.featured
  const colSpan = isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''

  return (
    <SectionReveal delay={index * 0.06} direction="up" blur={false} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        whileTap={{ scale: 0.97 }}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className={`group relative h-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${colSpan}`}
        data-cursor-hover
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
        <div className="absolute inset-0 border border-white/5 rounded-xl sm:rounded-2xl group-hover:border-violet-500/30 transition-colors duration-500" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 rounded-full blur-[60px]"
            style={{ backgroundColor: `${artist.colors.primary}33` }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 md:p-6">
          <span
            className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium rounded-full border mb-1.5 sm:mb-3"
            style={{
              backgroundColor: `${artist.colors.primary}20`,
              color: artist.colors.primary,
              borderColor: `${artist.colors.primary}33`,
            }}
          >
            {artist.genre}
          </span>
          <h3 className="font-clash text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1 leading-tight line-clamp-2">
            {artist.name}
          </h3>
          <p className="text-white/40 text-[10px] sm:text-xs md:text-sm truncate">
            {artist.stage} · {artist.day}
          </p>
        </div>
      </motion.div>
    </SectionReveal>
  )
}

export default function Lineup() {
  return (
    <section id="lineup" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-8 sm:mb-14 md:mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-2 sm:mb-3">
              The Artists
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Meet the{' '}
              <span className="gradient-text">Lineup</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-white/40 max-w-md mx-auto text-sm sm:text-base">
              40+ world-class artists across 3 stages. This is just the beginning.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[260px]">
          {artists.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}