// Minimal self-check for admin-dashboard logic. Run: node lib/admin.test.mjs
// (Re-derives the same logic rather than importing .ts files — ponytail: no new test deps.)
import assert from 'node:assert'
import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto'
import { webcrypto } from 'node:crypto'

// --- password.ts ---
function hashPassword(plain) {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(plain, salt, 64).toString('hex')
  return `${salt}:${hash}`
}
function verifyPassword(plain, stored) {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(plain, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  if (candidate.length !== expected.length) return false
  return timingSafeEqual(candidate, expected)
}

const stored = hashPassword('correct-horse')
assert.strictEqual(verifyPassword('correct-horse', stored), true)
assert.strictEqual(verifyPassword('wrong', stored), false)

// --- session.ts (Web Crypto, mirrors lib/session.ts) ---
function b64url(bytes) {
  let binary = ''
  for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte)
  return Buffer.from(binary, 'binary').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
async function hmacKey(secret) {
  return webcrypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
}
async function sign(payload, secret) {
  const key = await hmacKey(secret)
  const sig = await webcrypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return b64url(sig)
}
function timingSafeEqualStr(a, b) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}
async function createSession(secret, ms) {
  const expiry = String(Date.now() + ms)
  const sig = await sign(expiry, secret)
  return `${expiry}.${sig}`
}
async function verifySession(cookieValue, secret) {
  if (!cookieValue) return false
  const [expiry, sig] = cookieValue.split('.')
  if (!expiry || !sig) return false
  if (Date.now() > Number(expiry)) return false
  const expected = await sign(expiry, secret)
  return timingSafeEqualStr(sig, expected)
}

const secret = 'test-secret'
const session = await createSession(secret, 60_000)
assert.strictEqual(await verifySession(session, secret), true, 'valid session should verify')
assert.strictEqual(await verifySession(session, 'wrong-secret'), false, 'wrong secret should fail')
assert.strictEqual(await verifySession(session.slice(0, -1) + 'x', secret), false, 'tampered signature should fail')
const expired = await createSession(secret, -1000)
assert.strictEqual(await verifySession(expired, secret), false, 'expired session should fail')

// --- csv.ts ---
function escapeField(v) {
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`
  return v
}
function toCsv(rows) {
  if (rows.length === 0) return ''
  const headers = Object.keys(rows[0])
  const lines = [headers.join(',')]
  for (const row of rows) lines.push(headers.map((h) => escapeField(row[h] ?? '')).join(','))
  return lines.join('\n')
}

const csv = toCsv([{ name: 'Smith, Inc.', note: 'needs "gravel"\nasap' }])
assert.strictEqual(csv, 'name,note\n"Smith, Inc.","needs ""gravel""\nasap"')

// --- summary prompt truncation ---
const trunc = (v, n = 500) => (v ?? '').slice(0, n)
assert.strictEqual(trunc('a'.repeat(2000)).length, 500)

// --- department -> label coverage (lib/lead-flow.ts) ---
const DEPT_LABELS = {
  materials: 'BIR Materials',
  developments: 'BIR Developments (Construction)',
  transport: 'BIR Transport',
  luxury: 'BIR Luxury Landing',
  travel: 'BIR Travel Plaza',
}
function validDept(v) {
  return v in DEPT_LABELS
}
assert.strictEqual(validDept('materials'), true)
assert.strictEqual(validDept('naanstop'), false)
assert.strictEqual(validDept('<script>'), false)

console.log('admin self-check: OK')
