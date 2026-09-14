---
layout: article
title: Introducing Corpus
subtitle: A new research assistant for African digital transformation
date: 2026-09-14
author: Bill Anderson
category: OSINT
summary: Corpus is a website containing a range of reports and datasets classifying, summarising and indexing public documents covering digital transformation in Africa. It is updated daily. 
has_data_table: false

---
Digital transformations across Africa are becoming increasingly difficult to keep track of. Firstly because there is a lot going on. Secondly because there is a lot more information available. Thirdly because the dividing line in the narrative between bad news and good news is complex. Corpus is an attempt to overcome some of the obstacles experienced by researchers, analysts and writers across Africa in maintaining an up-to-date evidence base. It is offered to our community as a digital public good.

> **corpus**, *noun.* a large, structured collection of written or spoken texts used for research and analysis

### Content

[Corpus](https://corpus.data-landscapers.io/) collects publicly available news and documents on digital transformation, digital public infrastructures and data governance covering the whole of Africa. As of today:
- It contains over 21,000 documents.
- Over 1,500 have been newly published this month.
- They are classified geographically by country and region.
- They are categorised into [38 topics](https://corpus.data-landscapers.io/methodology/lookups/#topics).
- They are linked to [121 indicators](https://corpus.data-landscapers.io/methodology/lookups/#indicators).

It provides a suite of reports:
- A [bulletin](https://corpus.data-landscapers.io/bulletin/) summarises yesterday's news (updated every night).
- Monthly updates collate the daily updates for the past month.
- [Country](https://corpus.data-landscapers.io/countries/) status reports assess the overall maturity of a country across the 38 topics.
- Country progress reports track developments for each of the 121 indicators over the past 12 months.
- [Topic](https://corpus.data-landscapers.io/topics/) progress reports pivot the country data to report developments by country for each indicator.
- The [catalogue](https://corpus.data-landscapers.io/catalogue/) allows you to filter and download a reading list for your specific purposes.
- [Financial](https://corpus.data-landscapers.io/finance/) reports monitor all non-state investments. (A separate report on national budgets and expenditure is still under development.)

Corpus stores the full text of all documents in a private repository. For copyright reasons this cannot be shared. All the documents in the repository have been retrieved from public online sites. None from behind paywalls or the deep web. The site's outputs are derived from metadata and text summaries.

### Under the bonnet

Corpus is designed, developed and maintained by myself. Internet searches are delegated to Exa. Coding and the running of all processes are delegated to Claude Code (currently using Opus). Source hallucination is not possible as the entire output of the site is derived from the stored documents. Claude is, however, responsible for classification and summarising and the accuracy of these is subject to the normal AI disclaimers. A feedback link is available on every page for users to submit comments or queries on the quality of the reporting.

The repository is maintained semi-automatically by two networked machines: the one searches, collects and classifies; the other analyses and reports. The two machines monitor the quality of each other's work and processes for them to report and fix errors are part of the workflow. The [methodology ](https://corpus.data-landscapers.io/methodology/)is described in detail on the site and the two github repositories (with the exception of the full text) are publicly available.