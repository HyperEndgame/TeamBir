# PIPELINE.md — Team BIR Chatbot

Agent-loop context doc. All agents read this before editing.

## Codebase structure (relevant)

- Next.js 14 app-router, Turborepo monorepo. Web app: `apps/web/`.
- Root layout `apps/web/app/layout.tsx` wraps every page (ConstellationBg mounted here).
- Six companies: `materials`, `luxury`, `transport`, `developments`, `travel` (subdomains, routes under `app/(sites)/{company}/`) + `naanstop` (coming soon, `/naanstop`, main-site route).
- Main site: `app/(main)/` → `/about /businesses /careers /contact /privacy /naanstop`.
- Company/site data: `apps/web/lib/site-config.ts` (`SITE_CONFIGS`).
- Demo mode: `lib/demo.ts` — `DEMO` defaults **true**; paths prefixed `/{company}`. `siteUrl(key)`, `subPath(key,path)`.
- Existing API pattern: `app/api/contact/route.ts` (Next route handler, `NextRequest`/`NextResponse`).
- Theme (tailwind.config.ts): `bg #0f1521`, `surface #161e2e`, `border #242e45`, `accent #E8B020`, `accent-h #F5CC4A`. Fonts: `font-display` (Barlow Condensed), `font-body` (Barlow), `font-mono` (JetBrains).
- Graph: `graphify-out/graph.json` (gitignored). `graphify query "<q>"`.

## Real routes (nav allowlist — demo-mode paths)

```
/  /about  /businesses  /careers  /contact  /privacy  /naanstop
/materials /materials/aggregates /materials/crushing /materials/fill-dirt /materials/recycling /materials/contact
/luxury /luxury/amenities /luxury/apartments /luxury/condominiums /luxury/duplexes /luxury/contact
/transport /transport/services /transport/contact
/developments /developments/services /developments/projects /developments/contact
/travel /travel/amenities /travel/location /travel/contact
```

---

## Feature: Website Chatbot

### Opus plan (this doc)

**Goal:** floating bubble bottom-right, expands to chat panel. Answers Team-BIR / six-company questions only. Guardrails + rate-limiting. Can auto-navigate the browser to relevant pages (e.g. "where do I apply for jobs" → push `/careers`).

**Files:**
1. `apps/web/lib/chatbot-knowledge.ts` — single source of truth:
   - `NAV_ROUTES`: array of `{ path, label, keywords }` built from the real route list above (demo-aware via `subPath`/`siteUrl` so it works in both modes). This is BOTH the model's allowed-destination list and the client's redirect allowlist.
   - `SYSTEM_PROMPT`: built from `SITE_CONFIGS` + careers/business facts. Constrains scope to Team BIR & the six companies; instructs polite refusal of off-topic asks; instructs the navigation protocol (below).
   - `isAllowedPath(p)`: exact-match guard against `NAV_ROUTES` paths (prevents open-redirect / `javascript:` / external URLs).
2. `apps/web/app/api/chat/route.ts` — server proxy to OpenRouter:
   - Reads `OPENROUTER_API_KEY` from env (NEVER hardcode; NEVER expose to client).
   - Model: a free OpenRouter instruct model (`meta-llama/llama-3.3-70b-instruct:free`).
   - Guardrails: reject if not POST-JSON; cap message length (~1000 chars) and history (~12 msgs); prepend `SYSTEM_PROMPT`; drop any client-supplied system role.
   - Rate limit: in-memory fixed-window Map keyed by IP (`x-forwarded-for`), ~15 msgs / 5 min → 429. `// ponytail: in-memory single-instance; move to Redis if Railway scales >1 replica`.
   - Returns `{ reply }` (non-streaming — simplest that works).
3. `apps/web/components/chat/ChatWidget.tsx` — `'use client'`:
   - Bubble (accent gold, chat icon) fixed bottom-right z-50. Click → expand panel (~360×500, dark surface, rounded, shadow). Framer-motion already installed for the expand.
   - State: `open`, `messages[]`, `input`, `loading`. `fetch('/api/chat')`. Typing indicator while loading.
   - **Navigation protocol:** model ends a reply with a sentinel `[[navigate:/path]]` when a page fits the user's intent. Client strips the sentinel from displayed text, validates path via `isAllowedPath`, then `useRouter().push(path)`. Invalid/absent → no navigation.
   - Accessible: `aria-label` on toggle, focus input on open, `Esc` closes, keyboard send.
