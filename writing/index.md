---
layout: default
title: Writing
description: Completed research and analysis on data governance, data standards, digital sovereignty and Africa's data infrastructures.
---

<div class="container">

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
  <li class="article-list__item" data-category="{{ post.category }}">
    <div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.3rem;">
      {% if post.category %}<span class="wip-item-card__status wip-item-card__status--active" style="margin-right: 0.5rem;">{{ post.category }}</span>{% endif %}
      {{ post.date | date: "%-d %B %Y" }}
    </div>
    <div class="article-list__title" style="margin-bottom: 0.2rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    {% if post.subtitle %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0 0 0.1rem;"><em>{{ post.subtitle }}</em></p>{% endif %}
    {% if post.summary %}
      <p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ post.summary }}</p>
    {% elsif post.excerpt %}
      <p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ post.excerpt | strip_html | truncate: 200 }}</p>
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
