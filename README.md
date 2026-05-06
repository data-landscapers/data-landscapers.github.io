# Data Landscapers — data-landscapers.com

Personal and company website for Bill Anderson / Data Landscapers Ltd.
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

**Via file:** Create a new `.md` file in `_lab/` with the filename format `YYYY-MM-DD-title.md` and the following front matter:

```yaml
---
layout: lab
title: "Africa's data centre landscape: who owns the infrastructure?"
subtitle: "A continent-wide mapping of ownership, sovereignty and foreign dependency across data centres in all 54 African countries"
date: 2026-04-15
category: Infrastructure
description: Mapping ownership, sovereignty and foreign dependency across Africa's data centre landscape.
has_data_table: true
permalink: /lab/2026/04/15/africa-data-centres/
---
```


### Adding a data table to post or lab

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
_posts/         Articles (YYYY-MM-DD-title.md)
_wip/           Work in progress projects
assets/
  css/main.css  All styles
  js/datatable.js  Data table component
  data/         CSV files for data tables
  pdfs/         Downloadable documents
admin/          Decap CMS interface
```
