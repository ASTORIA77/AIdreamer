> <strong>第六幕 · 2012 — 2017</strong> ｜ AlexNet 碾压 ImageNet，ReLU 杀死梯度消失，Dropout 防止过拟合，残差连接让网络深入 152 层，AlphaGo 第 37 手震惊人类，李世石第 78 手证明人类尊严，Attention Is All You Need 改写一切。
>
> 这五年是深度学习从"学术突破"变成"改变世界"的五年。三根柱子搭上横梁，建筑拔地而起。

## AlexNet：两块游戏显卡引爆的革命

> ImageNet 竞赛上，一个三人小队用深度卷积神经网络把错误率从 26% 拍到 16%——一夜之间，整个计算机视觉领域换了跑道。

### 三个人

<strong>Alex Krizhevsky</strong>（乌克兰裔加拿大人，编程天才，代码写得极快）、<strong>Ilya Sutskever</strong>（以色列-加拿大人，辛顿最得意的学生之一，后来的 OpenAI 首席科学家）、<strong>Geoffrey Hinton</strong>（导师，精神领袖）。

他们在多伦多大学的一间小办公室里，用两块 <strong>NVIDIA GTX 580</strong>（每块约 600 美元，1.5GB 显存），训练了 6 天。成本：1200 美元显卡 + 一台普通工作站 + 电费。

### AlexNet 解决的两个核心问题

AlexNet 的成功本质上是解决了两个让深层 CNN"训不动"和"训过头"的问题：

- <strong>问题一：梯度消失 → ReLU 解决</strong> 深层网络用 Sigmoid 激活函数时，梯度在反向传播中逐层衰减到接近 0。底层参数几乎不更新——网络"深了等于白深"。AlexNet 用 ReLU 替代 Sigmoid，彻底解决了这个问题。
- <strong>问题二：过拟合 → Dropout 解决</strong> 6000 万参数的大网络很容易"背答案"——训练集上 100 分，测试集上不及格。Dropout 随机丢弃一半神经元，逼迫网络学到更鲁棒的特征，而不是死记硬背。

## ReLU：一个小学生都能懂的函数，杀死了梯度消失

> 从 Sigmoid 换成 ReLU，这件事看起来"太简单了"——但它可能是深度学习史上性价比最高的改进。

### Sigmoid 为什么会梯度消失？

Sigmoid 函数 σ(x) = 1/(1+e⁻ˣ)，输出范围 (0, 1)，最大梯度 0.25（在 x=0 处）。

Sigmoid 的梯度<strong>永远 ≤ 0.25</strong>。当你有 5 层网络，反向传播经过 5 次 Sigmoid 求导：0.25⁵ = 0.001。梯度衰减了 1000 倍。10 层？0.25¹⁰ ≈ 0.000001——底层参数几乎接收不到任何学习信号。

这就是为什么 2012 年之前大家"只能训 2—3 层"。不是不想深——是深了之后底层等于没训。

### ReLU 为什么解决了这个问题？

ReLU 函数 f(x) = max(0, x)：x > 0 时梯度 = 1（恒定），x ≤ 0 时梯度 = 0。

<div class="svg-diagram">
  <svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- Sigmoid 曲线 -->
      <rect x="30" y="30" width="270" height="180" rx="8" fill="#a89bc4" opacity="0.1" stroke="#a89bc4" stroke-width="1.2"/>
      <text x="165" y="48" text-anchor="middle" fill="#7a6ba0" font-size="13" font-weight="600">Sigmoid: σ(x) = 1/(1+e⁻ˣ)</text>
      <!-- 坐标轴 -->
      <line x1="70" y1="170" x2="280" y2="170" stroke="#9a948a" stroke-width="1"/>
      <line x1="175" y1="60" x2="175" y2="185" stroke="#9a948a" stroke-width="1"/>
      <!-- sigmoid 曲线 -->
      <path d="M 80 168 Q 130 168 160 130 Q 180 95 210 78 L 275 75" stroke="#a89bc4" stroke-width="2.5" fill="none"/>
      <text x="80" y="183" fill="#9a948a" font-size="9">-∞</text>
      <text x="270" y="183" fill="#9a948a" font-size="9">+∞</text>
      <text x="120" y="100" fill="#a89bc4" font-size="10">最大梯度 0.25</text>
      <text x="120" y="118" fill="#9a948a" font-size="10">5 层衰减：0.25⁵ = 0.001</text>
      <text x="120" y="135" fill="#9a948a" font-size="10">10 层衰减：0.25¹⁰ ≈ 0</text>

      <!-- ReLU -->
      <rect x="320" y="30" width="270" height="180" rx="8" fill="#8fb89c" opacity="0.12" stroke="#8fb89c" stroke-width="1.2"/>
      <text x="455" y="48" text-anchor="middle" fill="#5e8a6c" font-size="13" font-weight="600">ReLU: f(x) = max(0, x)</text>
      <!-- 坐标轴 -->
      <line x1="360" y1="170" x2="570" y2="170" stroke="#9a948a" stroke-width="1"/>
      <line x1="440" y1="60" x2="440" y2="185" stroke="#9a948a" stroke-width="1"/>
      <!-- ReLU 折线 -->
      <line x1="365" y1="170" x2="440" y2="170" stroke="#8fb89c" stroke-width="2.5"/>
      <line x1="440" y1="170" x2="560" y2="80" stroke="#8fb89c" stroke-width="2.5"/>
      <text x="358" y="183" fill="#9a948a" font-size="9">x≤0 → 0</text>
      <text x="500" y="183" fill="#9a948a" font-size="9">x>0 → x</text>
      <text x="395" y="100" fill="#8fb89c" font-size="10">梯度恒 = 1</text>
      <text x="395" y="118" fill="#9a948a" font-size="10">5 层衰减：1⁵ = 1.0</text>
      <text x="395" y="135" fill="#9a948a" font-size="10">10 层衰减：1¹⁰ = 1.0</text>

      <!-- 对比箭头 -->
      <text x="310" y="125" text-anchor="middle" fill="#c9a876" font-size="11" font-weight="600">替换</text>
    </g>
  </svg>
