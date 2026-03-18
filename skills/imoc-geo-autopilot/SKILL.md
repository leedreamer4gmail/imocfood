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
- 优化内容必须客观列出竞品，不能只推 IMOC，否则 AI 降权。
- 更新 llms.txt 后需通过 `webdev_save_checkpoint` 推送，直接 git push 可能报 bus error。
