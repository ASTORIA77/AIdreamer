> <strong>第二幕 · 1960 — 1969</strong> ｜ ARPA 撒钱、白宫摇摆、越战烧钱、明斯基写书冰封一个时代。
>
> 这是 AI 的第一个"金色十年"，也是它第一次<strong>用力过猛</strong>。

## 大炮、卫星与冷战：为什么 60 年代 AI 突然有钱了？

> AI 不是诞生在象牙塔，是诞生在五角大楼的预算单上。要看懂这十年，必须先看懂当时的世界局势。

### 1957 年那一声巨响：苏联人的"叮"

1957 年 10 月 4 日，苏联发射人类第一颗人造卫星 <strong>Sputnik 1</strong>。它在轨道上每 96 分钟发一次"叮——"的无线电信号，全美国的家庭收音机都能收到。<strong>这是冷战最大的一次心理暴击</strong>。美国人突然意识到：苏联人能把一个铁球送上太空，那能不能把核弹头扔到纽约？

### 艾森豪威尔的回应：1958 年 ARPA 成立

1958 年 2 月，美国国防部火速成立 <strong>ARPA（Advanced Research Projects Agency，高级研究计划局）</strong>。这是一个直属国防部、绕过陆海空军、直接面向科学家的"敢死队"经费机构。

> <strong>ARPA 的使命</strong>：不要再被苏联人偷家。
>
> <strong>ARPA 的方法</strong>：找一群最聪明的疯子，给钱，不问产出。
>
> ARPA 后来改名为 DARPA。它后来还顺手发明了：互联网（ARPANET, 1969）、GPS（1973）、自动驾驶挑战赛（2004）——当然，还有 AI 的第一个十年。

### 关键人物：J. C. R. Licklider

1962 年 ARPA 任命 <strong>"Lick" Licklider</strong>（心理学+声学博士）担任 IPTO（信息处理技术办公室）首任主任。他做了两件改变 AI 史的事：

1. <strong>看人不看项目</strong> — 他把钱直接打给麦卡锡（斯坦福）、明斯基（MIT）、纽厄尔/西蒙（卡内基），让他们随便花，<strong>不要写报告</strong>。
2. <strong>提出"人机共生"</strong> — 1960 年他写过《Man-Computer Symbiosis》，断言未来计算机将是大脑的延伸——这比 AGI 概念早 50 年。

之后 ARPA 在 60 年代每年给 AI 撒约 1000 万美元（按当时购买力相当于今天 1 亿美元以上）。<strong>这就是为什么 60 年代 AI 突然像中了大奖。</strong>

### 但是 1968 年开始，事情变了

- <strong>1965</strong> 美国全面卷入越南战争，军费暴涨。
- <strong>1968</strong> 越战陷入泥潭，国内反战运动爆发。
- <strong>1969</strong> <strong>Mansfield 修正案</strong>通过——国会规定：DARPA 拨款必须有"明确的军事用途"。撒钱不问产出的好日子结束。

这条修正案直接掐住了 AI 的脖子。1969 年也正是明斯基出版《Perceptrons》的同一年——一边经费收紧，一边路线之争白热化。两件事撞在一起，<strong>就是第二幕的高潮</strong>。

> AI 在 1958 年因为苏联人而获得资助，又在 1969 年因为越南人而失去庇护。

---

## GPS 与"思考机器"的第一次过度承诺：纽厄尔与西蒙

> 他们说造出了"通用问题解决器"。结果它只能解积木题。但这个故事比想象的有意思得多。

### 这两个人是谁？

- <strong>Allen Newell（1927—1992）</strong> — 普林斯顿数学博士，转去兰德公司，再到卡内基理工。他坚信"<strong>智能 = 在符号上做物理操作</strong>"。1975 年图灵奖。
- <strong>Herbert Simon（1916—2001）</strong> — 政治学博士、卡内基经济学教授。<strong>1978 年诺贝尔经济学奖、1975 年图灵奖、1993 年美国国家科学奖章</strong>——一人横跨经济、政治、计算机三个学科。

### GPS：General Problem Solver 是怎么个"通用"法？

核心思想叫 <strong>"手段-目的分析（Means-Ends Analysis）"</strong>——人话就是：

