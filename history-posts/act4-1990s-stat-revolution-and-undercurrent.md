> <strong>第四幕 · 1990 — 1999</strong> ｜ IBM 用概率屠杀规则派 · LSTM 发明选择性遗忘 · 深蓝用暴力算法撼动人类王座 · CNN 在银行后台安静活着 · 万维网悄悄为大模型储备燃料。
>
> 这十年看起来"什么都没发生"。但所有将在 2012 年爆发的种子——都是 90 年代埋下的。

## 机器翻译七十年：从逐词直译到 ChatGPT 翻译

> 机器翻译是 AI 最古老的任务之一——1954 年就有人尝试了。它的演化史恰好是整个 AI 范式迁移的缩影。

### 第一纪：规则翻译（1954—1990）

规则翻译的思路很直觉：人类语言学家把语法规则<strong>手写</strong>成程序，让机器按规则翻。它有四种主要路线：

1. <strong>直译法（Direct Translation）</strong> — 最原始。逐词查词典替换。"我爱你" → "I love you" 没问题，"吃了吗" → "Eat already?" 就崩了。
2. <strong>转换法（Transfer-based）</strong> — 先分析源语言句法树 → 转换到目标语言句法树 → 再生成。比直译好，但规则极难写全。
3. <strong>中间语言法（Interlingua）</strong> — 设计一种"世界通用语义表示"，任何语言先翻成它，再翻成目标语言。理论很美——实际上这个"中间语言"从来没人设计出来。
4. <strong>实例法（Example-based）</strong> — 存储大量翻译实例对，新句子来了找最像的拼接。日本 1984 年长尾真提出。算是统计翻译的前身。

规则翻译的根本问题：<strong>语言太灵活了，规则写不完。</strong> 一个团队 5 年写 10 万条规则，还是覆盖不了日常对话的 1%。

### 第二纪：统计翻译（1990—2015）

<strong>1990 年 ACL 大会</strong>，IBM 研究员 Peter Brown 等人扔出了统计翻译炸弹。他们的思路 180 度转弯：

> "不要教机器语法。给它几百万对人类翻译好的句子，让它自己学'什么对什么'的概率。"

规则翻译的问法："我" → 根据主语规则 → "I"
统计翻译的问法：P("I" | "我", 上下文) = 0.92 ← 从数据里算出来的概率

IBM Models 1-5（1990—1993）核心公式：argmax_e P(e) × P(f|e)
- P(e) = 英语语言模型（句子通不通顺）
- P(f|e) = 翻译模型（这个英语对应那个法语的概率）
- 用贝叶斯公式把翻译变成概率最大化问题。

效果呢？当场碾压规则派。Brown 等人的演讲结束后，台下做了 20 年规则翻译的权威教授一脸铁青。有人回忆说那天就像"一场公开处刑"。

<strong>2003 年：短语统计翻译（Phrase-based SMT）</strong> — Philipp Koehn 等人把"逐词对齐"升级为"短语对齐"——不再一个词一个词翻，而是几个词连成短语一起翻。Google Translate 在 2006—2016 年间用的就是这个。质量比逐词好很多，但长句依然经常"驴唇不对马嘴"。

### 第三纪：神经机器翻译 NMT（2013—至今）

- <strong>2013</strong> Nal Kalchbrenner & Phil Blunsom 首次用 CNN 做端到端翻译（还不太行）。
- <strong>2014</strong> <strong>Seq2Seq + Attention</strong>（Bahdanau, Cho, Bengio）——蒙特利尔大学的突破。Encoder 把源语言"压缩"成向量，Decoder 用 Attention 机制"盯着"源句相关部分生成译文。翻译质量<strong>飞跃</strong>。
- <strong>2015.05</strong> <strong>百度翻译</strong>在全球率先上线 NMT 系统——成为第一个在大规模生产环境中跑通 NMT 的公司。（是的，比 Google 还早！）
- <strong>2016.09</strong> Google 发布 <strong>GNMT（Google Neural Machine Translation）</strong>，宣布 Google Translate 全线切换到 NMT。翻译错误率降低 <strong>55%—85%</strong>（不同语言对）。
- <strong>2016.11</strong> 微软也将 Translator 切换到 NMT。全球三大翻译引擎同年转向神经网络。
- <strong>2017.06</strong> <strong>Transformer</strong> 发布（"Attention Is All You Need"）。纯注意力架构取代 RNN/LSTM，训练速度快 10 倍+，翻译质量再上一个台阶。
- <strong>2018</strong> <strong>百度翻译全面升级为 Transformer 架构</strong>。同年获 MIT Technology Review"十大突破性技术"。中英翻译 BLEU 分数相比 2015 年 NMT 版本再提升约 15%。
- <strong>2020+</strong> GPT-3 / ChatGPT 展示"零样本翻译"——不用专门训练翻译模型，大语言模型本身就会翻。游戏规则再次改变。

