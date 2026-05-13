# Google Cloud Architecture for Africa: Regions, Zones, and Offsite Backup Protocols

## Current Cloud Region: africa-south1 (Johannesburg)

Google Cloud's only operational cloud region on the African continent is **africa-south1**, located in **Johannesburg, South Africa**. The region became operational in **January 2024** and was formally celebrated in March 2025. It is part of Google's $1 billion investment pledge to accelerate Africa's digital transformation.[^1][^2][^3][^4]

### Availability Zones

The Johannesburg region follows Google Cloud's standard model of providing **three availability zones**, each physically and logically distinct to minimise correlated failure risk:[^5][^6]

| Zone | Location |
|------|----------|
| `africa-south1-a` | Johannesburg, South Africa |
| `africa-south1-b` | Johannesburg, South Africa |
| `africa-south1-c` | Johannesburg, South Africa |

Google designs zones to reduce the risk of correlated failures caused by shared physical infrastructure (power, cooling, networking). If one zone becomes unavailable, traffic can be redirected to another zone in the same region.[^7][^8]

### Available Machine Types and Services

The `africa-south1` region supports 167 out of 434 Google Compute Engine machine types. Available machine series include:[^9]

- **General-purpose:** E2, N4, N2, N2D, T2D
- **Compute-optimised:** C4, C4A
- **Memory-optimised:** M3 (up to 3,904 GB RAM)
- **CPUs:** Intel Cascade Lake, Ice Lake, Emerald Rapids; AMD EPYC Rome, AMD EPYC Milan; Google Axion (Arm-based)
- **Confidential Computing:** Intel TDX supported[^9]

At launch, all Google Cloud regions offer a minimum set of products: Compute Engine, Google Kubernetes Engine, Cloud Storage, Persistent Disk, Cloud SQL, Virtual Private Cloud, Cloud VPN, Key Management Service, Cloud Identity, and Secret Manager. Additional services (Cloud Run, Bigtable, BigQuery, Spanner, Pub/Sub, etc.) become available within six months.[^10]

**Notable limitation:** The region does not currently offer GPU or TPU accelerators for AI/ML workloads, unlike more established regions in the US and Europe.[^9]

### Carbon Footprint

The africa-south1 region has a **Clean Energy Factor (CFE) of 16%** and a grid carbon intensity of **646 gCO₂eq/kWh**, reflecting South Africa's coal-heavy energy grid. Google Cloud claims net-zero operational greenhouse gas emissions for the region.[^9]

***

## Planned and In-Progress Infrastructure Expansion

### Dedicated Cloud Interconnect Sites

Google has announced plans to build **Dedicated Cloud Interconnect sites** in four African cities to extend low-latency, private connectivity to its network:[^11][^12][^13]

| City | Country | Status |
|------|---------|--------|
| Johannesburg | South Africa | Operational |
| Cape Town | South Africa | Announced (2022) |
| Lagos | Nigeria | Announced (2022) |
| Nairobi | Kenya | Announced (2022) |

Dedicated Cloud Interconnect enables enterprises to link their on-premises networks directly to Google's infrastructure, bypassing the public internet for improved security and performance.[^13][^11]

### Subsea Cable and Connectivity Hubs

Google's **Africa Connect** infrastructure programme underpins the continent's connectivity with two major subsea cable systems and a new hub strategy:[^14][^15]

- **Equiano:** Already operational, running from Portugal along Africa's western seaboard connecting to Togo, Nigeria, Namibia, South Africa, and St. Helena.[^2][^3]
- **Umoja:** Announced in 2024 and slated for service in **2027**, this will be the first fibre-optic route directly connecting Africa with Australia. Its terrestrial route runs through Kenya, Uganda, Rwanda, the Democratic Republic of the Congo, Zambia, Zimbabwe, and South Africa.[^16][^15]
- **Four Subsea Cable Connectivity Hubs:** Announced in September 2025, Google plans to construct hubs in the **north, south, east, and west** regions of Africa. Exact locations were not confirmed, but Kenya and South Africa are expected to host two of the four hubs. These hubs, which include landing stations and data centres, are expected to be completed within three years (by approximately 2028).[^16][^14]