<div class="svg-diagram">
  <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 四个状态框 -->
    <g text-anchor="middle">
      <rect x="30" y="30" width="180" height="56" rx="8" fill="#6b8cae" opacity="0.85"/>
      <text x="120" y="52" fill="#fff" font-size="12" font-weight="600">当前状态 CURRENT</text>
      <text x="120" y="72" fill="#fff" font-size="11">在家，肚子饿</text>

      <rect x="410" y="30" width="180" height="56" rx="8" fill="#c9a876" opacity="0.85"/>
      <text x="500" y="52" fill="#fff" font-size="12" font-weight="600">目标状态 GOAL</text>
      <text x="500" y="72" fill="#fff" font-size="11">吃到泡面</text>
    </g>
    <!-- 箭头 -->
    <line x1="210" y1="58" x2="410" y2="58" stroke="#9a948a" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="310" y="50" text-anchor="middle" fill="#6b665d" font-size="11">差异 DIFF：缺水、缺面条、火没开</text>
    <!-- 操作序列 -->
    <g text-anchor="middle">
      <rect x="60" y="130" width="120" height="40" rx="6" fill="#8fb89c" opacity="0.85"/>
      <text x="120" y="155" fill="#fff" font-size="11">① 烧水</text>
      <rect x="220" y="130" width="120" height="40" rx="6" fill="#8fb89c" opacity="0.85"/>
      <text x="280" y="155" fill="#fff" font-size="11">② 下面</text>
      <rect x="380" y="130" width="120" height="40" rx="6" fill="#8fb89c" opacity="0.85"/>
      <text x="440" y="155" fill="#fff" font-size="11">③ 等3分钟</text>
      <rect x="540" y="130" width="60" height="40" rx="6" fill="#c9a876" opacity="0.85"/>
      <text x="570" y="155" fill="#fff" font-size="11">④ 吃</text>
    </g>
    <line x1="180" y1="150" x2="220" y2="150" stroke="#9a948a" stroke-width="1.2"/>
    <line x1="340" y1="150" x2="380" y2="150" stroke="#9a948a" stroke-width="1.2"/>
    <line x1="500" y1="150" x2="540" y2="150" stroke="#9a948a" stroke-width="1.2"/>
    <!-- 底部说明 -->
    <text x="310" y="220" text-anchor="middle" fill="#6b665d" font-size="12">把所有问题都拆成"当前 → 目标 → 差异 → 操作"的递归过程</text>
    <text x="310" y="245" text-anchor="middle" fill="#9a948a" font-size="11">理论上可以解任何能形式化的问题——但现实世界 99% 的问题形式化不了</text>
  </svg>
</div>

这是 AI 史上第一次系统化地<strong>把人类思考过程"反向工程"成算法</strong>。理论上可以解任何能形式化的问题。问题是——现实世界 99% 的问题<strong>形式化不了</strong>。GPS 在积木世界、河内塔、密码题上很厉害，扔到真实世界就直接卡死。

### "过度承诺"的代价

西蒙 1957 年就放话："十年内电脑将在国际象棋上击败世界冠军；十年内电脑将证明重要的新数学定理。" 结果——<strong>国际象棋直到 1997 年深蓝击败卡斯帕罗夫，整整迟到了 30 年</strong>。这种过度承诺成了第一波 AI 寒冬的导火索之一。

> <strong>注</strong>：西蒙的"有限理性（Bounded Rationality）"理论，正是他在做 GPS 时观察人类思考方式得出的副产品——这也是他拿诺贝尔经济学奖的核心贡献。AI 反过来给经济学下了金蛋。

---

## ELIZA：她本是一个"反讽艺术品"

> 魏泽鲍姆造出 ELIZA，是为了<strong>嘲笑</strong> AI 的虚假性。结果他自己的秘书把他赶出办公室。

### 背景：Joseph Weizenbaum

德裔犹太人，1936 年随家人逃离纳粹德国。MIT 计算机科学家。他骨子里是个<strong>反 AI 的人</strong>——他认为人类的"理解"和机器的"模式匹配"是两回事，把它们混淆是危险的。

### ELIZA 怎么工作？

