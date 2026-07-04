> <strong>第五幕 · 2000 — 2009</strong> ｜ 李飞飞用众包标了 1400 万张图，黄仁勋赌上并行计算，辛顿用预训练让深度网络复活，15 辆车无一跑完全程，谷歌用 16000 台 CPU 偷练语音，DeepMind 八个人的 Nature 梦。
>
> 这十年看起来只是"准备期"——但每一颗种子都是 2012 年大爆炸的弹药。

## 深度学习爆发的三根柱子

> 第四幕结尾说了——2012 年的火山缺的只有两样东西：足够的算力和足够的数据。2000 年代就是这两样东西到位的十年。加上辛顿 2006 年的算法突破，三根柱子全部就位。

<div class="svg-diagram">
  <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
    <!-- 三根柱子 -->
    <g font-family="'Noto Sans SC', sans-serif" text-anchor="middle">
      <!-- 数据 -->
      <rect x="60" y="70" width="120" height="120" rx="10" fill="#8fb89c" opacity="0.18" stroke="#8fb89c" stroke-width="1.8"/>
      <text x="120" y="100" fill="#5e8a6c" font-size="13" font-weight="600">📊 数据</text>
      <text x="120" y="128" fill="#6b665d" font-size="11">ImageNet</text>
      <text x="120" y="146" fill="#6b665d" font-size="11">1400 万张图</text>
      <text x="120" y="164" fill="#6b665d" font-size="11">AMT 众包</text>
      <text x="120" y="60" fill="#8fb89c" font-size="12" font-weight="600">2006—2009</text>

      <!-- 算力 -->
      <rect x="250" y="70" width="120" height="120" rx="10" fill="#c9a876" opacity="0.18" stroke="#c9a876" stroke-width="1.8"/>
      <text x="310" y="100" fill="#9a7a45" font-size="13" font-weight="600">⚡ 算力</text>
      <text x="310" y="128" fill="#6b665d" font-size="11">NVIDIA CUDA</text>
      <text x="310" y="146" fill="#6b665d" font-size="11">GPU 并行计算</text>
      <text x="310" y="164" fill="#6b665d" font-size="11">比 CPU 快 70 倍</text>
      <text x="310" y="60" fill="#c9a876" font-size="12" font-weight="600">2006—2007</text>

      <!-- 算法 -->
      <rect x="440" y="70" width="120" height="120" rx="10" fill="#a89bc4" opacity="0.18" stroke="#a89bc4" stroke-width="1.8"/>
      <text x="500" y="100" fill="#7a6ba0" font-size="13" font-weight="600">🧠 算法</text>
      <text x="500" y="128" fill="#6b665d" font-size="11">辛顿预训练</text>
      <text x="500" y="146" fill="#6b665d" font-size="11">深度信念网络</text>
      <text x="500" y="164" fill="#6b665d" font-size="11">解锁深层训练</text>
      <text x="500" y="60" fill="#a89bc4" font-size="12" font-weight="600">2006</text>
    </g>
    <!-- 汇聚箭头 -->
    <g stroke="#9a948a" stroke-width="1.5" fill="none" marker-end="url(#arr5)">
      <defs><marker id="arr5" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9a948a"/></marker></defs>
      <path d="M120,195 L120,215 L300,225"/>
      <path d="M310,195 L310,225"/>
      <path d="M500,195 L500,215 L320,225"/>
    </g>
    <!-- 火山 -->
    <g font-family="'Noto Sans SC', sans-serif" text-anchor="middle">
      <rect x="240" y="228" width="140" height="26" rx="13" fill="#c9a876"/>
      <text x="310" y="246" fill="#fff" font-size="13" font-weight="700">2012 · 火山爆发</text>
    </g>
  </svg>
</div>

缺任何一根柱子，2012 年都不会发生。而这十年的故事，就是三根柱子同时悄悄立起来的过程。

## 数据之柱：一个骑自行车的女人和 1400 万张图片

> 李飞飞做了一件当时所有人觉得"没意义"的事——给每张图片打标签。这件事后来成了深度学习胜利的充要条件之一。

### 李飞飞是谁？

- <strong>1976</strong> 生于北京，16 岁随父母移民美国新泽西。
- <strong>1999</strong> 普林斯顿大学物理学本科。
- <strong>2005</strong> 加州理工学院电气工程博士。
- <strong>2007</strong> 伊利诺伊大学助理教授，后转到斯坦福。
- <strong>2006—09</strong> 启动并完成 <strong>ImageNet</strong> 项目。
- <strong>2013</strong> 斯坦福 AI Lab 主任。
- <strong>2017—18</strong> Google Cloud AI 首席科学家（休假去的）。
- <strong>2024</strong> 被选入美国国家工程院。

### 为什么要标 1400 万张图？

