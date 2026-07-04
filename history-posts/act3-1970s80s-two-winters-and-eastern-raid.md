> <strong>第三幕 · 1970 — 1989</strong> ｜ 莱特希尔一纸报告冻结英国 · 专家系统短暂回春 · 日本 8.5 亿美元豪赌 · 辛顿在加拿大孤独坚守 · 最终 LISP 机崩盘，第二次寒冬降临。
>
> 这二十年有两次冰封、两次石油危机、一次东方偷袭、一次算法革命——还有一台能识别手写支票的机器，没有人在乎。

## SHRDLU：那个让所有人上当的积木世界

> 一个 MIT 博士生的毕业论文让全世界以为 NLP 被解决了。其实他只是修了一堵很高的围墙。

### Terry Winograd 和他的积木宇宙

1970 年，MIT 明斯基门下的 <strong>Terry Winograd</strong>（23 岁）完成了博士论文——一个叫 <strong>SHRDLU</strong> 的程序。它能用英语对话，讨论桌面上一组彩色积木块的位置、移动、逻辑关系。

> <strong>USER</strong>：Pick up a big red block.
> <strong>SHRDLU</strong>：OK. (picks it up)
>
> <strong>USER</strong>：Find a block which is taller than the one you are holding and put it into the box.
> <strong>SHRDLU</strong>：By "it", I assume you mean the block which is taller than the one I am holding. OK. (does it)
>
> <strong>USER</strong>：What does the box contain?
> <strong>SHRDLU</strong>：The blue pyramid and the blue block.
>
> <strong>USER</strong>：What is the pyramid supported by?
> <strong>SHRDLU</strong>：The box.

它甚至能处理代词指代、上下文追踪、逻辑推理。在 1970 年，这看起来像外星科技。学界炸锅了——如果一台电脑能"理解"这种复杂英语，那 NLP 离"完全解决"还远吗？

### 骗局在哪里？

<strong>SHRDLU 只活在一个"积木世界"里。</strong> 它的语法和语义被限死在只有几种形状、几种颜色、几种动作的封闭领域。一旦问它"今天天气怎么样"——死机。

Winograd 本人后来公开承认：这条路走不通。他放弃了 NLP 研究，转向了人机交互（后来他在斯坦福的博士生之一叫 <strong>Larry Page</strong>——对，Google 的那位）。

> "SHRDLU 证明了：在一个足够小的世界里，什么都能做。问题是——现实世界不小。" —— Winograd, 回忆录

这个教训至今有效。2025 年听到有人说"AI 在 xxx 领域准确率 99%"——先问问它的"积木世界"有多大。

---

## 莱特希尔报告：英国 AI 的"斩首行动"

> 一个数学家写了 25 页报告，直接让英国 AI 研究消失了十年。这不是寒冬——这是灭绝。

### James Lighthill 是谁？

英国数学家，剑桥大学卢卡斯讲座教授（这个职位曾属于<strong>牛顿和霍金</strong>）。流体力学权威。1972 年英国科学研究委员会（SRC）请他评估全英 AI 研究的价值。注意——他本人<strong>不是 AI 学者</strong>，他是来"审判"AI 的。

### 报告说了什么？

> "AI 研究 20 年来没有产出任何有价值的成果"
>
> —— Sir James Lighthill, "Artificial Intelligence: A General Survey", 1973

报告核心论断：① AI 的"组合爆炸"问题没有任何突破。② 任何稍微复杂的现实任务都超出当前 AI 能力。③ 机器人、语言理解、自动推理在可预见的未来无实用价值。④ 建议英国政府<strong>立刻停止资助所有 AI 研究项目</strong>（除极少数应用性项目外）。

报告一出，效果像原子弹：

- <strong>1974</strong> 英国 SRC <strong>全面停止 AI 基础研究经费</strong>。爱丁堡大学 AI 系被砍到只剩几个人。
- <strong>1974</strong> 美国国防部<strong>跟进收缩</strong>——DARPA 经费被大砍（叠加越战和石油危机）。
- <strong>1975-76</strong> 全球 AI 论文数量暴跌约 <strong>70%</strong>。美国、英国、加拿大大批 AI 博士生改行。
- <strong>持续至 1980</strong> 英国 AI 研究几乎完全断代，直到日本第五代计划刺激后才恢复。

### 为什么杀伤力这么大？

1. <strong>权威压制</strong> — 卢卡斯教授 = 英国科学界最高身份。他说不行，谁也别想反驳。
2. <strong>时机叠加</strong> — 1973 年第一次石油危机爆发，各国政府大砍科研预算。AI 本来就被质疑——这下砍得心安理得。
3. <strong>证据确凿</strong> — 60 年代那些"十年内解决智能"的承诺确实没兑现。GPS 解不了真实问题、SHRDLU 出不了积木世界——Lighthill 手上全是枪弹。
4. <strong>BBC 辩论</strong> — 1973 年 BBC 录制了一场 Lighthill vs McCarthy/Michie 的电视辩论。Lighthill 冷静、尖刻、满分发挥。观众站在他这边。

