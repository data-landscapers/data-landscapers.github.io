# Data Landscapers — data-landscapers.com

Personal and company website for Bill Anderson / Data Landscapers Ltd.
Built with Jekyll, hosted on GitHub Pages.

## Local development

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000
```

## Deployment

Push to `main` branch. GitHub Actions builds and deploys automatically.

## Adding content

### Writing articles
**Via CMS (recommended):** Go to `data-landscapers.com/admin/` and log in with GitHub.

**Via file:** Create a new `.md` file in `_posts/` with the filename format `YYYY-MM-DD-title.md` and the following front matter:

```yaml
---
layout: article
title: "Your title"
subtitle: "Optional subtitle"
date: 2026-05-01
category: Data governance
tags: [tag1, tag2]
has_data_table: false   # set true if article contains a data table
---
```

### Adding a data table to an article

Set `has_data_table: true` in the front matter, then place the CSV in `assets/data/` and add a div:

```html
<div class="dl-datatable"
  data-src="/assets/data/your-file.csv"
  data-cols="col1,col2,col3"
  data-title="Table title">
</div>
```

`data-cols` is optional — omit to show all columns. Column names must match the CSV header row exactly.

### Adding a WIP project
Create a file in `_wip/` with front matter:

```yaml
---
layout: default
title: "Project name"
description: "One-sentence description"
status: Active   # Active | Planned | Complete
client: "Client name"
---
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
