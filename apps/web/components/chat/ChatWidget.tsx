'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { parseNavigation } from '@/lib/chatbot-knowledge'

interface Msg {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME: Msg = {
  role: 'assistant',
  content: "Hi! I'm the Team BIR assistant. Ask me about our companies, careers, or how to get in touch.",
}

const MAX_INPUT = 1000

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
  const router = useRouter()
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
      const { text: cleaned, path } = parseNavigation(data.reply)
      setMessages((m) => [...m, { role: 'assistant', content: cleaned }])
      if (path) {
        setTimeout(() => go(router, path), 700)
      }
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

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
              <p className="font-display tracking-wider text-text">Team BIR Assistant</p>
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
            </div>

            <div className="flex items-center gap-2 p-3 border-t border-border">
              <input
                ref={inputRef}
                value={input}
                maxLength={MAX_INPUT}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about Team BIR..."
                className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm font-body text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
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

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center shadow-[0_4px_20px_rgba(232,176,32,0.4)] hover:bg-accent-h hover:scale-105 transition-all duration-200"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
        </svg>
      </button>
    </div>
  )
}