### 石油危机怎么帮了倒忙？

1973 年 10 月第四次中东战争爆发 → 阿拉伯石油禁运 → 油价翻四倍 → 全球经济衰退。英美两国政府同时面对三个"吞金兽"：越战（美国）、北海油田开发（英国）、通货膨胀。科研预算是第一个被砍的。<strong>AI 作为"看不到产出的纯研究"，被砍得最狠。</strong>

1979 年第二次石油危机再来一轮。两次危机叠加，让 1974-1980 成为 AI 研究有史以来最黑暗的六年。

> 第一次 AI 寒冬不是自然死亡——是一位数学家、一场战争、两次石油危机联手执行的斩首。

---

## 专家系统：符号主义的最后荣光

> 寒冬里并非什么都不长。有一种叫"专家系统"的植物在冻土里开出了花——虽然花期不长。

### 什么是专家系统？核心逻辑

本质上非常简单：把人类专家脑子里的"如果-那么"规则<strong>手动</strong>写成程序。

> <strong>RULE #001</strong>: IF 患者体温 > 38.5°C AND 白细胞 > 12000 THEN 怀疑细菌感染 (置信度 0.7)
>
> <strong>RULE #002</strong>: IF 怀疑细菌感染 AND 血培养阳性 THEN 确认菌血症 (置信度 0.9)
>
> <strong>RULE #003</strong>: IF 确认菌血症 AND 菌种=链球菌 THEN 推荐青霉素 (置信度 0.85)

就是这样：几百到几万条规则 + 一个推理引擎，从头推到尾。不学习、不训练、全靠人工编码知识。

### 明星系统巡礼：不只是 MYCIN

- <strong>DENDRAL（1965—1983）</strong> — Stanford。世界第一个专家系统。分析质谱数据推断有机化合物分子结构。名字来自"树状分析（dendritic）"。
- <strong>MYCIN（1972—1978）</strong> — Stanford。诊断血液感染，推荐抗生素。名字来自 "-mycin"（抗生素后缀，如 streptomycin 链霉素）。准确率超过实习医生——但因为"谁负责"的法律问题，从未在真实医院部署。
- <strong>EMYCIN（1979）</strong> — "Empty MYCIN"——把 MYCIN 的规则掏空，变成通用框架。第一个"开发框架"。
- <strong>CADUCEUS / INTERNIST-I（1970s—1986）</strong> — 匹兹堡大学。涵盖内科 500 多种疾病、4000+ 症状。名字 Caduceus 来自希腊神话中赫尔墨斯的双蛇杖（医学标志）。
- <strong>PROSPECTOR（1978）</strong> — SRI。地质勘探系统。用贝叶斯推理预测矿藏位置——1980 年它真的帮人发现了一座钼矿，价值超过 1 亿美元。
- <strong>XCON / R1（1980—1988）</strong> — Carnegie Mellon 为 DEC 开发。配置 VAX 计算机系统。<strong>每年为 DEC 省 4000 万美元。</strong> 第一个真正赚大钱的 AI 系统。

### 1980 年代：专家系统的商业狂潮

XCON 的成功让商界疯狂。1980-1987 年间，IntelliCorp（1980）、Teknowledge（1981）、Carnegie Group 等公司相继成立。1985 年全球专家系统市场规模达 <strong>10 亿美元</strong>。Fortune 500 中三分之二的公司在尝试部署某种形式的专家系统。AI 从冰天雪地突然变成华尔街宠儿——<strong>但这次回春依然是假的。</strong>

### 专家系统为什么最终也崩了？

1. <strong>知识瓶颈</strong> — 每条规则都要从人类专家头脑中"挖"出来。一个成熟系统需要几万条规则——挖规则的人比系统本身还贵。
2. <strong>脆弱性</strong> — 遇到规则库外的情况就完全无能。MYCIN 看不了感冒，XCON 配不了非 VAX 机器。
3. <strong>不会学习</strong> — 跟今天的大模型最根本的区别——它永远不能从新数据中自己变聪明。
4. <strong>硬件依赖</strong> — 很多专家系统跑在 LISP Machine 上——昂贵的专用硬件。当通用 PC 性能追上来时，LISP 机毫无竞争力。

> 专家系统是符号主义最后的辉煌——它证明了"手写知识"可以赚钱，但也证明了"手写知识"的天花板有多低。

---

## 日本第五代计算机：通产省的 8.5 亿美元豪赌

> 当时日本 GDP 全球第二，经济增速碾压美国。通产省的官僚们看着 VLSI 芯片和汽车出口的辉煌，问了一个问题："下一个制高点是什么？"——答案是 AI。

### 日本 1980 年的历史位置

先理解 1980 年的日本有多强：

