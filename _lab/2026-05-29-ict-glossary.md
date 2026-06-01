---
layout: lab
title: A Glossary of ICT Infrastructure Terms
subtitle: A non-technical guide
author: Compiled by Perplexity Computer
date: 2026-05-29
category: Infrastructure
summary: A plain-English reference for the technical, commercial and policy vocabulary that recurs across writing on digital infrastructure — submarine cables, data centres, cloud, AI compute, ownership structures, and digital sovereignty.
description: A plain-English reference for the technical, commercial and policy vocabulary that recurs across writing on digital infrastructure — submarine cables, data centres, cloud, AI compute, ownership structures, and digital sovereignty.
permalink: /lab/2026/05/29/ict-glossary/
---


A plain-English reference for the technical, commercial and policy vocabulary that recurs across writing on digital infrastructure — submarine cables, data centres, cloud, AI compute, ownership structures, and digital sovereignty. It is aimed at the non-technical reader: every entry is written to be understood without prior knowledge.

This is a living document. Terms are grouped thematically, and alphabetically within each group, so it can be browsed or searched. It will be expanded as new terms appear in the articles it supports.

## Contents

[Submarine cables and physical connectivity](#submarine-cables-and-physical-connectivity)

[Network operations and the internet's structure](#network-operations-and-the-internets-structure)

[Data centres](#data-centres)

[Cloud and AI compute](#cloud-and-ai-compute)

[Digital sovereignty, governance and policy](#digital-sovereignty-governance-and-policy)

---

## Submarine cables and physical connectivity

**Armouring** — The protective layers (steel wire, copper tubing, plastic, tar) wrapped around a cable's glass core. Cables are heavily armoured and buried near shore, where fishing nets and anchors can snag them, and left thin in the deep ocean where nothing disturbs them.

**Cable landing station (CLS)** — The land-based building where a submarine cable comes ashore and connects to a country's terrestrial network. It converts the cable's optical signals for land use and powers the cable's repeaters. A strategic chokepoint: all traffic on that cable passes through it.

**Dark fibre** — Installed optical fibre that is not yet "lit" — i.e. has no equipment sending light through it. Owners lease dark fibre to customers who then attach their own equipment, giving them a private strand of capacity they fully control.

**Fibre pair** — Two optical fibres working together inside a cable — one to send data, one to receive. Capacity is bought, sold and lit one pair at a time; a single cable contains several pairs.

**Landing point / landing** — The specific country or location where a subsea cable connects to land. A cable's set of landings (e.g. Equiano lands in Togo, Nigeria, Namibia, St Helena and South Africa) defines which markets it can serve directly.

**Lit fibre** — Fibre that has active equipment sending laser light through it and is carrying live traffic — the opposite of dark fibre.

**Optical fibre** — A hair-thin strand of ultra-pure glass that carries data as pulses of laser light. The actual data-carrying element inside a cable; everything else is protection and power.

**Overland (terrestrial) fibre** — Fibre-optic cable running on land — buried beside roads, railways or power lines — that carries traffic inland from coastal landing stations to cities and data centres. The complement to subsea cable: subsea brings data to the coast, terrestrial fibre distributes it inland.

**Repeater** — An electronic housing spaced every 40–80 km along a cable that amplifies the light signal so it stays strong over thousands of kilometres. Powered by current sent along a copper conductor in the cable's core.

**Submarine (subsea) cable** — A fibre-optic cable laid on the ocean floor to carry data between continents. Carries roughly 99% of international internet traffic — far more than satellites.

## Network operations and the internet's structure

**Autonomous System (AS)** — A network of internet addresses run by a single organisation (an ISP, a telecoms company, a university, a bank) under its own routing policy. The internet is a patchwork of tens of thousands of these stitched together.

**Backbone** — A network operator's own high-capacity core network that carries traffic over long distances between regions. A "private backbone" (e.g. a hyperscaler's) lets traffic move between that company's facilities without touching the public internet.

**Bandwidth** — The amount of data a connection can carry per second. Higher bandwidth means more capacity. Measured in Mbps, Gbps or Tbps.

**Carrier-neutral** — A data centre or facility that is not tied to any single network operator, allowing many carriers to interconnect there on equal terms. Carrier neutrality is prized because it gives customers choice and keeps prices competitive.

**Internet Exchange Point (IXP)** — A shared facility where multiple networks meet to swap traffic directly with each other. Keeping regional traffic local means it doesn't have to detour through distant networks abroad — reducing cost, latency and sovereignty exposure.

**Internet service provider (ISP)** — A company that sells internet access to end users (homes, businesses). Typically buys upstream capacity (IP transit) from larger operators to reach the rest of the internet.

**IP transit** — A paid service in which a larger network carries a smaller network's traffic across the whole internet and delivers it anywhere. The customer's data is just "passing through" the provider's network. Usually billed per Mbps.

**ISP / telco / carrier** — Overlapping terms for companies that move data. A "carrier" or "telco" usually operates large networks (often including international links); an ISP focuses on selling access to end users. Many firms are all three.

**Latency** — The delay before data reaches its destination, usually measured in milliseconds. Routing African traffic via Europe adds latency; keeping it local (via IXPs) reduces it.

**Mbps / Gbps / Tbps** — Megabits, gigabits and terabits per second — units of data rate. 1 Gbps = 1,000 Mbps; 1 Tbps = 1,000 Gbps. A single modern fibre pair can carry many Tbps.

**Peering** — An arrangement where two networks agree to exchange traffic directly, often for free, because it benefits both. Distinct from transit, which is a paid service to reach the rest of the internet.

**Tier 1 / Tier 2 / Tier 3 networks** — The internet's rough pecking order. Tier 1: a handful of global carriers that reach everywhere and swap traffic with each other for free. Tier 2: regional operators that peer where they can but pay Tier 1 carriers for the rest. Tier 3: local ISPs that pay Tier 2 for access to the world.

## Data centres

**Anchor tenant** — A foundational, long-term customer of a data centre whose committed demand makes the facility financially viable to build. Hyperscalers frequently act as anchor tenants in facilities they do not own.

**Availability zone** — One of several physically separate sites within a cloud region, each with independent power and cooling, so that a failure in one does not take down the others. A region typically has two or three zones.

**Build-to-suit** — A data centre constructed to a single customer's specification, rather than as generic space let to many tenants. Common for hyperscalers wanting facilities tailored to their hardware.

**Carrier hotel** — A data centre densely connected to many networks, functioning as a major interconnection hub for a city or region. Often overlaps with carrier-neutral colocation.

**Colocation ("colo")** — A business model where a data centre operator rents out space, power and cooling, and customers install their own servers. The operator owns the building; the tenant owns the hardware.

**Edge data centre** — A small facility placed close to end users (in a town or at a network's edge) to cut latency for time-sensitive services, rather than sending all traffic to a distant central facility.

**Hyperscale data centre** — A very large facility (often tens of megawatts) built to serve cloud and AI workloads at massive scale, typically for or by a hyperscaler.

**Hyperscaler** — A very large cloud and data-centre operator — chiefly Amazon Web Services (AWS), Microsoft Azure and Google Cloud. Increasingly, these firms also build and own their own submarine cables.

**IT capacity (MW)** — The electrical power, measured in megawatts, available to run a data centre's computing equipment. The headline measure of a facility's size, because power — not floor space — is usually the binding constraint.

**Ownership versus hosting** — A key distinction: a hyperscaler may *host* workloads in hundreds of facilities while *owning* only one or two. Most of the physical estate is owned by third-party operators (colocation companies, telcos, state enterprises), with the hyperscaler present as tenant or partner.

**Rack / rack capacity** — A standardised frame (a "rack") that holds stacked servers and networking gear. Rack capacity counts how many a facility can house — a rough measure of its size.

**REIT (Real Estate Investment Trust)** — A listed company that owns income-producing property and must pay out most of its profit to shareholders. Several of the world's largest data-centre operators (e.g. Digital Realty, Equinix) are REITs, making global data-centre real estate an investment asset class.

**State-owned enterprise (SOE)** — A company owned wholly or partly by a government. Many African data centres and telcos are SOEs, which raises distinct sovereignty and governance questions versus privately owned facilities.

**Tier (data-centre tier, I–IV)** — A rating of a facility's reliability and redundancy. Higher tiers (III, IV) guarantee more uptime through duplicated power and cooling. Not to be confused with network tiers (Tier 1/2/3 above).

## Cloud and AI compute

**Cloud region** — A cluster of data centres in one geography where a cloud provider runs customer workloads. The most substantial form of cloud presence — a place where data is actually processed and stored, not just passed through.

**Compute** — Shorthand for raw processing power: the servers, chips and capacity used to run software, train AI models and serve applications.

**Data residency** — A guarantee about the country or region in which data is physically stored and processed. "No African residency option" means a service will only keep data in, say, the US or EU — a sovereignty concern.

**Dedicated interconnect / Direct Connect** — A private, high-speed physical link between a customer's own infrastructure and a cloud provider's network, bypassing the public internet for better speed, security and predictability.

**GPU (Graphics Processing Unit)** — A chip originally for graphics, now the workhorse of AI because it performs many calculations in parallel. Nvidia GPUs dominate AI training. Their presence (or absence) in a region determines whether AI workloads can run locally.

**Inference** — The stage where a trained AI model is actually *used* to answer a query or make a prediction (as opposed to training, where it learns). "Where inference is served" matters for latency and sovereignty.

**Interconnect site** — A city where a cloud provider has not built a full region but offers a private, high-speed entry point into its global network, hosted inside a third-party building. "The door, not the destination" — traffic still routes onward to a region elsewhere.

**Local Zone** — A lightweight extension of a cloud region placed in a city without a full region, bringing a subset of services closer to local users. AWS's term; conceptually similar to interconnect/edge approaches.

**Multi-cloud** — Using more than one cloud provider (e.g. AWS and Azure) so as not to depend on a single vendor. Often cited as a hedge against lock-in.

**On-ramp** — A point where a customer's network connects directly onto a cloud provider's backbone. The "entrance" to the cloud from a given facility or city.

**TPU (Tensor Processing Unit)** — A custom AI chip designed by Google as an alternative to GPUs, used to train and serve its models. TPUs exist only inside Google-operated data centres, which ties workloads built on them to Google's infrastructure.

**Training** — The compute-intensive process of teaching an AI model by feeding it large datasets, typically run on clusters of GPUs or TPUs. Distinct from inference (using the trained model).

**Vendor lock-in** — When the cost or difficulty of switching providers traps a customer with one vendor. Arises technically (a service runs only on one provider's cloud) or commercially (free tiers that build dependence), and is central to AI-sovereignty debates.

**Workload** — Any computing task running on infrastructure — a website, a database, an AI model. "Cross-region workloads" run somewhere other than the user's local region (e.g. African AI workloads served from Europe).

## Ownership, finance and corporate structure

**Beneficial owner / ultimate parent** — The person or entity that ultimately controls a company, after tracing through all intermediate holding companies. The "ultimate parent" of a facility may sit in a different country from its day-to-day operator — a key sovereignty question.

**B-BBEE (Broad-Based Black Economic Empowerment)** — A South African policy framework promoting Black ownership and participation in the economy. Investment vehicles are often described by their B-BBEE ownership level.

**Consortium** — A group of companies that jointly fund and own a project (such as a subsea cable) too large or risky for one party alone. The 2Africa cable, for instance, is built by a consortium led by Meta.

**Development finance institution (DFI)** — A government-backed or multilateral bank that invests in projects to promote development, often on concessional terms. Examples include the IFC (World Bank Group), DEG (Germany) and FMO (Netherlands). African "private" infrastructure is sometimes partly funded by European DFIs.

**Indefeasible Right of Use (IRU)** — A long-term (typically 20–25 year), irrevocable lease on a slice of cable capacity — for example one fibre pair. The buyer gets a guaranteed right the seller cannot withdraw. The standard way capacity changes hands without owning the cable itself.

**Joint venture (JV)** — A business jointly owned by two or more parties for a specific purpose, sharing risk and control. Common in African telecoms and data-centre projects.

**Special purpose vehicle (SPV) / holding company** — A company created to hold a particular asset or investment, often used to structure ownership and finance. Tracing a chain of holding companies is how analysts find the ultimate parent.

## Digital sovereignty, governance and policy

**AfCFTA (African Continental Free Trade Area)** — The continent-wide free-trade agreement aiming to create a single African market. Its Digital Trade Protocol governs cross-border data and digital services, and is contested ground in the sovereignty debate.

**AU Data Policy Framework** — The African Union's 2022 policy setting out principles for data governance across the continent, emphasising in-continent data storage and processing and "politically neutral partnerships" as sovereignty imperatives.

**Cross-border data flows** — The movement of data between countries. Trade rules that prohibit restricting these flows limit governments' ability to keep citizens' data at home — a core tension in digital-sovereignty law.

**Data localisation** — A requirement that certain data be stored or processed within a country's borders. Seen by governments as protecting sovereignty, and resisted in some trade agreements as a barrier to digital trade.

**Digital colonialism / "scramble for data"** — A critique framing foreign tech giants' control of Africa's digital infrastructure as a new form of extraction, with the continent dependent on outside owners for its connectivity and data.

**Digital public infrastructure (DPI)** — Shared, foundational digital systems — such as digital ID, payments and data-exchange platforms — that a society builds on, analogous to roads or power grids. Whether DPI is sovereign or dependent on foreign providers is a key policy question.

**Digital sovereignty** — A state's ability to control its own digital infrastructure, data and the rules governing them, rather than depending on foreign-owned cables, clouds and platforms — and on foreign legal jurisdictions.

**Full-stack lock-in** — When a single company controls every layer needed to deliver a service — connectivity, data centre, compute, cloud and the application itself — so that using the free top layer (e.g. a chatbot) quietly creates dependence on all the layers beneath it.

**MFN (Most-Favoured-Nation) clause** — A trade-rule provision requiring a country to extend any concession it grants one partner to all others. In digital trade, MFN clauses can spread Big-Tech-friendly rules from a bilateral deal to many more countries automatically.

**Regulatory capture** — When the firms a rule is meant to govern end up shaping the rule itself, so that policy serves their interests. Critiques allege this in the drafting of some African digital-trade rules.

**Sovereign cloud** — Cloud infrastructure subject to a country's own laws and (ideally) located on its territory, intended to keep data beyond the reach of foreign legal demands such as the US CLOUD Act.

**U.S. CLOUD Act** — A US law allowing American authorities to compel US-based companies (such as Google, Microsoft and Amazon) to hand over data they hold, wherever in the world it is stored — meaning data in a US firm's African data centre can still be reached under US law, regardless of local data-protection rules.

**Vendor lock-in (sovereignty lens)** — See §4. In the sovereignty debate, lock-in means a country's institutions, businesses and public officials become dependent on one foreign provider's infrastructure, ceding leverage and exposing data to foreign jurisdiction.