### 为什么 2016—2018 是翻译质量"突变期"？

1. <strong>2016: Seq2Seq+Attention → GNMT</strong> — 第一次端到端学习，不再需要词对齐、短语表——整句输入整句输出。长句连贯性飞跃。
2. <strong>2017-18: Transformer 取代 RNN</strong> — 并行计算 + 自注意力 → 能"看到"整个句子而非逐词处理 → 长距离依赖（如从句、指代）处理质量暴涨。
3. <strong>百度 2018 年升级</strong> — 百度是中文 NMT 先驱（2015 首发），2018 年换 Transformer 后中英互译准确率再升一个台阶。用户体感：从"能看懂但别扭"→"基本通顺"。
4. <strong>数据规模加持</strong> — 互联网双语语料从 2010 年的几十亿句增长到 2018 年的几千亿句。Transformer+海量数据=质的飞跃。

### 整条进化链一览

<div class="svg-diagram">
  <svg viewBox="0 0 620 100" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <g text-anchor="middle">
      <rect x="10" y="30" width="78" height="34" rx="17" fill="#8fb89c" opacity="0.85"/>
      <text x="49" y="51" fill="#fff" font-size="10" font-weight="600">直译(1954)</text>

      <rect x="104" y="30" width="86" height="34" rx="17" fill="#6b8cae" opacity="0.85"/>
      <text x="147" y="51" fill="#fff" font-size="10" font-weight="600">规则转换(70s)</text>

      <rect x="206" y="30" width="98" height="34" rx="17" fill="#c9a876" opacity="0.85"/>
      <text x="255" y="51" fill="#fff" font-size="10" font-weight="600">统计翻译(1990)</text>

      <rect x="320" y="30" width="84" height="34" rx="17" fill="#a89bc4" opacity="0.85"/>
      <text x="362" y="51" fill="#fff" font-size="10" font-weight="600">短语SMT(03)</text>

      <rect x="420" y="30" width="98" height="34" rx="17" fill="#6b8cae" opacity="0.85"/>
      <text x="469" y="51" fill="#fff" font-size="10" font-weight="600">Seq2Seq(2014)</text>

      <rect x="534" y="30" width="78" height="34" rx="17" fill="#c9a876" opacity="0.85"/>
      <text x="573" y="51" fill="#fff" font-size="10" font-weight="600">LLM(2020+)</text>
    </g>
    <!-- 箭头 -->
    <g fill="#9a948a">
      <polygon points="92,47 96,44 96,50"/>
      <polygon points="194,47 198,44 198,50"/>
      <polygon points="308,47 312,44 312,50"/>
      <polygon points="410,47 414,44 414,50"/>
      <polygon points="524,47 528,44 528,50"/>
    </g>
  </svg>
</div>

> 机器翻译 70 年的故事浓缩成一句话：从"教它规则"到"给它数据"到"让它自己理解语言"。这也是整个 AI 范式迁移的缩影。

---

## LSTM：教机器学会"选择性遗忘"

> 智能不是什么都记住——是知道什么该忘、什么该记、什么该说。LSTM 用三扇"门"实现了这件事。这个 1997 年的发明，至今还活在手机的语音助手里。

### 问题出在哪？——梯度消失

1990 年代，人们想用循环神经网络（RNN）处理序列数据（文字、语音、时间序列）。RNN 的思路是：每读一个词，就把之前的"记忆"和当前词混合，产生新的"记忆"，传给下一步。

理想情况："今天天气真好 所以我决定去\_\_\_\_" ← 读到"去"的时候，应该还记得"天气好"，从而预测"公园/散步"

