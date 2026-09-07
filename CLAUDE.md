# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

React 18 + Vite marketing site for DRKS Alignment LLC (built from a "DRKS MCP brief"). Brand colors navy `#062961` / gold `#F7B916`, DM Serif Display for headings, Manrope for body text.

- `src/pages/` — route pages (Home, WhatWeDo, WhoWeAre + Leadership, JoinOurTeam, Contact, NotFound)
- `src/components/` — shared UI (Header, Hero, Footer, PageHead, CtaBand, Arc, Seo, ScrollToTop)
- `src/data/` — **all site copy lives here** (site.js, services.js, leadership.js), not hardcoded in components
- `src/styles/global.css` — design tokens defined at `:root`

## Commands

- `npm run dev` — start dev server (localhost:5173)
- `npm run build` — build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint (flat config in `eslint.config.js`; `react/prop-types` is disabled since this codebase doesn't use PropTypes)

No test suite is configured in this project.

## Deployment

The build output (`dist/`) is manually uploaded to a **LAMP/Apache server** — this is the real deployment target, despite `vercel.json` and `public/_redirects` existing in the repo as leftover/unused SPA-rewrite configs for Netlify/Vercel. Apache does not pick up `_redirects` or `vercel.json`; the SPA rewrite (all routes → `index.html`) must be configured separately via `.htaccess` on the server, since this is a client-side-routed (React Router) single-page app.

## Compliance note

The site publishes only verified copy. Unverified content — government credentials (UEI, CAGE, NAICS, SAM registration), certifications, client and partner names, past performance, community giving figures and any quantitative results — has been removed rather than shown as a `[VERIFY]`/`[BRACKETED]` placeholder. Do not reintroduce placeholder values into `src/data/`: add a field only once the team has confirmed the real value.

## Known gaps

- The contact form (`src/pages/Contact.jsx`) only validates client-side — it is not wired to any backend, email service, or CRM.
- Only `company.email` is published as contact detail. Phone, address, headquarters, service area and social profile links were removed with the placeholder cleanup; re-add them to `src/data/site.js` (and the Footer/Contact markup) once real values exist.