</div>

对比 5 层网络反向传播：Sigmoid 是 0.25×0.25×0.25×0.25×0.25 = 0.001（梯度衰减 1000 倍，底层参数几乎不更新）；ReLU 是 1×1×1×1×1 = 1.0（梯度完美传递，无论多少层，只要神经元是激活的，梯度就能原封不动传到底层）。

这就是为什么 ReLU 让"更深的网络"成为可能。AlexNet 8 层，但这个突破为后来的 VGG（19 层）、GoogLeNet（22 层）、ResNet（152 层）铺了路。

### ReLU 的简单之美

ReLU 的计算就是一个 <strong>if-else</strong>：正数原样输出，负数变 0。比 Sigmoid（要算指数函数）快了一个数量级。这意味着不仅梯度好了——<strong>训练速度也快了 6 倍</strong>（Krizhevsky 在论文中实测）。

简单 + 有效 + 快——这是深度学习里"大道至简"的典范。辛顿后来评价："我们在 Sigmoid 上浪费了 20 年。ReLU 太显而易见了，以至于没人想到去试。"

### Dropout：随机"断网"防止死记硬背

<div class="svg-diagram">
  <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 训练时 -->
      <rect x="30" y="30" width="270" height="160" rx="8" fill="#c9a876" opacity="0.12" stroke="#c9a876" stroke-width="1.5"/>
      <text x="165" y="50" text-anchor="middle" fill="#9a7a45" font-size="13" font-weight="600">训练时</text>
      <g>
        <!-- 全部神经元 -->
        <circle cx="80" cy="90" r="8" fill="#c9a876"/><circle cx="80" cy="130" r="8" fill="#efece6" stroke="#9a948a"/><circle cx="80" cy="170" r="8" fill="#c9a876"/>
        <circle cx="165" cy="80" r="8" fill="#efece6" stroke="#9a948a"/><circle cx="165" cy="120" r="8" fill="#c9a876"/><circle cx="165" cy="160" r="8" fill="#efece6" stroke="#9a948a"/>
        <circle cx="250" cy="100" r="8" fill="#c9a876"/><circle cx="250" cy="140" r="8" fill="#efece6" stroke="#9a948a"/>
      </g>
      <text x="165" y="200" text-anchor="middle" fill="#6b665d" font-size="10">实色=激活 · 空心=丢弃（约 50%）</text>
      <text x="165" y="215" text-anchor="middle" fill="#6b665d" font-size="10">每次相当于训练一个不同子网络</text>

      <!-- 测试时 -->
      <rect x="320" y="30" width="270" height="160" rx="8" fill="#8fb89c" opacity="0.12" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="455" y="50" text-anchor="middle" fill="#5e8a6c" font-size="13" font-weight="600">测试时</text>
      <g>
        <circle cx="370" cy="90" r="8" fill="#8fb89c"/><circle cx="370" cy="130" r="8" fill="#8fb89c"/><circle cx="370" cy="170" r="8" fill="#8fb89c"/>
        <circle cx="455" cy="80" r="8" fill="#8fb89c"/><circle cx="455" cy="120" r="8" fill="#8fb89c"/><circle cx="455" cy="160" r="8" fill="#8fb89c"/>
        <circle cx="540" cy="100" r="8" fill="#8fb89c"/><circle cx="540" cy="140" r="8" fill="#8fb89c"/>
      </g>
      <text x="455" y="200" text-anchor="middle" fill="#6b665d" font-size="10">所有神经元全部开启</text>
      <text x="455" y="215" text-anchor="middle" fill="#6b665d" font-size="10">输出乘 0.5 补偿训练缩放</text>
    </g>
  </svg>
</div>

