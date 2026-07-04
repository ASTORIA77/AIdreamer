> <strong>第七幕 · 2018 — 未来</strong> ｜ GPT 系列从 1 亿参数涨到 1750 亿，ChatGPT 让大模型走进公众视野，AlphaFold 取消了一门学科，DeepSeek-R1 用思维链 + MoE 挑战 Scaling Law，Agent 从聊天走向办事，文生视频冲击影视业，物理 AI 与具身机器人走出屏幕。
>
> 这一幕没有结尾。因为我们就站在里面。

## 2018—2022：Transformer 的种子长成森林

第六幕结尾说"Transformer 是大模型时代的种子"。这颗种子发芽的速度超出所有人预期。

- <strong>2018.06</strong> <strong>GPT-1</strong>（OpenAI）。1.17 亿参数。第一次证明"预训练 + 微调"在通用语言任务上有效。
- <strong>2019.02</strong> <strong>GPT-2</strong>。15 亿参数。OpenAI 一开始以"太危险"为由<strong>分阶段发布</strong>——后来证明是营销手段，但也让公众第一次意识到"AI 写文章"的可能性。
- <strong>2020.05</strong> <strong>GPT-3</strong>。1750 亿参数，参数量一年翻百倍。few-shot learning 涌现——不用微调，给几个例子就能做新任务。这是"规模出智能"的第一个铁证。
- <strong>2020.12</strong> <strong>AlphaFold2</strong> 在 CASP14 上接近实验精度。结构生物学的核心问题被解决。
- <strong>2022.11.30</strong> <strong>ChatGPT</strong> 发布。5 天破百万用户，2 个月破 1 亿——人类历史增长最快的产品。大模型从学术圈走进公众意识。

<div class="svg-diagram">
  <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 时间轴 -->
      <line x1="40" y1="120" x2="580" y2="120" stroke="#9a948a" stroke-width="1.5"/>
      <!-- 节点 -->
      <g>
        <circle cx="80" cy="120" r="6" fill="#8fb89c"/>
        <text x="80" y="100" text-anchor="middle" fill="#5e8a6c" font-size="11" font-weight="600">2018</text>
        <text x="80" y="86" text-anchor="middle" fill="#6b665d" font-size="10">GPT-1</text>
        <text x="80" y="72" text-anchor="middle" fill="#9a948a" font-size="9">1.17 亿参数</text>
      </g>
      <g>
        <circle cx="200" cy="120" r="7" fill="#8fb89c"/>
        <text x="200" y="100" text-anchor="middle" fill="#5e8a6c" font-size="11" font-weight="600">2019</text>
        <text x="200" y="86" text-anchor="middle" fill="#6b665d" font-size="10">GPT-2</text>
        <text x="200" y="72" text-anchor="middle" fill="#9a948a" font-size="9">15 亿参数</text>
      </g>
      <g>
        <circle cx="320" cy="120" r="9" fill="#c9a876"/>
        <text x="320" y="100" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">2020</text>
        <text x="320" y="86" text-anchor="middle" fill="#6b665d" font-size="10">GPT-3</text>
        <text x="320" y="72" text-anchor="middle" fill="#9a948a" font-size="9">1750 亿参数</text>
      </g>
      <g>
        <circle cx="440" cy="120" r="7" fill="#6b8cae"/>
        <text x="440" y="100" text-anchor="middle" fill="#4a6c8a" font-size="11" font-weight="600">2022.11</text>
        <text x="440" y="86" text-anchor="middle" fill="#6b665d" font-size="10">ChatGPT</text>
        <text x="440" y="72" text-anchor="middle" fill="#9a948a" font-size="9">2 月破 1 亿用户</text>
      </g>
      <g>
        <circle cx="560" cy="120" r="10" fill="#a89bc4"/>
        <text x="560" y="100" text-anchor="middle" fill="#7a6ba0" font-size="11" font-weight="600">未来</text>
        <text x="560" y="86" text-anchor="middle" fill="#6b665d" font-size="10">???</text>
      </g>
      <!-- 参数量增长曲线 -->
      <path d="M 80 145 Q 200 148 320 165 Q 440 180 560 195" stroke="#c9a876" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
      <text x="320" y="210" text-anchor="middle" fill="#9a7a45" font-size="10" font-style="italic">参数量指数增长 ·涌现出"规模出智能"</text>
    </g>
  </svg>
