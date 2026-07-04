> <strong>第一幕 · 1950 — 1959</strong> ｜ 从图灵的"模仿游戏"到罗森布拉特的感知机，从达特茅斯一个夏天的提案，到鬼魅程序里那群崩溃的"小鬼"。
>
> 这一幕里有天才，有悲剧，有错过，也有一个被洛克菲勒砍掉一半经费的会议——却定义了之后七十五年。

## 图灵：那个被苹果带走的男人

> 如果 AI 有族谱，最顶上那个名字一定是 Alan Turing。但他从未见过自己点燃的火。

### 简历速写：一个数学神童的二十年

- <strong>1912</strong> 生于伦敦，父亲在印度做殖民官，他被寄养在英国乡下。
- <strong>1926（14岁）</strong> 进入舍伯恩公学。开学那天英国大罢工，他骑自行车骑了 100 公里到校。校长说："这孩子不正常，但很厉害。"
- <strong>1931–1934</strong> 入读剑桥大学国王学院，数学一等学位。22岁当选 Fellow。
- <strong>1936</strong> 发表《On Computable Numbers》——提出<strong>图灵机</strong>，AI 与计算机科学的奠基石。
- <strong>1936–1938</strong> 赴普林斯顿大学读博，师从逻辑学家丘奇（Alonzo Church）。导师组里还有冯·诺依曼。
- <strong>1939–1945</strong> 二战期间在布莱切利园（Bletchley Park）破译德军 Enigma 密码，据估计让二战提前两年结束，挽救了上千万生命。
- <strong>1945–1948</strong> 在英国国家物理实验室（NPL）设计 ACE 计算机。
- <strong>1948</strong> 转赴曼彻斯特大学，参与 Manchester Mark 1 的研发。
- <strong>1950</strong> 发表《Computing Machinery and Intelligence》——提出"模仿游戏"。
- <strong>1952</strong> 因同性恋被英国法院定罪（当时英国为非法），被迫接受<strong>雌激素化学阉割</strong>。
- <strong>1954-06-07</strong> 在曼彻斯特家中身亡，年仅 <strong>41 岁</strong>。床头是一颗咬了一口的氰化苹果。

### 图灵机：用极简模型证明"什么可以被计算"

说人话——图灵机就是一台想象中的机器：

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg">
    <!-- 纸带格子 -->
    <g font-family="ui-monospace, monospace" font-size="18" text-anchor="middle">
      <rect x="30" y="60" width="56" height="56" rx="6" fill="#6b8cae" opacity="0.85"/>
      <rect x="90" y="60" width="56" height="56" rx="6" fill="#efece6" stroke="#c9a876" stroke-width="1.5"/>
      <rect x="150" y="60" width="56" height="56" rx="6" fill="#6b8cae" opacity="0.85"/>
      <rect x="210" y="60" width="56" height="56" rx="6" fill="#6b8cae" opacity="0.85"/>
      <rect x="270" y="60" width="56" height="56" rx="6" fill="#efece6" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
      <rect x="330" y="60" width="56" height="56" rx="6" fill="#efece6" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
      <rect x="390" y="60" width="56" height="56" rx="6" fill="#efece6" stroke="#9a948a" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="58" y="94" fill="#fff" font-weight="600">1</text>
      <text x="118" y="94" fill="#9a7a45" font-weight="600">0</text>
      <text x="178" y="94" fill="#fff" font-weight="600">1</text>
      <text x="238" y="94" fill="#fff" font-weight="600">1</text>
      <text x="298" y="94" fill="#c8c4ba">_</text>
      <text x="358" y="94" fill="#c8c4ba">_</text>
      <text x="418" y="94" fill="#c8c4ba">…</text>
    </g>
    <!-- 读写头 -->
    <g>
      <rect x="92" y="120" width="52" height="22" rx="4" fill="#c9a876"/>
      <text x="118" y="136" text-anchor="middle" fill="#fff" font-size="11" font-family="'Noto Sans SC', sans-serif">读写头</text>
      <polygon points="118,116 110,122 126,122" fill="#c9a876"/>
    </g>
    <!-- 标注 -->
    <text x="310" y="170" text-anchor="middle" fill="#6b665d" font-size="12" font-family="'Noto Sans SC', sans-serif">一条无限长的纸带 · 读写头能读/写/左右移动 · 一张规则表决定下一步</text>
    <text x="60" y="50" fill="#9a948a" font-size="11" font-family="'Noto Sans SC', sans-serif">数据存在格子里</text>
    <text x="118" y="160" text-anchor="middle" fill="#9a7a45" font-size="11" font-family="'Noto Sans SC', sans-serif">当前读写位置</text>
  </svg>