2000 年代初，计算机视觉的标准数据集是 <strong>Caltech-101</strong>——101 个类别，每类几十张图片，总共才几千张。LeCun 的 MNIST 手写数字也只有 7 万张。

李飞飞的直觉是：<strong>人类婴儿在 3 岁前看到的图像数量是几亿张</strong>。如果数据集只有几千张，那算法再好也白搭——"你不能指望看了 10 张猫就能认出所有猫"。

> "我们需要整个世界的图片数据库。不是几百张，不是几千张——要几百万张、上千万张。" —— 李飞飞，2006 年在斯坦福的内部报告

同事们觉得她疯了。她的 tenure committee（终身教职评审委员会）警告她：不要在这种"没有算法创新"的项目上浪费时间。但她赌了。

### Amazon Mechanical Turk：世界上最大的"人肉标注工厂"

1400 万张图片怎么标？靠学生不可能——那得标到退休。2005 年亚马逊推出了 <strong>Amazon Mechanical Turk（AMT）</strong>——一个"微任务众包平台"。

<div class="svg-diagram">
  <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 请求者 -->
      <rect x="30" y="30" width="150" height="70" rx="8" fill="#8fb89c" opacity="0.2" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="105" y="55" text-anchor="middle" fill="#5e8a6c" font-size="13" font-weight="600">请求者</text>
      <text x="105" y="75" text-anchor="middle" fill="#6b665d" font-size="11">李飞飞团队</text>
      <text x="105" y="92" text-anchor="middle" fill="#6b665d" font-size="11">上传标注任务</text>

      <!-- 平台 -->
      <rect x="235" y="30" width="150" height="70" rx="8" fill="#c9a876" opacity="0.2" stroke="#c9a876" stroke-width="1.5"/>
      <text x="310" y="55" text-anchor="middle" fill="#9a7a45" font-size="13" font-weight="600">AMT 平台</text>
      <text x="310" y="75" text-anchor="middle" fill="#6b665d" font-size="11">分发任务</text>
      <text x="310" y="92" text-anchor="middle" fill="#6b665d" font-size="11">每张 $0.01—0.05</text>

      <!-- 标注员 -->
      <rect x="440" y="30" width="150" height="70" rx="8" fill="#6b8cae" opacity="0.2" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="515" y="55" text-anchor="middle" fill="#4a6c8a" font-size="13" font-weight="600">全球 Turker</text>
      <text x="515" y="75" text-anchor="middle" fill="#6b665d" font-size="11">美国 / 印度 / 菲律宾</text>
      <text x="515" y="92" text-anchor="middle" fill="#6b665d" font-size="11">领取并完成</text>

      <!-- 箭头 -->
      <g stroke="#9a948a" stroke-width="1.4" fill="none" marker-end="url(#a5b)">
        <defs><marker id="a5b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9a948a"/></marker></defs>
        <line x1="180" y1="65" x2="230" y2="65"/>
        <line x1="385" y1="65" x2="435" y2="65"/>
      </g>

      <!-- 质量控制 -->
      <rect x="150" y="135" width="320" height="65" rx="8" fill="#efece6" stroke="#9a948a" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="310" y="158" text-anchor="middle" fill="#6b665d" font-size="12" font-weight="600">质量控制</text>
      <text x="310" y="178" text-anchor="middle" fill="#6b665d" font-size="11">同一张图 3—5 人标 → 取多数一致</text>
      <text x="310" y="194" text-anchor="middle" fill="#6b665d" font-size="11">加"蜜罐"题（已知答案）筛掉乱标的人</text>

      <!-- 统计 -->
      <text x="310" y="218" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">167 国 · 48,940 名标注员 · 3 年 · 1400 万张 · 21,841 个类别</text>
    </g>
  </svg>
</div>

### 众包的伦理争议

AMT 被批评为"数字血汗工厂"——时薪经常低于最低工资。标注员没有保险、没有假期、随时被解雇。但它确实让 ImageNet 成为可能。这个矛盾至今仍是 AI 伦理讨论中的一个热点：<strong>大模型训练背后，有多少看不见的廉价人工？</strong>

2023 年《时代周刊》揭露 OpenAI 用肯尼亚工人以每小时不到 2 美元的价格标注有害内容——本质上跟 2006 年 ImageNet 的众包模式如出一辙。

### ImageNet 竞赛（ILSVRC）