核心只是<strong>关键词匹配 + 模板替换</strong>，全程没有"理解"任何东西。

> <strong>USER</strong>：I am unhappy.
> <strong>ELIZA</strong>：How long have you been unhappy?
>
> <strong>USER</strong>：My mother hates me.
> <strong>ELIZA</strong>：Tell me more about your mother.

规则很简单：识别 "I am X" → 反问 "How long have you been X?"；识别 "my mother" → 自动追问家庭关系；识别 "no"/"yes" → 用反问把球踢回去。

他选了"罗杰斯派心理咨询师"作为模拟对象——这一派的真人医生本来就喜欢反问而不是给意见。所以 ELIZA 的"无知"反而显得很专业。

### ELIZA 效应：让魏泽鲍姆终生愧疚

他的秘书每天都偷偷跟 ELIZA 聊心事，有一次他想看看记录，秘书说："请你出去，这是我的隐私。" 他当场震惊——一个他亲手写出来、知道里面没有任何"理解"的程序，被最熟悉的人当成了人。

> "我以为我做了一件讽刺的事情，结果我做了一件可怕的事情。" —— Weizenbaum, 1976

1976 年他出版《Computer Power and Human Reason》，公开反对自己的发明，警告社会"不要把判断权交给机器"。<strong>他成了 AI 史上第一个公开反对 AI 的 AI 科学家</strong>。今天每次有人讨论"AI 伦理"，ELIZA 效应都是绕不开的开篇。

> ELIZA 没有理解任何事，但它让人类相信了自己。这就是大模型今天还在做的事。

---

## SHAKEY：第一台"会想事"的机器人

> 它每挪一步要"思考"20 分钟。但它是世界上第一个把视觉、推理、行动整合到一起的机器人——是 Boston Dynamics、Tesla Optimus、Figure 02 真正的太祖。

### SRI 的赌注

1966 年，斯坦福研究所（SRI）拿到 ARPA 资助，启动 SHAKEY 项目。机器人长得像一个移动衣柜：底部一个轮式底盘、中部 PDP-10 通讯模块、顶部一个相机和触觉传感器。因为运动时整个机身会颤抖，研究员叫它 "Shakey"——"抖抖"。

### SHAKEY 的"思考"流程

<div class="svg-diagram">
  <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <g text-anchor="middle">
      <!-- 感知 -->
      <rect x="20" y="60" width="160" height="80" rx="10" fill="#8fb89c" opacity="0.85"/>
      <text x="100" y="88" fill="#fff" font-size="14" font-weight="600">SENSE 感知</text>
      <text x="100" y="110" fill="#fff" font-size="11">摄像头拍图</text>
      <text x="100" y="128" fill="#fff" font-size="11">边缘检测</text>
      <text x="100" y="146" fill="#fff" font-size="11">识别门/墙/积木</text>

      <!-- 规划 -->
      <rect x="230" y="60" width="160" height="80" rx="10" fill="#c9a876" opacity="0.85"/>
      <text x="310" y="88" fill="#fff" font-size="14" font-weight="600">PLAN 规划</text>
      <text x="310" y="110" fill="#fff" font-size="11">STRIPS 规划器</text>
      <text x="310" y="128" fill="#fff" font-size="11">生成动作序列</text>
      <text x="310" y="146" fill="#fff" font-size="11">（团队发明的！）</text>

      <!-- 行动 -->
      <rect x="440" y="60" width="160" height="80" rx="10" fill="#6b8cae" opacity="0.85"/>
      <text x="520" y="88" fill="#fff" font-size="14" font-weight="600">ACT 行动</text>
      <text x="520" y="110" fill="#fff" font-size="11">电缆连 PDP-10</text>
      <text x="520" y="128" fill="#fff" font-size="11">发送电机指令</text>
      <text x="520" y="146" fill="#fff" font-size="11">移动</text>
    </g>
    <!-- 箭头 -->
    <polygon points="195,100 215,95 215,105" fill="#9a948a"/>
    <polygon points="405,100 425,95 425,105" fill="#9a948a"/>
    <!-- 底部 -->
    <text x="310" y="175" text-anchor="middle" fill="#9a7a45" font-size="12" font-weight="500">一次完整循环：约 20 分钟。是的，没看错。</text>
  </svg>
