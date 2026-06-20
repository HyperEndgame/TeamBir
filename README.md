# Team BIR

A unified digital presence for Team BIR — a family of Tennessee-based companies spanning aggregates & crushing, residential real estate, trucking & logistics, general contracting, and hospitality.

**Live:** [teambir.com](https://teambir.com)

## Overview

The Team BIR website consolidates six distinct companies under one brand while maintaining individual identities. The platform showcases company services, facilitates customer inquiries, and tells the story of founder Jimmy Bir Singh and the Team BIR mission.

**Companies:**
- BIR Materials — Aggregates & Crushing
- BIR Luxury Landing — Residential Real Estate (Oak Ridge, TN)
- BIR Transport — Trucking & Logistics
- BIR Developments — General Contracting
- BIR Travel Plaza — Hospitality (Dandridge, TN)
- Team BIR — Corporate Hub

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Package Manager:** pnpm
- **Build Tool:** Turbo (monorepo)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Deployment:** Railway

## Project Structure

```
.
├── apps/
│   └── web/              # Next.js 14 application
│       ├── app/          # App Router
│       ├── public/       # Static assets
│       └── components/   # React components
├── package.json          # Monorepo root
└── turbo.json           # Turbo configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (package manager)

### Installation

```bash
pnpm install
```

### Development

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

Or run individually:

```bash
cd apps/web
npm run dev
```

### Build

```bash
pnpm build
pnpm start
```

## Features

- **Multi-company showcase** — Separate landing pages for each company
- **Contact forms** — Customer inquiry collection (form integration pending)
- **Responsive design** — Mobile-first approach with Tailwind CSS
- **Smooth animations** — Enhanced UX with Framer Motion
- **SEO optimized** — Next.js built-in meta tags and structuring

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Main hub with all companies |
| Businesses | `/businesses` | Company listings |
| About | `/about` | Team BIR founder story & timeline |
| Careers | `/careers` | Open positions and inquiries |
| Contact | `/contact` | Contact form |
| Materials | `/materials` | BIR Materials services |
| Luxury | `/luxury` | BIR Luxury Landing properties |
| Transport | `/transport` | BIR Transport services |

## Deployment

Deployed on **Railway** with automatic CI/CD from the main branch.

## Known Issues

- Service detail pages (e.g., `/aggregates`, `/duplexes`) return 404 — sub-page routing pending implementation
- Contact form shows demo mode — email integration pending

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally (`pnpm dev`)
4. Commit with clear messages
5. Push to GitHub

## Contact

For inquiries about Team BIR, visit [teambir.com/contact](https://teambir.com/contact)