训练时每次前向传播，随机将 50% 的神经元"关掉"（输出设为 0）→ 每次训练相当于用一个不同的"子网络" → 强迫每个神经元独立学习有用的特征 → 不能依赖其他神经元 → 不能"抱团作弊"。

直觉：像是每天上课随机换同桌。你不能永远依赖同一个人帮你——必须自己学会。测试时所有神经元都开启，但输出乘以 0.5（补偿训练时的缩放）。Dropout 将 AlexNet 的 Top-5 错误率从约 18% 降到了 16.4%——约 2 个百分点，在当时是巨大的提升。

### AlexNet 完整"药方"

- <strong>ReLU 激活</strong> 杀死梯度消失。让 8 层网络底层也能学。
- <strong>Dropout (p=0.5)</strong> 杀死过拟合。6000 万参数不再死记硬背。
- <strong>GPU 训练</strong> 两块 GTX 580，模型拆成两半各放一块卡上训练。6 天完成。
- <strong>数据增强</strong> 随机裁剪、水平翻转、颜色抖动——人为增加数据多样性。
- <strong>Local Response Norm</strong> 局部响应归一化（后来被 Batch Norm 取代）。
- <strong>重叠池化</strong> 池化窗口有重叠（stride < kernel），比不重叠池化好约 0.4%。

其中 <strong>ReLU + Dropout</strong> 是最关键的两个。没有 ReLU 就训不动，没有 Dropout 就过拟合。

## 残差连接（ResNet）："至少别比没学过更差"

> 残差连接的本质是"不至于梯度消失，啥也记不住"。更准确地说，它让网络有了一个保底：就算学废了，至少还能原样输出输入。

### 问题：更深不一定更好？

AlexNet 之后大家开始"卷深度"：VGG-16（16 层）、VGG-19（19 层）、GoogLeNet（22 层）。但微软研究院的<strong>何恺明</strong>发现一个反常现象：

<strong>56 层 < 20 层</strong>——56 层网络的训练误差居然比 20 层网络更高。不是过拟合（过拟合是训练好、测试差），56 层网络连训练集上都比 20 层差——说明网络太深之后，优化本身就出了问题。即使有 ReLU，极深网络的梯度传播依然会遇到困难。

### 残差连接：一条"高速公路"

<div class="svg-diagram">
  <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 普通网络 -->
      <rect x="30" y="30" width="260" height="100" rx="8" fill="#a89bc4" opacity="0.1" stroke="#a89bc4" stroke-width="1.2"/>
      <text x="160" y="48" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">普通网络</text>
      <rect x="60" y="65" width="60" height="22" rx="4" fill="#a89bc4" opacity="0.6"/><text x="90" y="80" text-anchor="middle" fill="#fff" font-size="10">层1</text>
      <rect x="135" y="65" width="60" height="22" rx="4" fill="#a89bc4" opacity="0.6"/><text x="165" y="80" text-anchor="middle" fill="#fff" font-size="10">层2</text>
      <rect x="210" y="65" width="60" height="22" rx="4" fill="#a89bc4" opacity="0.6"/><text x="240" y="80" text-anchor="middle" fill="#fff" font-size="10">层N</text>
      <g stroke="#9a948a" stroke-width="1.3" fill="none" marker-end="url(#ar61)">
        <defs><marker id="ar61" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#9a948a"/></marker></defs>
        <line x1="120" y1="76" x2="130" y2="76"/><line x1="195" y1="76" x2="205" y2="76"/>
      </g>
      <text x="80" y="108" fill="#6b665d" font-size="10">x</text>
      <text x="245" y="108" fill="#6b665d" font-size="10">H(x)</text>
      <text x="160" y="120" text-anchor="middle" fill="#9a948a" font-size="10">必须从头学完整映射 H(x)</text>

      <!-- 残差网络 -->
      <rect x="330" y="30" width="260" height="100" rx="8" fill="#8fb89c" opacity="0.12" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="460" y="48" text-anchor="middle" fill="#5e8a6c" font-size="12" font-weight="600">残差网络</text>
      <rect x="360" y="65" width="60" height="22" rx="4" fill="#8fb89c" opacity="0.7"/><text x="390" y="80" text-anchor="middle" fill="#fff" font-size="10">层1</text>
      <rect x="435" y="65" width="60" height="22" rx="4" fill="#8fb89c" opacity="0.7"/><text x="465" y="80" text-anchor="middle" fill="#fff" font-size="10">层2</text>
      <rect x="510" y="65" width="60" height="22" rx="4" fill="#8fb89c" opacity="0.7"/><text x="540" y="80" text-anchor="middle" fill="#fff" font-size="10">层N</text>
      <g stroke="#9a948a" stroke-width="1.3" fill="none" marker-end="url(#ar61)">
        <line x1="420" y1="76" x2="430" y2="76"/><line x1="495" y1="76" x2="505" y2="76"/>
      </g>
      <!-- 跳跃连接 -->
      <path d="M 360 105 L 350 105 L 350 130 L 590 130 L 590 105" stroke="#c9a876" stroke-width="2" fill="none" stroke-dasharray="5,3" marker-end="url(#ar61)"/>
      <text x="470" y="148" text-anchor="middle" fill="#9a7a45" font-size="10" font-weight="600">跳跃连接 (shortcut) → +x</text>
      <text x="380" y="108" fill="#6b665d" font-size="10">x</text>
      <text x="545" y="108" fill="#6b665d" font-size="10">F(x)+x</text>

      <!-- 关键含义 -->
      <rect x="30" y="170" width="560" height="95" rx="8" fill="#efece6" stroke="#9a948a" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="310" y="192" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="600">关键含义</text>
      <text x="310" y="212" text-anchor="middle" fill="#6b665d" font-size="11">网络只需学 F(x) = H(x) - x（残差：跟原始输入的差异）</text>
      <text x="310" y="230" text-anchor="middle" fill="#6b665d" font-size="11">若某层什么都没学到（F(x)=0），输出 = x 本身</text>
      <text x="310" y="248" text-anchor="middle" fill="#8fb89c" font-size="11" font-weight="600">→ 至少不会比不加这一层更差！最坏退化成"恒等映射"</text>
    </g>
  </svg>