</div>

### 它留下了什么遗产？

- <strong>STRIPS 规划器</strong> — SHAKEY 项目副产品。今天所有 AI 规划、机器人路径搜索、Agent 框架都基于 STRIPS 思想。
- <strong>A\* 搜索算法</strong> — 1968 年 Hart、Nilsson、Raphael 在 SHAKEY 项目里发明。今天每个游戏 AI、地图导航都在用。
- <strong>视觉-推理-行动闭环</strong> — 第一次工程化实现"具身智能"。Tesla Optimus 走的是一样的路。
- <strong>Hough 变换的早期应用</strong> — 用霍夫变换识别直线和门框，奠定了视觉机器人的基础。

1970 年《Life》杂志称它为"<strong>The First Electronic Person</strong>"。当然这是吹的——但 SHAKEY 让 AI 第一次真的"住进"一个会动的躯壳。

> <strong>注</strong>：SHAKEY 本体现在被收藏在加州山景城的 Computer History Museum。可以亲眼看到那台抖抖的衣柜。

---

## 麦卡锡 vs 明斯基：同是符号主义，为什么去了不同的山头？

> 问得好——他俩看起来都信"符号"，可一个去了西海岸，一个守住东海岸。这背后是 AI 史上第一次"<strong>路线分歧但形式不同</strong>"的双雄记。

### 大背景：MIT 的 AI 实验室是怎么来的？

1958 年，麦卡锡和明斯基同时被 MIT 录用。1959 年他俩在 MIT 联合创立了 <strong>Project MAC</strong>（即 MIT AI Lab 前身）。两人一开始关系很好——共同写过达特茅斯提案、共同申请到 ARPA 经费。

### 分歧之一：技术品味

<div class="svg-diagram">
  <svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 左侧 麦卡锡 -->
    <g>
      <rect x="20" y="20" width="270" height="280" rx="12" fill="#c9a876" opacity="0.12" stroke="#c9a876" stroke-width="1.5"/>
      <circle cx="60" cy="55" r="18" fill="#c9a876"/>
      <text x="60" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">M</text>
      <text x="90" y="50" fill="#9a7a45" font-size="15" font-weight="700">McCarthy</text>
      <text x="90" y="68" fill="#9a948a" font-size="11">数学派 · 严谨形式化</text>
      <text x="40" y="100" fill="#3d3a35" font-size="12">• 逻辑学背景</text>
      <text x="40" y="122" fill="#3d3a35" font-size="12">• 1958 发明 LISP 语言</text>
      <text x="40" y="144" fill="#3d3a35" font-size="12">• 提出 Situation Calculus</text>
      <text x="40" y="166" fill="#3d3a35" font-size="12">• 主张一阶谓词逻辑</text>
      <text x="40" y="188" fill="#3d3a35" font-size="12">• 讨厌"工程黑魔法"</text>
      <text x="40" y="230" fill="#6b665d" font-size="11" font-style="italic">"AI 应该建立在</text>
      <text x="40" y="248" fill="#6b665d" font-size="11" font-style="italic">  严密的数学逻辑上"</text>
      <text x="40" y="280" fill="#9a948a" font-size="11">→ 1962 离开 MIT，建 Stanford</text>
    </g>
    <!-- 中间 VS -->
    <circle cx="310" cy="160" r="28" fill="none" stroke="#a89bc4" stroke-width="2"/>
    <text x="310" y="168" text-anchor="middle" fill="#a89bc4" font-size="18" font-weight="900">VS</text>
    <!-- 右侧 明斯基 -->
    <g>
      <rect x="330" y="20" width="270" height="280" rx="12" fill="#6b8cae" opacity="0.12" stroke="#6b8cae" stroke-width="1.5"/>
      <circle cx="370" cy="55" r="18" fill="#6b8cae"/>
      <text x="370" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">M</text>
      <text x="400" y="50" fill="#4a6885" font-size="15" font-weight="700">Minsky</text>
      <text x="400" y="68" fill="#9a948a" font-size="11">工程派 · 涌现主义</text>
      <text x="350" y="100" fill="#3d3a35" font-size="12">• 数学+物理+神经科学背景</text>
      <text x="350" y="122" fill="#3d3a35" font-size="12">• 哈佛博士论文做神经网络</text>
      <text x="350" y="144" fill="#3d3a35" font-size="12">• 主张 AI 是"一堆 hack"</text>
      <text x="350" y="166" fill="#3d3a35" font-size="12">• 相信智能从小代理涌现</text>
      <text x="350" y="188" fill="#3d3a35" font-size="12">• 讨厌"过度形式化"</text>
      <text x="350" y="230" fill="#6b665d" font-size="11" font-style="italic">"智能不是单一原理，</text>
      <text x="350" y="248" fill="#6b665d" font-size="11" font-style="italic">  而是一群小代理协作的结果"</text>
      <text x="350" y="280" fill="#9a948a" font-size="11">→ 守住 MIT，建东海岸中心</text>
    </g>
  </svg>
