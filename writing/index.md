---
layout: default
title: Writing
description: Research, analysis, datasets and working papers on data governance, data standards, digital sovereignty and Africa's data infrastructures.
---

<div class="container">

<header class="article-header">
  <h1 class="article-header__title">Work in progress</h1>
</header>

{% assign all_posts = site.posts %}
{% assign categories = all_posts | map: 'category' | compact | uniq | sort %}

{% if categories.size > 1 %}
<div class="article-list-filter">
  <select id="writing-category-filter" class="filter-select" aria-label="Filter by category">
    <option value="">All categories</option>
    {% for cat in categories %}
    <option value="{{ cat }}">{{ cat }}</option>
    {% endfor %}
  </select>
</div>
{% endif %}

<ul class="article-list" id="writing-list">
  {% for post in site.posts %}
  <li class="article-list__item" data-category="{{ post.category }}">
    <div class="article-list__meta">
      {% if post.category %}<span class="badge badge--grey">{{ post.category }}</span>{% endif %}
      {{ post.date | date: "%-d %B %Y" }}
    </div>
    <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    {% if post.subtitle %}<p class="article-list__subtitle">{{ post.subtitle }}</p>{% endif %}
    {% if post.summary %}
      <p class="article-list__excerpt">{{ post.summary }}</p>
    {% elsif post.excerpt %}
      <p class="article-list__excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p class="text-faint mono">No articles yet.</p>
{% endif %}

</div>

<script>
  const writingFilter = document.getElementById('writing-category-filter');
  if (writingFilter) {
    writingFilter.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('#writing-list li').forEach(function (el) {
        el.hidden = !!selected && el.dataset.category !== selected;
      });
    });
  }
</script>
