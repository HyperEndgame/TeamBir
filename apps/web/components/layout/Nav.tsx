'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import type { SiteConfig } from '@/lib/site-config'

interface Props {
  config: SiteConfig
  logoHref?: string
}

export function Nav({ config, logoHref = '/' }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    )}>
      <div className="container-site flex items-center justify-between h-16">
        <Link href={logoHref} className="font-display text-2xl tracking-widest text-text hover:text-accent transition-colors">
          {config.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {config.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-mono tracking-widest uppercase text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted hover:text-text p-2"
          aria-label="Toggle menu"
        >
          <span className={clsx('block w-6 h-0.5 bg-current transition-all', open && 'rotate-45 translate-y-1.5')} />
          <span className={clsx('block w-6 h-0.5 bg-current my-1.5 transition-all', open && 'opacity-0')} />
          <span className={clsx('block w-6 h-0.5 bg-current transition-all', open && '-rotate-45 -translate-y-1.5')} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={clsx(
        'md:hidden bg-bg/95 backdrop-blur-md border-b border-border overflow-hidden transition-all duration-300',
        open ? 'max-h-96 py-4' : 'max-h-0'
      )}>
        <ul className="container-site flex flex-col gap-4">
          {config.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