实际情况（普通 RNN）：句子稍长（>10 个词），早期信息在反向传播时梯度指数衰减 → 消失 ← 读到"去"时已经完全忘了"天气好"，只记得最近 2-3 个词。这就是"梯度消失问题"——长距离依赖学不到。

### Hochreiter & Schmidhuber 的解法：装三扇门

<strong>Sepp Hochreiter</strong>（奥地利人，当时是慕尼黑工大的博士生）和导师 <strong>Jurgen Schmidhuber</strong> 在 1997 年发表了 <strong>LSTM（Long Short-Term Memory）</strong>。核心思想极其优雅：

> "不要让信息无条件地流过——给它装上门（gate），让网络自己学习：什么该记、什么该忘、什么该输出。"

<div class="svg-diagram">
  <svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 细胞状态传送带 -->
    <rect x="40" y="140" width="540" height="40" rx="6" fill="#c9a876" opacity="0.15" stroke="#c9a876" stroke-width="1.5" stroke-dasharray="6,3"/>
    <text x="310" y="165" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="600">Cell State 细胞状态（传送带，信息高速公路式通行）</text>

    <!-- 遗忘门 -->
    <g>
      <rect x="40" y="30" width="160" height="80" rx="8" fill="#a89bc4" opacity="0.85"/>
      <text x="120" y="55" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">遗忘门 Forget</text>
      <text x="120" y="76" text-anchor="middle" fill="#fff" font-size="10">上一步记忆哪些该扔掉？</text>
      <text x="120" y="92" text-anchor="middle" fill="#fff" font-size="10">输出 0~1 的"保留比例"</text>
    </g>
    <!-- 输入门 -->
    <g>
      <rect x="230" y="30" width="160" height="80" rx="8" fill="#6b8cae" opacity="0.85"/>
      <text x="310" y="55" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">输入门 Input</text>
      <text x="310" y="76" text-anchor="middle" fill="#fff" font-size="10">当前输入哪些值得记住？</text>
      <text x="310" y="92" text-anchor="middle" fill="#fff" font-size="10">0~1 × 候选新记忆</text>
    </g>
    <!-- 输出门 -->
    <g>
      <rect x="420" y="30" width="160" height="80" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="500" y="55" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">输出门 Output</text>
      <text x="500" y="76" text-anchor="middle" fill="#fff" font-size="10">当前该向外界展示什么？</text>
      <text x="500" y="92" text-anchor="middle" fill="#fff" font-size="10">选择性读取细胞状态</text>
    </g>
    <!-- 箭头连接到传送带 -->
    <line x1="120" y1="110" x2="120" y2="140" stroke="#a89bc4" stroke-width="1.5" marker-end="url(#arr4)"/>
    <line x1="310" y1="110" x2="310" y2="140" stroke="#6b8cae" stroke-width="1.5" marker-end="url(#arr4)"/>
    <line x1="500" y1="110" x2="500" y2="140" stroke="#8fb89c" stroke-width="1.5" marker-end="url(#arr4)"/>
    <defs>
      <marker id="arr4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <polygon points="0,0 8,4 0,8" fill="#9a948a"/>
      </marker>
    </defs>

    <!-- 底部输出 -->
    <rect x="230" y="210" width="160" height="50" rx="8" fill="#c9a876" opacity="0.85"/>
    <text x="310" y="232" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">最终输出 h_t</text>
    <text x="310" y="250" text-anchor="middle" fill="#fff" font-size="10">选择性展示的记忆</text>
    <line x1="310" y1="180" x2="310" y2="210" stroke="#9a948a" stroke-width="1.5" marker-end="url(#arr4)"/>

    <!-- 底部说明 -->
    <text x="310" y="290" text-anchor="middle" fill="#6b665d" font-size="11">每扇门都是 sigmoid 层（输出 0-1），可以被反向传播训练</text>
    <text x="310" y="308" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="500">网络自己学到：什么时候打开遗忘门清掉旧信息，什么时候关紧保留它</text>
  </svg>
</div>

### 为什么"选择性遗忘"如此深刻？

它暗示了一个深刻的认知洞察：

