'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DEPT_CHOICES, DEPT_LABELS, type Dept } from '@/lib/lead-flow'
import { toCsv } from '@/lib/csv'

interface Lead {
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

interface Stats {
  daily: { day: string; count: number }[]
  topPages: { path: string; count: number }[]
  totalViews30d: number
}

function greeting(): string {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

const DEPT_COLORS: Record<Dept, string> = {
  materials: '#d4a94a',
  developments: '#4a90d4',
  transport: '#4ad48f',
  luxury: '#d44a8f',
  travel: '#a94ad4',
}

function DonutChart({ leads }: { leads: Lead[] }) {
  const total = leads.length
  const counts = DEPT_CHOICES.map((d) => ({ d, count: leads.filter((l) => l.department === d).length }))
  const withCounts = counts.filter((c) => c.count > 0)

  if (total === 0) return <p className="text-muted text-sm">No leads yet.</p>

  const r = 40
  const c = 2 * Math.PI * r
  let offset = 0

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <svg width="120" height="120" viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        {withCounts.map(({ d, count }) => {
          const frac = count / total
          const dash = frac * c
          const el = (
            <circle
              key={d}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={DEPT_COLORS[d]}
              strokeWidth="14"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
            />
          )
          offset += dash
          return el
        })}
      </svg>
      <div className="space-y-1.5">
        {withCounts.map(({ d, count }) => (
          <div key={d} className="flex items-center gap-2 text-sm font-body">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: DEPT_COLORS[d] }} />
            <span className="text-text">{DEPT_LABELS[d]}</span>
            <span className="text-muted font-mono text-xs">{count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso + 'Z').getTime()
  const mins = Math.floor(ms / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins} min${mins === 1 ? '' : 's'} ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`
  const days = Math.floor(hours / 24)
  if (days === 1) return 'yesterday'
  return `${days} days ago`
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [summaries, setSummaries] = useState<Record<number, string>>({})
  const [summaryLoading, setSummaryLoading] = useState<number | null>(null)
  const [replyFor, setReplyFor] = useState<Lead | null>(null)
  const router = useRouter()

  useEffect(() => {
    load()
  }, [])

  async function load() {
    setLoading(true)
    const [leadsRes, statsRes] = await Promise.all([fetch('/api/admin/leads'), fetch('/api/admin/stats')])
    const leadsData = await leadsRes.json().catch(() => ({ leads: [] }))
    const statsData = await statsRes.json().catch(() => null)
    setLeads(leadsData.leads ?? [])
    setStats(statsData)
    setLoading(false)
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  async function assignDept(id: number, department: Dept) {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, department } : l)))
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ department }),
    })
  }

  async function summarize(id: number) {
    setSummaryLoading(id)
    try {
      const res = await fetch(`/api/admin/leads/${id}/summary`, { method: 'POST' })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.summary) setSummaries((s) => ({ ...s, [id]: data.summary }))
    } finally {
      setSummaryLoading(null)
    }
  }

  function exportCsv() {
    const rows = leads.map((l) => ({
      id: String(l.id),
      created_at: l.created_at,
      source: l.source,
      department: l.department ?? '',
      property_type: l.property_type ?? '',
      location: l.location ?? '',
      timeline: l.timeline ?? '',
      budget: l.budget ?? '',
      name: l.name ?? '',
      phone: l.phone ?? '',
      email: l.email,
      status: l.status,
    }))
    const csv = toCsv(rows)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `teambir-leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const newLeads = leads.filter((l) => l.status === 'new')

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted font-body">{greeting()}, Mr. Singh</p>
          <h1 className="font-display text-2xl tracking-wider text-accent">Team BIR Admin</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={exportCsv} className="text-sm font-body px-3 py-2 rounded-lg border border-border text-text hover:border-accent transition-colors">
            Export CSV
          </button>
          <button onClick={logout} className="text-sm font-body px-3 py-2 rounded-lg border border-border text-muted hover:border-accent transition-colors">
            Log out
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-muted text-sm">Loading…</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatTile label="New Leads" value={String(newLeads.length)} />
            <StatTile label="Page Views (30d)" value={String(stats?.totalViews30d ?? 0)} />
            <StatTile label="Top Page" value={stats?.topPages[0]?.path ?? '—'} />
          </div>

          <div className="bg-surface border border-border rounded-2xl p-5">
            <p className="font-display tracking-wide text-text text-sm mb-3">Leads by Department</p>
            <DonutChart leads={leads} />
          </div>

          {stats && stats.daily.length > 0 && (
            <div className="bg-surface border border-border rounded-2xl p-5 space-y-2">
              <p className="font-display tracking-wide text-text text-sm mb-3">Traffic — last 30 days</p>
              {stats.daily.map((d) => {
                const max = Math.max(...stats.daily.map((x) => x.count), 1)
                return (
                  <div key={d.day} className="flex items-center gap-3 text-xs font-mono text-muted">
                    <span className="w-20 shrink-0">{d.day}</span>
                    <div className="flex-1 bg-white/[0.06] rounded h-3 overflow-hidden">
                      <div className="bg-accent h-full" style={{ width: `${(d.count / max) * 100}%` }} />
                    </div>
                    <span className="w-8 text-right">{d.count}</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="space-y-3">
            <h2 className="font-display text-lg tracking-wide text-text">Leads</h2>
            <div className="space-y-3">
              {leads.map((l) => (
                <div key={l.id} className="bg-surface border border-border rounded-2xl p-5 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-text tracking-wide">{l.name || l.email}</p>
                      <p className="text-xs text-muted font-mono">{timeAgo(l.created_at)} · {l.source}</p>
                    </div>
                    <span className="text-xs font-body px-2 py-1 rounded-full border border-accent/40 text-accent capitalize">{l.status}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-sm font-body">
                    <Field label="Location" value={l.location} />
                    <Field label="Timeline" value={l.timeline} />
                    <Field label="Budget" value={l.budget} />
                    <Field label="Phone" value={l.phone} />
                    <Field label="Email" value={l.email} />
                    <Field label="Property Type" value={l.property_type} />
                    <Field label="Message" value={l.message} />
                  </div>

                  {summaries[l.id] && (
                    <p className="text-sm text-accent-h bg-accent/10 rounded-lg px-3 py-2">{summaries[l.id]}</p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <select
                      value={l.department ?? ''}
                      onChange={(e) => assignDept(l.id, e.target.value as Dept)}
                      className="text-sm bg-bg border border-border rounded-lg px-2 py-1.5 text-text"
                    >
                      <option value="" disabled>Assign department…</option>
                      {DEPT_CHOICES.map((d) => (
                        <option key={d} value={d}>{DEPT_LABELS[d]}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => summarize(l.id)}
                      disabled={summaryLoading === l.id || !!l.ai_summary || !!summaries[l.id]}
                      className="text-sm px-3 py-1.5 rounded-lg border border-border text-text hover:border-accent transition-colors disabled:opacity-40"
                    >
                      {summaryLoading === l.id ? 'Summarizing…' : 'AI summary'}
                    </button>
                    <button
                      onClick={() => setReplyFor(l)}
                      className="text-sm px-3 py-1.5 rounded-lg bg-accent text-bg hover:bg-accent-h transition-colors"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ))}
              {leads.length === 0 && <p className="text-muted text-sm">No leads yet.</p>}
            </div>
          </div>
        </>
      )}

      {replyFor && <ReplyModal lead={replyFor} onClose={() => setReplyFor(null)} onSent={load} />}
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5">
      <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
      <p className="font-display text-2xl text-text mt-1">{value}</p>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string | null }) {
  if (!value) return null
  return (
    <div>
      <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
      <p className="text-text">{value}</p>
    </div>
  )
}

function ReplyModal({ lead, onClose, onSent }: { lead: Lead; onClose: () => void; onSent: () => void }) {
  const [subject, setSubject] = useState('Re: your inquiry with Team BIR')
  const [body, setBody] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function send() {
    setSending(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/leads/${lead.id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, body }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Failed to send.')
        return
      }
      onSent()
      onClose()
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-surface border border-border rounded-2xl p-6 space-y-3">
        <h3 className="font-display text-lg text-text">Reply to {lead.email}</h3>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-sm text-text"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={6}
          placeholder="Your message…"
          className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-muted"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-sm px-3 py-1.5 rounded-lg border border-border text-muted">Cancel</button>
          <button onClick={send} disabled={sending || !body.trim()} className="text-sm px-3 py-1.5 rounded-lg bg-accent text-bg disabled:opacity-40">
            {sending ? 'Sending…' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}
