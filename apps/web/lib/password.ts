import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto'

const KEY_LEN = 64

export function hashPassword(plain: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(plain, salt, KEY_LEN).toString('hex')
  return `${salt}:${hash}`
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
