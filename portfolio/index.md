---
layout: default
title: Portfolio
description: Selected projects and publications in data governance, digital sovereignty and data standards.
---

<div class="container" data-pagefind-ignore>

<header class="article-header">
  <h1 class="article-header__title">Portfolio</h1>
</header>

<p>In our 14 years working for Development Initiatives we got quite a bit done. This collection of papers and blogs does not belong to us alone. We acknowledge the contributions of our ex-colleagues Alex Miller, Beata Lisowska, Claudia Wells, Kate Hughes, Liz Steele, Martha Bekele, Sam Wozniak, Steve Kenei, Tom Orrell and Wilbrod Ntawiha.</p>

{% assign categories = site.data.portfolio | map: 'category' | compact | uniq | sort %}

{% if categories.size > 1 %}
<div class="article-list-filter">
  <select id="portfolio-category-filter" class="filter-select" aria-label="Filter by category">
    <option value="">All categories</option>
    {% for cat in categories %}
    <option value="{{ cat }}">{{ cat }}</option>
    {% endfor %}
  </select>
</div>
{% endif %}

<ul class="article-list" id="portfolio-list">
  {% for item in site.data.portfolio %}
  <li class="article-list__item" data-category="{{ item.category }}">
    <div class="article-list__meta">
      {% if item.category %}<span class="badge badge--green">{{ item.category }}</span>{% endif %}
      {{ item.date }}
    </div>
    <div class="article-list__title">
      {% if item.url %}<a href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
    </div>
    {% if item.author %}<div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.2rem;">{{ item.author }}</div>{% endif %}
    {% if item.description %}
    <div class="article-list__excerpt">{{ item.description | markdownify }}</div>
    {% endif %}
  </li>
  {% endfor %}
</ul>

</div>

<script>
  const portfolioFilter = document.getElementById('portfolio-category-filter');
  if (portfolioFilter) {
    portfolioFilter.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('#portfolio-list li').forEach(function (el) {
        el.hidden = !!selected && el.dataset.category !== selected;
      });
    });
  }
</script>
