import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, FileText, FolderOpen } from "lucide-react";
import { useLocation } from "wouter";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";

interface ResourceCategory {
  name: string;
  description: string;
  files: number;
  color: string;
}

const resourceCategories: Record<string, ResourceCategory> = {
  "web-frontend": {
    name: "Web 前端开发",
    description: "前端开发相关技能文档",
    files: 46,
    color: "#3B82F6",
  },
  "coding-agents": {
    name: "编程代理 & IDE",
    description: "AI编程工具和集成开发环境",
    files: 55,
    color: "#8B5CF6",
  },
  "git-github": {
    name: "Git & GitHub",
    description: "版本控制和代码协作工具",
    files: 34,
    color: "#EC4899",
  },
  "security-privacy": {
    name: "安全与隐私",
    description: "网络安全和隐私保护技能",
    files: 35,
    color: "#F59E0B",
  },
  "devops-cloud": {
    name: "DevOps & 云计算",
    description: "云平台和部署工具",
    files: 42,
    color: "#10B981",
  },
  "browser-automation": {
    name: "浏览器自动化",
    description: "Web 自动化和爬虫工具",
    files: 28,
    color: "#06B6D4",
  },
  "image-video": {
    name: "图像与视频生成",
    description: "多媒体内容生成技能",
    files: 38,
    color: "#EF4444",
  },
  "data-processing": {
    name: "数据处理",
    description: "数据分析和处理工具",
    files: 45,
    color: "#14B8A6",
  },
  "apis-integration": {
    name: "API 集成",
    description: "第三方服务集成",
    files: 52,
    color: "#F97316",
  },
  "search-research": {
    name: "搜索与研究",
    description: "信息检索和研究工具",
    files: 31,
    color: "#6366F1",
  },
  "clawbot-tools": {
    name: "ClawBot 工具",
    description: "ClawBot 相关工具集",
    files: 29,
    color: "#A855F7",
  },
  "communication": {
    name: "通信工具",
    description: "消息和通知系统",
    files: 26,
    color: "#0EA5E9",
  },
  "smart-home": {
    name: "智能家居 & IoT",
    description: "物联网和家居自动化",
    files: 33,
    color: "#84CC16",
  },
  "llms": {
    name: "AI & LLMs",
    description: "大语言模型和AI应用",
    files: 67,
    color: "#EC4899",
  },
  "finance": {
    name: "金融与加密",
    description: "金融工具和区块链",
    files: 41,
    color: "#FBBF24",
  },
  "health-fitness": {
    name: "健康与健身",
    description: "健康管理和运动工具",
    files: 28,
    color: "#4ADE80",
  },
  "education": {
    name: "教育与学习",
    description: "在线学习和教育工具",
    files: 39,
    color: "#60A5FA",
  },
  "entertainment": {
    name: "娱乐与媒体",
    description: "娱乐和内容创作工具",
    files: 35,
    color: "#F472B6",
  },
  "productivity": {
    name: "生产力工具",
    description: "工作效率和任务管理",
    files: 44,
    color: "#34D399",
  },
  "ecommerce": {
    name: "电商平台",
    description: "在线购物和商务工具",
    files: 38,
    color: "#FBBF24",
  },
  "travel": {
    name: "旅游与导航",
    description: "旅游规划和地理信息",
    files: 32,
    color: "#7C3AED",
  },
};

