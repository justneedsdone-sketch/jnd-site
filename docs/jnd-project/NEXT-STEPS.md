# Next Steps

This checklist is a proposal. Items that change public content, business facts, routes, assets, design, or deployment behavior require the normal approval workflow before implementation.

## Critical

- [x] Correct production metadata, the malformed Services CSS, Gallery fragment navigation, starter routes, RSS/MDX output, and repository-level 404 handling.
- [x] Replace the shared 720px cap and nested padding with a consistent responsive page shell.
- [x] Implement the approved color and typography system without changing the logo or business content.
- [x] Validate the current pages at 320, 375, 390, 768, 1024, and 1280px without horizontal overflow.
- [ ] Purge the Cloudflare cache for `/about/`, `/blog/`, `/blog/first-post/`, and `/rss.xml` (or wait for their seven-day `s-maxage` to expire), then verify the exact URLs return HTTP 404 without query strings.
- [ ] Confirm the production branch, build command, output directory, and fallback rules in the connected Cloudflare account, then document them without changing deployment configuration.

## High

- [ ] Plan and test the Astro/Sharp major-version upgrades in an isolated branch/task; do not apply an automatic force audit fix.
- [ ] Confirm approved public business name, tagline wording, phone usage, address punctuation, email casing, and Facebook display name before updating facts.
- [ ] Add the approved phone number only after the owner confirms where it should appear.
- [ ] Test the updated layout on physical iOS and Android devices with browser text scaling, blocked remote fonts, and restrictive privacy settings.
- [ ] Centralize repeated business contact values and Facebook destinations without changing their values.

## Medium

- [ ] Build an approved Gallery/Work workflow using only real project photos, summaries, categories, and explicit publication consent.
- [ ] Review the third-party Facebook embed for a resilient no-cookie/no-script fallback after the Gallery content workflow is approved.
- [ ] Add suitable automated check, lint, link, and accessibility scripts only after choosing necessary tooling.
- [ ] Expand the root project README with concise development and deployment instructions once Cloudflare settings are confirmed.
- [ ] Recheck heading/link copy and local-business structured data after business facts are owner-approved.

## Later

- [ ] Organize assets after public route/content decisions are approved; preserve Git history and do not delete originals prematurely.
- [ ] Remove the unused starter images, generic SVG favicon, and Atkinson font files only with explicit asset-cleanup approval.
- [ ] Reintroduce a JND blog/news capability only if the business approves real content and a maintainable publishing need.
- [x] Add privacy-friendly analytics after the owner explicitly approved the business requirement.
- [ ] Establish a documented production release checklist and rollback process.

## Proposed next five development tasks

1. Production cache/settings verification: clear or wait out the four documented legacy cache entries and confirm Cloudflare's production branch, build command, output, and fallback configuration.
2. Dependency maintenance: upgrade Astro and Sharp in an isolated compatibility pass with full route, metadata, image, sitemap, and 404 regression testing.
3. Business-fact approval: confirm the legal/display name, exact tagline, phone placement, address punctuation, and Facebook display name before centralizing them.
4. Physical-device accessibility QA: test iOS/Android, text zoom, remote-font failure, keyboard/switch navigation, and the Facebook embed's privacy/failure states.
5. Gallery workflow: design the consent-aware process for real approved project media before adding categories, posts, or automation.
