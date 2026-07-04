> 不是最强，但零件齐全、开箱即用——拿它当练习场，刚好

上一篇聊了几款国内 Agent 怎么选。这篇我挑一个拆开看——**一个桌面 Agent 到底长什么样，里面的零件怎么运转的。**

我选 WorkBuddy。它不是我的主力，但拿它来"拆"特别合适：零件齐全、开箱即用、我天天在用、熟。更重要的是，**它缺的几样东西，正好能反衬出别的 Agent 强在哪**——后面会专门讲。

## 一、安装登录：简单到不像话

官网下载安装包，一路点 next，完事。登录用微信扫码——没有账号密码那一套。

这一步没什么好说的。桌面 Agent 的安装门槛已经被各家卷到地板上了，WorkBuddy 在这方面中规中矩。

## 二、认识界面：三栏结构

装上之后你看到的是一个传统桌面 GUI 软件的样貌。**左侧是侧边栏，中间是对话区，右侧是结果区。** 任务进行中，右侧会实时出现产物预览——你让它写文档，右侧就显示文档；让它做网页，右侧就预览网页。

<div class="svg-diagram">
  <svg viewBox="0 0 660 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;">
    <defs>
      <linearGradient id="sidebarG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#6b8cae" stop-opacity="0.12"/><stop offset="100%" stop-color="#6b8cae" stop-opacity="0.06"/>
      </linearGradient>
      <linearGradient id="chatG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c9a876" stop-opacity="0.10"/><stop offset="100%" stop-color="#c9a876" stop-opacity="0.04"/>
      </linearGradient>
      <linearGradient id="resultG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#8fb89c" stop-opacity="0.12"/><stop offset="100%" stop-color="#8fb89c" stop-opacity="0.05"/>
      </linearGradient>
    </defs>

    <!-- 外框 -->
    <rect x="30" y="30" width="620" height="320" rx="12" fill="none" stroke="#e8e2d8" stroke-width="1.5"/>

    <!-- 侧边栏 -->
    <rect x="30" y="30" width="120" height="320" rx="12" fill="url(#sidebarG)"/>
    <text x="90" y="55" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" font-weight="600" fill="#6b8cae">侧边栏</text>
    <line x1="50" y1="75" x2="130" y2="75" stroke="#a8bdd1" stroke-width="0.5" opacity="0.5"/>
    <rect x="48" y="88" width="84" height="20" rx="4" fill="#6b8cae" opacity="0.15"/>
    <text x="90" y="102" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b8cae">对话</text>
    <rect x="48" y="114" width="84" height="20" rx="4" fill="#6b8cae" opacity="0.08"/>
    <text x="90" y="128" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">技能</text>
    <rect x="48" y="140" width="84" height="20" rx="4" fill="#6b8cae" opacity="0.08"/>
    <text x="90" y="154" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">专家</text>
    <rect x="48" y="166" width="84" height="20" rx="4" fill="#6b8cae" opacity="0.08"/>
    <text x="90" y="180" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">自动化</text>
    <rect x="48" y="192" width="84" height="20" rx="4" fill="#6b8cae" opacity="0.08"/>
    <text x="90" y="206" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">文件</text>

    <!-- 对话区 -->
    <rect x="150" y="30" width="280" height="320" fill="url(#chatG)"/>
    <text x="290" y="55" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" font-weight="600" fill="#c9a876">对话区</text>
    <line x1="170" y1="75" x2="410" y2="75" stroke="#ddc9a8" stroke-width="0.5" opacity="0.5"/>
    <!-- 对话气泡 -->
    <rect x="170" y="90" width="180" height="32" rx="6" fill="#c9a876" opacity="0.15"/>
    <text x="180" y="110" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#6b665d">帮我写一份周报</text>
    <rect x="190" y="135" width="220" height="48" rx="6" fill="#c9a876" opacity="0.08"/>
    <text x="200" y="155" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">好的，我来帮你写…</text>
    <text x="200" y="170" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#9a948a">正在生成文档…</text>
    <!-- 输入框 -->
    <rect x="170" y="310" width="240" height="28" rx="14" fill="none" stroke="#ddc9a8" stroke-width="1"/>
    <text x="180" y="328" font-family="'Noto Sans SC',sans-serif" font-size="10" fill="#c0b8aa">输入消息…</text>

    <!-- 结果区 -->
    <rect x="430" y="30" width="220" height="320" fill="url(#resultG)"/>
    <text x="540" y="55" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" font-weight="600" fill="#8fb89c">结果区</text>
    <line x1="450" y1="75" x2="630" y2="75" stroke="#b8d4c0" stroke-width="0.5" opacity="0.5"/>
    <!-- 产物预览 -->
    <rect x="450" y="90" width="180" height="100" rx="6" fill="#8fb89c" opacity="0.08"/>
    <rect x="460" y="100" width="100" height="6" rx="2" fill="#8fb89c" opacity="0.3"/>
    <rect x="460" y="112" width="140" height="4" rx="2" fill="#8fb89c" opacity="0.2"/>
    <rect x="460" y="122" width="120" height="4" rx="2" fill="#8fb89c" opacity="0.2"/>
    <rect x="460" y="132" width="130" height="4" rx="2" fill="#8fb89c" opacity="0.2"/>
    <text x="540" y="165" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#8fb89c">文档预览</text>
    <!-- 标签 -->
    <rect x="450" y="205" width="55" height="18" rx="9" fill="#8fb89c" opacity="0.12"/>
    <text x="477" y="217" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">概览</text>
    <rect x="512" y="205" width="55" height="18" rx="9" fill="#8fb89c" opacity="0.08"/>
    <text x="539" y="217" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">变更</text>
    <rect x="574" y="205" width="55" height="18" rx="9" fill="#8fb89c" opacity="0.08"/>
    <text x="601" y="217" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">浏览器</text>

    <text x="540" y="255" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">任务进行中</text>
    <text x="540" y="270" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">实时预览产物</text>
  </svg>
