---
layout: lab
title: Undersea cables for dummies
subtitle: A non-technical guide
date: 2026-05-29
category: Infrastructure
summary: A plain-English explainer about undersea cables. What are they, how their capacity is bought and sold, and how the companies that run them make money.
description: A plain-English explainer about undersea cables. What are they, how their capacity is bought and sold, and how the companies that run them make money.
permalink: /lab/2026/05/29/cables-for-dummies/
---

International connectivity rests on a network of cables lying on the ocean floor. This is a plain-English explainer of what those cables are, how their capacity is bought and sold, how the companies that run them make money, and one concept that trips almost everyone up — IP transit. No prior knowledge assumed.

## What the cable actually is

Imagine a garden hose lying on the bottom of the ocean — that's roughly what a modern submarine cable looks like. Inside that hose are a handful of hair-thin strands of glass called optical fibres. Data travels down them as pulses of laser light, moving so fast that a single modern cable can carry the equivalent of millions of HD movies every second. The glass fibres themselves do all the work; the rest of the cable is just protection — layers of copper tubing, steel wire, plastic, and tar wrapped around them to survive 25+ years on the seabed. Near the shore where ships and fishing nets might snag it, the cable is heavily armoured and buried in a trench under the sand, which is why you never see it on the beach. In the deep ocean, where nothing disturbs it, it can be as thin as your thumb ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions); [TechBrew](https://www.techbrew.com/stories/2024/01/24/how-do-subsea-cables-work); [One Step Power](https://www.onesteppower.com/post/how-do-undersea-data-cables-work)).

