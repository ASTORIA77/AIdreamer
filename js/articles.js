/* ============================================
   文章配置 —— 你添加新文章的唯一入口
   ============================================
   添加新文章只需两步：
     1. 在 posts/ 目录下新建一个 .md 文件（如 05-my-new-post.md）
     2. 在下面 ARTICLES 数组开头新增一条记录

   字段说明：
     slug      文章唯一标识，用于 URL（#/post/xxx）
     title     文章标题
     subtitle  副标题（可选，文章列表与详情页会显示）
     date      发布日期
     tags      标签数组（用于标签分类页 + 知识图谱）
               约定：每篇 3 个，不多不少。
               第 1 个恒为 'AI Agent'（主题归属，图谱中心节点）；
               第 2 个是大类（学习方法论 / 概念辨析 / 工具推荐）；
               第 3 个是核心概念——这篇文章真正在讲什么，
               必须是读者会用来找这篇文章的词，
               不要塞文章里随便出现的关键词（如"干湿分离"是态度不是主题）。
               跨篇自然复用会形成图谱连线，不要为了连线硬凑。
     excerpt   摘要（显示在文章列表卡片上）
     readTime  预计阅读时长
     file      markdown 文件路径（相对网站根目录）
     accent    标签点缀色，可选：blue / green / purple / camel
   ============================================ */

