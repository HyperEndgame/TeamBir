import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">404</p>
      <h1 className="font-display text-8xl tracking-wider text-text mb-4">Not Found</h1>
      <p className="text-muted text-lg mb-10">This page doesn't exist.</p>
      <Link href="/" className="font-mono text-xs tracking-widest uppercase text-accent hover:text-accent-h transition-colors">
        ← Back to Team BIR
      </Link>
    </main>
  )
}
