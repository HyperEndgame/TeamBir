import { SITE_CONFIGS } from '@/lib/site-config'
import { DEMO, siteUrl } from '@/lib/demo'

export interface NavRoute {
  path: string
  label: string
  keywords: string[]
}

// ponytail: subPath() from lib/demo returns a bare path in production (relative
// to whichever subdomain is already loaded) which collides across companies
// (every company has /contact). For a global nav list we need an absolute,
// unambiguous URL per company route in production, and the demo-prefixed
// path in demo mode. companyPath() builds that.
function companyPath(key: string, path: string): string {
  return DEMO ? `/${key}${path}` : `${siteUrl(key)}${path}`
}

export const NAV_ROUTES: NavRoute[] = [
  { path: '/', label: 'Home', keywords: ['home', 'homepage', 'main'] },
  { path: '/about', label: 'About', keywords: ['about', 'history', 'founder', 'jimmy bir singh', 'story'] },
  { path: '/businesses', label: 'Our Businesses', keywords: ['businesses', 'companies', 'portfolio', 'all companies'] },
  { path: '/careers', label: 'Careers', keywords: ['job', 'jobs', 'apply', 'hiring', 'career', 'careers', 'employment', 'work', 'openings', 'position'] },
  { path: '/contact', label: 'Contact', keywords: ['contact', 'reach', 'email', 'phone', 'get in touch'] },
  { path: '/privacy', label: 'Privacy Policy', keywords: ['privacy', 'policy', 'data', 'terms'] },
  { path: '/naanstop', label: 'Naanstop', keywords: ['naanstop', 'naan stop', 'food', 'restaurant'] },

  { path: companyPath('materials', ''), label: 'BIR Materials', keywords: ['materials', 'aggregates', 'rock', 'gravel', 'crushing', 'fill dirt', 'topsoil', 'concrete', 'recycling'] },
  { path: companyPath('materials', '/aggregates'), label: 'Materials — Aggregates', keywords: ['aggregates', 'gravel', 'stone', 'rock'] },
  { path: companyPath('materials', '/crushing'), label: 'Materials — Crushing', keywords: ['crushing', 'contract crushing'] },
  { path: companyPath('materials', '/fill-dirt'), label: 'Materials — Fill Dirt', keywords: ['fill dirt', 'topsoil', 'dirt'] },
  { path: companyPath('materials', '/recycling'), label: 'Materials — Recycling', keywords: ['recycling', 'sustainable materials'] },
  { path: companyPath('materials', '/contact'), label: 'Materials — Contact', keywords: ['materials contact', 'materials phone'] },

  { path: companyPath('luxury', ''), label: 'BIR Luxury Landing', keywords: ['luxury', 'luxury landing', 'event venue', 'wedding', 'oak ridge'] },
  { path: companyPath('luxury', '/amenities'), label: 'Luxury — Amenities', keywords: ['luxury amenities', 'amenities'] },
  { path: companyPath('luxury', '/apartments'), label: 'Luxury — Apartments', keywords: ['apartments', 'apartment', 'rent'] },
  { path: companyPath('luxury', '/condominiums'), label: 'Luxury — Condominiums', keywords: ['condominiums', 'condos', 'condo'] },
  { path: companyPath('luxury', '/duplexes'), label: 'Luxury — Duplexes', keywords: ['duplexes', 'duplex', 'townhomes'] },
  { path: companyPath('luxury', '/contact'), label: 'Luxury — Contact', keywords: ['luxury contact', 'venue contact'] },

  { path: companyPath('transport', ''), label: 'BIR Transport', keywords: ['transport', 'trucking', 'logistics', 'dry van', 'truckload', 'cdl'] },
  { path: companyPath('transport', '/services'), label: 'Transport — Services', keywords: ['transport services', 'cross docking', 'final mile', 'truck parking'] },
  { path: companyPath('transport', '/contact'), label: 'Transport — Contact', keywords: ['transport contact'] },

  { path: companyPath('developments', ''), label: 'BIR Developments', keywords: ['developments', 'construction', 'builder', 'contractor', 'custom homes'] },
  { path: companyPath('developments', '/services'), label: 'Developments — Services', keywords: ['developments services', 'excavation', 'electrical', 'renovations'] },
  { path: companyPath('developments', '/projects'), label: 'Developments — Projects', keywords: ['projects', 'portfolio', 'built'] },
  { path: companyPath('developments', '/contact'), label: 'Developments — Contact', keywords: ['developments contact', 'subcontractors'] },

  { path: companyPath('travel', ''), label: 'BIR Travel Plaza', keywords: ['travel', 'travel plaza', 'fuel', 'gas station', 'dandridge', 'jack in the box'] },
  { path: companyPath('travel', '/amenities'), label: 'Travel — Amenities', keywords: ['travel amenities', 'rv parking', 'ethanol'] },
  { path: companyPath('travel', '/location'), label: 'Travel — Location', keywords: ['travel location', 'directions', 'address'] },
  { path: companyPath('travel', '/contact'), label: 'Travel — Contact', keywords: ['travel contact'] },
]

