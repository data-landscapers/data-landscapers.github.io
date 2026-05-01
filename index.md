---
layout: default
title: Home
---

<div class="home-grid container--wide">

  <div class="home-main">

    <div class="section-header" style="padding-top: 2.5rem;">
      <h2>Latest writing</h2>
      <a href="/writing/">All articles →</a>
    </div>

    <ul class="article-list">
      {% for post in site.posts limit:5 %}
      <li class="article-list__item">
        <div class="article-list__meta">{{ post.date | date: "%-d %B %Y" }}{% if post.tags.size > 0 %} &nbsp;·&nbsp; {% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</div>
        <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
        {% if post.subtitle %}<p class="article-list__excerpt">{{ post.subtitle }}</p>{% elsif post.excerpt %}<p class="article-list__excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
      </li>
      {% endfor %}
    </ul>

    <div class="section-header" style="margin-top: 1rem;">
      <h2>Work in progress</h2>
      <a href="/wip/">All projects →</a>
    </div>

    {% for item in site.wip limit:3 %}
    <div class="wip-item-card">
      <span class="wip-item-card__status wip-item-card__status--{{ item.status | default: 'active' | downcase }}">{{ item.status | default: 'Active' }}</span>
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      <p style="font-size: 0.9rem; color: var(--ink-light);">{{ item.description }}</p>
    </div>
    {% endfor %}

  </div>

  <aside class="home-sidebar" style="padding-top: 2.5rem;">

    <div class="sidebar-block">
      <div class="sidebar-block__label">About</div>
      <p>Data governance consultant. 14 years at Development Initiatives including as technical lead of IATI. Now mapping Africa's digital infrastructure. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Current focus</div>
      <ul>
        {% for item in site.current_focus %}
        <li>
          <a href="{{ item.url }}" {% if item.external %}target="_blank" rel="noopener"{% endif %}>{{ item.title }}</a>
          {% if item.meta %}<span class="meta">{{ item.meta }}</span>{% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Contact</div>
      <p><a href="/contact/">Available for consulting</a> — data governance, digital infrastructure, OSINT research for Africa.</p>
    </div>

  </aside>

</div>