- <strong>2010</strong> <strong>ILSVRC 第一届正式举行</strong>（数据集 2009 年发布，竞赛 2010 年开始）。1000 个类别，120 万张训练图，5 万张验证图。Top-5 错误率最优成绩：<strong>28.2%</strong>。
- <strong>方法</strong> 当时参赛团队用的全是<strong>手工特征</strong>：SIFT（尺度不变特征变换）+ HOG（方向梯度直方图）+ Fisher Vector + SVM 分类器。本质思路：人类设计"什么特征重要" → 机器按规则提取 → SVM 分类。
- <strong>2011</strong> 错误率降到 <strong>25.8%</strong>。依然是手工特征 + SVM。每年只改进一两个百分点。
- <strong>2012</strong> <strong>AlexNet 横空出世</strong>——错误率暴跌到 <strong>16.4%</strong>。跌了 10 个百分点！第二名还在用老方法（26.2%）。从此，手工特征时代彻底终结。

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 坐标轴 -->
      <line x1="70" y1="160" x2="580" y2="160" stroke="#9a948a" stroke-width="1.5"/>
      <line x1="70" y1="40" x2="70" y2="160" stroke="#9a948a" stroke-width="1.5"/>
      <text x="60" y="45" text-anchor="end" fill="#6b665d" font-size="10">30%</text>
      <text x="60" y="105" text-anchor="end" fill="#6b665d" font-size="10">20%</text>
      <text x="60" y="165" text-anchor="end" fill="#6b665d" font-size="10">10%</text>

      <!-- 2010 -->
      <rect x="130" y="56" width="80" height="104" fill="#8fb89c" opacity="0.55"/>
      <text x="170" y="50" text-anchor="middle" fill="#5e8a6c" font-size="13" font-weight="700">28.2%</text>
      <text x="170" y="178" text-anchor="middle" fill="#6b665d" font-size="11">2010</text>
      <text x="170" y="192" text-anchor="middle" fill="#9a948a" font-size="9">手工特征</text>

      <!-- 2011 -->
      <rect x="260" y="73" width="80" height="87" fill="#8fb89c" opacity="0.55"/>
      <text x="300" y="67" text-anchor="middle" fill="#5e8a6c" font-size="13" font-weight="700">25.8%</text>
      <text x="300" y="178" text-anchor="middle" fill="#6b665d" font-size="11">2011</text>
      <text x="300" y="192" text-anchor="middle" fill="#9a948a" font-size="9">手工特征</text>

      <!-- 2012 AlexNet 断崖 -->
      <rect x="390" y="112" width="80" height="48" fill="#c9a876" opacity="0.85"/>
      <text x="430" y="106" text-anchor="middle" fill="#9a7a45" font-size="15" font-weight="700">16.4%</text>
      <text x="430" y="178" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">2012</text>
      <text x="430" y="192" text-anchor="middle" fill="#9a7a45" font-size="9" font-weight="600">AlexNet · CNN</text>

      <!-- 断崖箭头 -->
      <g stroke="#c9a876" stroke-width="1.8" fill="none" stroke-dasharray="4,3" marker-end="url(#a5c)">
        <defs><marker id="a5c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#c9a876"/></marker></defs>
        <path d="M300,80 Q360,95 388,110"/>
      </g>
      <text x="355" y="92" fill="#9a7a45" font-size="10" font-weight="600">暴跌 10 个百分点</text>
    </g>
  </svg>
</div>

### 为什么 2010—11 年的手工特征方法只能到 25%？

- <strong>① 特征需要人设计</strong> SIFT 检测角点/边缘、HOG 统计梯度方向——这些是人类认为重要的特征。但很多对分类有用的"高层特征"（如物体轮廓、纹理组合）人类不知道怎么写。
- <strong>② 不能端到端优化</strong> 先提特征 → 再送分类器。两个阶段各管各的，无法联合优化。
- <strong>③ 泛化能力天花板</strong> 手工特征在"设计者见过的"场景里有效。换个光照、角度、遮挡——就不行了。
- <strong>④ 算力浪费</strong> 手工特征提取本身计算量也不小，但这些计算不是"在学习"——是在机械执行固定规则。

AlexNet 证明了：<strong>让 CNN 从像素到标签端到端学习——比人类设计特征强得多。</strong> 但前提是数据够大（ImageNet）+ 算力够强（GPU）。

> 李飞飞没有发明算法。她发明了让算法发挥作用的条件。这是一种更深层的贡献。

## 算力之柱：CUDA 与 GPU，黄仁勋赌的不是显卡

> CUDA 只是让 GPU 能做"通用并行计算"的一层接口。黄仁勋赌的真正的东西，是"并行计算会成为未来所有计算的底座"。这个赌注，价值今天 2 万亿美元市值。

### GPU 为什么天然适合 AI？

先理解 CPU 和 GPU 的本质区别：

