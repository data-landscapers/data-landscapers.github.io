/* datatable-test.mjs — a headless check of assets/shared/datatable.js.
 *
 *   cd /tmp && npm install jsdom && node <a copy of this file>
 *
 * This site's tables live in Jekyll markdown, so there is no built HTML to load
 * without running Jekyll. This lifts the `<div class="dl-datatable" ...>` block
 * straight out of each `_posts/` source (the Lab merged into it), wraps it in a minimal page,
 * and runs the real component over the real CSV in `assets/data/`. That tests the
 * thing that actually breaks — the contract between a page's data-* attributes
 * and the script — without needing the site built.
 *
 * jsdom has no layout and no canvas, so the widths here come from the script's
 * fallback estimator and nothing about how it *looks* is verified. What is
 * verified: every page's table renders, at the right number of rows, with the
 * toolbar the page expects, and with the columns and badges it asked for — and
 * that it draws a hundred rows at a time, under the element ceiling (`paging`).
 *
 * Corpus has its own suite over its own pages (`prototypes/datatable-test.mjs`),
 * because its markup contract differs at one point: it supplies its own
 * `.dt-controls` and this repo's pages do not.
 */
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM, VirtualConsole } from 'jsdom';

const REPO = process.env.DATA_LANDSCAPERS
  || '/sessions/fervent-intelligent-lovelace/mnt/data-landscapers';
const JS = fs.readFileSync(path.join(REPO, 'assets/shared/datatable.js'), 'utf8');

const PAGE = 100;            // rows a table draws at first, and adds per "Show more"
const MAX_ELEMENTS = 3000;   // elements on a table page at first draw (Bill, ruling R110)

/* Pages over the ceiling at a hundred rows, because they show twenty to fifty
 * columns: a row costs three elements and two more a filled cell. The repair is a
 * `data-cols` on the page, not a smaller draw. A page listed here that comes in
 * under the ceiling fails, so the list cannot outlive its reason. */
const WIDE = new Set([
  '_posts/2025-09-15-who-pays-for-dt.md',
  '_posts/2026-04-15-africa-data-centres.md',
  '_posts/2026-06-10-africa-data-centres-v2.md',
]);

let failures = 0;
const check = (label, cond, detail = '') => {
  if (cond) console.log(`  ok    ${label}`);
  else { failures++; console.log(`  FAIL  ${label}${detail ? '  — ' + detail : ''}`); }
};

/* Every source file carrying a table, and the div out of each. */
function pages() {
  const out = [];
  for (const dir of ['_posts']) {
    for (const f of fs.readdirSync(path.join(REPO, dir))) {
      const src = path.join(REPO, dir, f);
      if (!f.endsWith('.md') || !fs.statSync(src).isFile()) continue;
      const text = fs.readFileSync(src, 'utf8');
      const m = text.match(/<div class="dl-datatable"[\s\S]*?<\/div>/);
      if (m) out.push({ file: `${dir}/${f}`, html: m[0] });
    }
  }
  return out;
}

/* Count CSV records quote-aware, so a newline inside a quoted field is not a row. */
function csvRows(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  let n = 0, inQ = false, seen = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') { if (inQ && text[i + 1] === '"') i++; else inQ = !inQ; }
    else if (ch === '\n' && !inQ) { if (seen) n++; seen = false; }
    else if (ch !== '\r') seen = true;
  }
  if (seen) n++;
  return n - 1;
}

