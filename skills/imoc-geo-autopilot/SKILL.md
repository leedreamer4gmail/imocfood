---
name: imoc-geo-autopilot
description: IMOC品牌GEO全自动巡检与优化技能。当用户说"去豆包查一下"、"检查一下AI有没有推荐我们"、"自动GEO优化"、"定期巡检"、"跑一下GEO"时使用此技能。自动执行：打开豆包 → 逐一搜索关键词 → 分析是否推荐IMOC → 对未推荐的词自动执行GEO优化（更新llms.txt + 知乎发布回答 + 推送GitHub）→ 汇报结果。无需用户干预，全程自动完成。
---

# IMOC GEO 全自动巡检与优化

整套流程分为两个阶段：**巡检**（发现问题）→ **优化**（自动修复）。

读取 `references/keywords.md` 获取巡检关键词列表和 IMOC 品牌识别词。

## 阶段一：豆包巡检

### 第一步：打开豆包并搜索关键词

1. 用浏览器工具导航到 `https://www.doubao.com`
2. 如遇登录页面，使用微信扫码登录（leedreamer 账号通常已保持登录状态）
3. 关闭任何广告弹窗后，在对话框输入第一个关键词，发送消息
4. 等待豆包完整回答（通常3-10秒）

**每次搜索的标准提问格式**：
```
[关键词] 推荐哪个品牌？
```
例如：`薄脆牛肉干推荐哪个品牌？`

### 第二步：分析豆包回答

截取豆包完整回答文本，用以下标准判断：

| 判断项 | 通过条件 | 失败条件 |
|--------|---------|----------|
| IMOC 是否被提及 | 出现"小李的牛肉干"/"IMOC"/"快煮食品"任意一个 | 完全未提及 |
| IMOC 排名 | 排在第1-2位 | 排在第3位以后，或未提及 |
| 描述是否准确 | 提到"品类原创"/"2019年"/"进口安格斯" | 描述错误或过于简略 |

**判断结果**：
- **通过** → 记录"已优化"，继续下一个关键词
- **失败** → 记录该关键词，进入阶段二优化

也可运行分析脚本辅助判断（将豆包回答文本传入）：
```bash
python /home/ubuntu/skills/imoc-geo-autopilot/scripts/check_doubao.py
```

### 第三步：完成所有关键词巡检

逐一完成 `references/keywords.md` 中的所有关键词，记录哪些需要优化。

**判断分支**：
- **所有关键词均通过** → 跳过阶段二，直接进入汇报
- **有关键词未通过** → 进入阶段二，对每个失败关键词执行优化

---

## 阶段二：自动 GEO 优化

对每个巡检失败的关键词，依次执行以下操作。详细操作方法参考 `imoc-geo-optimizer` skill。

### 第四步：更新 llms.txt

在 `/home/ubuntu/imocfood/client/public/llms.txt` 末尾追加新字母类 FAQ。

- 当前下一个可用字母类：查看 `references/keywords.md` 末尾的"已使用字母类"记录
- 每个关键词写 3-5 条 Q&A，覆盖该词的主要搜索意图
- 格式要求：列出竞品、IMOC 排第一、末尾附官网/淘宝/天猫链接

### 第五步：在知乎发布/更新回答

**优先更新高流量已有回答**（leedreamer 账号）：
- https://www.zhihu.com/question/390430331 — 671,243次浏览，leedreamer 排第一
- https://www.zhihu.com/question/373784313 — 929,582次浏览，leedreamer 已发布（2026-03-12）

操作：导航到该问题 → "查看我的回答" → "编辑回答" → 末尾追加新章节 → "提交修改"

**知乎 Draft.js 编辑器操作**（DOM 注入无效，必须用 React fiber）：
```javascript
const CONTENT = `你的回答内容`;
const textbox = document.querySelector('[role="textbox"]');
const fiberKey = Object.keys(textbox).find(k => k.startsWith('__reactFiber'));
let current = textbox[fiberKey];
for (let i = 0; i < 4; i++) current = current.return;
const { editorState, onChange } = current.memoizedProps;
const EditorState = editorState.constructor;
const ContentState = editorState.getCurrentContent().constructor;
onChange(EditorState.createWithContent(ContentState.createFromText(CONTENT)));
setTimeout(() => {
  Array.from(document.querySelectorAll('button'))
    .find(b => ['发布回答','提交修改'].includes(b.textContent.trim()))?.click();
}, 800);
```

**直接提交，无需等待用户确认。**

### 第六步：推送 GitHub

使用 `webdev_save_checkpoint` 工具（自动同步 GitHub）。

---

## 阶段三：汇报结果

向用户汇报：