- <strong>GDP 全球第二</strong> — 1968 年超过西德，1980 年人均 GDP 已接近美国水平。"日本第一"不是吹的。
- <strong>电子产业碾压</strong> — NEC、富士通、日立、索尼、东芝——半导体市场份额从 1975 年的 15% 飙升到 1985 年的 50%。美国芯片产业一片哀嚎。
- <strong>"通产省模式"</strong> — 日本通商产业省（MITI）是全球最成功的产业政策机构。它先后主导了钢铁、汽车、半导体的国家战略。每次都赢了。
- <strong>政治自信</strong> — 1979 年哈佛教授 Ezra Vogel 出版《Japan as Number One》。日本精英阶层开始相信：21 世纪是日本世纪。

### 第五代计划到底要造什么？

1981 年 10 月，通产省正式公布 <strong>"第五代计算机系统（FGCS）"</strong> 十年计划：

<div class="svg-diagram">
  <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 中央目标 -->
    <rect x="180" y="20" width="260" height="50" rx="8" fill="#c9a876" opacity="0.85"/>
    <text x="310" y="42" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">目标：会推理、会对话、会学习</text>
    <text x="310" y="60" text-anchor="middle" fill="#fff" font-size="11">的新型计算机</text>
    <!-- 四个支柱 -->
    <g text-anchor="middle">
      <rect x="20" y="110" width="130" height="70" rx="6" fill="#6b8cae" opacity="0.85"/>
      <text x="85" y="135" fill="#fff" font-size="12" font-weight="600">核心架构</text>
      <text x="85" y="153" fill="#fff" font-size="10">非冯·诺依曼</text>
      <text x="85" y="168" fill="#fff" font-size="10">并行推理机</text>

      <rect x="170" y="110" width="130" height="70" rx="6" fill="#8fb89c" opacity="0.85"/>
      <text x="235" y="135" fill="#fff" font-size="12" font-weight="600">基础语言</text>
      <text x="235" y="153" fill="#fff" font-size="10">PROLOG</text>
      <text x="235" y="168" fill="#fff" font-size="10">（非 LISP）</text>

      <rect x="320" y="110" width="130" height="70" rx="6" fill="#a89bc4" opacity="0.85"/>
      <text x="385" y="135" fill="#fff" font-size="12" font-weight="600">硬件路线</text>
      <text x="385" y="153" fill="#fff" font-size="10">并行推理机</text>
      <text x="385" y="168" fill="#fff" font-size="10">PIM</text>

      <rect x="470" y="110" width="130" height="70" rx="6" fill="#c9a876" opacity="0.85"/>
      <text x="535" y="135" fill="#fff" font-size="12" font-weight="600">预算</text>
      <text x="535" y="153" fill="#fff" font-size="10">10 年 8.5 亿美元</text>
      <text x="535" y="168" fill="#fff" font-size="10">（1981 年币值）</text>
    </g>
    <!-- 连接线 -->
    <line x1="310" y1="70" x2="85" y2="110" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="310" y1="70" x2="235" y2="110" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="310" y1="70" x2="385" y2="110" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
    <line x1="310" y1="70" x2="535" y2="110" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
    <!-- 底部：代际 -->
    <text x="310" y="220" text-anchor="middle" fill="#6b665d" font-size="11">通产省的逻辑：第一代=真空管 → 第二代=晶体管 → 第三代=集成电路 → 第四代=VLSI → 第五代=智能机（日本独占！）</text>
    <text x="310" y="245" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="500">执行机构：ICOT（新世代计算机技术开发机构），集中全日本顶尖人才</text>
  </svg>
</div>

### "打破冯·诺依曼"是什么意思？

冯·诺依曼架构的核心是：程序和数据都放在同一个内存里，CPU 按顺序一条一条执行指令。这个架构从 1945 年到 2025 年——手里的<strong>每一台电脑</strong>都是这样的。

日本人觉得：要实现"推理"，需要<strong>同时处理大量逻辑关系</strong>。传统的"一条一条执行"太慢了。所以他们想造一种完全新的硬件——让几千个推理单元同时工作，用 PROLOG 直接在硬件层跑逻辑推理。

这个想法……其实<strong>方向对了</strong>。今天的 GPU 本质上就是"大规模并行计算"。但他们选错了"并行什么"——<strong>应该并行的是数值计算（矩阵乘法），不是符号推理</strong>。这是根本性的路线错误。

### 美国的恐慌与反制

- <strong>1982</strong> DARPA 紧急组建 <strong>SCI（Strategic Computing Initiative）</strong> 计划，年预算 1 亿美元，反击日本。
- <strong>1983</strong> 英国启动 <strong>Alvey Programme</strong>（3.5 亿英镑）——讽刺的是，Lighthill 报告仅 10 年前刚杀了英国 AI。
- <strong>1984</strong> 美国成立 <strong>MCC（Microelectronics and Computer Technology Corporation）</strong>——20 家公司联合对抗日本。

这波美日 AI 军备竞赛，让全球 AI 经费从 1980 年的 3 亿美元飙升到 1985 年的超 20 亿美元。<strong>第一次 AI 寒冬彻底结束——但埋下了第二次寒冬的种子。</strong>

### 第五代计划为什么最终失败了？

