# 本地开发说明

## 问题：每次更新后网页不刷新

### 根本原因：浏览器缓存
浏览器会把 JS、CSS、字体缓存起来，下次打开时直接用旧文件，不重新下载。Python 自带的 SimpleHTTPServer 不发 `Cache-Control: no-cache` 头，所以浏览器就放心地缓存了。

### 已采用的解决方案：版本号查询参数
在 index.html 中给本地资源加 `?v=YYYYMMDD` 后缀：
```html
<link rel="stylesheet" href="css/style.css?v=20260701" />
<script src="js/articles.js?v=20260701"></script>
<script src="js/app.js?v=20260701"></script>
```
浏览器把带不同参数的 URL 视为不同资源，强制重新下载。

**每次更新代码后，改一下 index.html 里的版本号**（比如 v=20260702），就能强制刷新。

### 彻底解决的方案（推荐）：缓存清除小工具
在浏览器里按 `Ctrl + Shift + R`（Mac 是 `Cmd + Shift + R`）强制刷新，忽略缓存。

或者打开 DevTools（F12）→ Network 面板 → 勾选 "Disable cache"，开发时一直开着。

---

## Vercel 部署注意事项

### Vercel 的缓存策略
Vercel 默认会对静态资源设置长缓存（`Cache-Control: public, max-age=31536000, immutable`）。这对手动改文件名的资源很好，但对没改文件名的资源会导致更新不生效。

### 方案 A：用文件内容 hash 命名（最佳）
把 `style.css` 改成 `style.a3b2c1.css` 这种带内容 hash 的文件名，改了内容就改名字。需要构建工具（如 Vite）。

### 方案 B：vercel.json 配置（无需构建工具）
在 blog/ 目录下建一个 `vercel.json`：
```json
{
  "headers": [
    {
      "source": "/css/(.*).css",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }]
    },
    {
      "source": "/js/(.*).js",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }]
    },
    {
      "source": "/posts/(.*).md",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }]
    },
    {
      "source": "/pages/(.*).md",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }]
    }
  ]
}
```
这样 CSS/JS/MD 文件每次都会校验更新（`max-age=0, must-revalidate`），但会多一个 304 请求。HTML 文件 Vercel 默认不缓存，不用担心。

---

## 为什么不用构建工具？

当前博客是纯静态的，没构建步骤——双击就能用、扔到任何静态服务器都能跑。这对一个个人博客来说足够了，好处是：
- 零配置，零依赖
- 写 .md + 改 articles.js 就能发文章
- 部署到 Vercel 只需 `vercel` 一条命令

如果以后文章多了、想要更多功能（比如搜索、RSS、自动生成 sitemap），再考虑迁移到 VitePress / Astro / Next.js 这类静态站点生成器。但现在没必要。