Google stated that it has already **exceeded its original $1 billion commitment** for Africa by 2026.[^16]

### No Confirmed Second Cloud Region

As of February 2026, Google has **not publicly announced a second full cloud region** in Africa. No region in Kenya, Nigeria, or elsewhere on the continent has been confirmed. However, the Dedicated Cloud Interconnect sites and subsea cable hubs in Nairobi and Lagos lay the groundwork for potential future regional expansion.[^17][^12][^10]

***

## Offsite Backup Protocols

Google Cloud provides a comprehensive set of tools for offsite (cross-region and multi-region) backup, governed by disaster recovery best practices.

### Google Cloud Backup and DR Service

The **Backup and DR Service** is Google Cloud's centralised backup management offering. It protects Compute Engine VMs, VMware VMs, Persistent Disks, Hyperdisks, Cloud SQL, AlloyDB (preview), Filestore, Oracle databases, and SQL Server databases from a single interface.[^18]

Key capabilities relevant to offsite backup:

- **Cross-region backups:** Users have full control to store backups in a **different region or multi-region location** to meet disaster recovery and compliance needs.[^18]
- **Backup Vaults:** A secure, Google-managed storage environment providing **immutable** (unmodifiable) and **indelible** (non-deletable before retention expiry) backups. Backup vaults are logically air-gapped from the user's Google Cloud project, protecting against ransomware, accidental deletion, or insider threats.[^19][^20]
- **Multi-region Backup Vaults:** Now generally available, backup vaults can be created in multi-region locations (US, EU, ASIA). Backup data is stored redundantly in at least two separate regions, providing resilience against a full regional outage.[^20][^19]
- **Regional Backup Vaults:** Backup data in regional vaults is stored redundantly in at least **two separate zones**.[^20]

### Backup Vault Supported Locations for Africa

The `africa-south1` (Johannesburg) region is listed as a supported location for backup vaults. However, **multi-region backup vaults currently support only three multi-region locations: US, EU, and ASIA**. Resources in `africa-south1` do not have a corresponding African multi-region option, which means multi-region vault backup is not available for Africa-based workloads under the standard multi-region compatibility rules.[^20]

For disaster recovery, African workloads would typically need to **replicate data to a backup vault in a different single region** (potentially outside Africa, such as a European region) to achieve geographic separation.

### Cross-Region Data Replication (Cloud Storage)

Google Cloud Storage offers three bucket location types relevant to offsite data protection:[^21]

| Location Type | Description | Offsite Benefit |
|---------------|-------------|-----------------|
| **Single-region** (e.g., `africa-south1`) | Data stored in one region | Lowest cost; vulnerable to regional outage |
| **Dual-region** | Automatic replication across two specific regions | Balanced redundancy and performance |
| **Multi-region** (e.g., `US`, `EU`, `ASIA`) | Broad geographic redundancy | Strongest protection against regional failure |

- **Turbo Replication** guarantees 100% of objects replicated within 15 minutes for dual-region and multi-region buckets, compared to the standard target of approximately one hour.[^21]
- Object versioning can be combined with replication for protection against both regional failures and accidental overwrites.[^21]

### Cloud SQL Cross-Region Backups

Cloud SQL supports both automated and on-demand backups. Both types are stored across **multiple Google Cloud regions** by default to ensure a redundant backup copy is preserved. Backups can be restored in either the same region as the production database or in a secondary region. Users can also restrict backup locations to a specific region for data residency compliance.[^22]

### Encryption and Security Protocols

All backup data in Google Cloud is protected by the following protocols:[^23][^20]

- **Encryption at rest:** Google-owned and Google-managed encryption keys by default, with the option for **customer-managed encryption keys (CMEK)** for regulatory compliance.
- **Encryption in transit:** All data transmitted between regions uses encrypted channels (TLS).
- **Access control:** IAM-based permissions with support for centralized and decentralized management models. Backup vault access can be restricted to the current organization, project, or made unrestricted.[^20]
- **WORM compliance:** When properly configured, backup vaults meet SEC "write once, read many" (WORM) requirements.[^20]
- **Minimum enforced retention:** Configurable between 1 day and 99 years, lockable to prevent any reduction in retention period.[^20]

