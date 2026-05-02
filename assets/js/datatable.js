(function () {
  'use strict';

  /* ── Sovereignty badge colours ───────────────────────────────────────── */
  const SOVEREIGNTY_COLOURS = {
    'fully african':                        { bg: '#d4edda', text: '#155724', border: '#c3e6cb' },
    'african with hyperscaler involvement': { bg: '#cce5ff', text: '#004085', border: '#b8daff' },
    'non-us/cn foreign':                    { bg: '#fff3cd', text: '#856404', border: '#ffeeba' },
    'us/cn control':                        { bg: '#f8d7da', text: '#721c24', border: '#f5c6cb' },
  };

  function sovereigntyBadge(value) {
    if (!value) return value;
    const key = value.trim().toLowerCase();
    const style = SOVEREIGNTY_COLOURS[key];
    if (!style) return escHtml(value);
    return `<span style="
      display:inline-block;padding:2px 8px;border-radius:3px;font-size:0.82em;
      background:${style.bg};color:${style.text};border:1px solid ${style.border};
      font-family:'JetBrains Mono',monospace;white-space:nowrap;">${escHtml(value)}</span>`;
  }

  function escHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ── CSV parser (handles quoted fields) ─────────────────────────────── */
  function parseCSV(text) {
    const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    const parse = line => {
      const out = []; let cur = '', inQ = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          if (inQ && line[i+1] === '"') { cur += '"'; i++; }
          else inQ = !inQ;
        } else if (ch === ',' && !inQ) { out.push(cur.trim()); cur = ''; }
        else cur += ch;
      }
      out.push(cur.trim()); return out;
    };
    const headers = parse(lines[0]);
    return { headers, rows: lines.slice(1).filter(l => l.trim()).map(parse) };
  }

  /* ── Download helper ─────────────────────────────────────────────────── */
  function triggerDownload(src, filename) {
    const a = document.createElement('a');
    a.href = src;
    a.download = filename || src.split('/').pop() || 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /* ── Download button factory ─────────────────────────────────────────── */
  function makeDownloadBtn(label) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.style.cssText = `
      font-family:'JetBrains Mono',monospace;font-size:0.78em;
      padding:4px 10px;border:1px solid #c84b2f;border-radius:3px;
      background:#fff;color:#c84b2f;cursor:pointer;
      display:inline-flex;align-items:center;gap:5px;white-space:nowrap;
      line-height:1.4;`;
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 1v7" stroke="#c84b2f" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M3.5 6L6 8.5L8.5 6" stroke="#c84b2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 10.5h10" stroke="#c84b2f" stroke-width="1.5" stroke-linecap="round"/>
    </svg>${escHtml(label)}`;
    btn.addEventListener('mouseover', () => { btn.style.background = '#fdf0ec'; });
    btn.addEventListener('mouseout',  () => { btn.style.background = '#fff'; });
    return btn;
  }

  function selectStyle() {
    return `font-family:'JetBrains Mono',monospace;font-size:0.8em;
      padding:4px 8px;border:1px solid #ccc;border-radius:3px;
      background:#fff;color:#333;cursor:pointer;
      max-width:200px;min-width:0;`;
  }

  /* ── Normalise a header string for matching ──────────────────────────── */
  /* Collapses spaces, hyphens, slashes to underscores; trims edges */
  function norm(s) {
    return s.toLowerCase()
      .replace(/[\s\-\/]+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  }

  /* Find a CSV column by name. Normalises both sides before comparing,
     so "Country Name", "country_name", "country-name" all match. */
  function findCol(headers, colName) {
    const nc = norm(colName);
    return headers.findIndex(h => norm(h) === nc);
  }

  /* ── Column width hints ──────────────────────────────────────────────── */
  function colWidthStyle(headerName) {
    const n = norm(headerName);
    if (n.includes('url') || n.includes('source_url') || n === 'source')
      return 'width:400px;min-width:300px;white-space:normal;word-break:break-all;overflow-wrap:anywhere;';
    if (n.includes('comment') || n.includes('description') || n.includes('note') || n.includes('detail'))
      return 'min-width:240px;white-space:normal;word-break:normal;';
    return '';
  }

  /* ── Build one table ─────────────────────────────────────────────────── */
  function buildTable(container) {
    const src        = container.dataset.src;
    const metaSrc    = container.dataset.metadataSrc || null;
    const colList    = (container.dataset.cols    || '').split(',').map(s => s.trim()).filter(Boolean);
    const filterList = (container.dataset.filters || '').split(',').map(s => s.trim()).filter(Boolean);
    const title      = container.dataset.title || '';

    if (!src) { container.textContent = 'Error: data-src not set.'; return; }

    container.innerHTML = '<p style="font-family:\'JetBrains Mono\',monospace;font-size:0.85em;color:#888;">Loading data\u2026</p>';

    fetch(src)
      .then(r => { if (!r.ok) throw new Error(r.statusText); return r.text(); })
      .then(text => {
        const { headers, rows } = parseCSV(text);

        /* Resolve visible column indices */
        const colIndices = colList.length
          ? colList.map(c => findCol(headers, c)).filter(i => i !== -1)
          : headers.map((_, i) => i);

        const visibleHeaders = colIndices.map(i => headers[i]);

        /* Resolve filter column indices */
        let filterColIndices;
        if (filterList.length) {
          filterColIndices = filterList
            .map(c => findCol(headers, c))
            .filter(i => i !== -1);
        } else {
          const AUTO = ['country_name', 'sovereignty_category'];
          filterColIndices = AUTO
            .map(a => headers.findIndex(h => norm(h) === a))
            .filter(i => i !== -1);
        }

        /* sovereignty_category index (for badge rendering) */
        const sovColIdx = headers.findIndex(h => norm(h) === 'sovereignty_category');

        /* Per-filter state: map of headerIndex -> selected value string */
        const filterState = {};
        filterColIndices.forEach(i => { filterState[i] = ''; });

        /* Unique sorted values per filter column */
        const uniq = idx => [...new Set(rows.map(r => r[idx]).filter(Boolean))].sort();

        /* State */
        let sortCol = -1, sortAsc = true, searchText = '';

        /* ── Render ──────────────────────────────────────────────────── */
        function filtered() {
          return rows.filter(row => {
            for (const [idx, val] of Object.entries(filterState)) {
              if (val && row[idx] !== val) return false;
            }
            if (searchText) {
              const q = searchText.toLowerCase();
              return colIndices.some(i => (row[i] || '').toLowerCase().includes(q));
            }
            return true;
          });
        }

        function sorted(data) {
          if (sortCol < 0) return data;
          return [...data].sort((a, b) => {
            const av = a[colIndices[sortCol]] || '';
            const bv = b[colIndices[sortCol]] || '';
            const nv = parseFloat(av), mv = parseFloat(bv);
            const cmp = (!isNaN(nv) && !isNaN(mv)) ? nv - mv : av.localeCompare(bv);
            return sortAsc ? cmp : -cmp;
          });
        }

        function render() {
          const data     = sorted(filtered());
          const filename = src.split('/').pop() || 'data.csv';

          container.innerHTML = '';
          const wrap = document.createElement('div');

          /* ── Toolbar ── */
          const toolbar = document.createElement('div');
          toolbar.style.cssText = `
            display:flex;flex-wrap:wrap;align-items:center;gap:8px;
            margin-bottom:10px;padding:10px 12px;
            background:#f0ede6;border:1px solid #ddd;border-radius:4px;`;

          /* Title */
          if (title) {
            const t = document.createElement('span');
            t.style.cssText = `font-family:'JetBrains Mono',monospace;font-size:0.8em;
              font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.04em;
              margin-right:4px;`;
            t.textContent = title.trim();
            toolbar.appendChild(t);
          }

          /* Filter dropdowns */
          filterColIndices.forEach(ci => {
            const values = uniq(ci);
            if (!values.length) return;
            const label = headers[ci];
            const sel   = document.createElement('select');
            sel.style.cssText = selectStyle();
            sel.innerHTML = `<option value="">All ${escHtml(label)}</option>` +
              values.map(v => `<option${filterState[ci] === v ? ' selected' : ''}>${escHtml(v)}</option>`).join('');
            sel.addEventListener('change', () => { filterState[ci] = sel.value; render(); });
            toolbar.appendChild(sel);
          });

          /* Search box */
          const search = document.createElement('input');
          search.type = 'text'; search.placeholder = 'Search\u2026';
          search.value = searchText;
          search.style.cssText = selectStyle() + 'min-width:140px;';
          search.addEventListener('input', () => { searchText = search.value; render(); });
          toolbar.appendChild(search);

          /* Spacer */
          const spacer = document.createElement('div');
          spacer.style.cssText = 'flex:1;min-width:8px;';
          toolbar.appendChild(spacer);

          /* Row count */
          const count = document.createElement('span');
          count.style.cssText = `font-family:'JetBrains Mono',monospace;font-size:0.78em;color:#777;white-space:nowrap;`;
          count.textContent = `${data.length.toLocaleString()} row${data.length !== 1 ? 's' : ''}`;
          toolbar.appendChild(count);

          /* Download CSV button */
          const dlBtn = makeDownloadBtn('Download CSV');
          dlBtn.addEventListener('click', () => triggerDownload(src, filename));
          toolbar.appendChild(dlBtn);

          /* Download Metadata button — only present when data-metadata-src is set */
          if (metaSrc) {
            const metaFilename = metaSrc.split('/').pop() || 'metadata.csv';
            const metaBtn = makeDownloadBtn('Download metadata');
            metaBtn.addEventListener('click', () => triggerDownload(metaSrc, metaFilename));
            toolbar.appendChild(metaBtn);
          }

          wrap.appendChild(toolbar);

          /* ── Dual scrollbar wrapper ── */
          const scrollTop = document.createElement('div');
          scrollTop.style.cssText = 'overflow-x:auto;margin-bottom:0;height:12px;';
          const scrollTopInner = document.createElement('div');
          scrollTopInner.style.height = '1px';
          scrollTop.appendChild(scrollTopInner);

          const scrollBot = document.createElement('div');
          scrollBot.style.cssText = 'overflow-x:auto;';

          /* ── Table ── */
          const tbl = document.createElement('table');
          tbl.style.cssText = `
            border-collapse:collapse;font-size:0.88em;
            font-family:'Source Serif 4',serif;`;

          /* Head */
          const thead = tbl.createTHead();
          const hrow  = thead.insertRow();
          visibleHeaders.forEach((h, vi) => {
            const th = document.createElement('th');
            th.style.cssText = `
              padding:7px 10px;text-align:left;white-space:nowrap;cursor:pointer;
              font-family:'JetBrains Mono',monospace;font-size:0.8em;font-weight:700;
              background:#e8e4dc;border-bottom:2px solid #c84b2f;color:#333;
              user-select:none;${colWidthStyle(h)}`;
            const arrow = sortCol === vi ? (sortAsc ? ' \u25b2' : ' \u25bc') : ' \u2195';
            th.textContent = h + arrow;
            th.addEventListener('click', () => {
              if (sortCol === vi) sortAsc = !sortAsc;
              else { sortCol = vi; sortAsc = true; }
              render();
            });
            hrow.appendChild(th);
          });

          /* Body */
          const tbody = tbl.createTBody();
          data.forEach((row, ri) => {
            const tr = tbody.insertRow();
            tr.style.background = ri % 2 === 0 ? '#faf9f6' : '#f2f0eb';
            tr.addEventListener('mouseover', () => { tr.style.background = '#fdf0ec'; });
            tr.addEventListener('mouseout',  () => { tr.style.background = ri % 2 === 0 ? '#faf9f6' : '#f2f0eb'; });

            colIndices.forEach(ci => {
              const td = tr.insertCell();
              td.style.cssText = `padding:6px 10px;border-bottom:1px solid #e0ddd6;vertical-align:top;${colWidthStyle(headers[ci])}`;
              const val = row[ci] || '';
              if (ci === sovColIdx) td.innerHTML = sovereigntyBadge(val);
              else td.textContent = val;
            });
          });

          scrollBot.appendChild(tbl);

          /* Sync scrollbars */
          function syncWidths() {
            scrollTopInner.style.width = tbl.scrollWidth + 'px';
          }
          scrollTop.addEventListener('scroll', () => { scrollBot.scrollLeft = scrollTop.scrollLeft; });
          scrollBot.addEventListener('scroll', () => { scrollTop.scrollLeft = scrollBot.scrollLeft; });

          wrap.appendChild(scrollTop);
          wrap.appendChild(scrollBot);
          container.appendChild(wrap);
          setTimeout(syncWidths, 50);
        }

        render();
      })
      .catch(err => {
        container.innerHTML = `<p style="color:#721c24;font-family:'JetBrains Mono',monospace;font-size:0.85em;">
          Failed to load data: ${escHtml(err.message)}</p>`;
      });
  }

  /* ── Init all tables on page ─────────────────────────────────────────── */
  function init() {
    document.querySelectorAll('.dl-datatable').forEach(buildTable);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