async function run(page) {
  console.log(`\n${page.file}`);
  const dom = new JSDOM(`<body>${page.html}</body>`,
    { runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: new VirtualConsole() });
  const win = dom.window, doc = win.document;
  const box = doc.querySelector('.dl-datatable');

  // Page paths are site-absolute (/assets/data/x.csv); resolve them in the repo.
  let served = null;
  win.fetch = async (url) => {
    const p = path.join(REPO, url.replace(/^\//, ''));
    if (!fs.existsSync(p)) return { ok: false, status: 404, statusText: 'not found' };
    const text = fs.readFileSync(p, 'utf8');
    if (url === box.dataset.src) served = text;
    return { ok: true, status: 200, text: async () => text };
  };
  win.eval(JS);
  await new Promise(r => setTimeout(r, 400));

  const rows = doc.querySelectorAll('.dt-body tbody tr.dt-row');
  check('table rendered', rows.length > 0,
    doc.querySelector('.dt-msg')?.textContent || 'no rows');
  if (!rows.length) return;

  const total = csvRows(served);
  check(`first draw is ${Math.min(PAGE, total)} of the ${total} in ${box.dataset.src.split('/').pop()}`,
    rows.length === Math.min(PAGE, total), `${rows.length} rendered`);
  const elements = doc.querySelectorAll('*').length;
  if (WIDE.has(page.file)) {
    check(`still over ${MAX_ELEMENTS} elements, as WIDE says (${elements})`, elements > MAX_ELEMENTS,
      'now under the ceiling: take it off the list');
  } else {
    check(`first draw is under ${MAX_ELEMENTS} elements (${elements})`, elements <= MAX_ELEMENTS);
  }

  // The toolbar this repo's pages do NOT supply, so the script must build it.
  check('the script built the toolbar', !!doc.querySelector('.dt-controls'));
  if (box.dataset.title) {
    check('title shown', doc.querySelector('.dt-title')?.textContent === box.dataset.title.trim());
  }
  const dl = [...doc.querySelectorAll('.dt-controls a.btn')].map(a => a.getAttribute('href'));
  check('the CSV is offered for download', dl.includes(box.dataset.src), dl.join(' '));
  for (const [attr, name] of [['fullSrc', 'full dataset'], ['metadataSrc', 'metadata']]) {
    if (box.dataset[attr]) {
      check(`${name} offered too`, dl.includes(box.dataset[attr]), dl.join(' '));
    }
  }

  const asked = (box.dataset.filters || '').split(',').map(s => s.trim()).filter(Boolean);
  check(`filters built (${asked.length} asked for)`,
    doc.querySelectorAll('.dt-filter').length === asked.length,
    `${doc.querySelectorAll('.dt-filter').length} built`);

  const cols = (box.dataset.cols || '').split(',').map(s => s.trim()).filter(Boolean);
  if (cols.length) {
    check('one column per name in data-cols',
      doc.querySelectorAll('.dt-head thead th').length === cols.length + 1,
      `${doc.querySelectorAll('.dt-head thead th').length} headers for ${cols.length} names`);
  }

  const heads = [...doc.querySelectorAll('.dt-head colgroup col')].map(c => parseFloat(c.style.width));
  const bodys = [...doc.querySelectorAll('.dt-body colgroup col')].map(c => parseFloat(c.style.width));
  check('header and body widths agree',
    heads.length === bodys.length && heads.every((w, i) => w === bodys[i]));
  check('no width is NaN', bodys.every(w => w > 0 && isFinite(w)));
  if (box.dataset.minColWidth) {
    const floor = parseFloat(box.dataset.minColWidth);
    check('data-min-col-width respected', Math.min(...bodys.slice(1)) >= floor,
      `narrowest ${Math.min(...bodys.slice(1))} against ${floor}`);
  }

  if (box.dataset.badges) {
    const badged = doc.querySelectorAll('.dt-body .dt-badge');
    check('badges rendered', badged.length > 0, `${badged.length}`);
    const tones = new Set([...badged].map(b => b.className.split('--')[1]));
    const wanted = new Set(Object.values(JSON.parse(box.dataset.badges)).flatMap(o => Object.values(o)));
    check('every badge tone is one the page asked for',
      [...tones].every(t => wanted.has(t)), [...tones].join(', '));
  }

  const tr = doc.querySelector('.dt-body tbody tr.dt-row');
  tr.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await new Promise(r => setTimeout(r, 20));
  check('a row opens its detail panel',
    tr.nextElementSibling?.classList.contains('dt-detail'));

  await paging(doc, win, total);
}

/* A hundred rows at a time. The table still filters, sorts and searches every row;
 * what is held to PAGE is what it draws, and anything that reorders the rows goes
 * back to the first PAGE. */
async function paging(doc, win, total) {
  const drawn = () => doc.querySelectorAll('.dt-body tbody tr.dt-row').length;
  const count = () => doc.querySelector('.dt-count').textContent;
  const more = doc.querySelector('.dt-more'), btn = more.querySelector('button');
  const n = v => v.toLocaleString();

  if (total <= PAGE) {
    check('no "Show more" on a table that fits in one draw', more.hidden);
    check('the count is the row count', count() === `${n(total)} ${total === 1 ? 'row' : 'rows'}`, count());
    return;
  }
  check('the count reads drawn of total', count() === `${PAGE} of ${n(total)} rows`, count());
  const step = Math.min(PAGE, total - PAGE);
  check('"Show more" says how many it adds', !more.hidden && btn.textContent === `Show ${step} more`,
    btn.textContent);

  btn.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check(`and adds them (${PAGE + step})`, drawn() === PAGE + step, `${drawn()} drawn`);
  check('the opened detail panel survived the append', !!doc.querySelector('.dt-body tr.dt-detail'));
  const last = doc.querySelector('.dt-body tbody tr.dt-row:last-of-type');
  check('appended rows carry their place in the order', +last.dataset.i === PAGE + step - 1, last.dataset.i);

  for (let i = 0; i < Math.ceil(total / PAGE) && !more.hidden; i++) {
    btn.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  }
  check('every row is reachable, and the control goes when they are all drawn',
    drawn() === total && more.hidden, `${drawn()} of ${total}`);
  check('the count then drops the "of"', count() === `${n(total)} rows`, count());

  doc.querySelector('.dt-head thead th:nth-child(2)').dispatchEvent(new win.Event('click'));
  check('a sort returns to the first draw', drawn() === PAGE && !more.hidden, `${drawn()} drawn`);

  btn.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const box = doc.querySelector('.dt-search');
  box.value = 'zzzz-not-in-this-data'; box.dispatchEvent(new win.Event('input'));
  await new Promise(r => setTimeout(r, 250));
  check('a search with no hits hides the control',
    more.hidden && count() === `0 rows, filtered from ${n(total)}`, count());
  box.value = ''; box.dispatchEvent(new win.Event('input'));
  await new Promise(r => setTimeout(r, 250));
  check('clearing the search returns to the first draw', drawn() === PAGE, `${drawn()} drawn`);

  const sel = doc.querySelector('.dt-filter');
  if (sel) {
    btn.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    sel.value = sel.options[1].value; sel.dispatchEvent(new win.Event('change'));
    check('a filter returns to the first draw, and the count names the total in the file',
      drawn() <= PAGE && count().endsWith(`, filtered from ${n(total)}`), `${drawn()} drawn, ${count()}`);
  }
}

for (const p of pages()) await run(p);
console.log(failures ? `\n${failures} failure(s)` : '\nall checks passed');
process.exit(failures ? 1 : 0);
