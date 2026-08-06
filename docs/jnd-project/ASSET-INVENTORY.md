# Asset Inventory

Inventory date: 2026-08-06

Tracked source assets are limited to one JND logo, a generic Astro favicon, two Atkinson font files, six Astro starter images, and an inline Facebook SVG. No files were deleted or renamed.

## Public assets

| File | Type and dimensions | Description | Used by | Status |
| --- | --- | --- | --- | --- |
| `public/jnd-logo.png` | PNG, 675×675, 523,512 bytes | Approved circular JND logo containing the JND initials, tagline text, and email | `Header.astro`; therefore every current HTML route | Keep. Preserve 1:1 proportions; never recreate when this asset is suitable. |
| `public/favicon.svg` | SVG, 128×128 viewBox, 749 bytes | Generic black/white Astro starter icon | `BaseHead.astro`; therefore every current HTML route | Clear but not JND-branded. Replace only when an approved favicon asset is supplied or an approved derivation is authorized. |
| `public/fonts/atkinson-regular.woff` | WOFF, 22,792 bytes | Atkinson regular font | `global.css`; loaded sitewide | Working asset but does not match approved Inter body font. Do not delete until typography migration is approved and verified. |
| `public/fonts/atkinson-bold.woff` | WOFF, 23,780 bytes | Atkinson bold font | `global.css`; loaded sitewide | Working asset but does not match approved Oswald/Inter plan. Do not delete until typography migration is approved and verified. |

## Astro-managed source images

All six files below are 960×480 JPEGs inherited from the Astro starter. They are not JND project photography.

| File | Size | Visual/content | Used by | Status |
| --- | ---: | --- | --- | --- |
| `src/assets/blog-placeholder-1.jpg` | 32,040 bytes | Astro “Build the web you want” graphic | Default social image in `BaseHead.astro`; Markdown Style Guide hero | Misleading as JND social artwork; retain until an approved replacement and demo-content decision are made. |
| `src/assets/blog-placeholder-2.jpg` | 33,136 bytes | Abstract blue/green gradient texture | Third Post hero | Starter content. |
| `src/assets/blog-placeholder-3.jpg` | 28,687 bytes | Abstract magenta/blue gradient texture | First Post hero | Starter content. |
| `src/assets/blog-placeholder-4.jpg` | 38,690 bytes | Abstract yellow/green gradient texture | Second Post hero | Starter content. |
| `src/assets/blog-placeholder-5.jpg` | 34,890 bytes | Abstract blue/purple gradient texture | Using MDX hero | Starter content. |
| `src/assets/blog-placeholder-about.jpg` | 21,606 bytes | Astro face/icon graphic | About hero; inline example image in Markdown Style Guide | Starter content. |

## Icons and embeds not stored as files

- `src/components/Header.astro` contains an inline Facebook SVG icon used on every page header.
- `src/pages/gallery.astro` embeds a Facebook post through `facebook.com/plugins/post.php`; the remote post media is not stored in this repository.

## Backgrounds, photographs, QR codes, and downloads

- No JND-specific background image is stored in `public/` or `src/assets/`.
- No real JND job photograph is stored in the repository.
- No QR code is present.
- No downloadable PDF, DOCX, price sheet, form, or other business document is present.

## Duplicate and unclear files

- SHA-256 inspection found no byte-for-byte duplicates among tracked `public/` and `src/assets/` files.
- The six `blog-placeholder-*` images are a semantically duplicated starter-image set and are unclear for a production JND site.
- Local ignored `dist/` contains generated copies and optimized variants of public/source assets. These are build output, not separate approved assets, and must not be manually edited or cataloged as originals.
- It is unclear whether `public/jnd-logo.png` is the final master/export or a web copy. Preserve it unchanged until an owner-supplied brand package identifies any additional approved variants.

## Page-to-asset summary

- All HTML pages: JND header logo, generic favicon, Atkinson fonts, inline Facebook header icon, generic placeholder social image.
- Home: no page photograph; JND logo only through shared header.
- Services: no page photograph; JND logo only through shared header.
- Gallery: remote Facebook embed plus shared assets; no local gallery photographs.
- Contact: no page photograph; shared assets.
- About: `blog-placeholder-about.jpg` as hero.
- Blog index: each post's placeholder hero.
- Individual blog pages: the matching placeholder hero listed above.
- Markdown Style Guide: `blog-placeholder-1.jpg` hero and `blog-placeholder-about.jpg` inline example.
