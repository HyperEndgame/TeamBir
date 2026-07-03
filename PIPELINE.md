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

**Deploy note:** `OPENROUTER_API_KEY` must be set on Railway for the `testing` deploy, else the bot returns the graceful fallback message instead of real answers.

### Iteration 2 — live test + model fallback (Opus)

Ran local `next start` + browser test. Found the single free model (`llama-3.3-70b:free`) 429s constantly (shared upstream pool) → bot showed only the fallback message. Fix: `route.ts` now iterates an ordered `MODELS` list, trying each until one returns a usable reply (extracted into `tryModel()`). First-working entry today: `openai/gpt-oss-20b:free`.

**Verified end-to-end (localhost:3000, real OpenRouter):**
- "Where can I apply for a job?" → bot replied + browser auto-redirected to `/careers` ✓ (bubble→panel→send→sentinel-strip→router.push all confirmed via Playwright)
- Off-topic ("write me a scraper") → politely refused (scope guardrail holds) ✓
- "Tell me about the travel plaza" → accurate address/amenities from SITE_CONFIGS + nav to `/travel` ✓
- Bubble renders bottom-right on every page, expands, persists across navigation ✓
