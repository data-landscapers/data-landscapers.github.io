/**
 * DataLandscapers — datatable.js
 * Loads a CSV and renders a sortable, filterable table with dual scrollbars.
 * Usage: <div class="dl-datatable" data-src="/assets/data/file.csv" data-cols="col1,col2" data-title="Title"></div>
 */
(function () {
  'use strict';

  function parseCSV(text) {
    const rows = [];
    let row = [], field = '', inQuotes = false;
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    for (let i = 0; i < text.length; i++) {
      const ch = text[i], next = text[i + 1];
      if (inQuotes) {
        if (ch === '"' && next === '"') { field += '"'; i++; }
        else if (ch === '"') { inQuotes = false; }
        else { field += ch; }
      } else {
        if (ch === '"') { inQuotes = true; }
        else if (ch === ',') { row.push(field.trim()); field = ''; }
        else if (ch === '\n' || (ch === '\r' && next === '\n')) {
          if (ch === '\r') i++;
          row.push(field.trim()); field = '';
          if (row.some(c => c !== '')) rows.push(row);
          row = [];
        } else { field += ch; }
      }
    }
    if (field || row.length) { row.push(field.trim()); if (row.some(c => c !== '')) rows.push(row); }
    return rows;
  }

  function buildTable(container, rows, selectedCols, title) {
    if (rows.length < 2) { container.textContent = 'No data.'; return; }

    const headers = rows[0];
    const colIndices = selectedCols
      ? selectedCols.map(c => headers.findIndex(h => h.toLowerCase().trim() === c.toLowerCase().trim())).filter(i => i >= 0)
      : headers.map((_, i) => i);

    const displayHeaders = colIndices.map(i => headers[i]);
    const dataRows = rows.slice(1).map(r => colIndices.map(i => r[i] || ''));

    let sortCol = -1, sortDir = 1;
    let filterText = '';
    let filterColValue = '';
    let filterSovValue = '';

    function getUniqueValues(colIdx) {
      const vals = new Set();
      dataRows.forEach(r => { if (r[colIdx]) vals.add(r[colIdx]); });
      return Array.from(vals).sort();
    }

    container.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'data-table-wrap';

    // Controls
    const controls = document.createElement('div');
    controls.className = 'data-table-controls';

    if (title) {
      const titleEl = document.createElement('span');
      titleEl.style.cssText = 'font-family:var(--mono);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);font-weight:500;';
      titleEl.textContent = title;
      controls.appendChild(titleEl);
    }

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search…';
    searchInput.setAttribute('aria-label', 'Search table');
    controls.appendChild(searchInput);

    const countryColIdx = displayHeaders.findIndex(h => h.toLowerCase().includes('country_name'));
    if (countryColIdx >= 0) {
      const label = document.createElement('label');
      label.textContent = 'Country ';
      const sel = document.createElement('select');
      const allOpt = document.createElement('option');
      allOpt.value = ''; allOpt.textContent = 'All countries';
      sel.appendChild(allOpt);
      getUniqueValues(countryColIdx).forEach(v => {
        const o = document.createElement('option'); o.value = o.textContent = v; sel.appendChild(o);
      });
      sel.addEventListener('change', () => { filterColValue = sel.value; render(); });
      label.appendChild(sel); controls.appendChild(label);
    }

    const sovColIdx = displayHeaders.findIndex(h => h.toLowerCase().includes('sovereignty'));
    if (sovColIdx >= 0) {
      const label2 = document.createElement('label');
      label2.textContent = 'Sovereignty ';
      const sel2 = document.createElement('select');
      const allOpt2 = document.createElement('option');
      allOpt2.value = ''; allOpt2.textContent = 'All'; sel2.appendChild(allOpt2);
      getUniqueValues(sovColIdx).forEach(v => {
        const o = document.createElement('option'); o.value = o.textContent = v; sel2.appendChild(o);
      });
      sel2.addEventListener('change', () => { filterSovValue = sel2.value; render(); });
      label2.appendChild(sel2); controls.appendChild(label2);
    }

    const count = document.createElement('span');
    count.className = 'data-table-count';
    controls.appendChild(count);
    wrap.appendChild(controls);

    // Top scroll mirror
    const scrollTop = document.createElement('div');
    scrollTop.className = 'data-table-scroll-top';
    const scrollTopInner = document.createElement('div');
    scrollTopInner.className = 'data-table-scroll-top-inner';
    scrollTop.appendChild(scrollTopInner);
    wrap.appendChild(scrollTop);

    // Main scroll area
    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'data-table-scroll';

    const table = document.createElement('table');
    table.className = 'data-table';

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    displayHeaders.forEach((h, i) => {
      const th = document.createElement('th');
      th.textContent = h.replace(/_/g, ' ');
      th.setAttribute('scope', 'col');
      th.addEventListener('click', () => {
        if (sortCol === i) sortDir *= -1; else { sortCol = i; sortDir = 1; }
        document.querySelectorAll('.data-table thead th').forEach(el => el.className = '');
        th.className = sortDir === 1 ? 'sort-asc' : 'sort-desc';
        render();
      });
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    scrollDiv.appendChild(table);
    wrap.appendChild(scrollDiv);
    container.appendChild(wrap);

    // Sync scrollbars
    scrollTop.addEventListener('scroll', () => { scrollDiv.scrollLeft = scrollTop.scrollLeft; });
    scrollDiv.addEventListener('scroll', () => { scrollTop.scrollLeft = scrollDiv.scrollLeft; });

    // Set top scroller width to match table after render
    function syncTopScroller() {
      scrollTopInner.style.width = table.offsetWidth + 'px';
    }

    const sovIdx = displayHeaders.findIndex(h => h.toLowerCase().includes('sovereignty'));
    const statusIdx = displayHeaders.findIndex(h => h.toLowerCase().includes('operational_status'));

    function sovBadge(val) {
      if (!val) return '';
      const v = val.toLowerCase();
      let cls = 'grey';
      if (v.includes('fully african')) cls = 'green';
      else if (v.includes('african with')) cls = 'blue';
      else if (v.includes('us/cn')) cls = 'red';
      else if (v.includes('non-us')) cls = 'amber';
      return `<span class="badge badge--${cls}">${val}</span>`;
    }

    function statusBadge(val) {
      if (!val) return val;
      const v = val.toLowerCase();
      let cls = 'grey';
      if (v === 'operational') cls = 'green';
      else if (v.includes('construct') || v.includes('active')) cls = 'amber';
      else if (v === 'planned') cls = 'blue';
      else if (v === 'decommissioned') cls = 'red';
      return `<span class="badge badge--${cls}">${val}</span>`;
    }

    searchInput.addEventListener('input', () => { filterText = searchInput.value.toLowerCase(); render(); });

    function render() {
      let visible = dataRows.filter(r => {
        const rowText = r.join(' ').toLowerCase();
        if (filterText && !rowText.includes(filterText)) return false;
        if (filterColValue && countryColIdx >= 0 && r[countryColIdx] !== filterColValue) return false;
        if (filterSovValue && sovColIdx >= 0 && r[sovColIdx] !== filterSovValue) return false;
        return true;
      });

      if (sortCol >= 0) {
        visible.sort((a, b) => {
          const av = a[sortCol] || '', bv = b[sortCol] || '';
          const an = parseFloat(av), bn = parseFloat(bv);
          if (!isNaN(an) && !isNaN(bn)) return sortDir * (an - bn);
          return sortDir * av.localeCompare(bv);
        });
      }

      count.textContent = `${visible.length} of ${dataRows.length} rows`;
      tbody.innerHTML = '';

      visible.forEach(r => {
        const tr = document.createElement('tr');
        r.forEach((cell, i) => {
          const td = document.createElement('td');
          if (i === sovIdx) { td.innerHTML = sovBadge(cell); }
          else if (i === statusIdx) { td.innerHTML = statusBadge(cell); }
          else {
            td.textContent = cell;
            if (i === 0) td.className = 'mono';
          }
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      syncTopScroller();
    }

    render();
  }

  function init() {
    document.querySelectorAll('.dl-datatable').forEach(container => {
      const src = container.dataset.src;
      const cols = container.dataset.cols ? container.dataset.cols.split(',').map(c => c.trim()) : null;
      const title = container.dataset.title || '';
      if (!src) { container.textContent = 'No data source specified.'; return; }
      container.innerHTML = '<p style="font-family:var(--mono);font-size:0.75rem;color:var(--ink-faint);padding:1rem;">Loading data…</p>';
      fetch(src)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(text => buildTable(container, parseCSV(text), cols, title))
        .catch(err => { container.textContent = `Could not load data: ${err.message}`; });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
