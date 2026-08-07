import { FiCheck } from 'react-icons/fi'
import { ticketTiers } from '../../data/tickets'
import SectionReveal from '../SectionReveal'
import GlassCard from '../GlassCard'
import MagneticButton from '../MagneticButton'

export default function Tickets() {
  return (
    <section id="tickets" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">
              Secure Your Spot
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Get Your{' '}
              <span className="gradient-text">Tickets</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto text-sm sm:text-base">
              Limited availability. Early bird pricing ends soon.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ticketTiers.map((tier, i) => (
            <SectionReveal key={tier.id} delay={i * 0.12}>
              <GlassCard
                glow={tier.glow}
                className={`relative p-6 sm:p-8 h-full flex flex-col ${
                  tier.popular ? 'ring-1 ring-violet-500/30' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-clash text-xl font-bold text-white mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-white/40 text-sm">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <span className="font-clash text-4xl sm:text-5xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-white/40 text-sm ml-1">{tier.currency}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                      <FiCheck className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton strength={0.15}>
                  <button
                    type="button"
                    className={`w-full py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]'
                        : 'glass text-white/80 hover:bg-white/10'
                    }`}
                    data-cursor-hover
                    aria-label={`Select ${tier.name} — demo only, checkout is not connected to a real backend`}
                    title="Demo only — checkout is not connected to a real backend"
                  >
                    Select {tier.name}
                  </button>
                </MagneticButton>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}