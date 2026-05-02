---
layout: article
title: "Africa we have a data problem"
subtitle: 'The view from the ground floor of African digital transformation'
date: 2026-03-31
tags: [rural infrastructure, foundational data, digitalisation, Africa]
description: Across Africa rural clinics, schools, registry offices and police stations continue to rely on paper.
has_data_table: true
---

## The prompt

Many African capitals are abuzz with tech solutions. Digital public infrastructures are being built, AI is being explored, the majority of the urban dwellers are connected. But what about the 50 per cent of the continent's population living in rural areas?

[Brian Chiware writing on LinkedIn in March](https://www.linkedin.com/posts/brianchiware_we-havent-finished-documenting-zimbabwe-activity-7442827730242650112-Dr2R) raised the paradox of Zimbabwe's new [National AI Strategy](https://veritaszim.net/sites/veritas_d/files/Zimbabwe%20National%20Artificial%20Intelligence%20Strategy.pdf). He observes

>   "The strategy correctly identifies data silos as a blocker. But silos assume the data exists somewhere. Much of Zimbabwe's most critical data has never been created in machine-readable form at all."

This struck a chord. Five years ago my colleague Bernard Sabiti and I summarised our learnings from mapping national data infrastructures in [*The data side of leaving no one behind.*](/assets/pdfs/data-side-of-lnob.pdf)

>   "Influenced by our field visits away from the upstream (from national to global) focus of capital cities, we have over time developed a common set of recommendations that we have repeated with increasing confidence. National data infrastructures need to be built from the bottom up. Primary schools, clinics and local government offices are the most widespread physical embodiments of public administration and service delivery. We have therefore argued for the largest part of investments to be concentrated in the digital transformation of these three areas: health management information covering facility-level service delivery; education management information covering the performance of primary schools; and birth registration including the issuance of a legal identity. In this way, a robust national backbone can be constructed that provides both a shareable technical infrastructure and a culture of data use that can catalyse the development of other systems."

I took the photo below while visiting a primary healthcare clinic in Bauchi in 2019. It is the summary of the clinic's activities for a month. In the schools and clinics we visited paper ruled. That was six years ago. Vast amounts of donor dollars have been spent on digital technologies since then. So what has improved?

![DHIS2 Monthly entry form](/assets/uploads/nigeria-dhis2-form.jpeg)

The short answer, drawn from a systematic review of all 54 African countries: not much. Not a single country has achieved full digitalisation across all four areas of public service. Eight per cent — 17 of 215 facility-type combinations assessed — can be considered mostly digital. The rest are still on paper, or on paper pretending to be on the road to something else. The details follow.

## The task

I am a daily user of the Perplexity search engine, which, combined with analysis managed by Claude Opus, is turning into an increasingly reliable open-source intelligence machine. It has proven itself over recent months in performing deep dives on single topics in a single country. Now, with the addition of [Perplexity Computer](https://www.perplexity.ai/hub/blog/introducing-perplexity-computer) I'm able to run a single set of instructions across all 54 African countries.

I instructed Perplexity answer, for each country, four questions:

-   Do rural primary healthcare clinics record data on their patients on paper or digitally?
-   Do rural primary schools record administrative and learning outcomes data on paper or digitally?
-   Do rural registry offices record births on paper or digitally?
-   Do rural police stations record their cases on paper or digitally?

And to answer in one of four ways:

1.  Entirely paper
2.  Mostly paper
3.  Mostly digital
4.  Entirely digital

You can view and explore the results on [this interactive dashboard](https://data-landscapers.com/africa-digital/), and view or download the raw data at the foot of this post.

## The results

For the realists the message is stark. Of the 216 groups of facilities assessed:

-   Not a single one can claim to be fully digitalised.
-   Only eight per cent can claim to be mostly digital on their way to full digitalisation.

There is, though a possible silver lining for the optimists:

-   Fifty eight per cent are on the road to digitalisation, where the country has adopted a digital system but is taking time to deploy it.

![Digital status by facility](/assets/uploads/rural-digital-1.png)

Ranking countries also reveals some surprises. Beyond the usual suspects Eswatini, Cabo Verde and Guinea appear in the top ten.

<figure>
<img src="/assets/uploads/rural-digital-2.png" alt="Top ranked countries">
<figcaption>1 = Paper only; 2 = Mostly paper; 3 = Mostly digital</figcaption>
</figure>


## The conclusion

If you explore the interactive dashboard and read the country system assessments you will find repetitive explanations for these depressing results.

-   **Benin clinics**  
    Barriers: poor infrastructure (power, internet), low ICT skills, funding gaps.
-   **Burundi schools**  
    Digital systems are limited to isolated donor-funded pilots,
-   **Cameroon schools**  
    Key barriers: electricity/internet shortages, no equipment (66.6% admin structures lack computers), insufficient training, funding reliance on donors.
-   **Ethiopian Clinics**  
    Key barriers include unreliable electricity and internet at rural health posts, low digital literacy, heavy workloads creating dual paper-digital reporting burdens, and staff turnover.
-   **South Africa Police** The national ICDMS system aims for electronic case management but faces poor implementation, low training, lost dockets, and no external linkages.
-   **Tanzanian Schools**  
    National EMIS/BEST relies on annual paper forms (TSA) from schools, with rural data gaps due to poor infrastructure, electricity/internet shortages, low digital literacy, and uneven ICT distribution.
-   **Zimbabwe Police**  
    Plans for an electronic docket system and internet provision to rural stations remain unimplemented, with no evidence of rural rollout or pilots shifting the norm.

The bottom line is that few countries (or donors for that matter) are taking real digital transformation seriously. Blinded by the shiny new toys on offer.

As Brian Chiware noted:

>   The foundation this strategy is being built on has a problem nobody is naming directly. We call it a data problem. What it actually is: an undocumented country.

## A note on methodology

The data underlying this analysis was generated using Perplexity Computer, with verification and scoring handled by Claude Opus. For each of Africa's 54 countries, the same four questions were posed: whether rural primary healthcare clinics, rural primary schools, rural registry offices, and rural police stations record their data on paper or digitally. Each country-facility combination was scored on a four-point scale:

1 — Paper only: No digital system exists or is in routine use at the rural facility level

2 — Mostly paper: A digital system has been mandated or adopted nationally, but implementation in rural areas remains partial, inconsistent, or dependent on subsequent manual transcription

3 — Mostly digital: A digital system is in active use at most rural facilities, though gaps remain

4 — Fully digital: Universal digital recording at the point of service, with no paper fallback

Scores were assigned based on synthesis of government policy documents, peer-reviewed research, reports from international bodies (WHO, UNESCO, UNODC, World Bank), and country-specific news sources.

The data was manually sense checked and run through a number of correcting iterations. The assessments in the raw data and on the dashboard are untouched from the final iteration and are subject to the normal disclaimers that are required when working with LLMs.

## Data

<div class="dl-datatable"
  data-src="/assets/data/african-rural-digitalisation.csv"
  data-cols="Country ISO-3 Code, Country Name, Facility, Digitalisation Score, Comments, Source URLs"
  data-filters="country_name, facility"
  data-title="Digitalisation of rural facilities">
</div>
