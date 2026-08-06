# JND Brand Guide

Status: approved baseline supplied by the business owner. Additional approved brand files may be added later.

## Business name

Use `Just Needs Done Enterprises, LLC` when the full legal business name is required. Before normalizing every existing public label, confirm whether shorter display uses such as `Just Needs Done Enterprises` or `JND` are approved for the specific placement.

## Approved colors

| Role | Hex | Usage |
| --- | --- | --- |
| Royal Blue | `#0452AC` | Primary actions, links, and strong brand accents |
| Deep Blue | `#08316F` | Headings, dark accents, hover states, and high-contrast brand areas |
| Red | `#DE0C10` | Controlled emphasis, important accents, and selected calls to action |
| White | `#FCFCFC` | Primary light background and reversed text where contrast permits |

Red is for controlled emphasis. Do not use it for large paragraphs or large reading surfaces.

The four approved values are implemented in `src/styles/global.css` as `--jnd-royal-blue`, `--jnd-deep-blue`, `--jnd-red`, and `--jnd-white`. Supporting neutral text, border, surface, and panel colors are also centralized there.

## Typography

- Headline font: Oswald
- Body font: Inter
- Use sensible system fallbacks if web fonts fail to load.
- Keep headings readable and avoid forced, distorted, or awkward word wrapping.
- Do not introduce random or decorative fonts.

The current implementation loads Inter weights 400–800 and the used Oswald weight 600 through the Google Fonts CSS API in `BaseHead.astro`. Preconnect hints and `display=swap` keep text visible and reduce connection delay; system sans-serif and Arial Narrow/Arial fallbacks remain available if the remote font request fails. The old Atkinson WOFF files are retained but unused pending explicit asset-cleanup approval.

## Logo rules

- Preserve the approved JND logo's original proportions.
- Never stretch, skew, recolor, crop into essential artwork, trace, or recreate the logo when an approved asset exists.
- Scale proportionally using `height: auto` or matched intrinsic dimensions.
- Keep adequate clear space so the circular mark and surrounding text remain readable.
- Do not place the logo on a background that makes its blue, red, white, or edge treatment hard to distinguish.
- The current approved asset in the repository is `public/jnd-logo.png`, a 675×675 square PNG.

## Visual style

- Keep the site professional, readable, responsive, and consistent.
- Use clear hierarchy, purposeful whitespace, and restrained accents.
- Do not use heavy drop shadows.
- Do not distort text.
- Do not use excessive rounded boxes or pill shapes.
- Do not add visual effects simply for decoration.
- Keep interactions and calls to action consistent across pages.
- Maintain sufficient color contrast and visible keyboard focus.

## Content integrity

- Do not invent testimonials, customers, services, prices, project claims, business hours, or other business facts.
- Use repository content as the working source of truth and obtain approval before resolving factual discrepancies.
- Use real approved JND photographs and artwork when available; do not substitute generated placeholders for approved assets.

## Current implementation

- Approved colors and typography are implemented through shared variables and global font families.
- `public/jnd-logo.png` is used unchanged for the header, favicon reference, and default social metadata image.
- Page surfaces use restrained 7–10px radii, with the eyebrow label as the only intentionally pill-shaped text treatment.
- Cards and page surfaces use borders rather than heavy shadows; the sticky header has one subtle separation shadow.
- Red is limited to selected calls to action, the footer accent, the 404 code, and visible focus cues.
- All current pages share the same width, spacing, button, card, focus, and reduced-motion rules.
