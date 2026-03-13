import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Shield, Zap, Users } from "lucide-react";
import { useLocation } from "wouter";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";

export default function AboutPage() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEOMeta
        title="关于 OpenClaw - 开源 AI 代理框架"
        description="了解 OpenClaw 项目，一个包含 1,715+ 个精选技能的开源 AI 代理框架"
        keywords="OpenClaw, 关于, AI代理, 开源, 社区"
      />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "关于 OpenClaw",
        url: "https://openclaw-skills.pages.dev/about",
      }} />
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">关于 OpenClaw</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          OpenClaw 是一个开源的 AI 代理框架，提供超过 1,715 个精选技能，
          帮助开发者快速构建强大的 AI 应用。
        </p>
      </section>

      {/* Mission Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">我们的使命</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              OpenClaw 的目标是民主化 AI 代理开发，让每个开发者都能轻松访问和使用高质量的 AI 工具和技能。
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              通过提供一个庞大的、社区驱动的技能库，我们使开发者能够快速原型化、测试和部署 AI 应用，
              而无需从头开始构建所有功能。
            </p>
            <p className="text-slate-600 leading-relaxed">
              我们相信开源和社区合作是推动 AI 技术进步的关键。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">快速开发</h3>
              <p className="text-sm text-slate-700">
                使用预构建的技能快速开发 AI 应用
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">社区驱动</h3>
              <p className="text-sm text-slate-700">
                由全球开发者社区贡献和维护
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <Shield className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">安全可靠</h3>
              <p className="text-sm text-slate-700">
                所有技能经过审查和安全检查
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">项目统计</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center border border-slate-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">1,715+</div>
            <div className="text-slate-600">精选技能</div>
          </Card>
          <Card className="p-6 text-center border border-slate-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">28</div>
            <div className="text-slate-600">技能分类</div>
          </Card>
          <Card className="p-6 text-center border border-slate-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5,705</div>
            <div className="text-slate-600">ClawHub 技能</div>
          </Card>
          <Card className="p-6 text-center border border-slate-200">
            <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-slate-600">开源免费</div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">主要特性</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "广泛的技能覆盖",
              description: "从 Web 开发到 AI/LLMs，涵盖 28 个核心领域",
            },
            {
              title: "易于安装",
              description: "使用 ClawHub CLI 一键安装任何技能",
            },
            {
              title: "社区维护",
              description: "由全球开发者社区共同维护和改进",
            },
            {
              title: "安全审查",
              description: "所有技能经过安全审查，过滤恶意代码",
            },
            {
              title: "详细文档",
              description: "每个技能都有完整的使用示例和文档",
            },
            {
              title: "持续更新",
              description: "定期添加新技能和功能更新",
            },
          ].map((feature, idx) => (
            <Card key={idx} className="p-6 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="container py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">安全与隐私</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-3">安全措施</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>所有技能经过恶意代码扫描</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>过滤已知的 ClawHavoc 后门技能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>社区报告和审查机制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>定期安全更新和补丁</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-3">最佳实践</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>优先使用官方审核的技能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>查看技能评分和安装量</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>阅读技能详细描述</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>使用 VirusTotal 进行额外检查</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">相关资源</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <Github className="w-8 h-8 text-slate-900 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">GitHub 仓库</h3>
            <p className="text-sm text-slate-600 mb-4">
              访问 Awesome OpenClaw Skills 社区精选列表
            </p>
            <a
              href="https://github.com/VoltAgent/awesome-openclaw-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看仓库 <ExternalLink className="w-4 h-4" />
            </a>
          </Card>

          <Card className="p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <ExternalLink className="w-8 h-8 text-slate-900 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">官方文档</h3>
            <p className="text-sm text-slate-600 mb-4">
              阅读 OpenClaw 完整文档和 API 参考
            </p>
            <a
              href="https://docs.openclaw.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              查看文档 <ExternalLink className="w-4 h-4" />
            </a>
          </Card>

          <Card className="p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <Zap className="w-8 h-8 text-slate-900 mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">ClawHub 市场</h3>
            <p className="text-sm text-slate-600 mb-4">
              浏览和安装 ClawHub 官方技能市场
            </p>
            <a
              href="https://clawhub.com/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              访问市场 <ExternalLink className="w-4 h-4" />
            </a>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">准备好了吗？</h2>
        <p className="text-lg text-slate-600 mb-8">
          开始探索 OpenClaw 技能，构建您的 AI 应用
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => setLocation("/skills")}
          >
            浏览所有技能
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://github.com/VoltAgent/awesome-openclaw-skills")
            }
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub 仓库
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
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
                <li><a href="/" className="hover:text-white">首页</a></li>
                <li><a href="/skills" className="hover:text-white">所有技能</a></li>
                <li><a href="/about" className="hover:text-white">关于</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">资源</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/VoltAgent/awesome-openclaw-skills" className="hover:text-white">GitHub</a></li>
                <li><a href="https://docs.openclaw.ai/" className="hover:text-white">文档</a></li>
                <li><a href="https://clawhub.com/skills" className="hover:text-white">ClawHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">社区</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">论坛</a></li>
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
