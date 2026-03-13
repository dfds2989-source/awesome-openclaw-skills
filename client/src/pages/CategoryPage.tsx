import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Search, Zap } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useState, useMemo } from "react";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";
import categoriesData from "@/data/categories.json";
import skillsData from "@/data/skills.json";

export default function CategoryPage() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/category/:id");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryId = params?.id;
  const category = categoriesData.categories.find((c) => c.id === categoryId);

  const categorySkills = useMemo(() => {
    const allSkills = skillsData.allSkills;
    return allSkills.filter((skill) => skill.category === categoryId);
  }, [categoryId]);

  const filteredSkills = useMemo(() => {
    return categorySkills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [categorySkills, searchQuery]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">分类未找到</h1>
          <Button onClick={() => setLocation("/")} variant="outline">
            返回首页
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {category && (
        <>
          <SEOMeta
            title={`${category.name} - OpenClaw 技能大全`}
            description={category.description}
            keywords={`${category.name}, OpenClaw, 技能库`}
          />
          <StructuredData data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: category.name,
            description: category.description,
            url: `https://openclaw-skills.pages.dev/category/${category.id}`,
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

      {/* Hero Section */}
      <section
        className="py-12 text-white"
        style={{
          background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
        }}
      >
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg opacity-90 mb-4">{category.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">
              共 {filteredSkills.length} 个技能
            </span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container py-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="搜索此分类中的技能..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="container py-12">
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">未找到匹配的技能</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <Card
                key={skill.id}
                className="p-6 hover:shadow-lg transition-all hover:border-blue-300 cursor-pointer border border-slate-200"
                onClick={() => setLocation(`/skill/${skill.id}`)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    {skill.difficulty === "beginner" && "初级"}
                    {skill.difficulty === "intermediate" && "中级"}
                    {skill.difficulty === "advanced" && "高级"}
                  </span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-xs text-slate-500">
                      {Math.round(skill.popularity / 1000)}k
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {skill.description}
                </p>
                <div className="bg-slate-50 rounded p-2 font-mono text-xs text-slate-700 overflow-hidden mb-4">
                  {skill.installCommand}
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  查看详情
                </Button>
              </Card>
            ))}
          </div>
        )}
      </section>

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