</div>

这一幕从 2018 年讲起，但挑的不是参数量数字游戏——而是几个"AI 改变规则"的关键节点：AlphaFold 取消一门学科、DeepSeek-R1 动摇算力叙事、Agent 从对话走向办事、文生视频冲击影视业、物理 AI 走出屏幕。最后是所有人都在问的那个问题：<strong>我们到底该以什么谋生？</strong>

## AlphaFold：一门学科被 AI"取消"了

> AlphaFold 不是"帮助"了结构生物学，而是把这个领域的核心工作方式彻底颠覆了。以前要花几个月到几年做的事，现在几分钟出结果。

### 以前怎么做蛋白质结构解析？

传统方法是 X 射线晶体学（X-ray Crystallography），四步走：

1. <strong>纯化蛋白质</strong> → 需要大量纯蛋白样品（毫克级）
2. <strong>结晶</strong> → 把蛋白质"长成"晶体。这一步可能花几个月到几年。很多蛋白质根本结晶不了——膜蛋白、无序蛋白几乎不可能结晶。
3. <strong>X 射线衍射</strong> → 用同步辐射光源打晶体，收衍射图
4. <strong>解析结构</strong> → 从衍射图反推 3D 原子坐标，需要数学功底 + 大量手动调整 + 运气

一个蛋白质结构从开始到发表：平均 1—3 年。到 2020 年，人类用了 50 年积累了约 17 万个实验解析的蛋白质结构。

### AlphaFold 做了什么？

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 传统方法 -->
      <rect x="30" y="30" width="270" height="140" rx="8" fill="#a89bc4" opacity="0.12" stroke="#a89bc4" stroke-width="1.2"/>
      <text x="165" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">传统方法（X 射线晶体学）</text>
      <g fill="#6b665d" font-size="10">
        <text x="50" y="75">纯化 → 结晶 → 衍射 → 解析</text>
        <text x="50" y="93">单结构耗时：1—3 年</text>
        <text x="50" y="111">50 年累计：17 万个结构</text>
      </g>
      <text x="165" y="140" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">许多蛋白质根本结晶不了</text>

      <!-- AlphaFold -->
      <rect x="320" y="30" width="270" height="140" rx="8" fill="#8fb89c" opacity="0.14" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="455" y="50" text-anchor="middle" fill="#5e8a6c" font-size="12" font-weight="600">AlphaFold2 (2020.12)</text>
      <g fill="#6b665d" font-size="10">
        <text x="340" y="75">输入：氨基酸序列（一串字母）</text>
        <text x="340" y="93">输出：3D 原子坐标</text>
        <text x="340" y="111">精度 GDT &gt; 92（接近实验精度）</text>
        <text x="340" y="129">时间：几分钟到几小时</text>
      </g>
      <text x="455" y="155" text-anchor="middle" fill="#5e8a6c" font-size="11" font-weight="700">2.14 亿结构 / 一天发完</text>
    </g>
  </svg>
</div>

2022 年 7 月，DeepMind 用 AlphaFold2 一次性发布了 <strong>2.14 亿个</strong>蛋白质结构预测——相当于人类 50 年结晶工作量的 1200 倍。一天发完。

2024 年 5 月 AlphaFold3 发在 Nature，不只预测蛋白质，还能预测蛋白质与 DNA、RNA、小分子药物的复合物结构——药物设计从此有了"虚拟显微镜"。

### 一门学科的"存在危机"

