'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Props { siteName: string }

export function ContactForm({ siteName }: Props) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fields, setFields] = useState({ name: '', email: '', phone: '', company: '', message: '' })

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _subject: `New contact from ${siteName}`, _hp: '', ...fields }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Unable to send message. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="border border-accent/30 p-12 text-center" style={{ background: 'rgba(196,164,74,0.04)' }}>
        <div className="gold-line mb-8" />
        <p className="font-display text-4xl text-white tracking-wider uppercase mb-3" style={{ fontWeight: 800 }}>Message Received</p>
        <p className="font-body text-white/50">Thank you — we will be in touch shortly.</p>
      </div>
    )
  }

  const inputCls = 'w-full bg-transparent border border-white/10 text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-accent/60 transition-colors placeholder:text-white/25'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot — hidden from real users, bots fill it */}
      <input type="text" name="_hp" tabIndex={-1} aria-hidden="true" className="hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Name</label>
          <input required type="text" className={inputCls} placeholder="Your name" value={fields.name} onChange={set('name')} />
        </div>
        <div>
          <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Email</label>
          <input required type="email" className={inputCls} placeholder="your@email.com" value={fields.email} onChange={set('email')} />
        </div>
      </div>
      <div>
        <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Phone</label>
        <input type="tel" className={inputCls} placeholder="+1 (___) ___-____" value={fields.phone} onChange={set('phone')} />
      </div>
      <div>
        <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Which company?</label>
        <select className={inputCls + ' cursor-pointer'} style={{ appearance: 'none', WebkitAppearance: 'none' }} value={fields.company} onChange={set('company')}>
          <option value="" style={{ background: '#0f1521' }}>Team BIR (General)</option>
          <option value="materials" style={{ background: '#0f1521' }}>BIR Materials</option>
          <option value="luxury" style={{ background: '#0f1521' }}>BIR Luxury Landing</option>
          <option value="transport" style={{ background: '#0f1521' }}>BIR Transport</option>
          <option value="developments" style={{ background: '#0f1521' }}>BIR Developments</option>
          <option value="travel" style={{ background: '#0f1521' }}>BIR Travel Plaza</option>
        </select>
      </div>
      <div>
        <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Message</label>
        <textarea required rows={5} className={inputCls + ' resize-none'} placeholder="How can we help?" value={fields.message} onChange={set('message')} />
      </div>
      {error && (
        <div className="border border-red-500/30 p-4 text-center" style={{ background: 'rgba(239,68,68,0.04)' }}>
          <p className="font-body text-sm text-red-400">{error}</p>
        </div>
      )}
      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
