"""
构建脚本：把 posts/*.md 和 pages/*.md 打包成 js/content.js
运行后文章内容内联到 JS 里，不再依赖 fetch，file:// 也能正常打开。

用法：
    cd blog
    python build.py
"""
import os
import json
import re

BLOG_DIR = os.path.dirname(os.path.abspath(__file__))
POSTS_DIR = os.path.join(BLOG_DIR, 'posts')
PAGES_DIR = os.path.join(BLOG_DIR, 'pages')
OUTPUT = os.path.join(BLOG_DIR, 'js', 'content.js')


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def main():
    content = {}

    # 读取 posts/*.md，用文件名（不含扩展名）作为 key
    if os.path.isdir(POSTS_DIR):
        for fname in sorted(os.listdir(POSTS_DIR)):
            if fname.endswith('.md'):
                key = fname[:-3]  # 去掉 .md
                content[key] = read_file(os.path.join(POSTS_DIR, fname))
                print(f'  [post] {fname} -> {len(content[key])} chars')

    # 读取 pages/*.md，用 "page:文件名" 作为 key
    if os.path.isdir(PAGES_DIR):
        for fname in sorted(os.listdir(PAGES_DIR)):
            if fname.endswith('.md'):
                key = 'page:' + fname[:-3]
                content[key] = read_file(os.path.join(PAGES_DIR, fname))
                print(f'  [page] {fname} -> {len(content[key])} chars')

    # 生成 js/content.js
    # 用 JSON.stringify 保证字符串安全转义（处理换行、引号、反引号等）
    js_content = '/* 自动生成，请勿手动编辑。运行 python build.py 重新生成。*/\n'
    js_content += 'window.POST_CONTENT = ' + json.dumps(content, ensure_ascii=False, indent=2) + ';\n'

    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f'\n[OK] 已生成 {os.path.relpath(OUTPUT, BLOG_DIR)}')
    print(f'   共 {len(content)} 篇内容，{sum(len(v) for v in content.values())} 字符')
    print(f'   现在可以用 file:// 直接打开 index.html，无需本地服务器。')


if __name__ == '__main__':
    print('正在打包文章内容...\n')
    main()