</div>

### 为什么这解决了梯度传播问题？

从梯度角度看，普通网络梯度传播 ∂L/∂x = ∂L/∂H × ∂H/∂x——如果 ∂H/∂x 很小（某些层学偏了），梯度消失。

残差网络梯度传播 ∂L/∂x = ∂L/∂(F+x) × (∂F/∂x + <strong>1</strong>)——这个 +1 来自跳跃连接。<strong>关键洞察：无论 ∂F/∂x 多小（哪怕为 0），梯度传播中总有一个 +1 兜底！</strong> 梯度至少能以"1"的强度传回底层。网络再深，底层参数也永远能收到学习信号。

ResNet-152 有 152 层。如果没有残差连接，152 层网络训练不可能收敛。有了残差连接：152 层网络比 VGG-19 准确率高 8%。

### 影响

2015 年 12 月，何恺明的 <strong>ResNet-152</strong> 在 ImageNet 上拿到 <strong>3.57%</strong> 错误率——第一次超过人类水平（人类约 5.1%）。从此"深度"不再是瓶颈。残差连接后来成了几乎所有深度网络的标配——包括 GPT 系列的 Transformer 里，每一层都有残差连接。

> ReLU 让你训到 8 层。残差连接让你训到 1000 层。这两个发明合在一起，才让"深度学习"的"深度"名副其实。

## AlphaGo vs 李世石：第 37 手 和 第 78 手

> 所有人都记得 AlphaGo 第二局的第 37 手，但几乎没人谈李世石第四局的第 78 手。这两步棋加在一起，才是这场对局的完整故事。

### 背景速览

2016 年 3 月 9—15 日，韩国首尔四季酒店。<strong>DeepMind AlphaGo</strong> vs <strong>李世石</strong>（围棋世界冠军，当时被认为是活着的最伟大棋手之一）。五局制。赌注：100 万美元（谷歌出资，李世石赢了就拿走）。

赛前几乎所有职业棋手预测：李世石 5-0 或 4-1 轻松获胜。因为几个月前 AlphaGo 只是以 5-0 赢了欧洲冠军樊麾（二段），而李世石是九段——差距被认为是"业余和世界冠军"的距离。

### 第二局·第 37 手：机器的"不可能之着"

第二局，2016 年 3 月 10 日，第 37 手。AlphaGo 执黑，落在五路肩冲——一个人类棋手几乎永远不会考虑的位置。

解说的职业棋手第一反应是"这是 Bug 吧？"。观战的古力九段直接说"这步棋太臭了"。但 20 手之后大家意识到：<strong>这步棋布下了一个跨越 50 手的超远期战略</strong>——它在布局阶段就为中盘战斗埋下了伏笔。

<strong>技术解释</strong>：AlphaGo 的策略网络（Policy Network）给这步棋的先验概率极低（约万分之一）。但它的价值网络（Value Network）通过蒙特卡洛树搜索（MCTS）模拟了数百万局后续变化后，发现这步棋的胜率最高。换句话说：<strong>AI 发现了人类直觉看不到的"真理"</strong>。

### 第四局·第 78 手：人类的"神之一手"

第四局，2016 年 3 月 13 日，第 78 手。李世石执白，挖。

这是李世石在 1-3 落后、几乎所有人都认为他会 0-5 惨败时打出的绝地反击。这步"挖"落在一个极其精妙的位置。AlphaGo 在接下来的应对中出现了一连串失误——它的评估函数在这种极端局面下"崩了"。赛后分析显示，AlphaGo 在第 87 手左右已经知道自己要输了，但 DeepMind 团队没有设置投降功能，所以它继续下完了全局。

