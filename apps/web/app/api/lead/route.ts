import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { DEPT_LABELS, NEEDS_PROPERTY_TYPE, validPhone, validEmail, type Dept } from '@/lib/lead-flow'
import { insertLead } from '@/lib/db'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { department, propertyType, location, timeline, budget, phone, email, _hp } = body ?? {}

    if (_hp) return NextResponse.json({ success: true })

    if (!department || !(department in DEPT_LABELS)) {
      return NextResponse.json({ error: 'Invalid department.' }, { status: 400 })
    }
    const dept = department as Dept
    if (NEEDS_PROPERTY_TYPE.has(dept) && propertyType !== 'commercial' && propertyType !== 'residential') {
      return NextResponse.json({ error: 'Property type is required for this department.' }, { status: 400 })
    }
    if (typeof location !== 'string' || !location.trim() || location.length > 120) {
      return NextResponse.json({ error: 'A valid location is required.' }, { status: 400 })
    }
    if (typeof timeline !== 'string' || !timeline.trim()) {
      return NextResponse.json({ error: 'Timeline is required.' }, { status: 400 })
    }
    if (typeof budget !== 'string' || !budget.trim()) {
      return NextResponse.json({ error: 'Budget is required.' }, { status: 400 })
    }
    if (typeof phone !== 'string' || !validPhone(phone)) {
      return NextResponse.json({ error: 'A valid phone number is required.' }, { status: 400 })
    }
    if (typeof email !== 'string' || !validEmail(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
    }

    insertLead({
      source: 'lead',
      department: dept,
      property_type: propertyType ?? null,
      location,
      timeline,
      budget,
      phone,
      email,
    })

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ success: true })
    }

    const deptLabel = DEPT_LABELS[dept]
    const to = process.env[`DEPT_EMAIL_${dept.toUpperCase()}`] || process.env.CONTACT_TO_EMAIL || 'zectronempire@gmail.com'

    const field = (label: string, value: string) => `
      <div class="field">
        <div class="field-label">${esc(label)}</div>
        <div class="field-value">${esc(value)}</div>
      </div>`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
          .header { background: #0B1F2A; padding: 24px; }
          .header h1 { margin: 0; color: #C4A44A; font-size: 20px; font-weight: 700; letter-spacing: 1px; }
          .content { padding: 32px 24px; }
          .field { margin-bottom: 20px; }
          .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #222; }
          .footer { background: #f4f4f4; padding: 16px 24px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>TEAM BIR — New Lead (${esc(deptLabel)})</h1>
          </div>
          <div class="content">
            ${field('Department', deptLabel)}
            ${propertyType ? field('Property Type', propertyType) : ''}
            ${field('Location', location)}
            ${field('Timeline', timeline)}
            ${field('Budget', budget)}
            ${field('Phone', phone)}
            ${field('Email', email)}
          </div>
          <div class="footer">
            Sent via teambir.com lead assistant &bull; ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Team BIR Lead Assistant" <${process.env.SMTP_USER}>`,
      to,
      subject: `New Lead — ${deptLabel} (${esc(email)})`,
      html: emailHtml,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Lead form error:', err)
    return NextResponse.json({ error: 'Failed to submit lead. Please try again later.' }, { status: 500 })
  }
}
