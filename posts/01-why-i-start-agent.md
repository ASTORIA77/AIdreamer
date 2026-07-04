我不是因为焦虑才开始用 AI 的，也不是因为什么"AI 要取代人类"的恐慌。

这事对我来说，就是水到渠成。

## 一、我先是在学 AI 本身

我不是算法工程师，但我确实在学 AI——从算法开始学的。

路径很传统：传统机器学习起步，然后 CNN，然后 Transformer，沿着这条线一路啃下来。学了半年，到今年年初，对整个技术原理算是有了一点感觉——说不上扎实，但不再是两眼一抹黑的状态了。

## 二、恰逢其会

就在我刚刚有了点技术体感的时候，国内外一下子出了不少 Agent 产品：

- 国外的 **Claude Code**
- 国内大厂也出了类似的产品，比如 **MiniMax**
- 尤其是模型这边，**Claude Opus 4.6** 出来的时候——那个水平，是真的可以实现生产力级别的交付了

时间点很巧：**我刚好懂了点原理，产品刚好成熟了。**

然后就很自然地用了。没什么戏剧性的转折。

## 三、然后就被惊艳到了

第一次真的用 Agent 帮我干一件完整的事，我的反应就是：**哇，真的好用。**

不是那种"哇好神奇"的惊艳，是那种"这东西真的能替我干活、而且干得不差"的惊艳。以前用大模型聊天，聊完就聊完了，啥也没留下。用 Agent，它是真的能从头到尾帮你把一件事跑通。

然后就一直用到了现在。

## 四、我对 Agent 的理解

我对 Agent 的定位很明确：**它是让我用的东西。**

我知道它背后是什么——大模型加上一堆工程化的范式。比如：

- 它的**记忆机制**是怎么实现的
- 它的**工具层**（Function Call、MCP、Skill）是怎么组织的
- 它的**上下文管理**是怎么做的

这些我都大概知道原理。但我没打算自己从零搭一个 Agent 框架——**懂个大概，能用好就行。** 我的精力花在"怎么把它用出花来"上，而不是"怎么造一个更好的它"上。

## 五、核心：用 AI 学 AI 的飞轮

这才是我最想说的一点。

我一直打的旗号是四个字：**用 AI 学 AI。**

什么意思？就是一个循环：

<div class="svg-diagram" style="text-align:center;margin:32px 0;">
<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;height:auto;">
  <defs>
    <marker id="arrow-flow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L8,3 L0,6 Z" fill="#c9a876"/>
    </marker>
  </defs>
  <!-- 中心循环图 -->
  <g font-family="'Noto Sans SC',sans-serif">
    <!-- 用Agent学AI -->
    <rect x="20" y="40" width="160" height="56" rx="10" fill="#fdfbf7" stroke="#6b8cae" stroke-width="1.5"/>
    <text x="100" y="68" text-anchor="middle" fill="#6b8cae" font-size="14" font-weight="600">用 Agent 学 AI</text>
    <text x="100" y="86" text-anchor="middle" fill="#6b665d" font-size="11">学习加速</text>
    <!-- 理解更深 -->
    <rect x="280" y="40" width="160" height="56" rx="10" fill="#fdfbf7" stroke="#8fb89c" stroke-width="1.5"/>
    <text x="360" y="68" text-anchor="middle" fill="#5e8f6b" font-size="14" font-weight="600">对 AI 理解更深</text>
    <text x="360" y="86" text-anchor="middle" fill="#6b665d" font-size="11">原理通透</text>
    <!-- 更会用 -->
    <rect x="280" y="180" width="160" height="56" rx="10" fill="#fdfbf7" stroke="#c9a876" stroke-width="1.5"/>
    <text x="360" y="208" text-anchor="middle" fill="#9a7a45" font-size="14" font-weight="600">更会用 Agent</text>
    <text x="360" y="226" text-anchor="middle" fill="#6b665d" font-size="11">用出花来</text>
    <!-- 再学 -->
    <rect x="20" y="180" width="160" height="56" rx="10" fill="#fdfbf7" stroke="#a89bc4" stroke-width="1.5"/>
    <text x="100" y="208" text-anchor="middle" fill="#7567a0" font-size="14" font-weight="600">再学更深 AI</text>
    <text x="100" y="226" text-anchor="middle" fill="#6b665d" font-size="11">飞轮加速</text>
    <!-- 箭头循环 -->
    <path d="M 180 68 Q 230 55 280 68" fill="none" stroke="#c9a876" stroke-width="2" marker-end="url(#arrow-flow)"/>
    <path d="M 360 96 Q 400 130 360 180" fill="none" stroke="#c9a876" stroke-width="2" marker-end="url(#arrow-flow)"/>
    <path d="M 280 208 Q 230 222 180 208" fill="none" stroke="#c9a876" stroke-width="2" marker-end="url(#arrow-flow)"/>
    <path d="M 100 180 Q 60 130 100 96" fill="none" stroke="#c9a876" stroke-width="2" marker-end="url(#arrow-flow)"/>
    <!-- 中心标注 -->
    <text x="240" y="135" text-anchor="middle" fill="#9a948a" font-size="13" font-weight="500" font-family="'Noto Serif SC',serif">飞轮越转越快</text>
    <text x="240" y="153" text-anchor="middle" fill="#9a948a" font-size="11">学习加速循环</text>
  </g>
</svg>
</div>

**Agent 是我学 AI 的工具，而学 AI 又反过来让我更会用 Agent。** 这两个事情咬在一起，一旦飞轮转起来，学习速度会越来越快。

这就是我的核心方法论。不是"玩 Agent"，不是"研究 Agent"，是**用 Agent 当杠杆，撬动自己学 AI 的效率**。

## 六、所以这个博客会写什么

这个博客写的，不是"怎么玩转 Agent"的教程，也不是"Agent 背后原理"的技术分析。

我写的，是**我用 Agent 学 AI 的真实场景**——偏向于学。

- 某次我让 Agent 帮我搞懂了一个概念，过程怎么搞的
- 某个 Prompt 技巧，我自己摸索出来的
- 某次踩的坑，为什么踩的
- 某个工具的用法，我自己的使用感受

这些东西可能不权威，甚至可能不正确——毕竟我也在学，现在探索得也不一定好。但它们是真实的。

**越学才会越好嘛。** 写下来，回头看，也是一种迭代。

## 七、最后

如果你也在学 AI，或者也在用 Agent，欢迎交流。

我这里写的东西，更多是个人使用感受，不是标准答案。但我觉得，真实的使用感受，有时候比标准答案更有参考价值——因为你能看到一个人是怎么一步步过来的，包括走弯路的那部分。

好了，开篇就到这里。后面一篇，我想先聊聊 Agent 到底是什么——因为我自己一开始也搞混过。

---

*这是「从小白玩转 AI Agent」系列的第一篇。慢慢写，慢慢想。*
