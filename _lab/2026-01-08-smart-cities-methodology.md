---
layout: lab
title: African smart cities methodology
subtitle: Learning to manage AI tools for open source intelligence
date: 2026-01-08
category: OSINT
description: "Notes tracing the iterative development of the article - African smart cities: A critical analysis"
has_data_table: false
permalink: /lab/2026/01/08/smart-cities-methodology/
---




This is the methodology used to produce the article ["African smart cities: A critical analysis"](/_posts/2026-01-08-smart-cities.md)

These notes outline the design of the project through iterative interactions with Perplexity.

1.  **Perplexity - Context Instructions**
    1.  **Prompt**  
        > This space is for a paper I intend to write which will be supported by a comprehensive database. The focus is on a critical analysis of how smart city technology is being deployed and to what ends. Who is funding it? Who owns it? What features and functionalities are being prioritised? To what extent state surveillance is driving the agenda? What real value is being added? I am looking for three major types of evidence: Firstly accurate data on systems, funding, ownership, deployment to populate a database that I will design. Secondly up-to-date news on systems and issues arising. Thirdly critical analysis from academics and policy experts.
2.  **Perplexity - Annotated bibliography**
    1.  **Prompt**  
        > Could we start by producing an annotated bibliography of key literature that covers all the issues covered in the context instructions.
    2.  **Output**[Smart City Annotated Bibliography](https://docs.google.com/document/d/1IDkhhmrFosoQhOsTwxFPaTc8mnjgZSslqjaoiSSbg3M/edit?usp=drive_link)
3.  **Process bibliography**
    1.  Create Zotero collection.   
        <https://www.zotero.org/groups/6224260/african_dpi/collections/UL4PXUWD/collection>
4.  **Identify sources of current news**
    1.  **Prompt**  
        > A key part of the evidence I require will come from current news stories. In addition to national press sources I am interested in finding out whether there are any specialist journals or news services that focus on smart city initiatives. For instance when researching digital identity Biometric Update is a trade journal with more current news than any other source. Are there similar sources available in this field? NB when referring to smart cities I am more interested in initiatives taking place in cities that have existed for a long time, NOT new tech projects such as Kenya's Konza Techno City or Nigeria's Eko Atlantic.
    2.  **Output**  
        [news-sources.md](https://drive.google.com/file/d/1Qy5qkWgN6gn9-5rPoAz4CingK_ut0lu1/view?usp=drive_link)
5.  **Select cities to include in the study**
    1.  **Output**Overall ranking from [African Smart City Index 2024](https://smart-cities.africa/wp-content/uploads/2025/05/African-Smart-City-Index-2024-min.pdf)  
        [cities.csv](https://drive.google.com/file/d/1giL89kJn2oI9Tg20mAZknRsBFrEzhOxe/view?usp=drive_link)
6.  **Define analytical categories**
    1.  **Prompt**  
        > I need to break my evidence down into a set of comparable categories, Included in this will be a checklist of potential features - eg broadband availability, transport, surveillance, etc. can you provide me with a list of all features that can be described elements of a smart city
    2.  **Output**  
        [analytical-categories.md](https://drive.google.com/file/d/1bvRjE21IMBnG83c1EVdAJ01_X_MHgbWp/view?usp=drive_link)
    3.  **Refined**  
        [research-categories.csv](https://drive.google.com/file/d/1fRVEga9S1_2h6hJAerh8d6h_VsM9zRj6/view?usp=drive_link)
7.  **Define database structure**
    1.  **Prompt**[structured-data-instructions.md](https://drive.google.com/file/d/1DqpUJjKTKWsjHpPTcWOxgTJNtbMiQ6iY/view?usp=drive_link)
    2.  **Output**[data-collection-template.csv](https://drive.google.com/file/d/1Hu3E012lOH1WfJYKAo9vmhoFRDE71Ee0/view?usp=drive_link)
8.  **Produce a continental previewfrom bibliography**
    1.  **Add context files to space**  
        [African Digital Compact](https://drive.google.com/file/d/1K54S_c_SLkRKD8TN4m66WPOTbJJccRKN/view?usp=drive_link)  
        [AU Data Policy Framework](https://drive.google.com/file/d/1IAVRrRaeWyiaTlKpVF0FRYyA5eEZNB3t/view?usp=drive_link)  
        [Continental Artificial Intelligence Strategy](https://drive.google.com/file/d/1P80g7H3-eAus8kz5JHxrLvCVK-ZL34AN/view?usp=drive_link)  
        [The Digital Transformation Strategy for Africa](https://drive.google.com/file/d/1soioZ13c6TqcisWfx2t2fWPAUFYSyB9S/view?usp=drive_link)  
    2.  **Prompt**  
        > Referring to the sources that you have collected in African-Smart-Cities-Biblio.md can you provide a critical analysis of the challenges and opportunities facing the development of smart cities in Africa. This should highlight both benefits and dangers. This will be used as a backdrop for separate in-depth analyses of the cities listed in afican_smart_cities.csv.
    3.  **Output**  
        [Analytical preview](https://docs.google.com/document/d/1rgIvhdfiQKvoimi0DOCJwLe2IJXieAzDRC8hlbK4vUE/edit?usp=sharing)
9.  **Estimate Perplexity token limitations**
    1.  **Prompt**  
        > I am about to ask you, in 20 separate queries, for each city listed in the attached csv, to mine the attached bibliography (which you created in a separate thread in this space) and produce a set of notes that I can use along with other notes (eg a separate set a notes created by mining news sources) to assist my research. Before I start I need to know how many queries I can run in a single thread without token availability affecting your performance.
    2.  **Output**  
        [token-estimate.md](https://drive.google.com/file/d/1CTS9YhvxPYhIzfXKb22xzv5hjiTypnAC/view?usp=drive_link)
    3.  **Revision**  
        Decided instead to run one thread per city: bibliographic notes then news notes then analysis
10. **Produce bibliographic notes for a city**
    1.  **Prompt**  
        Follow instructions in [biblio-mining-instructions.txt](https://drive.google.com/file/d/1ymBvySobRFmTgzscEAC014Mbj6CJbABa/view?usp=drive_link) for [City_name]  
        **Example output**  
        [Nairobi-biblio.md](https://drive.google.com/file/d/1yoy3bnMjnDFRgAV_ueRKOwdH9PCo_8L3/view?usp=drive_link)
11. **Produce news notes for a city**
    1.  **Prompt**  
        Follow instructions in [news-mining-instructions.txt](https://drive.google.com/file/d/1vKmnMzULBe9_WbHn5W44tsRV0OneEFsy/view?usp=drive_link) for [City_name]
    2.  **Example Output**  
        [Nairobi-news.md](https://drive.google.com/file/d/176nk5jDBSM80M6Kwomsz3p8bU7qOqtA5/view?usp=drive_link)
12. Merge bibliographic and news notes
    1.  **Upload city notes to thread (example)**[Nairobi-biblio.md](https://drive.google.com/file/d/1yoy3bnMjnDFRgAV_ueRKOwdH9PCo_8L3/view?usp=drive_link)  
        [Nairobi-news.md](https://drive.google.com/file/d/176nk5jDBSM80M6Kwomsz3p8bU7qOqtA5/view?usp=drive_link)
    2.  **Prompt**  
        Follow instructions in [notes-instructions.txt](https://drive.google.com/file/d/1q5mRJbF-KN1M_QIa1GT8TbixgnW7OA3Z/view?usp=drive_link) for [City_name]
    3.  **Example Output**  
        [Nairobi-notes.md](https://drive.google.com/file/d/1uU1VEUv-mfPPeVKiZJULH3TBvm07rcyk/view?usp=drive_link)
13. **Produce structured data for a city**
    1.  **Upload city notes to thread (example)**[Nairobi-notes.md](https://drive.google.com/file/d/1uU1VEUv-mfPPeVKiZJULH3TBvm07rcyk/view?usp=drive_link)
    2.  **Prompt**Follow instructions in [structured-data-instructions.txt](https://drive.google.com/file/d/1hJsPBRwlHjq1cU9HJQps5a2LlMf-_rQh/view?usp=drive_link) for [City_name]
    3.  **Output (example)**[Nairobi-data.csv](https://drive.google.com/file/d/1AVLxGwgsqyEY1qvjrY6L4FbkfuPTLv8j/view?usp=drive_link)
14. **Produce analysis for a city**
    1.  **Upload city notes to thread (example)**  
        Nairobi-data.csv  
        Nairobi-notes.md
    2.  **Prompt**  
        Follow the instructions in [smart-city-analysis-instructions.md](https://drive.google.com/file/d/1Ins9uwpGLT_-ZXbsHY8Rj9faqhTh25MS/view?usp=drive_link) for [City_name]
    3.  **Example output**   
        [Nairobi-analysis.md](https://drive.google.com/file/d/191oubXhNBKbZbEoMQShWMwMXygSBLTt6/view?usp=drive_link)
    4.  **Add notes as annex to analysis and convert to Word**[Nairobi-analysis.docx](https://docs.google.com/document/d/1jDUusI62MEZdR6EJDNNehNT8J_IqIzw9/edit?usp=drive_link&ouid=117923093939100282219&rtpof=true&sd=true)
