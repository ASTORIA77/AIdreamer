/* ============================================
   AI 纵横 70 年 —— 七幕时间轴配置
   从 1950 年图灵测试到现在，分七幕讲述
   ============================================ */

const HISTORY_EVENTS = [
  {
    slug: 'act1-1950s-origins-and-stars',
    act: '第一幕',
    year: '1950s',
    yearRange: '1950 — 1959',
    title: '起源与群星',
    subtitle: '一群书呆子按下了启动键',
    tags: ['起源', '图灵', '香农', '达特茅斯', '感知机', '群魔殿'],
    excerpt: '图灵的模仿游戏、香农的信息论、达特茅斯那个被砍了一半经费的夏天、罗森布拉特的感知机、Selfridge 的群魔殿——1950 年代奠定了 AI 之后七十年的四条主轴。',
    readTime: '约 15 分钟',
    file: 'history-posts/act1-1950s-origins-and-stars.md'
  },
  {
    slug: 'act2-1960s-ambition-and-rift',
    act: '第二幕',
    year: '1960s',
    yearRange: '1960 — 1969',
    title: '野心、幻灭与裂痕',
    subtitle: 'ARPA 撒钱、白宫摇摆、越战烧钱、明斯基写书冰封一个时代',
    tags: ['符号主义', '连接主义', 'ARPA', 'ELIZA', 'SHAKEY', '第一次寒冬'],
    excerpt: 'ARPA 撒钱让 AI 迎来第一个金色十年。GPS 过度承诺、ELIZA 效应、SHAKEY 首台具身机器人、麦卡锡 vs 明斯基的东西海岸分裂、明斯基亲手冰封连接主义——1969 年三件大事同时引爆，AI 第一春结束。',
    readTime: '约 18 分钟',
    file: 'history-posts/act2-1960s-ambition-and-rift.md'
  },
  {
    slug: 'act3-1970s80s-two-winters-and-eastern-raid',
    act: '第三幕',
    year: '1970s-80s',
    yearRange: '1970 — 1989',
    title: '两次寒冬与东方偷袭',
    subtitle: '莱特希尔报告冻结英国 · 专家系统短暂回春 · 日本8.5亿豪赌 · 辛顿在加拿大孤独坚守 · LISP机崩盘',
    tags: ['第一次寒冬', '专家系统', '第五代计划', '反向传播', 'LISP机', '第二次寒冬'],
    excerpt: 'SHRDLU积木世界骗局、莱特希尔报告斩首英国AI、专家系统短暂回春、日本第五代8.5亿美元豪赌、1986反向传播复活神经网络、辛顿移居加拿大、LeCun造CNN读支票、1987 LISP机雪崩——两次寒冬之间，连接主义在地下悄悄发芽。',
    readTime: '约 25 分钟',
    file: 'history-posts/act3-1970s80s-two-winters-and-eastern-raid.md'
  },
  {
    slug: 'act4-1990s-stat-revolution-and-undercurrent',
    act: '第四幕',
    year: '1990s',
    yearRange: '1990 — 1999',
    title: '统计革命与暗流涌动',
    subtitle: 'IBM用概率屠杀规则派 · LSTM发明选择性遗忘 · 深蓝暴力撼动王座 · 万维网储备燃料',
    tags: ['统计翻译', 'LSTM', '深蓝', 'TD-Gammon', '万维网', 'SVM'],
    excerpt: '机器翻译七十年全景（规则→统计→神经）、LSTM选择性遗忘的三扇门、深蓝的Alpha-Beta剪枝暴力美学、TD-Gammon神经网络自我对弈、Viola-Jones人脸检测实时化、万维网为大模型储备60万亿token燃料——90年代看似风平浪静，所有2012年爆发的种子都是这时埋下的。',
    readTime: '约 22 分钟',
    file: 'history-posts/act4-1990s-stat-revolution-and-undercurrent.md'
  },
  {
    slug: 'act5-2000s-data-compute-algorithm',
    act: '第五幕',
    year: '2000s',
    yearRange: '2000 — 2009',
    title: '数据为王，GPU 登场',
    subtitle: '李飞飞标了 1400 万张图 · 黄仁勋赌上并行计算 · 辛顿用预训练让深度网络复活 · 谷歌 16000 台 CPU 偷练语音 · DeepMind 八个人的 Nature 梦',
    tags: ['ImageNet', 'GPU', 'CUDA', '预训练', '深度学习', 'DeepMind'],
    excerpt: '深度学习爆发的三根柱子——数据、算力、算法——在 2000 年代全部就位。ImageNet 1400 万张标注图、CUDA 让 GPU 可编程、辛顿 2006 年预训练解锁深度网络。缺任何一根，2012 年都不会发生。',
    readTime: '约 22 分钟',
    file: 'history-posts/act5-2000s-data-compute-algorithm.md'
  },
  {
    slug: 'act6-2012-2017-deep-learning-explosion',
    act: '第六幕',
    year: '2012',
    yearRange: '2012 — 2017',
    title: '火山正式喷发',
    subtitle: 'AlexNet 碾压 ImageNet · ReLU 杀死梯度消失 · Dropout 防止过拟合 · 残差连接让网络深入 152 层 · AlphaGo 第 37 手震惊人类 · 李世石第 78 手证明人类尊严 · Attention Is All You Need 改写一切',
    tags: ['AlexNet', 'ReLU', 'ResNet', 'AlphaGo', 'Transformer', 'Attention'],
    excerpt: '深度学习从"学术突破"变成"改变世界"的五年。ReLU 解决梯度消失、Dropout 解决过拟合、残差连接解锁 152 层、AlphaGo 击败李世石、Transformer 承认"机器在看书不是听话"。',
    readTime: '约 25 分钟',
    file: 'history-posts/act6-2012-2017-deep-learning-explosion.md'
  },
  {
    slug: 'act7-2018-future-lava-meets-sea',
    act: '第七幕',
    year: '2018',
    yearRange: '2018 — 未来',
    title: '岩浆入海，未来未知',
    subtitle: 'GPT 参数量从 1 亿涨到 1750 亿 · ChatGPT 走进公众 · AlphaFold 取消一门学科 · DeepSeek-R1 动摇算力叙事 · Agent 从聊天走向办事 · 文生视频冲击影视 · 物理 AI 走出屏幕 · 我们到底该以什么谋生？',
    tags: ['GPT', 'ChatGPT', 'AlphaFold', 'DeepSeek', 'Agent', '物理AI'],
    excerpt: 'Transformer 的种子长成森林。GPT 系列参数量指数增长，ChatGPT 让大模型走进公众视野，AlphaFold 取消一门学科，DeepSeek-R1 用思维链 + MoE 挑战 Scaling Law，Agent 从对话走向办事，文生视频冲击影视业。这一幕没有结尾——我们就站在里面。',
    readTime: '约 28 分钟',
    file: 'history-posts/act7-2018-future-lava-meets-sea.md'
  }
];

window.HISTORY_EVENTS = HISTORY_EVENTS;
