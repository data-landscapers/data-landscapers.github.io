---
layout: lab
title: Who pays for African digital transformation?
subtitle: Assembling a $144 Billion Puzzle from a Thousand Scattered Pieces
date: 2025-09-15
category: Finance
tags: [international finance, digital transformation, OSINT]
description: There is no comprehensive data available on the financing of digital transformation in Africa. Is open source intelligence using AI deep search ready to tackle this problem? This article includes a dataset of 1,454 records and the methodology used to instruct Perplexity to collect the data.
has_data_table: true
permalink: /lab/2025/09/15/who-pays-for-dt/
---


## The problem

How is digital transformation and digital public infrastructure (DPI) in Africa being ﬁnanced? How much, on what and by whom? This would seem to be a very basic question to which no one has attempted to provide anything nearing a comprehensive answer.

-   Official development assistance recorded by the OECD and IATI excludes most non-OECD members. Who is keeping track, for example, of Chinese, Russian, Indian, Turkish and many Gulf state investments?
-   No comparable data on domestic ﬁnancing is gathered at a regional or continental level and the coding of national accounts data submitted to the IMF does not answer the right questions.
-   Most data on FDI and other private sector investments, where available, sits behind expensive paywalls.
-   OECD, IMF, World Bank and UN sector classiﬁcations have not kept up with technological developments over the past decade. How do you ﬁnd structured data on digital transformation and DPI when the systems are unaware of these concepts?

However, while structured data systems might be lagging behind, the internet continues to expand the availability of news, academic research, industry intelligence and information in general. Open source intelligence can now provide a pretty good answer to these questions. The problem is this takes a lot of time and a lot of human quality checking.

## A solution?

Can deep search, natural language processing and large language models provide an answer?

