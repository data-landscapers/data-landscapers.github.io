---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
    <div class="hero__label">Bill Anderson &nbsp;/&nbsp; Data Landscapers Ltd</div>
    <h1 class="hero__name">Mapping Africa's<br>data landscape</h1>
    <p class="hero__role">
      Data governance consultant specialising in digital infrastructure, data sovereignty and open source intelligence across all 54 African countries.
    </p>
    <div class="hero__cta">
      <a href="/about/" class="btn">About &amp; CV</a>
      <a href="/writing/" class="btn btn--accent">Latest writing</a>
    </div>
  </div>
</section>

<div class="home-grid container--wide">

  <div class="home-main">

    <div class="section-header">
      <h2>Latest writing</h2>
      <a href="/writing/">All articles →</a>
    </div>

    <ul class="article-list">
      {% for post in site.posts limit:5 %}
      <li class="article-list__item">
        <div>
          <div class="article-list__meta">{{ post.date | date: "%-d %B %Y" }}{% if post.category %} &nbsp;·&nbsp; {{ post.category }}{% endif %}</div>
          <div class="article-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
          {% if post.subtitle %}<p class="article-list__excerpt">{{ post.subtitle }}</p>{% elsif post.excerpt %}<p class="article-list__excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
        </div>
        {% if post.tags[0] %}<span class="article-list__tag">{{ post.tags[0] }}</span>{% endif %}
      </li>
      {% endfor %}
    </ul>

    <div class="section-header" style="margin-top: 3rem;">
      <h2>Work in progress</h2>
      <a href="/wip/">All projects →</a>
    </div>

    {% for item in site.wip limit:3 %}
    <div class="wip-item-card">
      <span class="wip-item-card__status wip-item-card__status--{{ item.status | default: 'active' }}">{{ item.status | default: 'Active' }}</span>
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      <p style="font-size: 0.9rem; color: var(--ink-light);">{{ item.description }}</p>
    </div>
    {% endfor %}

  </div>

  <aside class="home-sidebar">

    <div class="sidebar-block">
      <div class="sidebar-block__label">About</div>
      <p>Data governance consultant. 14 years at Development Initiatives including as technical lead of IATI. Now working on Africa's digital transformation. <a href="/about/">More →</a></p>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Current focus</div>
      <ul>
        <li>
          <a href="https://data-landscapers.github.io/africa-dpi/" target="_blank">Africa DPI Dashboard</a>
          <span class="meta">54 countries · AfDB study</span>
        </li>
        <li>
          <a href="/wip/">Data governance frameworks</a>
          <span class="meta">Work in progress</span>
        </li>
      </ul>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Portfolio</div>
      <ul>
        <li><a href="/portfolio/data-governance/">Data governance</a></li>
        <li><a href="/portfolio/data-landscaping/">Data landscaping</a></li>
        <li><a href="/portfolio/data-standards/">Data standards</a></li>
      </ul>
    </div>

    <div class="sidebar-block">
      <div class="sidebar-block__label">Contact</div>
      <p><a href="/contact/">Available for consulting</a> — data governance, digital infrastructure, OSINT research for Africa.</p>
    </div>

  </aside>

</div>
