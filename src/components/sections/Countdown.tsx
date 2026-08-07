import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCountdown } from '../../hooks/useCountdown'
import { eventInfo } from '../../data/event'
import SectionReveal from '../SectionReveal'
import GlassCard from '../GlassCard'

const TARGET_DATE = new Date(eventInfo.startDate)

function CounterUnit({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const num = numRef.current
    if (!el || !num) return

    const obj = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            num.textContent = Math.floor(obj.val).toString().padStart(2, '0')
          },
        })
      },
    })
    return () => trigger.kill()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <GlassCard className="p-6 sm:p-8 min-w-[100px] sm:min-w-[130px]" glow="purple">
        <span ref={numRef} className="block font-clash text-4xl sm:text-5xl font-bold gradient-text">
          00
        </span>
        <span className="block mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
      </GlassCard>
    </div>
  )
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE)

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">
              The Countdown Has Begun
            </p>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold">
              Time Until{' '}
              <span className="gradient-text">Lift Off</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <CounterUnit value={days} label="Days" />
          <span className="hidden sm:block text-white/20 text-3xl font-light mt-[-1rem]">:</span>
          <CounterUnit value={hours} label="Hours" />
          <span className="hidden sm:block text-white/20 text-3xl font-light mt-[-1rem]">:</span>
          <CounterUnit value={minutes} label="Minutes" />
          <span className="hidden sm:block text-white/20 text-3xl font-light mt-[-1rem]">:</span>
          <CounterUnit value={seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}