</div>

三个零件：<strong>一条无限纸带</strong>（存数据）+ <strong>一个读写头</strong>（读、写、移动）+ <strong>一张规则表</strong>（在状态 A 看到 0 时该做什么）。就这。

但图灵证明了一件极其震撼的事——<strong>任何"算法"都能被这台简陋的机器模拟</strong>。今天我们手里的 iPhone、ChatGPT 后面的 H100 集群，本质上都是一台"足够快的图灵机"。这就是计算机科学的"<strong>邱奇-图灵论题</strong>"。

> 什么是"算法"？
>
> 算法就是一组明确的、可机械执行的步骤。比如"煮泡面"是算法：①烧水 ②水开下面 ③三分钟捞出。图灵的伟大在于——他用最少的零件，定义了"算法能解决的边界"。他甚至证明：<strong>有些问题永远没有算法</strong>（停机问题）。这是 AI 必须正视的天花板之一。

### 1950 那篇论文：模仿游戏的真正聪明之处

当时学界吵翻天："机器能思考吗？" 图灵冷笑——这问题没法回答，因为"思考"本身没定义。他干脆耍了个赖：

> "不要问机器能不能思考。问：如果我们和一台机器隔着幕布聊天，五分钟后分不清对方是人是机器——那它和'思考'还有什么区别？"

这就是 <strong>图灵测试（Imitation Game）</strong>。它的高明之处在于：把哲学问题转成了<strong>工程问题</strong>。从此 AI 有了一个可操作的"北极星"——让机器装得越来越像人。今天的 ChatGPT 本质上就是在玩这个游戏。

论文里图灵还预言：到 2000 年，机器有 30% 的概率能骗过普通人 5 分钟。这个预言……直到 2014 年才勉强算实现。GPT-4 出来后，2023 年图灵测试基本被宣告"过时"——机器骗人已经太容易了。

### 图灵案：一颗咬了一口的苹果

1952 年，图灵家里被盗。他报警时坦诚自己有一位男性伴侣——他完全没意识到这在当时的英国是<strong>刑事犯罪</strong>（"严重猥亵罪"）。法庭给他两个选择：坐牢，或者接受"雌激素治疗"（化学阉割）。他选了后者，因为想继续做研究。

药物副作用让他长出乳房、抑郁、肥胖。他失去了所有政府密级许可（毕竟他知道太多 Enigma 的秘密）。1954 年 6 月 7 日，他在家中去世，床头是一颗咬了一口的氰化苹果。

> <strong>官方认定为自杀，但他母亲坚持认为是化学实验意外。</strong> 苹果上的氰化物从未被正式检测。2009 年英国首相布朗代表政府正式道歉。2013 年女王赦免。他的故事直到电影《模仿游戏》（2014）才被大众真正知道。

> 他给了世界一台思考机器的图纸——世界却因为他爱谁，把他杀了。

---

## 香农与信息论：AI 课本里那位"消失的奠基者"

> 我们学 AI 时大概率没听过他的名字。但打开 ChatGPT 的每一秒，背后都有他签的名。

### 谁是 Claude Shannon？

美国数学家、电气工程师。1937 年 21 岁的他在 MIT 写的硕士论文，被誉为"20 世纪最重要的硕士论文"——他用<strong>布尔代数</strong>统一了电路设计，让数字电路第一次有了数学语言。

