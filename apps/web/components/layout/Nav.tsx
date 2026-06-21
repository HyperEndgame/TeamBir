'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Logo } from '@/components/ui/Logo'
import type { SiteConfig } from '@/lib/site-config'

interface Props {
  config: SiteConfig
  logoHref?: string
  pathPrefix?: string
}

export function Nav({ config, logoHref = '/', pathPrefix = '' }: Props) {
  const href = (h: string) => (pathPrefix && h.startsWith('/') ? pathPrefix + h : h)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Split nav: left links (site-specific) | right links (Businesses, About, Careers, Contact)
  const leftNav = config.nav.filter(n =>
    ['Services', 'Aggregates', 'Fill Dirt',
     'Crushing', 'Recycling', 'Duplexes', 'Apartments',
     'Condominiums', 'Amenities', 'Projects'].includes(n.label)
  )
  const rightNav = config.nav.filter(n =>
    ['Businesses', 'About', 'Careers', 'Contact', 'Location'].includes(n.label)
  )
  // Fallback: if split didn't work, put all in right
  const allRight = leftNav.length === 0

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-accent/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      )}
    >
      <div className="container-site flex items-center h-16 gap-8">
        {/* Logo */}
        {config.logoSrc ? (
          <Link href={logoHref} className="flex items-center">
            <Image src={config.logoSrc} alt={config.name} width={120} height={48} className="h-10 w-auto object-contain" style={{ maxHeight: '2.5rem', filter: 'invert(1) brightness(0.95)' }} />
          </Link>
        ) : (
          <Logo href={logoHref} />
        )}

        {/* Left nav links */}
        {!allRight && (
          <ul className="hidden md:flex items-center gap-6">
            {leftNav.map(item => (
              <li key={item.href}>
                <Link
                  href={href(item.href)}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200"
                  style={{ fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right nav */}
        <ul className="hidden md:flex items-center gap-6">
          {(allRight ? config.nav : rightNav).map((item, i) => {
            const isContact = item.label === 'Contact'
            return (
              <li key={item.href}>
                {isContact ? (
                  <Link
                    href={href(item.href)}
                    className="font-body text-sm px-5 py-2 bg-accent text-bg hover:bg-accent-h transition-all duration-200"
                    style={{ fontWeight: 600 }}
                  >
                    Contact
                  </Link>
                ) : (
                  <Link
                    href={href(item.href)}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 text-white/70 hover:text-white"
          aria-label="Menu"
        >
          <span className={clsx('block w-5 h-0.5 bg-current transition-all duration-300', open && 'rotate-45 translate-y-1.5')} />
          <span className={clsx('block w-5 h-0.5 bg-current my-1 transition-all duration-300', open && 'opacity-0')} />
          <span className={clsx('block w-5 h-0.5 bg-current transition-all duration-300', open && '-rotate-45 -translate-y-1.5')} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={clsx(
        'md:hidden glass border-t border-white/5 overflow-hidden transition-all duration-300',
        open ? 'max-h-80 py-5' : 'max-h-0'
      )}>
        <ul className="container-site flex flex-col gap-4">
          {config.nav.map(item => (
            <li key={item.href}>
              <Link
                href={href(item.href)}
                onClick={() => setOpen(false)}
                className="font-body text-sm text-white/70 hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
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
