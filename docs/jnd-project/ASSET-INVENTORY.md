# Asset Inventory

Inventory date: 2026-08-06

Tracked source assets are limited to one JND logo, a generic Astro favicon, two Atkinson font files, six Astro starter images, and an inline Facebook SVG. No files were deleted or renamed.

## Public assets

| File | Type and dimensions | Description | Used by | Status |
| --- | --- | --- | --- | --- |
| `public/jnd-logo.png` | PNG, 675×675, 523,512 bytes | Approved circular JND logo containing the JND initials, tagline text, and email | `Header.astro` plus the favicon and default social metadata in `BaseHead.astro`; therefore every current HTML route | Keep. Preserve 1:1 proportions; never recreate when this asset is suitable. |
| `public/favicon.svg` | SVG, 128×128 viewBox, 749 bytes | Generic black/white Astro starter icon | No current source reference | Retained but unused. Remove only with explicit asset-cleanup approval. |
| `public/fonts/atkinson-regular.woff` | WOFF, 22,792 bytes | Former Atkinson regular font | No current source reference | Retained unused after the approved Inter migration. Do not delete without explicit asset-cleanup approval. |
| `public/fonts/atkinson-bold.woff` | WOFF, 23,780 bytes | Former Atkinson bold font | No current source reference | Retained unused after the approved Oswald/Inter migration. Do not delete without explicit asset-cleanup approval. |

## Astro-managed source images

All six files below are 960×480 JPEGs inherited from the Astro starter. They are not JND project photography.

| File | Size | Visual/content | Used by | Status |
| --- | ---: | --- | --- | --- |
| `src/assets/blog-placeholder-1.jpg` | 32,040 bytes | Astro “Build the web you want” graphic | No current source reference | Retained unused starter asset pending explicit cleanup approval. |
| `src/assets/blog-placeholder-2.jpg` | 33,136 bytes | Abstract blue/green gradient texture | No current source reference | Retained unused starter asset pending explicit cleanup approval. |
| `src/assets/blog-placeholder-3.jpg` | 28,687 bytes | Abstract magenta/blue gradient texture | No current source reference | Retained unused starter asset pending explicit cleanup approval. |
| `src/assets/blog-placeholder-4.jpg` | 38,690 bytes | Abstract yellow/green gradient texture | No current source reference | Retained unused starter asset pending explicit cleanup approval. |
| `src/assets/blog-placeholder-5.jpg` | 34,890 bytes | Abstract blue/purple gradient texture | No current source reference | Retained unused starter asset pending explicit cleanup approval. |
| `src/assets/blog-placeholder-about.jpg` | 21,606 bytes | Astro face/icon graphic | No current source reference | Retained unused starter asset pending explicit cleanup approval. |

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

- All HTML pages: JND logo in the header, favicon, and default social metadata; remotely loaded Oswald/Inter fonts; inline Facebook header icon.
- Home: no page photograph; shared JND logo usage only.
- Services: no page photograph; shared JND logo usage only.
- Gallery: remote Facebook embed plus shared assets; no local gallery photographs.
- Contact: no page photograph; shared assets.
- 404: no page photograph; shared assets.
