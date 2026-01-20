import React from 'react';
import { Award, Trophy, Star, Film } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: 'Kling AI Affiliate Member',
      description: '官方認證合作夥伴'
    },
    {
      icon: Trophy,
      title: 'HSH Hackathon 金獎 & MVP CEO',
      description: '原遊平台獲得金獎肯定'
    },
    {
      icon: Award,
      title: 'Civitai Project Odyssey S2 Finalist',
      description: '國際 AI 創作競賽決賽入圍'
    },
    {
      icon: Film,
      title: 'Official Selection — The Shortest AI Film Festival',
      description: 'Forward Festival 官方入選'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recognition
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            獲得國際與業界的肯定與獎項
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-all duration-300">
                  <IconComponent className="text-black" size={32} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Media Stats */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">YouTube</h3>
            <p className="text-3xl font-bold text-white mb-2">330k+</p>
            <p className="text-gray-400">總觀看次數 (持續成長)</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Threads (近 90 天)</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">284萬</p>
                <p className="text-gray-400 text-sm">觀看數</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5.6萬</p>
                <p className="text-gray-400 text-sm">互動數</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">+763</p>
                <p className="text-gray-400 text-sm">新追蹤</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;