- <strong>智能 ≠ 全部记住</strong> — 人脑每天接收海量信息，99% 被遗忘。遗忘不是 bug——是 feature。能<strong>选择</strong>遗忘什么，才是智能的核心。
- <strong>注意力的前身</strong> — LSTM 的门控机制本质上就是"注意力"的原始形式——决定"关注什么、忽略什么"。2017 年 Transformer 的 Self-Attention 是这个思想的极致进化。
- <strong>Agent 的困扰</strong> — Agent"老是重复之前一句话"——本质就是它的"遗忘门"没学好。当前大模型的 context window 是"全部塞进去"，没有学会"智能地删掉不重要的"。这正是 2024-2025 Agent 研究的热点课题。
- <strong>未来：Memory-Augmented Agent</strong> — 2025 年前沿方向——给 Agent 装"长期记忆+遗忘机制"。本质上就是 LSTM 思想在 Agent 层面的复刻。

### LSTM 的命运：先被忽视，后来撑起整个时代

- <strong>1991</strong> Hochreiter 在硕士论文中首次描述梯度消失问题和解决思路。论文是德语的，几乎没人读到。
- <strong>1997</strong> 正式发表 LSTM 论文。开始几年引用个位数。
- <strong>2005-07</strong> Schmidhuber 团队将 LSTM 用于手写识别，赢得多项竞赛。但学界依然不够重视。
- <strong>2013-16</strong> LSTM 爆发期：Google 语音识别（切换到 LSTM，错误率降 30%）、Google 翻译、苹果 Siri、亚马逊 Alexa——<strong>全部在用 LSTM</strong>。
- <strong>2017</strong> Transformer 发布。LSTM 开始被取代——Transformer 的 Self-Attention 不需要逐步处理，可以并行。
- <strong>2024-25</strong> Mamba/State Space Models 重新引入"门控"思想。LSTM 精神以新形式回归。

> LSTM 教会了机器一件人类天生就会的事：忘记不重要的。这个发明等了 16 年才被世界理解。

---

## 深蓝 vs 卡斯帕罗夫：暴力美学的极致

> 深蓝本质上是暴力搜索。但它的"暴力"精致到了令人窒息的程度。那个算法，叫 Alpha-Beta 剪枝。

### 深蓝的核心算法：Minimax + Alpha-Beta Pruning

<strong>第一层：Minimax（极小化极大）</strong>

下棋是两人博弈。Minimax 的逻辑是：

- 我的回合：选择让"我的优势最大化"的走法（Max 层）
- 对手回合：假设对手也聪明——会选择让"我的优势最小化"的走法（Min 层）

交替展开：我走 → 对手应 → 我走 → 对手应 → ……形成一棵巨大的"博弈树"。从底部往上回溯：Max 层选最大分、Min 层选最小分。最终选出"即使对手完美应对，也能获得最好结果"的走法。

<strong>第二层：Alpha-Beta Pruning（Alpha-Beta 剪枝）</strong>

Minimax 的问题：国际象棋每步平均 35 种走法，看 12 步深就是 35^12 ≈ 万亿个节点。不可能全搜。

<strong>Alpha-Beta 剪枝</strong>的天才在于：如果已经发现一条分支"不可能比已知最佳方案更好"——<strong>直接砍掉整个子树，不用继续算</strong>。

<div class="svg-diagram">
  <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 比价比喻 -->
    <g text-anchor="middle">
      <rect x="20" y="40" width="140" height="80" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="90" y="65" fill="#fff" font-size="12" font-weight="600">第一家店</text>
      <text x="90" y="85" fill="#fff" font-size="11">iPhone 5000 元</text>
      <text x="90" y="105" fill="#fff" font-size="10">→ Alpha = 5000</text>

      <rect x="240" y="40" width="140" height="80" rx="8" fill="#a82424" opacity="0.12" stroke="#a82424" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="310" y="65" fill="#a82424" font-size="12" font-weight="600">第二家店</text>
      <text x="310" y="85" fill="#a82424" font-size="11">标价"6000 起"</text>
      <text x="310" y="105" fill="#a82424" font-size="10">→ &gt;= Beta，剪！</text>

      <rect x="460" y="40" width="140" height="80" rx="8" fill="#6b8cae" opacity="0.85"/>
      <text x="530" y="65" fill="#fff" font-size="12" font-weight="600">转身就走</text>
      <text x="530" y="85" fill="#fff" font-size="11">不用看完</text>
      <text x="530" y="105" fill="#fff" font-size="10">整棵子树砍掉</text>
    </g>
    <!-- 箭头 -->
    <line x1="160" y1="80" x2="240" y2="80" stroke="#9a948a" stroke-width="1.5"/>
    <polygon points="238,77 244,80 238,83" fill="#9a948a"/>
    <line x1="380" y1="80" x2="460" y2="80" stroke="#9a948a" stroke-width="1.5"/>
    <polygon points="458,77 464,80 458,83" fill="#9a948a"/>
    <!-- 底部 -->
    <text x="310" y="160" text-anchor="middle" fill="#6b665d" font-size="12">Alpha = 目前找到的最好价（下界）｜Beta = 对手能给的最差结果（上界）</text>
    <text x="310" y="180" text-anchor="middle" fill="#6b665d" font-size="12">当 Alpha ≥ Beta → 剪！</text>
    <text x="310" y="205" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="500">效果：搜索量从 O(b^d) 降到 O(b^(d/2))——相当于看 24 步深的信息量！</text>
  </svg>
