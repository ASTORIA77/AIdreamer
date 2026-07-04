很多人第一次接触"智能体"这个词，是因为今年三月的 OpenClaw 爆火。

但我一直有个疑问：**一个国外的产品，安全性存疑、需要计算机基础、环境配置一堆、卸还卸不干净——干嘛非要从它开始为难自己？**

## 一、先说说 OpenClaw 的问题

我知道 OpenClaw（俗称"龙虾"）确实火，国内也出了一堆"龙虾"类产品跟着热。但我自己的感受是：

- **安全性不太好**：毕竟是国外产品，数据走哪了你心里没底
- **需要一定的计算机知识**：命令行、环境变量、依赖安装……对小白不友好
- **环境配置麻烦**：要装 Node.js、Python、pnpm，路径还得纯英文
- **卸载不干净**：官方卸载命令不清配置目录，得手动删残留文件

我当时是真的懒得管这些。**不是不会，是觉得没必要。** 所以我一开始就盯着国内的产品。

## 二、国内其实早就有了

很多人以为国内 Agent 是跟着 OpenClaw 才起来的，其实不是。

以阶跃星辰为例，他家 2025 年 9 月就开始测桌面端 Agent（叫"小跃"），12 月推内测版，今年 1 月就有 Windows 版了——比 OpenClaw 三月爆火还早好几个月。

我用得早，所以一直在等国内产品变成熟，根本没必要去折腾国外的。

下面聊聊我用过、或者关注过的几款国内 Agent。**先声明：这些是我个人的使用感受，不权威，你完全可以有不同看法。**

## 三、我最推荐的：WorkBuddy（腾讯）

这是我目前比较喜欢用的。推荐理由有四条：

### 1. 腾讯生态打通得最全

它把腾讯的各个产品都接进来了——飞书、企业微信、腾讯文档、微信……生态是现在国内 Agent 里最好的。你不用自己一个个去配连接器，很多开箱就能用。

### 2. Skill Hub 最全

这点是我最满意的。它的技能市场（Skill Hub）里，目前我看到的所有 Agent 里是最全的——文档处理、数据分析、图片编辑、邮件管理、网页抓取……上百个技能直接装就能用。

技能这种东西，网上当然也能找。**但在一个软件里给你打包好了，我当然更开心。** 而且它兼容 OpenClaw 社区的技能生态，社区贡献的也能直接用。

### 3. 开箱即用，不折腾

GUI 界面做得好，不需要本地化那些复杂的配置。下载、安装、登录、开聊——就这么简单。这对不想折腾环境的人来说太友好了。

### 4. 支持自定义模型

这点很多软件做不到。WorkBuddy 内置了混元、DeepSeek、GLM、Kimi、MiniMax 等十几个模型，同时还支持自己配——你有智谱的 API Key、有 DeepSeek 的 Key，填进去就能用，不用走它的计费。

**不同任务用不同模型**：日常办公用混元（快），复杂推理用 DeepSeek 或 GLM（强），创意写作用 Kimi（文本质量高）。这个灵活度是我最看重的。

## 四、第二推荐：Qoder Work（阿里国际版）

注意我说的是**国际版**。它的旗舰版据说是接的海外 SOTA 模型，完成任务的质量确实让我惊艳。

### 优点

- **模型是真的好**：旗舰版用的海外模型，交付质量很高
- **Computer Use**：可以直接操控桌面应用和浏览器，端到端交付的准确率明显更高
- **浏览器扩展**：联网搜索、网页操作都很顺

### 缺点

- **性价比太低**：订阅费真的挺高，而且用海外旗舰模型消耗积分很快
- **不支持自定义模型配置**：这点比较可惜，只能用它给的

**适合谁**：预算充足、追求交付质量、不折腾模型配置的人。

## 五、Kimi Work（月之暗面）

2026 年 6 月才发布的产品。说实话，有了 WorkBuddy 和 Qoder Work 两个主力之后，我并不是所有工具都想用。但 Kimi Work 有几个点我觉得不错：

- **上下文一向做得漂亮**：这是 Kimi 的传统强项
- **中文理解好**：母语场景下更自然
- **WebBridge 浏览器扩展**：刚开始觉得没啥，后来发现确实有用——联网搜索的准确度明显提升
- **目标模式**：支持全天候连续运行，可以挂着让它自己跑

整体没有让我觉得哪里特别惊艳，但如果你主要处理中文内容、对上下文长度有要求，可以试试。

## 六、TRAE Work（字节）

这个是从 Trae Solo 改名来的（2026 年 6 月升级），定位从"开发者专属"变成了"全员 AI 办公平台"。

我觉得它最亮眼的是 **Design 模式**——非常适合做设计。

举个例子：我让别的 Agent 给我出一个网页，它就出一个 HTML 文件，改起来还得自己上手。但 TRAE Work 的 Design 模式里，**你可以直接在画布上编辑某个组件**，跟它说"这个按钮改成圆角"、"这块颜色调深一点"，它就在画布上改给你看。

对设计场景来说，这个交互方式比纯文本对话舒服太多了。

