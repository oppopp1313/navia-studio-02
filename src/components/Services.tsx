import React from 'react';
import { Video, Code, BarChart3, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'AI 影像製作',
      subtitle: '廣告短片',
      description: '運用最新 AI 影像技術，製作高品質的廣告短片與創意內容'
    },
    {
      icon: Code,
      title: 'AI App 開發',
      subtitle: 'LLM / RAG',
      description: '開發整合 LLM 與 RAG 技術的智能應用程式與網站'
    },
    {
      icon: BarChart3,
      title: '資料分析',
      subtitle: 'AI 導入顧問',
      description: '提供數據分析解決方案與企業 AI 轉型諮詢服務'
    },
    {
      icon: PenTool,
      title: '品牌敘事',
      subtitle: '內容設計',
      description: '創作引人入勝的品牌故事與視覺內容設計'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            提供全方位的 AI 創意與技術服務，從概念發想到產品實現
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 p-8 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <IconComponent className="text-black" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <h4 className="text-gray-400 font-medium mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;