import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { galleryImages } from '../../data/gallery'
import SectionReveal from '../SectionReveal'

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = useCallback((index: number) => setLightbox(index), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const next = useCallback(
    () => setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null)),
    [],
  )
  const prev = useCallback(
    () =>
      setLightbox((prev) =>
        prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null,
      ),
    [],
  )

  // Keyboard support for the lightbox: Escape to close, arrows to navigate.
  useEffect(() => {
    if (lightbox === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox, closeLightbox, next, prev])

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Visual Memories
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              The{' '}
              <span className="gradient-text">Gallery</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <SectionReveal key={img.id} delay={i * 0.06} direction="up">
              <div
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(i)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View image: ${img.alt}`}
                data-cursor-hover
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[lightbox].title}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 sm:left-8 text-white/40 hover:text-white transition-colors text-3xl"
              aria-label="Previous image"
            >
              ‹
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightbox].image}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 sm:right-8 text-white/40 hover:text-white transition-colors text-3xl"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-clash font-semibold text-sm">
                {galleryImages[lightbox].title}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {galleryImages[lightbox].photographer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}