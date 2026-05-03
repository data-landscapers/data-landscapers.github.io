---
layout: default
title: Lab
permalink: /lab/
---

<div class="container">
  <header style="padding: 2.5rem 0 1.5rem; border-bottom: 1px solid var(--rule); margin-bottom: 2rem;">
    <h1 style="font-family: var(--sans); font-size: 1.6rem; margin: 0 0 0.5rem;">Lab</h1>
    <p style="font-family: var(--mono); font-size: 0.82rem; color: var(--ink-faint); margin: 0; line-height: 1.5;">
      Live datasets, evolving analysis and working papers. Published to share progress with collaborators —
      not as finished or fully evidenced positions. Data and conclusions are subject to revision.
    </p>
  </header>

  <div class="article-list">
    {% assign lab_docs = site.lab | sort: 'date' | reverse %}
    {% for doc in lab_docs %}
    <article style="padding: 1.4rem 0; border-bottom: 1px solid var(--rule);">
      <div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.3rem;">
        {{ doc.date | date: "%-d %B %Y" }}
        {% if doc.tags %}
          &nbsp;·&nbsp;
          {% for tag in doc.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}
        {% endif %}
      </div>
      <h2 style="font-size: 1.1rem; margin: 0 0 0.3rem;">
        <a href="{{ doc.url | relative_url }}" style="color: var(--ink); text-decoration: none;">{{ doc.title }}</a>
      </h2>
      {% if doc.subtitle %}
      <p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ doc.subtitle }}</p>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>
