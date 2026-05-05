---
layout: default
title: Writing
description: Completed research and analysis on data governance, data standards, digital sovereignty and Africa's data infrastructures.
---

<div class="container">

<header style="padding: 3rem 0 2rem; border-bottom: 1px solid var(--rule);">
  <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Writing</div>
  <p style="color: var(--ink-light); margin: 0;">Data governance. Digital sovereignty. Open source intelligence. The struggle for African-led infrastructure, standards and policy.</p>
</header>

{% assign all_posts = site.posts %}
{% assign categories = all_posts | map: 'category' | compact | uniq | sort %}

{% if categories.size > 1 %}
<div style="margin: 1.25rem 0 0.5rem;">
  <select id="writing-category-filter" style="font-family: var(--mono); font-size: 0.8em; padding: 4px 8px; border: 1px solid #ccc; border-radius: 3px; background: #fff; color: #333; cursor: pointer;">
    <option value="">All categories</option>
    {% for cat in categories %}
    <option value="{{ cat }}">{{ cat }}</option>
    {% endfor %}
  </select>
</div>
{% endif %}

<ul class="article-list" id="writing-list" style="margin-top: 0;">
  {% for post in site.posts %}
  <li class="article-list__item" style="padding: 0.6rem 0;" data-category="{{ post.category }}">
    <div class="article-list__meta">
      {% if post.category %}<span class="wip-item-card__status wip-item-card__status--active" style="margin-right: 0.5rem;">{{ post.category }}</span>{% endif %}
      {{ post.date | date: "%-d %B %Y" }}
    </div>
    <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    {% if post.subtitle %}<p class="article-list__excerpt" style="margin-bottom: 0;"><em>{{ post.subtitle }}</em></p>{% endif %}
    {% if post.description %}
      <p class="article-list__excerpt" style="margin-top: 0;">{{ post.description }}</p>
    {% elsif post.excerpt %}
      <p class="article-list__excerpt" style="margin-top: 0;">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="color: var(--ink-faint); padding: 2rem 0; font-family: var(--mono); font-size: 0.8rem;">No articles yet.</p>
{% endif %}

</div>

<script>
  const writingFilter = document.getElementById('writing-category-filter');
  if (writingFilter) {
    writingFilter.addEventListener('change', function () {
      const selected = this.value;
      document.querySelectorAll('#writing-list li').forEach(function (el) {
        el.style.display = (!selected || el.dataset.category === selected) ? '' : 'none';
      });
    });
  }
</script>
