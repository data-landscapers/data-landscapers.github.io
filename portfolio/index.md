---
layout: default
title: Portfolio
description: Selected projects and publications in data governance, digital sovereignty and data standards.
---

<div class="container">

<header style="padding: 2.5rem 0 1.5rem; border-bottom: 1px solid var(--rule); margin-bottom: 1rem;">
  <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Portfolio</div>
  <p style="color: var(--ink-light); margin: 0;">Selected projects and publications in data governance, digital sovereignty and data standards.</p>
</header>

{% assign categories = site.data.portfolio | map: 'category' | compact | uniq | sort %}

{% if categories.size > 1 %}
<div style="margin-bottom: 1.25rem;">
  <select id="portfolio-category-filter" style="font-family: var(--mono); font-size: 0.8em; padding: 4px 8px; border: 1px solid #ccc; border-radius: 3px; background: #fff; color: #333; cursor: pointer;">
    <option value="">All categories</option>
    {% for cat in categories %}
    <option value="{{ cat }}">{{ cat }}</option>
    {% endfor %}
  </select>
</div>
{% endif %}

<div class="article-list" id="portfolio-list">
  {% for item in site.data.portfolio %}
  <article style="padding: 0.6rem 0; border-bottom: 1px solid var(--rule);" data-category="{{ item.category }}">
    <div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.3rem;">
      {% if item.category %}<span class="wip-item-card__status wip-item-card__status--active" style="margin-right: 0.5rem;">{{ item.category }}</span>{% endif %}
      {{ item.date }}
    </div>
    <div style="font-family: var(--serif); font-size: 0.95rem; line-height: 1.4; margin-bottom: 0.25rem;">
      {% if item.url %}<a href="{{ item.url }}" style="color: var(--link); text-decoration: none;"><strong>{{ item.title }}</strong></a>{% else %}<strong>{{ item.title }}</strong>{% endif %}
    </div>
    {% if item.description %}
    <div style="font-size: 0.85rem; color: var(--ink-light); line-height: 1.45;">{{ item.description | markdownify }}</div>
    {% endif %}
  </article>
  {% endfor %}
</div>

</div>

<style>
  #portfolio-list a:hover { color: var(--link); text-decoration: underline; }
  #portfolio-list div > p { margin: 0; }
</style>

<script>
  const portfolioFilter = document.getElementById('portfolio-category-filter');
  if (portfolioFilter) {
    portfolioFilter.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('#portfolio-list article').forEach(function (el) {
        el.style.display = (!selected || el.dataset.category === selected) ? '' : 'none';
      });
    });
  }
</script>
