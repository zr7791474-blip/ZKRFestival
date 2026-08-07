import {
  FiMail,
  FiMapPin,
  FiInstagram,
  FiGithub,
} from 'react-icons/fi'
import { SiWhatsapp, SiX } from 'react-icons/si'
import { socialLinks } from '../../constants/socialLinks'
import SectionReveal from '../SectionReveal'
import GlassCard from '../GlassCard'

const socialIcons: Record<string, React.ReactNode> = {
  whatsapp: <SiWhatsapp />,
  email: <FiMail />,
  instagram: <FiInstagram />,
  github: <FiGithub />,
  x: <SiX />,
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">
              Get In Touch
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              Contact{' '}
              <span className="gradient-text">Us</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <SectionReveal delay={0}>
            <GlassCard className="p-6 text-center h-full" glow="purple">
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4 text-violet-400">
                <FiMail size={20} />
              </div>
              <h3 className="font-clash font-semibold text-white mb-1">Email</h3>
              <a
                href="mailto:zr7791474@gmail.com"
                className="text-white/50 text-sm hover:text-violet-400 transition-colors"
              >
                zr7791474@gmail.com
              </a>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <GlassCard className="p-6 text-center h-full" glow="cyan">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4 text-cyan-400">
                <SiWhatsapp size={20} />
              </div>
              <h3 className="font-clash font-semibold text-white mb-1">WhatsApp</h3>
              <a
                href="https://wa.me/212657516301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 text-sm hover:text-cyan-400 transition-colors"
              >
                +212 657 516 301
              </a>
            </GlassCard>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <GlassCard className="p-6 text-center h-full" glow="pink">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 flex items-center justify-center mx-auto mb-4 text-fuchsia-400">
                <FiMapPin size={20} />
              </div>
              <h3 className="font-clash font-semibold text-white mb-1">Location</h3>
              <p className="text-white/50 text-sm">
                Casablanca Waterfront<br />Morocco
              </p>
            </GlassCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.1}>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6">
              Follow Us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {(Object.entries(socialLinks) as [string, string][]).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:border-violet-500/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 text-base"
                  aria-label={key}
                  data-cursor-hover
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}