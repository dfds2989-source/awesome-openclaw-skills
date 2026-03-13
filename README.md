# OpenClaw 技能大全

![OpenClaw Skills](https://img.shields.io/badge/OpenClaw-Skills-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Skills](https://img.shields.io/badge/skills-1715%2B-brightgreen)
![Categories](https://img.shields.io/badge/categories-28-orange)

**OpenClaw 技能大全** 是一个开源的技能库展示网站，展示了 1,715+ 个精选技能，覆盖 28 个核心领域。

🌐 **[访问在线网站](https://dfds2989-source.github.io/awesome-openclaw-skills/)** | 📥 **[下载完整资源](https://drive.uc.cn/s/f02cacbc93714)** | 📚 **[查看文档](GITHUB_PROMOTION.md)**

## 🌟 特性

- **1,715+ 精选技能** - 涵盖 Web 开发、AI/LLMs、编程工具等多个领域
- **28 个核心分类** - 清晰的分类结构，方便浏览和搜索
- **响应式设计** - 完美支持桌面、平板和移动设备
- **SEO 优化** - 完整的元标签、结构化数据和 sitemap
- **快速搜索** - 实时搜索和多条件筛选功能
- **社区驱动** - 100% 开源，欢迎社区贡献
- **浮动下载按钮** - 随处可见的资源下载入口
- **完整文档** - 每个技能都有详细的使用说明和安装命令

## 🚀 快速开始

### 在线浏览

直接访问网站浏览所有技能：

👉 **[https://dfds2989-source.github.io/awesome-openclaw-skills/](https://dfds2989-source.github.io/awesome-openclaw-skills/)**

### 下载完整资源

所有技能的 DOCX 文档已上传到 UC 网盘，包含详细的使用说明、安装命令和代码示例：

👉 **[下载资源库](https://drive.uc.cn/s/f02cacbc93714)**

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/dfds2989-source/awesome-openclaw-skills.git
cd awesome-openclaw-skills

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 访问 http://localhost:3000/awesome-openclaw-skills/
```

### 构建生产版本

```bash
# 构建项目
pnpm run build

# 预览生产版本
pnpm run preview
```

## 📁 项目结构

```
openclaw-skills/
├── client/
│   ├── public/              # 静态文件 (robots.txt, sitemap.xml)
│   ├── src/
│   │   ├── pages/          # 页面组件
│   │   │   ├── Home.tsx
│   │   │   ├── CategoryPage.tsx
│   │   │   ├── SkillDetailPage.tsx
│   │   │   ├── AllSkillsPage.tsx
│   │   │   └── AboutPage.tsx
│   │   ├── components/     # 可复用组件
│   │   │   ├── SEOMeta.tsx
│   │   │   └── StructuredData.tsx
│   │   ├── data/           # 技能数据
│   │   │   ├── categories.json
│   │   │   └── skills.json
│   │   ├── App.tsx         # 路由配置
│   │   └── index.css       # 全局样式
│   └── index.html          # HTML 入口
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages 部署配置
└── package.json            # 项目依赖
```

## 🎯 核心页面

### 首页 (`/`)
- 项目介绍和统计信息
- 热门分类展示
- 热门技能推荐
- 邮件订阅 CTA

### 所有技能 (`/skills`)
- 完整的技能列表
- 按分类筛选
- 按难度筛选
- 实时搜索功能

### 分类页面 (`/category/:id`)
- 特定分类的所有技能
- 分类详细描述
- 技能搜索和筛选

### 技能详情页 (`/skill/:id`)
- 技能完整信息
- 安装命令
- 主要功能和使用示例
- 相关资源链接
- 相关技能推荐

### 关于页面 (`/about`)
- 项目介绍
- 安全和隐私信息
- 相关资源链接

## 🔍 SEO 优化

本网站包含完整的 SEO 优化：

- **元标签** - 每个页面都有适当的 title、description 和 keywords
- **Open Graph** - 支持社交媒体分享预览
- **Twitter Card** - Twitter 分享优化
- **结构化数据** - JSON-LD 格式的 Schema.org 数据
- **Sitemap** - 自动生成的 sitemap.xml
- **Robots.txt** - 搜索引擎爬虫配置

## 📊 技能数据

技能数据存储在 JSON 文件中：

### 分类数据 (`client/src/data/categories.json`)
```json
{
  "categories": [
    {
      "id": "web-frontend-dev",
      "name": "Web 前端开发",
      "description": "前端开发相关技能",
      "color": "#3B82F6",
      "skillCount": 46
    }
  ]
}
```

### 技能数据 (`client/src/data/skills.json`)
```json
{
  "topSkills": [...],
  "allSkills": [
    {
      "id": "skill-001",
      "name": "React",
      "category": "web-frontend-dev",
      "description": "现代 JavaScript 库",
      "difficulty": "intermediate",
      "popularity": 50000,
      "installCommand": "npm install react",
      "features": [...],
      "examples": [...]
    }
  ]
}
```

## 🛠️ 技术栈

- **前端框架** - React 19 + TypeScript
- **路由** - Wouter
- **样式** - Tailwind CSS 4
- **UI 组件** - shadcn/ui
- **构建工具** - Vite
- **部署** - GitHub Pages

## 🌐 部署

本项目使用 GitHub Pages 自动部署。每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署网站。

### 部署步骤

1. Fork 或 Clone 本仓库
2. 在 GitHub 仓库设置中启用 GitHub Pages
3. 选择 `gh-pages` 分支作为发布源
4. 推送代码到 `main` 分支
5. 等待 GitHub Actions 完成构建和部署

## 📝 添加新技能

要添加新技能，请编辑 `client/src/data/skills.json` 文件：

```json
{
  "id": "skill-new",
  "name": "新技能名称",
  "category": "分类-id",
  "description": "技能描述",
  "difficulty": "beginner|intermediate|advanced",
  "popularity": 10000,
  "installCommand": "安装命令",
  "features": ["功能1", "功能2"],
  "examples": ["示例1", "示例2"]
}
```

## 🔗 相关链接

- [Awesome OpenClaw Skills](https://github.com/VoltAgent/awesome-openclaw-skills) - 社区精选列表
- [OpenClaw 文档](https://docs.openclaw.ai/) - 官方文档
- [ClawHub 市场](https://clawhub.com/skills) - 官方技能市场

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- GitHub Issues - 报告问题或建议功能
- Email - 联系项目维护者
- Twitter - [@OpenClawAI](https://twitter.com/OpenClawAI)

## 🙏 致谢

感谢所有为 OpenClaw 项目贡献的开发者和社区成员！

---

**OpenClaw 技能大全** © 2026. 所有权利保留。