1948 年，他在贝尔实验室发表《A Mathematical Theory of Communication》，凭一己之力创立了<strong>信息论</strong>。1950 年他又写了那篇 AI 史上第一篇正式的象棋程序论文——但当时几乎没人注意到。

### 信息论到底是啥？

一句话：<strong>信息论是给"信息"称重的学科。</strong>

香农问了一个最朴素的问题：打电话告诉朋友"明天太阳从东边升起"——这传递了多少信息？答案是：<strong>零</strong>。因为这是必然事件。

那"明天上海下雪"呢？信息量就很大，因为概率很低。香农据此定义了一个量——<strong>比特（bit）</strong>，用来度量"惊讶程度"。

> <strong>熵 H(X) 的直觉</strong>
>
> 一个事件越不确定，它的熵就越高。抛硬币（正反 50/50）的熵 = 1 bit。如果硬币 99% 出正面，熵就接近 0。
>
> <strong>熵越高 = 越混乱 = 越难压缩 = 信息量越大。</strong>

### 为什么 AI 课本好像不怎么提它？

不是不提，是被"藏起来了"。其实我们学过的几乎所有 AI 核心概念都来自信息论：

- <strong>交叉熵损失 Cross-Entropy</strong> — 训练 ChatGPT 用的损失函数，就是信息论的"两个分布之间的距离"。
- <strong>KL 散度</strong> — VAE、强化学习里到处都是，本质是"两个概率分布的熵之差"。
- <strong>互信息 Mutual Information</strong> — 特征选择、表示学习的核心指标。
- <strong>困惑度 Perplexity</strong> — 评估语言模型好坏的标准，就是熵的指数形式。
- <strong>压缩与生成</strong> — "压缩即智能"，OpenAI 的 Sutskever 在 2023 年公开演讲里反复强调这是 GPT 的本质。
- <strong>信道容量</strong> — 整个深度学习里"信息瓶颈理论（Information Bottleneck）"都直接来自香农。

所以更准确地说：<strong>香农就是 AI 的"地基钢筋"——我们看不到他，是因为他被浇进了水泥里。</strong>

### 香农的另一面：杂耍、独轮车、火焰喷射器

这位老爷子工作之余喜欢造怪机器：一台叫 Theseus 的机械老鼠能自己学迷宫（1950 年的"学习机器"！）；一台会自动还原魔方的机器；一辆带火焰喷射器的独轮车……他在贝尔实验室骑独轮车上下班，一边骑一边抛球。

> 图灵给了 AI 思考的形式，香农给了 AI 思考的度量。

---

## 达特茅斯会议：洛克菲勒砍了一半经费的那个夏天

> 他们要 13500 美元，洛克菲勒给了 7500。但这一半的钱，买下了一个学科的命名权。

### 1955 年的那份提案

1955 年 8 月 31 日，四个人坐在一起写了一份提案：

- <strong>John McCarthy</strong> — 达特茅斯学院助理教授，28 岁。提案的发起人和主笔。
- <strong>Marvin Minsky</strong> — 哈佛初级研究员，28 岁。神经网络派早期信徒（后来叛变）。
- <strong>Claude Shannon</strong> — 贝尔实验室数学家，39 岁。信息论之父。
- <strong>Nathaniel Rochester</strong> — IBM 工程师，36 岁。IBM 701 主设计师。

麦卡锡说："我们要给这个领域取个名字，叫 <strong>Artificial Intelligence</strong>（人工智能）。"——为什么不叫"自动机理论"或"复杂信息处理"？因为这两个都被冯·诺依曼和西蒙占了山头，麦卡锡不想被前辈拿捏。<strong>"AI"这个名字，部分是政治选择。</strong>

### 找洛克菲勒要钱

提案核心就一句话：

> "我们设想，只要一组精挑细选的科学家在一起合作一个夏天，就能在人工智能的某些方面取得重大进展。"

