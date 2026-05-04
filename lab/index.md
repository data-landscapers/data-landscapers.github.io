---
layout: default
title: Lab
permalink: /lab/
---

<div class="container">
  <header style="padding: 2.5rem 0 1.5rem; border-bottom: 1px solid var(--rule); margin-bottom: 2rem;">
    <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Lab</div>
    <p style="font-family: var(--mono); font-size: 0.82rem; color: var(--ink-faint); margin: 0; line-height: 1.5;">
      The contents of this collection are work in progress: live datasets, evolving analysis and draft working papers. They are published to share progress with collaborators and anyone interested in this developing ecosystem - not as finished or fully evidenced positions. Data and conclusions are subject to revision. Note also that extensive use of AI deep search (Perplexity) and LLMs (Claude) are used in this work.
    </p>
  </header>

  {% assign lab_docs = site.lab | sort: 'date' | reverse %}
  {% assign categories = lab_docs | map: 'category' | compact | uniq | sort %}

  {% if categories.size > 1 %}
  <div style="margin-bottom: 1.5rem;">
    <select id="lab-category-filter" style="font-family: var(--mono); font-size: 0.8em; padding: 4px 8px; border: 1px solid #ccc; border-radius: 3px; background: #fff; color: #333; cursor: pointer;">
      <option value="">All categories</option>
      {% for cat in categories %}
      <option value="{{ cat }}">{{ cat }}</option>
      {% endfor %}
    </select>
  </div>
  {% endif %}

  <div class="article-list" id="lab-list">
    {% for doc in lab_docs %}
    <article style="padding: 1.4rem 0; border-bottom: 1px solid var(--rule);" data-category="{{ doc.category }}">
      {% if doc.category %}
      <span class="wip-item-card__status wip-item-card__status--active" style="margin-bottom: 0.4rem; display: inline-block;">{{ doc.category }}</span>
      {% endif %}
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
      <p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0 0 0.3rem;"><em>{{ doc.subtitle }}</em></p>
      {% endif %}
      {% if doc.description %}
      <p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ doc.description }}</p>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>

<script>
  const filter = document.getElementById('lab-category-filter');
  if (filter) {
    filter.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('#lab-list article').forEach(function (el) {
        el.style.display = (!selected || el.dataset.category === selected) ? '' : 'none';
      });
    });
  }
</script>
