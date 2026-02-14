# CommunityCircle

CommunityCircle is a local, family-friendly, screen-light meetup platform focused on helping parents organize safe offline activities.

## Status

This repository is being delivered in six incremental patch packs.

- ✅ Pack 1: Root project scaffolding, tooling, Docker, and docs skeleton
- ⏳ Pack 2–6: Prisma data model, auth/onboarding, routes/pages, APIs, admin, tests

## Tech Stack

- Next.js 14+ App Router + TypeScript
- Tailwind CSS + shadcn/ui
- Prisma + PostgreSQL
- NextAuth
- react-hook-form + zod
- recharts
- Vitest + Playwright

## Quick Start (Local)

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

3. Start dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Docker Development

```bash
docker compose up --build
```

This starts:

- `app` on port `3000`
- `postgres` on port `5432`

## Planned Database Commands (Pack 2+)

```bash
npx prisma migrate dev
npx prisma db seed
```

## Testing

Unit tests:

```bash
npm run test
```

E2E smoke tests:

```bash
npm run test:e2e
```

## Lint & Formatting

```bash
npm run lint
npm run format:check
```

## Deployment Notes (Preview)

- Containerized deploy supported via `Dockerfile`
- Provide production values for `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET`
- Run Prisma migrations as part of release workflow

## Branding & Color Customization

- Base palette and semantic tokens: `src/app/globals.css`
- Tailwind theme extensions: `tailwind.config.ts`

## Known Stubs / Upcoming Implementation

- Authentication and onboarding
- Moderation, verification, and trust badges
- Event feed, creation wizard, RSVP/check-in, messaging
- Reports/blocks and full admin controls
- Real analytics endpoints and charts
- Philadelphia seed data