这句话日后被誉为"AI 史上最自信的废话"。他们申请了 <strong>13500 美元</strong>（相当于今天 16 万美元）。洛克菲勒基金会觉得太狂，砍了一半——只批了 <strong>7500 美元</strong>。

### 1956 年夏天：那个房间里其实坐着至少 10 个未来传奇

会议为期 6–8 周，断断续续来去的人不只是四位发起人，还包括：

- <strong>Allen Newell & Herbert Simon</strong> — 卡内基理工的两位狠人。会议上演示了第一个真正能跑的 AI 程序——<strong>Logic Theorist</strong>（逻辑理论家），能证明《数学原理》前 52 条定理，其中一条证明比罗素本人的还要漂亮。<strong>西蒙 1978 年诺贝尔经济学奖、纽厄尔 1975 年图灵奖。</strong>
- <strong>Arthur Samuel</strong> — IBM 工程师，带来了世界第一个会"自学"的跳棋程序。他第一次用了"<strong>Machine Learning</strong>"这个词。
- <strong>Ray Solomonoff</strong> — 后来奠定了"<strong>算法概率论</strong>"，AI 数学基础之一。
- <strong>Oliver Selfridge</strong> — 后面会出场——"鬼魅程序"的作者，模式识别开山祖师。
- <strong>Trenchard More</strong> — 数学家，后来在 IBM 开发 APL 语言。

### "什么都没做出来"——但定义了之后 70 年

客观说，这场会议没产出像样的成果：没有联合论文，没有路线图，甚至没有共识。麦卡锡晚年回忆："大家都想自己说话，没人想听别人讲。"

但它有四个永远的功绩：

1. <strong>命名</strong> — "Artificial Intelligence"正式成为学科名。
2. <strong>圈子</strong> — 这个房间里日后走出 2 位图灵奖、1 位诺奖、整个领域的核心圈。
3. <strong>路线分裂</strong> — 麦卡锡-明斯基的<strong>符号主义</strong> vs 罗森布拉特一脉的<strong>连接主义</strong>，在这里埋下种子。
4. <strong>浪漫主义</strong> — "一个夏天解决智能"——这种自信至今仍是 AI 圈的精神底色。

### 四位发起人后来怎么样了？

- <strong>McCarthy</strong> — 发明 LISP 语言（1958）、创立斯坦福 AI 实验室、提出"时间共享"概念（云计算雏形）。<strong>1971 年图灵奖。</strong>
- <strong>Minsky</strong> — 创立 MIT AI 实验室。1969 年那本《Perceptrons》一手冰封连接主义十年（第二幕主角）。<strong>1969 年图灵奖。</strong>
- <strong>Shannon</strong> — 信息论奠基者已成圣，继续在贝尔实验室造怪机器。1956 后基本退出 AI 一线，专心研究投资和杂耍。
- <strong>Rochester</strong> — 继续在 IBM 主持神经网络模拟项目，是<strong>最早用真实计算机模拟神经网络</strong>的人之一。今天提的人不多，但 IBM 的 AI 火种从他这点燃。

> 7500 美元，买下了一个学科的命名权。这是科技史上最划算的一次砍价。

---

## 感知机：深度学习真正的祖父

> 罗森布拉特造的不是程序，是一台实体机器。它会闪灯、会出错、会"学习"。深度学习今天每一行代码，都是他的孙子。

### Frank Rosenblatt 是谁？

康奈尔大学心理学博士（注意：<strong>不是计算机系，是心理学系</strong>）。1928 年生，比图灵小 16 岁。在康奈尔航空实验室工作，研究"如何让机器像大脑一样学习"。

1957 年他造出了 <strong>Mark I Perceptron</strong>——一台真实的机器，房间大小，由 400 个光电管模拟视网膜，连接到一组带可调电阻的"神经元"。这些电阻就是<strong>权重</strong>——会根据正确或错误的反馈自动调整。

