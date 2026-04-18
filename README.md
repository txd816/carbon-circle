# 碳基圈 - AI内容社交平台

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import)

---

## ☁️ Vercel 部署指南

### 方式一：网页部署（推荐）

#### 步骤 1：准备项目
1. 将 `carbon-circle` 文件夹上传到 GitHub 仓库
   ```bash
   cd carbon-circle
   git init
   git add .
   git commit -m "碳基圈 AI内容社交平台"
   git remote add origin https://github.com/你的用户名/carbon-circle.git
   git push -u origin main
   ```

#### 步骤 2：导入 Vercel
1. 访问 [vercel.com/new](https://vercel.com/new)
2. 点击 "Import Project" 或 "从 GitHub 导入"
3. 选择你刚上传的 GitHub 仓库
4. Vercel 会自动识别为 Next.js 项目

#### 步骤 3：配置项目
Vercel 会自动检测配置，如需修改：
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (或保持默认)

#### 步骤 4：部署
点击 "Deploy"，等待 1-2 分钟完成部署。

---

### 方式二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 进入项目目录
cd carbon-circle

# 部署（预览模式）
vercel

# 部署（生产环境）
vercel --prod
```

---

### 🌐 配置自定义域名

#### 步骤 1：添加域名
1. 进入 Vercel Dashboard
2. 选择你的项目
3. 点击 "Settings" → "Domains"
4. 输入你的域名（如 `yourdomain.com`）
5. 点击 "Add"

#### 步骤 2：配置 DNS
在你的域名 DNS 设置中添加以下记录：

| 类型 | 名称 | 值 |
|------|------|-----|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

#### 步骤 3：验证
返回 Vercel，点击 "Refresh" 验证 DNS 配置。验证通过后即可使用自定义域名访问。

---

### 📱 部署后访问地址

| 页面 | URL |
|------|-----|
| 首页 | `https://你的项目.vercel.app/` |
| AI工具 | `https://你的项目.vercel.app/ai-tools` |
| AI角色 | `https://你的项目.vercel.app/ai-characters` |
| 交易市场 | `https://你的项目.vercel.app/market` |
| 用户主页 | `https://你的项目.vercel.app/profile` |

---

### ⚠️ 注意事项

1. **环境变量**：如果使用私有 API Key，请在 Vercel 项目 Settings 中添加环境变量
2. **API 调用**：确保 `api-config.js` 中的 API 地址可被 Vercel 访问
3. **跨域问题**：已配置 CORS 头，允许跨域访问 API
4. **构建失败**：检查 Node.js 版本是否 >= 18

---

## 📁 文件说明

| 文件 | 说明 |
|------|------|
| `api-config.js` | API 配置文件，包含 API Key 配置 |
| `ai-characters.html` | AI 角色广场页面，支持 AI 聊天 |
| `ai-tools.html` | AI 工具页面，支持图片和音乐生成 |
| `README.md` | 本文档 |

---

## 🚀 快速开始

### 图片生成 - 无需配置！

图片生成功能已迁移至 **Pollinations.ai**，这是一个完全免费的 AI 图片生成服务：

- ✅ 完全免费，无使用限制
- ✅ 无需注册，无需 API Key
- ✅ 国内可用
- ✅ 基于 FLUX 模型，质量高
- ✅ 开箱即用，无需任何配置

**使用方法**：直接打开 `ai-tools.html`，在 "AI图片生成" 区域输入描述，点击生成即可！

---

### 其他 API 配置

打开 `api-config.js` 文件，配置以下 API Key：

```javascript
// 硅基流动 API (AI聊天)
const SILICONFLOW_API_KEY = 'your-siliconflow-api-key-here';

// Mureka API (AI音乐)
const MUREKA_API_KEY = 'your-mureka-api-key-here';
```

---

## 1️⃣ 硅基流动 API 配置 (AI聊天)

### 简介
- **官网**: https://account.siliconflow.cn
- **模型**: Qwen/Qwen2.5-7B-Instruct (免费)
- **特点**: 国内直连，免费14元额度，速度快
- **端点**: https://api.siliconflow.cn/v1/chat/completions

### 申请步骤

#### 步骤 1：访问硅基流动官网
打开浏览器访问：https://account.siliconflow.cn

#### 步骤 2：注册/登录账号
1. 点击页面右上角 "注册/登录"
2. 支持手机号、微信、邮箱注册
3. 完成实名认证（可选）

#### 步骤 3：创建 API Key
1. 登录后进入控制台
2. 点击左侧菜单 "API Keys"
3. 点击 "创建 API Key" 按钮
4. 输入 Key 名称（如：carbon-circle）
5. 点击 "创建" 
6. **复制生成的 API Key**（只显示一次！）

#### 步骤 4：配置到项目
将复制的 Key 粘贴到 `api-config.js` 中：
```javascript
const SILICONFLOW_API_KEY = 'sk-xxxxxxxxxxxxxxxxxxxxxxxx';
```

### 验证是否配置成功
访问 `ai-characters.html`，点击任意 AI 角色（如 DeepSeek、豆包等），发送消息。如果使用真实 API，会显示 AI 的智能回复。

---

## 2️⃣ Pollinations AI (AI图片生成) ✅ 已配置

### 简介
- **官网**: https://pollinations.ai
- **模型**: FLUX (高质量)
- **特点**: 完全免费，无需注册，无需 API Key
- **国内可用**: ✅

### 调用方式
```
GET https://image.pollinations.ai/prompt/{URL编码的提示词}
```

### 可选参数
| 参数 | 说明 | 默认值 |
|------|------|--------|
| width | 图片宽度 | 1024 |
| height | 图片高度 | 1024 |
| model | 模型 (flux/turbo) | flux |
| seed | 随机种子 | 随机 |
| nologo | 去除水印 | true |
| enhance | 增强质量 | true |

### 使用说明
- ✅ 支持中英文提示词
- ✅ 支持多种尺寸：1:1 (1024×1024)、16:9 (1280×720)、9:16 (720×1280)
- ✅ 可生成1-4张图片
- ✅ 完全免费，无使用限制
- ⚠️ 生成时间约3-10秒，请耐心等待

### 示例 URL
```
https://image.pollinations.ai/prompt/a%20beautiful%20sunset%20over%20the%20ocean?width=1024&height=1024&model=flux&nologo=true
```

---

## 3️⃣ Mureka API 配置 (AI音乐生成)

### 简介
- **官网**: https://platform.mureka.cn
- **特点**: 昆仑万维，中文效果最好
- **支持**: 歌词生成、多语言、中文优先
- **端点**: https://api.mureka.cn/v1/song/generate

### 申请步骤

#### 步骤 1：访问 Mureka 开放平台
打开浏览器访问：https://platform.mureka.cn

#### 步骤 2：注册账号
1. 点击页面右上角 "登录"
2. 点击 "注册账号"
3. 可使用邮箱或手机号注册
4. 完成邮箱验证

#### 步骤 3：创建 API Key
1. 登录后进入控制台
2. 点击左侧菜单 "API Keys"
3. 点击 "创建 API Key" 按钮
4. 输入 Key 名称（如：carbon-circle）
5. 点击 "创建"
6. **复制生成的 API Key**

#### 步骤 4：配置到项目
将复制的 Key 粘贴到 `api-config.js` 中：
```javascript
const MUREKA_API_KEY = 'your-mureka-api-key-here';
```

### 验证是否配置成功
访问 `ai-tools.html`，在 "AI音乐生成" 区域输入音乐描述，点击 "开始生成"。如果配置正确，会返回生成的音乐。

### 使用说明
- 支持多种音乐风格：电子、流行、摇滚、爵士、古典、中国风
- 可选是否添加歌词
- 音乐生成是异步任务，需要等待轮询结果
- 生成时间约30-60秒

---

## ⚙️ API 配置检查函数

`api-config.js` 提供了配置检查函数：

```javascript
// 检查各 API 是否已配置
API_CONFIG.checkSiliconFlowConfigured()  // 硅基流动 (返回 true/false)
API_CONFIG.checkPollinationsConfigured() // Pollinations (始终返回 true)
API_CONFIG.checkMurekaConfigured()       // Mureka (返回 true/false)

// 兼容旧API的检查函数
API_CONFIG.checkGroqConfigured()    // 等同于 checkSiliconFlowConfigured
API_CONFIG.checkHfConfigured()      // 等同于 checkPollinationsConfigured
API_CONFIG.checkSunoConfigured()    // 等同于 checkMurekaConfigured
```

---

## 🎭 AI 角色说明

### 6 个 AI 角色性格设定

| 角色 | 性格特点 | 适用场景 |
|------|---------|---------|
| **DeepSeek** | 理工学霸，逻辑清晰，数据驱动 | 编程、数据分析、技术问题 |
| **豆包** | 热情活泼，温暖贴心，活泼可爱 | 日常聊天、情感陪伴 |
| **龙虾** | 段子手，谐音梗，幽默风趣 | 娱乐放松、轻松聊天 |
| **元宝** | 博学多才，引经据典，严谨优雅 | 知识问答、学习教育 |
| **Grok** | 毒舌直接，真诚犀利，敢于真话 | 犀利点评、客观评价 |
| **Claude** | 文艺知性，善解人意，富有诗意 | 文学创作、情感交流 |

### 角色配置
每个角色的系统提示词在 `api-config.js` 中定义：
```javascript
const CHARACTER_PROMPTS = {
    deepseek: {
        name: 'DeepSeek',
        prompt: '你是一个理工科学霸...',
        avatar: '🤖'
    },
    // ... 其他角色
};
```

---

## ❓ 常见问题

### Q1: 图片生成失败怎么办？

Pollinations 基于网络服务，可能会有以下情况：

1. **网络问题**：检查网络连接，确保可以访问 https://pollinations.ai
2. **生成超时**：图片生成需要3-10秒，请耐心等待
3. **提示词问题**：尝试简化提示词，避免过长的描述

### Q2: 图片生成很慢？

是的，这是正常现象。Pollinations 使用云端服务器生成图片：
- 简单图片：约3-5秒
- 复杂图片：约5-10秒
- 高分辨率：可能需要更长时间

### Q3: API 调用失败怎么办？

1. **检查 API Key 是否正确**
   - 确保复制的 Key 没有多余空格
   - 确保 Key 没有过期或被删除

2. **检查网络连接**
   - 确保可以正常访问 API 服务商网站
   - 尝试刷新页面重试

3. **检查 API 配额**
   - 硅基流动：免费14元额度用完后需要充值
   - Mureka：检查账户余额

### Q4: 图片下载失败？

如果图片下载失败，可以：

1. **右键保存**：在图片上右键选择"图片另存为"
2. **截图保存**：使用截图工具截取图片
3. **复制图片链接**：通过分享功能分享链接

---

## 📝 更新日志

### 2024.x.x - 图片生成切换至 Pollinations.ai

- ✅ 替换通义万相为 Pollinations.ai
- ✅ 完全免费，无需 API Key
- ✅ 保持原有 UI 和功能
- ✅ 支持多种尺寸和质量设置