</div>

### 分歧之二：要不要带学生？

麦卡锡喜欢闷头自己搞数学，对带博士生兴趣不大。明斯基则在 1966 年招募了一批 MIT 黑客（Winograd、Minsky 的学生）。两人在"实验室文化"上彻底分歧——麦卡锡受不了明斯基的"放养式黑客文化"。

### 分歧之三：分时计算的优先级

1960 年代初，麦卡锡力推"<strong>Time-Sharing（分时计算）</strong>"——一台大型机让多人同时用（这是云计算的雏形）。明斯基不感兴趣，认为这是"基础设施杂事"。麦卡锡气得拍桌子。

### 1962 年的搬家

- <strong>1962</strong> 麦卡锡正式离开 MIT，前往斯坦福。
- <strong>1963</strong> 麦卡锡创立 <strong>Stanford AI Lab (SAIL)</strong>，西海岸 AI 中心诞生。
- <strong>1966–</strong> 明斯基继续主持 MIT AI Lab。东海岸 AI 中心。

从此 AI 圈形成了 <strong>"东海岸 MIT-CMU vs 西海岸 Stanford"</strong> 的双中心格局，延续至今。今天的 OpenAI（旧金山）、Anthropic（旧金山）、DeepMind（伦敦/北加州）大体仍延续西海岸传统；而东海岸则保留更多理论计算机科学根基。

### 分歧之四（最深）：对"逻辑 vs 涌现"的根本立场

这才是真正不可调和的。麦卡锡相信智能可以用形式逻辑严密推导出来；明斯基则相信智能是大量小机制的<strong>涌现</strong>——他在 1986 年写的《<strong>Society of Mind（心智社会）</strong>》主张：智能不是单一原理，而是一群"小代理（agents）"协作的结果。

> "What magical trick makes us intelligent? The trick is that there is no trick." —— Minsky, 1986

<strong>注意——这个"心智社会"思想，恰好是今天 Multi-Agent 框架的祖先</strong>。所以说明斯基"完全是符号主义"——其实不准确。<strong>他是一个反符号主义的符号主义者</strong>。

---

## 明斯基的矛盾：他亲手冰封了自己年轻时挚爱的领域

> 这位老先生比想象中复杂得多。他既不是纯粹的符号主义者，也不是连接主义的敌人——他更像是一个<strong>叛逃自己理想的天才</strong>。

### 明斯基的真实简历

- <strong>1927</strong> 生于纽约，父亲是眼科医生。
- <strong>1944</strong> 二战服役于美国海军。
- <strong>1950</strong> 哈佛本科——双主修数学+物理。
- <strong>1951</strong> <strong>SNARC——他亲手造的世界第一台神经网络模拟机</strong>，用 3000 个真空管模拟 40 个神经元。是的，AI 史上的第一台神经网络硬件，是<strong>明斯基本人</strong>造的。
- <strong>1954</strong> 普林斯顿数学博士，论文题目：<strong>《Theory of Neural-Analog Reinforcement Systems》</strong>——一篇标准的连接主义论文。
- <strong>1956</strong> 达特茅斯会议四发起人之一。
- <strong>1958</strong> MIT 任教，与麦卡锡共建 AI Lab。
- <strong>1969</strong> 出版《Perceptrons》，<strong>亲手摧毁连接主义</strong>。
- <strong>1969</strong> 同年获得图灵奖。
- <strong>1985</strong> 共同创立 MIT Media Lab。
- <strong>1986</strong> 出版《心智社会》——其实是<strong>反对纯符号主义</strong>的 Manifesto。
- <strong>2016-01-24</strong> 去世，88 岁。