1. <strong>路线错误</strong> — PROLOG+并行推理机在实际中极其难优化。符号推理的并行化比想象的难几百倍。
2. <strong>忽视数据</strong> — 整个计划没有"从数据中学习"的思路——这恰好是 20 年后深度学习胜利的原因。
3. <strong>封闭生态</strong> — ICOT 自己造硬件、自己写语言、自己定标准——跟世界脱节。
4. <strong>泡沫破灭</strong> — 1989 年日本经济泡沫破裂，通产省再也拿不出钱。1992 年项目悄悄结束，没有任何正式"成果发布会"。

> "日本第五代计划是 AI 史上最大的国家级赌博——它证明了一件事：砸再多钱，方向错了也白搭。30 年后中国大模型追赶美国时，值得把这张牌翻出来再看一遍。"

> <strong>注</strong>：虽然第五代计划"失败了"，但它训练出一整代日本计算机科学家，并行计算技术后来在地球模拟器（2002 年世界第一超算）等项目中开花结果。所以"失败"也有遗产。

---

## 反向传播复活：神经网络从坟墓里爬出来

> 17 年的冰封终于被打破。但打破它的不只是一个算法——是一对算法搭档：反向传播 + 非线性激活函数。少了任何一个，深度学习都不可能。

### 先讲反向传播：权重自动更新的魔法

1986 年，<strong>Rumelhart、Hinton、Williams</strong> 在 Nature 发表论文，正式把反向传播（Backpropagation）推广到多层网络。

直觉版本——

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <g text-anchor="middle">
      <!-- 第1步 -->
      <rect x="20" y="60" width="120" height="60" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="80" y="82" fill="#fff" font-size="11" font-weight="600">① 前向传播</text>
      <text x="80" y="100" fill="#fff" font-size="10">输入 → 各层计算</text>
      <text x="80" y="114" fill="#fff" font-size="10">→ 输出预测</text>

      <!-- 第2步 -->
      <rect x="160" y="60" width="120" height="60" rx="8" fill="#c9a876" opacity="0.85"/>
      <text x="220" y="82" fill="#fff" font-size="11" font-weight="600">② 计算误差</text>
      <text x="220" y="100" fill="#fff" font-size="10">预测 vs 正确答案</text>
      <text x="220" y="114" fill="#fff" font-size="10">→ Loss</text>

      <!-- 第3步 -->
      <rect x="300" y="60" width="120" height="60" rx="8" fill="#a89bc4" opacity="0.85"/>
      <text x="360" y="82" fill="#fff" font-size="11" font-weight="600">③ 反向传播</text>
      <text x="360" y="100" fill="#fff" font-size="10">Loss 从后往前传</text>
      <text x="360" y="114" fill="#fff" font-size="10">告诉每层怎么调</text>

      <!-- 第4步 -->
      <rect x="440" y="60" width="120" height="60" rx="8" fill="#6b8cae" opacity="0.85"/>
      <text x="500" y="82" fill="#fff" font-size="11" font-weight="600">④ 更新权重</text>
      <text x="500" y="100" fill="#fff" font-size="10">每个权重微调</text>
      <text x="500" y="114" fill="#fff" font-size="10">下次更准</text>
    </g>
    <!-- 箭头 -->
    <polygon points="148,90 156,86 156,94" fill="#9a948a"/>
    <polygon points="288,90 296,86 296,94" fill="#9a948a"/>
    <polygon points="428,90 436,86 436,94" fill="#9a948a"/>
    <!-- 循环箭头 -->
    <path d="M 500 120 Q 500 160 300 160 Q 80 160 80 120" fill="none" stroke="#c9a876" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="290" y="178" text-anchor="middle" fill="#9a7a45" font-size="11">重复几百万次 → 模型"学会"了。这就是训练 GPT/DALL-E/Sora 的核心循环。</text>
  </svg>
</div>

它的革命性在于：<strong>不需要人手写规则了</strong>。给数据、给答案，让网络<strong>自动调整权重</strong>。这是从"专家系统"到"深度学习"的根本范式转变——<strong>从"编码知识"到"学习知识"</strong>。

### 但是！反向传播不够——还需要激活函数

这是关键点——<strong>激活函数在某种意义上甚至比反向传播更重要</strong>。原因如下：

<strong>没有激活函数的世界</strong>：如果每一层神经元只做"线性运算"（即 y = wx + b），那么不管叠多少层——

> 第 1 层：y₁ = w₁x + b₁
>
> 第 2 层：y₂ = w₂·y₁ + b₂ = w₂·(w₁x + b₁) + b₂ = (w₂w₁)x + (w₂b₁+b₂)
>
> 两层合起来还是 y = Ax + B。100 层也一样。线性的叠加永远是线性的。能拟合的函数永远只是一条直线/一个超平面。XOR 还是解不了。深度网络 = 浅层网络。叠 100 层等于白叠。

<strong>有了激活函数的世界</strong>：在每一层输出后面加一个<strong>非线性函数</strong>——比如 Sigmoid、tanh、ReLU——突然一切都变了：

