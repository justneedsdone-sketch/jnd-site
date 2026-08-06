# Page Inventory

Inventory date: 2026-08-06

## Shared observations

Every HTML route loads `BaseHead.astro`, global CSS, the shared Header, and the shared Footer either directly or through a layout. The shared head currently emits incorrect `example.com` canonical/social/RSS URLs and uses a generic Astro placeholder as the social image. The shared header uses the JND logo and links only the four primary pages.

Home, Services, and Gallery use `Layout.astro`; its 720px `main` cap prevents their inner 1100px wrappers from expanding on desktop and creates nested padding on mobile. Contact and Blog index manually construct the page shell, while About and individual posts use `BlogPost.astro`.

## Primary pages

### `/` — Home

- Source: `src/pages/index.astro`
- Purpose: Introduce JND's print/sign services, location, and fastest quote paths.
- Components/layouts: `Layout.astro` → `BaseHead`, `Header`, `HeaderLink`, `Footer`.
- Calls to action: Watch promo video; Get a quick quote by email; Contact; See services; Message on Facebook; mapped address; quick-start email.
- Assets: Shared JND logo, favicon, fonts, Facebook icon, generic social fallback. No local hero or service photographs.
- Mobile concerns: Nested `main` and `.home` padding narrows content; header becomes a scrolling second row; CTA buttons wrap without a full visual QA pass.
- Desktop concerns: Intended 1100px `.home` is capped by the 720px layout `main`; cards therefore occupy a narrower area than their three-column design suggests.
- Missing/unfinished: Promo link targets missing `#featured`; phone is absent; no visual work samples; exact approved tagline/business-name wording needs confirmation.
- SEO title: `Just Needs Done Enterprises`
- SEO description: `Print & signs done fast: business cards, yard signs, banners, and more.`

### `/services/` — Services

- Source: `src/pages/services.astro`
- Purpose: Summarize seven service categories and direct visitors to request a quote.
- Components/layouts: `Layout.astro` → shared head/header/footer.
- Calls to action: Get a quick quote at Contact; Message on Facebook; email quick start.
- Assets: Shared assets only; no service images.
- Mobile concerns: The grid is designed to collapse below 900px, but malformed CSS can swallow the card paragraph rule and affect subsequent presentation; nested padding reduces usable width.
- Desktop concerns: Three-column grid is capped by the 720px parent; long headings were repeatedly patched in recent commits; page-local style definitions overlap global variables.
- Missing/unfinished: No service detail pages, examples, specifications, or approved pricing; do not invent them.
- Known bug: `.card h3` is missing `}` and ends with truncated `!importan`.
- SEO title: `Services | Just Needs Done Enterprises`
- SEO description: `Business cards, yard signs, banners, window perf, stickers/vinyl, sublimation, and button formats.`

### `/gallery/` — Gallery

- Source: `src/pages/gallery.astro`
- Purpose: Show one featured Facebook post and describe a future portfolio workflow.
- Components/layouts: `Layout.astro` → shared head/header/footer; remote Facebook post iframe.
- Calls to action: Email a photo to feature; Message on Facebook; email submission link.
- Assets: Remote Facebook embed plus shared assets. No local job photographs.
- Mobile concerns: Fixed 520px iframe height; nested padding; embedded third-party content may render inconsistently or be blocked by privacy/tracking settings.
- Desktop concerns: 1100px wrapper remains capped at 720px; embed width is constrained; layout is mostly status/instruction copy rather than a portfolio.
- Missing/unfinished: No gallery grid, categories, Work posts, consent/data workflow, or automatic feed. No `id="featured"` target for the Home promo link.
- SEO title: `Gallery | Just Needs Done Enterprises`
- SEO description: `Examples of recent print & sign work by Just Needs Done Enterprises.`

### `/contact/` — Contact

- Source: `src/pages/contact.astro`
- Purpose: Provide email, physical location, and Facebook contact options.
- Components/layouts: Direct use of `BaseHead`, `Header`, and `Footer`; does not use `Layout.astro`.
- Calls to action: Send email; Open in Google Maps; open/message Facebook page.
- Assets: Shared assets only.
- Mobile concerns: Three-card grid collapses below 900px; long email/address strings should be visually checked for wrapping; shared mobile header concerns apply.
- Desktop concerns: Uses a 1100px `main`, unlike the 720px cap on other primary pages, causing cross-page width inconsistency.
- Missing/unfinished: Phone `815-339-0044` is absent; no business hours; exact business name/tagline is not displayed in the page body.
- SEO title: `Contact | Just Needs Done Enterprises`
- SEO description: `Contact Just Needs Done Enterprises — fast, clean, affordable print & sign work.`

## Public starter/template pages

### `/about/` — Starter About page

- Source: `src/pages/about.astro`
- Purpose: Currently none for JND; it is an Astro starter About page containing lorem ipsum.
- Components/layouts: `BlogPost.astro`, `BaseHead`, `Header`, `FormattedDate`, `Footer`.
- Calls to action: Shared navigation/footer only.
- Assets: `src/assets/blog-placeholder-about.jpg` hero plus shared assets.
- Mobile concerns: Very long placeholder copy; global typography and BlogPost layout only.
- Desktop concerns: Generic content and image conflict with JND credibility; hero uses a heavy shared box shadow.
- Missing/unfinished: All approved JND About content; meaningful image alt text.
- SEO title: `About Me`
- SEO description: `Lorem ipsum dolor sit amet`

