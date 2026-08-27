# Retiring the Lab — task list

**Executed in Cowork, 2026-08-27** (CC was unavailable; Bill approved). All tasks done except: About-page copy left for Bill; Jekyll build not runnable in the Cowork sandbox (rubygems blocked), so the pre-push check is a local `bundle exec jekyll serve`. Domain references also updated `.com`→`.io` (config url, robots.txt, JSON-LD, README) after confirming CNAME already held `data-landscapers.io`; email addresses left at `.com`. Feed GUIDs: unchanged by the merge, but the site-url change means readers may re-show old items once — domain-move effect, unavoidable.

*Drawn up in Cowork, 2026-08-27, for CC to review and execute. Decisions confirmed by Bill: keep all existing `/lab/...` URLs; keep the Working-analysis notice via a frontmatter flag; ex-Lab items keep their own categories with no Lab badge; homepage becomes one merged list.*

**Governing constraint:** Lab URLs are cited externally and by Corpus's published catalogues (`outputs/catalogue/raw-catalogue.csv`, the country catalogues and finance pages). Every task below preserves the nine `/lab/YYYY/MM/DD/title/` URLs byte-for-byte, so nothing in Corpus needs to change.

## 1. Migrate the nine entries

Move each `_lab/*.md` into `_posts/` (filenames are already `YYYY-MM-DD-title.md`). In frontmatter: delete `layout: lab` (the posts default applies `article`), add `lab_notice: true`, and keep everything else — especially the explicit `permalink:` line, `has_data_table`, `pdf`, `category`, `author`.

Watch: `2026-05-16-ituri-factsheet.md` has `date: 2026-05-17` but permalink `/lab/2026/05/16/...`. The explicit permalink makes the mismatch harmless — do not "fix" it.

Cross-links between entries (`cable-factsheet` → `cables-for-dummies` and `ict-glossary`; `data-centres-v2` → v1; two posts → lab URLs) all use the preserved URLs, so none need editing.

## 2. Layouts

Add the orange Working-analysis notice block from `_layouts/lab.html` to `_layouts/article.html`, wrapped in `{% if page.lab_notice %}`. Then delete `_layouts/lab.html`.

In `_layouts/default.html`: remove the Lab nav link (line ~96); simplify the two `page.layout == 'lab'` conditions (og:type at line 20, the block at line 30) — migrated items are posts, so `layout == 'article'` now covers them.

## 3. Config

`_config.yml`: remove the `lab` collection and its entry under `defaults`. Optional while there: the `wip` defaults entry references a collection that no longer exists.

## 4. Index pages

`lab/index.md`: replace the listing with a stub at `/lab/` that meta-refreshes to `/writing/` (no redirect plugin is installed; keep the page so the URL doesn't 404 — it appears in old links and the About page).

`index.md` (homepage): remove the Lab section and its "All lab items →" link; the articles list now picks up ex-Lab items automatically. Consider raising the articles `limit` since one list is doing both jobs.

`writing/index.md`: no structural change — new categories (Finance, Infrastructure) flow into the filter. But reword the page description: "Completed research and analysis" no longer holds once working datasets live here.

## 5. Feed and search

`feed.xml`: remove the `site.lab` concat (lines 14–15) — `site.posts` now covers everything. Item URLs are unchanged, so subscribers see no duplicates only if the GUID is the URL — verify before committing.

Search is Pagefind over the built site, so it reindexes itself; just confirm the build step runs and reword the search page description ("writing, lab notes and portfolio").

## 6. Copy that mentions the Lab

- `newsletter/index.md`: "new articles or lab research are published".
- `about/index.md`: two mentions — the CV "Lab" section label and the OSINT/AI paragraph ("my decision to develop the Lab section of this site"). This is Bill's personal copy: flag for him to reword rather than editing silently.
- `_lab/2026-06-10-africa-data-centres-v2.md` body: "In the spirit of the Lab, we are correcting it in public" — leave it; it is a dated, published statement and the sentiment survives the section.
- `README.md`: the "adding a lab entry" instructions and frontmatter example.
- `CLAUDE.md`: the Structure section (`_lab/` description, `has_data_table`, permalink rule) — restate for posts.

## 7. Stale finding (fix while in there)

`assets/js/datatable.js` no longer exists — `assets/js/` is empty — yet `CLAUDE.md` ("the older v16 the Lab's data-centre pages still use") and `README.md` line 116 still describe it. All four data-table pages load `assets/shared/datatable.js` via the layout. Correct both files; the backport caveat about sovereignty-badge colouring is presumably resolved or moot — CC to confirm which before deleting the paragraph.

## 8. Verify

- `jekyll build` clean; grep the built site for residual `site.lab` / `layout: lab` — zero hits.
- Diff the sitemap before/after: the only acceptable changes are the `/lab/` index page and nothing else — all nine entry URLs identical.
- Open the four `has_data_table` pages (who-pays-for-dt, africa-data-centres v1 and v2, cable-factsheet): tables render, sovereignty badges intact on the data-centre pages.
- Ituri and cable factsheet PDF buttons work; feed validates; Working-analysis notice shows on all nine migrated pages and on no ordinary post.
- Nothing in Corpus to change — confirm `scripts/lint-shared-assets.py` still passes (shared assets untouched by this work).
