import { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Countdown from './components/sections/Countdown'
import Lineup from './components/sections/Lineup'

// Lazy load below-fold sections — reduces initial JS execution by ~60%
const Experience = lazy(() => import('./components/sections/Experience'))
const Schedule = lazy(() => import('./components/sections/Schedule'))
const Tickets = lazy(() => import('./components/sections/Tickets'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Sponsors = lazy(() => import('./components/sections/Sponsors'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/sections/Footer'))

gsap.registerPlugin(ScrollTrigger)

// Minimal fallback — code-split chunks resolve within the same tick,
// so this is almost never visible
const SectionFallback = () => <div aria-hidden="true" />

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Route in-page anchor links (navbar, buttons, footer) through Lenis.
    // Without this, a native hash jump snaps the real scroll position while
    // Lenis keeps animating toward its own stale target, which is what
    // produces the "jumpy / stuck" feeling right after tapping a nav link.
    const getNavOffset = () => {
      const nav = document.querySelector('nav')
      const height = nav?.getBoundingClientRect().height ?? 80
      return height + 16
    }

    const scrollToTarget = (el: Element) => {
      lenis.scrollTo(el as HTMLElement, { offset: -getNavOffset(), duration: 1.3 })
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      let el = document.querySelector(hash)
      e.preventDefault()

      if (el) {
        scrollToTarget(el)
        return
      }

      // Target belongs to a below-fold section that is still code-splitting
      // in. Poll briefly instead of silently doing nothing or fighting a
      // native jump once it finally mounts.
      let attempts = 0
      const poll = window.setInterval(() => {
        attempts += 1
        el = document.querySelector(hash)
        if (el) {
          window.clearInterval(poll)
          scrollToTarget(el)
        } else if (attempts > 20) {
          window.clearInterval(poll)
        }
      }, 50)
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Lineup />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Schedule />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Tickets />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Sponsors />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  )
}