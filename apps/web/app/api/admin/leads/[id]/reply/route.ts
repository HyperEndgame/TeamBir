import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getLead, updateLead } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const lead = getLead(id)
  if (!Number.isInteger(id) || !lead) {
    return NextResponse.json({ error: 'Lead not found.' }, { status: 404 })
  }

  const { subject, body } = await request.json().catch(() => ({}))
  if (typeof subject !== 'string' || !subject.trim() || subject.length > 200 || /[\r\n]/.test(subject)) {
    return NextResponse.json({ error: 'A valid subject is required.' }, { status: 400 })
  }
  if (typeof body !== 'string' || !body.trim() || body.length > 5000) {
    return NextResponse.json({ error: 'A valid message is required.' }, { status: 400 })
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Team BIR" <${process.env.SMTP_USER}>`,
      to: lead.email,
      subject,
      html: `<p>${esc(body).replace(/\n/g, '<br>')}</p>`,
    })
  } catch (err) {
    console.error('Lead reply error:', err)
    return NextResponse.json({ error: 'Failed to send reply.' }, { status: 500 })
  }

  return NextResponse.json({ lead: updateLead(id, { status: 'replied' }) })
}