## 七、阶跃星辰"小跃"（入门之选）

这是我用的第一款。它家核心业务是跟车企合作走端侧，所以**轻量化模型做得很好**。

但轻量化一定程度上意味着智能降低——复杂任务它不太能完成。所以我后来就不爱用它当主力了。

不过**性价比上它应该是这几款里最高的**。如果你的任务不复杂——整理个文档、查个信息、写个简单的东西——交给它完全够用，还便宜。

## 八、怎么选？一张图说清楚

<div class="svg-diagram" style="text-align:center;margin:32px 0;">
<svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;height:auto;">
  <defs>
    <linearGradient id="card-1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6b8cae" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#6b8cae" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="card-2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c9a876" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#c9a876" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="card-3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8fb89c" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#8fb89c" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="card-4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a89bc4" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#a89bc4" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="card-5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ddc9a8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ddc9a8" stop-opacity="0.03"/>
    </linearGradient>
  </defs>
  <g font-family="'Noto Sans SC',sans-serif">
    <text x="240" y="24" text-anchor="middle" fill="#9a948a" font-size="12" font-weight="500">五款国内 Agent · 按我的推荐度排序</text>
    
    <!-- WorkBuddy -->
    <rect x="20" y="40" width="440" height="64" rx="10" fill="url(#card-1)" stroke="#6b8cae" stroke-width="1.5"/>
    <text x="40" y="66" fill="#6b8cae" font-size="15" font-weight="600">WorkBuddy</text>
    <text x="40" y="86" fill="#6b665d" font-size="11.5">生态全 · Skill最多 · 开箱即用 · 支持自定义模型</text>
    <text x="440" y="76" text-anchor="end" fill="#6b8cae" font-size="11" font-weight="600">最推荐</text>
    
    <!-- Qoder Work -->
    <rect x="20" y="116" width="440" height="64" rx="10" fill="url(#card-2)" stroke="#c9a876" stroke-width="1.5"/>
    <text x="40" y="142" fill="#9a7a45" font-size="15" font-weight="600">Qoder Work（国际版）</text>
    <text x="40" y="162" fill="#6b665d" font-size="11.5">模型强 · Computer Use · 贵 · 不支持自定义</text>
    <text x="440" y="152" text-anchor="end" fill="#9a7a45" font-size="11" font-weight="600">追求质量</text>
    
    <!-- Kimi Work -->
    <rect x="20" y="192" width="440" height="64" rx="10" fill="url(#card-3)" stroke="#8fb89c" stroke-width="1.5"/>
    <text x="40" y="218" fill="#5e8f6b" font-size="15" font-weight="600">Kimi Work</text>
    <text x="40" y="238" fill="#6b665d" font-size="11.5">上下文好 · 中文强 · 浏览器扩展 · 目标模式</text>
    <text x="440" y="228" text-anchor="end" fill="#5e8f6b" font-size="11" font-weight="600">中文场景</text>
    
    <!-- TRAE Work -->
    <rect x="20" y="268" width="440" height="64" rx="10" fill="url(#card-4)" stroke="#a89bc4" stroke-width="1.5"/>
    <text x="40" y="294" fill="#7567a0" font-size="15" font-weight="600">TRAE Work</text>
    <text x="40" y="314" fill="#6b665d" font-size="11.5">Design模式 · 画布编辑组件 · 适合做设计</text>
    <text x="440" y="304" text-anchor="end" fill="#7567a0" font-size="11" font-weight="600">设计场景</text>
    
    <!-- 阶跃星辰 -->
    <rect x="20" y="344" width="440" height="64" rx="10" fill="url(#card-5)" stroke="#c9a876" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="40" y="370" fill="#9a7a45" font-size="15" font-weight="600">阶跃星辰 小跃</text>
    <text x="40" y="390" fill="#6b665d" font-size="11.5">轻量化 · 性价比高 · 复杂任务弱 · 入门之选</text>
    <text x="440" y="380" text-anchor="end" fill="#9a7a45" font-size="11" font-weight="600">简单任务</text>
  </g>
</svg>
</div>

简单说：

- **想省心、要全能** → WorkBuddy
- **预算够、要质量** → Qoder Work
- **中文为主、看上下文** → Kimi Work
- **要做设计、要画布编辑** → TRAE Work
- **任务简单、要便宜** → 阶跃星辰

## 九、Claude Code 先不说

我知道有人会问 Claude Code。我也有，也下了。但这篇咱们先聚焦国内的——**由易到难，先把国内的玩转了再说。** 国外产品以后有机会单独聊。

## 十、小结

这篇的核心就一句话：**别被"龙虾热"绑架，国内早就有成熟的产品了。**

选 Agent 这事，跟选工具一样——**没有最好，只有最适合你当前场景的。** 多试几个，找到顺手的就行。

下一篇，我打算挑一款产品，拆开看看一个桌面 Agent 到底长什么样——界面、技能、模型、记忆，这些零件具体怎么运转的。

---

*这是「从小白玩转 AI Agent」系列的第三篇。慢慢写，慢慢想。*
