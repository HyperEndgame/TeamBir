import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BIR Fleet Services — Coming Soon',
}

export default function FleetPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent/80 mb-6">BIR Fleet Services</p>
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] text-white leading-none" style={{ fontWeight: 800 }}>
          Coming Soon.
        </h1>
      </div>
    </main>
  )
}
