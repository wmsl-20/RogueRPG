/* Layout uses browser device identity, never viewport width as a device proxy. */
(() => {
  const root = document.documentElement;
  const ua = navigator.userAgent;
  const mobile = navigator.userAgentData?.mobile === true ||
    /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(ua) ||
    (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  root.dataset.device = mobile ? 'mobile' : 'desktop';
  const main = document.querySelector('main');
  let frame;
  let fitPending = false;
  const schedule = (fit = true) => {
    fitPending ||= fit === true;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  };
  const pagers = [...document.querySelectorAll('.modal')].map(dialog => {
    const content = dialog.querySelector('.inventory-content, .log-list');
    const controls = document.createElement('nav');
    controls.className = 'page-controls';
    controls.setAttribute('aria-label', 'Páginas');
    const previous = document.createElement('button');
    previous.type = 'button';
    previous.textContent = 'Anterior';
    const label = document.createElement('span');
    label.setAttribute('aria-live', 'polite');
    const next = document.createElement('button');
    next.type = 'button';
    next.textContent = 'Próxima';
    controls.append(previous, label, next);
    dialog.firstElementChild.append(controls);
    const pager = { dialog, content, controls, previous, next, label, page: 0 };
    previous.addEventListener('click', () => { pager.page--; schedule(false); });
    next.addEventListener('click', () => { pager.page++; schedule(false); });
    new MutationObserver(() => { pager.page = 0; schedule(false); })
      .observe(content, { childList: true });
    new MutationObserver(() => schedule(false)).observe(dialog, { attributes: true, attributeFilter: ['open'] });
    return pager;
  });
  function paginate(pager, height, top) {
    const { dialog, content, controls, previous, next, label } = pager;
    if (!dialog.open) return;
    dialog.style.zoom = '1';
    dialog.style.top = '0px';
    controls.hidden = false;
    const rows = [...content.children];
    rows.forEach(row => { row.hidden = false; });
    const window = dialog.firstElementChild;
    const overhead = window.getBoundingClientRect().height - content.getBoundingClientRect().height;
    const available = Math.max(1, height - 24 - overhead);
    const style = getComputedStyle(content);
    const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const pages = [[]];
    let used = padding;
    for (const row of rows) {
      const rowStyle = getComputedStyle(row);
      const size = row.getBoundingClientRect().height + parseFloat(rowStyle.marginTop) + parseFloat(rowStyle.marginBottom);
      if (used + size > available && pages.at(-1).length) {
        pages.push([]);
        used = padding;
      }
      pages.at(-1).push(row);
      used += size;
    }
    pager.page = Math.max(0, Math.min(pager.page, pages.length - 1));
    rows.forEach(row => { row.hidden = !pages[pager.page].includes(row); });
    controls.hidden = pages.length === 1;
    previous.disabled = pager.page === 0;
    next.disabled = pager.page === pages.length - 1;
    const pageLabel = `${pager.page + 1} / ${pages.length}`;
    if (label.textContent !== pageLabel) label.textContent = pageLabel;
    const size = window.getBoundingClientRect().height;
    const scale = Math.min(1, Math.max(1, height - 24) / size);
    dialog.style.zoom = String(scale);
    // Center in the visual viewport, including when the keyboard pans the page.
    dialog.style.top = `${(top + (height - size * scale) / 2) / scale}px`;
  }
  function update() {
    const viewport = window.visualViewport;
    const height = viewport?.height ?? window.innerHeight;
    const width = viewport?.width ?? window.innerWidth;
    const top = viewport?.offsetTop ?? 0;
    root.style.setProperty('--viewport-height', `${height}px`);
    root.style.setProperty('--viewport-width', `${width}px`);
    root.style.setProperty('--viewport-top', `${top}px`);
    root.style.setProperty('--viewport-left', `${viewport?.offsetLeft ?? 0}px`);
    root.style.setProperty('--vh', `${height / 100}px`);
    root.dataset.orientation = width > height ? 'landscape' : 'portrait';
    if (fitPending) {
      fitPending = false;
      main.style.zoom = '1';
      const shell = main.parentElement;
      const style = getComputedStyle(shell);
      const available = Math.max(1, shell.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom));
      main.style.height = `${available}px`;
      for (let attempt = 0; attempt < 6; attempt++) {
        const zoom = parseFloat(main.style.zoom) || 1;
        const size = Math.max(main.offsetHeight, main.scrollHeight) * zoom;
        if (size <= available + .5) break;
        const scale = zoom * available / size;
        main.style.zoom = String(scale);
        main.style.height = `${available / scale}px`;
      }
    }
    pagers.forEach(pager => paginate(pager, height, top));
  }
  // Only actual visibility changes outside dialogs can change the screen layout.
  // Combat rewrites text and assigns the same hidden values every turn.
  new MutationObserver(records => {
    if (records.some(record =>
      !record.target.closest('.modal, .menu-panel') &&
      (record.oldValue !== null) !== record.target.hasAttribute('hidden')
    )) schedule();
  }).observe(main, {
    subtree: true, attributes: true, attributeOldValue: true,
    attributeFilter: ['hidden'],
  });
  window.addEventListener('resize', () => schedule());
  window.addEventListener('orientationchange', () => schedule());
  window.visualViewport?.addEventListener('resize', () => schedule());
  window.visualViewport?.addEventListener('scroll', () => schedule(false));
  document.fonts?.ready.then(() => schedule());
  schedule();
})();
