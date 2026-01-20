import React from 'react';
import { Video, Code, BarChart3, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'AI 影像製作',
      subtitle: 'Creative Cinematic Productions',
      description: '運用最新 AI 影像技術（Runway, Kling, Luma），製作具備電影感的高品質廣告短片與視覺內容。'
    },
    {
      icon: Code,
      title: 'AI 產品開發',
      subtitle: 'Intelligent App Solutions',
      description: '開發整合 LLM 與 RAG 技術的智能應用程式，為企業與個人量身打造 AI 賦能的工作流。'
    },
    {
      icon: BarChart3,
      title: '資料與 AI 顧問',
      subtitle: 'Strategic Data Intelligence',
      description: '提供深度數據分析解決方案與企業 AI 轉型諮詢，協助客戶在數據洪流中挖掘核心價值。'
    },
    {
      icon: PenTool,
      title: '數位品牌敘事',
      subtitle: 'Modern Brand Storytelling',
      description: '結合 AI 創意與設計美學，創作出引人入勝且具備現代感的品牌故事與視覺設計。'
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6 font-medium">
              Services
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              探索 AI 與人類創意<br />
              <span className="text-zinc-500 italic">交織的可能性</span>
            </h3>
          </div>
          <p className="text-zinc-400 text-lg max-w-sm mb-2">
            提供全方位的 AI 創意與技術服務，從概念發想到產品實現，打破傳統創作的邊界。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0a0a0a] p-12 lg:p-16 hover:bg-zinc-900/50 transition-all duration-700 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-8 border border-white/10 group-hover:border-teal-500/50 transition-colors duration-500">
                    <IconComponent className="text-white group-hover:text-teal-400 transition-colors duration-500" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <h4 className="text-xs tracking-widest uppercase text-teal-500/70 mb-6 font-semibold">
                    {service.subtitle}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative background number */}
                <span className="absolute -bottom-8 -right-4 text-[12rem] font-serif text-white/[0.02] pointer-events-none group-hover:text-teal-500/[0.05] transition-colors duration-700">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;