</div>

一个建议：**想对它了解得比较好，直接看官方使用文档。** 每家桌面 Agent 都有自己的文档，WorkBuddy 的在 codebuddy.cn/docs，比任何第三方教程都全。下面我只讲大的框架，细节后面单独展开。

## 三、用之前先看设置

进来之后别急着用，先看设置。设置里基本涵盖了常用配置：模型、记忆、系统设置。

有个东西要特别提醒——**「体验优化计划」**。说白了就是问你要不要允许它拿你的数据去训练。一般默认是允许的，如果你介意隐私，自己关掉。

## 四、两套模式维度

WorkBuddy 的模式选择容易把人搞晕，因为**它有两套维度**：一套按场景分，一套按执行方式分。

<div class="svg-diagram">
  <svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;">
    <!-- 场景模式 -->
    <text x="170" y="30" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" font-weight="600" fill="#3d3a35">场景模式（你在做什么）</text>
    <rect x="40" y="50" width="100" height="60" rx="8" fill="#8fb89c" opacity="0.15" stroke="#8fb89c" stroke-width="1"/>
    <text x="90" y="78" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#5e8f6b">日常办公</text>
    <text x="90" y="95" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">默认</text>
    <rect x="150" y="50" width="100" height="60" rx="8" fill="#6b8cae" opacity="0.12" stroke="#6b8cae" stroke-width="1"/>
    <text x="200" y="78" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#6b8cae">代码开发</text>
    <text x="200" y="95" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">写代码</text>
    <rect x="260" y="50" width="100" height="60" rx="8" fill="#c9a876" opacity="0.12" stroke="#c9a876" stroke-width="1"/>
    <text x="310" y="78" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#c9a876">设计创意</text>
    <text x="310" y="95" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">模板驱动</text>

    <!-- 执行模式 -->
    <text x="510" y="30" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="14" font-weight="600" fill="#3d3a35">执行模式（它怎么干）</text>
    <rect x="380" y="50" width="90" height="60" rx="8" fill="#c9a876" opacity="0.15" stroke="#c9a876" stroke-width="1"/>
    <text x="425" y="75" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#c9a876">Craft</text>
    <text x="425" y="92" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">即时执行·默认</text>
    <rect x="480" y="50" width="90" height="60" rx="8" fill="#a89bc4" opacity="0.12" stroke="#a89bc4" stroke-width="1"/>
    <text x="525" y="75" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#a89bc4">Ask</text>
    <text x="525" y="92" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">只读咨询</text>
    <rect x="580" y="50" width="80" height="60" rx="8" fill="#8fb89c" opacity="0.12" stroke="#8fb89c" stroke-width="1"/>
    <text x="620" y="75" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#5e8f6b">Plan</text>
    <text x="620" y="92" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#9a948a">先规划后执行</text>

    <!-- 说明 -->
    <text x="170" y="150" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" fill="#9a948a">决定"界面和工具集长什么样"</text>
    <text x="510" y="150" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" fill="#9a948a">决定"它能不能改你的文件"</text>

    <!-- 组合关系 -->
    <rect x="120" y="180" width="440" height="90" rx="10" fill="#f5f3ef" stroke="#e8e2d8" stroke-width="1"/>
    <text x="340" y="205" text-anchor="middle" font-family="'Noto Serif SC',serif" font-size="13" font-weight="600" fill="#3d3a35">两套维度组合使用</text>
    <text x="340" y="228" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" fill="#6b665d">例：场景选「设计创意」+ 执行选「Plan」</text>
    <text x="340" y="248" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="11" fill="#6b665d">= 先规划设计稿结构，确认后再生成</text>
  </svg>