<div class="svg-diagram">
  <svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- CPU 侧 -->
      <rect x="40" y="40" width="240" height="170" rx="10" fill="#6b8cae" opacity="0.12" stroke="#6b8cae" stroke-width="1.5"/>
      <text x="160" y="62" text-anchor="middle" fill="#4a6c8a" font-size="14" font-weight="700">CPU（少而精）</text>
      <g fill="#6b8cae" opacity="0.75">
        <rect x="70" y="80" width="32" height="32" rx="4"/>
        <rect x="110" y="80" width="32" height="32" rx="4"/>
        <rect x="150" y="80" width="32" height="32" rx="4"/>
        <rect x="190" y="80" width="32" height="32" rx="4"/>
        <rect x="230" y="80" width="32" height="32" rx="4"/>
      </g>
      <text x="160" y="130" text-anchor="middle" fill="#6b665d" font-size="11">4—64 个核心</text>
      <text x="160" y="150" text-anchor="middle" fill="#6b665d" font-size="11">每个核心极其强大</text>
      <text x="160" y="170" text-anchor="middle" fill="#6b665d" font-size="11">擅长复杂逻辑、分支判断</text>
      <text x="160" y="190" text-anchor="middle" fill="#6b665d" font-size="11">像一个全能博士生</text>
      <text x="160" y="208" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">一次做一件复杂的事</text>

      <!-- VS -->
      <text x="310" y="130" text-anchor="middle" fill="#c9a876" font-size="20" font-weight="900">VS</text>

      <!-- GPU 侧 -->
      <rect x="340" y="40" width="240" height="170" rx="10" fill="#c9a876" opacity="0.12" stroke="#c9a876" stroke-width="1.5"/>
      <text x="460" y="62" text-anchor="middle" fill="#9a7a45" font-size="14" font-weight="700">GPU（多而简）</text>
      <g fill="#c9a876" opacity="0.7">
        <!-- 大量小核心 -->
        <g>
          <rect x="358" y="78" width="16" height="16" rx="2"/><rect x="378" y="78" width="16" height="16" rx="2"/><rect x="398" y="78" width="16" height="16" rx="2"/><rect x="418" y="78" width="16" height="16" rx="2"/><rect x="438" y="78" width="16" height="16" rx="2"/><rect x="458" y="78" width="16" height="16" rx="2"/><rect x="478" y="78" width="16" height="16" rx="2"/><rect x="498" y="78" width="16" height="16" rx="2"/><rect x="518" y="78" width="16" height="16" rx="2"/><rect x="538" y="78" width="16" height="16" rx="2"/>
          <rect x="358" y="98" width="16" height="16" rx="2"/><rect x="378" y="98" width="16" height="16" rx="2"/><rect x="398" y="98" width="16" height="16" rx="2"/><rect x="418" y="98" width="16" height="16" rx="2"/><rect x="438" y="98" width="16" height="16" rx="2"/><rect x="458" y="98" width="16" height="16" rx="2"/><rect x="478" y="98" width="16" height="16" rx="2"/><rect x="498" y="98" width="16" height="16" rx="2"/><rect x="518" y="98" width="16" height="16" rx="2"/><rect x="538" y="98" width="16" height="16" rx="2"/>
          <rect x="358" y="118" width="16" height="16" rx="2"/><rect x="378" y="118" width="16" height="16" rx="2"/><rect x="398" y="118" width="16" height="16" rx="2"/><rect x="418" y="118" width="16" height="16" rx="2"/><rect x="438" y="118" width="16" height="16" rx="2"/><rect x="458" y="118" width="16" height="16" rx="2"/><rect x="478" y="118" width="16" height="16" rx="2"/><rect x="498" y="118" width="16" height="16" rx="2"/><rect x="518" y="118" width="16" height="16" rx="2"/><rect x="538" y="118" width="16" height="16" rx="2"/>
        </g>
      </g>
      <text x="460" y="155" text-anchor="middle" fill="#6b665d" font-size="11">数千到上万个核心</text>
      <text x="460" y="172" text-anchor="middle" fill="#6b665d" font-size="11">擅长同时做大量简单运算</text>
      <text x="460" y="190" text-anchor="middle" fill="#6b665d" font-size="11">像一万个小学生同时做加法</text>
      <text x="460" y="208" text-anchor="middle" fill="#9a948a" font-size="10" font-style="italic">一次做一万件简单的事</text>
    </g>
  </svg>
</div>

神经网络训练的核心运算是什么？<strong>矩阵乘法</strong>。矩阵乘法的本质：大量元素做"乘加"运算，彼此独立，可以同时进行。这恰好是 GPU 的天赋。

以一个 4096×4096 的矩阵乘法为例：CPU 做法是一个核心逐行逐列计算，约 1.37 亿次乘加，串行执行，慢；GPU 做法是把 4096×4096 个结果分配给上千个核心<strong>同时算</strong>，并行，快 100 倍以上。神经网络训练等于几十亿次矩阵乘法——CPU 要算几个月，GPU 几天搞定。

### CUDA：让 GPU 不只画游戏画面

