---
lab_notice: true
title: "Africa's data centre landscape: who owns the infrastructure?"
subtitle: "A continent-wide mapping of ownership, sovereignty and foreign dependency across data centres in all 54 African countries"
date: 2026-04-15
category: Infrastructure
summary: A first attempt to collect data on Africa's data centres with a particular focus on ownership and influence. Includes a downloadable dataset and the metadata instructing Perplexity how to collect the data.
description: Dataset and metadata on the ownership of data centres in Africa.
has_data_table: true
permalink: /lab/2026/04/15/africa-data-centres/
---

[**This dataset is now live on the Corpus repository**](https://corpus.data-landscapers.io/datasets/data-centres/)

Africa's data infrastructure is growing rapidly — but who owns it? This dataset collates publicly available information on data centres across all 54 African countries.


## Key findings

Foreign ownership is the dominant pattern. Across the continent, the majority of operational data centres are owned by entities headquartered outside Africa — primarily in the United States, United Kingdom, China and South Africa. Fully African-owned infrastructure remains a minority, concentrated in a handful of countries with active digital sovereignty policies.

The sovereignty picture is more complex than ownership alone. A facility can be domestically registered but cloud-act exposed through its parent company's jurisdiction. Several government data centres use Huawei infrastructure, creating a different kind of dependency. The table below includes a sovereignty categorisation that attempts to capture this complexity.

## Methodology

Data was collected using Perplexity Computer with a standardised prompt methodology, then validated against primary sources. The sovereignty categorisation is our own and does not correspond to any official classification. See the [methodology documentation](https://data-landscapers.github.io/africa-dpi/manual/site/methodology/) for full details.

## The data

The table can be filtered by country and sovereignty category, and sorted by any column. Click column headers to sort. Use the search box to find specific operators or facilities.

<div class="dl-datatable"
  data-src="/assets/data/data-centres.csv"
  data-cols="facility_name, country_name, city, operational_status, facility_type, operator_name, ownership_type, sovereignty_category, parent_hq_country"
  data-filters="country_name, facility_type, sovereignty_category"
  data-badges='{"sovereignty_category": {"Fully African": "green", "African with hyperscaler involvement": "blue", "Non-US/CN Foreign": "amber", "US/CN Control": "red"}}'
  data-detail="comments"
  data-title="Africa data centre mapping"
  data-full-src="/assets/data/data-centres.csv"
  data-metadata-src="/assets/data/data-centres-metadata.csv">
</div>