What follows is an initial analysis of a database of 1,454 records of investment in 54 African countries between 2015 and the present (September 2025) built entirely by [Perplexity](https://www.perplexity.ai/help-center/en/articles/10352155-what-is-perplexity). You can view and download the database and metadata at the foot of this article.

## How reliable is this data? 

This is Perplexity’s explanation:

### What You CAN Rely On:

-   *I can access and synthesize large amounts of non-mainstream data that would take you weeks to ﬁnd manually*
-   *I can identify patterns and connections across diverse sources that aren't easily visible*
-   *I provide good starting points and directional insights for complex research questions*
-   *I can compile comprehensive datasets from multiple authoritative sources*

### What You CANNOT Fully Rely On:

-   *Perfect accuracy of every data point without your own veriﬁcation*
-   *My ability to assess source credibility with the same expertise you have in your ﬁeld*
-   *Complex geopolitical interpretations that require deep contextual knowledge*
-   *URLs remaining accessible or sources being exactly as represented*

### Recommendation for Your Research Approach

-   *Use my capabilities as a research accelerator and pattern detector, not as a ﬁnal authority.*

As I summarise initial ﬁndings I’m going to describe the data as I ﬁnd it and will not continually repeat disclaimers and make excuses for inaccuracies. This is the starting point in an exercise that will hopefully improve with experience. The intention moving forward is to ﬁne tune the training methodology rather than ﬁx the data manually.

## Some results

Over the past decade $144 billion has been invested in ICT Infrastructures (ICT), digital transformation (DT) and digital public infrastructures (DPI) …

<figure style="width: 70%; margin: 1.5rem auto;">
<img src="/assets/uploads/dpi-financing-v1-1.png">
<figcaption>Geographic spread of financing</figcaption>
</figure>

… split almost equally between domestic and international investments.

Predictably, the proportion of investments coming from domestic resources increases in richer countries. Low income countries invest half as much as upper middle income countries from domestic sources.

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-2.png">
  <figcaption>Source of finance by income group</figcaption>
</figure>

New investments peaked in 2020 and have fallen off drastically since then. (NB that many investments span multiple years – the graph shows the start year for each investment)

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-3.png">
  <figcaption>Start year of financial commitments</figcaption>
</figure>

Quantifying investments by focus or sector is a little difficult as 30% have been classiﬁed non-speciﬁcally as relating generally to DT or DPI. Improvements to the prompt instructions are required to disaggregate this classiﬁcation. The estimate of only 5% going to Digital Id is likely to be understated. The ﬁgure for ICT infrastructure is likely to be more accurate as it easier to deﬁne.

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-4.png">
  <figcaption>Investments by sector</figcaption>
</figure>

The private sector contributes over half of all domestic investments, but the majority of this goes to ICT infrastructure ...

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-5.png">
    <figcaption>Domestic investments by type of source</figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-6.png">
    <figcaption>Domestic ICT Infrastructure Investments by type of source</figcaption>
  </figure>
</div>

… while government budgets provide over half of non-ICT investments, with only 17% on ICT infrastructure.

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-7.png">
    <figcaption>Non-ICT domestic investments by type of source</figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-8.png">
    <figcaption>Domestic government investment by sector</figcaption>
  </figure>
</div>


Only eight countries have more than 20 percent of investments from government budgets.

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-9.png">
  <figcaption>Top 15 government budget share of investments</figcaption>
</figure>


International investments are still dominated by bilateral and multilateral institutions. Multilateral investments are dominated by the World Bank, African Development Bank and the European Union.

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-10.png">
    <figcaption>International investments by type of source</figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-11.png">
    <figcaption>Multilateral investments</figcaption>
  </figure>
</div>



OECD countries account for less than 40% of bilateral investments, but the picture changes when ICT infrastructure is removed from the frame (but note the presence of India, Russia, Türkiye and Brazil)

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0;">
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-12.png">
    <figcaption>Share of bilateral investments</figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; min-width: 200px">
    <img src="/assets/uploads/dpi-financing-v1-13.png">
    <figcaption>Share of bilateral investments excluding ICT infrastructure</figcaption>
  </figure>
</div>


You will be hard-pressed to ﬁnd another comparable list of top investors as this …

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-14.png">
  <figcaption>Top 20 international investors</figcaption>
</figure>

… nor this.

<figure style="width: 70%; margin: 1.5rem auto;">
  <img src="/assets/uploads/dpi-financing-v1-15.png">
  <figcaption>Top five investors in each sector</figcaption>
</figure>

## Things to do

-   Do a deep dive into a number of countries to manually verify results.
-   Identify glaring inaccuracies and engage with Perplexity to understand the errors in its logic.
-   Manually recode the “DPI/DT General” classiﬁcations and devise instructions for Perplexity to reﬂect this recoding.
-   Rerun the exercise for selected countries and check manually for improvements.
-   Rebuild the entire database.

## Methodology

### Technology

The data used in this work has been collected using [Perplexity Max](https://www.perplexity.ai/help-center/en/articles/11680686-perplexity-max) in [Labs mode](https://www.perplexity.ai/help-center/en/articles/11144811-perplexity-labs).

### Training

A workspace was created in Perplexity with the following context instructions:

> This space is for critical research on the question of digital public infrastructures (DPI) in Africa. It needs to question the 'orthodoxy' which began in India and has been strongly promoted by Bill Gates that the essentials of DPI are digital identity, digital payments and data exchange. It needs to question the way in which technology is seen as the driver rather than the servant of digital transformation. It needs to understand that Africa requires open borders and markets within the continent while protecting itself against the imperial interests of Big Tech. It needs to find a pragmatic, problem solving approach to digital transformation in Africa. it needs to recognise regional and continental collaboration and leadership. The output from this research may end up being critical of some of the thought leaders in this field. It is thus really important that all output on this space is thoroughly referenced.

I began by prompting Perplexity for a methodology:

> I need a template that I can use to document all financing for DPI, digital transformation, ICT infrastructures and data governance for a single African country. It must cover: domestic official and private investments and loans; all cross-border investments from all types of sources and types of financing. It should cover all commitments since 2015

It produced a template and a set of guidelines. Using these I asked it to produce a country profile for South Africa and it produced a set of data and an analysis.

At this point I realised that producing 54 pdfs containing data was a bad idea and so asked Perplexity to change course.

I created a set of metadata to store the data in a structured csv file and built a set of instructions to be followed:

>Follow these instructions for the country named in the prompt. Using all the background motivations and guidance that you have prepared in the attached DPI_Financing_Template.pdf and using the logic required to construct all the tables in dpi-financing-template.md can you produce a single csv file following the structure, definitions and values in African_DPI_Finance_Metadata.csv. Restrict cell outputs to specified values where present. Where present follow the logic in the Comments column. Each row in the output should represent an investment (matching the table rows in your template). Your results should include comprehensive answers for the following:
> - What are all domestic budget allocations for digital infrastructure, e-government, digital ID, digital payment systems, and ICT development from 2015 to present? Include ministry budgets, special funds, and PPP commitments.
> - List all World Bank, AfDB, EU, UN, bilateral development partner and philanthropic investments in the country's digital transformation, DPI, ICT infrastructure, and data governance from2015 to present. Include project names, amounts, and implementation periods.
> - What private sector investments (domestic and foreign) have been made in the country's digital infrastructure, fintech, telecommunications, and technology sectors from 2015 to present? Include venture capital, private equity, and corporate investments. Include project names, amounts, and implementation periods.
> - How much has the country received from African regional digital initiatives like SmartAfrica, AU Digital Transformation Strategy, and regional economic community digital programs from 2015 to present?
Please avoid double counting: if a single investment comes from more than one source or targets more than one sector please attempt to split the Amount so that all values in the Amount column add up to a genuine total for a country.
>Please attempt the best possible choice for the Sector column. I know this can be difficult. Use the Comments column to explain your choice where this has been difficult. Please make a particular effort to identify investments from non-OECD countries (eg the BRICS+ countries) where data is generally more difficult to find.
If these instructions are unclear or ambiguous please stop processing and ask me to clarify these instructions.

### Data production

I then ran the prompt 54 times for each country separately. I checked this decision half way through:

> A question for you: I have prompted you for each African country separately in the belief that this will deliver better detail. Am I correct? If I had asked you to carry out these instructions for all African countries in a single prompt would I have got the same result?

Perplexity agreed that a single aggregated prompt would not have provided the level of detail.

The 54 separate csv outputs were concatenated into a single excel worksheet.

### Accuracy

As with all large language models a disclaimer is necessary. While Perplexity is [generally regarded](https://zapier.com/blog/perplexity-vs-chatgpt/) as being more accurate as a search engine compared to others, including ChatGPT 5.0, it still requires verification.

This is how Perplexity explained it own strengths and weaknesses in relation to this work:

“The Reliability Question. Here's my honest assessment of what you can and cannot rely on from my research:

**What You CAN Rely On:**
    -   I can access and synthesize large amounts of non-mainstream data that would take you weeks to find manually
    -   I can identify patterns and connections across diverse sources that aren't easily visible
    -   I provide good starting points and directional insights for complex research questions
    -   I can compile comprehensive datasets from multiple authoritative sources
**What You CANNOT Fully Rely On:**
    -   Perfect accuracy of every data point without your own verification
    -   My ability to assess source credibility with the same expertise you have in your field
    -   Complex geopolitical interpretations that require deep contextual knowledge
    -   URLs remaining accessible or sources being exactly as represented
**Recommendation for Your Research Approach**
    -   Use my capabilities as a research accelerator and pattern detector, not as a final authority.
**I can:**
    -   Rapidly map the landscape of non-OECD/non-World Bank digital infrastructure financing in Africa
    -   Identify contradictions between different development models (Chinese, EU, African-led vs. Gates Foundation/World Bank orthodoxy)
    -   Compile comprehensive datasets from diverse sources
    -   Surface lesser-known initiatives that challenge mainstream narratives.
-   The bottom line
    -   I'm most valuable as an intelligent research assistant that can rapidly surface non-mainstream data and connections, not as a replacement for expert verification and analysis.


## The Data

<div class="dl-datatable"
  data-src="/assets/data/dpi-financing-v1.csv"
  data-cols="Country Name, Source Geography, Source Institution Type, Year From, Year To, Source Country, Source Name, Project Name, Project Details, Amount, Original Currency, Exchange Rate, Exchange Rate Year, Finance Type, Sector, Status, Terms, Comments, Source urls, Country Code"
  data-filters="Country Name, Sector"
  data-title="Financing of Digital Transformation"
  data-metadata-src="/assets/data/dpi-financing-metadata-v1.csv">
</div>
