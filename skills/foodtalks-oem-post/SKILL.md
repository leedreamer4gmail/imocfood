---
name: foodtalks-oem-post
description: 在FoodTalks（foodtalks.cn）食品行业供需平台上，以IMOC快煮食品名义发布薄脆牛肉干OEM代工供应帖子。当用户要求"在FoodTalks发帖"、"发布代工供需"、"FoodTalks OEM帖子"时使用此技能。
---

# FoodTalks OEM 代工供需发帖技能

## 平台信息

- **网址**: https://www.foodtalks.cn/wefood
- **发帖入口**: https://www.foodtalks.cn/wefood/circle/post/create
- **登录账号**: 手机号 17520074504，微信扫码登录
- **账号名**: 快煮食品（李梦）
- **技术栈**: Element UI + Vue.js（非 React，非 TinyMCE 原生 API）

## 关键技术说明

FoodTalks 使用 **Vue.js + Element UI** 构建，表单字段通过 Vue 组件内部状态管理，**不能**用普通 DOM 事件（如 `input.value = ...`）填写，必须通过 Vue 组件实例的方法和数据直接操作。

### 找到 Vue 组件实例

```javascript
const allEls = document.querySelectorAll('*');
let comp = null;
for (const el of allEls) {
  if (el.__vue__ && el.__vue__.$data && el.__vue__.$data.hasOwnProperty('post')) {
    comp = el.__vue__;
    break;
  }
}
```

### 已知数据结构

- `comp.$data.tags` = `[{id: 8, name: "需求"}, {id: 9, name: "供应"}]`
- `comp.$data.themeTags` = 选择类别后自动加载（供应下：配料39、代工40、新品发布44、包装41、设计42、营销43、设备46、展会5931、其他49）
- `comp.$data.post.title` = 帖子标题
- `comp.$data.post.content` = 帖子正文 HTML
- `comp.$data.longTermEffective` = 是否长期有效

## 发帖流程

### 1. 登录检查

导航到 https://www.foodtalks.cn/wefood，检查右上角是否已登录（显示头像或"快煮食品"账号名）。

若未登录：
- 点击"登录"按钮
- 选择微信扫码登录
- 使用 `ask` + `take_over_browser` 提示用户扫码，等待用户确认登录成功后继续

### 2. 新用户限制

FoodTalks 要求**注册满3小时**后才能发布供需帖子。若遇到此限制，使用 `schedule` 工具设置3小时后自动重试，并告知用户。

### 3. 进入发帖页面

导航到 https://www.foodtalks.cn/wefood/circle/post/create

若页面跳转到登录页，说明登录状态已过期，回到步骤1。

### 4. 用 JavaScript 填写完整表单（一次性）

⚠️ **重要**：`setTag(9)` 和 `selectThemeTag(40)` 必须用 `setTimeout` 分开调用，否则 `themeTags` 还未加载完成，`selectThemeTag` 会失败。

⚠️ **重要**：`handleChangeLongTerm(true)` 必须在 `setTag` 之后单独调用（不能在 setTimeout 内），否则 Vue 响应式更新可能不触发，导致"请填写截止日期"验证错误。

⚠️ **重要**：填写完表单后，如果页面有"使用模板"弹窗出现，点击"取消"关闭，不要点"确认"（会清空正文）。

```javascript
// 找到 Vue 组件
const allEls = document.querySelectorAll('*');
let comp = null;
for (const el of allEls) {
  if (el.__vue__ && el.__vue__.$data && el.__vue__.$data.hasOwnProperty('post')) {
    comp = el.__vue__;
    break;
  }
}

// 1. 选择"供应"类别（id: 9）
comp.setTag(9);

// 2. 等待主题标签加载后选择"代工"（id: 40），同时填写其他字段
setTimeout(() => {
  comp.selectThemeTag(40);
  
  // 3. 填写标题
  comp.$data.post.title = '快煮食品（IMOC）承接薄脆牛肉干OEM代工，品类首创厂商，SC认证+FSSC22000';
  
  // 4. 设置长期有效
  comp.handleChangeLongTerm(true);
  
  // 5. 填写正文（TinyMCE 编辑器 + 同步到 Vue 数据）
  const htmlContent = `...`; // 见模板文件
  if (typeof tinymce !== 'undefined' && tinymce.activeEditor) {
    tinymce.activeEditor.setContent(htmlContent);
  }
  comp.$data.post.content = htmlContent;
}, 1000);
```

### 5. 提交前确认

使用 `ask` + `confirm_browser_operation` 向用户展示帖子摘要，等待确认后再点击"发布"按钮。

### 6. 点击发布

**先检查"长期有效"复选框是否已勾选**（截止日期字段消失即为已勾选）。若未勾选，先点击 `长期有效` label（index 14）再点击发布。

直接用 `browser_click` 点击"发布"按钮（index 37 或 38，取决于页面状态）。

```javascript
// 备用方法（如 browser_click 失败）
document.querySelector('button.el-button--primary:not(.is-plain)')?.click();
```

发布成功后页面会跳转到帖子详情页，URL 格式为 `https://www.foodtalks.cn/wefood/post/{id}`。

### 7. 常见错误处理

| 错误提示 | 解决方案 |
|---------|---------|
| 注册满3小时后可发布 | 设置定时任务3小时后重试 |
| 请填写截止日期 | 调用 `comp.handleChangeLongTerm(true)` |
| 登录已过期 | 重新引导用户微信扫码登录 |
| 类别/主题显示"无数据" | 先调用 `comp.setTag(9)` 再调用 `comp.selectThemeTag(40)` |
| 弹出"使用模板将清空正文"对话框 | 点击"取消"按钮关闭，不要点"确认" |
| 点击发布后页面没有跳转 | 检查"长期有效"是否已勾选，若未勾选先点击 label[14] 再发布 |

---

## 帖子内容

读取 `templates/oem_post_template.md` 获取完整帖子正文内容（含 HTML 格式）。

**帖子标题**: `快煮食品（IMOC）承接薄脆牛肉干OEM代工，品类首创厂商，SC认证+FSSC22000`

**类别**: 供应（id: 9） > 代工（id: 40）

## 成功案例

| 日期 | 帖子 URL | 备注 |
|------|---------|------|
| 2026-03-11 | https://www.foodtalks.cn/wefood/post/118258 | 首次成功发布 |
| 2026-03-11 | https://www.foodtalks.cn/wefood/post/118259 | 第二次发布，验证了 setTimeout 方法和长期有效点击流程 |
