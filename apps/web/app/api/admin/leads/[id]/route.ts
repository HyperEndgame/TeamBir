import { NextRequest, NextResponse } from 'next/server'
import { getLead, updateLead, deleteLead } from '@/lib/db'
import { validDept } from '@/lib/lead-flow'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const STATUSES = new Set(['new', 'replied', 'closed'])

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (!Number.isInteger(id) || !getLead(id)) {
    return NextResponse.json({ error: 'Lead not found.' }, { status: 404 })
  }

  const { department, status } = await request.json().catch(() => ({}))
  const patch: { department?: string; status?: string } = {}

  if (department !== undefined) {
    if (typeof department !== 'string' || !validDept(department)) {
      return NextResponse.json({ error: 'Invalid department.' }, { status: 400 })
    }
    patch.department = department
  }
  if (status !== undefined) {
    if (typeof status !== 'string' || !STATUSES.has(status)) {
      return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
    }
    patch.status = status
  }
  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ error: 'Nothing to update.' }, { status: 400 })
  }

  return NextResponse.json({ lead: updateLead(id, patch) })
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (!Number.isInteger(id) || !deleteLead(id)) {
    return NextResponse.json({ error: 'Lead not found.' }, { status: 404 })
  }
  return NextResponse.json({ ok: true })
}
