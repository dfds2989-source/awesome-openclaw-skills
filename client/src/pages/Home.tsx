import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Star, Code2, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";
import categoriesData from "@/data/categories.json";
import skillsData from "@/data/skills.json";

export default function Home() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OpenClaw Skills",
    description: "OpenClaw 技能大全 - 1,715+ 精选技能库",
    url: "https://openclaw-skills.pages.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://openclaw-skills.pages.dev/skills?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/skills?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const topSkills = skillsData.topSkills.slice(0, 6);
  const featuredCategories = categoriesData.categories.slice(0, 6);

  return (
    <>
      <SEOMeta
        title="OpenClaw 技能大全 - 1,715+ 精选技能库"
        description="探索 OpenClaw 技能大全，包含 1,715+ 个精选技能，覆盖 28 个核心领域。从 Web 开发到 AI/LLMs，找到您需要的一切工具和知识。"
        keywords="OpenClaw, 技能库, AI代理, 开源, Web开发, AI/LLMs, 编程工具"
      />
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">OpenClaw</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-700 hover:text-blue-600 font-medium">
              首页
            </a>
            <a href="/skills" className="text-slate-700 hover:text-blue-600 font-medium">
              所有技能
            </a>
            <a href="/about" className="text-slate-700 hover:text-blue-600 font-medium">
              关于
            </a>
          </nav>
          <Button 
            onClick={() => setLocation("https://github.com/VoltAgent/awesome-openclaw-skills")}
            variant="outline"
            size="sm"
          >
            GitHub
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          OpenClaw 技能大全
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          探索 1,715+ 个精选技能，覆盖 28 个核心领域。从 Web 开发到 AI/LLMs，
          找到您需要的一切工具和知识。
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="搜索技能名称或关键词..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-slate-200 focus:border-blue-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
              size="sm"
            >
              搜索
            </Button>
          </div>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">1,715+</div>
            <div className="text-slate-600">精选技能</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="text-4xl font-bold text-emerald-600 mb-2">28</div>
            <div className="text-slate-600">核心分类</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-slate-600">开源社区</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-16">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">热门分类</h3>
          <p className="text-slate-600">浏览最受欢迎的技能分类</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCategories.map((category) => (
            <Card
              key={category.id}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer border border-slate-200"
              onClick={() => setLocation(`/category/${category.id}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: category.color + "20" }}
                >
                  <span className="text-2xl">📦</span>
                </div>
                <span className="text-sm font-semibold text-slate-500">
                  {category.skillCount} 个技能
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {category.name}
              </h4>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {category.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm">
                浏览 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={() => setLocation("/skills")}
          className="w-full"
        >
          查看所有分类 <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </section>

      {/* Top Skills */}
      <section className="container py-16">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">热门技能</h3>
          <p className="text-slate-600">最受欢迎的技能推荐</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSkills.map((skill) => (
            <Card
              key={skill.id}
              className="p-6 hover:shadow-lg transition-all hover:border-blue-300 cursor-pointer border border-slate-200"
              onClick={() => setLocation(`/skill/${skill.id}`)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    热门
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-slate-300" />
                  <span className="text-xs text-slate-500">
                    {Math.round(skill.popularity / 1000)}k 安装
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {skill.name}
              </h4>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {skill.description}
              </p>
              <div className="bg-slate-50 rounded p-2 mb-4 font-mono text-xs text-slate-700 overflow-hidden">
                {skill.installCommand}
              </div>
              <Button variant="ghost" size="sm" className="w-full">
                查看详情 <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center my-16">
        <h3 className="text-3xl font-bold mb-4">准备好开始了吗？</h3>
        <p className="text-lg mb-8 opacity-90">
          订阅我们的邮件列表，获取最新的技能更新和使用指南
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="输入您的邮箱..."
            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
          />
          <Button variant="secondary" size="lg">
            订阅
          </Button>
        </form>
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