const OPENINGS = [
  { company: 'BIR Materials', role: 'Equipment Operator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Transport', role: 'CDL-A Driver', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Transport', role: 'Logistics Coordinator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Developments', role: 'Construction Superintendent', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Developments', role: 'Estimator', type: 'Full-time', location: 'Knoxville, TN' },
  { company: 'BIR Luxury Landing', role: 'Leasing Agent', type: 'Full-time', location: 'Oak Ridge, TN' },
  { company: 'BIR Travel Plaza', role: 'Fuel Attendant', type: 'Part-time', location: 'Dandridge, TN' },
  { company: 'Team BIR', role: 'General Inquiry', type: 'All types', location: 'East Tennessee' },
]

function companyFacts(): string {
  return (Object.keys(SITE_CONFIGS) as (keyof typeof SITE_CONFIGS)[])
    .map((key) => {
      const c = SITE_CONFIGS[key]
      const addr = c.address ? `${c.address.street}, ${c.address.city}, ${c.address.state} ${c.address.zip}` : 'no public address'
      const phone = c.schema.phone || 'no public phone listed'
      return `- ${c.name} ("${c.tagline}"): ${c.description} Address: ${addr}. Phone: ${phone}.`
    })
    .join('\n')
}

function openingsList(): string {
  return OPENINGS.map((o) => `- ${o.role} at ${o.company} (${o.type}, ${o.location})`).join('\n')
}

function navList(): string {
  return NAV_ROUTES.map((r) => `${r.path} — ${r.label}`).join('\n')
}

export const SYSTEM_PROMPT = `You are EagleBot, the Team BIR website assistant. You help visitors learn about Team BIR and its six companies: BIR Materials, BIR Luxury Landing, BIR Transport, BIR Developments, BIR Travel Plaza, and Naanstop.

Company facts:
${companyFacts()}

Current job openings:
${openingsList()}

Scope: only answer questions about Team BIR, its six companies, their services, locations, and careers. If asked about anything unrelated, politely decline and redirect the conversation back to Team BIR topics.

Style: 1-2 short sentences per reply, plain prose. No emoji, no markdown headers or bullet lists, no bolding. For vague openers ("hi", "what can you help with"), give a one-sentence answer and ask what they're interested in — do not list all six companies or every topic you can help with.

Navigation protocol: when the user wants to reach a specific page, end your reply with a sentinel on its own line:
[[navigate:/exact/path]]
using ONLY a path from this list (path — label):
${navList()}
Emit at most one sentinel, only when a page clearly fits the user's intent. If no page fits, emit none.

Lead protocol: when the user describes a project or service need (wants a quote, has work to be done, asks "how can you help me"), reply with a short line acknowledging it, then end with the sentinel [[lead]] on its own line to launch the guided quote form. Do not ask for project details yourself — the form collects them.`

const NAV_SENTINEL = /\[\[navigate:([^\]]+)\]\]/
const NAV_SENTINEL_ALL = /\[\[navigate:[^\]]+\]\]/g
const LEAD_SENTINEL_ALL = /\[\[lead\]\]/g

export function isAllowedPath(p: string): boolean {
  return NAV_ROUTES.some((r) => r.path === p)
}

export function parseNavigation(text: string): { text: string; path: string | null } {
  const match = text.match(NAV_SENTINEL)
  const cleaned = text.replace(NAV_SENTINEL_ALL, '').trim()
  if (!match) return { text: cleaned, path: null }
  const candidate = match[1].trim()
  return { text: cleaned, path: isAllowedPath(candidate) ? candidate : null }
}

export function parseLead(text: string): { text: string; lead: boolean } {
  const lead = LEAD_SENTINEL_ALL.test(text)
  LEAD_SENTINEL_ALL.lastIndex = 0
  return { text: text.replace(LEAD_SENTINEL_ALL, '').trim(), lead }
}