</div>

**场景模式**有三个：日常办公（默认）、代码开发、设计创意。设计创意这块我得坦白——我不做设计，几乎没怎么用。据说是模板驱动的，选个模板（网站、App、PPT、海报）它帮你做。但具体有没有画布式交互、跟 TRAE Work 那种画布模式比怎么样，我用不到、也感知不到，这里不下定论。

**执行模式**也有三个，这个更容易搞混：
- **Craft**（默认）：即时执行，你说它干，能改文件
- **Ask**：只读咨询，只回答不改动——适合"我就问问"的场景
- **Plan**：先规划后执行，复杂任务适合用这个

## 五、下达任务

想让它干活，直接在对话框输入就行。输入的时候有几个并列选项：

**模型选择**：默认 Auto 模式，它自己选。你也可以手动指定——选自己的模型，或选配置好的模型。

**权限级别**：这是很多人会忽略的一个维度。WorkBuddy 有「默认权限」和「完全访问」两种。**一般选默认权限就够了**——「完全访问」模式它操作命令行不用问你，万一误删文件就不好了。这是个独立的安全开关，每次执行都值得留意。

**技能调用**：有两种方式——一是点技能框自己选，二是按斜杠 `/` 唤出技能列表。技能是 WorkBuddy 的一大特色，有个 SkillHub 技能市场，可以装各种扩展能力。

**连接器**：可以连接其他软件。我连了飞书、IMA 知识库。授权完成后，它就能读写这些平台的数据。

## 六、附件与输入

**上传**：本地文件、腾讯文档、知识库内容都能作为附件喂给它。

**增强提示词**：开启后它帮你优化输入，相当于自动 Prompt 工程。

**语音输入**：支持，但有个小缺陷——只能录一分钟。如果你想说很久，我推荐一个替代方案：**电脑装智谱输入法，手机装豆包输入法。** 这俩是系统级输入法，不管软件支不支持语音输入，你都能通过它们语音转文字，不限时长。

## 七、高级功能

- **多端支持**：Windows / Mac 桌面端，还有企微/飞书/微信/钉钉远程操控
- **项目**：团队协作模式，可以多 Agent 并行
- **自动化**：定时执行任务，官方有实例可以参考
- **工作空间**：指定一个文件夹作为它的工作目录。不选的话它自己创建一个
- **长记忆**：夜间自动整理记忆

## 八、WorkBuddy 没有的能力

讲完它有什么，也得讲它没什么。**这几样能力，是别的 Agent 有而 WorkBuddy 没有的——正好能看出各家路线的差异。**