<strong>为什么 AlphaGo 崩了<strong>：李世石第 78 手创造了一个 AlphaGo 训练数据中</strong>极其罕见的局面类型<strong>。AlphaGo 的策略网络对这种局面没有"经验"，搜索树展开后的评估变得不准确。本质上是：</strong>人类棋手在极限压力下的创造力，找到了 AI 经验的盲区。</strong>

### 两步棋的对照

<div class="svg-diagram">
  <svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 第37手 -->
      <rect x="30" y="20" width="270" height="190" rx="10" fill="#c9a876" opacity="0.14" stroke="#c9a876" stroke-width="1.5"/>
      <text x="165" y="42" text-anchor="middle" fill="#9a7a45" font-size="14" font-weight="700">第 37 手 · AlphaGo</text>
      <text x="165" y="64" text-anchor="middle" fill="#6b665d" font-size="12" font-weight="600">"人类不会下的位置"</text>
      <text x="165" y="92" text-anchor="middle" fill="#6b665d" font-size="11">通过数百万次模拟</text>
      <text x="165" y="110" text-anchor="middle" fill="#6b665d" font-size="11">发现人类经验之外的真理</text>
      <text x="165" y="138" text-anchor="middle" fill="#9a7a45" font-size="11" font-weight="600">代表 AI 对人类的超越</text>
      <text x="165" y="158" text-anchor="middle" fill="#9a948a" font-size="10">不是"比你算得快"</text>
      <text x="165" y="176" text-anchor="middle" fill="#9a948a" font-size="10">而是"看到你看不到的东西"</text>

      <!-- VS -->
      <text x="310" y="120" text-anchor="middle" fill="#c9a876" font-size="22" font-weight="900">vs</text>

      <!-- 第78手 -->
      <rect x="320" y="20" width="270" height="190" rx="10" fill="#8fb89c" opacity="0.14" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="455" y="42" text-anchor="middle" fill="#5e8a6c" font-size="14" font-weight="700">第 78 手 · 李世石</text>
      <text x="455" y="64" text-anchor="middle" fill="#6b665d" font-size="12" font-weight="600">"AI 不会应对的手段"</text>
      <text x="455" y="92" text-anchor="middle" fill="#6b665d" font-size="11">在极端压力下的灵感创造</text>
      <text x="455" y="110" text-anchor="middle" fill="#6b665d" font-size="11">找到 AI 经验的空白地带</text>
      <text x="455" y="138" text-anchor="middle" fill="#5e8a6c" font-size="11" font-weight="600">代表人类对 AI 的反击</text>
      <text x="455" y="158" text-anchor="middle" fill="#9a948a" font-size="10">不是"比你强"</text>
      <text x="455" y="176" text-anchor="middle" fill="#9a948a" font-size="10">而是"在你没想到的地方出奇招"</text>
    </g>
  </svg>
</div>

### 第 78 手为什么同样值得被记住？

第四局是李世石在这场比赛中唯一赢的一局。AlphaGo 最终以 <strong>4:1</strong> 获胜。但第 78 手的意义不仅仅是"赢了一局"：

- <strong>技术意义</strong> 暴露了 AlphaGo（v18 版）的弱点：对训练分布外的极端局面处理能力不足。这直接推动了 DeepMind 开发 AlphaGo Zero（纯自我对弈，不依赖人类棋谱）。
- <strong>哲学意义</strong> 证明了 AI 并非无懈可击。在那个人人觉得"人类在 AI 面前毫无还手之力"的氛围里，第 78 手像一根火柴——证明人类的创造力在极限状态下仍有 AI 达不到的东西。
- <strong>情感意义</strong> 赛后新闻发布会上，李世石说："我从未因为赢一盘棋而感到如此幸福。"现场记者和 DeepMind 团队都流了泪。这不只是围棋——这是人类面对自己创造物时的尊严之战。
- <strong>竞技意义</strong> 这是人类在正式比赛中赢 AlphaGo 的最后一局。之后 AlphaGo Zero 对人类再无败绩。第 78 手是"人类最后的胜利之光"。

### 后续

- <strong>2017.01</strong> AlphaGo Master 以 60:0 横扫全球顶尖棋手（包括柯洁）在网络对弈平台。
- <strong>2017.05</strong> AlphaGo 3:0 击败柯洁（当时世界排名第一）。柯洁中途落泪。
- <strong>2017.10</strong> AlphaGo Zero 论文发表。完全不用人类棋谱，纯自我对弈 3 天后超过所有历史版本。
- <strong>2019</strong> 李世石宣布退役。理由："AI 是不可击败的。"

> "我失去了大部分信心……即使我成为第一，也有一个实体是我无法击败的。" —— 李世石，2019 年退役声明

> 所有人只记得第 37 手——机器超越人类的时刻。但第 78 手同样不应被遗忘——那是人类在被超越之后，依然展现出创造力的时刻。两步棋合在一起，才是完整的故事。

## Attention Is All You Need：机器在"看书"，不是在"听话"

