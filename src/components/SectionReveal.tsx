import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  blur?: boolean
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion preference: show final state immediately, no animation.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, x: 0, filter: 'none' })
      return
    }

    // Note: we intentionally never animate opacity from 0. The element stays
    // fully opaque at all times — only position/blur transform — so content
    // is never fully invisible even if ScrollTrigger fails to fire.
    const from: gsap.TweenVars = {
      duration: 1,
      delay,
      ease: 'power3.out',
    }

    if (blur) from.filter = 'blur(10px)'
    if (direction === 'up') from.y = 60
    else if (direction === 'down') from.y = -60
    else if (direction === 'left') from.x = 60
    else if (direction === 'right') from.x = -60

    const to: gsap.TweenVars = {
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      duration: 1,
      delay,
      ease: 'power3.out',
    }

    gsap.set(el, from)

    let played = false
    const play = () => {
      if (played) return
      played = true
      gsap.to(el, to)
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: play,
    })

    // Safety net: if ScrollTrigger never fires (e.g. it errors, or the
    // element is already in view in a way ScrollTrigger misses), force the
    // reveal after a short delay so content can't get stuck mid-transform.
    const fallback = window.setTimeout(play, 2500)

    return () => {
      trigger.kill()
      window.clearTimeout(fallback)
    }
  }, [delay, direction, blur])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}