'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Props {
  siteName: string
}

export function ContactForm({ siteName }: Props) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-surface border border-accent/30 p-8 text-center">
        <p className="font-display text-3xl text-accent mb-2">Message Received</p>
        <p className="text-muted">Thank you — we'll be in touch shortly.</p>
        <p className="font-mono text-xs tracking-widest uppercase text-muted/50 mt-4">Demo mode — contact form integration pending</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">Name</label>
          <input required type="text" className="w-full bg-surface border border-border text-text px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
        </div>
        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">Email</label>
          <input required type="email" className="w-full bg-surface border border-border text-text px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">Phone</label>
        <input type="tel" className="w-full bg-surface border border-border text-text px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="+1 (___) ___-____" />
      </div>
      <div>
        <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">Message</label>
        <textarea required rows={5} className="w-full bg-surface border border-border text-text px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none" placeholder={`Tell ${siteName} how we can help...`} />
      </div>
      <Button type="submit" size="lg">Send Message</Button>
    </form>
  )
}
