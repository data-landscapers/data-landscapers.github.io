# Data Landscapers — data-landscapers.io

Personal and company website for Bill Anderson / Data Landscapers Ltd
Built with Jekyll by Claude, hosted on GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

## Deployment

Push to `main` branch. GitHub Actions builds and deploys automatically.

## Adding content

### Writing 'live' articles

**Via file:** Create a new `.md` file in `_posts/` with the filename format `YYYY-MM-DD-title.md` and the following front matter:

```yaml
---
layout: article
title: "Your title"
subtitle: "Optional subtitle"
description:
date: 2026-05-01
category: Governance
pdf: /assets/pdfs/optional-download.pdf # omit if no PDF
has_data_table: false   # set true if article contains a data table
---
```

### Writing 'work in progress' articles

The Lab section was merged into Writing (August 2026). A working paper or live dataset is an ordinary post in `_posts/` with one extra front-matter line:

```yaml
lab_notice: true   # renders the orange "Working analysis" disclaimer
```

Entries migrated from the old `_lab/` collection keep their original `/lab/YYYY/MM/DD/title/` URLs via an explicit `permalink:` line — those URLs are cited and must never change. New working papers use the normal post URL scheme (no explicit permalink needed).

### Adding a data table to a post

Set `has_data_table: true` in the front matter, then place the CSV in `assets/data/` and add a div:

```html
<div class="dl-datatable"
  data-src="/assets/data/your-file.csv"
  data-metadata-src="/assets/data/downloadable-metadata.csv
  data-cols="col1,col2,col3"
  data-filters="col2,col3"
  data-title="Table title">
</div>
```

`data-cols` is optional — omit to show all columns. Column names must match the CSV header row exactly.

### Inserting an image

```html
<figure style="width: 60%; margin: 1.5rem auto;">
  <img src="/assets/uploads/filename.jpg" alt="Description">
  <figcaption>Caption if needed</figcaption>
</figure>
```

margin: auto = centre, 0 = left

### Two images side-by-side

```html
<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/image1.jpg" alt="Description one">
    <figcaption>Caption one</figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/image2.jpg" alt="Description two">
    <figcaption>Caption two</figcaption>
  </figure>
</div>
```

### Adding a portfolio document
Add to /_data/portfolio.yml

```yaml
- date: September 2024
  title: "Digital Compacts: Global Ideals, Regional Realities"
  url: /assets/pdfs/digital-compacts-global-ideals-regional-realities.pdf
  category: Governance
  description:
```

## Structure

```
_layouts/       Page templates
_includes/      Reusable partials
_posts/         Articles and working papers (YYYY-MM-DD-title.md)
assets/
  css/main.css  All styles
  shared/       Data table component (canonical; Corpus carries a copy)
  data/         CSV files for data tables
  pdfs/         Downloadable documents
admin/          Decap CMS interface
```