GPU 原本只干一件事：渲染 3D 游戏画面（把三角形变成像素）。它的硬件是并行的，但<strong>编程接口只支持图形操作</strong>，不能直接让它做科学计算。

<strong>2006 年</strong>，NVIDIA 发布 <strong>CUDA（Compute Unified Device Architecture）</strong>——一套让程序员可以用类 C 语言在 GPU 上写<strong>任意并行计算</strong>的工具。从此 GPU 不再只是"显卡"，而是"通用并行计算芯片"。

### 黄仁勋赌的到底是什么？

2006 年的赌注：当时 NVIDIA 年收入约 30 亿美元，几乎全来自游戏 GPU。开发 CUDA 需要投入大量工程资源（编译器、工具链、文档、培训），而这些资源不会帮你多卖一块游戏显卡。华尔街分析师问：为什么要花钱让科学家用你的显卡？

黄仁勋的逻辑链：

1. 摩尔定律放缓 → CPU 单核性能增长见顶
2. 未来计算的增长 = <strong>并行化</strong>（同时做很多事）而非"单核更快"
3. 谁能让并行计算最简单最便宜 → 谁就是下一个英特尔
4. GPU 天生并行 → 只要给它一个好的编程接口 → 就能吃掉所有并行计算市场

他不是在赌"AI 会火"——2006 年他不知道 AI。他赌的是：<strong>并行计算会成为一切计算的底座。AI 只是最大的受益者。</strong>

### 从 2006 到 2012：GPU + AI 的连接是怎么发生的？

- <strong>2006—07</strong> CUDA 发布。最早的用户是物理学家（分子动力学模拟）、金融工程师（期权定价）。
- <strong>2008</strong> NVIDIA 注意到一小群 AI 研究者开始把神经网络搬到 GPU 上跑——速度提升 10—50 倍。
- <strong>2009</strong> 斯坦福 Andrew Ng 团队发表论文《Large-scale Deep Unsupervised Learning using Graphics Processors》——用 GPU 训练深度网络比 CPU 快 <strong>70 倍</strong>。
- <strong>2010</strong> NVIDIA 开始主动找 AI 研究者合作，提供免费显卡。
- <strong>2011</strong> 辛顿的学生 Krizhevsky 开始用两块 <strong>GTX 580</strong>（游戏显卡，每块 600 美元）训练 CNN。
- <strong>2012</strong> <strong>AlexNet</strong>：两块 GTX 580，训练 6 天，拿下 ImageNet 冠军。GPU + 深度学习时代正式开启。

注意时间线：从 CUDA 发布到 AlexNet，中间只有 <strong>5 年</strong>。但这 5 年里 NVIDIA 做对了一件关键的事——<strong>不断改进 CUDA 的易用性</strong>，让不是硬件工程师的 AI 研究者也能轻松使用 GPU。如果 CUDA 很难用，Krizhevsky 可能就不会尝试。

> 黄仁勋 2006 年赌的是并行计算。2012 年 AI 给了他第一个大回报。2024 年 AI 给了他 2 万亿美元市值。——这可能是科技史上回报率最高的一次下注。

## 算法之柱：辛顿 2006 年预训练，深度网络为什么终于能"训动"了

> 在 GPU 和大数据到位之前，辛顿先解决了一个更基础的问题——"深度网络为什么一直训不好？"

### 2006 年之前的困境

理论上，深度网络（很多层）比浅层网络强。但实际中：

- <strong>① 梯度消失/爆炸</strong> 反向传播经过太多层后，梯度要么趋近于零（底层学不动），要么爆炸到无穷大（训练崩溃）。
- <strong>② 随机初始化的灾难</strong> 权重随机初始化后，深层网络的初始状态太"混乱"——梯度下降迷失在 Loss 曲面的某个坑里出不来。

结果就是：2006 年之前能稳定训练的网络最多 2—3 层。更深的网络效果反而比浅层差。

### 辛顿的解法：逐层预训练（Greedy Layer-wise Pre-training）