</div>

### 深蓝的独门武器

1. <strong>定制芯片</strong> — 480 颗专用国际象棋芯片，每秒评估 <strong>2 亿个</strong>棋局位置。这是暴力的基础。
2. <strong>评估函数</strong> — 8000+ 个手工特征（棋子价值、位置、王的安全、兵的结构……）。每个位置给一个"分数"。
3. <strong>开局库</strong> — 70 万盘大师棋谱的开局数据库。前 10 步不用搜索，直接查表。
4. <strong>残局库</strong> — 所有 5 子以内的残局已被完全解算。进入残局后深蓝走的每一步都是"上帝视角"完美着法。

### 1997 年那场比赛

- <strong>第 1 局</strong> 卡斯帕罗夫获胜。他此前研究了深蓝的棋风，找到了弱点。
- <strong>第 2 局</strong> <strong>深蓝获胜</strong>。关键时刻深蓝下了一步人类无法理解的走法——后来调查发现那步可能是 <strong>bug</strong> 导致的随机选择。但恰好让卡斯帕罗夫心态崩了。
- <strong>第 3-5 局</strong> 三局平手。卡斯帕罗夫心态已经不对了——他开始怀疑背后有人类大师在操控。
- <strong>第 6 局</strong> 卡斯帕罗夫仅 19 步就投降。赛后他指控 IBM 作弊——要求查看深蓝的日志。<strong>IBM 拒绝</strong>，且赛后立刻拆解了深蓝。

这成了 AI 史上最大的"阴谋论"之一。IBM 至今没有完全公开那场比赛的完整运行日志。

### 深蓝 vs AlphaGo：暴力搜索 vs 学习直觉

- <strong>深蓝（1997）</strong> — Minimax + Alpha-Beta / 每秒搜 2 亿个位置 / 评估函数<strong>人工设计</strong> / 不会"学习" / 专用硬件
- <strong>AlphaGo（2016）</strong> — 蒙特卡洛树搜索 + 深度学习 / 每秒只搜几万个位置 / 评估函数<strong>神经网络自学</strong> / 从棋谱+自我对弈中学习 / 通用 GPU

深蓝靠"暴力+手工知识"赢了国际象棋（可能的走法 ~10^47）。但围棋的可能走法是 ~10^170——暴力搜索在数学上不可能。所以 AlphaGo 必须发明一种全新的方法：<strong>用神经网络学"直觉"，再配合搜索</strong>。

> 深蓝证明了：够暴力也是一种智能。AlphaGo 证明了：真正的智能是不需要那么暴力。

> <strong>注</strong>：深蓝团队内部两位首席科学家 Feng-hsiung Hsu（许峰雄）和 Murray Campbell 在"是否依赖蛮力搜索"上严重分歧。许峰雄坚持纯硬件加速路线，Campbell 想加入更多"知识"。最终许峰雄的路线胜出——但他赛前愤而退出了核心团队。整个深蓝项目充满了内部戏剧。

---

## TD-Gammon：神经网络第一次击败人类世界冠军

> 深蓝之前两年，IBM 的另一位研究员已经悄悄用神经网络做到了——只是这次是在西洋双陆棋桌上。

### Gerald Tesauro 与自我对弈