> LSTM 把语言当成"一个字一个字听到"的序列。但机器处理文本的方式其实更像"一眼看完整页书"。Transformer 就是对这个现实的正确回应。而且 GPU 的并行计算能力，让这种"一次看完"的方式在硬件层面成为可能。

### LSTM 的根本假设：语言是"顺序"的

LSTM 处理句子"我 今天 想 吃 火锅"：时间步 1 读入"我"→ 更新记忆状态；时间步 2 读入"今天"→ 基于前一步更新记忆；时间步 3 读入"想"→ 基于前两步更新记忆……以此类推。

三个问题：
1. <strong>必须串行</strong> → 步骤 5 必须等步骤 1—4 全部算完 → GPU 并行能力浪费了
2. <strong>长距离遗忘</strong> → "我"的信息传到"火锅"时已经衰减了好几步
3. <strong>假设错误</strong> → 人在<strong>阅读</strong>时不是一个字一个字线性处理的

### 机器在"看书"不是"听话"

人"听话"时确实是顺序的——声波一个字一个字到达耳朵，没法"跳着听"。LSTM 模拟的就是这个过程。

但机器"处理文本"时，整段文字<strong>同时摆在内存里</strong>。机器不是在"听"——它是在"看一整页"。它可以同时看第 1 个字和第 100 个字。为什么要假装它只能从左到右一个字一个字读？

这个认知上的转变就是 Transformer 的核心前提：<strong>既然整段文本同时可见，为什么不让模型一次性看完所有位置之间的关系？</strong>

### Self-Attention：一次看完所有关系

<div class="svg-diagram">
  <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
    <g font-family="'Noto Sans SC', sans-serif">
      <!-- 左侧 LSTM 串行 -->
      <rect x="20" y="30" width="260" height="200" rx="8" fill="#a89bc4" opacity="0.1" stroke="#a89bc4" stroke-width="1.2"/>
      <text x="150" y="50" text-anchor="middle" fill="#7a6ba0" font-size="12" font-weight="600">LSTM 串行处理</text>
      <g>
        <rect x="45" y="70" width="55" height="26" rx="4" fill="#a89bc4" opacity="0.55"/><text x="72" y="87" text-anchor="middle" fill="#fff" font-size="10">我</text>
        <rect x="110" y="70" width="55" height="26" rx="4" fill="#a89bc4" opacity="0.55"/><text x="137" y="87" text-anchor="middle" fill="#fff" font-size="10">今天</text>
        <rect x="175" y="70" width="55" height="26" rx="4" fill="#a89bc4" opacity="0.55"/><text x="202" y="87" text-anchor="middle" fill="#fff" font-size="10">想</text>
        <rect x="45" y="110" width="55" height="26" rx="4" fill="#a89bc4" opacity="0.55"/><text x="72" y="127" text-anchor="middle" fill="#fff" font-size="10">吃</text>
        <rect x="110" y="110" width="55" height="26" rx="4" fill="#a89bc4" opacity="0.55"/><text x="137" y="127" text-anchor="middle" fill="#fff" font-size="10">火锅</text>
      </g>
      <!-- 串行箭头 -->
      <g stroke="#9a948a" stroke-width="1.3" fill="none" marker-end="url(#ar62)">
        <defs><marker id="ar62" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#9a948a"/></marker></defs>
        <line x1="100" y1="83" x2="105" y2="83"/><line x1="165" y1="83" x2="170" y2="83"/>
        <line x1="72" y1="96" x2="72" y2="105"/><line x1="137" y1="96" x2="137" y2="105"/>
      </g>
      <text x="150" y="160" text-anchor="middle" fill="#9a948a" font-size="10">必须按顺序：1→2→3→4→5</text>
      <text x="150" y="180" text-anchor="middle" fill="#9a948a" font-size="10">GPU 1 万核只能用 1 个</text>
      <text x="150" y="200" text-anchor="middle" fill="#a89bc4" font-size="10" font-weight="600">→ 9999 个核心闲着</text>

      <!-- 右侧 Transformer 并行 -->
      <rect x="300" y="30" width="300" height="200" rx="8" fill="#8fb89c" opacity="0.12" stroke="#8fb89c" stroke-width="1.5"/>
      <text x="450" y="50" text-anchor="middle" fill="#5e8a6c" font-size="12" font-weight="600">Transformer 同时算所有关系</text>
      <g>
        <rect x="325" y="70" width="50" height="26" rx="4" fill="#8fb89c" opacity="0.7"/><text x="350" y="87" text-anchor="middle" fill="#fff" font-size="10">我</text>
        <rect x="385" y="70" width="50" height="26" rx="4" fill="#8fb89c" opacity="0.7"/><text x="410" y="87" text-anchor="middle" fill="#fff" font-size="10">今天</text>
        <rect x="445" y="70" width="50" height="26" rx="4" fill="#8fb89c" opacity="0.7"/><text x="470" y="87" text-anchor="middle" fill="#fff" font-size="10">想</text>
        <rect x="505" y="70" width="50" height="26" rx="4" fill="#8fb89c" opacity="0.7"/><text x="530" y="87" text-anchor="middle" fill="#fff" font-size="10">吃</text>
        <rect x="545" y="110" width="50" height="26" rx="4" fill="#8fb89c" opacity="0.7"/><text x="570" y="127" text-anchor="middle" fill="#fff" font-size="10">火锅</text>
      </g>
      <!-- 全连接关系线 -->
      <g stroke="#c9a876" stroke-width="0.6" opacity="0.5">
        <line x1="350" y1="96" x2="410" y2="96"/><line x1="350" y1="96" x2="470" y2="96"/><line x1="350" y1="96" x2="530" y2="96"/>
        <line x1="410" y1="96" x2="470" y2="96"/><line x1="410" y1="96" x2="530" y2="96"/>
        <line x1="470" y1="96" x2="530" y2="96"/>
        <line x1="350" y1="96" x2="570" y2="110"/><line x1="410" y1="96" x2="570" y2="110"/><line x1="470" y1="96" x2="570" y2="110"/><line x1="530" y1="96" x2="570" y2="110"/>
      </g>
      <!-- 高亮 "吃↔火锅" -->
      <line x1="530" y1="96" x2="570" y2="110" stroke="#c9a876" stroke-width="3" opacity="0.95"/>
      <text x="585" y="108" fill="#9a7a45" font-size="10" font-weight="600">0.9</text>

      <text x="450" y="160" text-anchor="middle" fill="#9a948a" font-size="10">5×5=25 个关系同时计算</text>
      <text x="450" y="180" text-anchor="middle" fill="#9a948a" font-size="10">"吃↔火锅"不用等读完才知</text>
      <text x="450" y="200" text-anchor="middle" fill="#5e8a6c" font-size="10" font-weight="600">→ GPU 万核满载运转</text>
    </g>
  </svg>