<div class="svg-diagram">
  <svg viewBox="0 0 650 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;">
    <!-- 表头 -->
    <rect x="40" y="20" width="600" height="40" rx="6" fill="#f5f3ef" stroke="#e8e2d8" stroke-width="1"/>
    <line x1="220" y1="20" x2="220" y2="60" stroke="#e8e2d8" stroke-width="1"/>
    <line x1="380" y1="20" x2="380" y2="60" stroke="#e8e2d8" stroke-width="1"/>
    <line x1="510" y1="20" x2="510" y2="60" stroke="#e8e2d8" stroke-width="1"/>
    <text x="130" y="45" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#3d3a35">能力</text>
    <text x="300" y="45" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#c9a876">WorkBuddy</text>
    <text x="445" y="45" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#6b8cae">Qoder Work</text>
    <text x="575" y="45" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" font-weight="600" fill="#8fb89c">Kimi Work</text>

    <!-- 行1 Browser Use -->
    <rect x="40" y="60" width="600" height="60" fill="#fdfbf7"/>
    <line x1="220" y1="60" x2="220" y2="120" stroke="#efeae0" stroke-width="1"/>
    <line x1="380" y1="60" x2="380" y2="120" stroke="#efeae0" stroke-width="1"/>
    <line x1="510" y1="60" x2="510" y2="120" stroke="#efeae0" stroke-width="1"/>
    <text x="130" y="95" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" fill="#3d3a35">浏览器操控</text>
    <text x="300" y="92" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">✗ curl 检索</text>
    <text x="300" y="108" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#c0b8aa">只能读网页</text>
    <text x="445" y="92" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#5e8f6b">✓ Browser Use</text>
    <text x="445" y="108" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">能操作网页</text>
    <text x="575" y="95" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">—</text>

    <!-- 行2 Computer Use -->
    <rect x="40" y="120" width="600" height="60" fill="#f5f3ef"/>
    <line x1="220" y1="120" x2="220" y2="180" stroke="#efeae0" stroke-width="1"/>
    <line x1="380" y1="120" x2="380" y2="180" stroke="#efeae0" stroke-width="1"/>
    <line x1="510" y1="120" x2="510" y2="180" stroke="#efeae0" stroke-width="1"/>
    <text x="130" y="155" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" fill="#3d3a35">Computer Use</text>
    <text x="300" y="158" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">✗ 无</text>
    <text x="445" y="152" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#5e8f6b">✓ 屏幕级操控</text>
    <text x="445" y="168" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">点按钮、填表单、切应用</text>
    <text x="575" y="155" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">—</text>

    <!-- 行3 长程任务 -->
    <rect x="40" y="180" width="600" height="60" fill="#fdfbf7"/>
    <line x1="220" y1="180" x2="220" y2="240" stroke="#efeae0" stroke-width="1"/>
    <line x1="380" y1="180" x2="380" y2="240" stroke="#efeae0" stroke-width="1"/>
    <line x1="510" y1="180" x2="510" y2="240" stroke="#efeae0" stroke-width="1"/>
    <text x="130" y="215" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" fill="#3d3a35">长程任务模式</text>
    <text x="300" y="218" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">✗ 无</text>
    <text x="445" y="218" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">—</text>
    <text x="575" y="212" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#5e8f6b">✓ Goal Mode</text>
    <text x="575" y="228" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">7×24h 不间断</text>

    <!-- 行4 多Agent团队 -->
    <rect x="40" y="240" width="600" height="60" fill="#f5f3ef"/>
    <line x1="220" y1="240" x2="220" y2="300" stroke="#efeae0" stroke-width="1"/>
    <line x1="380" y1="240" x2="380" y2="300" stroke="#efeae0" stroke-width="1"/>
    <line x1="510" y1="240" x2="510" y2="300" stroke="#efeae0" stroke-width="1"/>
    <text x="130" y="275" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" fill="#3d3a35">多 Agent 团队</text>
    <text x="300" y="272" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c9a876">~ 有专家团</text>
    <text x="300" y="288" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#c9a876">不支持自建团队</text>
    <text x="445" y="272" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#5e8f6b">✓ 多 Agent 协作</text>
    <text x="445" y="288" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">可视化并行</text>
    <text x="575" y="275" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">—</text>

    <!-- 行5 反思意识 -->
    <rect x="40" y="300" width="600" height="60" fill="#fdfbf7"/>
    <line x1="220" y1="300" x2="220" y2="360" stroke="#efeae0" stroke-width="1"/>
    <line x1="380" y1="300" x2="380" y2="360" stroke="#efeae0" stroke-width="1"/>
    <line x1="510" y1="300" x2="510" y2="360" stroke="#efeae0" stroke-width="1"/>
    <text x="130" y="335" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="12" fill="#3d3a35">反思意识</text>
    <text x="300" y="338" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">✗ 无</text>
    <text x="445" y="332" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#5e8f6b">✓ 意识系统</text>
    <text x="445" y="348" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="9" fill="#5e8f6b">记忆+反思+进化</text>
    <text x="575" y="335" text-anchor="middle" font-family="'Noto Sans SC',sans-serif" font-size="13" fill="#c0b8aa">—</text>

    <!-- 外框 -->
    <rect x="40" y="20" width="600" height="340" rx="6" fill="none" stroke="#e8e2d8" stroke-width="1"/>
  </svg>
