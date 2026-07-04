/* ============================================
   跨主题搜索 —— AI Agent + AI 纵横 70 年 + 工具推荐
   在星河主页（index.html）提供实时搜索
   ============================================ */

(function () {
  'use strict';

  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  // 构建搜索索引
  var index = [];

  // AI Agent 主题文章
  if (window.ARTICLES && Array.isArray(window.ARTICLES)) {
    window.ARTICLES.forEach(function (a) {
      index.push({
        topic: 'AI Agent',
        topicColor: '#c9a876',
        title: a.title || '',
        subtitle: a.subtitle || '',
        excerpt: a.excerpt || '',
        tags: a.tags || [],
        meta: a.date || '',
        url: 'agent.html#/post/' + encodeURIComponent(a.slug)
      });
    });
  }

  // AI 纵横 70 年 七幕
  if (window.HISTORY_EVENTS && Array.isArray(window.HISTORY_EVENTS)) {
    window.HISTORY_EVENTS.forEach(function (e) {
      index.push({
        topic: 'AI 纵横 70 年',
        topicColor: '#6b8cae',
        title: e.title || '',
        subtitle: e.subtitle || '',
        excerpt: e.excerpt || '',
        tags: e.tags || [],
        meta: e.act + ' · ' + (e.yearRange || e.year),
        url: 'history.html#/event/' + encodeURIComponent(e.slug)
      });
    });
  }

  // 怪好用的 AI 工具
  if (window.TOOLS_INDEX && Array.isArray(window.TOOLS_INDEX)) {
    window.TOOLS_INDEX.forEach(function (t) {
      index.push({
        topic: '怪好用的 AI 工具',
        topicColor: '#6b8cae',
        title: t.title || '',
        subtitle: t.subtitle || '',
        excerpt: t.excerpt || '',
        tags: t.tags || [],
        meta: '',
        url: t.url
      });
    });
  }

  // 学 AI 时的价值溢出
  if (window.SPILLOVER_INDEX && Array.isArray(window.SPILLOVER_INDEX)) {
    window.SPILLOVER_INDEX.forEach(function (s) {
      index.push({
        topic: '价值溢出',
        topicColor: '#ddc9a8',
        title: s.title || '',
        subtitle: s.subtitle || '',
        excerpt: s.excerpt || '',
        tags: s.tags || [],
        meta: '',
        url: s.url
      });
    });
  }

  // 转义 HTML
  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 搜索：返回匹配结果，按相关度排序
  function search(query) {
    query = query.trim().toLowerCase();
    if (!query) return [];

    var scored = [];
    index.forEach(function (item) {
      var score = 0;
      var title = (item.title || '').toLowerCase();
      var subtitle = (item.subtitle || '').toLowerCase();
      var excerpt = (item.excerpt || '').toLowerCase();
      var tags = (item.tags || []).join(' ').toLowerCase();

      // 标题匹配权重最高
      if (title.includes(query)) score += 10;
      if (title.startsWith(query)) score += 5;
      // 标签匹配
      if (tags.includes(query)) score += 8;
      // 副标题
      if (subtitle.includes(query)) score += 4;
      // 摘要
      if (excerpt.includes(query)) score += 2;

      // 多关键词分别匹配
      var keywords = query.split(/\s+/).filter(function (k) { return k.length > 0; });
      keywords.forEach(function (kw) {
        if (title.includes(kw)) score += 3;
        if (tags.includes(kw)) score += 2;
        if (subtitle.includes(kw)) score += 1;
        if (excerpt.includes(kw)) score += 1;
      });

      if (score > 0) {
        scored.push({ item: item, score: score });
      }
    });

    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.map(function (s) { return s.item; });
  }

  // 渲染结果
  function renderResults(query) {
    var matches = search(query);

    if (!query.trim()) {
      results.classList.remove('show');
      results.innerHTML = '';
      return;
    }

    if (matches.length === 0) {
      results.innerHTML =
        '<div class="search-empty">没有找到与「' + esc(query) + '」相关的内容</div>';
      results.classList.add('show');
      return;
    }

    var html = matches.map(function (item) {
      var tagsHtml = (item.tags || []).map(function (t) {
        return '<span class="search-tag">' + esc(t) + '</span>';
      }).join('');

      return '' +
        '<a class="search-result-item" href="' + item.url + '">' +
          '<div class="search-result-top">' +
            '<span class="search-result-topic" style="color:' + item.topicColor + ';">' + esc(item.topic) + '</span>' +
            '<span class="search-result-meta">' + esc(item.meta) + '</span>' +
          '</div>' +
          '<div class="search-result-title">' + esc(item.title) + '</div>' +
          (item.subtitle ? '<div class="search-result-subtitle">' + esc(item.subtitle) + '</div>' : '') +
          (tagsHtml ? '<div class="search-result-tags">' + tagsHtml + '</div>' : '') +
        '</a>';
    }).join('');

    results.innerHTML = html;
    results.classList.add('show');
  }

  // 防抖
  var timer = null;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    var val = input.value;
    timer = setTimeout(function () { renderResults(val); }, 150);
  });

  // 聚焦时如果有内容则显示结果
  input.addEventListener('focus', function () {
    if (input.value.trim()) renderResults(input.value);
  });

  // 点击外部关闭
  document.addEventListener('click', function (e) {
    var box = document.getElementById('search-box');
    if (box && !box.contains(e.target)) {
      results.classList.remove('show');
    }
  });

  // Esc 关闭
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.blur();
      results.classList.remove('show');
    }
  });
})();
