import { Button } from "@/components/ui/button";
import { Download, FileText, Zap, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { SEOMeta } from "@/components/SEOMeta";
import { StructuredData } from "@/components/StructuredData";

export default function QuickDownloadPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "OpenClaw 资源快速下载",
    description: "一键下载 OpenClaw 所有 1,715+ 个技能资源",
    url: "https://openclaw-skills.pages.dev/download",
  };

  // Auto-redirect to UC Drive after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://drive.uc.cn/s/f02cacbc93714";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEOMeta
        title="快速下载 - OpenClaw 所有资源"
        description="一键下载 OpenClaw 技能大全的所有 1,715+ 个资源文档"
        keywords="OpenClaw, 下载, 资源, 技能库"
      />
      <StructuredData data={structuredData} />

      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-6">
                  <Download className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              OpenClaw 资源库
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 mb-8">
              1,715+ 个精选技能，即将开始下载...
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">1,715+</div>
                <div className="text-sm text-slate-600">技能资源</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">22</div>
                <div className="text-sm text-slate-600">分类</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-600">DOCX</div>
                <div className="text-sm text-slate-600">文档格式</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">完整的技能说明和使用指南</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">安装命令和代码示例</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">定期更新的最新资源</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700">支持离线查看和使用</span>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="https://drive.uc.cn/s/f02cacbc93714"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button
                size="lg"
                className="w-full gap-2 text-lg h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Download className="w-6 h-6" />
                立即下载所有资源
              </Button>
            </a>

            {/* Fallback Text */}
            <p className="text-sm text-slate-500 mt-6">
              如果未自动跳转，请
              <a
                href="https://drive.uc.cn/s/f02cacbc93714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                点击此链接
              </a>
            </p>

            {/* Loading Animation */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8 text-white">
            <p className="text-sm opacity-90">
              访问 UC 网盘获取完整的 OpenClaw 技能库
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
