import { Download, X } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingDownloadButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-in slide-in-from-bottom-5">
      {/* Main Download Button */}
      <a
        href="https://drive.uc.cn/s/f02cacbc93714"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
      >
        <Download className="w-5 h-5" />
        <span>下载所有资源</span>
      </a>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="flex items-center justify-center w-10 h-10 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
        title="关闭"
      >
        <X className="w-5 h-5 text-slate-600" />
      </button>
    </div>
  );
}
