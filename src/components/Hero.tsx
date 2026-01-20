import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6 lg:px-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-gray-400 font-medium text-lg tracking-wider uppercase">Navia Studio</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          以 AI 與設計，<br />
          <span className="text-gray-300">
            把靈感變成影像與產品
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
          結合 LLM、影像模型與資料能力，將概念轉為影像與產品
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="#portfolio"
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 font-semibold transition-all duration-300 border-2 border-transparent hover:border-gray-300"
          >
            探索作品
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-semibold transition-all duration-300"
          >
            聯繫合作
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="text-gray-500 mx-auto" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;