---
layout: default
title: Home
---

<div class="home-grid container--wide">

  <div class="home-main">

    <div class="section-header" style="padding-top: 2.5rem;">
      <h2 style="color: var(--accent);">Latest writing</h2>
      <a href="/writing/">All articles →</a>
    </div>

    <ul class="article-list">
      {% for post in site.posts limit:5 %}
      <li class="article-list__item" style="padding: 0.6rem 0;">
        <div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.3rem;">
          {% if post.category %}<span class="wip-item-card__status wip-item-card__status--active" style="margin-right: 0.5rem;">{{ post.category }}</span>{% endif %}
          {{ post.date | date: "%-d %B %Y" }}
        </div>
        <div class="article-list__title" style="margin-bottom: 0.2rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
        {% if post.subtitle %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0 0 0.1rem;"><em>{{ post.subtitle }}</em></p>{% endif %}
        {% if post.summary %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ post.summary }}</p>{% elsif post.excerpt %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
      </li>
      {% endfor %}
    </ul>

    <div class="section-header" style="margin-top: 1rem;">
      <h2 style="color: var(--accent);">Lab</h2>
      <a href="/lab/">All lab items →</a>
    </div>

    {% assign lab_docs = site.lab | sort: 'date' | reverse %}
    {% for doc in lab_docs limit:5 %}
    <div class="wip-item-card" style="padding: 0.6rem 0;">
      <div style="font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); margin-bottom: 0.3rem;">
        {% if doc.category %}<span class="wip-item-card__status wip-item-card__status--active" style="margin-right: 0.5rem;">{{ doc.category }}</span>{% endif %}
        {{ doc.date | date: "%-d %B %Y" }}
      </div>
      <h3 style="margin: 0 0 0.1rem;"><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h3>
      {% if doc.subtitle %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0 0 0.1rem;"><em>{{ doc.subtitle }}</em></p>{% endif %}
      {% if doc.summary %}<p style="font-size: 0.9rem; color: var(--ink-faint); margin: 0;">{{ doc.summary }}</p>{% endif %}
    </div>
    {% endfor %}

  </div>

  <aside class="home-sidebar" style="padding-top: 2.5rem;">

    <div class="sidebar-block">
      <div class="sidebar-block__label" style="color: var(--accent);">About</div>
      <p>A collection of writings, both past and present, curated by Bill Anderson. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label" style="color: var(--accent);">News alerts</div>
      <p style="margin-bottom: 1rem;">An email whenever new content is published. No spam.</p>
      {% include subscribe-button.html %}
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label" style="color: var(--accent);">Current focus</div>
      <p>Digital public infrastructures in Africa; Financial sustainability; AI and open source intelligence; Digital colonialism. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label" style="color: var(--accent);">Contact</div>
      <p><a href="/contact/">Available to chat or for consulting</a> — data governance, digital infrastructure, standards, OSINT research for Africa.</p>
    </div>

  </aside>

</div>
