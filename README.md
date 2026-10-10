# 1%

**One question. Every day.**

1% is a daily competitive challenge game. Each player gets one four-option question per day, has 30
seconds to answer, and sees a score, a percentile, a rank and a streak. It is built to be a short daily
habit, not a feed to scroll.

This repository holds the whole product: the mobile app, the backend and the documentation.

## Repository layout

| Path | What it is |
| --- | --- |
| [`mobile/`](mobile) | The app: React Native, Expo and TypeScript |
| `backend/` | The API: Java 21 and Spring Boot, one modular service. Arrives later in Phase 0 |
| [`docs/`](docs) | The [architecture](docs/architecture.md) and a short note per [phase](docs/phases) |
| [`docker/`](docker) | Local PostgreSQL setup |
| [`docker-compose.yml`](docker-compose.yml) | Starts PostgreSQL for local development |
| [`.github/workflows/`](.github/workflows) | Continuous integration |

## Prerequisites

- Node.js 22 (20.19 or later works)
- Docker, for the local PostgreSQL database
- JDK 21, once the backend is added

## Getting started

Run these from the repository root unless a step says otherwise.

1. **Create your local settings.**

   ```bash
   cp .env.example .env
   cp mobile/.env.example mobile/.env.local
   ```

   Then replace the placeholder password in `.env`. Both files are ignored by Git.

2. **Start PostgreSQL.**

   ```bash
   docker compose up -d
   ```

   This creates two databases: `onepercent` for development and `onepercent_test` for automated tests.

3. **Run the app.**

   ```bash
   cd mobile
   npm install
   npm start
   ```

   Scan the QR code with Expo Go, or press `a` for Android or `i` for iOS. Once the backend exists,
   set `EXPO_PUBLIC_API_URL` in `mobile/.env.local` to your computer's network address when using a
   physical phone.

## Checks

Every commit must pass these, and CI runs them on every push and pull request.

| Part | Command | What it runs |
| --- | --- | --- |
| Mobile | `cd mobile && npm run check` | Lint, formatting check, type check, tests |
| Mobile bundle | `cd mobile && npm run build:check` | Builds the iOS and Android JavaScript bundles |
| Mobile formatting fix | `cd mobile && npm run format` | Rewrites files into the project format |

Backend checks are added with the backend.

## How work is done

- One phase at a time, on its own branch, merged into `main` through a pull request.
- Conventional commit messages, for example `feat(scoring): add versioned scoring service`.
- No secrets in the repository: only `.env.example` files with placeholders are committed.
- No force pushes and no rewritten history.

See [section 18 of the architecture](docs/architecture.md#18-git-and-github-development-workflow) for
the full workflow.

## Status

| Phase | Scope | Status |
| --- | --- | --- |
| 0 | Architecture, repository, tooling | In progress: backend still to come |
| 1 | Purple and white UI, navigation | Not started |
| 2 | Authentication and profile | Not started |
| 3 | Question bank, daily pool, assignment | Not started |
| 4 | 30-second challenge engine | Not started |
| 5 | Scoring and result screen | Not started |
| 6 | Streak, percentile, leaderboards | Not started |
| 7 | Private beta | Not started |

Phases 8 to 16 are listed in [the architecture](docs/architecture.md#19-phase-by-phase-implementation-plan).
