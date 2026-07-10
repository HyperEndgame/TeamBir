# Team BIR

Website for Team BIR — a multi-industry group operating across real estate, luxury goods, materials, transport, and travel.

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

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Turborepo monorepo (`apps/web`)

## Dev

```bash
pnpm install
pnpm dev
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