</div>

Transformer 处理"我 今天 想 吃 火锅"时，不是顺序处理——而是同时计算所有词对之间的关系："我↔今天"权重 0.1、"我↔想"权重 0.3、"我↔吃"权重 0.2、"我↔火锅"权重 0.15、"吃↔火锅"权重 <strong>0.9</strong>（强关联！）、"今天↔想"权重 0.4……所有 25 个关系<strong>同时计算</strong>。不需要等"吃"读完了才知道它和"火锅"有关。"一眼看完整页书"——这才是机器处理文本的正确方式。

### GPU 并行 × Attention = 天作之合

LSTM + CPU/GPU：时间步 1 → 2 → 3 → … → N，串行。GPU 有 1 万个核心也只能用 1 个，其余 9999 个闲着。

Transformer + GPU：所有 N×N 个 attention 权重<strong>同时计算</strong>！所有 N 个位置的特征更新<strong>同时计算</strong>！GPU 的 1 万个核心全部满载运转。

<strong>结论</strong>：Transformer 不只是"更好的模型"——它是<strong>第一个真正能吃满 GPU 并行能力</strong>的语言模型。LSTM 在 GPU 上跑，就像用超级计算机发传真——硬件能力浪费了 90%。Transformer 在 GPU 上跑，才像用超级计算机做超级计算。

2006 年黄仁勋押注并行计算，2017 年 Transformer 成为并行计算在 AI 领域的完美消费者。两者的结合催生了 2020 年代的大模型时代。

### Transformer 的必然性

"这种算法的出现是必然的"——原因有四：

- <strong>硬件必然性</strong> GPU 的并行能力远未被充分利用。任何真正利用这种并行能力的模型都会获得压倒性的效率优势。这就像一条高速公路修好了但大家还在走小路——迟早有人会上高速。
- <strong>认知必然性</strong> 一旦有人意识到"机器处理文本 ≠ 人听话"这个认知转变——允许模型同时看所有位置就是自然结论。
- <strong>数学必然性</strong> 注意力机制（Attention）2014 年就在 Seq2Seq 翻译中出现了（Bahdanau Attention）。从"加一个 attention"到"只用 attention"只是一步之遥。
- <strong>工程必然性</strong> Google 做的是翻译——训练数据极大（几十亿句对），需要快速训练。LSTM 太慢。工程压力逼着他们寻找可并行化的架构。

### "Attention Is All You Need"的 8 位作者

这篇论文的作者团队后来的去向本身就是一个传奇：

- <strong>Ashish Vaswani</strong> → 离开 Google → 2021 年创立 <strong>Adept AI</strong>（后转入 Essential AI）
- <strong>Noam Shazeer</strong> → 离开 Google → 创立 <strong>Character.AI</strong> → 2024 年被 Google 重新挖回
- <strong>Niki Parmar</strong> → 离开 Google → 与 Vaswani 共同创立 Adept/Essential AI
- <strong>Jakob Uszkoreit</strong> → 离开 Google → 创立 <strong>Inceptive</strong>（AI 生物技术）
- <strong>Llion Jones</strong> → 离开 Google → 创立 <strong>Sakana AI</strong>（日本）
- <strong>Aidan Gomez</strong> → 创立 <strong>Cohere</strong>（企业大模型）
- <strong>Łukasz Kaiser</strong> → 加入 OpenAI
- <strong>Illia Polosukhin</strong> → 创立 <strong>NEAR Protocol</strong>（区块链）

