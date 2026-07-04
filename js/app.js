/* ============================================
   主应用 —— 路由 + 渲染
   ============================================ */

(function () {
  'use strict';

  const app = document.getElementById('app');
  const backToTop = document.getElementById('back-to-top');

  // 配置 marked（v4.3.0 稳定版）
  if (window.marked) {
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      mangle: false,
      langPrefix: 'hljs language-'
    });
  }

  // ============ 工具函数 ============

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 标签 → CSS 类映射
  function tagClass(tag) {
    const map = {
      'AI Agent': 'blue',
      '学习方法论': 'camel',
      '技术体感': 'camel',
      '学习路径': 'camel',
      '信息自动化': 'camel',
      '自动化': 'camel',
      '定时任务': 'camel',
      '概念辨析': 'purple',
      '工具推荐': 'green',
      'Prompt工程': 'purple',
      '提示词工程': 'purple',
      'Skill': 'purple',
      'API': 'purple',
      '记忆系统': 'purple',
      '安全意识': 'purple',
      '沙盒隔离': 'purple',
      '默认权限': 'purple',
      '数据隐私': 'purple',
      'Context': 'purple',
      'MCP': 'purple',
      'Claude Code': 'purple',
      '知识管理': 'camel',
      'RAG': 'purple',
      'CLI': 'purple',
      'GUI': 'camel',
      'A2A': 'purple'
    };
    return map[tag] || '';
  }

  // 渲染标签列表 HTML
  function renderTags(tags, clickable) {
    if (!tags || !tags.length) return '';
    return tags.map(t =>
      `<span class="tag ${tagClass(t)}" ${clickable ? `data-tag="${escapeHtml(t)}"` : ''}>${escapeHtml(t)}</span>`
    ).join('');
  }

  // 滚动到顶部
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  // 设置导航高亮
  function setActiveNav(name) {
    document.querySelectorAll('.site-nav a').forEach(a => {
      a.classList.toggle('active', a.dataset.nav === name);
    });
  }

  // 设置标题
  function setTitle(text) {
    document.title = text ? `${text} · ${SITE_INFO.title}` : SITE_INFO.title;
  }

  // 获取 markdown 内容
  // 优先从内联的 window.POST_CONTENT 读取（build.py 生成），
  // 没有的话再 fetch 外部文件（需要 http:// 服务器）
  async function fetchMarkdown(path) {
    // 从路径提取 key：posts/01-xxx.md -> "01-xxx"，pages/about.md -> "page:about"
    const fname = path.split('/').pop().replace(/\.md$/, '');
    let key;
    if (path.startsWith('pages/')) {
      key = 'page:' + fname;
    } else {
      key = fname;
    }

    // 优先用内联内容
    if (window.POST_CONTENT && window.POST_CONTENT[key]) {
      return window.POST_CONTENT[key];
    }

    // 回退到 fetch（需要本地服务器）
    let res;
    try {
      res = await fetch(path);
    } catch (e) {
      throw new Error('文章内容未内联且无法 fetch。请运行 python build.py 重新打包，或用本地服务器打开。');
    }
    if (!res.ok) {
      throw new Error('文件加载失败 HTTP ' + res.status + '：' + path);
    }
    return await res.text();
  }

  // 设置"返回首页"按钮显隐（首页隐藏，文章/标签/关于页显示）
  function updateHomeBack(show) {
    const el = document.getElementById('header-back-home');
    if (el) el.style.display = show ? 'inline-flex' : 'none';
  }

  // 渲染 markdown 并高亮代码（带兜底）
  // 关键：先抽取出 SVG/HTML 块用占位符替换，让 marked 只处理纯 markdown，
  // 再把占位符替换回去——避免 marked 把 SVG 内的缩进内容误判为代码块
  function renderMarkdown(mdText) {
    if (!window.marked) {
      const wrap = document.createElement('div');
      wrap.className = 'markdown-body';
      wrap.innerHTML = '<p style="color:#c00;">⚠ Markdown 渲染库未加载成功（检查网络），以下是原文：</p><pre style="white-space:pre-wrap;"></pre>';
      wrap.querySelector('pre').textContent = mdText;
      return wrap;
    }

    // 1. 抽取所有 <div class="svg-diagram">...</div> 块
    const svgBlocks = [];
    const placeholderRe = /<div class="svg-diagram"[\s\S]*?<\/div>/g;
    const protectedText = mdText.replace(placeholderRe, (match) => {
      const idx = svgBlocks.length;
      svgBlocks.push(match);
      return `\n\nSVG_PLACEHOLDER_${idx}\n\n`;
    });

    let html;
    try {
      html = marked.parse(protectedText);
    } catch (e) {
      html = '<p style="color:#c00;">⚠ Markdown 解析出错：' + escapeHtml(e.message) + '</p><pre style="white-space:pre-wrap;"></pre>';
      const wrap = document.createElement('div');
      wrap.className = 'markdown-body';
      wrap.innerHTML = html;
      wrap.querySelector('pre').textContent = mdText;
      return wrap;
    }

    // 2. 把占位符替换回真正的 SVG 块
    svgBlocks.forEach((block, i) => {
      html = html.replace(new RegExp('<p>SVG_PLACEHOLDER_' + i + '</p>', 'g'), block);
      // 也处理没被包在 <p> 里的情况
      html = html.replace(new RegExp('SVG_PLACEHOLDER_' + i, 'g'), block);
    });

    const wrap = document.createElement('div');
    wrap.className = 'markdown-body';
    wrap.innerHTML = html;
    // 代码高亮
    if (window.hljs) {
      wrap.querySelectorAll('pre code').forEach(block => {
        try { hljs.highlightElement(block); } catch (e) {}
      });
    }
    return wrap;
  }

  // ============ 页面：首页 ============

  // 视图模式：'detail' | 'list' | 'grid'
  let homeViewMode = 'grid';

  function renderHome() {
    setActiveNav('home');
    setTitle('');
    updateHomeBack(false);

    const sorted = [...ARTICLES].sort((a, b) => new Date(a.date) - new Date(b.date));

    app.innerHTML = `
      <section class="hero fade-up">
        <div class="hero-bg-text" aria-hidden="true">用 AI 学 AI</div>
        <span class="hero-eyebrow">${escapeHtml(SITE_INFO.eyebrow || '')}</span>
        <h1 class="hero-title">${escapeHtml(SITE_INFO.title)}</h1>
        <p class="hero-subtitle">${escapeHtml(SITE_INFO.subtitle)}</p>
        <div class="hero-divider"></div>
      </section>

      <div class="section-title-row">
        <h2 class="section-title">全部文章</h2>
        <div class="section-title-right">
          <span class="section-meta">共 ${ARTICLES.length} 篇</span>
          <div class="view-switcher" id="view-switcher">
            <button class="view-btn ${homeViewMode === 'grid' ? 'active' : ''}" data-view="grid" title="图标视图">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            </button>
            <button class="view-btn ${homeViewMode === 'list' ? 'active' : ''}" data-view="list" title="列表视图">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </button>
            <button class="view-btn ${homeViewMode === 'detail' ? 'active' : ''}" data-view="detail" title="详细视图">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="14" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div id="home-posts" class="post-list view-${homeViewMode}"></div>
    `;

    // 渲染文章列表
    renderHomePosts(sorted);

    // 绑定视图切换
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        homeViewMode = btn.dataset.view;
        document.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b === btn));
        const container = document.getElementById('home-posts');
        container.className = 'post-list view-' + homeViewMode;
        renderHomePosts(sorted);
      });
    });

    bindCardClicks();
    bindTagClicks();
    scrollTop();
  }

  // 根据当前视图模式渲染文章
  function renderHomePosts(sorted) {
    const container = document.getElementById('home-posts');
    if (!container) return;

    if (homeViewMode === 'grid') {
      container.innerHTML = sorted.map((a, idx) => `
        <article class="post-card post-grid-card fade-up" data-slug="${escapeHtml(a.slug)}">
          <div class="grid-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="8" y1="13" x2="16" y2="13"/>
              <line x1="8" y1="17" x2="13" y2="17"/>
            </svg>
          </div>
          <div class="grid-card-body">
            <div class="grid-card-num">No.${String(idx + 1).padStart(2, '0')}</div>
            <h3 class="grid-card-title">${escapeHtml(a.title)}</h3>
            <div class="grid-card-tags">${renderTags(a.tags, true)}</div>
          </div>
          <div class="grid-card-meta">
            <span>${escapeHtml(a.date)}</span>
            <span>${escapeHtml(a.readTime || '')}</span>
          </div>
        </article>
      `).join('') || '<div class="empty-state"><div class="empty-state-title">还没有文章</div></div>';
    } else if (homeViewMode === 'list') {
      container.innerHTML = sorted.map((a, idx) => `
        <article class="post-card post-list-row fade-up" data-slug="${escapeHtml(a.slug)}">
          <span class="list-row-num">No.${String(idx + 1).padStart(2, '0')}</span>
          <span class="list-row-title">${escapeHtml(a.title)}</span>
          <span class="list-row-tags">${renderTags(a.tags, true)}</span>
          <span class="list-row-date">${escapeHtml(a.date)}</span>
          <span class="list-row-time">${escapeHtml(a.readTime || '')}</span>
        </article>
      `).join('') || '<div class="empty-state"><div class="empty-state-title">还没有文章</div></div>';
    } else {
      container.innerHTML = sorted.map((a, idx) => `
        <article class="post-card fade-up" data-slug="${escapeHtml(a.slug)}">
          <div class="post-card-meta">
            <span class="post-card-number">No.${String(idx + 1).padStart(2, '0')}</span>
            <span class="post-card-dot"></span>
            <span class="post-card-date">${escapeHtml(a.date)}</span>
            <span class="post-card-dot"></span>
            <span class="read-time">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${escapeHtml(a.readTime || '')}
            </span>
          </div>
          <h2 class="post-card-title">${escapeHtml(a.title)}</h2>
          <p class="post-card-excerpt">${escapeHtml(a.excerpt)}</p>
          <div class="post-card-footer">
            <div class="tag-list">${renderTags(a.tags, true)}</div>
          </div>
        </article>
      `).join('') || '<div class="empty-state"><div class="empty-state-title">还没有文章</div></div>';
    }

    bindCardClicks();
    bindTagClicks();
  }

  // ============ 页面：文章详情 ============

  async function renderArticle(slug) {
    setActiveNav('');
    updateHomeBack(true);
    const article = ARTICLES.find(a => a.slug === slug);
    if (!article) {
      renderNotFound('文章不存在');
      return;
    }
    setTitle(article.title);

    // 先渲染骨架（loading）
    app.innerHTML = `
      <div class="article-wrap">
        <div class="loading"><span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span></div>
      </div>
    `;
    scrollTop();

    try {
      const mdText = await fetchMarkdown(article.file);
      const content = renderMarkdown(mdText);

      // 找上下篇（按时间排序）
      const sorted = [...ARTICLES].sort((a, b) => new Date(a.date) - new Date(b.date));
      const idx = sorted.findIndex(a => a.slug === slug);
      const prev = idx > 0 ? sorted[idx - 1] : null;
      const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

      app.innerHTML = `
        <div class="article-wrap fade-up">
          <header class="article-header">
            <div class="article-meta">
              <span class="post-card-number">No.${String(ARTICLES.indexOf(article) + 1).padStart(2, '0')}</span>
              <span class="post-card-dot"></span>
              <span>${escapeHtml(article.date)}</span>
              <span class="post-card-dot"></span>
              <span class="read-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${escapeHtml(article.readTime || '')}
              </span>
            </div>
            <h1 class="article-title">${escapeHtml(article.title)}</h1>
            ${article.subtitle ? `<p class="article-subtitle">${escapeHtml(article.subtitle)}</p>` : ''}
            <div class="tag-list" style="margin-top:18px;">${renderTags(article.tags, true)}</div>
          </header>

          <div id="article-content"></div>

          <nav class="article-nav">
            ${prev ? `<a class="nav-item prev" href="#/post/${escapeHtml(prev.slug)}"><div class="nav-label">← 上一篇</div><div class="nav-title">${escapeHtml(prev.title)}</div></a>` : '<div class="nav-item prev" style="opacity:0.4;cursor:default;"><div class="nav-label">上一篇</div><div class="nav-title">已经是第一篇了</div></div>'}
            ${next ? `<a class="nav-item next" href="#/post/${escapeHtml(next.slug)}"><div class="nav-label">下一篇 →</div><div class="nav-title">${escapeHtml(next.title)}</div></a>` : '<div class="nav-item next" style="opacity:0.4;cursor:default;"><div class="nav-label">下一篇</div><div class="nav-title">已经是最新一篇了</div></div>'}
          </nav>
        </div>
      `;

      document.getElementById('article-content').appendChild(content);
      bindTagClicks();
      scrollTop();
    } catch (err) {
      app.innerHTML = `
        <div class="article-wrap">
          <a href="#/" class="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            返回首页
          </a>
          <div class="empty-state">
            <div class="empty-state-title">文章加载失败</div>
            <div class="empty-state-text">可能原因：markdown 文件路径不对，或当前通过 file:// 协议打开（需用本地服务器）。请检查 js/articles.js 中的 file 字段。</div>
          </div>
        </div>
      `;
      console.error(err);
    }
  }

  // ============ 页面：标签（知识图谱） ============

  // 力导向图谱状态
  let graphState = null;

  function buildGraphData() {
    // 统计每个标签的文章数
    const tagCount = {};
    ARTICLES.forEach(a => {
      (a.tags || []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; });
    });
    const allTags = Object.keys(tagCount);

    // 构建边：同一篇文章里的标签两两相连
    const edgeSet = new Set();
    const edges = [];
    ARTICLES.forEach(a => {
      const tags = a.tags || [];
      for (let i = 0; i < tags.length; i++) {
        for (let j = i + 1; j < tags.length; j++) {
          const key = [tags[i], tags[j]].sort().join('||');
          if (!edgeSet.has(key)) {
            edgeSet.add(key);
            edges.push({ source: tags[i], target: tags[j] });
          }
        }
      }
    });

    // 节点：圆形布局初始位置
    const nodes = allTags.map((t, i) => {
      const angle = (i / allTags.length) * Math.PI * 2;
      return {
        label: t,
        count: tagCount[t],
        x: 240 + Math.cos(angle) * 120,
        y: 200 + Math.sin(angle) * 120,
        vx: 0,
        vy: 0
      };
    });

    return { nodes, edges };
  }

  // 标签颜色映射 —— 按大类分色，细标签跟父大类同色
  //   雾蓝 #6b8cae — AI Agent（中心）+ 大模型选型
  //   暖驼 #c9a876 — 学习方法论 + 用 AI 学 AI + 多端协同
  //   淡紫 #a89bc4 — 概念辨析 + Agent 定义 + Harness Engineering
  //   淡绿 #8fb89c — 工具推荐 + 国产 Agent + WorkBuddy
  // 新增标签：先判断它属于哪个大类，用同色；不要为单个标签单独配色。
  function graphNodeColor(label) {
    const map = {
      'AI Agent': '#6b8cae',
      '大模型选型': '#6b8cae',
      '学习方法论': '#c9a876',
      '用 AI 学 AI': '#c9a876',
      '多端协同': '#c9a876',
      '技术体感': '#c9a876',
      '学习路径': '#c9a876',
      '信息自动化': '#c9a876',
      '自动化': '#c9a876',
      '定时任务': '#c9a876',
      '概念辨析': '#a89bc4',
      'Agent 定义': '#a89bc4',
      'Harness Engineering': '#a89bc4',
      'API': '#a89bc4',
      'Skill': '#a89bc4',
      '记忆系统': '#a89bc4',
      '安全意识': '#a89bc4',
      '沙盒隔离': '#a89bc4',
      '默认权限': '#a89bc4',
      '数据隐私': '#a89bc4',
      'Context': '#a89bc4',
      'MCP': '#a89bc4',
      'Claude Code': '#a89bc4',
      '知识管理': '#c9a876',
      'RAG': '#a89bc4',
      'CLI': '#a89bc4',
      'GUI': '#c9a876',
      'A2A': '#a89bc4',
      '工具推荐': '#8fb89c',
      '提示词工程': '#a89bc4',
      '国产 Agent': '#8fb89c',
      'WorkBuddy': '#8fb89c'
    };
    return map[label] || '#6b8cae';
  }

  function renderTagsPage(activeTag) {
    setActiveNav('tags');
    updateHomeBack(true);
    setTitle('知识图谱');

    const data = buildGraphData();

    let listHtml = '';
    if (activeTag) {
      const filtered = ARTICLES.filter(a => (a.tags || []).includes(activeTag))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
      const cards = filtered.map(a => `
        <article class="post-card fade-up" data-slug="${escapeHtml(a.slug)}">
          <div class="post-card-meta">
            <span class="post-card-date">${escapeHtml(a.date)}</span>
            <span class="post-card-dot"></span>
            <span class="read-time">${escapeHtml(a.readTime || '')}</span>
          </div>
          <h2 class="post-card-title">${escapeHtml(a.title)}</h2>
          <p class="post-card-excerpt">${escapeHtml(a.excerpt)}</p>
          <div class="post-card-footer"><div class="tag-list">${renderTags(a.tags, true)}</div></div>
        </article>
      `).join('');
      listHtml = `
        <div class="tag-back-row"><a href="#/tags" class="tag-back-link">← 全部标签</a></div>
        <div class="tag-section-title">标签「${escapeHtml(activeTag)}」下的文章 <small>共 ${filtered.length} 篇</small></div>
        <div class="post-list">${cards || '<div class="empty-state"><div class="empty-state-text">该标签下暂无文章</div></div>'}</div>
      `;
    } else {
      listHtml = `
        <div class="graph-hint">
          <span class="graph-hint-item">🖱️ 拖拽节点</span>
          <span class="graph-hint-item">🔍 滚轮缩放</span>
          <span class="graph-hint-item">👆 点击标签筛选文章</span>
        </div>
      `;
    }

    app.innerHTML = `
      <div class="tags-page fade-up">
        <div class="section-title-row">
          <h2 class="section-title">知识图谱</h2>
          <span class="section-meta">${data.nodes.length} 个标签 · ${data.edges.length} 条关联</span>
        </div>
        <div class="graph-container" id="graph-container">
          <svg id="graph-svg" viewBox="0 0 480 400" preserveAspectRatio="xMidYMid meet">
            <g id="graph-viewport">
              <g id="graph-edges"></g>
              <g id="graph-nodes"></g>
            </g>
          </svg>
          <div class="graph-controls">
            <button class="graph-btn" id="graph-reset" title="重置布局">⟳</button>
            <button class="graph-btn" id="graph-zoom-in" title="放大">+</button>
            <button class="graph-btn" id="graph-zoom-out" title="缩小">−</button>
          </div>
        </div>
        ${activeTag ? '' : '<div class="tag-cloud">' + data.nodes.map(n => `
          <span class="tag-cloud-item ${activeTag === n.label ? 'active' : ''}" data-tag="${escapeHtml(n.label)}">
            ${escapeHtml(n.label)} <span class="tag-count">${n.count}</span>
          </span>
        `).join('') + '</div>'}
        ${listHtml}
      </div>
    `;

    // 初始化图谱
    initGraph(data, activeTag);

    // 绑定标签云点击
    document.querySelectorAll('.tag-cloud-item').forEach(el => {
      el.addEventListener('click', () => {
        const t = el.dataset.tag;
        location.hash = t === activeTag ? '#/tags' : `#/tags/${encodeURIComponent(t)}`;
      });
    });
    bindTagClicks();
    bindCardClicks();
    scrollTop();
  }

  // ============ 力导向图谱引擎 ============

  function initGraph(data, activeTag) {
    const svg = document.getElementById('graph-svg');
    const viewport = document.getElementById('graph-viewport');
    const edgesG = document.getElementById('graph-edges');
    const nodesG = document.getElementById('graph-nodes');
    const container = document.getElementById('graph-container');

    if (!svg || !viewport) return;

    const nodes = data.nodes.map(n => ({ ...n }));
    const edges = data.edges.map(e => ({
      source: nodes.find(n => n.label === e.source),
      target: nodes.find(n => n.label === e.target)
    })).filter(e => e.source && e.target);

    // 视口变换状态
    let scale = 1;
    let panX = 0, panY = 0;
    let isDragging = false;
    let dragNode = null;
    let lastMouse = { x: 0, y: 0 };

    function svgPoint(clientX, clientY) {
      const rect = svg.getBoundingClientRect();
      const vbX = ((clientX - rect.left) / rect.width) * 480;
      const vbY = ((clientY - rect.top) / rect.height) * 400;
      return {
        x: (vbX - panX) / scale,
        y: (vbY - panY) / scale
      };
    }

    function updateViewport() {
      viewport.setAttribute('transform', `translate(${panX} ${panY}) scale(${scale})`);
    }

    // 力导向模拟
    function simulate() {
      const repulsion = 3200;   // 斥力强度
      const springLen = 95;     // 弹簧自然长度
      const springK = 0.04;     // 弹簧系数
      const centerK = 0.008;    // 中心引力
      const damping = 0.82;     // 阻尼
      const cx = 240, cy = 200; // 中心

      // 节点间斥力
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 1) dist = 1;
          const force = repulsion / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          nodes[i].vx += fx;
          nodes[i].vy += fy;
          nodes[j].vx -= fx;
          nodes[j].vy -= fy;
        }
      }

      // 边的弹簧力
      edges.forEach(e => {
        const dx = e.target.x - e.source.x;
        const dy = e.target.y - e.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - springLen) * springK;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        e.source.vx += fx;
        e.source.vy += fy;
        e.target.vx -= fx;
        e.target.vy -= fy;
      });

      // 中心引力 + 更新位置
      nodes.forEach(n => {
        if (n === dragNode) { n.vx = 0; n.vy = 0; return; }
        n.vx += (cx - n.x) * centerK;
        n.vy += (cy - n.y) * centerK;
        n.vx *= damping;
        n.vy *= damping;
        n.x += n.vx;
        n.y += n.vy;
        // 边界约束
        n.x = Math.max(30, Math.min(450, n.x));
        n.y = Math.max(30, Math.min(370, n.y));
      });
    }

    // 渲染
    function render() {
      // 边
      edgesG.innerHTML = edges.map(e => {
        const isHL = activeTag && (e.source.label === activeTag || e.target.label === activeTag);
        return `<line x1="${e.source.x.toFixed(1)}" y1="${e.source.y.toFixed(1)}" x2="${e.target.x.toFixed(1)}" y2="${e.target.y.toFixed(1)}" stroke="${isHL ? '#c9a876' : '#b8b2a8'}" stroke-width="${isHL ? 1.8 : 1}" opacity="${isHL ? 0.55 : 0.3}"/>`;
      }).join('');

      // 节点 —— 用药丸（胶囊）形状替代圆圈，宽度自适应文字长度
      nodesG.innerHTML = nodes.map(n => {
        const color = graphNodeColor(n.label);
        const isActive = activeTag === n.label;
        const isRelated = activeTag && edges.some(e =>
          (e.source === n || e.target === n) &&
          (e.source.label === activeTag || e.target.label === activeTag)
        );
        const dim = activeTag && !isActive && !isRelated ? 0.3 : 1;

        // 药丸尺寸：根据标签文字长度自适应
        const labelText = n.label;
        const charWidth = 11; // 每个字符约11px
        const padding = 16;
        const pillW = labelText.length * charWidth + padding * 2;
        const pillH = 32;
        const pillX = n.x - pillW / 2;
        const pillY = n.y - pillH / 2;
        const pillR = pillH / 2;

        return `
          <g class="graph-node" data-label="${escapeHtml(n.label)}" opacity="${dim}" style="cursor:pointer;">
            <rect x="${pillX.toFixed(1)}" y="${pillY.toFixed(1)}" width="${pillW.toFixed(1)}" height="${pillH}" rx="${pillR}" ry="${pillR}"
                  fill="${isActive ? color : '#fdfbf7'}"
                  fill-opacity="${isActive ? 0.92 : 1}"
                  stroke="${color}"
                  stroke-width="${isActive ? 2.2 : 1.5}"/>
            <text x="${n.x.toFixed(1)}" y="${(n.y + 4.5).toFixed(1)}" text-anchor="middle"
                  font-size="13" font-weight="600"
                  fill="${isActive ? '#fff' : color}"
                  font-family="'Noto Sans SC',sans-serif">${escapeHtml(labelText)}</text>
            <text x="${n.x.toFixed(1)}" y="${(n.y + pillH / 2 + 14).toFixed(1)}" text-anchor="middle"
                  font-size="10.5" fill="#9a948a"
                  font-family="'Noto Sans SC',sans-serif">${n.count} 篇</text>
          </g>
        `;
      }).join('');

      // 绑定节点事件
      nodesG.querySelectorAll('.graph-node').forEach(g => {
        let didDrag = false;
        g.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          didDrag = false;
          const label = g.dataset.label;
          dragNode = nodes.find(n => n.label === label);
          isDragging = true;
          const pt = svgPoint(e.clientX, e.clientY);
          lastMouse = pt;
        });
        g.addEventListener('mousemove', () => {
          if (isDragging && dragNode) didDrag = true;
        });
        g.addEventListener('click', (e) => {
          e.stopPropagation();
          if (didDrag) { didDrag = false; return; }
          const label = g.dataset.label;
          location.hash = label === activeTag ? '#/tags' : `#/tags/${encodeURIComponent(label)}`;
        });
      });
    }

    // 动画循环
    let frame = 0;
    function tick() {
      simulate();
      render();
      frame++;
      if (frame < 300 || isDragging) {
        graphState = requestAnimationFrame(tick);
      } else {
        // 稳定后降低频率
        graphState = requestAnimationFrame(slowTick);
      }
    }
    function slowTick() {
      simulate();
      render();
      graphState = requestAnimationFrame(slowTick);
    }

    // 清除之前的动画
    if (graphState) cancelAnimationFrame(graphState);
    tick();

    // 画布拖拽（平移）
    svg.addEventListener('mousedown', (e) => {
      if (e.target === svg || e.target.tagName === 'svg') {
        isDragging = true;
        dragNode = null;
        lastMouse = { x: e.clientX, y: e.clientY };
      }
    });

    svg.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      if (dragNode) {
        const pt = svgPoint(e.clientX, e.clientY);
        dragNode.x = pt.x;
        dragNode.y = pt.y;
        dragNode.vx = 0;
        dragNode.vy = 0;
      } else {
        panX += (e.clientX - lastMouse.x) * (480 / svg.getBoundingClientRect().width);
        panY += (e.clientY - lastMouse.y) * (400 / svg.getBoundingClientRect().height);
        lastMouse = { x: e.clientX, y: e.clientY };
        updateViewport();
      }
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      setTimeout(() => { dragNode = null; }, 50);
    });

    // 滚轮缩放
    svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(0.4, Math.min(3, scale * delta));
      const rect = svg.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 480;
      const my = ((e.clientY - rect.top) / rect.height) * 400;
      panX = mx - (mx - panX) * (newScale / scale);
      panY = my - (my - panY) * (newScale / scale);
      scale = newScale;
      updateViewport();
    }, { passive: false });

    // 控制按钮
    const resetBtn = document.getElementById('graph-reset');
    const zoomIn = document.getElementById('graph-zoom-in');
    const zoomOut = document.getElementById('graph-zoom-out');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      scale = 1; panX = 0; panY = 0;
      updateViewport();
      // 重新随机位置
      nodes.forEach((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2;
        n.x = 240 + Math.cos(angle) * 120;
        n.y = 200 + Math.sin(angle) * 120;
        n.vx = 0; n.vy = 0;
      });
      frame = 0;
      if (graphState) cancelAnimationFrame(graphState);
      tick();
    });
    if (zoomIn) zoomIn.addEventListener('click', () => {
      scale = Math.min(3, scale * 1.2);
      updateViewport();
    });
    if (zoomOut) zoomOut.addEventListener('click', () => {
      scale = Math.max(0.4, scale * 0.83);
      updateViewport();
    });
  }

  // ============ 页面：关于 ============

  async function renderAbout() {
    setActiveNav('about');
    updateHomeBack(true);
    setTitle('关于');

    app.innerHTML = `
      <div class="about-page">
        <div class="about-card fade-up">
          <div class="about-avatar">${escapeHtml(ABOUT_INFO.avatarText || '我')}</div>
          <h1 class="about-name">${escapeHtml(ABOUT_INFO.name)}</h1>
          <p class="about-tagline">${escapeHtml(ABOUT_INFO.tagline)}</p>
          <div class="about-info">
            ${(ABOUT_INFO.info || []).map(i => `
              <div class="about-info-item"><span>${i.icon}</span><span>${escapeHtml(i.label)}：</span><span>${escapeHtml(i.value)}</span></div>
            `).join('')}
          </div>
        </div>
        <div id="about-content" class="about-page"><div class="loading"><span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span></div></div>
      </div>
    `;
    scrollTop();

    try {
      const mdText = await fetchMarkdown(ABOUT_INFO.file);
      const content = renderMarkdown(mdText);
      const wrap = document.createElement('div');
      wrap.className = 'about-card fade-up';
      wrap.style.marginTop = '0';
      wrap.appendChild(content);
      const container = document.getElementById('about-content');
      container.innerHTML = '';
      container.appendChild(wrap);
    } catch (err) {
      document.getElementById('about-content').innerHTML = '<div class="empty-state"><div class="empty-state-text">关于页面内容加载失败，请检查 pages/about.md 是否存在</div></div>';
      console.error(err);
    }
  }

  // ============ 页面：404 ============

  function renderNotFound(msg) {
    setActiveNav('');
    setTitle('页面不存在');
    updateHomeBack(true);
    app.innerHTML = `
      <div class="empty-state fade-up">
        <div class="empty-state-title">${escapeHtml(msg || '页面不存在')}</div>
        <div class="empty-state-text">你访问的页面走丢了，<a href="#/">回到首页</a> 重新开始吧。</div>
      </div>
    `;
    scrollTop();
  }

  // ============ 事件绑定 ============

  function bindCardClicks() {
    document.querySelectorAll('.post-card[data-slug]').forEach(card => {
      card.addEventListener('click', () => {
        location.hash = `#/post/${card.dataset.slug}`;
      });
    });
  }

  function bindTagClicks() {
    document.querySelectorAll('.tag[data-tag]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        location.hash = `#/tags/${encodeURIComponent(el.dataset.tag)}`;
      });
    });
  }

  // ============ 路由 ============

  function router() {
    const hash = location.hash.slice(1) || '/';

    if (hash === '/' || hash === '') {
      renderHome();
    } else if (hash.startsWith('/post/')) {
      const slug = decodeURIComponent(hash.slice(6));
      renderArticle(slug);
    } else if (hash.startsWith('/tags')) {
      const parts = hash.split('/');
      const tag = parts.length > 2 ? decodeURIComponent(parts[2]) : null;
      renderTagsPage(tag);
    } else if (hash === '/about') {
      renderAbout();
    } else {
      renderNotFound();
    }
  }

  // 返回顶部按钮
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });
  backToTop.addEventListener('click', scrollTop);

  // 路由监听
  window.addEventListener('hashchange', router);

  // 初始渲染
  if (!window.ARTICLES || !Array.isArray(window.ARTICLES)) {
    app.innerHTML = '<div class="empty-state"><div class="empty-state-title">文章配置加载失败</div><div class="empty-state-text">js/articles.js 未正确加载，请检查文件是否存在且语法正确。</div></div>';
  } else if (!window.marked) {
    // marked 没加载成功，但仍然可以显示文章列表（只是详情页无法渲染 markdown）
    console.warn('marked.js 未加载，文章详情页将显示原文');
    router();
  } else {
    router();
  }
})();