- <strong>结晶学家的困境</strong> 很多博士生选题就是"解析某个蛋白质的晶体结构"——过去是 Nature/Science 级别的工作。现在 AlphaFold 几分钟就预测出来。PhD 论文还值钱吗？
- <strong>经费的重新分配</strong> 同步辐射光源（如上海光源）一年运维费上亿。如果 AI 预测就够用了，这些设施还需要吗？（答案：还需要——但理由在变。从"获取结构"变成"验证 AI 预测"和"研究动态过程"。）
- <strong>新范式</strong> 不是"AI 辅助实验"，而是<strong>"实验验证 AI"</strong>。主客体关系反转了——以前 AI 帮你分析数据；现在做实验是为了看 AI 对不对。
- <strong>2024 诺贝尔化学奖</strong> Demis Hassabis 和 John Jumper（AlphaFold 核心开发者）获诺贝尔化学奖。评委会的逻辑：解决了化学领域 50 年来的核心问题。这是 AI 研究者第一次拿诺贝尔自然科学奖。

### 第一块多米诺骨牌

AlphaFold 的意义远超生物学本身。它证明了一个模式：<strong>AI 可以直接"取消"一个专业领域的核心技能</strong>。不是帮你做得更好——是让你原来的工作方式变得没有必要。

结构生物学是第一个。编程正在成为第二个。影视可能是第三个。

> AlphaFold 不是"更好的工具"——它是一个学科的存在论危机。当 AI 几分钟做完你几年的工作，问题就不再是"怎么做得更快"——而是"原来的工作方式还有没有必要"。

## AI 写代码：第二块倒下的多米诺骨牌

> 编程可能是继结构生物学之后，第二个被 AI"彻底重写规则"的专业领域。

### 为什么编程领域被冲击得最快？

- <strong>① 代码是纯文本</strong> 语言模型的原生输入输出就是文本。代码恰好是最结构化、最精确的文本形式。完美匹配。
- <strong>② 即时验证</strong> 写完代码可以直接运行、测试、看结果。反馈循环极短——AI 可以自我纠错。这是写文章和画画都做不到的。
- <strong>③ 海量训练数据</strong> GitHub 上有数十亿行开源代码。代码自带结构（函数签名、类型系统、测试用例）——比自然语言更容易"理解"。
- <strong>④ 明确的对错标准</strong> "能跑"vs"不能跑"。"测试通过"vs"测试失败"。这让强化学习有了清晰的奖励信号。

### 从"补全"到"端到端交付"

<div class="svg-diagram">
  <svg viewBox="0 0 620 130" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 5 个阶段 -->
      <g>
        <rect x="20" y="40" width="100" height="40" rx="20" fill="#8fb89c" opacity="0.7"/>
        <text x="70" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2021 Copilot</text>
        <text x="70" y="74" text-anchor="middle" fill="#fff" font-size="9">补全一行</text>

        <rect x="145" y="40" width="100" height="40" rx="20" fill="#8fb89c" opacity="0.7"/>
        <text x="195" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2023 GPT-4</text>
        <text x="195" y="74" text-anchor="middle" fill="#fff" font-size="9">写一个函数</text>

        <rect x="270" y="40" width="100" height="40" rx="20" fill="#c9a876" opacity="0.75"/>
        <text x="320" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2024 Claude</text>
        <text x="320" y="74" text-anchor="middle" fill="#fff" font-size="9">写一个模块</text>

        <rect x="395" y="40" width="100" height="40" rx="20" fill="#c9a876" opacity="0.85"/>
        <text x="445" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2025 Claude 4</text>
        <text x="445" y="74" text-anchor="middle" fill="#fff" font-size="9">写一个项目</text>

        <rect x="520" y="40" width="80" height="40" rx="20" fill="#a89bc4" opacity="0.7"/>
        <text x="560" y="58" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2026+</text>
        <text x="560" y="74" text-anchor="middle" fill="#fff" font-size="9">端到端产品?</text>
      </g>
      <!-- 箭头 -->
      <g stroke="#9a948a" stroke-width="1.3" fill="none" marker-end="url(#ar7a)">
        <defs><marker id="ar7a" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#9a948a"/></marker></defs>
        <line x1="120" y1="60" x2="140" y2="60"/>
        <line x1="245" y1="60" x2="265" y2="60"/>
        <line x1="370" y1="60" x2="390" y2="60"/>
        <line x1="495" y1="60" x2="515" y2="60"/>
      </g>
      <text x="310" y="105" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">从"帮程序员写代码"到"从需求到可部署产品的完整交付"</text>
      <text x="310" y="123" text-anchor="middle" fill="#9a948a" font-size="10">程序员的角色：写代码的人 → 审核 AI 代码的人 → 描述需求的人</text>
    </g>
  </svg>
