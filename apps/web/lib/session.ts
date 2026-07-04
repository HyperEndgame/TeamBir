export const COOKIE_NAME = 'bir_session'

const SESSION_MS = 7 * 24 * 60 * 60 * 1000

function b64url(bytes: ArrayBuffer): string {
  let binary = ''
  for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function hmacKey(): Promise<CryptoKey> {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error('SESSION_SECRET is not set')
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
}

async function sign(payload: string): Promise<string> {
  const key = await hmacKey()
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return b64url(sig)
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function createSession(): Promise<string> {
  const expiry = String(Date.now() + SESSION_MS)
  const sig = await sign(expiry)
  return `${expiry}.${sig}`
}

export async function verifySession(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false
  const [expiry, sig] = cookieValue.split('.')
  if (!expiry || !sig) return false
  if (Date.now() > Number(expiry)) return false
  const expected = await sign(expiry)
  return timingSafeEqual(sig, expected)
}
