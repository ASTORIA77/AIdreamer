"""
构建脚本：把 history-posts/*.md 打包成 js/history-content.js
"""
import os
import json

BLOG_DIR = os.path.dirname(os.path.abspath(__file__))
POSTS_DIR = os.path.join(BLOG_DIR, 'history-posts')
OUTPUT = os.path.join(BLOG_DIR, 'js', 'history-content.js')

def main():
    content = {}
    if os.path.isdir(POSTS_DIR):
        for fname in sorted(os.listdir(POSTS_DIR)):
            if fname.endswith('.md'):
                key = fname[:-3]
                with open(os.path.join(POSTS_DIR, fname), 'r', encoding='utf-8') as f:
                    content[key] = f.read()
                print(f'  [history] {fname} -> {len(content[key])} chars')

    js = '/* 自动生成，运行 python build_history.py 重新生成 */\n'
    js += 'window.HISTORY_CONTENT = ' + json.dumps(content, ensure_ascii=False, indent=2) + ';\n'

    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(js)

    print(f'\n[OK] 已生成 {os.path.relpath(OUTPUT, BLOG_DIR)}')
    print(f'   共 {len(content)} 篇，{sum(len(v) for v in content.values())} 字符')

if __name__ == '__main__':
    print('正在打包 AI 历史内容...')
    main()