Because light signals weaken over long distances, the cable contains repeaters — small electronic housings spaced every 40–80 km along the route — that amplify the signal and keep it strong for the whole journey. Those repeaters need electricity, so a copper conductor running through the core of the cable carries a constant current from the shore stations at each end ([Equinix](https://blog.equinix.com/blog/2024/10/15/what-is-a-cable-landing-station/); [One Step Power](https://www.onesteppower.com/post/how-do-undersea-data-cables-work)).

## The landing station — the cable's front door

A submarine cable doesn't just wash up on a beach and plug into the internet. It terminates at a cable landing station (CLS) — a purpose-built facility on land, usually a nondescript building close to the coast, that acts as the gateway between the underwater world and the terrestrial one. Inside, specialist equipment converts the optical signals from the cable into a format that can connect to the country's normal land-based fibre and internet network. The landing station also manages the electrical power feeding the underwater repeaters. Whoever owns and operates a landing station has enormous strategic leverage — every byte of data entering or leaving that country through that cable passes through their building, making landing stations a key sovereignty chokepoint ([Submarine Networks](https://www.submarinenetworks.com/en/stations); [ITU](https://www.itu.int/en/ITU-D/Regional-Presence/AsiaPacific/SiteAssets/Pages/Events/2017/Submarine%20Cable/submarine-cables-for-Pacific-Islands-Countries/Cable%20Landing%20Stations%20SNCC.pdf); [Equinix](https://blog.equinix.com/blog/2024/10/15/what-is-a-cable-landing-station/)).

## Fibre pairs and how capacity is traded

A typical cable contains multiple fibre pairs — each pair being one fibre to send data and one to receive it. Think of each pair as a separate motorway running inside the same tunnel. The cable's owner doesn't need to use all of them at once; they can sell rights to individual pairs to other operators, who then install their own equipment at the landing stations to light them up ([Submarine Networks](https://www.submarinenetworks.com/en/nv/insights/do-you-need-submarine-cable-or-submarine-fiber-pair)).

The main commercial instrument for doing this is an IRU — Indefeasible Right of Use. It sounds complicated but it basically means: "I'm selling you a guaranteed, irrevocable right to use this slice of the cable for a long fixed term — often 20 to 30 years. ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions)". It's like buying a long-term lease on a motorway lane rather than paying a toll every time you use it. The word "indefeasible" just means it can't be taken away from you — the seller can't change their mind ([HMRC](https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird70340); [Bratby Law](https://bratby.law/practice-areas/transactions/subsea-cables/); [123.net](https://www.123.net/blog/understanding-iru-fiber-a-comprehensive-guide/)). SEACOM did something similar with Google's Equiano cable: under Equiano's "open cable" model it acquired a full fibre pair — 12 terabits per second of capacity — giving it a long-term slice of Google's cable to resell to its own customers ([Submarine Networks](https://www.submarinenetworks.com/en/systems/euro-africa/equiano/seacom-activates-one-fiber-pair-on-equiano-subsea-cable)).

## How they make their money

Submarine cable operators earn revenue in several ways:

-   **Selling capacity (IRUs or shorter-term leases)** to telecoms companies, mobile operators, governments, and internet service providers who need international bandwidth. This is the foundational business — essentially wholesaling motorway lanes to anyone who needs to move large amounts of data between continents ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions)).
-   **IP transit** — acting as the highway for internet traffic. SEACOM described itself in 2017 as the largest IP transit provider in Africa, meaning it was the main "on-ramp" connecting African internet networks to the global internet ([IntelligentCIO](https://www.intelligentcio.com/africa/2017/05/16/seacom-accelerates-infrastructure-investment/)).
-   **Managed services and cloud connectivity** — as cables have become commodities, operators like SEACOM now sell value-added services: connecting businesses to cloud platforms (AWS, Google Cloud, Microsoft Azure), running private networks for corporates, cybersecurity, and IT managed services. This is where the margins are healthier ([SEACOM](https://seacom.com/news/a-bold-new-chapter-for-seacom-as-the-african-connectivity-pioneer-rebrands)).
-   **Landing station fees** — if you own a landing station, every cable that wants to use it pays you an annual fee. For a large, well-positioned station this can be steady, reliable income for the life of the cable ([ITU](https://www.itu.int/en/ITU-D/Regional-Presence/AsiaPacific/SiteAssets/Pages/Events/2017/Submarine%20Cable/submarine-cables-for-Pacific-Islands-Countries/Cable%20Landing%20Stations%20SNCC.pdf)).

The economics are brutal at the infrastructure layer — cables are enormously expensive to build (SEACOM's original cable cost \$650 million) and bandwidth prices have fallen dramatically as more cables are built. Even operators that still invest heavily in raw capacity — like SEACOM buying a whole fibre pair on Equiano — are therefore pushing up the value chain into services, where the margins are. That move is not optional; it's existential ([CISP / SEACOM](https://cisp.cachefly.net/assets/articles/attachments/09069_seacom.pdf)).

## Why this matters

About 99% of all international internet traffic travels via submarine cables — not satellites. When you send a WhatsApp message from London to Nairobi, it almost certainly travels through a cable on the ocean floor. That means whoever owns and controls these cables — and especially their landing stations — holds significant leverage over a nation's connectivity, and in countries served by only one or two cables can effectively control the digital gateway to the whole country. That is why, in an African sovereignty context, the question of who owns a cable operator like SEACOM, and on what terms, is not an abstract investment question. It is a question about who sits at the door of the continent's connection to the global internet ([One Step Power](https://www.onesteppower.com/post/how-do-undersea-data-cables-work)).

## IP transit: the simplest explanation

One concept worth pulling out on its own, because it underpins how the whole system actually carries traffic, is IP transit.

Think of the internet as a giant city made up of thousands of separate neighbourhoods. Each neighbourhood is what engineers call an AS — Autonomous System — which is just a fancy name for a network owned by one organisation (a phone company, an ISP, a university, a bank). Your neighbourhood knows its own streets perfectly, but to send a letter to someone on the other side of the city, you need a courier who knows all the routes and can guarantee delivery anywhere.

IP transit is that courier service. When you pay for IP transit, you are paying a bigger network operator to carry your data across the entire internet — not just their own piece of it — and deliver it wherever it needs to go. The word "transit" is literal: your traffic is just passing through their network on the way to somewhere else ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions)).

### A practical example

Say a small Kenyan internet provider (ISP) has 50,000 customers. Those customers want to reach Netflix and BBC websites — servers that are physically located in Europe and America. The Kenyan ISP doesn't have cables running to those places. So it pays SEACOM for IP transit. SEACOM takes the traffic, hauls it down its submarine cable, hands it off to networks in Europe, and those networks deliver it to Google's servers. The Kenyan ISP pays SEACOM a monthly fee based on how much traffic it pushes — typically priced per Mbps (megabit per second) ([TeleGeography](https://www2.telegeography.com/submarine-cable-faqs-frequently-asked-questions)).

### The hierarchy

The internet has a rough pecking order:

-   **Tier 1 networks** — a small club of about a dozen giant carriers (think AT&T, Deutsche Telekom, NTT) that have agreements with each other to carry traffic for free. They collectively reach every corner of the internet ([Kentik](https://www.kentik.com/kentipedia/what-is-ip-transit/)).
-   **Tier 2 networks** — regional operators like SEACOM. They peer with some networks for free but pay Tier 1 carriers for transit to reach the rest ([Kentik](https://www.kentik.com/kentipedia/what-is-ip-transit/)).
-   **Tier 3** — your local ISP, which pays Tier 2 for access to the world.

So money flows upward: your ISP pays SEACOM, SEACOM pays a Tier 1 carrier, and somewhere in there the Tier 1 carriers settle up with each other. When SEACOM called itself Africa's largest IP transit provider, it meant it was the dominant Tier 2 carrier on the continent — the main middleman between African networks and the global internet ([IntelligentCIO](https://www.intelligentcio.com/africa/2017/05/16/seacom-accelerates-infrastructure-investment/)).

### Why it matters for sovereignty

Here's the uncomfortable part: if all African IP transit flows through a small number of operators — and if those operators, in turn, depend on Tier 1 networks based in the US and Europe — then African data is structurally dependent on foreign infrastructure and foreign legal jurisdictions to reach its destination, even when the sender and receiver are both in Africa. A message from Lagos to Nairobi can physically route through a server in London or Frankfurt before arriving next door on the continent. This is both inefficient and a sovereignty exposure — it means foreign governments could theoretically intercept or disrupt intra-African communications at the transit layer. It is one of the core reasons the African Union and the Internet Society have promoted Internet Exchange Points (IXPs) — facilities that let African networks exchange traffic with each other directly, without it leaving the continent — through the African IXP Association (AfPIF) and a target of keeping most African traffic local ([Internet Society](https://www.internetsociety.org/issues/ixps/); [AfPIF](https://www.af-ix.net/)). The broader dependence on foreign-owned infrastructure that makes this necessary is documented widely ([African Business](https://african.business/2023/07/technology-information/can-africa-achieve-digital-sovereignty-in-an-era-of-big-tech); [New America](https://www.newamerica.org/insights/africas-digital-sovereignty-trap/)).