</div>

**1. 浏览器操控（Browser Use）—— Qoder Work 有，WorkBuddy 没有**

WorkBuddy 检索网页用的是 curl 之类的方式——它只能"读"网页内容，不能"操作"网页。Qoder Work 内置了 Browser Use，有三种方案集成，Agent 能像真人一样操控浏览器：点按钮、填表单、切页面。**一个是读网页，一个是用网页，差距很大。**

**2. Computer Use —— Qoder Work 有，WorkBuddy 没有**

Computer Use 比 Browser Use 更猛——它不只是操控浏览器，而是**操控整个电脑屏幕**。点按钮、输入文字、切换应用，Agent 能"看到"屏幕画面并在上面执行操作。任务涉及图形界面、走不通 API 和命令行的时候，这个能力就是降维打击。

**3. 长程任务模式 —— Kimi Work 有，WorkBuddy 没有**

Kimi Work 6 月 18 日上了 Goal Mode（目标模式），能 7×24 小时不间断运行。**适合那种目标清楚、路径不确定、需要多轮尝试的长任务**——比如"花几小时调研某个行业并产出报告"。WorkBuddy 的任务是你发一次指令它执行一次，没有这种"放出去让它自己跑很久"的模式。

不过这块涉及多端协同的问题——任务跑着跑着要不要你介入、手机端怎么查看进度、断了怎么续——挺多坑的。我现在还没有长程任务的需求，所以 Kimi Work 没怎么用。等我真的有这种场景了，会单独写一篇讲这个事儿。

**4. 多 Agent 团队 —— Qoder Work 有，WorkBuddy 半个**

WorkBuddy 有专家团，能调用不同专家，但**不支持创建多智能体协作的团队模式**。Qoder Work 支持多 Session 控制 + 多 Agent 可视化，可以让多个 Agent 并行干活、互相配合。

**5. 反思意识 —— Qoder Work 有，WorkBuddy 没有**

Qoder Work 上线了「意识」功能，含三个模块：**记忆（保存信息）、反思（整理淘汰）、技能进化（沉淀复用）**。它的反思机制借鉴了人脑"选择性遗忘"——每次反思前做快照备份，反思后用硬规则校验，越界就回滚。反复处理某类任务时，它还会自动生成技能建议。

WorkBuddy 也有长记忆（夜间整理），但没有这套"反思 → 进化"的闭环。

## 九、选工具就像选兵器

讲这么多不是踩 WorkBuddy。**它便宜、零件齐、好上手，当练习场刚好。** 但你得知道天花板在哪——

- 想要浏览器自动化、操控电脑屏幕 → Qoder Work
- 想要长程任务、放出去跑一天 → Kimi Work Goal Mode（我还没用，有需求了再聊）
- 想要多 Agent 协作、AI 能自我反思进化 → Qoder Work
- 想要量大管饱、日常任务不心疼 → WorkBuddy

没有最好的 Agent，只有适合当前任务的 Agent。我现在是 WorkBuddy 当日常、Qoder Work 做重活——Kimi Work 等有长程需求了再加进来。

> 工具是死的，人是活的。先把一个用熟，再慢慢扩——别一上来就全要。
