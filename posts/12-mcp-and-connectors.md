> 连接器也好、插件也好、MCP 也好、CLI 也好——叫什么不重要，重要的是，打通了就是我的语义背景。

> 本文部分核心概念与架构图参考自吴恩达（Andrew Ng）在 DeepLearning.AI 的 MCP 课程。以下是我的学习笔记，记录于 2026 年 7 月，后续协议或课程内容如有更新，请以官方最新版本为准。

## 一、MCP 是什么——先把名字拆开

MCP 全称是 **Model Context Protocol**，三个词逐个拆：

- **Model**：大模型——Claude、GPT、DeepSeek，都一样
- **Context**：上一篇刚讲完——语义背景。模型做决策前看到的所有信息
- **Protocol**：协议——一套"你说 A 我就回 B"的通信规矩

合在一起：**一套让大模型跟外部世界标准化通信的协议。**

它是 2024 年 11 月由 Anthropic（Claude 的公司）提出并开源的。当时业界面临一个很具体的痛点：每家 AI 应用接入外部工具（数据库、API、文件系统）都得自己写一套适配层。就像每个电器以前都有自己专属的充电口——烦死了。MCP 做的事，相当于给所有人发了一个 USB-C 口：**你按这个协议来，我就能跟你通信。**

## 二、从 M×N 的泥潭，到 M+N 的电网

在没有统一协议之前，每个 Agent（Host）要连每个外部工具（Server）都得单独写一套适配。4 个 Host 对 4 个 Server，就是 16 条对接线。每新增一个 Host，就要把 4 个 Server 再适配一遍；每新增一个 Server，就要给 4 个 Host 各写一份。

MCP 做的事情就是引入一个统一协议。大家不再两两握手，而是都接进 MCP 这个「插座」：4 个 Host 只接 MCP，4 个 Server 也只接 MCP，总共 8 条线。新增 Host 或 Server 时，只需多接 1 条线。

<img src="images/mcp-mn-comparison.svg" alt="M×N 与 M+N 的复杂度对比" style="max-width:100%;display:block;margin:16px auto;"/>

吴恩达课程里把这个变化叫做**「从 M×N 的泥潭，到 M+N 的电网」**。每边都只需要理解一次 MCP，复杂度的增长就从乘法式变成了加法式。这是协议真正的价值。

## 三、MCP 的架构：Host、Client、Server

MCP 的设计可以抽象成三个角色：

| 角色 | 对应你看到的什么 | 核心职责 |
|---|---|---|
| **MCP Host** | 你正在用的 Agent 软件 | 接收你的指令，决定调用哪个外部能力 |
| **MCP Client** | Host 内部的一个组件 | 跟 Server 建立连接、收发消息 |
| **MCP Server** | 外部工具/服务 | 真正执行：读文件、查数据库、调 API |

一句话：**Host 决定要什么，Client 负责传话，Server 负责执行。**

<img src="images/mcp-architecture.svg" alt="MCP Host-Client-Server 架构" style="max-width:100%;display:block;margin:16px auto;"/>

MCP 走的是 JSON-RPC 2.0 协议——本质上就是发一个标准格式的 JSON 请求，Server 收到后返回一个标准格式的 JSON 响应。不是什么黑科技，就是一套大家都同意的"话怎么说"的约定。

