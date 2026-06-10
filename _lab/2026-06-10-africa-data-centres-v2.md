---
layout: lab
title: "Sub-Saharan Africa's data centre landscape: who owns the infrastructure? (v2)"
subtitle: "A mapping of ownership, control and foreign dependency across data centres in Sub-Saharan Africa — revised and re-verified"
date: 2026-06-10
category: Sovereignty
summary: A revised attempt to collect data on Sub-Saharan Africa's data centres with a particular focus on ownership and influence. Includes a downloadable dataset and the metadata instructing Perplexity how to collect the data.
description: Dataset and metadata on the ownership of data centres in Sub-Saharan Africa.
has_data_table: true
permalink: /lab/2026/06/10/africa-data-centres-v2/
---


Africa's data infrastructure is growing rapidly — but who owns it? This dataset collates publicly available information on data centres across Sub-Saharan Africa: 306 facilities in 46 countries, each traced to its ultimate controlling owner.

This is the second release, with two substantial changes from the [first version (15 April 2026)](/lab/2026/04/15/africa-data-centres/): the scope has narrowed from the whole continent to Sub-Saharan Africa, and the sovereignty categorisation — which on red-teaming did not hold up — has been rebuilt. See *What changed* below. In the spirit of the Lab, we are correcting it in public.

## Key findings

**African control is the dominant pattern — the reverse of what we first reported.** 

Once ownership is traced through offshore holding companies to the people, institutions and states that actually control each facility, 213 of the 306 facilities (70%) are under African control — control in the de jure sense: the legal power to decide. (Whether that power is freely exercised is a separate question, taken up below.) Restricting the selection to the facilities that constitute a market — operational, carrier-neutral colocation and hyperscale sites — the share holds: 103 of 154 (67%), spread across 31 countries.

**US-controlled operators are fewer but deeper.** 

They run 39 facilities (13%), of which 82% are concentrated in just three countries — South Africa, Nigeria and Kenya. Facility counts are not megawatts: by capacity, the US-controlled estate (led by Digital Realty's Teraco and iColo holdings) remains the deepest on the continent. African operators have the breadth; US operators have the depth.

**No facility in the register has a Chinese ultimate owner.**

China's exposure runs through a different layer entirely: Huawei and ZTE equipment, construction or financing is present in 170 facilities (56%). That is a real dependency — but it is a procurement and vendor dependency, not an ownership one, and the dataset now records it as such.

**Ownership is the foundation of sovereignty, not the whole of it.**

De jure control tells you who *can* decide; it does not guarantee that decisions are made free of external pressure. Influence travels through channels that ownership data cannot see: anchor tenancy and interconnection — a hyperscaler is present in 112 of the 213 African-controlled facilities (53%) — revenue concentration around a single foreign tenant, development-finance lending covenants, and the equipment layer, where 102 of the African-controlled facilities (48%) were built or fitted out by Chinese vendors. An African-owned operator whose largest customer is Microsoft, whose loans answer to a DFI and whose hardware roadmap is set in Shenzhen has sovereignty of a real but bounded kind. The dataset therefore records these influence channels as separate fields alongside the control category — so that dependency can be measured and argued about, rather than either collapsed into "foreign control" (the first release's error) or defined out of existence (which would be this release's error if we claimed ownership settled the matter).

**Control is rarely simple.**

Eleven facilities are under genuinely joint African/foreign control, and 38 classifications are flagged medium- or low-confidence where the judgment is contestable (foreign-domiciled but African-led investors; state facilities under foreign operating contracts). The confidence flag and a per-row rationale are included so you can disagree with us precisely.

## What changed in this version

**Scope.**

The dataset now covers Sub-Saharan Africa only. The 71 facilities in Algeria, Egypt, Libya, Morocco and Tunisia recorded in the first release have been removed — a resourcing decision, since every retained row has been individually re-verified and North Africa would have doubled that cost in two of the continent's largest markets. The North African landscape deserves the same treatment and may return in a future release; in the meantime, no finding on this page should be read as a claim about it.

**Classification.**

The first release derived its sovereignty categories too mechanically from registered domicile and vendor presence. Three systematic errors resulted: African-controlled groups held through Mauritius, Dubai or London vehicles were classified as foreign (Axian, WIOCC, Onix, CSquared); one major African group was classified as US-controlled on the basis of minority investment and lending (Cassava/Africa Data Centres); and facilities with Chinese contractors were classified as Chinese-controlled when not one has a Chinese owner.

The revised classification follows three rules.
- **Control follows people and institutions, not holding-company domicile.** 
- **Hyperscaler involvement** (tenancy, interconnection, minority equity) is recorded as a separate flag. It does not transfer legal control — but it can shape an operator's behaviour as surely as ownership does, which is why it is recorded rather than ignored.
- **Chinese involvement** is separated into ownership, financing, and construction/equipment roles.

## Methodology

Data was collected using Perplexity Computer with a standardised prompt methodology. The control classification was red-teamed and re-derived with Claude, then citations were re-verified facility-by-facility with Perplexity Computer. The classification rubric is our own and does not correspond to any official scheme. Known limitations remain: facility granularity varies by operator (some campuses are recorded as one entry, others per building); IT capacity is missing for most rows, so no capacity-weighted analysis is possible from this file; and facility counts should never be read as market share.

## The data

The table below is a display subset of the key ownership and control fields. It can be filtered by country and control category, and sorted by any column; use the search box to find specific operators or facilities. The full dataset (57 fields, including ownership chains, shareholders, tenants, certifications and per-row classification rationales) is available for download below the table.

<div class="dl-datatable"
  data-src="/assets/data/data-centres-v2-display.csv"
  data-cols="facility_id, country_name, facility_name, city, operational_status, year_operational, facility_type, control_category, control_rationale, hyperscaler_presence, chinese_role, operator_name, ownership_type, major_shareholders, controlling_entities, control_mechanisms, dfi_involvement, investment_usd, key_tenants, ultimate_parent_hq_country, ultimate_parent_company, control_confidence"
  data-filters="country_name, facility_type, control_category"
  data-title="Africa data centre mapping"
  data-full-src="/assets/data/data-centres-v2.csv"
  data-metadata-src="/assets/data/data-centres-metadata-v2.csv">
</div>

