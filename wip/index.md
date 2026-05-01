---
layout: default
title: Work in progress
description: Current research projects and ongoing work by Bill Anderson at Data Landscapers.
---

<div class="container">

<header style="padding: 3rem 0 2rem; border-bottom: 1px solid var(--rule);">
  <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Work in progress</div>
  <h1>Current projects</h1>
  <p style="color: var(--ink-light); max-width: 520px; margin: 0;">Ongoing research and projects, updated as they develop. Some are commissioned work; others are independent research.</p>
</header>

{% for item in site.wip %}
<div class="wip-item-card" style="padding: 2rem 0;">
  <span class="wip-item-card__status wip-item-card__status--{{ item.status | default: 'active' }}">{{ item.status | default: 'Active' }}</span>
  <h2 style="font-size: 1.3rem; margin: 0.5rem 0 0.6rem;"><a href="{{ item.url | relative_url }}" style="color: var(--ink); border: none;">{{ item.title }}</a></h2>
  <p style="color: var(--ink-light); font-size: 0.92rem; max-width: 560px;">{{ item.description }}</p>
  {% if item.client %}<p style="font-family: var(--mono); font-size: 0.7rem; color: var(--ink-faint);">Client: {{ item.client }}</p>{% endif %}
</div>
{% endfor %}

{% if site.wip.size == 0 %}
<p style="color: var(--ink-faint); padding: 3rem 0; font-family: var(--mono); font-size: 0.8rem;">No current projects listed.</p>
{% endif %}

</div>