<div class="svg-diagram">
  <svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 光电管 -->
    <g text-anchor="middle" font-size="11">
      <circle cx="60" cy="50" r="9" fill="#8fb89c" opacity="0.85"/>
      <circle cx="60" cy="80" r="9" fill="#8fb89c" opacity="0.85"/>
      <circle cx="60" cy="110" r="9" fill="#8fb89c" opacity="0.85"/>
      <circle cx="60" cy="140" r="9" fill="#8fb89c" opacity="0.85"/>
      <circle cx="60" cy="170" r="9" fill="#8fb89c" opacity="0.85"/>
      <circle cx="60" cy="200" r="9" fill="#8fb89c" opacity="0.85"/>
      <text x="60" y="30" fill="#5e8f6b" font-weight="600" font-size="12">光电管</text>
      <text x="60" y="222" fill="#9a948a" font-size="10">400个视网膜</text>
    </g>
    <!-- 连接线（随机） -->
    <g stroke="#c9a876" stroke-width="1" opacity="0.4">
      <line x1="69" y1="50" x2="285" y2="70"/>
      <line x1="69" y1="50" x2="285" y2="120"/>
      <line x1="69" y1="80" x2="285" y2="70"/>
      <line x1="69" y1="80" x2="285" y2="170"/>
      <line x1="69" y1="110" x2="285" y2="120"/>
      <line x1="69" y1="110" x2="285" y2="170"/>
      <line x1="69" y1="140" x2="285" y2="120"/>
      <line x1="69" y1="140" x2="285" y2="220"/>
      <line x1="69" y1="170" x2="285" y2="170"/>
      <line x1="69" y1="170" x2="285" y2="220"/>
      <line x1="69" y1="200" x2="285" y2="220"/>
      <line x1="69" y1="200" x2="285" y2="70"/>
    </g>
    <!-- 权重节点 -->
    <g text-anchor="middle">
      <rect x="280" y="60" width="60" height="24" rx="4" fill="#c9a876" opacity="0.85"/>
      <rect x="280" y="110" width="60" height="24" rx="4" fill="#c9a876" opacity="0.85"/>
      <rect x="280" y="160" width="60" height="24" rx="4" fill="#c9a876" opacity="0.85"/>
      <rect x="280" y="210" width="60" height="24" rx="4" fill="#c9a876" opacity="0.85"/>
      <text x="310" y="48" fill="#9a7a45" font-weight="600" font-size="12">权重 w</text>
      <text x="310" y="76" fill="#fff" font-size="10">可调电阻</text>
      <text x="310" y="126" fill="#fff" font-size="10">可调电阻</text>
      <text x="310" y="176" fill="#fff" font-size="10">可调电阻</text>
      <text x="310" y="226" fill="#fff" font-size="10">可调电阻</text>
    </g>
    <!-- 输出 -->
    <g>
      <line x1="340" y1="125" x2="430" y2="125" stroke="#6b8cae" stroke-width="1.5"/>
      <circle cx="460" cy="125" r="28" fill="#6b8cae" opacity="0.85"/>
      <text x="460" y="122" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">输出</text>
      <text x="460" y="138" text-anchor="middle" fill="#fff" font-size="10">是/否</text>
    </g>
    <!-- 反馈回路 -->
    <path d="M 460 155 Q 460 200 310 200 Q 200 200 200 250" fill="none" stroke="#a89bc4" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="380" y="250" text-anchor="middle" fill="#7567a0" font-size="11" font-weight="500">误差反馈调整权重</text>
    <text x="540" y="125" fill="#9a948a" font-size="10">← 1957 年的</text>
    <text x="540" y="138" fill="#9a948a" font-size="10">训练循环！</text>
  </svg>
</div>

### 为什么说他是深度学习祖父？

因为他几乎做对了所有事：

1. <strong>数据驱动</strong> — 不是写规则，是给样本让机器自己学。
2. <strong>权重 + 反馈</strong> — 正是今天反向传播（BP）的灵魂。
3. <strong>物理实现</strong> — 不是仿真，是真硬件——可视为最早的"AI 芯片"。
4. <strong>多层架构构想</strong> — 他在论文里就提到了"多层感知机"，只是当时算力做不到训练。

