import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIGS } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Naanstop — Coming Soon',
}

export default function NaanstopPage() {
  return (
    <>
      <Nav config={SITE_CONFIGS.main} />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent/80 mb-6">Naanstop</p>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] text-white leading-none" style={{ fontWeight: 800 }}>
            Coming Soon.
          </h1>
        </div>
      </main>
      <Footer config={SITE_CONFIGS.main} />
    </>
  )
}