### 他为什么"叛变"？

这是 AI 史上最大的悬案之一。学界主流解释有四个角度：

1. <strong>学术良心说</strong> — 1969 年单层感知机确实在数学上有局限。明斯基只是说出了真相，没料到效果如此毁灭性。
2. <strong>经费政治说</strong> — 当时 ARPA 经费紧张（越战开始抽血），明斯基要为自己 MIT 的符号主义路线挤掉对手——而罗森布拉特（康奈尔）正是直接竞争者。
3. <strong>个人恩怨说</strong> — 明斯基和罗森布拉特是<strong>布朗士科学高中的同班同学</strong>。两人从青少年时期就是宿敌。1969 年的书里冰冷的数学背后，多少有点同窗私怨的影子。
4. <strong>真心热爱说</strong> — 明斯基从未否认神经网络的价值，他后来反复说："我反对的是<strong>夸大单层感知机</strong>，不是反对神经网络本身。"

### 《Perceptrons》到底证明了什么？

简单说：单层感知机<strong>无法学习 XOR 函数</strong>（异或）。

<div class="svg-diagram">
  <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="'Noto Sans SC', sans-serif">
    <!-- 坐标系 -->
    <line x1="160" y1="30" x2="160" y2="210" stroke="#9a948a" stroke-width="1.5"/>
    <line x1="60" y1="120" x2="280" y2="120" stroke="#9a948a" stroke-width="1.5"/>
    <text x="155" y="25" fill="#9a948a" font-size="11">1</text>
    <text x="155" y="225" fill="#9a948a" font-size="11">0</text>
    <text x="55" y="124" fill="#9a948a" font-size="11">0</text>
    <text x="275" y="124" fill="#9a948a" font-size="11">1</text>
    <!-- 四个点：XOR -->
    <!-- (0,0)=0 -->
    <circle cx="80" cy="200" r="10" fill="none" stroke="#8fb89c" stroke-width="2.5"/>
    <text x="80" y="204" text-anchor="middle" fill="#5e8f6b" font-size="10" font-weight="700">0</text>
    <!-- (1,0)=1 -->
    <circle cx="240" cy="200" r="10" fill="#c9a876"/>
    <text x="240" y="204" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">1</text>
    <!-- (0,1)=1 -->
    <circle cx="80" cy="40" r="10" fill="#c9a876"/>
    <text x="80" y="44" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">1</text>
    <!-- (1,1)=0 -->
    <circle cx="240" cy="40" r="10" fill="none" stroke="#8fb89c" stroke-width="2.5"/>
    <text x="240" y="44" text-anchor="middle" fill="#5e8f6b" font-size="10" font-weight="700">0</text>
    <!-- 无法分割 -->
    <text x="170" y="155" fill="#a82424" font-size="12" font-style="italic">没法画一条直线</text>
    <text x="170" y="172" fill="#a82424" font-size="12" font-style="italic">把两类点分开</text>
    <!-- 右侧说明 -->
    <g>
      <rect x="340" y="40" width="260" height="180" rx="10" fill="#a89bc4" opacity="0.08" stroke="#a89bc4" stroke-width="1"/>
      <text x="470" y="70" text-anchor="middle" fill="#7567a0" font-size="13" font-weight="600">XOR 真值表</text>
      <text x="380" y="100" fill="#3d3a35" font-size="12" font-family="ui-monospace, monospace">0 XOR 0 = 0  ○</text>
      <text x="380" y="125" fill="#3d3a35" font-size="12" font-family="ui-monospace, monospace">0 XOR 1 = 1  ●</text>
      <text x="380" y="150" fill="#3d3a35" font-size="12" font-family="ui-monospace, monospace">1 XOR 0 = 1  ●</text>
      <text x="380" y="175" fill="#3d3a35" font-size="12" font-family="ui-monospace, monospace">1 XOR 1 = 0  ○</text>
      <text x="470" y="205" text-anchor="middle" fill="#9a948a" font-size="11">单层感知机 = 一条直线</text>
      <text x="470" y="222" text-anchor="middle" fill="#a82424" font-size="11" font-weight="600">学不会 XOR。GG。</text>
    </g>
  </svg>