### `/blog/` — Starter Blog index

- Source: `src/pages/blog/index.astro`
- Purpose: Lists the five Astro starter entries from the blog content collection.
- Components/layouts: Direct `BaseHead`, `Header`, `FormattedDate`, `Footer`; Astro `Image`.
- Calls to action: Links to each sample post; shared navigation/footer.
- Assets: The five post hero images plus shared assets.
- Mobile concerns: Grid collapses to one column; image `alt` values are empty; generic content remains highly visible if discovered through search/sitemap.
- Desktop concerns: First post uses a different featured layout; generic starter visuals and copy are unrelated to JND.
- Missing/unfinished: An approved editorial strategy and real JND content, or approval to remove/disable the route and dependencies.
- SEO title: `Just Needs Done Enterprises`
- SEO description: `When you just need it done — call Just Needs Done!`

### `/blog/first-post/`

- Source: `src/content/blog/first-post.md`, rendered by `src/pages/blog/[...slug].astro` and `BlogPost.astro`.
- Purpose/content: Astro sample “First post” with lorem ipsum.
- Components: `BlogPost`, shared head/header/footer, `FormattedDate`, Astro `Image`.
- Calls to action: Shared navigation/footer only.
- Assets: `blog-placeholder-3.jpg`.
- Mobile/Desktop concerns: Generic long-form template; empty hero alt; unrelated public content.
- Missing/unfinished: Approved JND content or approval to remove.
- SEO title/description: `First post` / `Lorem ipsum dolor sit amet`

### `/blog/second-post/`

- Source: `src/content/blog/second-post.md`, rendered by the dynamic blog route and `BlogPost.astro`.
- Purpose/content: Astro sample “Second post” with lorem ipsum.
- Components/calls to action: Same as First Post.
- Assets: `blog-placeholder-4.jpg`.
- Mobile/Desktop concerns: Same shared blog concerns; empty hero alt; unrelated public content.
- Missing/unfinished: Approved JND content or approval to remove.
- SEO title/description: `Second post` / `Lorem ipsum dolor sit amet`

### `/blog/third-post/`

- Source: `src/content/blog/third-post.md`, rendered by the dynamic blog route and `BlogPost.astro`.
- Purpose/content: Astro sample “Third post” with lorem ipsum.
- Components/calls to action: Same as First Post.
- Assets: `blog-placeholder-2.jpg`.
- Mobile/Desktop concerns: Same shared blog concerns; empty hero alt; unrelated public content.
- Missing/unfinished: Approved JND content or approval to remove.
- SEO title/description: `Third post` / `Lorem ipsum dolor sit amet`

### `/blog/markdown-style-guide/`

- Source: `src/content/blog/markdown-style-guide.md`, rendered by the dynamic blog route and `BlogPost.astro`.
- Purpose/content: Generic Astro Markdown demonstration, including headings, code, tables, quotes, and sample text.
- Components/calls to action: Shared blog layout and navigation/footer only.
- Assets: `blog-placeholder-1.jpg` hero and `blog-placeholder-about.jpg` inline example.
- Mobile concerns: Tables, code blocks, and many heading sizes require overflow/accessibility review if retained.
- Desktop concerns: Entire page is unrelated development/demo content; empty hero alt.
- Missing/unfinished: Approved JND content or approval to remove.
- SEO title: `Markdown Style Guide`
- SEO description: `Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.`

### `/blog/using-mdx/`

- Source: `src/content/blog/using-mdx.mdx`, rendered by the dynamic blog route and `BlogPost.astro`.
- Purpose/content: Generic MDX integration demonstration with an inline alert-button example.
- Components: Shared blog layout plus `HeaderLink.astro` imported inside MDX.
- Calls to action: Demo button with `onclick="alert('clicked!')"`; shared navigation/footer.
- Assets: `blog-placeholder-5.jpg`.
- Mobile/Desktop concerns: Demo interaction and content are unrelated to the business; empty hero alt; inline JavaScript behavior has no production purpose.
- Missing/unfinished: Approved JND content or approval to remove; removal may allow MDX dependency cleanup after verification.
- SEO title/description: `Using MDX` / `Lorem ipsum dolor sit amet`

## Non-HTML endpoints

### `/rss.xml`

- Source: `src/pages/rss.xml.js`
- Purpose: Generate a feed for the five current Blog entries.
- Components/assets: `@astrojs/rss`, content collection, site constants; no visual components or assets.
- Calls to action: Links feed items to the five Blog posts.
- Mobile/Desktop concerns: Not applicable.
- Missing/unfinished: Uses the incorrect configured base URL and publishes unapproved sample content.
- SEO title/description: Feed title is `Just Needs Done Enterprises`; description is the source tagline.

### Generated sitemap

- Source: `@astrojs/sitemap` integration in `astro.config.mjs`.
- Purpose: Enumerate static routes.
- Concern: Uses `https://example.com` and includes public starter routes. Correct the site URL and route strategy before relying on it for production SEO.
