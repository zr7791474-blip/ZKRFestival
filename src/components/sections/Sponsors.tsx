import SectionReveal from '../SectionReveal'
import { sponsors } from '../../data/sponsors'

export default function Sponsors() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionReveal>
        <div className="text-center mb-16 px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">
            Partners & Sponsors
          </p>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
            Powered By{' '}
            <span className="gradient-text">The Best</span>
          </h2>
        </div>
      </SectionReveal>

      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-10 glass rounded-xl px-8 py-5 flex items-center justify-center hover:border-violet-500/20 transition-all duration-300"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-8 sm:h-10 w-auto opacity-40 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-reverse">
          {[...sponsors.slice().reverse(), ...sponsors.slice().reverse()].map((s, i) => (
            <div
              key={`r-${s.id}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-10 glass rounded-xl px-8 py-5 flex items-center justify-center hover:border-cyan-500/20 transition-all duration-300"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-8 sm:h-10 w-auto opacity-40 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}