1992 年，IBM Watson 研究中心的 <strong>Gerald Tesauro</strong> 训练了一个叫 <strong>TD-Gammon</strong> 的神经网络下西洋双陆棋（Backgammon）。训练方式极其简单粗暴：

- 初始化一个随机神经网络
- 让它跟自己的拷贝下棋
- 赢了就强化走过的棋步，输了就削弱
- 重复 150 万局

结果：达到人类顶尖职业水平。棋风诡异——经常走人类觉得"不可能"的着法。1996 年世界双陆棋冠军对阵 TD-Gammon 后说："它的棋风完全在我理解之外，但结果就是赢了。"

### 为什么 TD-Gammon 不像深蓝那样出名？

1. <strong>双陆棋不够"性感"</strong> — 不像国际象棋那样全球瞩目。
2. <strong>暗含骰子运气</strong> — 双陆棋有骰子——人们会说"它只是运气好"。
3. <strong>但它的意义更大</strong> — TD-Gammon 证明了<strong>神经网络+自我对弈+强化学习</strong>可以超越人类。这正是 20 年后 AlphaGo 的核心三件套。
4. <strong>DeepMind 的灵感来源</strong> — Demis Hassabis 公开说过：他创建 DeepMind 的灵感之一就是 TD-Gammon。

> TD-Gammon 是 AlphaGo 的祖父。它证明了：让 AI 跟自己下棋就能超越人类。只是世界还没准备好接受这个事实。

---

## Viola-Jones 人脸检测：让相机第一次"看见"脸

> VJ 算法至今仍然是实时人脸检测的经典方案之一。它不是最准的，但它是第一个"够快"的。

### Paul Viola & Michael Jones 是谁？

Paul Viola 当时在 MIT AI Lab（后来去了微软研究院），Michael Jones 在 Mitsubishi Electric Research。他们 2001 年正式发表论文（1998 年左右已有早期版本在流传），标题朴素得像课程作业：《Rapid Object Detection using a Boosted Cascade of Simple Features》。

### 核心创新：三个巧妙的工程设计

1. <strong>Haar-like 特征</strong> — 用极简的黑白矩形模板检测局部明暗差异。比如：眼眶比颧骨暗、鼻梁比脸颊亮。不需要复杂计算——只需加减法。
2. <strong>积分图（Integral Image）</strong> — 一张图只需扫描一遍，就能在 O(1) 时间内计算任意矩形区域的像素和。让 Haar 特征计算极快。
3. <strong>AdaBoost 级联（Cascade）</strong> — 把几千个弱分类器串成"流水线"。第一级极简（只用 2-3 个特征），快速排除 80% 的非人脸区域。通过的再进入第二级检查……层层筛选，最终只有真人脸能走完全程。

效果：一帧 640×480 图像的人脸检测只需 <strong>0.067 秒</strong>（15fps）——2001 年这是"实时"的标准。

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <g text-anchor="middle">
      <!-- 输入 -->
      <rect x="10" y="70" width="80" height="60" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="50" y="95" fill="#fff" font-size="11" font-weight="600">输入图像</text>
      <text x="50" y="113" fill="#fff" font-size="10">640×480</text>

      <!-- 第1级 -->
      <rect x="120" y="60" width="80" height="80" rx="8" fill="#a89bc4" opacity="0.2" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="160" y="85" fill="#7567a0" font-size="11" font-weight="600">第1级</text>
      <text x="160" y="102" fill="#7567a0" font-size="9">2个特征</text>
      <text x="160" y="118" fill="#a82424" font-size="10">排除 80%</text>

      <!-- 第2级 -->
      <rect x="240" y="60" width="80" height="80" rx="8" fill="#a89bc4" opacity="0.35" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="280" y="85" fill="#7567a0" font-size="11" font-weight="600">第2级</text>
      <text x="280" y="102" fill="#7567a0" font-size="9">5个特征</text>
      <text x="280" y="118" fill="#a82424" font-size="10">再排除50%</text>

      <!-- 第3级 -->
      <rect x="360" y="60" width="80" height="80" rx="8" fill="#a89bc4" opacity="0.55" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="400" y="85" fill="#7567a0" font-size="11" font-weight="600">第3级</text>
      <text x="400" y="102" fill="#7567a0" font-size="9">20个特征</text>
      <text x="400" y="118" fill="#9a948a" font-size="10">更精细</text>

      <!-- ... -->
      <text x="480" y="100" fill="#9a948a" font-size="16">…</text>

      <!-- 最终 -->
      <rect x="510" y="60" width="100" height="80" rx="8" fill="#c9a876" opacity="0.85"/>
      <text x="560" y="85" fill="#fff" font-size="11" font-weight="600">第38级</text>
      <text x="560" y="102" fill="#fff" font-size="10">只有真人脸</text>
      <text x="560" y="118" fill="#fff" font-size="10">能走完全程</text>
    </g>
    <!-- 箭头 -->
    <g fill="#9a948a">
      <polygon points="96,100 100,97 100,103"/>
      <polygon points="216,100 220,97 220,103"/>
      <polygon points="336,100 340,97 340,103"/>
      <polygon points="456,100 460,97 460,103"/>
    </g>
    <!-- 底部说明 -->
    <text x="310" y="175" text-anchor="middle" fill="#6b665d" font-size="11">核心思想：用最便宜的计算先排除最多的负样本</text>
    <text x="310" y="193" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="500">层层筛选——只有真人脸能通过全部 38 级"安检"</text>
  </svg>
