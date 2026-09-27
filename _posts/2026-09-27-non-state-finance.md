---

layout: article

title: First finance dataset goes live

subtitle: Tracking non-state financing of digital transformation

date: 2026-09-27

author: Bill Anderson

category: Finance

summary: The Corpus repository now owns the dataset that tracks all non-state financing of digital transformation across Africa. It is updated daily off the back of Corpus' data collection sweeps.

has_data_table: false

---

# Tracking the financing of digital transformation: Part One

[Corpus dataset: Non-state finance 2015-2026](https://corpus.data-landscapers.io/finance/)

It is currently impossible to calculate total investments into digital transformation. There are three main reasons for this.

-   Firstly, no one has integrated non-state finance data with national budgets, expenditure and audits.
-   Secondly, no one has joined up the full spectrum of cross-border and domestic, public and private investment.
-   Thirdly, except for the World Bank, no investors or governments have attempted to adopt a common modern taxonomy that classifies investments in categories compatible with digital transformation.

Over the next month we plan to present a first attempt at a solution.

-   Part One: Non-state finance
-   Part Two: Domestic state budgeting and expenditure
-   Part Three: Combining these two very different datasets

The dataset on non-state finance going live today records over 1,400 financial commitments totalling over USD 80 billion made between 2015 and today.

### Instruments

The following table explains why a dataset of this nature hasn’t been attempted before.

| **Instrument**       | **Value (USDm)** |
|----------------------|------------------|
| Self-Funded          | 17,995           |
| Commercial Loan      | 14,923           |
| Concessional Loan    | 12,940           |
| Grant                | 10,747           |
| Equity               | 7,843            |
| MoU                  | 7,806            |
| Unknown              | 3,882            |
| Buyer's Credit       | 2,998            |
| Guarantee            | 2,501            |
| Bond                 | 689              |
| Line of Credit       | 481              |
| PPP                  | 292              |
| Joint Venture        | 284              |
| Mezzanine            | 172              |
| Technical Assistance | 161              |

Grants and concessional loans, the instruments that most development finance analysts tend to focus on through the data provided by the OECD and IATI, represent less than a third of the total value. Topping the list are the investments made by hyperscalers (Amazon and Microsoft) and Telecoms operators (MTN, Orange and Vodacom) investing in their own infrastructure.

### A warning to analysts

Numbers tell more stories than simple arithmetic. This dataset is a collection of news from data stores, investor portfolios, press releases and commercial trade journals. It’s value lies in its description of a complex ecosystem. It is a pool of intelligence that *can* be analysed if you know what you are doing.

### Commitments

There can be a big difference between what investors say and what they deliver. There is no global standard (as, for example, that defined by the OECD DAC Creditor Reporting System) that says that commitments are legally binding. Most development finance analysts will focus on disbursements for good reason. Attempting this with private sector flows would be cutting off one’s nose to spite one’s face, Commitments are the only value all instruments report.

### MoUs

A potentially controversial matter is our decision to include memorandums of understanding, which, one could argue sit at a pre-commitment stage of a contract. As useful intelligence we think they have value, but do require further inspection.

On 31 July the US Embassy in Lesotho hosted the announcement of a [\$6 billion hydropower and AI data centre project](https://www.gov.ls/energy/record-breaking-m100-billion-investment-secured-for-lesothos-hydropower-and-artificial-intelligence-data-centre/) led by US company Convalt Energy. An investment double the size of any other in the dataset to one of the smallest African countries didn’t sound right, even though endorsed by the US government. Further research uncovered questions about both the [recipient](https://www.dailymaverick.co.za/article/2026-09-15-lesothos-biggest-foreign-investment-deal-under-scrutiny-over-ministers-stake-in-potential-partner/) and the [investor](https://lescij.org/2026/07/02/the-flagship-factory-that-was-never-built-convalts-m17m-us-loan-ends-in-settlement/). The evidence [remains in the Corpus catalogue](https://corpus.data-landscapers.io/catalogue/#q=convalt) but has been excluded from the dataset.

### Sectors

A further challenge lies in classifying the purpose of these investments. Neither the OECD DAC’s Purpose Codes (also used by IATI) nor the UN’s Classifications of Functions of Government are agile enough to keep up with development. In June 2025 the World Bank revised its [“Theme Taxonomy”](https://openknowledge.worldbank.org/entities/publication/ba3f8615-78d6-407f-b92a-c26296413646) with a dedicated chapter on Digital Transformation. In our first iteration we attempted to build Corpus around this but it proved to be unwieldy: too many issues that we regard as core to digital transformation were embedded with a range of other chapters. We therefore developed [our own taxonomy of Topics](https://corpus.data-landscapers.io/methodology/lookups/#topics). All taxonomies in this field are open to disagreement – for example we include investments in energy that have an integral digital component, not all investments in energy (which would drown the whole picture).

| **Corpus Topic**                        | **Value (USDm)** |
|-----------------------------------------|------------------|
| Connectivity                            | 27,973           |
| Data Storage                            | 11,302           |
| Digital Payments and Fintech            | 6,276            |
| Other GovTech and e-Gov                 | 3,754            |
| ICT Industry                            | 3,684            |
| Training and skills                     | 3,422            |
| Sectoral management information systems | 2,314            |
| Digital Identity and CRVS               | 2,238            |
| Registries                              | 2,130            |
| Innovation ecosystem                    | 1,757            |
| AI                                      | 1,013            |
| Strategies, plans and policies          | 614              |
| Data Exchange                           | 584              |
| Energy                                  | 488              |
| Access to services                      | 431              |
| Cybersecurity                           | 346              |
| Use of satellite data                   | 294              |
| National statistics                     | 263              |
| Regional collaboration                  | 204              |
| Others                                  | 344              |

### Recipients

The geographical spread of financing is fairly even, with one exception that tells it own story. The decisions of hyperscalers to concentrate their data centre investments in South Africa remains an issue [we have already discussed](https://data-landscapers.io/2026/06/03/off-site_backups/).

| **Recipient** | **Value (USDm)** |
|---------------|------------------|
| Multi-country | 24,889           |
| South Africa  | 10,042           |
| Nigeria       | 4,965            |
| Morocco       | 4,094            |
| Ethiopia      | 3,370            |
| Ghana         | 2,547            |
| DR Congo      | 2,526            |
| Kenya         | 2,505            |
| Egypt         | 2,415            |
| Angola        | 2,131            |
| Cameroon      | 2,077            |
| Senegal       | 1,732            |
| Djibouti      | 1,563            |
| Tanzania      | 1,546            |
| Zambia        | 1,502            |
| Mozambique    | 1,501            |
| Cote d'Ivoire | 1,445            |
| Madagascar    | 1,048            |
| Rwanda        | 898              |
| Uganda        | 888              |

### Data collection

Automated collection of financing data takes place through three distinct processes:

-   Every night a selection of [trade journals](https://corpus.data-landscapers.io/methodology/lookups/#daily-journals) is targeted and a general sweep of the biggest headlines is conducted.
-   Every second night all new activities published on the IATI Datastore are parsed for relevance.
-   Every second night the [portfolios and portals of major investors](https://corpus.data-landscapers.io/methodology/lookups/#financiers) are searched for new investments.

### How to stay up to date

You can set a [topic alert](https://corpus.data-landscapers.io/alerts/) for Corpus to send you a weekly email of updates. Customised RSS feeds are also available.