</div>

2026 年正在发生的转变：不是"帮程序员写代码"，而是"从需求到可部署产品的完整交付"。

### 为什么这件事意义巨大？

编程不只是一个"职业"——它是过去 30 年来所有数字化的<strong>瓶颈</strong>。任何想法变成现实都需要有人写代码。如果 AI 能写代码了，那瓶颈就消失了。

印刷术消除了"抄写员"这个瓶颈 → 知识传播爆炸。AI 编程消除"程序员"这个瓶颈 → 软件创造爆炸。

以前：有想法 → 找程序员 → 排期 2 个月 → 做出来不满意 → 再改 1 个月 → 凑合用。
现在：有想法 → 告诉 AI → 10 分钟出原型 → 不满意直接说 → 再来一版 → 部署。

创造软件的成本从"几十万 + 几个月"降到"几块钱 + 几小时"。这意味着：以前"不值得做成软件"的想法，现在都值得做了。

AlphaFold 取消的是一门学科，影响几万人；AI 编程取消的是一个瓶颈，影响所有人。

## DeepSeek-R1：思维链 + MoE，中国版的"Sputnik 时刻"

> DeepSeek-R1 的两个核心创新：思维链（Chain-of-Thought 推理）让模型"深度思考"，混合专家（MoE）架构对 Scaling Law 的正面挑战。这两件事合在一起，确实造成了模式颠覆。

### 创新一：思维链（Chain-of-Thought）成为标配

传统模型（GPT-4 之前）：问题 → 直接输出答案。像考试时"直接写答案"——遇到复杂题就容易错。

思维链模型（R1/o1/o3）：问题 → 展开推理过程 → 一步步推导 → 检查 → 修正 → 最终答案。像"先打草稿再答题"——复杂推理准确率飙升。

DeepSeek-R1 的独特之处：通过<strong>纯强化学习</strong>让模型自发涌现出了思维链行为。不是人工设计的"让它分步骤"，而是模型在 RL 训练中自己"发现"了：分步想比一步到位准确率高，然后自己开始"深度思考"。

从 R1 开始，2025 年后的所有主流模型都加入了"思考模式"。现在看到的每一个带"深度思考"按钮的 AI——源头都在这里。

### 创新二：MoE（混合专家）对 Scaling Law 的挑战

<div class="svg-diagram">
  <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- Scaling Law -->
      <rect x="30" y="30" width="270" height="200" rx="8" fill="#a89bc4" opacity="0.12" stroke="#a89bc4" stroke-width="1.2"/>
      <text x="165" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">Scaling Law（2020 Kaplan）</text>
      <g fill="#6b665d" font-size="10">
        <text x="50" y="78">模型越大 + 数据越多 + 训练越久 = 越聪明</text>
        <text x="50" y="100">OpenAI/Google 策略：无限堆算力</text>
        <text x="50" y="118">参数从 1B → 175B → 1.8T</text>
      </g>
      <text x="165" y="150" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">GPT-4 训练成本</text>
      <text x="165" y="172" text-anchor="middle" fill="#c9a876" font-size="22" font-weight="900">$100M+</text>
      <text x="165" y="190" text-anchor="middle" fill="#9a948a" font-size="10">需要 25000+ A100 GPU</text>
      <text x="165" y="212" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">"暴力堆参数"的信仰</text>

      <!-- MoE -->
      <rect x="320" y="30" width="270" height="200" rx="8" fill="#8fb89c" opacity="0.14" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="455" y="50" text-anchor="middle" fill="#5e8a6c" font-size="12" font-weight="600">DeepSeek MoE 架构</text>
      <g fill="#6b665d" font-size="10">
        <text x="340" y="78">总参数：671B（很大）</text>
        <text x="340" y="100">每次推理只激活：37B（~5%）</text>
        <text x="340" y="118">分多个"专家子网络"</text>
        <text x="340" y="136">每输入只激活最相关的几个专家</text>
      </g>
      <text x="455" y="170" text-anchor="middle" fill="#5e8a6c" font-size="11" font-weight="600">R1 训练成本</text>
      <text x="455" y="192" text-anchor="middle" fill="#8fb89c" font-size="22" font-weight="900">$5—6M</text>
      <text x="455" y="210" text-anchor="middle" fill="#9a948a" font-size="10">性能接近 GPT-4o / Claude 3.5</text>
      <text x="455" y="222" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">"算法效率"挑战"无限算力"</text>
    </g>
  </svg>
