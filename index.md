---
layout: default
title: Home
---

<div class="home-grid container--wide">

  <div class="home-main">

    <div class="section-heading">
      <h2>Latest work in progress</h2>
      <a href="/writing/" class="section-heading__more">All articles →</a>
    </div>

    <ul class="article-list">
      {% for post in site.posts limit:8 %}
      <li class="article-list__item">
        <div class="article-list__meta">
          {% if post.category %}<span class="badge badge--green">{{ post.category }}</span>{% endif %}
          {{ post.date | date: "%-d %B %Y" }}
        </div>
        <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
        {% if post.subtitle %}<p class="article-list__subtitle">{{ post.subtitle }}</p>{% endif %}
        {% if post.summary %}<p class="article-list__excerpt">{{ post.summary }}</p>{% elsif post.excerpt %}<p class="article-list__excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>{% endif %}
      </li>
      {% endfor %}
    </ul>

  </div>

  <aside class="home-sidebar">

    <div class="sidebar-block">
      <div class="sidebar-block__label">About</div>
      <p>A collection of writings, both past and present, curated by Bill Anderson. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">News alerts</div>
      <p>An email whenever new content is published. No spam.</p>
      {% include subscribe-button.html %}
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Current focus</div>
      <p>Digital public infrastructures in Africa; Financial sustainability; AI and open source intelligence; Digital colonialism. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Contact</div>
      <p><a href="/about/">Available to chat or for consulting</a> — data governance, digital infrastructure, standards, OSINT research for Africa.</p>
    </div>

  </aside>

</div>
