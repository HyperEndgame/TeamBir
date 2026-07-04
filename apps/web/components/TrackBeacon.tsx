'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function TrackBeacon() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith('/admin')) return
    const payload = JSON.stringify({ path: pathname, referrer: document.referrer })
    navigator.sendBeacon?.('/api/track', payload)
  }, [pathname])

  return null
}
