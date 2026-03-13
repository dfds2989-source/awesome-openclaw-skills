# GitHub Pages 部署设置指南

## ✅ 部署检查清单

本项目已为 GitHub Pages 部署做好准备。请按照以下步骤完成配置。

---

## 📋 必要步骤

### 1. 启用 GitHub Pages

**步骤：**

1. 访问仓库：https://github.com/dfds2989-source/awesome-openclaw-skills
2. 点击 **Settings** 选项卡
3. 左侧菜单找到 **Pages**
4. 在 "Build and deployment" 部分：
   - **Source** 选择：**Deploy from a branch**
   - **Branch** 选择：**main**
   - **Folder** 选择：**/docs**
5. 点击 **Save**

**等待部署：**
- GitHub 会自动部署您的网站
- 部署通常需要 1-2 分钟
- 完成后会显示网站 URL

### 2. 验证部署

**网站地址：**
```
https://dfds2989-source.github.io/awesome-openclaw-skills/
```

**验证步骤：**
1. 访问上述 URL
2. 确认网站正常加载
3. 测试以下功能：
   - 首页加载
   - 搜索功能
   - 分类浏览
   - 下载按钮（应链接到 UC 网盘）
   - 浮动下载按钮

---

## 📁 部署文件说明

### 已创建的文件

| 文件 | 说明 |
|------|------|
| `docs/` | 静态网站文件（由 `pnpm build` 生成） |
| `docs/.nojekyll` | 禁用 Jekyll 处理，确保正确部署 |
| `docs/index.html` | 网站首页 |
| `docs/assets/` | CSS 和 JavaScript 文件 |
| `docs/robots.txt` | SEO 爬虫配置 |
| `docs/sitemap.xml` | 网站地图 |

### 重要配置

**`.nojekyll` 文件：**
- 禁用 Jekyll 处理
- 确保所有文件都被正确部署
- 已自动创建在 `docs/` 文件夹中

---

## 🔄 更新部署

当您更新网站代码时，需要重新构建和部署：

### 本地更新流程

```bash
# 1. 修改代码
# 编辑 client/src 中的文件

# 2. 构建网站
pnpm build

# 3. 复制到 docs 文件夹
cp -r dist/public/* docs/

# 4. 提交更改
git add .
git commit -m "Update website content"

# 5. 推送到 GitHub
git push origin main
```

### 自动化构建（可选）

创建 GitHub Actions 工作流自动构建和部署：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install
      
      - run: pnpm build
      
      - run: cp -r dist/public/* docs/
      
      - uses: actions/upload-artifact@v3
        with:
          name: site
          path: docs/
```

---

## 🔍 常见问题

### Q: 网站显示 404 错误

**原因：** GitHub Pages 未正确配置

**解决方案：**
1. 检查 Settings → Pages 中的配置
2. 确认选择了 `main` 分支和 `/docs` 文件夹
3. 等待 2-3 分钟后重试

### Q: 样式和脚本未加载

**原因：** `.nojekyll` 文件缺失

**解决方案：**
1. 确认 `docs/.nojekyll` 文件存在
2. 如不存在，运行：`touch docs/.nojekyll`
3. 提交并推送更改

### Q: 网站加载很慢

**原因：** 资源文件过大

**解决方案：**
1. 检查 `docs/assets/` 中的文件大小
2. 考虑使用 CDN 加速
3. 优化图片和资源

### Q: 自定义域名配置

**步骤：**
1. 在 `docs/` 文件夹中创建 `CNAME` 文件
2. 文件内容为您的域名（例如：`openclaw-skills.com`）
3. 在域名注册商处配置 DNS 指向 GitHub Pages
4. 在 Settings → Pages 中添加自定义域名

---

## 📊 部署验证

### 检查部署状态

1. 访问仓库 Settings → Pages
2. 查看 "Deployments" 部分
3. 确认最新部署状态为 "Active"

### 查看部署日志

1. 访问仓库 Actions 选项卡
2. 查看部署工作流的日志
3. 检查是否有错误信息

---

## 🎯 部署后的推广

网站部署完成后，您可以：

1. **分享网站链接**
   ```
   https://dfds2989-source.github.io/awesome-openclaw-skills/
   ```

2. **在 README 中添加网站链接**
   ```markdown
   ## 🌐 在线浏览
   
   [访问网站](https://dfds2989-source.github.io/awesome-openclaw-skills/)
   ```

3. **添加网站徽章**
   ```markdown
   [![Website](https://img.shields.io/badge/website-online-brightgreen)](https://dfds2989-source.github.io/awesome-openclaw-skills/)
   ```

4. **在社交媒体分享**
   - Twitter/X
   - LinkedIn
   - 开发者社区（掘金、V2EX）

---

## 📞 需要帮助？

如遇到问题，请：

1. 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
2. 检查仓库的 Issues 部分
3. 创建新 Issue 描述问题

---

## ✨ 部署完成

恭喜！您的 OpenClaw 技能大全网站已成功部署到 GitHub Pages！

**网站地址：** https://dfds2989-source.github.io/awesome-openclaw-skills/

现在您可以：
- 分享网站链接
- 在社交媒体推广
- 收集用户反馈
- 定期更新内容

祝您的项目成功！🚀
