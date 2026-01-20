import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="max-w-5xl">
          <div className="mb-12 overflow-hidden">
            <span className="inline-block text-teal-400 font-medium tracking-[0.3em] uppercase text-sm animate-fade-in">
              Creative AI Studio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[0.9] tracking-tight">
            以 AI 與設計，<br />
            <span className="text-white/40 italic">
              重塑想像的邊界
            </span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-md">
              結合 LLM、影像模型與數據分析，<br />
              將純粹的概念轉化為震撼的影像與卓越產品。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="group relative px-8 py-4 overflow-hidden bg-white text-black font-semibold transition-all duration-300"
              >
                <span className="relative z-10">探索作品庫</span>
                <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                啟動合作項目
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 [writing-mode:vertical-lr]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-teal-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;