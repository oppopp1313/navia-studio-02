import React from 'react';
import { Award, Trophy, Star, Film, Youtube, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const icons = [Star, Trophy, Award, Film, Film, Award, Youtube, Trophy];

  const achievements = t.achievements.items.map((item, index) => ({
    ...item,
    icon: icons[index] || Star
  }));

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-24">
          <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6 font-medium">
            {t.achievements.tag}
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            {t.achievements.title}<br />
            <span className="text-zinc-500 italic">{t.achievements.subtitle}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group"
              >
                <div className="w-16 h-16 border border-white/5 bg-white/[0.02] flex items-center justify-center mb-8 group-hover:border-teal-500/30 transition-all duration-500">
                  <IconComponent className="text-white group-hover:text-teal-400 transition-colors duration-500" size={24} />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-4 tracking-wide group-hover:text-teal-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {achievement.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Social Media Stats */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="group p-12 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
            <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-12">{t.achievements.stats.yt}</h3>
            <div className="relative z-10">
              <p className="text-7xl font-serif text-white mb-4 tracking-tighter">330k+</p>
              <p className="text-zinc-400 text-sm tracking-widest uppercase font-medium">{t.achievements.stats.ytDesc}</p>
            </div>
            <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-teal-500/10 transition-colors duration-500">
              <Youtube size={80} />
            </div>
          </div>
          
          <div className="group p-12 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
            <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-12">{t.achievements.stats.threads}</h3>
            <div className="grid grid-cols-3 gap-8 relative z-10">
              <div>
                <p className="text-4xl font-serif text-white mb-2">284萬</p>
                <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-bold">{t.achievements.stats.views}</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-white mb-2">5.6萬</p>
                <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-bold">{t.achievements.stats.engagement}</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-teal-400 mb-2">2000+</p>
                <p className="text-zinc-500 text-[10px] tracking-widest uppercase font-bold">{t.achievements.stats.followers}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-teal-500/10 transition-colors duration-500">
              <MessageCircle size={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