> 第 1 层：y₁ = <strong>σ(</strong>w₁x + b₁<strong>)</strong> ← σ 是非线性激活
>
> 第 2 层：y₂ = <strong>σ(</strong>w₂·y₁ + b₂<strong>)</strong>
>
> 由于 σ 的"弯曲"，两层网络已经不再是线性了。三层以上 → 万能逼近定理生效！

<strong>万能逼近定理（Universal Approximation Theorem，1989 年 Cybenko 证明）</strong>：只要激活函数是非线性的，一个单隐层神经网络在理论上就能逼近<strong>任意连续函数</strong>。这意味着——只要网络够大、数据够多——可以拟合<strong>任何</strong>输入-输出关系。

### 激活函数的进化史

- <strong>Sigmoid σ(x) = 1/(1+e⁻ˣ)</strong> — 1980s 主流。输出 0-1，像生物神经元的"发放率"。问题：两端梯度接近 0 → "梯度消失"。
- <strong>tanh(x)</strong> — 1990s 替代品。输出 -1 到 +1，中心化更好。但梯度消失依然存在。
- <strong>ReLU = max(0,x)</strong> — 2011 年横空出世（Glorot/Bengio）。极简暴力。彻底解决梯度消失。今天 GPT/ResNet 全用它。
- <strong>GELU / SiLU / Swish</strong> — 2017+。GPT-2、BERT 用 GELU。更平滑，适合 Transformer。

### 反向传播 + 非线性激活 = 深度学习的双重奠基

总结成一句话：<strong>反向传播解决"怎么自动调权重"，激活函数解决"为什么多层比单层强"</strong>。缺一不可。1986 年论文同时推广了两者，所以它被称为深度学习的复兴起点。

> 反向传播给了神经网络自学的能力。激活函数给了它弯曲现实的力量。两者合体——深度学习诞生。

---

## Geoffrey Hinton：那个在雪地里走了三十年的人

> 2024 年诺贝尔物理学奖。但从 1970 年代到 2012 年的四十年里，他一直是学术界的"少数派中的少数派"。

### 辛顿完整简历

- <strong>1947</strong> 生于伦敦温布尔登。曾曾祖父是 <strong>George Boole</strong>（布尔代数之父——计算机科学奠基人）。
- <strong>1970</strong> 剑桥大学实验心理学本科。最初想当物理学家，后转心理学。
- <strong>1978</strong> 爱丁堡大学 AI 博士。导师 Christopher Longuet-Higgins。<strong>研究方向：神经网络</strong>——当时全球做神经网络的博士生不超过 20 人。
- <strong>1978-80</strong> 在美国做博后。辗转加州大学圣迭戈分校——跟 <strong>Rumelhart</strong> 合作（后来一起发反向传播论文）。
- <strong>1982</strong> CMU 任教。发明 <strong>Boltzmann Machine</strong>。
- <strong>1986</strong> 与 Rumelhart、Williams 发表反向传播论文。Nature。被引 5 万+次。
- <strong>1987</strong> <strong>移居加拿大多伦多大学</strong>——原因：① 英国 AI 经费几乎为零（Lighthill 余毒）；② 反对美国军方（DARPA）资助 AI 研究的军事目的；③ 加拿大 CIFAR（加拿大高等研究院）给了一笔自由经费。
- <strong>1987-2012</strong> <strong>25 年"荒野时期"</strong>。多伦多大学计算机系，带着几个学生坚持做神经网络。主流学界冷眼。
- <strong>2004</strong> CIFAR 创立 <strong>"Learning in Machines & Brains"</strong> 项目，辛顿任负责人。这个项目把他、LeCun、Bengio 三人正式连接成铁三角。
- <strong>2006</strong> 发表"Deep Belief Nets"（预训练技巧），Science 论文。深度学习复兴起点。
- <strong>2012</strong> 学生 Krizhevsky 和 Sutskever 造 AlexNet，拿下 ImageNet。世界为之变色。
- <strong>2013</strong> 谷歌以 4400 万美元收购 DNNresearch（辛顿 3 人创业公司）。兼职谷歌。
- <strong>2018</strong> 与 LeCun、Bengio 共获<strong>图灵奖</strong>。
- <strong>2023</strong> 从谷歌辞职，公开警告 AI 存在性风险。
- <strong>2024</strong> <strong>诺贝尔物理学奖</strong>（与 John Hopfield 共享）——表彰其在人工神经网络方面的奠基性工作。

### 为什么他要"移居加拿大"？

1. <strong>英国没钱</strong> — Lighthill 报告余毒仍在。1987 年英国 AI 经费依然少得可怜。爱丁堡、帝国理工的神经网络组就几个人。
2. <strong>反对军方资助</strong> — 辛顿是坚定的和平主义者。DARPA 的钱他不想拿——因为 DARPA 要求"明确军事用途"。他说："我不想让我的算法变成武器。"
3. <strong>CIFAR 的自由</strong> — 加拿大高等研究院（CIFAR）给了他"不问产出"的基础研究经费——类似当年 ARPA 的 Lick 模式，但没有军方背景。
4. <strong>多伦多没人管他</strong> — 这是真话。多伦多大学不太关注 AI 是不是"时髦"领域——他们允许辛顿安静地带学生、发论文、不受压力。25 年的"安静"最终孕育了 AlexNet。

