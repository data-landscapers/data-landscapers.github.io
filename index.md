---
layout: default
title: Home
---

<div class="home-grid container--wide">

  <div class="home-main">

    <div class="section-heading">
      <h2>Latest writing</h2>
      <a href="/writing/" class="section-heading__more">All articles →</a>
    </div>

    <ul class="article-list">
      {% for post in site.posts limit:8 %}
      <li class="article-list__item">
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
