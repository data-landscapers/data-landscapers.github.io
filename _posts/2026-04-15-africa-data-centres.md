---
layout: article
title: "Africa's data centre landscape: who owns the infrastructure?"
subtitle: "A continent-wide survey of ownership, sovereignty and foreign dependency across data centres in all 54 African countries"
date: 2026-04-15
category: Data infrastructure
tags: [data centres, sovereignty, infrastructure]
description: Mapping ownership, sovereignty and foreign dependency across Africa's data centre landscape.
has_data_table: true
---

Africa's data infrastructure is growing rapidly — but who owns it? This article presents data from our continental survey of data centres across all 54 African countries, with particular attention to questions of ownership structure, sovereign control, and foreign dependency.

The data table below draws on the Africa DPI study. It covers {{ site.data.data-centres | size | default: "379" }} facilities and is filterable by country and sovereignty category.

## Key findings

Foreign ownership is the dominant pattern. Across the continent, the majority of operational data centres are owned by entities headquartered outside Africa — primarily in the United States, United Kingdom, China and South Africa. Fully African-owned infrastructure remains a minority, concentrated in a handful of countries with active digital sovereignty policies.

The sovereignty picture is more complex than ownership alone. A facility can be domestically registered but cloud-act exposed through its parent company's jurisdiction. Several government data centres use Huawei infrastructure, creating a different kind of dependency. The table below includes a sovereignty categorisation that attempts to capture this complexity.

## The data

The table can be filtered by country and sovereignty category, and sorted by any column. Click column headers to sort. Use the search box to find specific operators or facilities.

<div class="dl-datatable"
  data-src="/assets/data/data-centres.csv"
  data-cols="facility_id,facility_name,country_name,city,operational_status,facility_type,operator_name,ownership_type,sovereignty_category,cloud_act_exposure,chinese_involvement,it_capacity_mw"
  data-title="Africa data centre survey">
</div>

## Notes on methodology

Data was collected using Perplexity Computer with a standardised prompt methodology, then validated against primary sources. The sovereignty categorisation is our own and does not correspond to any official classification. See the [methodology documentation](https://data-landscapers.github.io/africa-dpi/manual/site/methodology/) for full details.

*This dataset is updated as new information becomes available. If you have corrections or additions, please [get in touch](/contact/).*