一个 MCP Server 的配置文件长这样：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxx"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/path/to/allowed/files"]
    },
    "postgres": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "mcp/postgres", "postgresql://user:pass@host/db"]
    }
  }
}
```

配置好之后，Agent 就多了一个能力——比如 `github` 这个 Server 让它能读你的 Issue、查你的 PR、搜你的仓库。不需要你每次复制粘贴，它自己通过 MCP 去拿。

## 四、两种通信方式：本地 stdio vs 远程 HTTP

MCP 的连接可以走两种传输层。吴恩达课程里这张图很清楚地说明白了：

| 方式 | 典型场景 | 特点 |
|---|---|---|
| **stdio** | 本地脚本/命令行工具 | 通过标准输入输出与本地进程通信，适合文件系统、本地 CLI |
| **Streamable HTTP / SSE** | 远程服务/云 API | 通过网络访问远程 Server，适合数据库、第三方 SaaS |

用 stdio 时，MCP Server 通常是你本地跑的一个脚本；用 HTTP 时，它可以是远程部署的服务。两种都符合 MCP 协议，只是"物理线路"不同。这也解释了为什么同一个协议既能连本地文件，也能连飞书、GitHub 这些云端服务。

## 五、Server 能暴露什么：Tools、Resources、Prompts

一个 MCP Server 不是只能提供"工具调用"。按协议规范，它主要暴露三类能力：

<img src="images/mcp-server-capabilities.svg" alt="MCP Server 的三种能力" style="max-width:100%;display:block;margin:16px auto;"/>

- **Tools**：可被 Agent 调用的动作。比如查 GitHub Issue、读写文件、执行 SQL。
- **Resources**：只读的数据资源。比如文件内容、数据库 Schema、API 文档片段。
- **Prompts**：预设的提示模板或交互模式。比如标准提问格式、多轮对话模板。

这个分类让 Agent 知道：哪些是"动作"、哪些是"数据"、哪些是"说话套路"。吴恩达课程里把这三类叫做 Server 的"能力原语"，我觉得这个叫法很准确。

## 六、2025 到 2026：从写 JSON 到逛市场

2024 年底，配一个 MCP 得手写 JSON、装依赖、配环境变量——门槛高，小白劝退。

但到了 2026 年，这件事已经变样了。以 WorkBuddy 为例——它内置了一个 MCP 市场（叫 MCP Hub），常用的 GitHub、飞书、腾讯文档、IMA 知识库都有现成的。你在界面里点一下「连接」，认证一下，完事。**不需要写那行 JSON。**

Qoder Work 也类似——它的「连接器」模块里列了一堆预集成的服务，点开授权就能用。

这其实就是软件生态的演化规律：先有协议，然后有开发者按协议写 Server，然后平台方把最常用的打包成"一键安装"。你现在已经可以像逛应用商店一样逛 MCP 市场了。

## 七、连接器、MCP、CLI、Skill——到底谁是什么

说实话，这几个概念目前确实有点混。我来画一下：

_MCP_ — 是一种通信协议。定义"A 怎么跟 B 说话"的格式。它是底层规范。

_连接器（Connector）_ — 是 Agent 平台上的一种用户界面概念。你在 WorkBuddy 的「连接器」面板里点一个服务（比如飞书），背后可能用的是 MCP 协议，也可能用的是 Lark CLI，也可能是平台自己写的 SDK。**连接器是前台，MCP 是后台实现之一。**

_CLI_ — 命令行工具。比如飞书的 lark-cli，就是飞书自己开源的一套命令行。Agent 可以通过执行 Shell 命令来调它，不需要走 MCP 协议。这也是一种连接方式，但走的不是 MCP。

_Skill_ — 上一章专门讲过。是"人和 Agent 之间的标准化操作流程"。Skill 里面可能会调用 MCP 连接器作为工具，但 Skill 本身不负责通信——它负责编排。

_插件_ — 最模糊的一个。有些平台把 MCP Server 叫插件，有些把 Skill 叫插件，有些把浏览器扩展叫插件。不同厂商叫法不一样，底层可能走了 MCP，也可能走了自己的私有协议。

所以我的态度很直接：**叫什么不重要，打通了就好。**

你是用 MCP 连的飞书，还是用 Lark CLI 连的，还是用平台内置的连接器连的——我不在乎。我在乎的是，连上之后，Agent 能不能读懂我的消息、能不能操作我的多维表格、能不能加入我的日程。**打通的那一刻，所有这些信息都变成了我的语义背景。**

## 八、我没配过 MCP

坦诚说，我自己没手写过 MCP JSON 配置。不是因为不想学——是因为没被逼到那个份上。现在主流的 Agent 市场里，我需要的连接基本都有了。点一下就通的东西，我没必要去手写 JSON。

但这不是说 MCP 不重要。恰恰相反——**正是因为 MCP 把协议层标准化了，平台才能帮你"一键安装"。** 你看到的每一款连接器、每一个能在 Agent 里用的外部工具，背后大概率跑着 MCP。你不需要懂它，但你需要知道它在。它就像电——你不需要知道交流电的频率是 50Hz，但你的灯亮了，是因为有这套标准在默默运转。