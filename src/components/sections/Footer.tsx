import {
  FiInstagram,
  FiGithub,
  FiMail,
} from 'react-icons/fi'
import { SiWhatsapp, SiX } from 'react-icons/si'
import { navLinks } from '../../constants/navigation'
import { socialLinks } from '../../constants/socialLinks'

const socialIcons: Record<string, React.ReactNode> = {
  whatsapp: <SiWhatsapp size={16} />,
  email: <FiMail size={16} />,
  instagram: <FiInstagram size={16} />,
  github: <FiGithub size={16} />,
  x: <SiX size={16} />,
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo/zkr.jpg"
                alt="ZKR Festival"
                className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10"
              />
              <span className="font-clash font-bold text-lg">
                ZKR<span className="text-violet-400">.</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              The next generation music festival. Casablanca, August 2027.
            </p>
          </div>

          <div>
            <h4 className="font-clash font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-clash font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-clash font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Social
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Object.entries(socialLinks) as [string, string][]).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={key}
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} ZKR Festival. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed with precision. Built for the future.
          </p>
        </div>
      </div>
    </footer>
  )
}