### 1987–2012：世界上最孤独的 AI 实验室

1987 年 LISP 机崩盘后，第二次 AI 寒冬来临。辛顿的情况：

> "1990 年代开会时，做神经网络的人一个房间能坐完。NeurIPS 的小组讨论只有十几个人参加。每次我投论文，审稿人第一句话就是 'why bother?'" —— Hinton, 2019 采访

但他坚持的三个武器后来改变了世界：<strong>受限玻尔兹曼机（RBM）</strong>、<strong>深度信念网络（DBN）</strong>、<strong>Dropout 正则化</strong>。以及——他培养了两个学生：<strong>Alex Krizhevsky</strong> 和 <strong>Ilya Sutskever</strong>。

> 别人在等 AI 春天，辛顿在加拿大的雪地里自己造了一个温室。25 年后，温室变成了火山。

---

## LeCun 与 CNN：那台读支票的机器，十年没人在乎

> 卷积神经网络（CNN）的发明和被忽视，是 AI 史上最典型的"对了但太早了"。

### Yann LeCun 简历

- <strong>1960</strong> 生于巴黎。
- <strong>1987</strong> 巴黎第六大学博士——师从 <strong>Bengio 的师兄们</strong>（法国连接主义学派）。读博期间就开始搞反向传播。
- <strong>1988</strong> 去多伦多跟辛顿做博后。
- <strong>1988</strong> 入职 <strong>AT&T 贝尔实验室</strong>。老板给了他一个任务：让机器识别手写字符。
- <strong>1989</strong> 发表 <strong>LeNet</strong>——世界第一个卷积神经网络。配合反向传播训练，能识别手写邮编和支票金额。
- <strong>1990s</strong> LeNet 被<strong>美国邮政、多家银行</strong>实际部署——90 年代美国约 10% 的手写支票由 CNN 处理。
- <strong>2003</strong> AT&T Labs 被拆分，LeCun 转去纽约大学任教。
- <strong>2013</strong> 加入 Facebook（Meta）AI Research 负责人。

### CNN 的核心直觉

<div class="svg-diagram">
  <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <g text-anchor="middle">
      <!-- 输入图 -->
      <rect x="20" y="80" width="80" height="80" rx="6" fill="#8fb89c" opacity="0.85"/>
      <text x="60" y="115" fill="#fff" font-size="11" font-weight="600">输入图像</text>
      <text x="60" y="132" fill="#fff" font-size="10">32×32 像素</text>
      <text x="60" y="180" fill="#9a948a" font-size="10">原始像素</text>

      <!-- 第1层 -->
      <rect x="140" y="60" width="80" height="120" rx="6" fill="#6b8cae" opacity="0.15" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="180" y="115" fill="#4a6885" font-size="11" font-weight="600">第1层</text>
      <text x="180" y="132" fill="#4a6885" font-size="10">边缘、角点</text>
      <text x="180" y="180" fill="#9a948a" font-size="10">局部特征</text>

      <!-- 第2层 -->
      <rect x="260" y="60" width="80" height="120" rx="6" fill="#6b8cae" opacity="0.25" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="300" y="115" fill="#4a6885" font-size="11" font-weight="600">第2层</text>
      <text x="300" y="132" fill="#4a6885" font-size="10">形状、纹理</text>
      <text x="300" y="180" fill="#9a948a" font-size="10">组合特征</text>

      <!-- 第3层 -->
      <rect x="380" y="60" width="80" height="120" rx="6" fill="#6b8cae" opacity="0.4" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="420" y="115" fill="#4a6885" font-size="11" font-weight="600">第3层</text>
      <text x="420" y="132" fill="#4a6885" font-size="10">物体部件</text>
      <text x="420" y="180" fill="#9a948a" font-size="10">眼睛、轮子</text>

      <!-- 输出 -->
      <rect x="500" y="80" width="80" height="80" rx="6" fill="#c9a876" opacity="0.85"/>
      <text x="540" y="115" fill="#fff" font-size="11" font-weight="600">输出</text>
      <text x="540" y="132" fill="#fff" font-size="10">"这是 6"</text>
      <text x="540" y="180" fill="#9a948a" font-size="10">分类结果</text>
    </g>
    <!-- 箭头 -->
    <polygon points="108,120 116,116 116,124" fill="#9a948a"/>
    <polygon points="228,120 236,116 236,124" fill="#9a948a"/>
    <polygon points="348,120 356,116 356,124" fill="#9a948a"/>
    <polygon points="468,120 476,116 476,124" fill="#9a948a"/>
    <!-- 底部说明 -->
    <text x="310" y="225" text-anchor="middle" fill="#6b665d" font-size="11">用小滤波器在图片上"滑动" → 提取局部特征 → 逐层抽象</text>
    <text x="310" y="245" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="500">参数共享：同一个滤波器在整张图上复用 → 参数量极小</text>
  </svg>
