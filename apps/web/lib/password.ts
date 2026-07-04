import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto'

const KEY_LEN = 64

export function hashPassword(plain: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(plain, salt, KEY_LEN).toString('hex')
  return `${salt}:${hash}`
}

export function verifyUsername(plain: string): boolean {
  const expected = process.env.ADMIN_USERNAME
  if (!expected) return false
  const pad = (s: string) => Buffer.from(s.slice(0, 128).padEnd(128, '\0'))
  const lengthMatches = plain.length === expected.length
  const bytesMatch = timingSafeEqual(pad(plain), pad(expected))
  return lengthMatches && bytesMatch
}

export async function verifyPassword(plain: string): Promise<boolean> {
  const stored = process.env.ADMIN_PASSWORD_HASH
  if (!stored) return false
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(plain, salt, KEY_LEN)
  const expected = Buffer.from(hash, 'hex')
  if (candidate.length !== expected.length) return false
  return timingSafeEqual(candidate, expected)
}
