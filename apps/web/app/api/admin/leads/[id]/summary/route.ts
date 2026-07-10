import { NextRequest, NextResponse } from 'next/server'
import { getLead, updateLead } from '@/lib/db'
import { complete } from '@/lib/anthropic'
import { DEPT_LABELS, type Dept } from '@/lib/lead-flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const trunc = (v: string | null, n = 500) => (v ?? '').slice(0, n)

export async function POST(_request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const lead = getLead(id)
  if (!Number.isInteger(id) || !lead) {
    return NextResponse.json({ error: 'Lead not found.' }, { status: 404 })
  }

  if (lead.ai_summary) {
    return NextResponse.json({ summary: lead.ai_summary })
  }

  const deptLabel = lead.department && lead.department in DEPT_LABELS ? DEPT_LABELS[lead.department as Dept] : (lead.department ?? 'n/a')
  const userContent = [
    `Department: ${deptLabel}`,
    `Property type: ${trunc(lead.property_type) || 'n/a'}`,
    `Location: ${trunc(lead.location) || 'n/a'}`,
    `Timeline: ${trunc(lead.timeline) || 'n/a'}`,
    `Budget: ${trunc(lead.budget) || 'n/a'}`,
    `Message: ${trunc(lead.message) || 'n/a'}`,
  ].join('\n')

  const summary = await complete([
    {
      role: 'system',
      content: 'You summarize inbound business leads for Team BIR staff. Reply with 1-2 plain sentences: what they need, where, urgency, and budget signal. No preamble.',
    },
    { role: 'user', content: userContent },
  ], 150)

  if (!summary) {
    return NextResponse.json({ error: 'Could not generate a summary right now.' }, { status: 503 })
  }

  updateLead(id, { ai_summary: summary })
  return NextResponse.json({ summary })
}
