import { useState, useEffect } from 'react'

interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(targetDate: Date): CountdownValues {
  const [values, setValues] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calc = () => {
      const now = Date.now()
      const diff = Math.max(0, targetDate.getTime() - now)
      setValues({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calc()
    const interval = setInterval(calc, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return values
}