### Recommended Architecture for Africa

Given that `africa-south1` is the sole African region, a resilient offsite backup architecture would typically involve:

1. **Intra-region redundancy:** Deploy across all three zones (`africa-south1-a`, `-b`, `-c`) within Johannesburg for zone-level fault tolerance.[^8][^7]
2. **Cross-region backup:** Replicate critical data to a non-African region (e.g., `europe-west1` Belgium, connected via the Equiano subsea cable) for disaster recovery against a full regional outage.[^5][^22]
3. **Backup Vault with enforced retention:** Store immutable, indelible backups in a regional backup vault in `africa-south1` and optionally in a second vault in a different region for geographic redundancy.[^19][^20]
4. **Cloud Storage dual-region or multi-region buckets:** For object storage, use dual-region buckets (pairing with a European region) or multi-region EU buckets with Turbo Replication for RPOs under 15 minutes.[^21]
5. **Dedicated Cloud Interconnect:** Use interconnect sites in Johannesburg and Cape Town for secure, low-latency connectivity between on-premises infrastructure and Google Cloud.[^12][^13]

### 3-2-1 Backup Rule Alignment

Google Cloud's documentation and architecture supports the industry-standard **3-2-1 backup rule** (three copies, two media types, one offsite) and its modern evolution, the **3-2-1-1-0 rule** (adding an additional offsite copy and zero unverified backups). Backup vaults with enforced retention and immutability directly address the "zero unverified backups" component by ensuring backups cannot be tampered with and can be validated for recoverability.[^23][^22][^19][^20]

***

## Summary Table: Google Cloud Africa Infrastructure

| Component | Status | Details |
|-----------|--------|---------|
| **Cloud Region** | Operational (Jan 2024) | `africa-south1` — Johannesburg, 3 zones |
| **Second Africa Region** | Not announced | No confirmed plans as of Feb 2026 |
| **Dedicated Interconnect** | Partially operational | Johannesburg operational; Cape Town, Lagos, Nairobi announced |
| **Equiano Subsea Cable** | Operational | Portugal ↔ West Africa ↔ South Africa |
| **Umoja Subsea Cable** | In progress (2027 target) | Africa ↔ Australia via East/Southern Africa |
| **Subsea Hubs** | Announced (Sep 2025) | 4 hubs in N/S/E/W Africa; ~3 year buildout |
| **Backup Vault (africa-south1)** | Supported | Regional vault with immutable/indelible backups |
| **Multi-region Backup Vault** | Not available for Africa | Only US, EU, ASIA multi-regions supported |
| **Cross-region backup** | Available | Replicate to any supported region globally |

---

## References

