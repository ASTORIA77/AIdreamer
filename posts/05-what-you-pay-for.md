> 桌面 Agent 没有免费的——新手额度是获客成本，用完就得充。但钱花在哪，得拆开看

上一篇把 WorkBuddy 拆开看了一遍。这篇聊一个更现实的问题：**你每月充的那几十块，到底在为什么买单？**

先把结论摆出来：你在为两笔钱付费。一笔是模型调用（烧 token），一笔是工程化框架（harness engineering）。这两笔钱性质完全不同，但大多数人都只看到第一笔。

## 一、免费的，都是获客成本

先说一个很多人没意识到的事：**现在桌面 Agent 基本没有免费的。**

你装一个下来，送你一些新手额度——几千次对话、几百万 token、几天体验期。用完呢？弹窗，充钱。

这个新手额度不是厂商做慈善，是**获客成本**。跟外卖平台第一单立减、打车软件新用户券一个逻辑：先让你尝到甜头，把你圈进来，等你离不开再收费。

网页端那些免费版大模型也一样。你以为豆包、Kimi 网页版是免费的？那是厂商在烧钱买你的使用习惯。**免费的东西，要么变贵，要么变傻。** 你看豆包不也开始收费了嘛。

所以与其等它变，不如先想清楚：**真到要充钱那天，你买的是什么？**

## 二、一个公式：Agent = Model + Harness

要搞懂你在为什么付费，得先搞懂一个 Agent 到底由什么组成。

有个很粗暴但很好记的公式：**Agent = Model + Harness**。

- **Model**（模型）：就是大模型本身，那个"大脑"。GPT、Claude、DeepSeek、豆包这些都算。它负责推理、生成、理解意图。
- **Harness**（框架/缰绳）：模型之外的所有东西。工具调用、记忆系统、执行编排、沙盒隔离、权限控制、反馈回路……全是它。

打个比方：**模型是 CPU，Harness 是操作系统。** CPU 再强，操作系统天天崩，体验也不会好。你买了最新的 M5 芯片，装一个三天两头蓝屏的系统，实际体验可能还不如旧芯片配个稳定系统。

这个公式不是我瞎编的，是 Agent 开发圈最近经常提的概念，叫 **Harness Engineering**（框架工程）。它讨论的就是：决定一个 Agent 表现上限的，很多时候不是模型，而是你给模型搭的那套工作环境。

有个实验挺能说明问题：同一个模型，只换了文件编辑接口的调用方式，编码基准分数从 6.7% 跳到了 68.3%。**模型没变，变的是它外面那套框架。** 差了十倍。

所以你充会员时，其实是在为这两部分分别买单。

## 三、第一笔钱：Harness Engineering

先说框架这部分。这其实是很多人忽略的——**你以为你在为"AI"付费，其实很大一部分钱花在了工程化上。**

把一个桌面 Agent 的框架拆开，大概有这几块（我查了一下，业内有个六层架构的说法，我用大白话翻译一下）：

<div class="svg-diagram">
  <svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;">
    <defs>
      <linearGradient id="hG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#6b8cae" stop-opacity="0.10"/><stop offset="100%" stop-color="#6b8cae" stop-opacity="0.04"/>
      </linearGradient>
    </defs>

    <!-- 标题 -->
    <text x="340" y="28" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" font-weight="600" fill="#3d3a35">Harness 的六层（模型之外的所有东西）</text>

    <!-- L1 信息边界 -->
    <rect x="60" y="50" width="560" height="48" rx="6" fill="url(#hG)" stroke="#6b8cae" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="72" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#6b8cae">L1 信息边界</text>
    <text x="80" y="89" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">告诉 Agent 该看什么、不该看什么——岗位说明书</text>

    <!-- L2 工具系统 -->
    <rect x="60" y="106" width="560" height="48" rx="6" fill="url(#hG)" stroke="#c9a876" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="128" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#c9a876">L2 工具系统</text>
    <text x="80" y="145" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">怎么跟外部世界交互——浏览器、命令行、API、文件</text>

    <!-- L3 执行编排 -->
    <rect x="60" y="162" width="560" height="48" rx="6" fill="url(#hG)" stroke="#8fb89c" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="184" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#8fb89c">L3 执行编排</text>
    <text x="80" y="201" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">多步骤任务怎么串——理解→判断→生成→检查的流水线</text>

    <!-- L4 记忆与状态 -->
    <rect x="60" y="218" width="560" height="48" rx="6" fill="url(#hG)" stroke="#a89bc4" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="240" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#a89bc4">L4 记忆与状态</text>
    <text x="80" y="257" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">长任务中间结果怎么存——记住你、越用越好</text>

    <!-- L5 评估与观测 -->
    <rect x="60" y="274" width="560" height="48" rx="6" fill="url(#hG)" stroke="#6b8cae" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="296" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#6b8cae">L5 评估与观测</text>
    <text x="80" y="313" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">怎么知道自己做对了没——质检流程</text>

    <!-- L6 约束与恢复 -->
    <rect x="60" y="330" width="560" height="48" rx="6" fill="url(#hG)" stroke="#c9a876" stroke-width="0.8" opacity="0.7"/>
    <text x="80" y="352" font-family="'Noto Serif SC',serif" font-size="12" font-weight="600" fill="#c9a876">L6 约束、校验与恢复</text>
    <text x="80" y="369" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">哪些事不能做、出错了怎么回滚——红线和应急预案</text>

    <!-- 底部说明 -->
    <text x="340" y="408" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a" font-style="italic">每家厂商的工程化能力不一样，这就是你付费的一部分</text>
    <text x="340" y="425" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a" font-style="italic">同一个模型，换一套框架，效果能差十倍</text>
  </svg>
