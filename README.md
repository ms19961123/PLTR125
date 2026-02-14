# CommunityCircle

CommunityCircle is a local, family-friendly, screen-light meetup platform focused on helping parents coordinate safe offline activities.

## Stack

- Next.js 14 App Router + TypeScript (`src/app`)
- Tailwind CSS + shadcn/ui-compatible design tokens
- Prisma + PostgreSQL
- NextAuth (to be configured in upcoming packs)
- Vitest + Playwright
- Docker + Docker Compose

## Quick start

1. Copy environment values:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start PostgreSQL:
   ```bash
   docker compose up -d db
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

## Planned data setup

Prisma schema, migrations, and realistic Philadelphia seed data are delivered in Pack 2.

## Commands

- `npm run dev` — run local app
- `npm run build` — production build
- `npm run lint` — lint checks
- `npm run typecheck` — strict TypeScript check
- `npm run test` — unit tests (Vitest)
- `npm run test:e2e` — Playwright smoke tests
- `npm run db:migrate` — apply local migrations
- `npm run db:seed` — seed development data

## Docker

Run full stack:

```bash
docker compose up --build
```

Services:
- App: `http://localhost:3000`
- Postgres: `localhost:5432`

## Deploy notes (skeleton)

- Build with `npm run build`.
- Set production-grade `NEXTAUTH_SECRET` and `DATABASE_URL`.
- Run Prisma migrations during release pipeline.

## Brand and theme customization

Update palette and spacing in `tailwind.config.ts` for CommunityCircle branding.

## Known stubs

- Auth flows, onboarding, API routes, moderation logic, analytics, admin dashboard, and complete UI are implemented in Packs 2–6.