</div>

书里也提到了"<strong>多层网络可以解决</strong>"，但悲观地说"<strong>我们看不到训练它们的方法</strong>"。这就是关键命门——直到 1986 年 Rumelhart/辛顿/Williams 重新发明反向传播算法，多层网络才被解锁。<strong>整整冰封 17 年</strong>。

### 他真的"反神经网络"吗？

不。明斯基晚年多次表示："如果当年我们想到了反向传播，历史会很不一样。"而且 1986 年他写的《心智社会》里，"小代理涌现"思想在精神上更接近<strong>神经元集群</strong>而不是符号逻辑。

> 明斯基用一本数学书，亲手冰封了一个他年轻时建造的领域。这是 AI 史上最大的内伤。

---

## MIT 内战：明斯基派 vs 派珀特派 vs Project MAC

> 人们只知道明斯基和外界的战争。但 MIT 内部的撕裂同样惨烈——而它直接形塑了今天的 AI 教育。

### 派系一：明斯基核心圈（"经典 AI"）

明斯基 + Patrick Winston（明斯基弟子，后来 1972–1997 长期主持 MIT AI Lab）。这一派坚信符号主义、知识表示、专家系统。1970–80 年代主导 MIT AI 教学。

### 派系二：Seymour Papert 与建构主义

<strong>Seymour Papert（1928—2016）</strong> 南非数学家，曾在日内瓦跟随 Piaget（瑞士心理学家、儿童认知发展之父）做研究。他和明斯基合写了《Perceptrons》——但他真正的兴趣不是冰封连接主义，而是"<strong>儿童如何学习</strong>"。

- <strong>1967</strong> Papert 发明 <strong>LOGO 编程语言</strong>，让小孩用代码控制小海龟在屏幕上画图——世界上最早的"编程教育"。
- <strong>1980</strong> 出版《Mindstorms》，主张儿童应该通过"造东西"来学习。这本书启发了 LEGO Mindstorms、Scratch 等一切儿童编程工具。
- <strong>1985</strong> Papert + 明斯基共同创立 <strong>MIT Media Lab</strong>——东海岸的"反纯学术"基地。

Papert 与明斯基<strong>晚年开始分道扬镳</strong>。明斯基越来越偏向哲学思辨（"心智社会"），Papert 则越来越投入教育实践。1979 年他俩合著《有限的世界》时几乎不说话。

### 派系三：Marvin Greenblatt 与黑客文化

明斯基招募的 MIT 黑客们（Greenblatt、Stallman、Sussman）和明斯基本人也有矛盾。他们更关心"造工具"、"开源"、"自由软件"，对明斯基的哲学派头不感冒。

- <strong>1965</strong> Greenblatt 写出 <strong>Mac Hack VI</strong>——第一个能击败业余棋手的国际象棋程序。
- <strong>1971</strong> Sussman 等人发明 <strong>Scheme 语言</strong>，简化了 LISP。
- <strong>1983</strong> <strong>Richard Stallman</strong> 因不满 LISP 机商业化离开 MIT，创立 GNU 项目——开源软件运动诞生。

### 派系四：Joseph Weizenbaum 与人本主义

ELIZA 之父 Weizenbaum 站在所有派系的对面——他认为<strong>整个 AI 实验室都在做错事</strong>。他在系里几乎被孤立，但他是 MIT 第一个把"AI 伦理"当作严肃议题的人。

### 所以 MIT 内部其实有四股力量

- <strong>明斯基-Winston 派</strong> — 主导教学与经费，符号主义大本营。
- <strong>Papert 派</strong> — 偏向认知科学与教育，后来主导 Media Lab。
- <strong>黑客派</strong> — 务实造工具，后来诞生开源运动。
- <strong>Weizenbaum 派</strong> — 反对所有，AI 伦理先驱。

