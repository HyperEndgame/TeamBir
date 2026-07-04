import { NextRequest, NextResponse } from 'next/server'
import { SYSTEM_PROMPT } from '@/lib/chatbot-knowledge'
import { complete } from '@/lib/openrouter'

export const runtime = 'nodejs'

const FALLBACK_REPLY = "I'm having trouble connecting right now. Please try again shortly, or reach us directly via the Contact page."

// ponytail: in-memory single-instance fixed-window limiter. Fine for one
// Railway replica; move to Redis (INCR + TTL) if the app scales to >1 instance.
const WINDOW_MS = 5 * 60 * 1000
const MAX_REQUESTS = 15
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_REQUESTS
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

function sanitize(messages: unknown): ChatMessage[] | null {
  if (!Array.isArray(messages) || messages.length === 0) return null
  const cleaned: ChatMessage[] = []
  for (const m of messages) {
    if (!m || typeof m !== 'object') continue
    const role = (m as { role?: unknown }).role
    const content = (m as { content?: unknown }).content
    if (role !== 'user' && role !== 'assistant') continue
    if (typeof content !== 'string') continue
    cleaned.push({ role, content })
  }
  if (cleaned.length === 0) return null
  const last = cleaned.length - 1
  cleaned[last] = { ...cleaned[last], content: cleaned[last].content.slice(0, 1000) }
  return cleaned.slice(-12)
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please wait a few minutes and try again.' }, { status: 429 })
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ reply: FALLBACK_REPLY })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const messages = sanitize((body as { messages?: unknown })?.messages)
  if (!messages) {
    return NextResponse.json({ error: 'messages must be a non-empty array of { role, content }.' }, { status: 400 })
  }

  const payload = [{ role: 'system' as const, content: SYSTEM_PROMPT }, ...messages]
  const reply = await complete(payload)
  return NextResponse.json({ reply: reply ?? FALLBACK_REPLY })
}
