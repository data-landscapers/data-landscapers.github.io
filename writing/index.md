---
layout: default
title: Writing
description: Completed research and analysis on data governance, data standards, digital sovereignty and Africa's data infrastructures.
---

<div class="container">

<header style="padding: 3rem 0 2rem; border-bottom: 1px solid var(--rule);">
  <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Writing</div>
  <h1>Articles &amp; analysis</h1>
  <p style="color: var(--ink-light); margin: 0; max-width: 600px;">Data governance. Digital sovereignty. Open source intelligence. The struggle for African-led infrastructure, standards and policy.</p>
</header>

<ul class="article-list" style="margin-top: 0;">
  {% for post in site.posts %}
  <li class="article-list__item">
    <div class="article-list__meta">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    {% if post.subtitle %}
      <p class="article-list__excerpt">{{ post.subtitle }}</p>
    {% elsif post.excerpt %}
      <p class="article-list__excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
    {% if post.tags and post.tags.size > 0 %}
    <div class="article-list__tags">{{ post.tags | join: ", " }}</div>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="color: var(--ink-faint); padding: 2rem 0; font-family: var(--mono); font-size: 0.8rem;">No articles yet.</p>
{% endif %}

</div>