1. [Google Cloud Celebrates First Cloud Region In Africa](https://cioafrica.co/google-cloud-celebrates-first-cloud-region-in-africa/) - Google Cloud, on Wednesday, officially celebrated the opening of its first African cloud region in J...

2. [New Google Cloud region now open in Johannesburg](https://cloud.google.com/blog/products/infrastructure/heita-south-africa-new-cloud-region) - With the addition of the Johannesburg region, our network now totals 40 cloud regions and 121 zones,...

3. [Google switches on its first Africa cloud region](https://www.techradar.com/pro/google-switches-on-its-first-africa-cloud-region) - Google Cloud has announced the operational readiness of a new cloud region placed in Johannesburg, S...

4. [Google South Africa announced its launch of ... - AI-Impact.co.za](https://ai-impact.co.za/google-south-africa-announced-its-launch-of-the-new-google-cloud-region-in-jhb/) - Google South Africa announced its launch of the new Google Cloud region in Johannesburg on 16 March ...

5. [Geography and regions | Get started - Google Cloud Documentation](https://docs.cloud.google.com/docs/geography-and-regions) - Google Cloud intends to offer a minimum of three availability zones (physically and logically distin...

6. [africa-south1 - EMEA | Google Cloud Platform - Northflank](https://northflank.com/cloud/gcp/regions/africa-south1) - Deploy your workloads into the Johannesburg, South Africa region on Google Cloud Platform with North...

7. [Regions and zones | Compute Engine - Google Cloud Documentation](https://docs.cloud.google.com/compute/docs/regions-zones) - You can use the Google Cloud console, the Google Cloud CLI, or REST to see available regions and zon...

8. [Google Cloud Regions and Zones: Understanding ... - ProsperOps](https://www.prosperops.com/blog/google-cloud-regions/) - In this guide, we'll break down how Google Cloud infrastructure is organized, the differences betwee...

9. [Google Cloud Region africa-south1 Johannesburg](https://gcloud-compute.com/africa-south1.html) - Costs and pricing for Google Compute Engine machine types in Google Cloud region africa-south1 (Joha...

10. [Global Locations - Regions & Zones | Google Cloud](https://cloud.google.com/about/locations) - Google Cloud offers regions across the world to provide customers with global coverage, low cost, lo...

11. [Google's first Africa cloud region now operational](https://techcrunch.com/2024/01/31/googles-first-africa-cloud-region-now-operational/) - Google has today said its cloud region in South Africa is operational, coming a year after the tech ...

12. [Google's first cloud region in Africa becomes operational](https://dabafinance.com/en/news/googles-first-cloud-region-in-africa-becomes-operational) - Google plans to build Dedicated Cloud Interconnect sites in Nairobi (Kenya), Lagos (Nigeria), and So...

13. [Delivering on our $1 billion commitment in Africa](https://blog.google/company-news/inside-google/around-the-globe/google-africa/delivering-on-our-1b-commitment-in-africa/) - ... Dedicated Cloud Interconnect sites in Johannesburg, Cape Town, Lagos and Nairobi. In doing so, w...

14. [We're investing in connectivity, products and skills for Africa's AI future](https://blog.google/company-news/inside-google/around-the-globe/google-africa/africas-ai-future/) - Google is announcing four strategic subsea cable connectivity hubs in the north, south, east and wes...

15. [Google Invests in Africa with Major Subsea Cable Initiative](https://www.subseacables.net/industry-news/google-invests-in-africa-with-major-subsea-cable-initiative/) - The plan involves linking Google's existing Equiano subsea cable with the upcoming Umoja system, whi...

16. [Google plans to build four subsea cable connectivity hubs ...](https://developingtelecoms.com/telecom-technology/data-centres-networks/19091-google-plans-to-build-four-subsea-cable-connectivity-hubs-for-africa.html) - Google has announced plans to construct four new subsea cable connectivity hubs in the north, south,...

17. [Africa Interconnection Report 2025 - Content Hub](https://info.consoleconnect.com/africa-interconnection-report-2025) - It plans to expand with new local zones in South Africa and Kenya. AWS built ... Google Cloud launch...

18. [Backup and Disaster Recovery (DR) Service - Google Cloud](https://cloud.google.com/backup-disaster-recovery) - Deploy a backup and recovery service that protects from malicious or accidental data deletion—in sin...

19. [Backup vaults add support for disk backup and multi-region](https://cloud.google.com/blog/products/storage-data-transfer/backup-vaults-add-support-for-disk-backup-and-multi-region) - Backup vaults can now be created in multi-region locations. Now generally available it supports regi...

20. [Backup vault for immutable and indelible backups | Backup and DR](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault) - You create, access, and manage backup vaults using the Google Cloud Backup and DR Service. Backup va...

21. [How to Set Up Cross-Region Replication with Dual-Region Buckets ...](https://oneuptime.com/blog/post/2026-02-17-how-to-set-up-cross-region-replication-with-dual-region-buckets-in-google-cloud-storage/view) - Learn how to set up cross-region replication using dual-region and multi-region buckets in Google Cl...

22. [A guide to data protection offerings in Google Cloud](https://cloud.google.com/blog/products/storage-data-transfer/guide-data-protection-offerings-google-cloud) - Equally familiar is the 3-2-1 rule that advises to keep three copies of data, two backup copies on d...

23. [Why Store Backup Data Offsite? A Complete Guide - Zmanda](https://www.zmanda.com/blog/why-store-backup-data-offsite-a-complete-guide/) - The extra offsite copy protects against cloud provider failures, while zero unverified backups ensur...

