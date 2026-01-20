import React from 'react';
import { MapPin, GraduationCap, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              數位行銷 7 年 → 數據分析主管 → 創業。結合 LLM、影像模型與資料能力，將概念轉為影像與產品。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 border border-gray-700">
                <div className="flex items-center mb-3">
                  <MapPin className="text-white mr-2" size={20} />
                  <h3 className="text-white font-semibold">位置</h3>
                </div>
                <p className="text-gray-300">Taichung, Taiwan</p>
              </div>

              <div className="bg-gray-800 p-6 border border-gray-700">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-white mr-2" size={20} />
                  <h3 className="text-white font-semibold">學歷</h3>
                </div>
                <p className="text-gray-300">國立中興大學</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <Globe className="text-white mr-2" size={20} />
                <h3 className="text-white font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['中文', 'English', '日本語(learning)'].map((lang, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 text-sm border border-gray-600"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Roles & Expertise</h3>
            <div className="space-y-4">
              {['Founder', 'Creative Lead', 'AI Developer', 'Data Lead (ex)'].map((role, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 border-l-4 border-white hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white mr-4"></div>
                    <span className="text-white font-medium">{role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;