</div>

DeepSeek 的挑战：MoE（Mixture of Experts）。总参数量 671B（很大），但每次推理只激活 <strong>37B</strong>（只用总参数的约 5%）。

原理：把模型分成很多"专家子网络"，每个输入只激活最相关的几个专家 → 其余专家"休息" → 总知识容量巨大，但实际计算成本很低。

结果：R1 在多项基准测试上<strong>接近甚至超过</strong> GPT-4o / Claude 3.5，训练成本估计 $5—6M（对比 GPT-4 的 $100M+），推理成本远低于同等性能的密集模型。

### 为什么股价跌了？

2025 年 1 月 27 日（美国时间），DeepSeek-R1 论文和模型同时发布。隔天美国股市：

- <strong>NVIDIA</strong> 单日市值蒸发约 $5930 亿。史上单一公司最大单日跌幅。
- <strong>逻辑</strong>：如果中国团队用 1/20 的成本就能训出同等水平模型——那"无限堆算力"的叙事还成立吗？NVIDIA"卖铲子给淘金者"的故事还讲得下去吗？

当然，这个冲击后来被部分消化了——因为 MoE 虽然降低了训练成本，但<strong>推理阶段的总需求量爆炸式增长</strong>（更多人用得起 AI 了 → 总 GPU 需求反而增加）。但 R1 确实动摇了"Scaling Law 需要无限算力"这个信仰。

### 模式颠覆的三层含义

- <strong>技术层</strong> MoE + 思维链 = 用更少算力做更难的事。Scaling Law 不是错了——但实现它的方式可能比"暴力堆参数"聪明得多。
- <strong>产业层</strong> 算力军备竞赛的逻辑被动摇。如果效率提升可以抵消算力不足——那被 GPU 封锁的玩家也有机会。
- <strong>地缘层</strong> 在芯片出口管制的背景下，中国团队用"算法效率"部分弥补了"硬件限制"。这改变了 AI 竞争的地缘叙事。

> Scaling Law 告诉你"多大才够"，但没告诉你"怎么花最少的钱到那个大"。MoE 的回答是：你不需要每道题都动用所有脑细胞。

## Agent 时代：从"聊天"到"办事"

> 2026 年是 AI 从"对话工具"转向"执行者"的元年。模型不再只是回答问题——它开始"干活"。

### 什么是 Agent？

