import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '../../data/experience'
import SectionReveal from '../SectionReveal'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

    const totalWidth = track.scrollWidth - container.offsetWidth

    gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 15%',
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill()
      })
    }
  }, [])

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="px-4 sm:px-6 mb-12">
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

      <div ref={containerRef} className="relative h-[500px] sm:h-[550px]">
        <div
          ref={trackRef}
          className="flex gap-6 px-4 sm:px-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="w-[340px] sm:w-[420px] flex-shrink-0 group"
            >
              <div className="glass rounded-2xl overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient} to-transparent`} />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-black/40 backdrop-blur-md rounded-full text-white/80 border border-white/10">
                      <span>{exp.icon}</span>
                      {exp.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-clash text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-4 flex-shrink-0" />
        </div>
      </div>
    </section>
  )
}