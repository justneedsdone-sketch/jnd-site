# Just Needs Done Site Operating Instructions

These instructions apply to the entire repository.

- Read every file in `docs/jnd-project/` before making changes.
- Preserve the existing Astro architecture. Do not initialize or replace the application.
- Inspect the relevant source, assets, Git state, and documented decisions before editing.
- Make focused changes that address the approved task.
- Do not redesign unrelated pages, sections, or components.
- Do not delete, rename, or replace assets without approval.
- Do not alter business facts without approval. Existing repository content is the primary source of truth, but report inconsistencies before changing them.
- Do not invent testimonials, customers, services, prices, project claims, business hours, or other business details.
- Preserve approved JND logo assets and their proportions. Never stretch, skew, recolor, or recreate the logo when an approved asset exists.
- Maintain accessibility, semantic HTML, keyboard behavior, readable contrast, and responsive desktop/mobile behavior.
- Validate the site after changes using the existing build command and any applicable lint, test, type, link, and manual checks.
- Explain every changed file in the handoff.
- Keep Git commits focused and descriptive.
- Do not push, deploy, merge, or modify the remote repository unless the user explicitly requests it.
- Record meaningful changes in `docs/jnd-project/CHANGELOG.md` and durable decisions in `docs/jnd-project/DECISIONS.md`.
- Never silently reverse a decision recorded in `docs/jnd-project/DECISIONS.md`; document and explain an approved reversal.