</div>

挨个说：

**L1 信息边界**——告诉 Agent 该知道什么、不该知道什么。你是来写周报的，就别把整个硬盘的文件都塞给它。这一层定义角色和任务范围。

**L2 工具系统**——Agent 怎么跟外部世界交互。浏览器、命令行、文件读写、API 调用，都归这里管。上一篇讲的 Browser Use、Computer Use 就是工具层的能力差异。

**L3 执行编排**——多步骤任务怎么串起来。你说"帮我做个网站"，它得自己拆成：理解需求→选技术栈→写代码→测试→修 bug。这个"拆解→执行→检查"的循环，就是编排。

**L4 记忆与状态**——长任务中间结果怎么存。你昨天跟它说的话，它今天还记得，靠的就是这层。WorkBuddy 的"长记忆"、Qoder Work 的"意识"功能，都在这一层。

**L5 评估与观测**——Agent 怎么知道自己做对了。写完代码跑测试、做完网页截图对比，都是评估。没有这层，Agent 就是"自信地犯错"。

**L6 约束、校验与恢复**——哪些事不能做、出错了怎么办。数据隔离沙盒、权限请求、误操作回滚，都在这层。**这层是安全网**——没有它，Agent 误删你文件你都没处哭。

这六层加起来，就是 Harness。**每个厂商的工程化能力不一样，你充会员时，很大一部分钱花在这上面。** 同一个模型，WorkBuddy 和 Qoder Work 套的框架不一样，体验就不一样——上一篇讲的能力差异（Browser Use、Goal Mode、多 Agent 团队），本质上都是 Harness 的差异。

## 四、第二笔钱：模型调用

第二笔钱就直观多了——**模型本身也要花钱。**

每次 Agent 干活，都要调用大模型，消耗 token。token 不是空气，它背后是一整套基础设施在烧钱。黄仁勋今年讲过一个"五层蛋糕"的比喻，我觉得用来理解模型为什么贵，特别合适：

<div class="svg-diagram">
  <svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;">
    <defs>
      <linearGradient id="cake1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#9a948a" stop-opacity="0.18"/><stop offset="100%" stop-color="#9a948a" stop-opacity="0.08"/></linearGradient>
      <linearGradient id="cake2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#c9a876" stop-opacity="0.18"/><stop offset="100%" stop-color="#c9a876" stop-opacity="0.08"/></linearGradient>
      <linearGradient id="cake3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#8fb89c" stop-opacity="0.18"/><stop offset="100%" stop-color="#8fb89c" stop-opacity="0.08"/></linearGradient>
      <linearGradient id="cake4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6b8cae" stop-opacity="0.18"/><stop offset="100%" stop-color="#6b8cae" stop-opacity="0.08"/></linearGradient>
      <linearGradient id="cake5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#a89bc4" stop-opacity="0.18"/><stop offset="100%" stop-color="#a89bc4" stop-opacity="0.08"/></linearGradient>
    </defs>

    <text x="340" y="26" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" font-weight="600" fill="#3d3a35">黄仁勋的五层蛋糕 · 模型为什么贵</text>

    <!-- 第5层 应用 -->
    <rect x="200" y="44" width="280" height="50" rx="4" fill="url(#cake5)" stroke="#a89bc4" stroke-width="0.8"/>
    <text x="340" y="66" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#a89bc4">应用</text>
    <text x="340" y="82" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">你用的 Agent、App、网页端</text>

    <!-- 第4层 模型 -->
    <rect x="170" y="104" width="340" height="50" rx="4" fill="url(#cake4)" stroke="#6b8cae" stroke-width="0.8"/>
    <text x="340" y="126" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#6b8cae">模型</text>
    <text x="340" y="142" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">GPT · Claude · DeepSeek · 豆包</text>

    <!-- 第3层 基础设施 -->
    <rect x="140" y="164" width="400" height="50" rx="4" fill="url(#cake3)" stroke="#8fb89c" stroke-width="0.8"/>
    <text x="340" y="186" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#8fb89c">基础设施</text>
    <text x="340" y="202" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">数据中心 · 服务器 · 网络 · 散热</text>

    <!-- 第2层 芯片 -->
    <rect x="110" y="224" width="460" height="50" rx="4" fill="url(#cake2)" stroke="#c9a876" stroke-width="0.8"/>
    <text x="340" y="246" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#c9a876">芯片</text>
    <text x="340" y="262" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">GPU · H100 · B200 · 黄仁勋卖的这个</text>

    <!-- 第1层 能源 -->
    <rect x="80" y="284" width="520" height="50" rx="4" fill="url(#cake1)" stroke="#9a948a" stroke-width="0.8"/>
    <text x="340" y="306" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#9a948a">能源与材料</text>
    <text x="340" y="322" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">电 · 水 · 稀土 · 最底层、最烧钱</text>

    <!-- 侧标 -->
    <text x="610" y="180" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a" transform="rotate(-90 610 180)">越往下越重</text>

    <!-- 底部说明 -->
    <text x="340" y="370" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a" font-style="italic">你每次消耗的 token，都在为底下四层买单</text>
    <text x="340" y="387" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a" font-style="italic">模型没有免费的——网页端的免费，是获客成本</text>
  </svg>
