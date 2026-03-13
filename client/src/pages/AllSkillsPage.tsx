import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Search, Zap, Filter } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useMemo } from "react";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";
import skillsData from "@/data/skills.json";
import categoriesData from "@/data/categories.json";

export default function AllSkillsPage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    let result = skillsData.allSkills;

    if (searchQuery) {
      result = result.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter((skill) => skill.category === selectedCategory);
    }

    if (selectedDifficulty) {
      result = result.filter((skill) => skill.difficulty === selectedDifficulty);
    }

    return result.sort((a, b) => b.popularity - a.popularity);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <>
      <SEOMeta
        title="所有技能 - OpenClaw 技能大全"
        description="浏览 OpenClaw 的所有 1,715+ 个技能，按分类和难度筛选"
        keywords="OpenClaw, 技能库, 所有技能, 搜索"
      />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "SearchResultsPage",
        name: "OpenClaw 技能搜索",
        url: "https://openclaw-skills.pages.dev/skills",
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
          <h1 className="text-3xl font-bold text-slate-900">所有技能</h1>
          <p className="text-slate-600 mt-1">
            浏览 {filteredSkills.length} 个技能
          </p>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="p-6 border border-slate-200 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                筛选
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  搜索
                </label>
                <input
                  type="text"
                  placeholder="技能名称..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700 mb-3 block">
                  难度
                </label>
                <div className="space-y-2">
                  {["beginner", "intermediate", "advanced"].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="difficulty"
                        value={level}
                        checked={selectedDifficulty === level}
                        onChange={(e) =>
                          setSelectedDifficulty(
                            e.target.checked ? level : null
                          )
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-700">
                        {level === "beginner" && "初级"}
                        {level === "intermediate" && "中级"}
                        {level === "advanced" && "高级"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-3 block">
                  分类
                </label>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {categoriesData.categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) =>
                          setSelectedCategory(e.target.checked ? category.id : null)
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-700">
                        {category.name}
                      </span>
                      <span className="text-xs text-slate-500 ml-auto">
                        ({category.skillCount})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              {(searchQuery || selectedCategory || selectedDifficulty) && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-6"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setSelectedDifficulty(null);
                  }}
                >
                  重置筛选
                </Button>
              )}
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-3">
            {filteredSkills.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">未找到匹配的技能</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setSelectedDifficulty(null);
                  }}
                >
                  清除筛选
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill) => {
                  const category = categoriesData.categories.find(
                    (c) => c.id === skill.category
                  );
                  return (
                    <Card
                      key={skill.id}
                      className="p-6 hover:shadow-lg transition-all hover:border-blue-300 cursor-pointer border border-slate-200"
                      onClick={() => setLocation(`/skill/${skill.id}`)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                            {skill.difficulty === "beginner" && "初级"}
                            {skill.difficulty === "intermediate" && "中级"}
                            {skill.difficulty === "advanced" && "高级"}
                          </span>
                          {category && (
                            <span
                              className="text-xs font-bold text-white px-2 py-1 rounded"
                              style={{ backgroundColor: category.color }}
                            >
                              {category.name}
                            </span>
                          )}
                        </div>
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
                  );
                })}
              </div>
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