export default function ResourcesPage() {
  const [, setLocation] = useLocation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "OpenClaw 资源下载",
    description: "下载 OpenClaw 技能完整文档和使用说明",
    url: "https://openclaw-skills.pages.dev/resources",
  };

  const totalSkills = Object.values(resourceCategories).reduce(
    (sum, cat) => sum + cat.files,
    0
  );

  return (
    <>
      <SEOMeta
        title="资源下载 - OpenClaw 技能大全"
        description="下载 OpenClaw 技能的完整文档和使用说明，包含 1,715+ 个技能的详细信息"
        keywords="OpenClaw, 资源下载, 技能文档, 使用说明"
      />
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
          <div className="container py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回
            </Button>
            <h1 className="text-3xl font-bold text-slate-900">资源下载中心</h1>
            <p className="text-slate-600 mt-1">
              访问完整的技能文档和使用说明
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">完整的技能资源库</h2>
              <p className="text-lg opacity-90 mb-6">
                获取 {totalSkills}+ 个技能的详细文档、安装指南和使用示例。
                所有资源都在 UC 网盘中集中存储，方便下载和管理。
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  window.open("https://drive.uc.cn/s/f02cacbc93714", "_blank")
                }
                className="gap-2"
              >
                <Download className="w-5 h-5" />
                访问 UC 网盘资源库
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border border-slate-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {totalSkills}+
              </div>
              <div className="text-slate-600">技能文档</div>
            </Card>
            <Card className="p-6 text-center border border-slate-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Object.keys(resourceCategories).length}
              </div>
              <div className="text-slate-600">分类</div>
            </Card>
            <Card className="p-6 text-center border border-slate-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                DOCX
              </div>
              <div className="text-slate-600">文档格式</div>
            </Card>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">技能分类</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(resourceCategories).map(([key, category]) => (
              <Card
                key={key}
                className="p-6 hover:shadow-lg transition-all border border-slate-200 cursor-pointer group"
                onClick={() =>
                  window.open("https://drive.uc.cn/s/f02cacbc93714", "_blank")
                }
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <FileText
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    {category.files} 个
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                  下载文档 <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="container py-12 bg-blue-50 rounded-2xl px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">如何使用</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                  1
                </div>
                <h3 className="font-bold text-slate-900">访问网盘</h3>
              </div>
              <p className="text-slate-700 text-sm">
                点击下方按钮访问 UC 网盘资源库，查看所有技能文档。
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                  2
                </div>
                <h3 className="font-bold text-slate-900">选择分类</h3>
              </div>
              <p className="text-slate-700 text-sm">
                根据需要选择相应的技能分类，找到您需要的文档。
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                  3
                </div>
                <h3 className="font-bold text-slate-900">下载使用</h3>
              </div>
              <p className="text-slate-700 text-sm">
                下载 DOCX 文件，查看详细的技能说明和使用指南。
              </p>
            </div>
          </div>
        </section>

        {/* Download Button Section */}
        <section className="container py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            准备好了吗？
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            立即访问 UC 网盘，获取所有 {totalSkills}+ 个技能的完整文档
          </p>
          <Button
            size="lg"
            onClick={() =>
              window.open("https://drive.uc.cn/s/f02cacbc93714", "_blank")
            }
            className="gap-2"
          >
            <FolderOpen className="w-5 h-5" />
            打开 UC 网盘资源库
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            网盘链接：https://drive.uc.cn/s/f02cacbc93714
          </p>
        </section>

        {/* FAQ Section */}
        <section className="container py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">常见问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">
                如何下载网盘文件？
              </h3>
              <p className="text-sm text-slate-600">
                访问 UC 网盘链接后，选择要下载的文件，点击下载按钮即可。
                您可以下载单个文件或批量下载整个文件夹。
              </p>
            </Card>
            <Card className="p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">
                文件格式是什么？
              </h3>
              <p className="text-sm text-slate-600">
                所有技能文档都是 DOCX 格式，可以用 Microsoft Word、Google Docs
                或其他支持 DOCX 的应用打开。
              </p>
            </Card>
            <Card className="p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">
                文件会定期更新吗？
              </h3>
              <p className="text-sm text-slate-600">
                是的，我们会定期更新网盘中的文件，添加新技能和更新现有文档。
                建议定期检查网盘获取最新内容。
              </p>
            </Card>
            <Card className="p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">
                可以离线使用吗？
              </h3>
              <p className="text-sm text-slate-600">
                完全可以。下载文件后，您可以离线查看和使用所有文档。
                不需要网络连接就能访问技能说明。
              </p>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-white mb-4">OpenClaw</h4>
                <p className="text-sm">
                  1,715+ 精选技能，帮助开发者提高生产力
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">导航</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="hover:text-white">
                      首页
                    </a>
                  </li>
                  <li>
                    <a href="/skills" className="hover:text-white">
                      所有技能
                    </a>
                  </li>
                  <li>
                    <a href="/resources" className="hover:text-white">
                      资源下载
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-white">
                      关于
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">资源</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://github.com/dfds2989-source/awesome-openclaw-skills"
                      className="hover:text-white"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.openclaw.ai/" className="hover:text-white">
                      文档
                    </a>
                  </li>
                  <li>
                    <a href="https://clawhub.com/skills" className="hover:text-white">
                      ClawHub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">网盘资源</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://drive.uc.cn/s/f02cacbc93714"
                      className="hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UC 网盘链接
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-sm">
              <p>&copy; 2026 OpenClaw Skills. 所有权利保留。</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
