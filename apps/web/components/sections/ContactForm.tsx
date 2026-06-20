'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Props { siteName: string }

export function ContactForm({ siteName }: Props) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="border border-accent/30 p-12 text-center" style={{ background: 'rgba(196,164,74,0.04)' }}>
        <div className="gold-line mb-8" />
        <p className="font-display text-4xl text-white tracking-wider uppercase mb-3" style={{ fontWeight: 800 }}>Message Received</p>
        <p className="font-body text-white/50 mb-2">Thank you — we will be in touch shortly.</p>
        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mt-6">Demo mode — form integration pending</p>
      </div>
    )
  }

  const inputCls = 'w-full bg-transparent border border-white/10 text-white font-body text-sm px-5 py-4 focus:outline-none focus:border-accent/60 transition-colors placeholder:text-white/25'

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Name</label>
          <input required type="text" className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Email</label>
          <input required type="email" className={inputCls} placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Phone</label>
        <input type="tel" className={inputCls} placeholder="+1 (___) ___-____" />
      </div>
      <div>
        <label className="block font-mono text-[0.6rem] tracking-[0.25em] uppercase text-accent/70 mb-2">Which company?</label>
        <select className={inputCls + ' cursor-pointer'} style={{ appearance: 'none', WebkitAppearance: 'none' }}>
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
        <textarea required rows={5} className={inputCls + ' resize-none'} placeholder="How can we help?" />
      </div>
      <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
    </form>
  )
}
