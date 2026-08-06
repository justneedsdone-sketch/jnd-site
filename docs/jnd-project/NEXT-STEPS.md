# Next Steps

This checklist is a proposal. Items that change public content, business facts, routes, assets, design, or deployment behavior require the normal approval workflow before implementation.

## Critical

- [x] Fix the malformed `.card h3` CSS rule in `src/pages/services.astro`, then verify the production build is warning-free.
- [x] Change Astro's `site` value to `https://justneedsdone.com` and verify canonical, Open Graph, Twitter, and sitemap output.
- [x] Connect the Home Gallery button to the existing featured Facebook post.
- [x] Remove the unapproved About, Blog, demo-post, RSS, and MDX routes/infrastructure without inventing replacement content.
- [x] Add a top-level generated `404.html` through `src/pages/404.astro` so Cloudflare Pages can stop treating the site as an SPA.
- [x] Verify a fresh unknown production URL returns the branded page with HTTP 404 rather than Home with HTTP 200.
- [ ] Purge the Cloudflare cache for `/about/`, `/blog/`, `/blog/first-post/`, and `/rss.xml` (or wait for their seven-day `s-maxage` to expire), then verify the exact URLs return HTTP 404 without cache-busting query strings.
- [ ] Confirm the production branch, build command, output directory, and fallback rules in the connected Cloudflare account, then document them without changing deployment configuration.

## High

- [ ] Confirm approved public business name, tagline wording, phone usage, address punctuation, email casing, and Facebook display name before updating facts.
- [ ] Add the approved phone number to approved locations after owner confirmation.
- [ ] Resolve the shared 720px `main` cap and nested wrapper padding so Home, Services, Gallery, and Contact align consistently on desktop and remain readable on mobile.
- [ ] Perform a page-by-page responsive QA pass at narrow mobile, wide mobile, tablet, laptop, and desktop sizes.
- [ ] Centralize repeated business contact values and repeated page-shell behavior without broad formatting changes.
- [x] Replace the generic Open Graph image and Astro favicon references with the existing approved JND logo, unchanged.
- [ ] Add meaningful alternative text where images convey content and confirm the decorative treatment where they do not.

## Medium

- [ ] Consolidate repeated hero, card, button, color, spacing, and breakpoint styles into a focused shared system.
- [ ] Implement the approved JND palette and Oswald/Inter typography with verified loading, fallback, performance, and contrast behavior.
- [ ] Reduce excessive rounded boxes/pills and heavy shadows through approved page-by-page polish, not a broad redesign.
- [ ] Build an approved Gallery/Work workflow using real project photos, summaries, categories, and explicit publication consent.
- [ ] Review heading hierarchy, keyboard focus, embedded Facebook accessibility, reduced motion, color contrast, and long-string wrapping.
- [ ] Add suitable automated `check`, lint, link, and accessibility validation scripts only after choosing necessary tooling.
- [ ] Expand the root project README with concise development and deployment instructions once Cloudflare settings are confirmed.

## Later

- [ ] Organize assets into clearer categories after all public route/content decisions are approved; preserve Git history and do not delete originals prematurely.
- [ ] Reintroduce a JND blog/news capability only if the business approves real content and a maintainable publishing need.
- [ ] Add analytics or conversion tracking only with an explicit privacy and business requirement.
- [ ] Review structured data and local-business SEO after contact facts and public content are approved.
- [ ] Establish a documented production release checklist and rollback process.

## Proposed next five development tasks

1. Production cache cleanup: clear or wait out the four documented legacy-path cache entries, verify their 404 statuses, and confirm Cloudflare build settings.
2. Dependency maintenance: plan and test the required Astro/Sharp major upgrades in an isolated, reviewable task.
3. Responsive structure: correct the shared main-width/padding constraint and complete mobile/desktop page QA.
4. Brand implementation: apply approved colors and Oswald/Inter through a focused, accessible typography/palette task.
5. Gallery workflow: add only real approved job media with consent-aware content, categories, and a maintainable publishing process.