<div class="svg-diagram">
  <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- Step 1 -->
      <rect x="30" y="30" width="130" height="60" rx="8" fill="#a89bc4" opacity="0.3" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="95" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">Step 1</text>
      <text x="95" y="68" text-anchor="middle" fill="#6b665d" font-size="10">用 RBM 预训练第 1 层</text>
      <text x="95" y="82" text-anchor="middle" fill="#6b665d" font-size="10">学会好的初始特征</text>

      <!-- Step 2 -->
      <rect x="190" y="30" width="130" height="60" rx="8" fill="#a89bc4" opacity="0.3" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="255" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">Step 2</text>
      <text x="255" y="68" text-anchor="middle" fill="#6b665d" font-size="10">固定第 1 层</text>
      <text x="255" y="82" text-anchor="middle" fill="#6b665d" font-size="10">预训练第 2 层</text>

      <!-- Step 3 -->
      <rect x="350" y="30" width="130" height="60" rx="8" fill="#a89bc4" opacity="0.3" stroke="#a89bc4" stroke-width="1.5"/>
      <text x="415" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">Step 3</text>
      <text x="415" y="68" text-anchor="middle" fill="#6b665d" font-size="10">固定 1—2 层</text>
      <text x="415" y="82" text-anchor="middle" fill="#6b665d" font-size="10">预训练第 3 层 …</text>

      <!-- 箭头 -->
      <g stroke="#9a948a" stroke-width="1.4" fill="none" marker-end="url(#a5d)">
        <defs><marker id="a5d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9a948a"/></marker></defs>
        <line x1="160" y1="60" x2="185" y2="60"/>
        <line x1="320" y1="60" x2="345" y2="60"/>
      </g>

      <!-- 逐层堆完 -->
      <text x="560" y="62" fill="#7a6ba0" font-size="11" font-weight="600">…逐层堆完</text>
      <line x1="480" y1="60" x2="540" y2="60" stroke="#9a948a" stroke-width="1.4" marker-end="url(#a5d)"/>

      <!-- 最后微调 -->
      <rect x="150" y="140" width="320" height="70" rx="10" fill="#c9a876" opacity="0.22" stroke="#c9a876" stroke-width="2"/>
      <text x="310" y="165" text-anchor="middle" fill="#9a7a45" font-size="14" font-weight="700">最后：端到端微调（Fine-tuning）</text>
      <text x="310" y="186" text-anchor="middle" fill="#6b665d" font-size="11">用有标签数据整体优化</text>
      <text x="310" y="202" text-anchor="middle" fill="#6b665d" font-size="11">初始权重已经很好 → 微调很快收敛</text>

      <!-- 汇聚箭头 -->
      <g stroke="#c9a876" stroke-width="1.6" fill="none" stroke-dasharray="4,3" marker-end="url(#a5d)">
        <path d="M95,92 Q95,120 250,145"/>
        <path d="M255,92 Q255,120 300,140"/>
        <path d="M415,92 Q415,120 370,145"/>
      </g>

      <!-- 本质 -->
      <text x="310" y="245" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="600">本质：避免"从完全随机出发训练深层网络"的死局</text>
      <text x="310" y="265" text-anchor="middle" fill="#9a948a" font-size="11">先给每一层一个好的起点，再整体微调</text>
    </g>
  </svg>
</div>

### 这跟今天的"预训练 + 微调"是什么关系？

是的——<strong>GPT 的"Pre-training + Fine-tuning"范式，概念源头就在这里</strong>。

- 辛顿 2006：RBM 逐层预训练 + 微调
- 2018 GPT-1：大规模语言预训练 + 下游微调
- 2022 ChatGPT：预训练 + RLHF 对齐

当然方法完全不同了——辛顿用的 RBM/DBN 在 2012 年后就被淘汰了（直接用更好的初始化 + ReLU + Batch Normalization 取代了逐层预训练的需求）。但<strong>"先在大量无标签数据上预训练，再在小量有标签数据上微调"</strong>这个范式思想，确实是辛顿 2006 年建立的。

### 这篇论文的命运

2006 年这篇《A Fast Learning Algorithm for Deep Belief Nets》发在 Science 上。它是辛顿在多伦多孤独 20 年后的<strong>第一声信号枪</strong>——告诉全世界：深度网络不是训不了，是你们方法不对。

论文至今被引用超过 <strong>5 万次</strong>。辛顿后来回忆："2006 年之前，我投论文审稿人第一反应是'why bother'。这篇之后，他们开始说'interesting, but...'。到 2012 年 AlexNet 之后，他们改说'how can I join'。"

> 辛顿在 2006 年证明了：深度网络不是不行——是需要一个好的起点。这个思想叫"预训练"。今天每一个 GPT 都在用它。

## 2004—2005：DARPA 自动驾驶挑战赛，一场"全军覆没"的伟大失败

> 15 辆车没有一辆跑完全程。但这场失败聚集了整个自动驾驶行业的创始人。

### 2004 年第一届：沙漠里的大溃败

2004 年 3 月 13 日，加州莫哈韦沙漠。DARPA 悬赏 <strong>100 万美元</strong>给第一辆能自动跑完 142 英里沙漠赛道的车。15 支队伍参赛。结果：

<strong>最远距离 7.4 英里</strong>——CMU 的 Sandstorm 号，142 英里赛道只跑了 5%。

大部分车在起点附近就翻了、撞了、卡了。有一辆车冲进了灌木丛起火。另一辆车绕着同一棵仙人掌转了 15 分钟。观众们笑成一团——但 DARPA 说："明年再来。"

### 2005 年第二届：奇迹发生了