</div>

### 为什么它"对了但太早了"？

1. <strong>算力不够</strong> — 1989 年没有 GPU。LeNet 只有 5 层，图片只有 32×32 像素。稍微大一点的图就跑不动。
2. <strong>数据不够</strong> — 手写字符数据集只有几万张。不够训练更深的网络。
3. <strong>学界偏见</strong> — 1990 年代主流是 SVM（支持向量机）和手工特征（SIFT/HOG）。审稿人反复说 "neural nets are dead"。
4. <strong>应用面窄</strong> — 支票识别赚钱了但不性感。没人觉得"认字"能通往 AGI。

直到 2012 年——LeCun 的学生、辛顿的学生 Alex Krizhevsky 把 CNN 扔到 <strong>GPU</strong> 上、喂给 <strong>ImageNet</strong>（李飞飞准备的 1400 万张图片）——CNN 从"银行后台工具"一夜变成"整个计算机视觉的核心"。从 LeNet 到 AlexNet，<strong>23 年</strong>。

> LeCun 1989 年就造出了深度学习的眼睛。但世界还没有准备好给它足够多的图片看。

---

## LISP 机崩盘与第二次 AI 寒冬：一夜之间尸横遍野

> 如果第一次寒冬是"缓慢冻结"，第二次寒冬就是"雪崩"——毫无预警，瞬间压垮整个行业。

### 什么是 LISP 机？

1980 年代初，AI 程序主要用 LISP 语言写（麦卡锡 1958 年发明的）。LISP 语法复杂、内存消耗大，在通用计算机上跑得很慢。于是有公司造了<strong>专门跑 LISP 的定制硬件</strong>——LISP Machine。

- <strong>Symbolics（1980）</strong> — MIT spin-off，LISP 机第一品牌。一台卖 10 万美元+。
- <strong>LMI（1979）</strong> — 也是 MIT 黑客出来的，跟 Symbolics 打价格战。
- <strong>Texas Instruments Explorer</strong> — TI 也做了一台。
- <strong>Xerox InterLisp</strong> — 施乐的 PARC 也搞了一个。

1984 年全球 LISP 机市场约 4 亿美元。华尔街投资人蜂拥而入。Symbolics 是 AI 行业的"英伟达"。

### 1987 年——一夜崩盘

发生了什么？<strong>通用工作站（Sun、DEC）性能追上来了。</strong> 一台 Sun 工作站（2 万美元）跑 LISP 的速度开始逼近一台 Symbolics（10 万美元）。而且 Sun 还能干别的——LISP 机只能跑 LISP。

- <strong>1987 Q2</strong> Symbolics 季度亏损首次超过千万美元。股价开始雪崩。
- <strong>1987 Q4</strong> 华尔街对整个"AI 硬件"领域集体撤资。
- <strong>1988</strong> Symbolics、LMI 接连裁员 50%+。TI 放弃 Explorer 产品线。
- <strong>1989</strong> Symbolics 股价从最高点跌去 <strong>95%</strong> 以上。
- <strong>1993</strong> Symbolics 申请破产保护。LISP 机产业彻底死亡。

### 雪崩效应

LISP 机的崩盘拉垮了整个 AI 产业链。专家系统公司——IntelliCorp、Teknowledge、Carnegie Group——全部跟着崩盘（它们的产品都跑在 LISP 机上）。客户发现：花几百万买的专家系统，硬件没了、维护团队跑了、规则库更新不起来。

DARPA 也跟进削减——<strong>1988 年 DARPA 战略计算计划（SCI）正式结束</strong>，比原计划提前两年。原因：十年砸了 10 亿美元，承诺的"自动目标识别"、"战场管理 AI"都没做出来。

<div class="svg-diagram">
  <svg viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 大数字 -->
    <text x="310" y="90" text-anchor="middle" fill="#a82424" font-size="64" font-weight="900" opacity="0.85">-70%</text>
    <text x="310" y="120" text-anchor="middle" fill="#6b665d" font-size="13" letter-spacing="2">1987 — 1993 全球 AI 相关投资降幅</text>
    <!-- 两侧标注 -->
    <text x="100" y="60" fill="#9a948a" font-size="11">第一次寒冬（1974-80）</text>
    <text x="100" y="78" fill="#9a948a" font-size="10">缓慢窒息 · 学术经费</text>
    <text x="430" y="60" fill="#9a948a" font-size="11">第二次寒冬（1987-93）</text>
    <text x="430" y="78" fill="#9a948a" font-size="10">雪崩式 · 全面覆盖</text>
    <text x="100" y="160" fill="#9a948a" font-size="10">冻死理想主义者</text>
    <text x="430" y="160" fill="#9a948a" font-size="10">冻死商人</text>
  </svg>
</div>

