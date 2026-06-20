# Team BIR — Consolidated Website Plan

## Context

Team BIR (founded by Jimmy Bir Singh, Knoxville/Dandridge, TN) operates 6 separate websites across distinct business verticals. The goal is to consolidate them into one Next.js monorepo served via subdomains, with a complete visual and SEO overhaul — dark, cinematic, bold industrial design (inspired by Framer's Nouva template) using the hero eagle image as the visual anchor.

**Demo phase:** Deploy on `bir.hariths.com` (or similar hariths.com subdomain) for client preview before migrating to `teambir.com`.

---

## Sites → Subdomains

| Existing site | New subdomain | Business |
|---|---|---|
| teambir.com | `teambir.com` (root) | Corporate umbrella |
| birmaterials.com | `materials.teambir.com` | Aggregates, crushing, recycling |
| birluxurylanding.com | `luxury.teambir.com` | Oak Ridge residential community |
| birtransport.com | `transport.teambir.com` | Trucking & logistics |
| birdevelopments.com | `developments.teambir.com` | General contractor / construction |
| birtravelplaza.com | `travel.teambir.com` | Dandridge travel plaza |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS v3 with custom design tokens
- **Animations:** Framer Motion (scroll-triggered, fade-in, parallax)
- **Monorepo:** Turborepo with pnpm workspaces
- **Hosting:** Railway (single service, custom domains)
- **Images:** Next.js `<Image>` component for optimization
- **SEO:** Next.js `generateMetadata`, JSON-LD via inline scripts
- **Sitemap:** `next-sitemap` per subdomain
- **Forms:** React Hook Form + email via Resend or Formspree

---

## Design System

### Color Palette (extracted from eagle hero image)
```
--color-bg:       #0B1F2A   /* deep dark teal-black — primary background */
--color-surface:  #112535   /* card/section background */
--color-border:   #1E3D50   /* subtle borders */
--color-text:     #F0F4F6   /* primary text */
--color-muted:    #7A9BB0   /* secondary/muted text */
--color-accent:   #D46108   /* amber gold — eagle beak, CTAs, highlights */
--color-accent-h: #E87A20   /* accent hover */
--color-teal:     #1E6A7A   /* mid teal for secondary accents */
```

### Typography
- **Display/Headings:** Bebas Neue or Barlow Condensed Bold — large, industrial, uppercase
- **Body:** Inter or DM Sans — clean, readable
- **Monospace:** JetBrains Mono (for stats/numbers)
- Load via `next/font` (Google Fonts)

### Layout Patterns (Nouva-inspired)
- Full-viewport hero with eagle image, dark overlay, centered text + CTA
- Large section padding (py-24 to py-32)
- Max-width container: 1280px, centered
- Card grid: 3-col on desktop, 1-col mobile
- Sticky nav with blur backdrop
- Scroll-fade-in animations on sections

### Hero (teambir.com homepage)
- Full-screen eagle image with a `bg-gradient-to-b from-[#0B1F2A]/60 to-[#0B1F2A]` overlay
- Headline: "BUILT TO LAST. DRIVEN TO DELIVER."
- Subtext + two CTAs: "Our Companies" → business grid | "Contact Us" → contact page
- Parallax scroll effect on eagle image

---

## Repository Structure

```
teambir/
├── apps/
│   └── web/                       # Single Next.js app
│       ├── app/
│       │   ├── layout.tsx          # Root layout (fonts, analytics)
│       │   ├── (main)/             # teambir.com root site
│       │   │   ├── page.tsx        # Homepage
│       │   │   ├── about/page.tsx
│       │   │   ├── businesses/page.tsx
│       │   │   ├── careers/page.tsx
│       │   │   └── contact/page.tsx
│       │   ├── _sites/
│       │   │   ├── materials/      # materials.teambir.com
│       │   │   ├── luxury/         # luxury.teambir.com
│       │   │   ├── transport/      # transport.teambir.com
│       │   │   ├── developments/   # developments.teambir.com
│       │   │   └── travel/         # travel.teambir.com
│       ├── middleware.ts
│       ├── components/
│       ├── lib/
│       └── public/
├── packages/config/
├── railway.toml
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Middleware — Subdomain Routing

```typescript
// apps/web/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUBDOMAIN_ROUTES: Record<string, string> = {
  materials:    '/_sites/materials',
  luxury:       '/_sites/luxury',
  transport:    '/_sites/transport',
  developments: '/_sites/developments',
  travel:       '/_sites/travel',
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const subdomain = host.split('.')[0]
  const rewriteBase = SUBDOMAIN_ROUTES[subdomain]
  if (rewriteBase) {
    const url = request.nextUrl.clone()
    url.pathname = rewriteBase + (url.pathname === '/' ? '' : url.pathname)
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
```

---

## Build Order

1. **Scaffold** — Init Turborepo, Next.js app, Tailwind, TypeScript config
2. **Design system** — Tailwind tokens, shared components (Button, Card, Nav, Footer)
3. **Hero + main homepage** — Eagle image, overlay, heading, business grid
4. **Middleware** — Subdomain routing, demo-mode path fallback
5. **Each site layout + homepage** — 6 sites, shared nav/footer with site config injection
6. **Inner pages** — All listed pages above
7. **SEO layer** — `generateMetadata` per layout, JSON-LD components, `next-sitemap`
8. **Railway setup** — `railway.toml`, env vars, domain config
9. **GitHub push** — Push to repo, connect Railway to GitHub for auto-deploy
10. **Demo domain** — Add `bir.hariths.com` to Railway, verify deployment
