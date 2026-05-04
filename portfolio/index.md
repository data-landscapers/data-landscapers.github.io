---
layout: default
title: Portfolio
description: Selected projects and publications in data governance, digital sovereignty and data standards.
---

<div class="container">

<header style="padding: 2.5rem 0 1.5rem; border-bottom: 1px solid var(--rule); margin-bottom: 2rem;">
  <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Portfolio</div>
  <p style="color: var(--ink-light); margin: 0;">Selected projects and publications in data governance, digital sovereignty and data standards.</p>
</header>

<div class="portfolio-list">
  {% for item in site.data.portfolio %}
  <div class="portfolio-item">
    <div class="portfolio-item__date">{{ item.date }}</div>
    <div class="portfolio-item__content">
      <div class="portfolio-item__title">
        {% if item.url %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
      </div>
      {% if item.description %}
      <div class="portfolio-item__description">{{ item.description }}</div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

</div>

<style>
.portfolio-list {
  margin: 0;
  padding: 0;
}
.portfolio-item {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 0 1.5rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--rule);
  align-items: baseline;
}
.portfolio-item__date {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-faint);
  white-space: nowrap;
  padding-top: 0.05rem;
}
.portfolio-item__title {
  font-family: var(--serif);
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
}
.portfolio-item__title a {
  color: var(--link);
  text-decoration: none;
}
.portfolio-item__title a:hover {
  text-decoration: underline;
}
.portfolio-item__description {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.45;
  margin: 0;
}
</style>
