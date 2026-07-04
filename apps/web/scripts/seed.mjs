// Usage: node scripts/seed.mjs [--force]
// Seeds demo leads + page views into the local dev DB. Refuses to run
// against a non-empty DB unless --force, so it can't pollute real lead data.
import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), '.data', 'teambir.db')
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })

const db = new Database(DB_PATH)
db.pragma('journal_mode = WAL')
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    source TEXT NOT NULL,
    department TEXT,
    property_type TEXT,
    location TEXT,
    timeline TEXT,
    budget TEXT,
    name TEXT,
    message TEXT,
    phone TEXT,
    email TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    ai_summary TEXT
  );
  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    path TEXT NOT NULL,
    referrer TEXT
  );
`)

const existingLeads = db.prepare('SELECT COUNT(*) AS n FROM leads').get().n
if (existingLeads > 0 && process.argv[2] !== '--force') {
  console.error(`Refusing to seed: leads table already has ${existingLeads} row(s). Pass --force to seed anyway.`)
  process.exit(1)
}

const daysAgo = (n) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 19).replace('T', ' ')

const leads = [
  { source: 'lead', department: 'developments', property_type: 'commercial', location: 'Knoxville, TN', timeline: 'ASAP', budget: '$50k–$250k', name: 'Smith Construction', email: 'smith.construction@example.com', phone: '8655551010', status: 'new', created_at: daysAgo(0.1) },
  { source: 'lead', department: 'transport', location: 'Oak Ridge, TN', timeline: '1–3 months', budget: '$10k–$50k', name: 'Johnson Excavation', email: 'johnson.excavation@example.com', phone: '8655552020', status: 'new', created_at: daysAgo(1) },
  { source: 'lead', department: 'materials', property_type: 'residential', location: 'Maryville, TN', timeline: '3–6 months', budget: '< $10k', name: 'Carter Homes', email: 'carter.homes@example.com', phone: '8655553030', status: 'replied', created_at: daysAgo(2) },
  { source: 'contact', location: 'Knoxville, TN', name: 'Riverside Apartments', message: 'Interested in a gravel delivery quote for our new lot.', email: 'riverside.apts@example.com', phone: '8655554040', status: 'new', created_at: daysAgo(3) },
  { source: 'lead', department: 'luxury', property_type: 'residential', location: 'Farragut, TN', timeline: '6+ months / planning', budget: '$250k+', name: 'Whitmore Estates', email: 'whitmore.estates@example.com', phone: '8655555050', status: 'new', created_at: daysAgo(4) },
  { source: 'lead', department: 'travel', location: 'Gatlinburg, TN', timeline: 'Not sure yet', budget: 'Not sure yet', name: 'Blue Ridge Cabins', email: 'blueridge.cabins@example.com', phone: '8655556060', status: 'closed', created_at: daysAgo(6) },
  { source: 'lead', department: 'developments', property_type: 'commercial', location: 'Alcoa, TN', timeline: 'ASAP', budget: '$250k+', name: 'Alcoa Retail Plaza', email: 'alcoa.retail@example.com', phone: '8655557070', status: 'new', created_at: daysAgo(8) },
  { source: 'lead', department: 'materials', property_type: 'commercial', location: 'Sevierville, TN', timeline: '1–3 months', budget: '$50k–$250k', name: 'Sevier County Paving', email: 'sevier.paving@example.com', phone: '8655558080', status: 'replied', created_at: daysAgo(10) },
  { source: 'lead', department: 'transport', location: 'Clinton, TN', timeline: '3–6 months', budget: '$10k–$50k', name: 'Clinton Freight Co', email: 'clinton.freight@example.com', phone: '8655559090', status: 'new', created_at: daysAgo(14) },
  { source: 'contact', location: 'Knoxville, TN', name: 'Ijams Nature Center', message: 'Asking about sponsorship for a community trail build.', email: 'ijams.center@example.com', phone: '8655550101', status: 'new', created_at: daysAgo(20) },
]

const insert = db.prepare(`
  INSERT INTO leads (created_at, source, department, property_type, location, timeline, budget, name, message, phone, email, status)
  VALUES (@created_at, @source, @department, @property_type, @location, @timeline, @budget, @name, @message, @phone, @email, @status)
`)
for (const l of leads) {
  insert.run({
    created_at: l.created_at,
    source: l.source,
    department: l.department ?? null,
    property_type: l.property_type ?? null,
    location: l.location ?? null,
    timeline: l.timeline ?? null,
    budget: l.budget ?? null,
    name: l.name ?? null,
    message: l.message ?? null,
    phone: l.phone ?? null,
    email: l.email,
    status: l.status,
  })
}

const pages = ['/', '/about', '/contact', '/materials', '/developments', '/transport', '/luxury', '/travel']
const insertView = db.prepare('INSERT INTO page_views (created_at, path, referrer) VALUES (?, ?, ?)')
for (let day = 0; day < 30; day++) {
  const viewsToday = 5 + Math.floor(Math.random() * 20)
  for (let i = 0; i < viewsToday; i++) {
    const p = pages[Math.floor(Math.random() * pages.length)]
    insertView.run(daysAgo(day + Math.random()), p, Math.random() < 0.3 ? 'https://google.com' : null)
  }
}

console.log(`Seeded ${leads.length} leads and demo page views into ${DB_PATH}`)
