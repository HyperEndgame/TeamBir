// Usage: node scripts/hash-password.mjs <password>
// Prints the ADMIN_PASSWORD_HASH value to set in Railway / .env.local.
import { scryptSync, randomBytes } from 'node:crypto'

const plain = process.argv[2]
if (!plain) {
  console.error('Usage: node scripts/hash-password.mjs <password>')
  process.exit(1)
}

const salt = randomBytes(16).toString('hex')
const hash = scryptSync(plain, salt, 64).toString('hex')
console.log(`${salt}:${hash}`)
