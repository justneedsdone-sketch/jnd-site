# Changelog

Meaningful project changes should be recorded here in reverse chronological order. Do not list generated build output or inconsequential formatting-only edits.

## 2026-09-05 — Privacy-friendly analytics

### Added

- Added site-wide page-view, referral, device-category, campaign, link-click, and contact-click measurement.
- Kept analytics invisible to visitors and excluded names, telephone numbers, email addresses, full referrer URLs, and IP addresses from the stored event data.
- Analytics respects the browser's Do Not Track setting and begins collecting only after this deployment.

## 2026-08-29 — Our Work corrections

### Corrected

- Corrected six Our Work descriptions to accurately identify the memorial banner, magnet, printed flyers, custom T-shirt, sublimated event towel, and DTF company polo.
- Corrected the Geneva Equipment project description to identify it as an 8′ × 20′ large-format banner rather than a floor graphic.
- Corrected the community display description to identify the pictured pieces as sponsorship banners rather than yard signs.
- Replaced the incorrect event-towel gallery photo with the approved white sublimated towel photo supplied by the owner.

## 2026-08-06 — Responsive layout and approved brand alignment

### Changed

- Removed the duplicated 720px `main` cap and introduced one shared shell with approximately 1100px of inner desktop content, fluid 16–32px gutters, and 70-character reading widths for introductions.
- Consolidated the existing hero, button, card, panel, information-bar, color, spacing, and responsive patterns in `global.css` while retaining only focused page-local rules.
- Moved Contact onto `Layout.astro` without changing its business content, destinations, or metadata.
- Reworked the header into a single desktop row and a two-row mobile layout with four equal, non-scrolling navigation targets.
- Updated Gallery's Facebook iframe from a fixed 520px height to a constrained fluid height and a media-appropriate inner width.
- Corrected the Services heading hierarchy from skipped `h3` headings to `h2` headings.

### Brand and accessibility

- Implemented the approved Royal Blue, Deep Blue, Red, and White values as shared CSS custom properties.
- Replaced Atkinson usage with Oswald headings and Inter body copy, loaded through the Google Fonts CSS API with preconnect hints, `display=swap`, and system fallbacks.
- Preserved `public/jnd-logo.png` unchanged and proportionally sized.
- Added a skip link, `aria-current` active navigation state, strong focus-visible outlines, 44px controls, restrained red emphasis, and reduced-motion behavior.

### Validated

- Built the five-page static site without Astro warnings.
- Checked responsive layouts at 320, 375, 390, 768, 1024, and 1280px with no document-level horizontal overflow.
- Preserved production metadata, sitemap, canonical URLs, Gallery fragment, and branded 404 output.

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
