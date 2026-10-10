# Phase 0: architecture, repository, tooling

**Objective:** a fresh clone installs, lints, type-checks, tests and runs using only the documented
commands, and CI is green.

**Status:** in progress. The mobile app, repository conventions, local database setup, CI and
documentation are done. The Spring Boot backend is still to come.

## Delivered so far

| Area | What exists |
| --- | --- |
| Repository | `.gitignore` that keeps every `.env` file out of Git, `.editorconfig`, `.gitattributes`, root `.env.example` |
| Local database | `docker-compose.yml` running PostgreSQL 16, with a separate `onepercent_test` database for tests |
| Mobile | Expo SDK 57 app in strict TypeScript; ESLint, Prettier, Jest with React Native Testing Library |
| Mobile config | `src/config/apiConfig.ts` reads `EXPO_PUBLIC_API_URL` and rejects anything that is not an http(s) address |
| CI | GitHub Actions: mobile checks and bundle build, plus a gitleaks secret scan |
| Docs | `docs/architecture.md`, this note, and the root `README.md` |

The app shows a single placeholder screen: the 1% wordmark and the tagline. Screens, navigation and
design tokens are Phase 1.

## Still to do in Phase 0

- Spring Boot backend on Java 21 with the Maven wrapper, a `/health` endpoint that also checks the
  database, formatting checks, and tests against a real PostgreSQL.
- Backend settings in `.env.example`, and a backend job in CI.

This is waiting on network access: the build environment currently cannot reach Maven Central, where
Spring Boot is downloaded from.

## How to verify

```bash
cd mobile
npm ci
npm run check        # lint, formatting, types, tests
npm run build:check  # iOS and Android bundles
```

## Decisions made in this phase

| Decision | Reason |
| --- | --- |
| PostgreSQL 16 locally and in CI | One version everywhere; supported upstream until November 2028 |
| ESLint plus `eslint-config-prettier`, with Prettier run separately | Lint finds bugs, Prettier owns formatting, and the two never disagree |
| `noUncheckedIndexedAccess` in TypeScript | Forces code to handle a missing array or map entry |
| No Expo Router yet | Navigation is Phase 1's scope |