<div class="svg-diagram">
  <svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- Chatbot -->
      <rect x="30" y="30" width="270" height="170" rx="10" fill="#6b8cae" opacity="0.14" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="165" y="50" text-anchor="middle" fill="#4a6c8a" font-size="13" font-weight="700">Chatbot（2022—2024）</text>
      <g fill="#6b665d" font-size="11">
        <text x="50" y="80">用户："帮我写一封邮件"</text>
        <text x="50" y="100">AI："好的，这是邮件草稿：..."</text>
      </g>
      <text x="50" y="135" fill="#9a948a" font-size="10">[用户自己复制粘贴到 Gmail]</text>
      <text x="50" y="153" fill="#9a948a" font-size="10">[自己选收件人]</text>
      <text x="50" y="171" fill="#9a948a" font-size="10">[自己点发送]</text>
      <text x="165" y="195" text-anchor="middle" fill="#4a6c8a" font-size="11" font-weight="600">价值衡量：回答得好不好？</text>

      <!-- Agent -->
      <rect x="320" y="30" width="270" height="170" rx="10" fill="#a89bc4" opacity="0.16" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="455" y="50" text-anchor="middle" fill="#7a6ba0" font-size="13" font-weight="700">Agent（2025—2026）</text>
      <g fill="#6b665d" font-size="11">
        <text x="340" y="80">用户："约张三下周三下午茶"</text>
        <text x="340" y="100">AI：[检查日历 → 确认有空]</text>
        <text x="340" y="118">[写邮件 → 打开 Gmail]</text>
        <text x="340" y="136">[填地址 → 发送]</text>
        <text x="340" y="154">[日历创建事件]</text>
      </g>
      <text x="455" y="180" text-anchor="middle" fill="#7a6ba0" font-size="11">"已发送。已标注。"</text>
      <text x="455" y="195" text-anchor="middle" fill="#7a6ba0" font-size="11" font-weight="600">价值衡量：事情办没办成？</text>
    </g>
  </svg>
</div>

Chatbot = 给你答案，你自己执行。
Agent = 理解意图 → 规划步骤 → 调用工具 → <strong>端到端交付结果</strong>。

这个转变看起来微小，但它改变了整个 AI 产业的评估逻辑。当开始用"事情办没办成"来衡量 AI——那很多以前"AI 做不到"的事情，突然就变成了"只是还没接上正确的工具"。

### 2026 年 Agent 生态现状

已经在发生的：
- <strong>Coding Agent</strong>：从需求到 PR 的完整开发流程
- <strong>Browser Agent</strong>：自动操作网页（表单填写、数据抓取、流程自动化）
- <strong>Computer Use</strong>：直接控制桌面应用程序（点击、输入、截图判断）
- <strong>工作流 Agent</strong>：连接邮件 / 日历 / 文档 / 即时通讯的跨应用自动化

核心技术栈：大模型（理解 + 规划）+ 工具调用（执行）+ 记忆（上下文）+ 反馈循环（纠错）。

时间线：2024 年各家发布 Agent 框架（LangChain、CrewAI、AutoGen…）→ 2025 年 Claude Computer Use、OpenAI Operator、Google Project Mariner → 2026 年 Agent 从 demo 走向生产，开始真的有人"用 Agent 干活"而不是"玩 Agent demo"。

> 2022 年的问题是"AI 能不能理解我说的话？"2026 年的问题是"AI 能不能把事情办了？"下一步的问题可能是"AI 能不能自己决定该办什么事？"

## 文生视频与行业冲击：专业壁垒的多米诺效应

> 可灵 2.0（Kling）和 AI 短剧对影视圈的冲击，不是孤立事件——它是"专业壁垒被踏平"大趋势的最新一块骨牌。

### 从 AlphaFold 到 AI 短剧：同一个故事的不同章节

<div class="svg-diagram">
  <svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 4 个颠覆度条 -->
      <text x="20" y="35" fill="#6b665d" font-size="11">蛋白质结构解析</text>
      <rect x="220" y="22" width="360" height="16" rx="8" fill="#efece6"/>
      <rect x="220" y="22" width="324" height="16" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="585" y="35" fill="#5e8a6c" font-size="11" font-weight="600">90%</text>

      <text x="20" y="80" fill="#6b665d" font-size="11">基础编程工作</text>
      <rect x="220" y="67" width="360" height="16" rx="8" fill="#efece6"/>
      <rect x="220" y="67" width="234" height="16" rx="8" fill="#c9a876" opacity="0.8"/>
      <text x="495" y="80" fill="#9a7a45" font-size="11" font-weight="600">65%</text>

      <text x="20" y="125" fill="#6b665d" font-size="11">短视频 / 广告制作</text>
      <rect x="220" y="112" width="360" height="16" rx="8" fill="#efece6"/>
      <rect x="220" y="112" width="180" height="16" rx="8" fill="#6b8cae" opacity="0.75"/>
      <text x="440" y="125" fill="#4a6c8a" font-size="11" font-weight="600">50%</text>

      <text x="20" y="170" fill="#6b665d" font-size="11">长视频 / 电影制作</text>
      <rect x="220" y="157" width="360" height="16" rx="8" fill="#efece6"/>
      <rect x="220" y="157" width="72" height="16" rx="8" fill="#a89bc4" opacity="0.6"/>
      <text x="332" y="170" fill="#7a6ba0" font-size="11" font-weight="600">20%</text>

      <text x="310" y="210" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">被 AI 颠覆程度（示意，2026 年状态）</text>
    </g>
  </svg>