</div>

### 它后来去了哪里？

- <strong>2003-06</strong> 被集成到数码相机中——按下快门时画面上那个绿色方框就是 VJ 在干活。
- <strong>2005</strong> OpenCV 内置 VJ 人脸检测。任何程序员几行代码就能用。
- <strong>2007</strong> 初代 iPhone 内置人脸检测（基于 VJ 改良版）。
- <strong>2014+</strong> 深度学习（MTCNN、RetinaFace 等）逐步取代 VJ 成为精度最高的方案。
- <strong>今天</strong> VJ 依然活着——<strong>在低功耗设备（IoT 相机、门禁）上</strong>它仍是首选，因为不需要 GPU。

> VJ 不是最强的，但它让"人脸检测"第一次从实验室走到了口袋里。iPhone 能认脸的第一步，是这两位 2001 年论文里的 Haar 矩形。

---

## 万维网诞生：为 AI 储备了三十年的燃料

> 1991 年蒂姆·伯纳斯-李把 Web 放到了 CERN 的服务器上。他不知道这件事会在三十年后让 GPT 成为可能。

### 一个简单的数学

<div class="svg-diagram">
  <svg viewBox="0 0 620 140" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <text x="310" y="70" text-anchor="middle" fill="#6b8cae" font-size="60" font-weight="900" opacity="0.85">~60万亿</text>
    <text x="310" y="100" text-anchor="middle" fill="#6b665d" font-size="13" letter-spacing="2">2023 年互联网上可抓取的文字 token 数（估计值）</text>
    <text x="310" y="120" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="500">这就是训练 GPT-4 的燃料库</text>
  </svg>
</div>

没有万维网 → 没有海量文本 → 没有语言模型 → 没有 ChatGPT。

1991 年 Web 上只有一个网站（伯纳斯-李自己的）。1993 年有 500 个。1996 年有 10 万个。2000 年有 1700 万个。2023 年有超过 <strong>19 亿</strong>个。每一个网页都是一份"免费的语言训练数据"。

### 它还带来了什么？

- <strong>图片数据</strong> — ImageNet 的 1400 万张图从哪来？从互联网上爬的。
- <strong>平行语料</strong> — 机器翻译的训练数据——双语网页、UN 文件、欧盟法规——全在网上。
- <strong>用户行为数据</strong> — 搜索、点击、停留时间——Google 和百度就是用这些训练排序模型。
- <strong>众包标注</strong> — Amazon Mechanical Turk（2005）让 ImageNet 能以极低成本标注千万张图。

伯纳斯-李本人在 2023 年被问及对 AI 的看法时说："我当年造 Web 是为了信息自由。没想到它成了训练 AI 的最大数据源。这是意外，也是必然。"

---

## 90 年代的其他暗流：统计语音、SVM、LeCun 继续活着

> 除了机器翻译，统计方法在 90 年代还偷袭了另外几个领域。

### 统计语音识别（1994）

IBM 继续深耕——1994 年发布统计语音识别系统，错误率骤降 30%。核心工具：<strong>隐马尔可夫模型（HMM）</strong>。语音被切成小段，每段用概率模型匹配最可能的音素。这套方法统治了语音识别 20 年（2013 年深度学习才取代它）。

