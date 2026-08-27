---
layout: default
title: Newsletter
description: Subscribe to Data Landscapers — a weekly digest of new writing and research on Africa's data infrastructure, digital sovereignty and data governance.
---

<div class="container">

  <header style="padding: 2.5rem 0 2rem; border-bottom: 1px solid var(--rule); margin-bottom: 2.5rem;">
    <div style="font-family: var(--mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.75rem;">News alerts</div>
    <h1 style="font-size: clamp(1.8rem, 4vw, 2.4rem); margin-bottom: 0.75rem;">Stay in the loop</h1>
    <p style="font-size: 1.05rem; color: var(--ink-light); max-width: 580px; margin: 0;">Receive email alerts on new writing and research from Data Landscapers — covering Africa's digital infrastructure, data governance, digital sovereignty and open source intelligence.</p>
  </header>

  <div class="newsletter-wrap">

    <div class="newsletter-form-block">

      <form
        action="https://buttondown.com/api/emails/embed-subscribe/data-landscapers"
        method="post"
        class="nl-form"
      >

        <div class="nl-form__field">
          <label for="nl-email" class="nl-form__label">Email address <span style="color: var(--accent);">*</span></label>
          <input
            type="email"
            id="nl-email"
            name="email"
            required
            placeholder="you@example.com"
            class="nl-form__input"
          >
        </div>

        <div class="nl-form__field">
          <label for="nl-region" class="nl-form__label">Where are you based? <span class="nl-form__optional">Optional</span></label>
          <select id="nl-region" name="metadata[region]" class="nl-form__select">
            <option value="">— Select region —</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Latin America and Caribbean">Latin America and Caribbean</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div class="nl-form__field">
          <label for="nl-interests" class="nl-form__label">What are your interests? <span class="nl-form__optional">Optional</span></label>
          <input
            type="text"
            id="nl-interests"
            name="metadata[interests]"
            placeholder="e.g. data governance, digital identity, IATI…"
            class="nl-form__input"
          >
        </div>

        <div class="nl-form__field" style="margin-top: 1.75rem;">
          <button type="submit" class="nl-form__submit">Subscribe</button>
        </div>

        <p class="nl-form__note">No spam. Unsubscribe at any time. Sent via <a href="https://buttondown.com/refer/data-landscapers" target="_blank" rel="noopener">Buttondown</a>.</p>

      </form>

    </div>

    <div class="newsletter-about">
      <div class="sidebar-block__label" style="color: var(--accent); font-family: var(--mono); font-size: 0.67rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem;">What to expect</div>
      <ul style="list-style: none; padding: 0; margin: 0 0 2rem;">
        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--rule); font-size: 0.88rem; color: var(--ink-light);">An email whenever new articles, datasets or research are published</li>
        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--rule); font-size: 0.88rem; color: var(--ink-light);">Sent only when there is new content to share</li>
        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--rule); font-size: 0.88rem; color: var(--ink-light);">Focus on Africa's data infrastructure and digital sovereignty</li>
        <li style="padding: 0.5rem 0; font-size: 0.88rem; color: var(--ink-light);">Occasional longer commentary and analysis</li>
      </ul>
    </div>

  </div>

</div>

<style>
.newsletter-wrap {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 4rem;
  align-items: start;
  padding-bottom: 4rem;
}

@media (max-width: 700px) {
  .newsletter-wrap { grid-template-columns: 1fr; gap: 2rem; }
}

.newsletter-form-block {
  max-width: 520px;
}

.nl-form__field {
  margin-bottom: 1.25rem;
}

.nl-form__label {
  display: block;
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--ink-faint);
  margin-bottom: 0.4rem;
}

.nl-form__optional {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--ink-faint);
  text-transform: none;
  letter-spacing: 0;
  margin-left: 0.4rem;
}

.nl-form__input,
.nl-form__select {
  width: 100%;
  font-family: var(--serif);
  font-size: 0.92rem;
  color: var(--ink);
  background: white;
  border: 1px solid var(--rule);
  border-radius: 2px;
  padding: 0.55rem 0.8rem;
  outline: none;
  transition: border-color 0.15s;
  appearance: none;
  -webkit-appearance: none;
}

.nl-form__input:focus,
.nl-form__select:focus {
  border-color: var(--accent);
}

.nl-form__input::placeholder {
  color: var(--ink-faint);
}

.nl-form__submit {
  font-family: var(--serif);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.65rem 2rem;
  background: var(--accent);
  color: white;
  border: 1.5px solid var(--accent);
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.nl-form__submit:hover {
  background: var(--accent-dk);
  border-color: var(--accent-dk);
}

.nl-form__note {
  margin-top: 1rem;
  font-family: var(--mono);
  font-size: 0.67rem;
  color: var(--ink-faint);
  line-height: 1.6;
}

.nl-form__note a {
  color: var(--ink-faint);
  border-bottom-color: var(--rule);
}
</style>