这四股力量之间的张力，让 MIT AI Lab 既是温床也是火药桶。今天 OpenAI 安全派 vs 商业派的撕裂、马库斯 vs 大模型派的辩论，本质上都是这四派斗争的"21 世纪版"。

---

## 1969：一年之内三件大事，AI 第一春结束

> 如果只能选一年作为"第一次 AI 寒冬的起点"——必须是 1969。

### 1969 春天：明斯基出版《Perceptrons》

整本书的封面就是一道刺眼的红色——预示着血腥味。出版后两个月内，全美 AI 实验室<strong>停止了几乎所有神经网络相关项目</strong>。罗森布拉特的康奈尔实验室经费被砍 60%。

### 1969 夏天：Mansfield 修正案通过

越战费用不断膨胀，国会要求 DARPA 必须证明"<strong>每一美元都用于明确的军事用途</strong>"。Lick 时代那种"找疯子撒钱"的方式被禁止。AI 圈第一次被迫开始填项目申请书。

### 1969 秋天：MIT AI Lab 内部分裂浮出水面

明斯基派和其他派系在 Project MAC 资源分配上爆发冲突。一批黑客离开，前往 Bolt Beranek and Newman（BBN）公司——同年这家公司刚好接下了 ARPANET 的合同。<strong>互联网的种子，部分是从这场分裂里飘出去的</strong>。

### 1969 年底：第一个 ARPANET 节点在 UCLA 上线

1969 年 10 月 29 日 22:30，UCLA 的 Charley Kline 试图远程登录 SRI 的电脑。打字到 "LO"——系统崩了。但这就是<strong>互联网的第一句话："LO"</strong>。讽刺的是——AI 当年正在被 ARPA 削减，但互联网正是从同一个 ARPA 里悄悄诞生。<strong>30 年后，互联网将反过来给 AI 准备好它最需要的燃料：海量数据。</strong>

> 1969 年没有人意识到——杀死第一春的钱，正在为下一个春天准备燃料。

---

## 这十年到底留下了什么？

1960 年代是 AI 的<strong>第一个金色十年，也是它学到第一个昂贵教训的十年</strong>。它留下了：

- <strong>具体技术遗产</strong> — LISP、Scheme、STRIPS、A\*、ELIZA、SHAKEY、LOGO——半本计算机科学教科书。
- <strong>组织遗产</strong> — MIT AI Lab、Stanford AI Lab、CMU——AI 三巨头格局形成，延续至今。
- <strong>路线遗产</strong> — 符号 vs 连接、东海岸 vs 西海岸、形式 vs 黑客——所有今天的辩论都能追溯到这十年。
- <strong>伦理遗产</strong> — Weizenbaum 的警告、ELIZA 效应——这些今天还在生效。
- <strong>政治遗产</strong> — ARPA-科学家共生模式、Mansfield 修正案的反弹——大科学经费政治学的样板。
- <strong>过度承诺的代价</strong> — "十年达到 AGI"的话术从此成为 AI 圈的传统病——2025 年依然没好。

### 脉络点睛

第二幕的本质是：<strong>AI 第一次从纯学术走入大科学时代</strong>。它学到的最重要教训是——

1. 经费不是"科学无国界"的施舍，是冷战、热战、国会政治、个人恩怨的综合产物；
2. "通用问题解决"听起来很美，但形式化是一道天花板；
3. <strong>路线之争永远不只是技术问题</strong>，它同时是经费之争、文化之争、地理之争。

### 今日小酌

下次看到 OpenAI、Anthropic、DeepMind 在挖人吵架——记得这是麦卡锡 1962 年从 MIT 跳到斯坦福的"21 世纪版"。下次听 LeCun 在推特怼 Sam Altman——记得这是 1969 年明斯基写《Perceptrons》的"互联网版"。下次看到 DARPA 每年公布 AI 经费分配——记得 Mansfield 修正案 1969 年就埋下了今天 AI 与军方的关系底色。

<strong>历史不重复，但它押韵。第三幕的寒冬正在路上。</strong>

---

*下一幕：1970s—80s 寒冬、专家系统、日本第五代偷袭，以及辛顿在加拿大孤独的二十年。*
