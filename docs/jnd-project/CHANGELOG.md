# Changelog

Meaningful project changes should be recorded here in reverse chronological order. Do not list generated build output or inconsequential formatting-only edits.

## 2026-08-06 — Production-correctness pass

### Corrected

- Repaired the malformed Services card-heading CSS rule.
- Set Astro's production site URL to `https://justneedsdone.com`.
- Connected the Home promo button to the existing featured Facebook post on Gallery.
- Added a branded Astro `404.astro` page, which builds to top-level `404.html` for Cloudflare Pages not-found handling.
- Replaced the generic social fallback and favicon reference with the existing approved `public/jnd-logo.png` asset.

### Removed from public output

- Removed the unapproved starter About page, Blog index, five demo posts, dynamic Blog route, and demo-only RSS endpoint.
- Removed the now-unused blog content schema, Blog layout, date component, MDX integration, RSS integration, and their direct package dependencies.
- Preserved the six starter JPEGs and generic SVG favicon as unused tracked assets pending explicit asset-cleanup approval.

### Validated

- Confirmed the focused build emits five HTML pages: Home, Services, Gallery, Contact, and `404.html`.
- Confirmed Astro Preview serves Home with HTTP 200 and an unknown path with the branded page and HTTP 404.
- Confirmed the sitemap uses the production domain and excludes the retired starter routes.
- Confirmed no source references remain to `example.com`, RSS, MDX, Blog content, the generic social image, or the generic favicon.
- Recorded dependency-audit findings without performing an out-of-scope major framework upgrade.
- Verified the connected deployment now serves new unknown paths and `/work/` with the branded page and HTTP 404.
- Identified cached pre-deployment responses for `/about/`, `/blog/`, `/blog/first-post/`, and `/rss.xml`; cache-busted requests return the correct 404, while exact cached responses advertise a seven-day shared-cache lifetime. No Cloudflare cache or settings were changed.

## 2026-08-06 — Project documentation baseline

### Added

- Created `docs/jnd-project/` with the project overview, current status, brand guide, asset inventory, page inventory, decisions, next steps, and documentation index.
- Added root `AGENTS.md` with durable operating instructions for future Codex sessions.

### Inspected and validated

- Inventoried repository structure, layouts, pages, components, styles, scripts, content, public assets, source assets, Git state/history, and remote metadata.
- Reviewed the live Cloudflare-served routes and metadata.
- Checked contact information consistency and internal references.
- Ran the existing Astro production build successfully; it generated 11 pages and reported the documented malformed Services CSS warning.
- Made no visual or functional website source changes.