从感知机 → 1986 反向传播 → 2012 AlexNet → 2017 Transformer → 2022 ChatGPT，是一条<strong>没断过的香火</strong>。

### 《纽约时报》头版与国会听证

1958 年 7 月 8 日，《纽约时报》头版：

> "海军今天展示了一台电子计算机的胚胎，它将能够走路、说话、看见、写作、自我复制，并意识到自己的存在。"

夸张到离谱。但当年的罗森布拉特就是 AI 界的"<strong>Sam Altman + 马斯克</strong>"——会演示、会吹、会上电视。他还真的去国会作证，议员问："它能不能识别罪犯？"——他沉默了。这是 AI 伦理焦虑最早的化石。

### 悲剧的伏笔

罗森布拉特和明斯基是布朗士科学高中的<strong>同班同学</strong>。两人 1969 年彻底翻脸：明斯基的《Perceptrons》证明单层感知机连 XOR 都解不了，神经网络研究瞬间被冻结十年（第二幕主线）。

> <strong>1971 年 7 月 11 日，罗森布拉特 43 岁生日当天，在切萨皮克湾驾驶帆船时意外溺水身亡。</strong> 死因疑点重重，至今仍有阴谋论流传。他没有看到自己理论的胜利——而 2024 年图灵奖颁给辛顿时，致辞里第一句就提到了他的名字。

> 他在 1957 年造出的那台机器，是 ChatGPT 真正的曾祖父。

---

## 鬼魅程序：1959 年的"多智能体系统"

> 名字听起来像恐怖片，其实是认知科学史上最浪漫的一个隐喻。

### Oliver Selfridge 与他的"小鬼们"

Selfridge 是图灵的剑桥同学、香农在 MIT 的学生、达特茅斯会议成员之一。模式识别（Pattern Recognition）这个领域几乎是他一个人开创的。

1959 年，他发表论文《Pandemonium: A paradigm for learning》。Pandemonium 是弥尔顿《失乐园》里的"群魔殿"——他想象计算机里住着一群"鬼（demon）"，每只鬼负责识别一种小特征，谁喊得最大声，谁的判断就被采纳。

### 结构：四层小鬼，从下到上吼到最高层

<div class="svg-diagram">
  <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 四层结构 -->
    <g text-anchor="middle">
      <!-- 决策鬼 -->
      <rect x="200" y="20" width="240" height="48" rx="8" fill="#a89bc4" opacity="0.85"/>
      <text x="320" y="42" fill="#fff" font-size="13" font-weight="600">决策鬼 Decision Demon</text>
      <text x="320" y="60" fill="#fff" font-size="10">谁喊得最大，听谁的</text>
      <!-- 认知鬼 -->
      <rect x="120" y="92" width="400" height="48" rx="8" fill="#6b8cae" opacity="0.85"/>
      <text x="320" y="114" fill="#fff" font-size="13" font-weight="600">认知鬼们 Cognitive Demons</text>
      <text x="320" y="132" fill="#fff" font-size="10">每只代表一个"模式"（比如字母 A、B、C…）</text>
      <!-- 计算鬼 -->
      <rect x="60" y="164" width="520" height="48" rx="8" fill="#8fb89c" opacity="0.85"/>
      <text x="320" y="186" fill="#fff" font-size="13" font-weight="600">计算鬼们 Computational Demons</text>
      <text x="320" y="204" fill="#fff" font-size="10">每只检测一种小特征（横线、斜线、圆弧…）</text>
      <!-- 数据鬼 -->
      <rect x="20" y="236" width="600" height="48" rx="8" fill="#c9a876" opacity="0.85"/>
      <text x="320" y="258" fill="#fff" font-size="13" font-weight="600">数据鬼们 Data Demons</text>
      <text x="320" y="276" fill="#fff" font-size="10">最底层，直接从像素里嗅信号</text>
    </g>
    <!-- 上行箭头 -->
    <g stroke="#9a948a" stroke-width="1.5" fill="none" marker-end="url(#arr)">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#9a948a"/>
        </marker>
      </defs>
      <line x1="280" y1="236" x2="280" y2="216"/>
      <line x1="320" y1="164" x2="320" y2="144"/>
      <line x1="360" y1="92" x2="360" y2="72"/>
    </g>
    <!-- 右侧标注 -->
    <text x="560" y="44" fill="#7567a0" font-size="10" text-anchor="start">↑ 输出</text>
    <text x="560" y="260" fill="#9a7a45" font-size="10" text-anchor="start">↑ 输入</text>
  </svg>
