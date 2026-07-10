# Team BIR

Website for Team BIR — a multi-industry group operating across real estate, luxury goods, materials, transport, and travel. Six company subdomains plus a main marketing site share one Next.js app, gated by `NEXT_PUBLIC_DEMO_MODE` (demo: path-prefixed `/{company}`, production: real subdomains via `middleware.ts`).

## Pages

- **Home** — landing with hero, featured businesses, FAQ, and testimonials
- **About** — company background and team
- **Businesses** — overview of all business verticals
- **Developments** — real estate and property projects
- **Luxury** — luxury goods and services
- **Materials** — materials and supply
- **Transport** — transportation services
- **Travel** — travel offerings
- **NaanStop** — restaurant brand under Team BIR
- **Contact** — contact form
- **Careers** — job listings
- **Privacy** — privacy policy

## EagleBot

Site-wide AI assistant (bubble bottom-right, hidden on `/admin*`) that answers Team BIR / company questions, auto-navigates visitors to relevant pages, and runs a guided quote/lead-capture flow. Backed by Claude Haiku, with leads and page-view traffic stored in SQLite and reviewed through a password-gated admin dashboard.

- **Chat** — `POST /api/chat`, scoped system prompt, in-memory rate limit (15 req / 5 min / IP), sentinel-based page navigation (`[[navigate:/path]]`)
- **Lead capture** — deterministic in-chat state machine (department → property type → location → timeline → budget → phone → email), `POST /api/lead`, emails the department inbox and persists to SQLite
- **Admin dashboard** (`/admin`) — username+password login, lead list with department/status, one-click AI lead summaries, reply-as-company email, CSV export, traffic stats with a hand-rolled donut chart
- See [PIPELINE.md](PIPELINE.md) for the full build history, review notes, and deploy fixes.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Turborepo monorepo (`apps/web`)
- SQLite (`better-sqlite3`) on a Railway Volume — leads + page views
- Claude Haiku (via OpenRouter) — chat, navigation, lead summaries

## Dev

```bash
pnpm install
pnpm dev
```

## Project structure

```
apps/web/
├── app/
│   ├── (main)/              # about, businesses, careers, contact, privacy, naanstop
│   ├── (sites)/              # materials, luxury, transport, developments, travel
│   ├── admin/                 # dashboard UI: login, leads, traffic, AI summaries
│   ├── api/
│   │   ├── chat/               # EagleBot proxy → OpenRouter (Claude Haiku)
│   │   ├── lead/                # guided quote flow submission → SQLite + email
│   │   ├── contact/             # contact form submission → email
│   │   ├── track/                # page-view beacon → SQLite
│   │   └── admin/                # login, logout, leads (list/patch/reply/summary), stats
│   ├── layout.tsx             # root layout; mounts <ChatWidget />
│   └── middleware.ts           # subdomain rewrite (demo vs prod) + /admin auth gate
├── components/
│   └── chat/ChatWidget.tsx    # EagleBot bubble/panel, navigation + lead-flow UI
├── lib/
│   ├── chatbot-knowledge.ts   # EagleBot system prompt, nav allowlist, sentinel parsing
│   ├── lead-flow.ts            # lead state machine (steps, validation)
│   ├── openrouter.ts            # shared Claude Haiku client
│   ├── db.ts                     # SQLite (leads, page_views)
│   ├── session.ts                 # HMAC session cookie (Edge-safe, Web Crypto)
│   ├── password.ts                 # scrypt hash + timing-safe compare
│   └── site-config.ts               # per-company data (SITE_CONFIGS)
└── scripts/
    ├── hash-password.mjs       # generates ADMIN_PASSWORD_HASH
    └── seed.mjs                  # seeds demo leads + traffic
```

## Deployment

GitHub is the source of truth. A push triggers Railway to build and deploy; Cloudflare sits in front of Railway as DNS/CDN for the public domain.

```
┌──────────────┐   git push    ┌───────────────────┐   proxied DNS   ┌────────────┐
│    GitHub     │ ────────────> │      Railway        │ <────────────── │ Cloudflare  │
│ HyperEndgame/  │  auto-deploy  │ builds via Nixpacks  │   (CDN / SSL /  │  (public    │
│   TeamBir      │  on push      │ (railway.toml) and   │    proxy)       │   domain)   │
│                │               │ runs `next start`    │                 │      ▲      │
└──────────────┘               └───────────────────┘                 └──────┼──────┘
                                                                              │
                                                                          visitors
```
