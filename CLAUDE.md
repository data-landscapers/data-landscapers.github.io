---
type: doc
title: CLAUDE.md — data-landscapers (the main site)
last_reviewed: 2026-08-19
---

# CLAUDE.md — data-landscapers

The Jekyll site at data-landscapers.io: the writing (which since 2026-08-27 includes the retired Lab's working papers and datasets), the portfolio, and the shared front-end that Corpus also runs on.

**The global `CLAUDE.md` overrides this file** *(Bill, 2026-08-19)*. Committing and pushing, the writing rules, the Cowork sandbox's quirks, and the relationship between this repo and Corpus all live there. What follows is only what is true of this repo.

## This repo is upstream of Corpus

**Corpus (`C:\CORPUS`) is an extension of this site, not a separate one**, and shares its style and functionality wherever possible. The consequence for anyone working here is that **the front end is not only this site's**: a change to type, colour, chrome or a shared component changes both, and Corpus finds out by copying, not by being told.

`assets/shared/` is the canonical home for anything both sites run. It currently holds `datatable.js` and `datatable.css` — the sortable, filterable CSV table, which Corpus serves on every country's finance page. Corpus keeps a copy and a `DATATABLE-FROM` marker naming the commit it took, and `scripts/lint-shared-assets.py` over there reports when the two have drifted apart. **Change the shared copy here, not the one in Corpus**; a fix made downstream is a fix this site never gets, and the next copy down reverts it silently.

`assets/css/main.css` works the same way from the other direction: this is the original, and Corpus's copy records its provenance in `MAIN-CSS-FROM`.

*(The old `assets/js/datatable.js` — the pre-shared v16 — is gone: `assets/js/` is empty and every data-table page loads `assets/shared/datatable.js` through the article layout. Noted 2026-08-27 because this file used to warn about it; the warning is retired with the file.)*

## Structure

Standard Jekyll. `_posts/` is the writing — essays and, since the Lab merged into Writing (2026-08-27), working papers and datasets too. A working paper sets `lab_notice: true` to render the orange *Working analysis* disclaimer, and any entry with a table sets `has_data_table: true` to pull in the table script. **The nine entries migrated from the old `_lab/` collection keep their `/lab/YYYY/MM/DD/title/` URLs via explicit `permalink:` lines — those URLs are cited (including by Corpus's published catalogues) and must never change.** New posts take Jekyll's default dated URL; `/lab/` itself is a stub that redirects to `/writing/`.

`assets/data/` holds the published datasets — one CSV per release, plus a `-metadata.csv` saying what each column means, and usually a `-display.csv` subset that the table on the page actually reads. **The display subset is not a summary and never a different set of numbers**: it is the same rows with fewer columns, so that a page can open on what a reader scans by while the full file stays one download away.

`generate_pdf_index.py` builds `_pdf_index/`. `brandpack/` and `admin/` are not part of the built site.

## Datasets

**A dataset published here is a citable artefact.** The data-centre release was corrected in public rather than quietly amended, and that is the pattern: a revision is a new version with its own page, its own date and a *What changed* section that says plainly what was wrong. `_posts/2026-06-10-africa-data-centres-v2.md` is the worked example, down to naming the three systematic errors in v1's classification.

Figures carry their date and the currency they were announced in. A classification rubric is ours and says so.
