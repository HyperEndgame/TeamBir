import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message, _hp } = await request.json()

    if (_hp) return NextResponse.json({ success: true })

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ success: true })
    }

    const companyLabel =
      company === 'materials' ? 'BIR Materials' :
      company === 'luxury' ? 'BIR Luxury Landing' :
      company === 'transport' ? 'BIR Transport' :
      company === 'developments' ? 'BIR Developments' :
      company === 'travel' ? 'BIR Travel Plaza' :
      'Team BIR (General)'

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
          .message-box { background: #f9f9f9; border-left: 3px solid #C4A44A; padding: 16px; border-radius: 4px; margin-top: 8px; }
          .footer { background: #f4f4f4; padding: 16px 24px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>TEAM BIR — New Contact Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${esc(name)}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${esc(email)}" style="color: #C4A44A;">${esc(email)}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value">${esc(phone)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="field-label">Company</div>
              <div class="field-value">${companyLabel}</div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${esc(message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            Sent via teambir.com contact form &bull; ${new Date().toLocaleString()}
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
      from: `"Team BIR Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || 'zectronempire@gmail.com',
      subject: `New Contact Inquiry — ${esc(name)} (${companyLabel})`,
      html: emailHtml,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
