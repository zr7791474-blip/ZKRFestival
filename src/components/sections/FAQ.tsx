import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { faqData } from '../../data/faq'
import SectionReveal from '../SectionReveal'

function AccordionItem({ item, index }: { item: (typeof faqData)[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <SectionReveal delay={index * 0.06}>
      <motion.div className="glass rounded-xl overflow-hidden" layout>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
          data-cursor-hover
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-clash font-semibold text-white text-sm sm:text-base pr-4 group-hover:text-violet-300 transition-colors">
            {item.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-violet-400 transition-colors"
          >
            <FiPlus size={16} />
          </motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/50 text-sm leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionReveal>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">
              Questions?
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              Frequently{' '}
              <span className="gradient-text">Asked</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <AccordionItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}