const ARTICLES = [
  {
    slug: 'why-i-start-agent',
    title: '为什么我打出了「用 AI 学 AI」这面旗',
    subtitle: '不是焦虑，不是恐慌，就是水到渠成——学完原理，产品刚好成熟，用了就被惊艳到（Claude Opus 4.6）',
    date: '2026-06-28',
    tags: ['AI Agent', '学习方法论', '用 AI 学 AI'],
    excerpt: '我一直打的旗号是用 AI 学 AI：用 Agent 当杠杆撬动学 AI 的效率，学完 AI 又反过来更会用 Agent。这个飞轮转起来，学习会越来越快。这篇是这个系列的开篇。',
    readTime: '约 7 分钟',
    file: 'posts/01-why-i-start-agent.md',
    accent: 'camel'
  },
  {
    slug: 'what-is-agent',
    title: 'AI Agent 到底是什么',
    subtitle: '搞混了不是你的错——这词儿模糊了好多年，直到今年才算有了标准',
    date: '2026-07-01',
    tags: ['AI Agent', '概念辨析', 'Agent 定义'],
    excerpt: 'Agent 一开始叫"代理"，飞书机器人、Siri、RPA 都叫过智能体，混着用谁也别怪谁。这篇拆开 Agent 看看里面装了什么零件，再说说为什么免费的网页版大模型真的不够用。',
    readTime: '约 11 分钟',
    file: 'posts/02-what-is-agent.md',
    accent: 'blue'
  },
  {
    slug: 'openclaw-why-bother',
    title: 'OpenClaw？干嘛要为难自己',
    subtitle: '国内 Agent 其实早就有了——聊聊我用过的几款国产桌面智能体',
    date: '2026-07-01',
    tags: ['AI Agent', '工具推荐', '国产 Agent'],
    excerpt: '很多人第一次接触智能体是因为 OpenClaw 爆火，但国外产品安全性、配置门槛、卸载残留都是坑。这篇聊聊我推荐的几款国内 Agent：WorkBuddy、Qoder Work、Kimi Work、TRAE Work、阶跃星辰，各自适合什么场景。',
    readTime: '约 12 分钟',
    file: 'posts/03-openclaw-why-bother.md',
    accent: 'green'
  },
  {
    slug: 'desktop-agent-anatomy',
    title: '拆开一个桌面 Agent 看看：以 WorkBuddy 为例',
    subtitle: '不是最强，但零件齐全、开箱即用——拿它当练习场，刚好',
    date: '2026-07-02',
    tags: ['AI Agent', '工具推荐', 'WorkBuddy'],
    excerpt: '一个桌面 Agent 到底长什么样？这篇以 WorkBuddy 为例，拆开看它的界面、模式、技能、连接器，最后对比 Qoder Work 和 Kimi Work 它没有的能力——Browser Use、Computer Use、Goal Mode、多 Agent 团队、反思意识。',
    readTime: '约 12 分钟',
    file: 'posts/04-prompt-engineering.md',
    accent: 'green'
  },
  {
    slug: 'what-you-pay-for',
    title: '充会员时，我们究竟在为什么而付钱？',
    subtitle: '桌面 Agent 没有免费的——但钱花在哪，得拆开看',
    date: '2026-07-02',
    tags: ['AI Agent', '概念辨析', 'Harness Engineering'],
    excerpt: '充会员的钱其实花在两处：一是模型调用（token，背后是芯片能源基建），二是 Harness 工程化框架（工具/记忆/编排/约束，每家不一样）。这篇拆开讲，再聊聊为什么我喜欢 WorkBuddy 的自定义模型——白嫖框架、按量付模型钱。',
    readTime: '约 9 分钟',
    file: 'posts/05-what-you-pay-for.md',
    accent: 'blue'
  },
  {
    slug: 'multi-device-is-tiring',
    title: '多端协同，听上去好累啊',
    subtitle: '先承认：这篇我是使用文档的搬运工',
    date: '2026-07-02',
    tags: ['AI Agent', '学习方法论', '多端协同'],
    excerpt: 'WorkBuddy 能用微信/企微/钉钉/飞书远程操控电脑，Kimi Work 有 7×24 的 Goal Mode。但这些功能我真的需要吗？哪有人喜欢 24 小时工作呀？我喜欢干湿分离、界限清晰——有些功能知道有就行，不一定要用。',
    readTime: '约 7 分钟',
    file: 'posts/06-multi-device-is-tiring.md',
    accent: 'camel'
  },
  {
    slug: 'llm-selection',
    title: '群山之间：大模型选型与使用之道',
    subtitle: '这篇文绉绉的，因为是从课件搬过来的，懒得转换了',
    date: '2026-07-03',
    tags: ['AI Agent', '概念辨析', '大模型选型'],
    excerpt: '国内外大模型版图全景：云厂派/纯模派/跨界派怎么分？OpenAI、Anthropic、Google 三座灯塔各自信什么？从免费网页端到 API 聚合到本地部署，普通人该怎么选？最后用哥德尔不完备定理收个尾——完美的模型不存在，可用的就够了。',
    readTime: '约 18 分钟',
    file: 'posts/07-llm-selection.md',
    accent: 'blue'
  },
  {
    slug: 'what-is-api',
    title: 'API 到底是什么——以及为什么它对学 AI 的人很重要',
    subtitle: '不是科班生，就是老老实实把会用但讲不好的东西查清楚、讲明白',
    date: '2026-07-03',
    tags: ['AI Agent', '概念辨析', 'API'],
    excerpt: 'API 就是一套约定的通信格式——用一种标准化的方式，让不同的程序之间能互相聊天。API Key 是钥匙，Header 是附加说明，Base URL 是地址，Body 是你想说的话。它最厉害的地方不是技术上的优雅——是经济上的民主。',
    readTime: '约 13 分钟',
    file: 'posts/08-what-is-api.md',
    accent: 'purple'
  },
  {
    slug: 'prompt-is-dead',
    title: '2026 年了，还学啥提示词啊',
    subtitle: '看完吴恩达两门提示词课程之后的整理——哪些留着，哪些扔了',
    date: '2026-07-03',
    tags: ['AI Agent', '学习方法论', '提示词工程'],
    excerpt: '2023年在学"写咒语"，2026年在学管理上下文。底层三条物理性质不变：无状态、概率分布、注意力衰减——吃透这三条，模型怎么变你都能跟上。顺便推荐吴恩达老师的课，一种"循序渐进，自然而然就懂了"的感觉。',
    readTime: '约 10 分钟',
    file: 'posts/09-prompt-is-dead.md',
    accent: 'blue'
  },
  {
    slug: 'skill-compound-effect',
    title: 'Skill：我会永远喜欢复利效应',
    subtitle: '看完 DeepLearning.AI Agent Skills 课之后的梳理——Skill 为什么是协议层，以及怎么创建一个属于你的 Skill',
    date: '2026-07-03',
    tags: ['AI Agent', '概念辨析', 'Skill'],
    excerpt: 'Skill 是人和 Agent 之间的协议——告诉它该用什么步骤、什么工具、什么红线。渐进式披露让你装100个Skill也只占几百token。四种创建方式：手写、Skill Creator、社区下载、Agent内置。最打动我的不是技术优雅——是复利效应：打包一次，复用永远。',
    readTime: '约 7 分钟',
    file: 'posts/10-skill-compound-effect.md',
    accent: 'purple'
  },
  {
    slug: 'context-is-god',
    title: 'Context：现阶段的神',
    subtitle: '不只是提示词——语义背景决定一切',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','Context'],
    excerpt: 'Context 不是 prompt，是你给模型搭建的整个语义背景——系统提示词、记忆、知识库、附件、工作空间、工具、MCP，全是它。现阶段，你有多懂给模型搭上下文，它就有多懂你。',
    readTime: '约 8 分钟',
    file: 'posts/11-context-is-god.md',
    accent: 'purple'
  },
  {
    slug: 'mcp-and-connectors',
    title: 'MCP 与连接器',
    subtitle: '打通了就是语义背景，叫什么不重要',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','MCP'],
    excerpt: 'MCP 是 Anthropic 提出的通信协议，Host-Client-Server 三层架构让大模型跟外部世界标准化连接。到 2026 年，你不需要手写 JSON 了——市场里一键安装。连接器也好、CLI 也好、Skill 也好，我不在乎叫什么，打通了就是我的语义背景。',
    readTime: '约 11 分钟',
    file: 'posts/12-mcp-and-connectors.md',
    accent: 'purple'
  },
  {
    slug: 'agent-memory',
    title: '越来越懂你的记忆系统，但有时候不懂瞎懂',
    subtitle: '看了吴恩达记忆与编排课之后——Agent 怎么记、怎么忘，以及我为什么被它烦到手动改 MEMORY.md',
    date: '2026-07-03',
    tags: ['AI Agent', '概念辨析', '记忆系统'],
    excerpt: 'CoALA 四种记忆：工作、程序、语义、情景。Agent 确实越来越懂你，但它分不清什么是你真正想让它记住的，什么是你随口一提的。我定期打开 MEMORY.md 手动删东西——遗忘比记忆更重要。',
    readTime: '约 8 分钟',
    file: 'posts/13-agent-memory.md',
    accent: 'purple'
  },
  {
    slug: 'info-automation',
    title: '保持信息新鲜感的自动化',
    subtitle: '让 Agent 当信息牧羊犬，我负责判断哪些草值得吃',
    date: '2026-07-03',
    tags: ['AI Agent', '自动化', '定时任务'],
    excerpt: '学 AI 最大的陷阱是学完就停。行业一直在流，信息源必须保持新鲜。定时任务、Hooks、Webhook——让 Agent 主动收集、主动提醒，把理解的时间留给人。',
    readTime: '约 8 分钟',
    file: 'posts/14-info-automation.md',
    accent: 'camel'
  },
  {
    slug: 'knowledge-management',
    title: '知识管理的必要性',
    subtitle: '从德鲁克到 Karpathy——你为什么需要一台"知识编译器"',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','知识管理','RAG'],
    excerpt: '彼得·德鲁克说每个人都是自己的CEO，Karpathy 说 LLM 应该当知识库的管理员。从本体论到 Wiki 到 RAG 到 LLM Wiki，知识管理走过了漫长的路。RAG 的底层原理就是五步流水线，而我现在还在享受自己搭框架、填血肉的过程。',
    readTime: '约 9 分钟',
    file: 'posts/15-knowledge-management.md',
    accent: 'blue'
  },
  {
    slug: 'multi-agent-a2a',
    title: '多智能体系统与 A2A 协议',
    subtitle: '多智能体是趋势，但不是必须——至少在我现在这个阶段',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','多智能体','A2A'],
    excerpt: '2026年多智能体火了：WorkBuddy 专家团、Qoder Work 团队协作、Kimi Work Agent Swarm。Google 2025年发布了A2A协议，给 Agent 之间的通信立了规矩。中心化、去中心化、混合式三种架构各有利弊。但说实话——我没怎么用过多智能体，因为调教一个新 Agent 太累了。',
    readTime: '约 8 分钟',
    file: 'posts/16-multi-agent-a2a.md',
    accent: 'blue'
  },
  {
    slug: 'cli-vs-gui',
    title: 'CLI 与 GUI 的选择',
    subtitle: 'Agent 天生适合跑在命令行里，但人天生适合看图形界面',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','CLI','GUI'],
    excerpt: 'CLI 是开发者的界面，GUI 是所有人的界面。Agent 通过 Bash、Shell 操控电脑，天生适合跑在命令行里——Claude Code、飞书 lark-cli 都选择了 CLI。但只要人还在操控电脑，GUI 就会一直在。CLI 是 Agent 的跑道，GUI 是人的客厅。',
    readTime: '约 7 分钟',
    file: 'posts/17-cli-vs-gui.md',
    accent: 'blue'
  },
  {
    slug: 'is-claude-code-really-good',
    title: '吹成神的 Claude Code 真的有这么好吗？',
    subtitle: '隐写术标记中国用户，加密黑名单覆盖 147 个域名——以及，我自己的使用体验',
    date: '2026-07-03',
    tags: ['AI Agent','概念辨析','Claude Code'],
    excerpt: '2026年7月1日，Reddit爆出Claude Code用隐写术秘密标记中国用户——读系统时区、比对加密黑名单、修改Unicode字符回传身份。我在新闻爆出之前刚好做过这个工具的深度调研和使用。安装踩坑、响应极慢、权限静默等待——说实话，没网上吹得那么神。而国产的工具越来越好用，为什么非要用一个有危险的他？',
    readTime: '约 8 分钟',
    file: 'posts/18-is-claude-code-really-good.md',
    accent: 'purple'
  },
  {
    slug: 'security-tips',
    title: '安全那点事：我懂的真的不多',
    subtitle: '沙盒、权限、数据隐私，和一个权威评估就够了',
    date: '2026-07-03',
    tags: ['AI Agent','沙盒隔离','默认权限','数据隐私'],
    excerpt: '不是安全专家，就是个普通用户。但这几个习惯我用着挺踏实：沙盒隔离划个圈、默认权限最小化、数据隐私自己把握。另外，别管软件自己说多安全，看中国信通院的可信能力评估——那是权威机构替你审过了。',
    readTime: '约 5 分钟',
    file: 'posts/19-security-tips.md',
    accent: 'purple'
  },
  {
    slug: 'usage-tips',
    title: '使用心得：体感是唯一的货币',
    subtitle: '所有方法论都是别人的——真正属于你的，只有你亲手攒出来的技术体感',
    date: '2026-07-03',
    tags: ['AI Agent', '学习方法论', '技术体感'],
    excerpt: '聊使用方法论的帖子到处都有——切换模型、先骨架再血肉、工作流、Skill、MCP。但这些是"别人的使用心得"。你对一个技术真正的理解，只会在你亲手用过之后一点一点长出来。别怕，它就是个软件，跟QQ微信一样——崩了就再来。',
    readTime: '约 5 分钟',
    file: 'posts/20-usage-tips.md',
    accent: 'camel'
  },
  {
    slug: 'final-thoughts',
    title: '写在最后：一个人走路，和知道有同行者，是不一样的',
    subtitle: '既然体感才是答案，为什么还要写这二十篇？——帮人迈出第一步而已',
    date: '2026-07-03',
    tags: ['AI Agent', '学习方法论', '学习路径'],
    excerpt: '很多人不是缺毅力、缺时间——是连第一步往哪迈都不知道。我写这些，不是想做谁的老师。只是想在这条路上，有一些同行者。',
    readTime: '约 5 分钟',
    file: 'posts/21-final-thoughts.md',
    accent: 'camel'
  }
];

// 关于页信息（可自行修改）
const ABOUT_INFO = {
  name: 'AIdreamer',
  tagline: '今天有变成技术 top 吗？',
  avatarText: 'A',
  info: [
    { icon: '🎯', label: '当前主题', value: '从小白玩转 AI Agent' },
    { icon: '📅', label: '开始时间', value: '2026 年 7 月' },
    { icon: '💡', label: '更新频率', value: '想清楚一篇写一篇' },
    { icon: '🌿', label: '写作风格', value: '真实 · 朴素 · 可复现' }
  ],
  file: 'pages/about.md'
};

// 网站全局信息
const SITE_INFO = {
  title: '从小白玩转 AI Agent',
  subtitle: '一点一滴，记录一个普通人探索 AI Agent 的真实旅程',
  eyebrow: 'A LEARNING JOURNAL',
  aboutUrl: 'index.html'
};

// 暴露到全局
window.ARTICLES = ARTICLES;
window.ABOUT_INFO = ABOUT_INFO;
window.SITE_INFO = SITE_INFO;