</div>

### 加速度效应：为什么越来越快

"一个专业壁垒被踏平之后，很快会有第二个，这个速度会越来越快"——这背后有结构性原因：

- <strong>迁移学习效应</strong> AI 在一个领域的突破可以迁移到其他领域。AlphaFold 的架构思想可以用在材料科学、药物设计、气象预测。Transformer 在语言上的成功可以迁移到图像、音频、视频、代码。
- <strong>数据飞轮</strong> 每攻克一个领域，就产生更多训练数据和人才积累。这些反过来加速下一个领域的攻克。
- <strong>工具链成熟</strong> 每一次突破都完善了 AI 基础设施——更好的框架、更便宜的算力、更多的开源模型。门槛越来越低，后来者上手越来越快。
- <strong>资本催化</strong> 每一次"AI 颠覆 X 行业"的新闻都会引来更多投资。更多投资 → 更多人才和算力 → 更快的突破。正反馈循环。

### 影视行业为什么特别脆弱？

影视制作的成本结构中，很大一部分是"技术执行"而非"创意"——灯光、摄像、后期、特效、场地、群演。AI 文生视频直接绕过了这些技术执行环节。当技术执行成本趋近于零时，唯一的价值壁垒就剩下了<strong>创意本身</strong>。但创意从来不是影视行业的垄断——有创意的人到处都是，只是以前他们没有制作工具。现在工具门槛消失了。

## 物理 AI 与具身智能：从屏幕里走出来

> 这是 2026 年最大的未解问题之一：AI 什么时候从数字世界真正走进物理世界？

### 为什么物理 AI 比数字 AI 难得多？

- <strong>数字世界</strong> 可以无限试错（代码跑错了重来）。环境完全可控。反馈即时。数据获取便宜。
- <strong>物理世界</strong> 试错有代价（机器人摔坏了要修）。环境充满意外。反馈有延迟。真实世界数据极其昂贵。

深圳（尤其是大湾区）正在成为机器人硬件的"制造中心"——因为供应链齐全（电机、传感器、控制板全在一小时车程内）。但"让机器人像人一样灵活"这件事，2026 年距离"好用"还有明显距离。

不过趋势很明确：大模型在数字世界里学到的"理解、规划、推理"能力，正在通过具身智能框架（如 Google RT-2、Figure 01/02、Tesla Optimus）尝试迁移到物理机器人上。一旦这个迁移成功，影响将比数字 AI 大几个量级——因为物理世界的经济体量远大于数字世界。

<strong>未来 3—5 年可能看到的</strong>：工厂通用机器人取代流水线重复劳动（已在发生）；末端配送机器人在特定场景（园区、校园）规模化；家庭服务机器人仍处于"能用但笨拙"阶段；AI 辅助手术精度超过人类医生（已有案例，但推广缓慢）；L4 自动驾驶在限定场景落地（Waymo 已经在做），通用 L5 仍遥远。

## 我们到底该以什么谋生？

这是这一幕最后的问题，也是 2026 年所有人都在问的问题。坦诚说——没有人知道答案。但有几个角度值得摆出来讨论。

### 一个历史类比：但这次可能不同

乐观叙事（历史重复版）：蒸汽机取代了纺织工 → 但创造了铁路工人、工程师、工厂管理者；汽车取消了马车夫 → 但创造了司机、修车工、加油站员工；互联网取消了报刊亭 → 但创造了程序员、产品经理、内容创作者。结论：每次技术革命都消灭旧工作 + 创造新工作，AI 也一样？