- <strong>奖金翻倍</strong> 200 万美元。这次吸引了更多团队。
- <strong>冠军</strong> 斯坦福 <strong>"Stanley"</strong> 号（Sebastian Thrun 团队），7 小时跑完 132 英里全程。
- <strong>亚军</strong> CMU <strong>"Sandstorm"</strong> 号（Red Team），仅落后 11 分钟。
- <strong>共 5 辆车</strong> 完成了全程——从上一年"0 辆完成"到"5 辆完成"，仅隔一年。

Sebastian Thrun 因此获得 DARPA 的认可，后来被 Google 挖走创建了 <strong>Google Self-Driving Car Project</strong>（Waymo 前身）。CMU Red Team 的成员后来创建了 <strong>Aurora</strong>、<strong>Argo AI</strong>、<strong>Cruise</strong>。

> 2004 年的失败不是结束。它让全世界最聪明的人第一次聚在一起思考同一个问题。一年后他们就解决了。

2007 年 DARPA 举办了 Urban Challenge（城市赛），CMU 的 Boss 号获胜。此后 DARPA 不再举办——因为已经"毕业"了，行业自己在跑。

## 2009：谷歌的秘密武器，16000 台 CPU 训练语音识别

> 2009 年谷歌确实还在用 CPU。因为当时 CUDA 刚发布不久，还没有成熟的深度学习 GPU 框架。谷歌选择了另一条路：用"数量"碾压。

### Jeff Dean 和"Google Brain"前传

<strong>Jeff Dean</strong> 是谷歌最传奇的工程师（内部称"Level 11"——谷歌工程师最高级别只到 10）。2009 年他和 <strong>Andrew Ng</strong>（吴恩达）在谷歌内部启动了一个秘密项目：用大规模神经网络做语音识别。

### 为什么用 16000 台 CPU 而不用 GPU？

- <strong>① 2009 年 GPU 生态不成熟</strong> CUDA 刚发布 2—3 年，深度学习框架还没出现（TensorFlow 要到 2015 年）。没有现成工具把大型神经网络跑在 GPU 集群上。
- <strong>② 谷歌有现成的 CPU 集群</strong> 谷歌的数据中心本来就有几十万台服务器。把 1.6 万台 CPU 联网做<strong>数据并行</strong>，对谷歌来说只是"改改配置"的事。
- <strong>③ 模型并行 vs 数据并行</strong> 他们把训练数据分成 1.6 万份，每份在一台 CPU 上训练一个模型副本，然后定期同步梯度。这就是<strong>分布式训练</strong>的雏形。
- <strong>④ 验证了一个关键假设</strong> 实验证明：给神经网络喂<strong>足够多</strong>的数据 + <strong>足够大</strong>的模型 = 语音识别准确率飙升。——这就是后来"Scaling Law"的早期证据。

### 结果与影响

语音识别错误率从传统方法的约 30% 骤降到约 23%。谷歌内部震惊——但选择保密。2011 年他们发表论文时，学界才知道谷歌已经秘密验证了"大规模神经网络 + 大数据 = 碾压传统方法"这个公式。

这个项目后来正式命名为 <strong>Google Brain</strong>（2011）。成员包括：Jeff Dean、Andrew Ng、以及后来的 <strong>Ilya Sutskever</strong>（辛顿的学生，后来的 OpenAI 首席科学家）。

> 2009 年谷歌用 CPU 暴力证明了：Scaling Works。三年后 AlexNet 用 GPU 优雅地证明了同一件事。两条路最终汇合成一个真理——大力出奇迹。

从 CPU 到 GPU 的转变时间线：2009 谷歌 16000 CPU → 2012 AlexNet 2×GPU → 2015 TensorFlow 发布 → 2017 谷歌 TPU v2 → 2023 GPT-4 约 25000×A100 GPU。

真正让 GPU 成为 AI 标配的转折点确实是 2012 年 AlexNet。2009 年谷歌用 CPU 是因为"GPU 生态还没到位"。AlexNet 之后，所有人都意识到：GPU 才是正道。

## 2010—2014：DeepMind，八个人、一篇论文、一张 5 亿美元的入场券

> 他们这么早发 Nature 这件事，时间线要分清楚。DeepMind 的故事是 2010 年创立，但那篇 Nature 论文要到 2015 年才正式发表。不过他们 2013 年的预印本确实已经震动了学界。

### Demis Hassabis 是谁？

- <strong>1976</strong> 生于伦敦，希腊-新加坡混血。
- <strong>1989（13 岁）</strong> 国际象棋评级仅次于同龄世界第一。
- <strong>17 岁</strong> 进入游戏公司 Bullfrog（Peter Molyneux 的公司），设计了《主题公园》等经典游戏。
- <strong>1997</strong> 剑桥大学计算机科学学位。
- <strong>2009</strong> UCL 认知神经科学博士。研究<strong>海马体与记忆系统</strong>——这直接影响了 DeepMind 的技术路线。
- <strong>2010</strong> 与 Shane Legg、Mustafa Suleyman 共同创立 <strong>DeepMind</strong>。

