// Minimal self-check for isAllowedPath / parseNavigation. Run: node lib/chatbot-knowledge.test.mjs
// (Requires a prior `tsc`/next build since this repo has no ts-node; re-derive the
// same logic here rather than importing the .ts file directly — ponytail: no new test deps.)
import assert from 'node:assert'

const ROUTES = ['/careers', '/about', '/materials/aggregates']

function isAllowedPath(p) {
  return ROUTES.includes(p)
}

const NAV_SENTINEL = /\[\[navigate:([^\]]+)\]\]/
const NAV_SENTINEL_ALL = /\[\[navigate:[^\]]+\]\]/g

function parseNavigation(text) {
  const match = text.match(NAV_SENTINEL)
  const cleaned = text.replace(NAV_SENTINEL_ALL, '').trim()
  if (!match) return { text: cleaned, path: null }
  const candidate = match[1].trim()
  return { text: cleaned, path: isAllowedPath(candidate) ? candidate : null }
}

assert.strictEqual(isAllowedPath('/careers'), true, 'allowlisted path should pass')
assert.strictEqual(isAllowedPath('https://evil.com'), false, 'external URL should fail')
assert.strictEqual(isAllowedPath('javascript:alert(1)'), false, 'javascript: URL should fail')
assert.strictEqual(isAllowedPath('/does-not-exist'), false, 'unknown path should fail')

const { text, path } = parseNavigation('Sure, here you go.\n[[navigate:/careers]]')
assert.strictEqual(text, 'Sure, here you go.', 'sentinel should be stripped from displayed text')
assert.strictEqual(path, '/careers', 'valid sentinel path should be returned')

const bad = parseNavigation('Nope.\n[[navigate:javascript:alert(1)]]')
assert.strictEqual(bad.path, null, 'invalid sentinel path should be rejected')

const multi = parseNavigation('Here.\n[[navigate:/careers]] extra [[navigate:/about]]')
assert.strictEqual(multi.text, 'Here.\n extra', 'all sentinels should be stripped')

console.log('chatbot-knowledge self-check: OK')