4. `apps/web/app/layout.tsx` — mount `<ChatWidget/>` once (below `{children}`), on every page.
5. `apps/web/.env.local` — add `OPENROUTER_API_KEY=...` (gitignored). Must also be set on Railway.

**Non-goals (ponytail):** no streaming, no persisted history, no auth, no vector DB — the knowledge is small enough to inline in the system prompt.

**Test left behind:** `isAllowedPath` + sentinel-parse are the non-trivial logic → one `__main__`/assert self-check or tiny test asserting allowlisted path passes, external URL / `javascript:` fails, sentinel is stripped.

### Sonnet implementation

Files:
- `apps/web/lib/chatbot-knowledge.ts` — `NAV_ROUTES` (demo-aware via a `companyPath()` helper, since `subPath()` returns bare/colliding paths in production; uses `siteUrl()` for absolute URLs when `DEMO` is false), `SYSTEM_PROMPT` (built from `SITE_CONFIGS` + careers openings), `isAllowedPath`, `parseNavigation`.
- `apps/web/app/api/chat/route.ts` — POST proxy to OpenRouter (`meta-llama/llama-3.3-70b-instruct:free`). Graceful 200 fallback reply if `OPENROUTER_API_KEY` missing or upstream fails. In-memory fixed-window rate limit (15 req / 5 min / IP) → 429. Sanitizes client messages: array check, string-content check, drops any `system` role, caps last message to 1000 chars, keeps last 12.
- `apps/web/components/chat/ChatWidget.tsx` — bubble + panel, framer-motion `AnimatePresence`, typing dots, Esc-to-close, focus-on-open, `parseNavigation` + `router.push` (or `window.location.href` for absolute cross-subdomain URLs in production).
- `apps/web/app/layout.tsx` — mounted `<ChatWidget />` after `{children}`.
- `apps/web/.env.local` — added `OPENROUTER_API_KEY` (gitignored).
- `apps/web/lib/chatbot-knowledge.test.mjs` — plain-Node `assert` self-check for allow/deny paths and sentinel stripping (logic re-derived, not imported, since no ts-node/tsx in repo — ponytail: no new test deps).

Verification: `node lib/chatbot-knowledge.test.mjs` passes. `npx tsc --noEmit` clean except one pre-existing unrelated error (`nodemailer` module not installed in this workspace — not caused by this change). `next lint` not run (no ESLint config present in repo, would require interactive first-time setup).

Known gap: real navigation-collision bug fixed proactively — `subPath()` alone would have produced identical bare paths (e.g. `/contact`) across all six companies in production mode; added `companyPath()` to build absolute per-company URLs instead.

### Haiku review findings

**NO BREAKING ERRORS.** Verification passed:
- `tsc --noEmit`: clean (pre-existing nodemailer error ignored) ✓
- `node lib/chatbot-knowledge.test.mjs`: passes ✓
- Type safety, imports, `'use client'`: all correct ✓
- API key NOT hardcoded in .ts/.tsx (server-only, env-only) ✓
- Navigation security (isAllowedPath): validates against NAV_ROUTES, blocks external/javascript: URLs ✓
- Demo vs production paths: `companyPath()` correctly builds relative paths in demo mode, absolute https: URLs in production ✓
- Rate limit logic: 15 req / 5 min window, off-by-one correct ✓
- Client-side validation: `router.push()` for relative, `window.location.href` for absolute ✓
- Message sanitization: drops system role, caps 1000 chars, keeps last 12 ✓
- Widget UX: mounts bottom-right z-50, Esc/focus work, input auto-focus on open ✓

