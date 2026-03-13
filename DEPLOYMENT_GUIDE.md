# GitHub Pages 部署指南

本指南将帮助您将 OpenClaw 技能大全网站部署到 GitHub Pages。

## 📋 前置要求

- GitHub 账户
- 已创建的 GitHub 仓库
- 仓库代码已推送到 `main` 分支

## 🚀 部署步骤

### 步骤 1: 启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 "Build and deployment" 部分：
   - **Source** 选择：`Deploy from a branch`
   - **Branch** 选择：`main`
   - **Folder** 选择：`/ (root)`
5. 点击 **Save**

### 步骤 2: 构建和部署

GitHub Pages 会自动从 `main` 分支构建您的网站。首次部署可能需要几分钟。

### 步骤 3: 验证部署

1. 返回 **Settings** → **Pages**
2. 您应该看到一条消息，例如：
   ```
   Your site is published at https://dfds2989-source.github.io/awesome-openclaw-skills/
   ```
3. 点击链接访问您的网站

## 🔧 自定义域名（可选）

如果您想使用自定义域名（例如 `openclaw-skills.com`）：

### 步骤 1: 购买域名

从域名注册商（如 GoDaddy、Namecheap 等）购买您的域名。

### 步骤 2: 配置 DNS

根据您的域名注册商的说明，将以下 DNS 记录指向 GitHub Pages：

**方法 A：使用 A 记录（推荐）**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**方法 B：使用 CNAME 记录**
```
CNAME: dfds2989-source.github.io
```

### 步骤 3: 在 GitHub 中配置

1. 进入仓库 **Settings** → **Pages**
2. 在 "Custom domain" 输入框中输入您的域名
3. 点击 **Save**
4. GitHub 会自动创建 `CNAME` 文件

### 步骤 4: 启用 HTTPS

1. 等待 DNS 记录生效（通常 24-48 小时）
2. 返回 **Settings** → **Pages**
3. 勾选 "Enforce HTTPS"

## 📦 构建配置

项目使用 Vite 进行构建。构建输出位于 `dist/` 目录。

### 本地构建

```bash
pnpm install
pnpm run build
```

### 构建输出

```
dist/
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── ...
├── robots.txt
└── sitemap.xml
```

## 🔍 SEO 优化

网站包含完整的 SEO 优化，包括：

- **Meta 标签** - 每个页面都有适当的 title、description 和 keywords
- **Open Graph** - 社交媒体分享优化
- **Sitemap** - `sitemap.xml` 用于搜索引擎爬虫
- **Robots.txt** - 搜索引擎爬虫配置
- **结构化数据** - JSON-LD 格式的 Schema.org 数据

### 提交到搜索引擎

部署后，提交您的网站到主要搜索引擎：

1. **Google Search Console**
   - 访问 https://search.google.com/search-console
   - 添加您的网站
   - 提交 sitemap：`https://your-domain.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - 访问 https://www.bing.com/webmasters
   - 添加您的网站
   - 提交 sitemap

3. **百度搜索资源平台**（如果针对中文用户）
   - 访问 https://ziyuan.baidu.com/
   - 添加您的网站
   - 提交 sitemap

## 🚨 故障排除

### 网站不显示

**问题：** 访问 GitHub Pages URL 时看到 404 错误

**解决方案：**
1. 确保 `main` 分支中有 `index.html`
2. 检查 **Settings** → **Pages** 中的 Source 设置
3. 等待几分钟让 GitHub 完成构建

### 样式不显示

**问题：** 网站加载但没有样式

**解决方案：**
1. 检查浏览器控制台是否有 404 错误
2. 确保所有资源路径都是相对的
3. 清除浏览器缓存并重新加载

### 自定义域名不工作

**问题：** 自定义域名无法访问网站

**解决方案：**
1. 检查 DNS 记录是否正确配置
2. 使用 `nslookup` 或 `dig` 验证 DNS：
   ```bash
   nslookup your-domain.com
   ```
3. 等待 DNS 传播（可能需要 24-48 小时）
4. 检查 CNAME 文件是否存在于仓库根目录

## 📊 监控和分析

### GitHub Pages 部署状态

1. 进入仓库
2. 点击 **Deployments**（部署）
3. 查看最新部署的状态

### 网站分析

您可以添加第三方分析工具来跟踪网站流量：

- **Google Analytics** - 添加跟踪代码到 `client/index.html`
- **Umami** - 轻量级隐私友好的分析工具
- **Plausible** - 简单的网站分析

## 🔄 自动化部署

### 使用 GitHub Actions

创建 `.github/workflows/deploy.yml` 文件以自动化部署流程：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**注意：** GitHub Actions 需要仓库的 `workflows` 权限。

## 📚 更多资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [Google Search Console 帮助](https://support.google.com/webmasters)

## 💡 最佳实践

1. **定期更新内容** - 保持技能数据最新
2. **监控性能** - 使用 Google PageSpeed Insights 检查网站性能
3. **备份数据** - 定期备份 GitHub 仓库
4. **测试链接** - 确保所有内部链接都正常工作
5. **移动优化** - 在各种设备上测试网站

## 🆘 获取帮助

如果遇到问题，请：

1. 检查 [GitHub Pages 常见问题](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
2. 查看 [GitHub Community 讨论](https://github.com/orgs/community/discussions)
3. 提交 Issue 到项目仓库

---

**祝您部署顺利！** 🎉