> 第一次寒冬冻死的是理想主义者。第二次寒冬冻死的是商人。活下来的只有那些不需要钱也会继续做的人。

---

## 寒冬里活着的人：NAVLAB、LeCun、辛顿

> 1988–1993 年，当世界宣布"AI 已死"时，有三个实验室在冻土下默默发芽。

### NAVLAB：5000 英里无人车（1988）

卡内基梅隆大学 <strong>Dean Pomerleau</strong> 搞了一辆用<strong>神经网络控制</strong>的自动驾驶货车。训练方式很原始：人开车时摄像头拍照 → 记录方向盘角度 → 训练网络模仿人类驾驶。

1988 年他让这辆车在美国高速上跑了 <strong>5000 英里</strong>，安全员全程无事可做。这是深度学习第一次真正"上路"。但当时没有投资人相信一辆卡车后面的那个小型神经网络会改变世界——1988 年人们连 LISP 机都不想碰了。

> <strong>注</strong>：NAVLAB 团队后来的成员散布在 Waymo、Cruise、Aurora——2024 年美国自动驾驶头部公司几乎都能追溯到 CMU 这辆 88 年的卡车。

### LeCun 的银行后台（1989–1998）

当学界说 "neural nets are dead" 时，LeCun 在贝尔实验室安安静静地让 CNN 读手写支票。美国邮政每天数百万封信的邮编识别——也是 CNN 在做。<strong>他没发大论文，但他让 CNN 活着。</strong>

他后来说："90 年代做神经网络，得学会躲在应用的保护伞下。如果我写论文标题是 'Neural Network'，审稿人直接扔。我写 'Gradient-Based Learning Applied to Document Recognition'，就过了。"

### 辛顿在多伦多（1987–2006）

大洋彼岸的辛顿带着三五个学生，在多伦多大学做 Boltzmann Machine、Helmholtz Machine、Wake-Sleep 算法……每年发一两篇论文，几乎无人引用。2004 年 CIFAR 给了他新项目经费。2006 年他终于在 Science 上发了那篇"Deep Belief Nets"——这是深度学习正式回归主流学术的信号枪。

### 第三幕的隐喻

寒冬的作用——它杀死了跟风者，留下了信仰者。辛顿不是因为"坚持终于成功了"——是因为他在做的东西<strong>本来就对</strong>，只是时代还没准备好。NAVLAB 不是"走运"——是因为数据驱动学习<strong>本来就能开车</strong>，只是当时数据太少、芯片太慢。

这些人活下来了，不是因为顽固，是因为他们手上握着的——是<strong>对的地图</strong>。只不过通往目的地的路，还没铺完。

> AI 寒冬淘汰的不是差的，是贵的。留下的不是强的，是对的。

---

## 二十年三个教训

### 教训一：方向比砸钱重要

日本砸了 8.5 亿美元（1981 年币值），方向错了照样打水漂。辛顿拿着 CIFAR 几十万加元的年度经费，方向对了就够孕育一场革命。<strong>钱是必要条件，不是充分条件。</strong>

### 教训二：每次"AI 已死"都是在说"这条路不通"——但不代表所有路都不通

第一次寒冬冻死了"手工规则"的学术幻想。第二次寒冬冻死了"专用硬件+专家系统"的商业模式。但"从数据中学习"这条路——一直活着，只是在地下。

### 教训三：科学进步需要"避风港"

贝尔实验室让 LeCun 安静做 CNN；CIFAR 让辛顿安静带学生；多伦多大学不逼他转型。<strong>这些"不管你"的机构，最终给了深度学习活下来的空间。</strong> 今天如果要理解为什么加拿大 AI 这么强（Cohere、Anthropic 的 Dario Amodei、DeepMind 的联合创始人都跟多伦多/蒙特利尔有关系）——根源就在这里。

### 全局坐标

到第三幕结束时（1989 年），AI 的两大路线已经彻底清场：

- <strong>❌ 符号主义·专家系统</strong> — LISP 机崩了 / 知识瓶颈无解 / 不能自学 / → 被淘汰
- <strong>🌱 连接主义·神经网络</strong> — 反向传播+激活函数解锁 / CNN 已能干实活 / 缺的只是算力和数据 / → 等待 GPU 和互联网

1990 年代将是"等待"的十年。2000 年代将是"积累"的十年。<strong>2012 年，火山将正式爆发。</strong>

### 今日小酌

下次有人跟说"大模型是泡沫"——想想 1987 年。是的，那年 AI 产业确实崩了。但崩的是 LISP 机、是写了几万条规则的专家系统。<strong>被冻住的只是"当时的路"，不是"AI 本身"。</strong>

2025 年如果泡沫来了（红杉报告警告的那 6000 亿美元 GPU 投资），问题不是"AI 是不是假的"，而是"<strong>现在这些花钱方式对不对</strong>"。这正是 1987 年 LISP 机崩盘的翻版。

<strong>路错了会寒冬。但只要有人拿着对的地图继续走——春天一定回来。</strong>

---

*下一幕：1990s——统计革命与暗流涌动。*
