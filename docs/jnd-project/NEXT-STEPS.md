# Next Steps

This checklist is a proposal. Items that change public content, business facts, routes, assets, design, or deployment behavior require the normal approval workflow before implementation.

## Critical

- [ ] Fix the malformed `.card h3` CSS rule in `src/pages/services.astro`, then verify card text and breakpoints.
- [ ] Change Astro's `site` value from `https://example.com` to the approved production URL and verify canonical, Open Graph, Twitter, RSS, and sitemap output.
- [ ] Add or correct the Gallery `#featured` target used by the Home promo button.
- [ ] Decide whether public `/about/`, `/blog/`, sample post, RSS, and MDX content should be removed, unpublished, redirected, or replaced; do not assume the decision.
- [ ] Verify and correct the Cloudflare unknown-route/404 fallback so nonexistent URLs do not return the Home page with HTTP 200.
- [ ] Confirm the production branch, build command, output directory, and fallback rules in the connected Cloudflare account, then document them without changing deployment configuration.

## High

- [ ] Confirm approved public business name, tagline wording, phone usage, address punctuation, email casing, and Facebook display name before updating facts.
- [ ] Add the approved phone number to approved locations after owner confirmation.
- [ ] Resolve the shared 720px `main` cap and nested wrapper padding so Home, Services, Gallery, and Contact align consistently on desktop and remain readable on mobile.
- [ ] Perform a page-by-page responsive QA pass at narrow mobile, wide mobile, tablet, laptop, and desktop sizes.
- [ ] Centralize repeated business contact values and repeated page-shell behavior without broad formatting changes.
- [ ] Replace the generic Open Graph image and Astro favicon only with approved JND assets or an owner-approved derivation.
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
- [ ] Decide whether a JND blog/news capability is genuinely needed before retaining MDX, RSS, the content collection, and template-specific dependencies.
- [ ] Add analytics or conversion tracking only with an explicit privacy and business requirement.
- [ ] Review structured data and local-business SEO after contact facts and public content are approved.
- [ ] Establish a documented production release checklist and rollback process.

## Proposed next five development tasks

1. Production correctness: Services CSS, real Astro `site` URL, Gallery fragment, and repeatable build validation.
2. Public route/content cleanup: owner decision and implementation for About, Blog, RSS, sample posts, and Cloudflare 404 behavior.
3. Responsive structure: shared main-width/padding correction plus mobile/desktop header and page QA.
4. Brand implementation: approved colors, Oswald/Inter, restrained shapes/shadows, approved favicon/social image, and accessibility checks.
5. Gallery workflow: real approved job media, consent-aware content structure, categories, and a maintainable publishing process.
