---
type: doc
title: CLAUDE.md — data-landscapers (the main site)
last_reviewed: 2026-08-19
---

# CLAUDE.md — data-landscapers

The Jekyll site at data-landscapers.com: the writing, the Lab, the portfolio, and the shared front-end that Corpus also runs on.

**The global `CLAUDE.md` overrides this file** *(Bill, 2026-08-19)*. Committing and pushing, the writing rules, the Cowork sandbox's quirks, and the relationship between this repo and Corpus all live there. What follows is only what is true of this repo.

## This repo is upstream of Corpus

**Corpus (`C:\CORPUS`) is an extension of this site, not a separate one**, and shares its style and functionality wherever possible. The consequence for anyone working here is that **the front end is not only this site's**: a change to type, colour, chrome or a shared component changes both, and Corpus finds out by copying, not by being told.

`assets/shared/` is the canonical home for anything both sites run. It currently holds `datatable.js` and `datatable.css` — the sortable, filterable CSV table, which Corpus serves on every country's finance page. Corpus keeps a copy and a `DATATABLE-FROM` marker naming the commit it took, and `scripts/lint-shared-assets.py` over there reports when the two have drifted apart. **Change the shared copy here, not the one in Corpus**; a fix made downstream is a fix this site never gets, and the next copy down reverts it silently.

`assets/css/main.css` works the same way from the other direction: this is the original, and Corpus's copy records its provenance in `MAIN-CSS-FROM`.

**`assets/js/datatable.js` is not the shared one.** It is the older v16 the Lab's data-centre pages still use, and it is on borrowed time: the shared component is a straight improvement on it — column widths solved from the data rather than left to the browser, a working scrollbar, a row expander — but it dropped the sovereignty-badge colouring that page depends on, so the backport waits until that is generalised. Do not point a new page at it.

## Structure

Standard Jekyll. `_posts/` is the writing, `_lab/` is the Lab, and both render through `_layouts/`. Lab entries set `has_data_table: true` in their frontmatter to pull in the table script, and `permalink:` explicitly, because the Lab's URLs are dated by publication rather than by Jekyll's default.

`assets/data/` holds the published datasets — one CSV per release, plus a `-metadata.csv` saying what each column means, and usually a `-display.csv` subset that the table on the page actually reads. **The display subset is not a summary and never a different set of numbers**: it is the same rows with fewer columns, so that a page can open on what a reader scans by while the full file stays one download away.

`generate_pdf_index.py` builds `_pdf_index/`. `brandpack/` and `admin/` are not part of the built site.

## Datasets

**A dataset published here is a citable artefact.** The data-centre release was corrected in public rather than quietly amended, and that is the pattern: a revision is a new version with its own page, its own date and a *What changed* section that says plainly what was wrong. `_lab/2026-06-10-africa-data-centres-v2.md` is the worked example, down to naming the three systematic errors in v1's classification.

Figures carry their date and the currency they were announced in. A classification rubric is ours and says so.
