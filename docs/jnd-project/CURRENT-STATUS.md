# Current Status

Inspection date: 2026-08-06

## Already complete

- Existing Astro application and npm lockfile are present; no replacement project is needed.
- Home, Services, Gallery, and Contact routes exist and are live.
- A shared JND header and footer are used across current pages.
- The approved JND logo file is displayed in the header without changing its square aspect ratio.
- Primary navigation links to Home, Services, Gallery, and Contact and applies an active state.
- Email quote links, Facebook links, and Google Maps links are present.
- Home has primary quote/contact/service/Facebook actions and three highlighted service cards.
- Services lists business cards, yard signs, banners, window perf, stickers/vinyl, sublimation, and button formats.
- Contact displays email, location, and Facebook options.
- Gallery embeds one featured Facebook post.
- Astro generates static output, RSS, and sitemap files.
- Live traffic is delivered through Cloudflare.

## Partially complete

- Gallery is an embed plus “coming next” copy, not a real portfolio or automatic Work feed.
- Responsive rules exist, but the shared `main` width and nested page wrappers undermine the intended 1100px page layouts.
- Branding is partially customized through the logo and a blue/red palette, but the implemented colors and font do not match the approved brand guide.
- Metadata exists on all Astro page shells, but the production base URL and social image are wrong.
- Blog infrastructure works structurally, but it contains unapproved Astro demo content rather than JND content.
- Header navigation wraps and scrolls on smaller screens but has not been polished as a deliberate mobile navigation pattern.
- Contact resembles the shared shell but does not use `Layout.astro`.

## Known bugs and broken references

- `src/pages/services.astro` has a missing closing brace and a truncated `!important` in `.card h3`. Generated CSS confirms that `.card p` is swallowed into the invalid declaration; later rules may render unpredictably.
- Home links “Watch our promo video” to `/gallery/#featured`, but Gallery has no element with `id="featured"`. The page opens, but it does not jump to the featured embed.
- `astro.config.mjs` uses `https://example.com`; live canonical, RSS, Open Graph, Twitter, and sitemap URLs therefore point to the wrong domain.
- `BaseHead.astro` uses the generic `blog-placeholder-1.jpg` as the default social-sharing image for JND pages.
- The public host returns the Home page with HTTP 200 for unknown paths rather than a true 404 response.
- `/work/` is not implemented in source. On the live host it resolves to the Home page through the same fallback behavior.
- About and five Blog entries publish generic Astro starter content and lorem ipsum.
- Blog and About hero images have empty `alt` text.
- `public/favicon.svg` is the generic Astro favicon, not a JND asset.

## Mobile issues and concerns

- The sticky header can become two rows: the brand and Facebook control remain above a horizontally scrolling navigation row. At narrow widths, `min-width: 280px` on navigation plus nested padding creates a crowded header.
- Home, Services, and Gallery are first capped by `Layout.astro` at 720px and then padded again by their own wrappers. This produces unnecessarily narrow content on small screens.
- Gallery uses a fixed 520px iframe height at every viewport width, which can create a large blank or awkwardly cropped area depending on Facebook's rendered content.
- No explicit reduced-motion rule exists for button hover transforms.
- The public 200 fallback makes mistyped mobile/shared URLs appear to work while silently showing the wrong page.
- Responsive behavior has been inferred from source rules and live HTML; a deliberate device-width visual QA pass is still required.

## Desktop issues and concerns

- Home, Services, and Gallery declare 1100px internal wrappers, but the parent `Layout.astro` `main` is capped at 720px. The intended desktop width is never reached.
- Contact can use a 1100px width because it bypasses `Layout.astro`, creating inconsistent alignment across primary pages.
- Global `main` CSS and `Layout.astro` scoped `main` CSS duplicate the same width/padding rules.
- Repeated page-local hero, card, button, color, spacing, and breakpoint styles make cross-page polish inconsistent.
- Large global heading sizes remain active on uncustomized About/Blog content.
- Desktop visual QA remains necessary after structural fixes.

## Missing or unapproved content

- Phone number `815-339-0044` is not displayed anywhere.
- No real gallery grid, project categories, job photographs, project summaries, consent workflow, or Work-post content exists in source.
- No JND-specific About content exists; the public About page is lorem ipsum.
- No approved JND social-sharing image or JND favicon is identified beyond `jnd-logo.png`.
- No business hours are present. Do not invent them.
- The exact approved public business name, tagline wording, and Facebook display name need owner confirmation because source and supplied context differ.

## Contact-information consistency review

| Fact | Repository usage | Finding |
| --- | --- | --- |
| Business name | Header/title omit `, LLC`; footer includes it | Inconsistent display; approval required before normalization |
| Email | `Just.Needs.Done@gmail.com` in Home, Services, Gallery, Contact, Footer, and logo | Consistent |
| Phone | No occurrence under `src/` | Missing from site |
| Street address | Home uses `511 1st St., LaSalle...`; Contact display omits the comma after `St.`; map queries vary slightly | Same location, inconsistent punctuation/query text |
| Location note | Home and Contact say “Located inside of Whatnots & More” | Consistent |
| Facebook | URL consistently uses `/JustNeedsDone`; display names vary | Destination consistent; exact business-page naming should be confirmed |
| Tagline | Source says “When you just need it done — call Just Needs Done!” | Differs from the supplied known tagline; do not change without approval |

## Technical debt

- Starter Blog/About routes, content collection, MDX/RSS integration, placeholder images, Atkinson fonts, and favicon remain.
- Business contact facts and Facebook URLs are repeated across page files rather than centralized.
- Contact and Blog index duplicate the document shell instead of using the shared layout.
- Page-local `:root` blocks attempt self-referential custom-property fallbacks such as `--jnd-blue: var(--jnd-blue, ...)`.
- Brand colors in `global.css` are `#1060A0`, `#105090`, and `#C02020`, not the approved palette.
- Site typography is Atkinson, not approved Oswald/Inter.
- There are no `lint`, `test`, or `check` scripts in `package.json`.
- The README previously contained only a title and one sentence.
- Deployment build settings and fallback configuration are not versioned.
- `dist/` exists locally as a generated, ignored January 2026 artifact and must not be treated as editable source.

## Validation status

- Repository was clean on `main` and synchronized with `origin/main` before documentation edits.
- Astro 5.16.11, MDX, sitemap, RSS dependencies, and Sharp are installed/importable.
- `src/pages/rss.xml.js` passes Node syntax checking.
- Live primary routes, RSS, sitemap, favicon, and logo returned HTTP 200 during inspection; the Home promo fragment has no matching source target.
- A previously generated `dist/` contains all expected primary and sample routes and exposes the malformed Services CSS.
- The first `npm` invocation was blocked by the local PowerShell execution policy for `npm.ps1`. Running the package script through npm's JavaScript CLI succeeded without changing dependencies.
- `npm run build` completed successfully, generated 11 pages plus RSS/sitemap output, and reused 12 optimized-image cache entries.
- The successful build emitted one CSS-minification warning at the malformed Services `!importan` token. The build passes but is not warning-free.
- No lint or test commands exist to run.

## Recommended next task

Perform a focused production-correctness pass before visual redesign: fix the malformed Services CSS, set Astro's `site` URL to the real domain, repair the Gallery fragment target, decide how the public demo Blog/About routes should be handled, and verify Cloudflare 404 behavior. This should be reviewed as a small, explicit set of files and validated on desktop and mobile without changing approved business facts.