<strong>这次可能不同的地方</strong>：以前的技术革命取代的是<strong>体力</strong>或<strong>特定技能</strong>，AI 取代的是<strong>认知能力本身</strong>——思考、判断、创造。以前是"机器做手（human thinks, machine does）"，现在是"机器也做脑（machine thinks AND does）"。如果连"新工作"本身也能被 AI 做——那"创造新工作来补偿"的逻辑还成立吗？这是 2026 年所有经济学家都在争论的问题，没有共识。

### 生产力与生产关系

一个观察视角来自马克思主义政治经济学的框架：<strong>生产力</strong>（AI 能做什么）正在以指数速度增长，但<strong>生产关系</strong>（谁拥有 AI、谁获得收益、工作如何分配）还停在旧框架里。蒸汽机时代这种错配导致了工人运动和福利国家的诞生。AI 时代的错配会导致什么？——合理推测包括 UBI（全民基本收入）、新型所有权结构、或者我们还想象不到的东西。

难处在于：人类历史上没有过这种速度的生产力革命。工业革命用了 100 年慢慢消化。AI 可能只给我们 10 年。

### 几个可能的锚点（不是答案，是讨论起点）

- <strong>审美与判断力</strong> AI 能生成一万张图——但"哪张好"仍需要人判断。AI 能写一百个方案——但"选哪个"是人的决策。"品味"可能是最后的人类壁垒之一。
- <strong>关系与信任</strong> 人类跟人类做生意不只是因为"你能力强"——还因为"我信你"。信任是一种无法被 AI 替代的社会资本。但这个壁垒也在松动——如果 AI 的输出质量持续稳定，人们对"人类执行"的信任溢价会下降。
- <strong>身体与在场</strong> 物理 AI 还远。需要"人在现场"的工作（护理、手工艺、现场表演、面对面陪伴）短期内不会被取代。但"短期"是多短？5 年？15 年？
- <strong>提出问题的能力</strong> AI 极其擅长"回答问题"和"执行任务"。但"提出正确的问题"——"我们应该做什么？"——这仍然是人的领地。至少目前是。

### 一个也许有用的思考框架

不要问"什么工作不会被取代"——因为答案可能是"几乎没有"。要问的是：

1. 在 AI 能做一切的世界里，"价值"的定义会变成什么？当生产不再稀缺——稀缺的是什么？注意力？意义？真实体验？
2. 我擅长的事情中，哪些是我享受的、即使不赚钱也会做的？如果所有"为了赚钱"的工作都被 AI 做了——"本来就想做"的事变成了最好的对冲。
3. 我能不能成为"AI 的放大器"而不是"被 AI 替代的人"？用 AI 做杠杆：一个人 + AI ≈ 以前一个团队的产出。

工业化让体力不再值钱，信息化让记忆不再值钱，AI 让认知本身不再值钱。最后还值钱的，也许是"知道自己想要什么"这件事——至少目前还只有人能做。

## 第七幕没有结尾

因为我们就在里面。

从第一幕图灵的问题（"机器能思考吗？"）到今天，75 年过去了。图灵的问题早已不再是哲学假设——它变成了每天打开电脑就要面对的现实。

这一幕没有标准答案，也不该假装有。能看到变化在发生、能理解变化的逻辑，就已经比大多数人走得远了一步。至于终点在哪——诚实地说，没有人知道。

具体技能会被 AI 学走。但在不确定中保持方向感这件事，至少目前，还只有人能做。

---

*全七幕完结*

第一幕：起源与群星（1950—1959）
第二幕：野心、幻灭与裂痕（1960—1969）
第三幕：两次寒冬与东方偷袭（1970—1989）
第四幕：统计革命与暗流涌动（1990—1999）
第五幕：数据为王，GPU 登场（2000—2009）
第六幕：火山正式喷发（2012—2017）
第七幕：岩浆入海，未来未知（2018 — 未来）
