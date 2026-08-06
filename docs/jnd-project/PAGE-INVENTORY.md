# Page Inventory

Inventory updated: 2026-08-06

## Shared observations

Every current HTML route uses `Layout.astro`, which loads `BaseHead.astro`, global CSS, the shared Header, a skip-to-content link, and the shared Footer. The shared head emits production-domain canonical and social metadata, uses `public/jnd-logo.png` as the favicon and default social image, loads Oswald/Inter through Google Fonts, and links the generated sitemap. No RSS alternate is advertised because there is no approved feed content.

All pages use one shared responsive shell: a 1164px outer maximum yields approximately 1100px of inner desktop content after the 32px gutters. Gutters fluidly range from 16px to 32px, introductory text is capped at 70 characters, card grids collapse below 900px, the header changes below 760px, and CTA groups stack below 480px.

## Current HTML pages

### `/` — Home

- Source: `src/pages/index.astro`
- Purpose: Introduce JND's print/sign services, location, and fastest quote paths.
- Components/layouts: `Layout.astro` → `BaseHead`, `Header`, `HeaderLink`, `Footer`.
- Calls to action: Watch promo video; Get a quick quote by email; Contact; See services; Message on Facebook; mapped address; quick-start email.
- Assets: Shared JND logo/favicon/social image, remotely loaded fonts, and Facebook icon. No local hero or service photographs.
- Mobile concerns: CTA buttons stack below 480px; physical-device text-scaling and blocked-font checks remain useful. Browser checks found no horizontal overflow at 320, 375, or 390px.
- Desktop concerns: Content reaches approximately 1100px while the introductory paragraph remains limited to 70 characters; no known desktop layout defect remains.
- Missing/unfinished: Phone is absent; no visual work samples; exact approved tagline/business-name wording needs confirmation.
- SEO title: `Just Needs Done Enterprises`
- SEO description: `Print & signs done fast: business cards, yard signs, banners, and more.`

### `/services/` — Services

- Source: `src/pages/services.astro`
- Purpose: Summarize seven service categories and direct visitors to request a quote.
- Components/layouts: `Layout.astro` → shared head/header/footer.
- Calls to action: Get a quick quote at Contact; Message on Facebook; email quick start.
- Assets: Shared assets only; no service images.
- Mobile concerns: Grid collapses below 900px and CTA buttons stack below 480px; browser checks found no horizontal overflow at required mobile widths.
- Desktop concerns: Three-column cards use the shared 1100px inner width; the final wide Button Formats card spans all columns intentionally.
- Missing/unfinished: No service detail pages, examples, specifications, or approved pricing; do not invent them.
- Structure: Service card headings are `h2`, removing the former `h1` to `h3` hierarchy skip. Shared styles replace the former malformed/page-local card rule.
- SEO title: `Services | Just Needs Done Enterprises`
- SEO description: `Business cards, yard signs, banners, window perf, stickers/vinyl, sublimation, and button formats.`

### `/gallery/` — Gallery

- Source: `src/pages/gallery.astro`
- Purpose: Show one featured Facebook post and describe a future portfolio workflow.
- Components/layouts: `Layout.astro` → shared head/header/footer; remote Facebook post iframe.
- Calls to action: Email a photo to feature; Message on Facebook; email submission link.
- Assets: Remote Facebook embed plus shared assets. No local job photographs.
- Mobile concerns: The iframe height now scales between 420px and 520px without document overflow; third-party content may still vary or be blocked by privacy settings.
- Desktop concerns: The page uses the shared wide shell, while the Facebook panel is intentionally limited to 620px because its source embed is configured for 500px content. The page is still mostly status/instruction copy rather than a portfolio.
- Missing/unfinished: No gallery grid, categories, Work posts, consent/data workflow, or automatic feed.
- Fragment target: The existing featured-post section is identified as `#featured-post`; Home links directly to it.
- SEO title: `Gallery | Just Needs Done Enterprises`
- SEO description: `Examples of recent print & sign work by Just Needs Done Enterprises.`

### `/contact/` — Contact

- Source: `src/pages/contact.astro`
- Purpose: Provide email, physical location, and Facebook contact options.
- Components/layouts: `Layout.astro` → shared head/header/skip link/footer, matching every other current page.
- Calls to action: Send email; Open in Google Maps; open/message Facebook page.
- Assets: Shared assets only.
- Mobile concerns: Three-card grid collapses below 900px; long email/address links wrap without document overflow in required-width browser checks.
- Desktop concerns: Uses the same approximately 1100px inner shell and card alignment as the other business pages; no known desktop layout difference remains.
- Missing/unfinished: Phone `815-339-0044` is absent; no business hours; exact business name/tagline is not displayed in the body.
- SEO title: `Contact | Just Needs Done Enterprises`
- SEO description: `Contact Just Needs Done Enterprises — fast, clean, affordable print & sign work.`

### `/404.html` and unmatched routes — Not Found

- Source: `src/pages/404.astro`
- Purpose: Provide a branded error page and a top-level `404.html` signal for static-host not-found handling.
- Components/layouts: `Layout.astro` → shared head/header/footer.
- Calls to action: Return home; View services; Contact us; shared navigation/footer.
- Assets: Shared JND logo/favicon/social image and fonts; no page photograph.
- Mobile concerns: Actions stack below 480px and remain centered without overflow.
- Desktop concerns: The outer shell is shared; the error card intentionally uses the documented 720px readable inner maximum.
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
