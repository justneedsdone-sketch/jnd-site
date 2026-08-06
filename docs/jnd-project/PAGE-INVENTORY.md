# Page Inventory

Inventory updated: 2026-08-06

## Shared observations

Every current HTML route loads `BaseHead.astro`, global CSS, the shared Header, and the shared Footer either directly or through `Layout.astro`. The shared head emits production-domain canonical and social metadata, uses `public/jnd-logo.png` as the favicon and default social image, and links the generated sitemap. No RSS alternate is advertised because there is no approved feed content.

Home, Services, Gallery, and 404 use `Layout.astro`; its 720px `main` cap prevents the inner 1100px wrappers from expanding on desktop and creates nested padding on mobile. Contact still constructs the page shell directly.

## Current HTML pages

### `/` — Home

- Source: `src/pages/index.astro`
- Purpose: Introduce JND's print/sign services, location, and fastest quote paths.
- Components/layouts: `Layout.astro` → `BaseHead`, `Header`, `HeaderLink`, `Footer`.
- Calls to action: Watch promo video; Get a quick quote by email; Contact; See services; Message on Facebook; mapped address; quick-start email.
- Assets: Shared JND logo/favicon/social image, fonts, and Facebook icon. No local hero or service photographs.
- Mobile concerns: Nested `main` and `.home` padding narrows content; header becomes a scrolling second row; CTA buttons still need visual QA.
- Desktop concerns: Intended 1100px `.home` is capped by the 720px layout `main`.
- Missing/unfinished: Phone is absent; no visual work samples; exact approved tagline/business-name wording needs confirmation.
- SEO title: `Just Needs Done Enterprises`
- SEO description: `Print & signs done fast: business cards, yard signs, banners, and more.`

### `/services/` — Services

- Source: `src/pages/services.astro`
- Purpose: Summarize seven service categories and direct visitors to request a quote.
- Components/layouts: `Layout.astro` → shared head/header/footer.
- Calls to action: Get a quick quote at Contact; Message on Facebook; email quick start.
- Assets: Shared assets only; no service images.
- Mobile concerns: Grid collapses below 900px; nested padding reduces usable width.
- Desktop concerns: Three-column grid is capped by the 720px parent; page-local style definitions overlap global variables.
- Missing/unfinished: No service detail pages, examples, specifications, or approved pricing; do not invent them.
- Production correction: The `.card h3` rule now has a complete `!important` declaration and closing brace.
- SEO title: `Services | Just Needs Done Enterprises`
- SEO description: `Business cards, yard signs, banners, window perf, stickers/vinyl, sublimation, and button formats.`

### `/gallery/` — Gallery

- Source: `src/pages/gallery.astro`
- Purpose: Show one featured Facebook post and describe a future portfolio workflow.
- Components/layouts: `Layout.astro` → shared head/header/footer; remote Facebook post iframe.
- Calls to action: Email a photo to feature; Message on Facebook; email submission link.
- Assets: Remote Facebook embed plus shared assets. No local job photographs.
- Mobile concerns: Fixed 520px iframe height; nested padding; third-party content may render inconsistently or be blocked by privacy settings.
- Desktop concerns: The 1100px wrapper remains capped at 720px; the page is mostly status/instruction copy rather than a portfolio.
- Missing/unfinished: No gallery grid, categories, Work posts, consent/data workflow, or automatic feed.
- Fragment target: The existing featured-post section is identified as `#featured-post`; Home links directly to it.
- SEO title: `Gallery | Just Needs Done Enterprises`
- SEO description: `Examples of recent print & sign work by Just Needs Done Enterprises.`

### `/contact/` — Contact

- Source: `src/pages/contact.astro`
- Purpose: Provide email, physical location, and Facebook contact options.
- Components/layouts: Direct use of `BaseHead`, `Header`, and `Footer`; does not use `Layout.astro`.
- Calls to action: Send email; Open in Google Maps; open/message Facebook page.
- Assets: Shared assets only.
- Mobile concerns: Three-card grid collapses below 900px; long email/address strings and shared mobile header still need visual QA.
- Desktop concerns: Uses a 1100px `main`, unlike the 720px cap on other primary pages.
- Missing/unfinished: Phone `815-339-0044` is absent; no business hours; exact business name/tagline is not displayed in the body.
- SEO title: `Contact | Just Needs Done Enterprises`
- SEO description: `Contact Just Needs Done Enterprises — fast, clean, affordable print & sign work.`

### `/404.html` and unmatched routes — Not Found

- Source: `src/pages/404.astro`
- Purpose: Provide a branded error page and a top-level `404.html` signal for static-host not-found handling.
- Components/layouts: `Layout.astro` → shared head/header/footer.
- Calls to action: Return home; View services; Contact us; shared navigation/footer.
- Assets: Shared JND logo/favicon/social image and fonts; no page photograph.
- Mobile concerns: Actions wrap and remain centered; shared layout/header concerns apply.
- Desktop concerns: The content is intentionally compact and capped by the shared layout.
- Production result: Fresh unknown paths and `/work/` return this branded page with HTTP 404.
- SEO title: `Page Not Found | Just Needs Done Enterprises`
- SEO description: `The requested page could not be found.`

## Retired routes and endpoint

The following unapproved starter routes are intentionally absent from source, generated output, and the current sitemap. Fresh/cache-busted requests resolve to the branded 404; no replacement business content was invented.

- `/about/`
- `/blog/`
- `/blog/first-post/`
- `/blog/second-post/`
- `/blog/third-post/`
- `/blog/markdown-style-guide/`
- `/blog/using-mdx/`
- `/rss.xml`

Removed route infrastructure includes the dynamic Blog page, five content entries, `BlogPost.astro`, `FormattedDate.astro`, `content.config.ts`, `@astrojs/mdx`, and `@astrojs/rss`.

Post-deployment cache note: exact requests to `/about/`, `/blog/`, `/blog/first-post/`, and `/rss.xml` still returned pre-deployment content with HTTP 200 during verification. Their responses advertise `s-maxage=604800` and nonzero `Age`, while query-busted requests return the correct 404. These four URLs require a Cloudflare cache purge or cache expiry; the other retired demo-post URLs already returned 404.

## Generated sitemap

- Source: `@astrojs/sitemap` integration in `astro.config.mjs`.
- Purpose: Enumerate current indexable static routes.
- Current output: Uses `https://justneedsdone.com` and includes Home, Services, Gallery, and Contact. Astro excludes the 404 page; retired starter routes and RSS are absent.