Hassabis 的独特之处：他同时是<strong>游戏设计师（理解奖励和目标）+ 神经科学家（理解大脑如何学习）+ 棋手（理解搜索和策略）</strong>。这三个身份交汇，让 DeepMind 的研究路线从一开始就不同——他们要做的不是"更大的网络"，而是"像大脑一样学习的 Agent"。

### 关键论文：DQN（深度 Q 网络）

2013 年 12 月，DeepMind 在 arXiv 上传预印本《Playing Atari with Deep Reinforcement Learning》。

做了什么：一个单一的神经网络，只看屏幕像素 → 自己学会玩 7 种 Atari 游戏，其中 3 种超过了人类玩家水平（Breakout、Pong、Enduro）。

为什么重要：
1. 不需要给它规则——它从"试错"中自学
2. 同一个网络玩不同游戏——通用性
3. 只看像素——不需要人工告诉它"球在哪"

2015 年 2 月正式发表于 Nature，《Human-level control through deep reinforcement learning》。49 种 Atari 游戏中 29 种超过人类。

### 时间线纠正

完整故事是这样的：

- <strong>2010</strong> DeepMind 成立。3 位创始人 + 约 5 名早期员工。伦敦。
- <strong>2010—12</strong> 内部研究强化学习 + 神经网络的结合。没有公开论文。
- <strong>2013.12</strong> DQN 预印本上传 arXiv。学界震动——因为之前没人把深度学习和强化学习成功结合过。
- <strong>2014.01</strong> <strong>谷歌以约 5 亿美元收购 DeepMind</strong>。此时 DeepMind 只有约 50 人，年营收为零。
- <strong>2015.02</strong> DQN 论文正式发 Nature。
- <strong>2016</strong> AlphaGo 击败李世石。

谷歌收购 DeepMind 时，他们手上只有：一篇 Atari 游戏论文 + 一个"要造通用人工智能"的愿景 + Hassabis 这个人。5 亿美元买的是<strong>人和方向</strong>，不是产品。——2024 年 Hassabis 拿了诺贝尔化学奖（AlphaFold），证明这 5 亿花得值。

> 2010 年的 DeepMind 只有 8 个人和一个疯狂的梦。2024 年他们拿了诺贝尔奖。这中间只隔了 14 年——但前提是，有人愿意为一个梦下 5 亿美元的注。

## 2000 年代，三根柱子全部就位

### 十年总结清单

- <strong>数据就位</strong> ImageNet 1400 万张标注图 + AMT 众包模式成熟 + 互联网规模数据可获取
- <strong>算力就位</strong> CUDA 2006 发布 → 2009 年 GPU 训练神经网络比 CPU 快 70 倍 → 2011 年游戏显卡 GTX 580 已够训 AlexNet
- <strong>算法就位</strong> 辛顿 2006 预训练解锁深度网络 → 证明"深层可以比浅层好"
- <strong>生态就位</strong> DARPA 挑战赛训练了一代自动驾驶工程师 / 谷歌验证了 Scaling Law / DeepMind 探索了强化学习 + 深度学习的结合

### 脉络点睛

第五幕的隐藏主题是：<strong>"革命发生前，条件必须同时满足。"</strong>

2006 年辛顿有了算法但没有 GPU 和大数据。2009 年谷歌有了 CPU 集群和数据但没有 GPU 效率。2010 年 ImageNet 竞赛开始但参赛者还在用手工特征。——所有人都在等一个把三者<strong>同时用上</strong>的人。

2012 年，辛顿的两个学生 Krizhevsky 和 Sutskever 做了这件事：<strong>ImageNet 的数据 + GPU 的算力 + 深度 CNN 的算法 = AlexNet</strong>。

第六幕，火山正式爆发。

### 今日小酌

下次听到有人说"AI 就是烧钱堆算力"——记得 ImageNet 是一个助理教授骑自行车说服同事、然后花 3 年用众包标注出来的。<strong>数据不是天上掉的，是有人一张一张标出来的。</strong>

下次有人嘲笑 NVIDIA"只是卖显卡的"——记得 2006 年黄仁勋赌的不是"显卡"，是"并行计算将吃掉世界"。每一代正确判断只需要一个洞察，但坚持那个洞察需要十年的孤独。这一点辛顿和黄仁勋一模一样。

<strong>革命不是一瞬间发生的。它是三根柱子一根一根立起来，最后有人把横梁搭上去的那一刻。</strong>

---

*下一幕：2010—2017 深度学习大爆炸——AlexNet、GAN、AlphaGo、Transformer。火山正式喷发。*
