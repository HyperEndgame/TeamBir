'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { parseNavigation, parseLead } from '@/lib/chatbot-knowledge'
import {
  DEPT_CHOICES,
  DEPT_LABELS,
  TIMELINE_CHOICES,
  BUDGET_CHOICES,
  nextStep,
  promptFor,
  validPhone,
  validEmail,
  type LeadState,
  type LeadStep,
} from '@/lib/lead-flow'

interface Msg {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME: Msg = {
  role: 'assistant',
  content: "Hi! I'm EagleBot, the Team BIR assistant. Ask me about our companies, careers, or how to get in touch.",
}

const MAX_INPUT = 1000

const FREE_TEXT_STEPS: ReadonlySet<LeadStep> = new Set(['location', 'phone', 'email'])

const STEP_PLACEHOLDER: Partial<Record<LeadStep, string>> = {
  location: 'City / area…',
  phone: 'Your phone number…',
  email: 'Your email address…',
}

function go(router: ReturnType<typeof useRouter>, path: string) {
  if (path.startsWith('http')) {
    window.location.href = path
  } else {
    router.push(path)
  }
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [lead, setLead] = useState<LeadState | null>(null)
  const [leadError, setLeadError] = useState('')
  const [hp, setHp] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [messages, loading])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  async function send() {
    const text = input.trim().slice(0, MAX_INPUT)
    if (!text || loading) return
    const next = [...messages, { role: 'user' as const, content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      if (res.status === 429) {
        const data = await res.json().catch(() => ({}))
        setMessages((m) => [...m, { role: 'assistant', content: data.error || 'Too many messages — please wait a bit.' }])
        return
      }
      const data = await res.json()
      if (!res.ok || !data.reply) {
        setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
        return
      }
      const { text: navCleaned, path } = parseNavigation(data.reply)
      const { text: cleaned, lead: triggerLead } = parseLead(navCleaned)
      setMessages((m) => [...m, { role: 'assistant', content: cleaned }])
      if (path) {
        setTimeout(() => go(router, path), 700)
      }
      if (triggerLead) startLead()
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  function startLead() {
    const state: LeadState = { step: 'department' }
    setLead(state)
    setLeadError('')
    setMessages((m) => [...m, { role: 'assistant', content: promptFor('department', state) }])
  }

  async function submitLead(state: LeadState) {
    setLoading(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, _hp: hp }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMessages((m) => [...m, { role: 'assistant', content: data.error || 'Something went wrong submitting your request. Please try again.' }])
        return
      }
      setMessages((m) => [...m, { role: 'assistant', content: promptFor('done', state) }])
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong submitting your request. Please try again.' }])
    } finally {
      setLoading(false)
      setLead(null)
    }
  }

  function advanceLead(patch: Partial<LeadState>) {
    if (!lead) return
    const merged: LeadState = { ...lead, ...patch }
    const step = nextStep(merged)
    merged.step = step
    setLeadError('')
    if (step === 'done') {
      setMessages((m) => [...m, { role: 'assistant', content: `Got it, thanks!` }])
      submitLead(merged)
      return
    }
    setLead(merged)
    setMessages((m) => [...m, { role: 'assistant', content: promptFor(step, merged) }])
  }

  function chooseLead(field: 'department' | 'propertyType', value: string) {
    if (!lead) return
    setMessages((m) => [...m, { role: 'user', content: value }])
    if (field === 'department') advanceLead({ department: value as LeadState['department'] })
    else advanceLead({ propertyType: value as LeadState['propertyType'] })
  }

  function submitLeadField() {
    if (!lead) return
    const value = input.trim()
    if (!value) return
    if (lead.step === 'phone' && !validPhone(value)) {
      setLeadError('Please enter a valid phone number.')
      return
    }
    if (lead.step === 'email' && !validEmail(value)) {
      setLeadError('Please enter a valid email address.')
      return
    }
    if (lead.step === 'location' && value.length > 120) {
      setLeadError('Location must be 120 characters or less.')
      return
    }
    setInput('')
    setMessages((m) => [...m, { role: 'user', content: value }])
    advanceLead({ [lead.step]: value } as Partial<LeadState>)
  }

  if (pathname?.startsWith('/admin')) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="w-[92vw] max-w-[360px] h-[500px] max-h-[75vh] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <Image src="/images/eaglebot-logo.png" alt="" width={22} height={22} />
                <p className="font-display tracking-wider text-text">EagleBot</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-muted hover:text-text transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={clsx(
                    'text-sm font-body max-w-[85%] px-3 py-2 rounded-xl',
                    m.role === 'user'
                      ? 'ml-auto bg-accent text-bg'
                      : 'bg-white/[0.06] text-text'
                  )}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="bg-white/[0.06] text-text max-w-[60px] px-3 py-2 rounded-xl flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse [animation-delay:0.3s]" />
                </div>
              )}
              {leadError && <div className="text-xs text-red-400 font-body">{leadError}</div>}
              {!lead && messages.length === 1 && (
                <button
                  onClick={startLead}
                  className="text-sm font-body px-3 py-2 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                >
                  Request a quote
                </button>
              )}
              {lead && lead.step === 'department' && (
                <div className="flex flex-wrap gap-2">
                  {DEPT_CHOICES.map((d) => (
                    <button
                      key={d}
                      onClick={() => chooseLead('department', d)}
                      className="text-sm font-body px-3 py-2 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                    >
                      {DEPT_LABELS[d]}
                    </button>
                  ))}
                </div>
              )}
              {lead && lead.step === 'propertyType' && (
                <div className="flex flex-wrap gap-2">
                  {(['commercial', 'residential'] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => chooseLead('propertyType', v)}
                      className="text-sm font-body px-3 py-2 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 transition-colors capitalize"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}
              {lead && lead.step === 'timeline' && (
                <div className="flex flex-wrap gap-2">
                  {TIMELINE_CHOICES.map((v) => (
                    <button
                      key={v}
                      onClick={() => { setMessages((m) => [...m, { role: 'user', content: v }]); advanceLead({ timeline: v }) }}
                      className="text-sm font-body px-3 py-2 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}
              {lead && lead.step === 'budget' && (
                <div className="flex flex-wrap gap-2">
                  {BUDGET_CHOICES.map((v) => (
                    <button
                      key={v}
                      onClick={() => { setMessages((m) => [...m, { role: 'user', content: v }]); advanceLead({ budget: v }) }}
                      className="text-sm font-body px-3 py-2 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 transition-colors"
                    >
                      {v}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 p-3 border-t border-border">
              <input
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <input
                ref={inputRef}
                value={input}
                maxLength={MAX_INPUT}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (lead ? submitLeadField() : send())}
                disabled={!!lead && !FREE_TEXT_STEPS.has(lead.step)}
                placeholder={lead ? STEP_PLACEHOLDER[lead.step] ?? '' : 'Ask about Team BIR...'}
                className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm font-body text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-40"
              />
              <button
                onClick={() => (lead ? submitLeadField() : send())}
                disabled={loading || !input.trim() || (!!lead && !FREE_TEXT_STEPS.has(lead.step))}
                aria-label="Send message"
                className="bg-accent text-bg rounded-lg w-9 h-9 flex items-center justify-center hover:bg-accent-h transition-colors disabled:opacity-40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="relative bg-surface border border-accent/40 text-text text-sm font-display tracking-wide px-4 py-2 rounded-lg shadow-lg"
          >
            Need help?
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-surface border-r border-b border-accent/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-16 h-16">
        {!open && (
          <motion.span
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.45, 0], scale: [1, 1.35, 1.35] }}
            transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 2.4, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-accent"
          />
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open chat"
          animate={open ? { scale: 1 } : { scale: [1, 1.08, 1] }}
          transition={{ duration: 1.1, repeat: open ? 0 : Infinity, repeatDelay: 2.4, ease: 'easeInOut' }}
          className="relative w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_4px_28px_rgba(232,176,32,0.55)] hover:bg-accent-h hover:scale-105 transition-colors duration-200 overflow-hidden p-3"
        >
          <Image src="/images/eaglebot-logo-navy.png" alt="EagleBot" width={44} height={44} className="w-full h-full object-contain" />
        </motion.button>
      </div>
    </div>
  )
}
