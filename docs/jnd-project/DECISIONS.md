# Decisions

Record durable technical, design, content, and process decisions here. Never silently reverse a documented decision. If an owner-approved decision changes, add a new dated entry that names the superseded decision and explains why.

## 2026-09-05 — Include privacy-friendly analytics

- Decision: Measure page views, approximate sessions, referral hostnames, device categories, campaign parameters, and link/contact clicks without changing the visible design or storing direct contact information, full referrer URLs, or IP addresses.
- Reason: The owner explicitly requested analytics for the live site and established analytics as a default requirement for future websites.

## 2026-08-06 — Use one responsive shell and shared visual primitives

- Decision: Use a shared 1164px outer shell that yields approximately 1100px of inner content at full width, with a fluid 16–32px gutter, 70-character introductory text limit, a 900px card-grid breakpoint, a 760px header breakpoint, and a 480px stacked-CTA breakpoint.
- Reason: This removes the accidental 720px cap and nested padding while keeping text readable and providing predictable behavior from 320px through wide desktop screens.

## 2026-08-06 — Bring Contact into the shared layout

- Decision: Render Contact through `Layout.astro` like every other current page, without changing its business facts, links, title, or description.
- Reason: Contact's hand-built document duplicated the shared shell and caused desktop/mobile alignment differences.

## 2026-08-06 — Load approved fonts through Google Fonts

- Decision: Load Inter weights 400–800 and the used Oswald weight 600 through the Google Fonts CSS API using preconnect hints, `display=swap`, and system font fallbacks. Retain the old Atkinson files unused until asset deletion is separately approved.
- Reason: This implements the explicitly approved typography without adding npm dependencies, recreating font files, or deleting tracked assets; visible fallback text limits the impact of a slow or blocked font request.

## 2026-08-06 — Centralize approved color variables and accessible interaction states

- Decision: Define the four approved colors in `global.css`, use Deep/Royal Blue for structure and primary interaction, reserve Red for selected calls to action, the footer accent, error code, and focus cues, and provide shared focus-visible/reduced-motion behavior.
- Reason: Central variables prevent page drift, controlled red usage follows the brand guide, and consistent interaction states improve keyboard and motion accessibility.

## 2026-08-06 — Preserve the existing content and logo during responsive polish

- Decision: Keep all business copy, contact destinations, route structure, and the approved logo file unchanged; change only markup semantics and presentation required for responsive/accessibility consistency.
- Reason: The task authorizes brand/layout alignment but not business-fact normalization, new claims, content redesign, or logo modification.

## 2026-08-06 — Preserve the existing Astro application

- Decision: Continue from the current Astro repository and architecture; do not initialize, replace, or broadly redesign the site.
- Reason: The site is live, connected to the existing repository, and already contains JND-specific pages and shared structure.

## 2026-08-06 — Documentation-only first run

- Decision: Limit this first run to inspection, documentation, root operating instructions, validation attempts, and a proposed plan.
- Reason: The owner explicitly requires approval before later visual or functional work.

## 2026-08-06 — Treat repository facts as primary but do not silently normalize discrepancies

- Decision: Preserve existing business details during inspection and document discrepancies involving the legal name, tagline, phone, address formatting, and Facebook display name.
- Reason: The owner requires approval before business facts change and prohibits invented claims.

## 2026-08-06 — Adopt the supplied brand guide as the approved baseline

- Decision: Document Royal Blue `#0452AC`, Deep Blue `#08316F`, Red `#DE0C10`, White `#FCFCFC`, Oswald headlines, and Inter body copy as approved standards.
- Reason: These values were explicitly supplied by the owner. Current source colors and Atkinson typography are implementation discrepancies, not alternate approvals.

## 2026-08-06 — Preserve all assets pending approval

- Decision: Do not delete, rename, or replace the logo, starter assets, fonts, or favicon during inspection.
- Reason: Asset cleanup must follow a reviewed route/content strategy, and approved assets must be protected.

## 2026-08-06 — Describe deployment with explicit confidence limits

- Decision: Record the site as an externally configured GitHub-connected Cloudflare deployment, likely Cloudflare Pages, while marking exact account-side settings as unverified.
- Reason: Live headers, current output, repository copy, and absence of tracked deployment configuration support Cloudflare delivery but do not expose the Cloudflare account configuration.

## 2026-08-06 — Fix production correctness before visual polish

- Decision: Recommend metadata, malformed CSS, fragment navigation, public demo-route, and 404 behavior corrections before broad responsive or visual polish.
- Reason: These defects affect correctness, credibility, accessibility, and search behavior and can be addressed in a focused pass.

## 2026-08-06 — Retire unapproved starter publishing routes

- Decision: Remove the starter About, Blog, demo posts, RSS endpoint, and their route-only infrastructure instead of presenting or inventing JND business content.
- Reason: The owner explicitly prohibited public Astro starter content and invented business claims. No approved About or editorial content exists to replace it.

## 2026-08-06 — Use the existing approved logo for metadata

- Decision: Reuse `public/jnd-logo.png` unchanged as the favicon reference and default Open Graph/Twitter image; retain the old SVG and starter JPEGs as unused files pending asset-cleanup approval.
- Reason: The approved logo already exists in the tracked repository, preserves its original proportions, and avoids generating or recreating brand artwork.

## 2026-08-06 — Let static output provide Cloudflare's 404 signal

- Decision: Add `src/pages/404.astro` so Astro emits top-level `404.html`; do not add a catch-all rewrite or change Cloudflare account settings in this pass.
- Reason: Cloudflare Pages documents that a top-level `404.html` disables its automatic SPA fallback and is served for unmatched static routes. The repository contains no tracked fallback configuration.

## 2026-08-06 — Defer dependency major-version remediation

- Decision: Record the current npm audit findings and defer Astro/Sharp major upgrades to a separately reviewed task.
- Reason: The audit requires major-version updates with broader compatibility risk, which exceeds this focused production-correctness pass.
