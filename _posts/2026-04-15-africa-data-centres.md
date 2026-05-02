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
  data-src="/assets/data/data-centres-short.csv"
  data-cols="facility_id, facility_name, country, country_name, city, operational_status, year_operational, facility_type, services_offered, govt_data_hosted, operator_name, ownership_type, ownership_structure_type, ownership_chain, major_shareholders, government_ownership_pct, foreign_ownership_pct, controlling_entities, control_mechanisms, recent_investments, dfi_involvement, investment_usd, expansion_plans, key_tenants, hyperscaler_relationships, microsoft, aws, google, cloud_act_exposure, chinese_entities, foreign_dependency_score, open_source_stack, parent_hq_country, ultimate_parent_hq_country, chinese_involvement, parent_company, ultimate_parent_company, sovereignty_category, data_residency_guarantee, local_dp_compliance, total_floor_space_sqm, rack_capacity, it_capacity_mw, submarine_cable_access, ixp_presence, carrier_neutrality, gpu_ai_capability, server_vendors, cloud_platform, security_certifications, gps_coordinates, comments, source_urls"
  data-filters="country_name, facility_type"
  data-title="Africa data centre mapping"
  data-metadata-src="/assets/data/data-centres-metadata.csv"
data-full-src="/assets/data/data-centres.csv">
</div>
