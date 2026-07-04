import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, verifyUsername } from '@/lib/password'
import { createSession, COOKIE_NAME } from '@/lib/session'

export const runtime = 'nodejs'

const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 5
const attempts = new Map<string, { count: number; resetAt: number }>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_ATTEMPTS
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many attempts. Please wait and try again.' }, { status: 429 })
  }

  const { username, password } = await request.json().catch(() => ({}))
  const validUsername = typeof username === 'string' && verifyUsername(username)
  const validPassword = typeof password === 'string' && (await verifyPassword(password))
  if (!validUsername || !validPassword) {
    return NextResponse.json({ error: 'Incorrect username or password.' }, { status: 401 })
  }

  const session = await createSession()
  const res = NextResponse.json({ success: true })
  res.cookies.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  })
  return res
}
