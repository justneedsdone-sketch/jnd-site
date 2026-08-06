# Decisions

Record durable technical, design, content, and process decisions here. Never silently reverse a documented decision. If an owner-approved decision changes, add a new dated entry that names the superseded decision and explains why.

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
