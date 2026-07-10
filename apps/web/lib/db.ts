import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), '.data', 'teambir.db')

fs.mkdirSync(path.dirname(DB_PATH), { recursive: true })

let db: Database.Database | null = null

function getDb(): Database.Database {
  if (db) return db
  db = new Database(DB_PATH)
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
  return db
}

export interface LeadRow {
  id: number
  created_at: string
  source: string
  department: string | null
  property_type: string | null
  location: string | null
  timeline: string | null
  budget: string | null
  name: string | null
  message: string | null
  phone: string | null
  email: string
  status: string
  ai_summary: string | null
}

export interface NewLead {
  source: 'lead' | 'contact'
  department?: string | null
  property_type?: string | null
  location?: string | null
  timeline?: string | null
  budget?: string | null
  name?: string | null
  message?: string | null
  phone?: string | null
  email: string
  created_at?: string
}

export function insertLead(row: NewLead): number {
  const stmt = getDb().prepare(`
    INSERT INTO leads (source, department, property_type, location, timeline, budget, name, message, phone, email${row.created_at ? ', created_at' : ''})
    VALUES (@source, @department, @property_type, @location, @timeline, @budget, @name, @message, @phone, @email${row.created_at ? ', @created_at' : ''})
  `)
  const result = stmt.run({
    source: row.source,
    department: row.department ?? null,
    property_type: row.property_type ?? null,
    location: row.location ?? null,
    timeline: row.timeline ?? null,
    budget: row.budget ?? null,
    name: row.name ?? null,
    message: row.message ?? null,
    phone: row.phone ?? null,
    email: row.email,
    ...(row.created_at ? { created_at: row.created_at } : {}),
  })
  return Number(result.lastInsertRowid)
}

export function listLeads(): LeadRow[] {
  return getDb().prepare('SELECT * FROM leads ORDER BY id DESC LIMIT 500').all() as LeadRow[]
}

export function getLead(id: number): LeadRow | undefined {
  return getDb().prepare('SELECT * FROM leads WHERE id = ?').get(id) as LeadRow | undefined
}

export function updateLead(id: number, patch: { department?: string; status?: string; ai_summary?: string }): LeadRow | undefined {
  const fields = Object.keys(patch)
  if (fields.length === 0) return getLead(id)
  const set = fields.map((f) => `${f} = @${f}`).join(', ')
  getDb().prepare(`UPDATE leads SET ${set} WHERE id = @id`).run({ ...patch, id })
  return getLead(id)
}

export function deleteLead(id: number): boolean {
  return getDb().prepare('DELETE FROM leads WHERE id = ?').run(id).changes > 0
}

export function insertPageView(path: string, referrer: string | null, createdAt?: string): void {
  if (createdAt) {
    getDb().prepare('INSERT INTO page_views (path, referrer, created_at) VALUES (?, ?, ?)').run(path, referrer, createdAt)
  } else {
    getDb().prepare('INSERT INTO page_views (path, referrer) VALUES (?, ?)').run(path, referrer)
  }
}

export function trafficStats(): { daily: { day: string; count: number }[]; topPages: { path: string; count: number }[]; totalViews30d: number } {
  const daily = getDb()
    .prepare(`
      SELECT date(created_at) AS day, COUNT(*) AS count
      FROM page_views
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY day ORDER BY day ASC
    `)
    .all() as { day: string; count: number }[]
  const topPages = getDb()
    .prepare(`
      SELECT path, COUNT(*) AS count
      FROM page_views
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY path ORDER BY count DESC LIMIT 10
    `)
    .all() as { path: string; count: number }[]
  const totalViews30d = daily.reduce((sum, d) => sum + d.count, 0)
  return { daily, topPages, totalViews30d }
}