</div>

每只小鬼独立工作，发现自己"想要的"特征就尖叫，叫声越大权重越高，向上一层报告。最顶上的决策鬼听谁喊得最响，就输出谁。<strong>这就是现代 AI 多层网络的雏形</strong>，甚至是<strong>多智能体协同（Multi-Agent System）</strong>的开山祖。

### 为什么它"崩了"？

Selfridge 的早期实现里，鬼太多、权重协调机制太朴素，叫声经常乱成一锅粥（学界叫"<strong>credit assignment problem</strong>"——到底功劳归谁、谁该被惩罚）。这是个直到 1986 年反向传播算法才被部分解决的难题。

### 为什么今天又火了？

看看 2024–2025 的 AI 关键词：

- <strong>Multi-Agent System</strong> — AutoGPT、Claude Agent、Devin——本质都是"一群专精小鬼"协作干活。
- <strong>Mixture of Experts (MoE)</strong> — DeepSeek-V3、GPT-4 据传都用了 MoE——每次只激活一部分"专家鬼"。
- <strong>注意力机制</strong> — Transformer 的核心——本质就是"谁喊得最大谁说话"。
- <strong>RLHF 信用分配</strong> — 当年困住 Selfridge 的难题，今天 OpenAI 用人类反馈+强化学习正面解决。

所以下次有人说"多智能体是新概念"——告诉他这玩意儿 1959 年就有了，名字还很文艺，叫"群魔殿"。

> 他笔下的小鬼们崩溃过一次。65 年后，它们换了名字，叫 Agent。

---

## 第一幕落幕：一群被时代低估的人

1950 年代的 AI 没有 GPU，没有数据，没有产品。它有的只是一群极端聪明、极端自负、又极端孤独的人。

<strong>图灵</strong>没看到自己理论被实现；<strong>香农</strong>没把"信息论 = AI 地基"这件事说透；<strong>罗森布拉特</strong>没看到深度学习胜利；<strong>Selfridge</strong> 的"鬼"在他去世几十年后才被叫做 Agent。

麦卡锡曾这样总结达特茅斯：

> "我们高估了短期能做到的事，低估了长期会发生的事。"

这句话今天依然奏效——看 2025 年的"AGI 还有几年"辩论，本质上没变。

### 脉络点睛

1950 年代奠定了 AI 之后七十年的<strong>四条主轴</strong>：

- <strong>哲学主轴</strong> — 图灵测试 → 一个用工程定义智能的方法。
- <strong>数学主轴</strong> — 香农信息论 → 所有训练 loss 的祖宗。
- <strong>组织主轴</strong> — 达特茅斯 → 学科命名、圈子、路线之争。
- <strong>实现主轴</strong> — 感知机 + 鬼魅程序 → 深度学习与多智能体的双重血脉。

### 今日小酌

下次看到 ChatGPT 流畅地"假装"自己是个人——记得这是 1950 年图灵在曼彻斯特某个雨天定下的游戏。下次听说"多智能体 Agent 框架"——记得 1959 年 Selfridge 已经把它写进过一群小鬼的尖叫里。下次用 cross-entropy loss 训模型——记得这是 1948 年贝尔实验室里那位骑独轮车的胖老头递过来的工具。

<strong>真正的颠覆从不需要爆款。它只需要一群相信"机器能思考"的人，先按下启动键。</strong>

---

*下一幕：1960s——野心、幻灭与裂痕*
