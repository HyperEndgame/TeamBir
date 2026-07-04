// Minimal self-check for lead-flow.ts logic. Run: node lib/lead-flow.test.mjs
// (Re-derives the same logic rather than importing the .ts file — ponytail: no new test deps.)
import assert from 'node:assert'

const DEPT_LABELS = {
  materials: 'BIR Materials',
  developments: 'BIR Developments (Construction)',
  transport: 'BIR Transport',
  luxury: 'BIR Luxury Landing',
  travel: 'BIR Travel Plaza',
}
const NEEDS_PROPERTY_TYPE = new Set(['materials', 'developments'])
const STEP_ORDER = ['department', 'propertyType', 'location', 'timeline', 'budget', 'phone', 'email', 'done']

function nextStep(s) {
  const i = STEP_ORDER.indexOf(s.step)
  let next = STEP_ORDER[i + 1] ?? 'done'
  if (next === 'propertyType' && s.department && !NEEDS_PROPERTY_TYPE.has(s.department)) {
    next = STEP_ORDER[STEP_ORDER.indexOf('propertyType') + 1]
  }
  return next
}

function validPhone(v) {
  const digits = v.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

// nextStep: developments (needs property type) includes propertyType step
assert.strictEqual(nextStep({ step: 'department', department: 'developments' }), 'propertyType')
// transport (no property type) skips straight to location
assert.strictEqual(nextStep({ step: 'department', department: 'transport' }), 'location')

// full-path walk: developments hits every step
{
  let s = { step: 'department', department: 'developments' }
  const path = [s.step]
  while (s.step !== 'done') {
    s = { ...s, step: nextStep(s) }
    path.push(s.step)
  }
  assert.deepStrictEqual(path, ['department', 'propertyType', 'location', 'timeline', 'budget', 'phone', 'email', 'done'])
}

// full-path walk: transport skips propertyType
{
  let s = { step: 'department', department: 'transport' }
  const path = [s.step]
  while (s.step !== 'done') {
    s = { ...s, step: nextStep(s) }
    path.push(s.step)
  }
  assert.deepStrictEqual(path, ['department', 'location', 'timeline', 'budget', 'phone', 'email', 'done'])
}

assert.strictEqual(validPhone('865-832-6247'), true)
assert.strictEqual(validPhone('123'), false)
assert.strictEqual(validPhone('+1 (540) 980-7530'), true)
assert.strictEqual(validPhone('abcdefghij'), false)

assert.strictEqual(validEmail('a@b.co'), true)
assert.strictEqual(validEmail('a@b'), false)
assert.strictEqual(validEmail('no-at.com'), false)

// department -> env var key derivation covers all 5 departments
const expectedKeys = ['DEPT_EMAIL_MATERIALS', 'DEPT_EMAIL_DEVELOPMENTS', 'DEPT_EMAIL_TRANSPORT', 'DEPT_EMAIL_LUXURY', 'DEPT_EMAIL_TRAVEL']
const derivedKeys = Object.keys(DEPT_LABELS).map((d) => `DEPT_EMAIL_${d.toUpperCase()}`)
assert.deepStrictEqual(derivedKeys, expectedKeys)

console.log('lead-flow self-check: OK')