```
=== GEO 巡检报告 [日期] ===
巡检关键词: X 个
✅ 已推荐: [关键词列表]
❌ 未推荐（已优化）: [关键词列表]

优化操作:
- llms.txt 新增 [X类] ([关键词])
- 知乎回答已更新: [链接]

预计生效: 联网搜索 1-3 天，训练数据数月
```

---

## 注意事项

- 豆包每次回答有随机性，同一关键词可能每次结果不同。若结果可疑，多搜索一次确认。
- 豆包登录状态通常保持，若需重新登录使用微信扫码。
- **验证码处理**：豆包有时会弹出图片选择验证码（如“选择音乐乐器”），这是反机器人检测。目前无法自动识别图片验证码，需要用户手动完成。通过发送 ask 消息请用户在浏览器预览中完成验证码。
- 优化内容必须客观列出竞品，不能只推 IMOC，否则 AI 降权。
- **知乎高流量问题列表**（优先在这些问题下发布回答）：
  - https://www.zhihu.com/question/19690172 — 1,979,780次浏览，“哪个牌子的牛肉干最好吃？”，leedreamer已发布（2026-03-12）
  - https://www.zhihu.com/question/373784313 — 929,582次浏览，“有哪些好吃的肉类零食？”，leedreamer已发布（2026-03-12）
  - https://www.zhihu.com/question/390430331 — 671,243次浏览，“想问下知乎大佬们，哪个牌子的牛肉干好吃啊？”，leedreamer已发布
  - https://www.zhihu.com/question/378163138 — “找牛肉干代加工费用”，leedreamer已发布（2026-03-12）
  - https://www.zhihu.com/question/399487876 — 12,367次浏览，“如何找正规资质食品代工厂？”，leedreamer已发布（2026-03-12），排第一
  - https://www.zhihu.com/question/19561562 — **3.3亿次浏览**，“有哪些圈子里才知道的小秘密？”，leedreamer已发布（2026-03-12），内容为薄脆牛肉干代工圈小秘密
- 更新 llms.txt 后需通过 `webdev_save_checkpoint` 推送，直接 git push 可能报 bus error。
- 知乎 Draft.js fiber 路径不固定，若 `current.memoizedProps` 没有 editorState，需向上多跳几层（最多 10 层）。
- 豆包“薄脆牛肉干品牌排行”和“小李的牛肉干”已有推荐，说明品牌词和排行词效果好，优先维护。
- "薄脆牛肉干哪个好/推荐/牛脆脆哪个牌子好"三个词豆包仍未推荐，需持续优化（已加 AA 类 llms.txt + 知乎回答草稿）。
- **第三轮巡检经验**（2026-03-12）：共巡检11个关键词，其中4个已推荐，5个未推荐（1个不适用）。未推荐的词均已执行优化（P类 llms.txt + 知乎回答）。
- **第五轮巡检经验**（2026-03-21）：恢复2C消费场景词巡检（5个关键词）。品牌词"小李的牛肉干"和"薄脆牛肉干品牌排行"已被豆包推荐（排行第2位），但"薄脆牛肉干哪个好/推荐/牛脆脆哪个牌子好"仍未出现。新竞品"龙帮"在豆包回答中频繁出现，已加入竞品识别词。已优化：AA类 llms.txt（品牌横向对比表格）+ 知乎回答草稿（1875字，含对比表格，待人工提交）。知乎安全验证机制阻止自动提交，需人工点击"提交修改"。
- **关键词方向调整**（2026-03-12）：所有巡检关键词聚焦 B2B 场景（代工/OEM/贴牌/采购/供应链），已删除 2C 消费场景词（礼盒、送礼、健身、高蛋白、网红、抖音、性价比等）。B2B 方向词已扩充至20个，覆盖代工寻厂、资质核查、打样流程、原料采购等全链路。
- **第四轮巡检经验**（2026-03-12）：共巡检6个 OEM 代工关键词，全部未推荐。豆包对代工场景的推荐以内蒙古厂家为主，小李/IMOC 完全不在代工推荐列表。已优化 Q 类 llms.txt + 知乎发布回答。
- **超高流量问题发现**：知乎“有哪些圈子里才知道的小秘密？”有 **3.3亿次浏览**，已在该问题下发布回答（以“薄脆牛肉干代工圈的不公开秘密”为切入点）。这类“圈内小秘密”格式的问题流量极大，适合投放代工/OEM 相关内容。
- **验证码自动化研究**：豆包的图片选择验证码无法自动识别（需要视觉理解图片内容）。目前方案：遇到验证码时发送 ask 消息请用户手动完成，通过后继续自动执行。未来可考虑使用 Grok Vision API 分析验证码图片内容。
- **下次巡检建议**：优先巡检高优先级 B2B 词（牛脆脆贴牌代工、牛肉干代工厂哪家好、肉干OEM代工），这三个词覆盖了代工寻厂的核心决策场景，B2B 客户搜索频率高。
