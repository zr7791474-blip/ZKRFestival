import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'purple' | 'pink' | 'cyan' | 'none'
}

const glowMap = {
  purple: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]',
  pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
  cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  none: '',
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'purple',
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass rounded-2xl ${glowMap[glow]} ${className}`}
    >
      {children}
    </motion.div>
  )
}