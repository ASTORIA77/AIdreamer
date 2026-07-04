/* ============================================
   AI 纵横 70 年 —— 路由与渲染
   ============================================ */

(function () {
  'use strict';

  const app = document.getElementById('app');
  const backToTop = document.getElementById('back-to-top');

  // AI 纵横 70 年主题专用：在顶部 header 里动态显示/隐藏"返回时间轴"
  function updateHeaderNav(showBackToTimeline) {
    const el = document.getElementById('header-back-timeline');
    if (el) el.style.display = showBackToTimeline ? 'inline-flex' : 'none';
  }

  if (window.marked) {
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      mangle: false,
      langPrefix: 'hljs language-'
    });
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  async function fetchHistoryMarkdown(path) {
    const fname = path.split('/').pop().replace(/\.md$/, '');
    if (window.HISTORY_CONTENT && window.HISTORY_CONTENT[fname]) {
      return window.HISTORY_CONTENT[fname];
    }
    let res;
    try { res = await fetch(path); }
    catch (e) { throw new Error('内容未内联且无法 fetch。请运行 python build_history.py'); }
    if (!res.ok) throw new Error('文件加载失败 HTTP ' + res.status);
    return await res.text();
  }

  function renderMarkdown(mdText) {
    if (!window.marked) {
      const wrap = document.createElement('div');
      wrap.className = 'markdown-body';
      wrap.innerHTML = '<pre style="white-space:pre-wrap;"></pre>';
      wrap.querySelector('pre').textContent = mdText;
      return wrap;
    }
    const svgBlocks = [];
    const protectedText = mdText.replace(/<div class="svg-diagram"[\s\S]*?<\/div>/g, (m) => {
      const i = svgBlocks.length;
      svgBlocks.push(m);
      return '\n\nSVG_PH_' + i + '\n\n';
    });
    let html;
    try { html = marked.parse(protectedText); }
    catch (e) {
      html = '<p style="color:#c00;">解析出错</p><pre style="white-space:pre-wrap;"></pre>';
      const w = document.createElement('div');
      w.className = 'markdown-body';
      w.innerHTML = html;
      w.querySelector('pre').textContent = mdText;
      return w;
    }
    svgBlocks.forEach((b, i) => {
      html = html.replace(new RegExp('<p>SVG_PH_' + i + '</p>','g'), b);
      html = html.replace(new RegExp('SVG_PH_' + i,'g'), b);
    });
    const wrap = document.createElement('div');
    wrap.className = 'markdown-body';
    wrap.innerHTML = html;
    if (window.hljs) {
      wrap.querySelectorAll('pre code').forEach(b => { try { hljs.highlightElement(b); } catch(e){} });
    }
    applyFoldableSections(wrap);
    return wrap;
  }

  // ============ 章节折叠（h2 变成可折叠） ============

  function applyFoldableSections(container) {
    const children = Array.from(container.children);
    const h2Indices = [];
    children.forEach((el, i) => {
      if (el.tagName === 'H2') h2Indices.push(i);
    });
    if (h2Indices.length === 0) return;

    // 第一个 h2 之前的内容（h1 标题、导语等）保留不动
    const firstH2Idx = h2Indices[0];
    const beforeSections = children.slice(0, firstH2Idx);

    // 收集每个 h2 的内容范围
    const sections = h2Indices.map((startIdx, idx) => {
      const endIdx = idx < h2Indices.length - 1 ? h2Indices[idx + 1] : children.length;
      return {
        h2: children[startIdx],
        content: children.slice(startIdx + 1, endIdx)
      };
    });

    // 清空容器，重新构建
    container.innerHTML = '';
    beforeSections.forEach(el => container.appendChild(el));

    sections.forEach((sec) => {
      const details = document.createElement('details');
      details.className = 'scene-fold';
      // 全部默认折叠，打开页面像 Obsidian 大纲
      details.open = false;

      const summary = document.createElement('summary');
      summary.className = 'scene-summary';
      summary.innerHTML = sec.h2.innerHTML;
      details.appendChild(summary);

      const body = document.createElement('div');
      body.className = 'scene-body';
      sec.content.forEach(el => body.appendChild(el));
      details.appendChild(body);

      container.appendChild(details);
    });
  }

  // ============ 时间轴首页 ============

  // ============ 时间轴首页 —— 横向轴线 + 卡片上下交替 ============

  function renderTimeline() {
    document.title = 'AI 纵横 70 年';
    updateHeaderNav(false);

    app.innerHTML = `
      <div class="timeline-page fade-up">
        <section class="timeline-hero">
          <span class="timeline-hero-eyebrow">A HISTORY OF AI</span>
          <h1 class="timeline-hero-title">AI 纵横 70 年</h1>
          <p class="timeline-hero-subtitle">从 1950 年图灵测试到今天的 Agent 时代，七十多年里 AI 从一个思想实验变成了改变世界的技术。<br/>学一门技术要有历史观——知道从哪来，才能知道往哪去。</p>
          <div class="timeline-hero-divider"></div>
        </section>

        <div class="timeline-horizontal">
          <div class="timeline-axis"></div>
          <div class="timeline-nodes">
            ${HISTORY_EVENTS.map((e, i) => {
              const hasContent = e.file && e.file.length > 0;
              const pos = i % 2 === 0 ? 'below' : 'above';
              return `
                <div class="timeline-node node-${pos}${hasContent ? '' : ' is-placeholder'}" data-slug="${escapeHtml(e.slug)}">
                  <div class="timeline-dot"></div>
                  <div class="timeline-card">
                    <div class="timeline-card-year">${escapeHtml(e.yearRange || e.year)}</div>
                    <div class="timeline-card-act">${escapeHtml(e.act || '')}</div>
                    <h3 class="timeline-card-title">${escapeHtml(e.title)}</h3>
                    <p class="timeline-card-subtitle">${escapeHtml(e.subtitle || '')}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.timeline-node').forEach(item => {
      item.addEventListener('click', () => {
        location.hash = '#/event/' + item.dataset.slug;
      });
    });
    scrollTop();
  }

  // ============ 事件详情 ============

  async function renderEvent(slug) {
    const event = HISTORY_EVENTS.find(e => e.slug === slug);
    if (!event) { renderTimeline(); return; }
    document.title = event.title + ' · AI 纵横 70 年';
    updateHeaderNav(true);

    // 占位幕：file 为空时显示筹备中
    if (!event.file || event.file.length === 0) {
      app.innerHTML = `
        <div class="history-article-wrap fade-up">
                    <header class="history-article-header">
            <div class="history-year-big">${escapeHtml(event.yearRange || event.year)}</div>
            <div class="history-act-tag">${escapeHtml(event.act || '')}</div>
            <h1 class="history-article-title">${escapeHtml(event.title)}</h1>
            <p class="history-article-subtitle">${escapeHtml(event.subtitle || '')}</p>
            <div class="tag-list" style="margin-top:14px;">
              ${(event.tags||[]).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
            </div>
          </header>
          <div class="empty-state" style="margin-top:24px;">
            <div class="empty-state-title">这一幕还在排练中</div>
            <div class="empty-state-text">${escapeHtml(event.excerpt)}</div>
          </div>
        </div>
      `;
      scrollTop();
      return;
    }

    app.innerHTML = `
      <div class="history-article-wrap">
                <div class="loading" style="text-align:center;padding:80px 20px;color:var(--text-mute);">
          <span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>
        </div>
      </div>
    `;
    scrollTop();

    try {
      const md = await fetchHistoryMarkdown(event.file);
      const content = renderMarkdown(md);
      const idx = HISTORY_EVENTS.indexOf(event);
      const prev = idx > 0 ? HISTORY_EVENTS[idx - 1] : null;
      const next = idx < HISTORY_EVENTS.length - 1 ? HISTORY_EVENTS[idx + 1] : null;

      app.innerHTML = `
        <div class="history-article-wrap fade-up">
                    <header class="history-article-header">
            <div class="history-year-big">${escapeHtml(event.yearRange || event.year)}</div>
            <div class="history-act-tag">${escapeHtml(event.act || '')}</div>
            <h1 class="history-article-title">${escapeHtml(event.title)}</h1>
            <p class="history-article-subtitle">${escapeHtml(event.subtitle || '')}</p>
            <div class="tag-list" style="margin-top:14px;">
              ${(event.tags||[]).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
              <span class="read-time" style="margin-left:8px;">${escapeHtml(event.readTime||'')}</span>
            </div>
          </header>
          <div id="event-content"></div>
          <nav class="article-nav">
            ${prev ? `<a class="nav-item prev" href="#/event/${escapeHtml(prev.slug)}"><div class="nav-label">← ${escapeHtml(prev.act || prev.year)}</div><div class="nav-title">${escapeHtml(prev.title)}</div></a>` : '<div style="flex:1;"></div>'}
            ${next ? `<a class="nav-item next" href="#/event/${escapeHtml(next.slug)}"><div class="nav-label">${escapeHtml(next.act || next.year)} →</div><div class="nav-title">${escapeHtml(next.title)}</div></a>` : '<div style="flex:1;"></div>'}
          </nav>
        </div>
      `;
      document.getElementById('event-content').appendChild(content);
      scrollTop();
    } catch (err) {
      app.innerHTML = `
        <div class="history-article-wrap">
                    <div class="empty-state">
            <div class="empty-state-title">内容加载失败</div>
            <div class="empty-state-text">${escapeHtml(err.message)}</div>
          </div>
        </div>
      `;
    }
  }

  // ============ 路由 ============

  function router() {
    const hash = location.hash.slice(1) || '/';
    if (hash === '/' || hash === '') {
      renderTimeline();
    } else if (hash.startsWith('/event/')) {
      renderEvent(decodeURIComponent(hash.slice(7)));
    } else {
      renderTimeline();
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });
  backToTop.addEventListener('click', scrollTop);

  window.addEventListener('hashchange', router);
  router();
})();
