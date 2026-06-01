---
layout: default
title: Search
description: Search all writing, lab notes and portfolio publications on Data Landscapers.
---

<div class="container">

  <header style="padding: 2.5rem 0 2rem; border-bottom: 1px solid var(--rule); margin-bottom: 2.5rem;">
    <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">Search</div>
    <h1 style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-bottom: 0;">Search all content</h1>
  </header>

  <div id="search" style="padding-bottom: 4rem;"></div>

</div>

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function() {
    new PagefindUI({
      element: '#search',
      showImages: false,
      excerptLength: 25,
      resetStyles: true
    });
  });
</script>

<style>
/* ── Pagefind UI restyled to match Data Landscapers ── */

.pagefind-ui {
  font-family: var(--serif);
  color: var(--ink);
}

.pagefind-ui__search-input {
  width: 100%;
  font-family: var(--serif);
  font-size: 1rem;
  color: var(--ink);
  background: white;
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 0.65rem 0.9rem;
  outline: none;
  transition: border-color 0.15s;
  -webkit-appearance: none;
  appearance: none;
}

.pagefind-ui__search-input:focus {
  border-color: var(--accent);
}

.pagefind-ui__search-input::placeholder {
  color: var(--ink-faint);
}

.pagefind-ui__search-clear {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--ink-faint);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0.5rem;
}

.pagefind-ui__search-clear:hover {
  color: var(--accent);
}

.pagefind-ui__results-area {
  margin-top: 2rem;
}

.pagefind-ui__message {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 1.5rem;
}

.pagefind-ui__results {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagefind-ui__result {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--rule);
}

.pagefind-ui__result:last-child {
  border-bottom: none;
}

.pagefind-ui__result-link {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  border: none;
  line-height: 1.3;
  display: block;
  margin-bottom: 0.35rem;
}

.pagefind-ui__result-link:hover {
  color: var(--accent);
}

.pagefind-ui__result-excerpt {
  font-size: 0.88rem;
  color: var(--ink-light);
  line-height: 1.6;
  margin: 0;
}

.pagefind-ui__result-excerpt mark {
  background: #fdf3e3;
  color: var(--ink);
  padding: 0.05em 0.1em;
  border-radius: 1px;
}

.pagefind-ui__button {
  font-family: var(--serif);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  background: none;
  border: 1.5px solid var(--ink);
  border-radius: 2px;
  color: var(--ink);
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.15s;
}

.pagefind-ui__button:hover {
  background: var(--ink);
  color: var(--paper);
}
</style>