**SHOULD-FIX (2):**
1. **`apps/web/lib/chatbot-knowledge.ts` line 111 + `apps/web/lib/chatbot-knowledge.test.mjs` line 16**: Sentinel replacement uses non-global regex. If model generates multiple `[[navigate:/path]]` sentinels (shouldn't per instructions, but could), only the first is stripped from display; remainder show to user. Fix: change `text.replace(NAV_SENTINEL, '')` to use global regex: `text.replace(/\[\[navigate:[^\]]+\]\]/g, '')`. In TypeScript file, split into two patterns: non-global for `.match()` capture group, global for `.replace()`.

2. **`apps/web/app/api/chat/route.ts` lines 48–56**: Rate limiting checked AFTER API key check. If API key missing (dev mode), requests bypass rate limiting, allowing unlimited fallback-reply spam. Fix: move `rateLimited(ip)` check (and IP extraction) before `if (!apiKey)` check, so all requests are rate-limited equally.

**MINOR:** None.

### Iteration 1 fixes (applied — Opus)

Both SHOULD-FIX items resolved:
1. Added `NAV_SENTINEL_ALL` global regex; `parseNavigation` now strips ALL sentinels from display text. Test updated with a multi-sentinel case.
2. Moved rate-limit check before the API-key check in `route.ts` — fallback-reply path is now rate-limited too.

Re-verified: `node lib/chatbot-knowledge.test.mjs` OK; `tsc --noEmit` clean (only pre-existing nodemailer error). Loop converged — no breaking errors remained.

---

## Feature: Lead Assistant (guided quote flow)

### Opus plan

Deterministic client-side state machine embedded in `ChatWidget`, not LLM-parsed fields (reliability over free-text extraction). Entry: a "Request a quote" quick-reply chip, or the LLM emits a new `[[lead]]` sentinel (mirrors existing `[[navigate:/path]]`) when a user expresses a project need. Flow: department → propertyType (materials/developments only) → location → timeline → budget → phone → email → POST `/api/lead` → emails the department inbox (`DEPT_EMAIL_<DEPT>` env var, falls back to `CONTACT_TO_EMAIL`). Departments: materials, developments (construction), transport, luxury, travel (naanstop excluded — coming soon). Non-goals: no persistence/DB, no admin dashboard (separate task), no LLM field parsing, no back-navigation.

### Sonnet implementation

- `apps/web/lib/lead-flow.ts` (new) — `LeadState`/`LeadStep` types, `DEPT_LABELS`, `NEEDS_PROPERTY_TYPE` set, `TIMELINE_CHOICES`/`BUDGET_CHOICES`, `nextStep()` (pure transition, skips propertyType per dept), `promptFor()` (deterministic assistant-voiced questions), `validPhone`/`validEmail`, `isComplete`.
- `apps/web/app/api/lead/route.ts` (new) — cloned `contact/route.ts`'s nodemailer pattern (no shared abstraction — 2 call sites, not worth it). Re-validates every field server-side (department allowlist, propertyType required iff needed, location ≤120 chars, phone/email format), honeypot `_hp`, department→inbox via `DEPT_EMAIL_${DEPT}` env fallback to `CONTACT_TO_EMAIL`.
- `apps/web/lib/chatbot-knowledge.ts` (edited) — `SYSTEM_PROMPT` gained a "Lead protocol" instructing the model to emit `[[lead]]` on project/quote intent; added `parseLead()` (strips sentinel, returns `{text, lead}`), mirrors `parseNavigation`.
- `apps/web/components/chat/ChatWidget.tsx` (edited) — `lead`/`leadError`/`hp` state; `startLead`, `advanceLead`, `chooseLead` (button steps), `submitLeadField` (free-text steps: location/phone/email, repurposes the existing chat input with a dynamic placeholder), `submitLead` (POSTs to `/api/lead`). Quick-reply button rows per step (department, propertyType, timeline, budget). Hidden honeypot input wired into the POST body.
- `apps/web/lib/lead-flow.test.mjs` (new) — plain-assert self-check (no test deps, mirrors `chatbot-knowledge.test.mjs` convention): propertyType skip logic per department, full-path walks for both branches, phone/email validators, department→env-var-key derivation.

Verification: `node lib/lead-flow.test.mjs` OK, `node lib/chatbot-knowledge.test.mjs` OK, `npx tsc --noEmit` clean (exit 0, no pre-existing errors this time).

### Haiku review findings

**PASS.** State machine, server-side validation, XSS escaping, honeypot, sentinel regex all correct on inspection + re-run tests/tsc.

**MINOR (1):** `ChatWidget.tsx` location field had no client-side 120-char cap (API enforces it server-side, but UX let users type past the limit before getting a 400). Fixed: added a `submitLeadField` check rejecting >120 chars with an inline error, matching the phone/email pattern already there.

Loop converged — no breaking errors remained after the one minor fix.

### Deploy note

New optional env vars (fallback to existing `CONTACT_TO_EMAIL`): `DEPT_EMAIL_MATERIALS`, `DEPT_EMAIL_DEVELOPMENTS`, `DEPT_EMAIL_TRANSPORT`, `DEPT_EMAIL_LUXURY`, `DEPT_EMAIL_TRAVEL`.

---

## Feature: Admin Dashboard / Client Portal

### Fable plan

SQLite (`better-sqlite3`) on a Railway Volume mounted at `/data` (`DB_PATH` env) — no second managed service, sync API, lead volume is tiny. **Deploy prerequisite: Railway Volume at `/data`, else every restart wipes leads.** Auth: single shared employee password (no NextAuth — one user, no OAuth needed), `scrypt` hash in `ADMIN_PASSWORD_HASH` env + HMAC-signed httpOnly session cookie via Web Crypto (works in both Edge middleware and Node routes). Traffic: no analytics product existed — laid the minimal real hook (`page_views` table + `/api/track` beacon) rather than faking numbers. AI summaries: on-demand per lead (cheaper than batch), reusing OpenRouter via a new shared `lib/openrouter.ts` (extracted from the chat route). CSV export: client-side Blob download, no lib. Reply = real email via existing nodemailer pattern; Assign department = `<select>` + PATCH. Non-goals: per-user accounts, 2FA, real analytics product, Postgres/ORM, pagination beyond 500-row cap.

### Sonnet implementation

- **DB:** `lib/db.ts` (new) — lazy-init `better-sqlite3` singleton, `leads` + `page_views` tables, `insertLead`/`listLeads`/`getLead`/`updateLead`/`insertPageView`/`trafficStats`. Added `better-sqlite3` + `@types/better-sqlite3` deps; native module required `pnpm-workspace.yaml`'s `onlyBuiltDependencies: [better-sqlite3]` + a manual `node-gyp rebuild` locally (Node 24 dev vs. Node 20 Railway target — flagged as a deploy risk, see below).
- **Auth:** `lib/session.ts` (Web Crypto HMAC-SHA256 cookie, `createSession`/`verifySession`, manual base64url + timing-safe compare — no Node-only APIs, so it runs in Edge middleware), `lib/password.ts` (Node `scryptSync` + `timingSafeEqual` vs. `ADMIN_PASSWORD_HASH`), `scripts/hash-password.mjs` (generates the env value).
- **Middleware:** `middleware.ts` (edited, pre-existing subdomain-rewrite logic preserved) — now also gates `/admin/*` + `/api/admin/*` via `verifySession`, `/admin/login` + `/api/admin/login` public.
- **Routes:** `app/api/admin/login`, `logout`, `leads` (GET), `leads/[id]` (PATCH dept/status, validates against `validDept`), `leads/[id]/reply` (POST, nodemailer), `leads/[id]/summary` (POST, OpenRouter, cached in `ai_summary`), `app/api/admin/stats` (GET), `app/api/track` (POST, public beacon).
- **Reuse/refactor:** `lib/openrouter.ts` (new) extracted `MODELS`/`complete()` out of `app/api/chat/route.ts` (pure refactor, no behavior change) so the summary route reuses it. `app/api/lead/route.ts` and `app/api/contact/route.ts` now call `insertLead()` before the email send (insert-first so an SMTP failure doesn't lose the row).
- **UI:** `app/admin/layout.tsx`, `app/admin/login/page.tsx`, `app/admin/page.tsx` (stat tiles, traffic bar list — no chart lib, lead cards with dept `<select>`, AI-summary button, Reply modal, CSV export via `lib/csv.ts` + Blob download, logout). `components/TrackBeacon.tsx` mounted in `app/layout.tsx` (skips `/admin` paths).
- **Test:** `lib/admin.test.mjs` (new, mirrors existing `.test.mjs` convention) — password hash/verify, session sign/verify/tamper/expiry, CSV escaping, summary-prompt truncation, `validDept` allowlist.

Verification: `node lib/admin.test.mjs`, `node lib/lead-flow.test.mjs`, `node lib/chatbot-knowledge.test.mjs`, `npx tsc --noEmit` all clean. Manual curl smoke test against a running dev server: unauth `/admin` → 307 redirect; wrong password → 401; correct password → cookie set; `/api/admin/leads` 200 authed / 401 unauthed; lead submitted via `/api/lead` persisted and visible; PATCH dept valid/invalid; `/api/track` → 204, shows in `/api/admin/stats`; `/admin` page loads 200 authed.

### Haiku review findings

**PASS.** Auth (scrypt + timing-safe compare, HMAC session, httpOnly/sameSite cookie), middleware merge (auth gate doesn't break subdomain rewrite, Edge/Node crypto correctly scoped), SQL (dynamic `SET` clause in `updateLead` only ever built from hardcoded field names, never attacker input), email injection (esc() used throughout) all confirmed correct on inspection + re-run tests/tsc.

**MINOR (2, both fixed):**
1. `lib/lead-flow.ts` — `validDept` used `in` operator (prototype-pollution-adjacent: `__proto__` would pass). Fixed: `Object.hasOwn(DEPT_LABELS, v)`.
2. `app/api/admin/leads/[id]/reply/route.ts` — subject field had no newline check (theoretical SMTP header injection, nodemailer likely already sanitizes). Fixed: reject subjects containing `\r`/`\n`.

**Accepted as-is (tech debt, not a blocker):** `/api/track` has no rate limit — public beacon, low risk at current scale; revisit if abused.

Loop converged — no breaking errors remained after the two minor fixes.

### Deploy prerequisites (manual, before this goes live)

1. **Railway Volume** mounted at `/data` on the web service — without it, SQLite data is wiped on every deploy/restart.
2. Env vars: `DB_PATH=/data/teambir.db`, `ADMIN_PASSWORD_HASH` (from `node scripts/hash-password.mjs <password>`), `SESSION_SECRET` (`openssl rand -hex 32`).
3. **Native module risk:** `better-sqlite3` needed a manual `node-gyp rebuild` in local dev (Node 24) after `pnpm install` skipped its build script by default; Nixpacks pins Node 20 on Railway and should run the build script automatically via `onlyBuiltDependencies` in `pnpm-workspace.yaml` — **verify the Railway build logs show `better-sqlite3` compiling successfully on first deploy**; if the Nixpacks image lacks build tools (python3/make/g++), fall back to Railway Postgres + `postgres` lib per the original plan's contingency.

**Deploy note:** `OPENROUTER_API_KEY` must be set on Railway for the `testing` deploy, else the bot returns the graceful fallback message instead of real answers.

### Iteration 2 — live test + model fallback (Opus)

Ran local `next start` + browser test. Found the single free model (`llama-3.3-70b:free`) 429s constantly (shared upstream pool) → bot showed only the fallback message. Fix: `route.ts` now iterates an ordered `MODELS` list, trying each until one returns a usable reply (extracted into `tryModel()`). First-working entry today: `openai/gpt-oss-20b:free`.

**Verified end-to-end (localhost:3000, real OpenRouter):**
- "Where can I apply for a job?" → bot replied + browser auto-redirected to `/careers` ✓ (bubble→panel→send→sentinel-strip→router.push all confirmed via Playwright)
- Off-topic ("write me a scraper") → politely refused (scope guardrail holds) ✓
- "Tell me about the travel plaza" → accurate address/amenities from SITE_CONFIGS + nav to `/travel` ✓
- Bubble renders bottom-right on every page, expands, persists across navigation ✓