</div>

从下往上看：**能源与材料**（电、水、稀土）→ **芯片**（GPU，黄仁勋卖的这个）→ **基础设施**（数据中心、服务器、散热）→ **模型**（GPT、Claude、DeepSeek）→ **应用**（你用的 Agent）。

你每次消耗的 token，都在为底下四层买单。电费、芯片折旧、数据中心运维、模型训练成本……全摊在每个 token 里。**模型没有免费的**——网页端那些免费版，本质上是厂商在替你付这笔钱，目的是把你圈住。

所以回到开头那句话：免费的东西，要么变贵，要么变傻。变贵好理解——哪天不免费了。变傻是更隐蔽的：厂商为了控成本，悄悄降模型质量、限并发、砍上下文长度。你以为还在用同一个模型，其实已经不是了。

## 五、那为什么我喜欢 WorkBuddy？

讲到这里，就明白我为什么喜欢 WorkBuddy 了——**它让你把两笔钱拆开付。**

大部分桌面 Agent 是打包收费：你充会员，模型调用和框架绑在一起，按月固定扣钱。你用多用少一个价，厂商赚的就是"用得少的人补贴用得多的人"这个差价。

WorkBuddy 支持**自定义模型**。也就是说，它允许你后面填自己的 API key（DeepSeek、OpenAI、Anthropic 的都行），按量付费给模型厂商；也可以接本地模型，走本地算力，token 不花钱。

但这不是说我一开始就奔着 API 去的。我买了一年 WorkBuddy 会员，花了 500 多。现在是先用会员积分，等把平台送的和自己的额度都消耗得差不多了，再走 API。这样相当于先用订阅制熟悉它的框架能力，后面再切换成"白嫖框架、只付模型钱"的模式。

这个切换逻辑的好处是：
- **前期省心**：不用折腾 API key、余额、模型选型，先把 Harness 用好。
- **后期省钱**：等用量上来了，API 按量付费大概率比一直买订阅便宜。

对于不是天天高强度用的人来说，按量付费更友好。订阅制适合用量稳定、天天跑长任务的人；轻度用户一直买月卡其实是亏的。

## 六、算一笔账

把两笔钱理清楚，就能算账了：

| 你付的 | 付给谁 | 买的是什么 |
|--------|--------|-----------|
| 订阅费/积分 | Agent 厂商 | Harness 工程化能力（六层框架） |
| Token 费 | 模型厂商（经 Agent 转手或直连 API） | 模型调用（背后是芯片+能源+基建） |

**有些厂商把这两笔打包收，有些拆开收。** 打包收的好处是省心，坏处是你不知道钱花哪了；拆开收的好处是透明、可控，坏处是你得自己操心 API key、余额这些事。

我个人的选择是：先买 WorkBuddy 会员用它的积分和框架，等额度消耗得差不多了，再走自定义模型 API 的路子。需要重活的时候，该加钱加钱，不心疼。

## 七、知道自己买什么

写这篇不是劝你别充钱——**该花的钱得花**。好的 Agent 确实能成倍提升效率，这点不假。

但得知道自己在买什么：

1. **你在为厂商的工程化能力付费**——同一个模型，谁的框架做得好，谁就值这个价。别只看它用什么模型，要看它的工具、记忆、编排、约束做得怎么样。
2. **你在为模型调用付费**——token 不是空气，它背后是芯片、能源、数据中心。免费的是获客成本，迟早要收回来。
3. **你有选择权**——支持自定义模型的 Agent，让你后面可以只付模型钱，框架能力 already 买过一轮了。不是一开始就要走 API，而是订阅用熟了、心里有数了再切。

> 工具是死的，钱是你的。搞清楚在为什么买单，才不会花冤枉钱。
