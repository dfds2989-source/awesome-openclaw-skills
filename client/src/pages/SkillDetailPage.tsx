import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Copy, Share2, ExternalLink, CheckCircle } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useState } from "react";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";
import skillsData from "@/data/skills.json";
import categoriesData from "@/data/categories.json";

export default function SkillDetailPage() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/skill/:id");
  const [copied, setCopied] = useState(false);

  const skillId = params?.id;
  const skill = skillsData.allSkills.find((s) => s.id === skillId);
  const category = categoriesData.categories.find((c) => c.id === skill?.category);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill?.installCommand || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">技能未找到</h1>
          <Button onClick={() => setLocation("/")} variant="outline">
            返回首页
          </Button>
        </div>
      </div>
    );
  }

  const relatedSkills = skillsData.allSkills
    .filter(
      (s) => s.category === skill.category && s.id !== skill.id
    )
    .slice(0, 4);

  return (
    <>
      {skill && (
        <>
          <SEOMeta
            title={`${skill.name} - OpenClaw 技能`}
            description={skill.description}
            keywords={`${skill.name}, ${category?.name}, OpenClaw`}
          />
          <StructuredData data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: skill.name,
            description: skill.description,
            url: `https://openclaw-skills.pages.dev/skill/${skill.id}`,
            applicationCategory: category?.name,
          }} />
        </>
      )}
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

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
              <a href="/" className="hover:text-blue-600">首页</a>
              <span>/</span>
              <a
                href={`/category/${category?.id}`}
                className="hover:text-blue-600"
              >
                {category?.name}
              </a>
              <span>/</span>
              <span className="text-slate-900 font-medium">{skill.name}</span>
            </div>

            {/* Title Section */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">
                    {skill.name}
                  </h1>
                  <p className="text-lg text-slate-600">{skill.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded">
                    {skill.difficulty === "beginner" && "初级"}
                    {skill.difficulty === "intermediate" && "中级"}
                    {skill.difficulty === "advanced" && "高级"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-sm">
                    {Math.round(skill.popularity / 1000)}k 安装
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-sm font-medium">
                    分类: {category?.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Installation Section */}
            <Card className="p-6 mb-8 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">安装</h2>
              <div className="bg-slate-900 rounded-lg p-4 mb-4 flex items-center justify-between">
                <code className="text-green-400 font-mono text-sm">
                  {skill.installCommand}
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="text-white hover:bg-slate-800"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      复制
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-slate-600">
                使用 ClawHub CLI 安装此技能。确保已安装 Node.js 和 npm。
              </p>
            </Card>

            {/* Features Section */}
            {skill.features && skill.features.length > 0 && (
              <Card className="p-6 mb-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">主要功能</h2>
                <ul className="space-y-3">
                  {skill.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Examples Section */}
            {skill.examples && skill.examples.length > 0 && (
              <Card className="p-6 mb-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">使用示例</h2>
                <ul className="space-y-2">
                  {skill.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-slate-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Resources Section */}
            <Card className="p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">相关资源</h2>
              <div className="space-y-3">
                <a
                  href="https://clawhub.com/skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  ClawHub 官方市场
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://docs.openclaw.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  OpenClaw 文档
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/VoltAgent/awesome-openclaw-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  GitHub 仓库
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Card */}
            {category && (
              <Card className="p-6 mb-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">分类</h3>
                <div
                  className="w-full p-4 rounded-lg mb-3 text-white text-center font-semibold cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: category.color }}
                  onClick={() => setLocation(`/category/${category.id}`)}
                >
                  {category.name}
                </div>
                <p className="text-sm text-slate-600">{category.description}</p>
              </Card>
            )}

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card className="p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">相关技能</h3>
                <div className="space-y-3">
                  {relatedSkills.map((relatedSkill) => (
                    <div
                      key={relatedSkill.id}
                      className="p-3 bg-slate-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors"
                      onClick={() => setLocation(`/skill/${relatedSkill.id}`)}
                    >
                      <div className="font-medium text-slate-900 text-sm">
                        {relatedSkill.name}
                      </div>
                      <div className="text-xs text-slate-600 mt-1 line-clamp-1">
                        {relatedSkill.description}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
        <div className="container text-center text-sm">
          <p>&copy; 2026 OpenClaw Skills. 所有权利保留。</p>
        </div>
      </footer>
    </div>
    </>
  );
}
