---
layout: article
title: "Africa's data centre landscape: who owns the infrastructure?"
subtitle: "A continent-wide mapping of ownership, sovereignty and foreign dependency across data centres in all 54 African countries"
date: 2026-04-15
category: Data infrastructure
tags: [data centres, sovereignty, infrastructure]
description: Mapping ownership, sovereignty and foreign dependency across Africa's data centre landscape.
has_data_table: true
---

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
  data-cols="Facility Id, Facility Name, Country, Country Name, City, Operational Status, Year Operational, Facility Type, Services Offered, Govt Data Hosted, Operator Name, Ownership Type, Ownership Structure Type, Ownership Chain, Major Shareholders, Government Ownership Pct, Foreign Ownership Pct, Controlling Entities, Control Mechanisms, Recent Investments, Dfi Involvement, Investment Usd, Expansion Plans, Key Tenants, Hyperscaler Relationships, Microsoft, Aws, Google, Cloud Act Exposure, Chinese Entities, Foreign Dependency Score, Open Source Stack, Parent Hq Country, Ultimate Parent Hq Country, Chinese Involvement, Parent Company, Ultimate Parent Company, Sovereignty Category, Data Residency Guarantee, Local Dp Compliance, Total Floor Space Sqm, Rack Capacity, It Capacity Mw, Submarine Cable Access, Ixp Presence, Carrier Neutrality, Gpu Ai Capability, Server Vendors, Cloud Platform, Security Certifications, Gps Coordinates, Comments, Source Urls"
  data-filters="country_name, facility_type"
  data-title="Africa data centre survey">
</div>



*This dataset is updated as new information becomes available. If you have corrections or additions, please [get in touch](/contact/).*