### SVM 支持向量机（1995）

1995 年 Cortes & Vapnik 发表 SVM。它在 90 年代末-2000 年代初成为<strong>机器学习的王者</strong>——手写识别、文本分类、生物信息学……到处是 SVM。有数学理论保证（结构风险最小化），审稿人爱死了。

SVM 的统治直接压制了神经网络。因为在那个数据量小的年代，SVM 在小数据上确实比神经网络好用。<strong>直到 2012 年 ImageNet 证明：数据够大时，深度网络碾压一切。</strong>

### LeCun 在贝尔实验室（1989—2003）

整个 90 年代，LeCun 安安静静让 CNN 在银行后台工作。他的策略：

> "论文标题绝不能出现 'Neural Network' 这两个词。写 'Gradient-Based Learning' 就没人骂你。"——LeCun 回忆

1998 年他发表了 CNN 的集大成论文《<strong>Gradient-Based Learning Applied to Document Recognition</strong>》——LeNet-5 的完整版。这篇论文在发表时反响平平，但后来被引用超过 <strong>6 万次</strong>。

### CIFAR 项目成型（1990s—2004）

加拿大高等研究院 CIFAR 在 90 年代持续给辛顿、Bengio 等人提供"不问产出"的小额资助。2004 年正式成立"Learning in Machines & Brains"项目——把辛顿（多伦多）、Bengio（蒙特利尔）、LeCun（纽约）正式连接成<strong>深度学习铁三角</strong>。这个项目只花了加拿大纳税人很少的钱——但它孕育了一场革命。

> 90 年代表面上风平浪静——统计方法慢慢偷家，连接主义者安静活着。所有的种子都在地下，等着 2006 年那声发令枪。

---

## 90 年代：看似最无聊的十年，其实埋下了一切

如果把 1990—1999 浓缩成一张清单：

- <strong>范式确立</strong> — "从数据中学习" > "手写规则"。统计翻译、统计语音、SVM——全是数据驱动。
- <strong>LSTM 发明</strong> — 选择性遗忘的门控思想诞生。16 年后撑起整个语音/翻译/NLP。
- <strong>深蓝登顶</strong> — 暴力搜索 + Alpha-Beta 剪枝击败人类象棋王座。震动世界。
- <strong>TD-Gammon</strong> — 神经网络+自我对弈+强化学习 → 20 年后 AlphaGo 的蓝图。
- <strong>VJ 算法</strong> — 人脸检测第一次实时化 → 相机/手机/安防的起点。
- <strong>万维网</strong> — 30 年后这些网页将成为训练大模型的最大数据源。
- <strong>CNN 活着</strong> — LeCun 在银行后台让 CNN 活过了寒冬。
- <strong>铁三角成型</strong> — 辛顿/Bengio/LeCun 在 CIFAR 的庇护下悄悄汇合。

### 脉络点睛

第四幕的隐藏主题是：<strong>"对的东西在错的时代只能偷偷活着。"</strong>

LSTM 对了但太早（等了 16 年）、CNN 对了但太早（等了 23 年）、TD-Gammon 对了但太早（等了 20 年变成 AlphaGo）、万维网的数据太早（等了 20 年才被大模型吃掉）。

所有这些"太早了"的东西，缺的是同一样东西：<strong>足够的算力（GPU）+ 足够的数据（互联网规模）</strong>。2000 年代，这两样东西将同时到位。

### 今日小酌

下次用百度翻译或 Google Translate 翻一段话——记得这背后是 1990 年 ACL 那场"公开处刑"、2015 年百度率先上线 NMT、2017 年 Transformer 改写游戏规则的三十年链条。下次 Agent 重复废话——记得 LSTM 早在 1997 年就解决了"选择性遗忘"，只是今天的 Agent 架构还没把这个思想用够。下次打开手机相机自动对焦人脸——记得那是 2001 年两位工程师用 Haar 矩形和级联分类器实现的"第一次实时"。

<strong>90 年代的 AI 不性感。但所有性感的东西，都是它默默育出来的苗。</strong>

---

*下一幕：2000 年代——ImageNet、GPU、辛顿 Science 论文、DARPA 自动驾驶赛——火种准备就绪。*
