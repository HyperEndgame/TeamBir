'use client'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type Mode = 'up' | 'left' | 'scale'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  mode?: Mode
}

const modeClass: Record<Mode, string> = {
  up: 'reveal',
  left: 'reveal-left',
  scale: 'reveal-scale',
}

export function ScrollReveal({ children, className, delay = 0, mode = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Only apply invisible-until-revealed after client mount
  // so SSR output is visible (accessibility + no-JS fallback)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [mounted])

  return (
    <div
      ref={ref}
      className={clsx(mounted && modeClass[mode], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