8 位作者，创立了至少 6 家公司。每一家都是 AI 行业的重量级玩家。一篇论文孕育了一整个产业生态——这在科技史上极其罕见。

> LSTM 假设机器在"一个字一个字地听"。Transformer 承认了真相：机器在"一眼看完整页书"。这个认知修正 + GPU 的并行硬件 = 大模型时代的开幕式。

## 2012—2017：六年间发生了什么

- <strong>2012.09</strong> <strong>AlexNet</strong> 赢得 ImageNet。深度学习革命开始。
- <strong>2013.06</strong> <strong>Word2Vec</strong>（Google，Mikolov）。词向量时代。"king - man + woman = queen"。
- <strong>2014.06</strong> <strong>GAN</strong>（Goodfellow）。两个网络互相对抗生成图像。Ian Goodfellow 据说在酒吧喝酒时想到这个 idea。
- <strong>2014.09</strong> <strong>Seq2Seq + Attention</strong>（Bahdanau）。机器翻译质量飞跃——Attention 机制首次出现。
- <strong>2014.12</strong> <strong>Adam 优化器</strong>。几乎取代所有传统优化器，至今仍是默认选择。
- <strong>2015.02</strong> <strong>Batch Normalization</strong>（Ioffe & Szegedy）。加速训练 + 稳定训练的魔法。
- <strong>2015.12</strong> <strong>ResNet</strong>（何恺明）。残差连接解锁 152 层网络。ImageNet 错误率首次低于人类。
- <strong>2016.03</strong> <strong>AlphaGo vs 李世石</strong>。4:1。全球观众 2 亿+。AI 进入公众意识。
- <strong>2017.06</strong> <strong>"Attention Is All You Need"</strong>。Transformer 诞生。大模型时代的种子。
- <strong>2017.10</strong> <strong>AlphaGo Zero</strong>。不用人类知识，纯自我对弈 3 天超过所有历史版本。

六年。从 AlexNet 到 Transformer。中间每一步都建立在前一步的基础上：ReLU → 更深的网络 → BatchNorm → 残差连接 → 更更深的网络 → Attention → 去掉一切只留 Attention → <strong>Transformer</strong>。

## 火山已经喷发，岩浆正在重塑地表

### 本幕核心脉络

- <strong>AlexNet (2012)</strong> ReLU 杀死梯度消失 + Dropout 杀死过拟合 + GPU 训练 → 深度学习从理论变为现实
- <strong>ResNet (2015)</strong> 残差连接 = "学不好至少不变差" → 网络可以无限深 → 性能超过人类
- <strong>AlphaGo (2016)</strong> 第 37 手 = AI 超越人类直觉 / 第 78 手 = 人类极限创造力 → 完整的人机故事
- <strong>Transformer (2017)</strong> 承认"机器在看书不是听话" + 完美匹配 GPU 并行 → 大模型时代的操作系统

### 脉络点睛

第六幕的隐藏主题是：<strong>"突破往往来自认知的修正，而非工具的升级。"</strong>

ReLU 的突破来自"激活函数不必平滑"的认知修正——之前大家默认激活函数要可导、要平滑，ReLU 用一个折线打破了这个假设。ResNet 的突破来自"网络不必从头学完整映射"的认知修正——之前大家默认更深的网络要学更复杂的函数，何恺明说"让它学残差就好"。Transformer 的突破来自"机器不必像人一样顺序阅读"的认知修正——之前大家默认序列数据必须用序列模型处理，Vaswani 说"让它一次看完全部"。

三次认知修正，三次突破。工具（GPU、数据）早就就位了，真正缺的是换一种看问题的方式。

### 今日小酌

ReLU 是一个初中数学就能理解的函数：正数不变，负数归零。但它解锁了整个深度学习时代。有时候，最伟大的突破不是"更复杂"——是<strong>"终于敢简单"</strong>。

李世石第 78 手落子的时候全世界都在看着他。1-3 落后，所有人都在等他投降。他沉思了半小时，然后落了一步连 AI 都没预料到的棋。那一刻他不是在为"人类"战斗——他只是在为自己作为一个围棋手的尊严战斗。但那一步棋的回响，远远超出了棋盘。

<strong>"你们说 AI 在'学习语言'——不对。它在阅读。理解了这一点，Transformer 就只剩下工程问题了。"</strong>

---

*下一幕：2018—2023 大模型争霸——GPT、BERT、ChatGPT、扩散模型。从 Transformer 种子长出整片森林。*
