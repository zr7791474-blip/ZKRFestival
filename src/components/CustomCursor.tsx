import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const lastPosRef = useRef({ x: 0, y: 0 })

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    // Dead zone: skip state updates if cursor moved less than 2px
    const DEAD_ZONE = 2

    const moveCursor = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x
      const dy = e.clientY - lastPosRef.current.y
      const dist = dx * dx + dy * dy

      if (dist < DEAD_ZONE * DEAD_ZONE) return

      lastPosRef.current.x = e.clientX
      lastPosRef.current.y = e.clientY

      x.set(e.clientX - 8)
      y.set(e.clientY - 8)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [x, y, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
          x: isHovering ? -16 : 0,
          y: isHovering ? -16 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  )
}