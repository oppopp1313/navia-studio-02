import React from 'react';
import { MapPin, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-8 font-medium">
              {t.about.tag}
            </h2>
            <p className="text-4xl md:text-5xl font-serif text-white leading-tight">
              {t.about.title}<br />
              <span className="text-zinc-500">{t.about.subtitle}</span>
            </p>
          </div>

          <div className="lg:w-2/3 space-y-16">
            <div className="max-w-2xl">
              <p className="text-xl text-zinc-300 leading-relaxed mb-8 whitespace-pre-line">
                {t.about.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-zinc-500 mb-4 font-bold">{t.about.location}</h3>
                  <div className="flex items-center text-white text-lg">
                    <MapPin className="text-teal-400 mr-3" size={18} />
                    Taichung, Taiwan
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-zinc-500 mb-4 font-bold">{t.about.education}</h3>
                  <div className="flex items-center text-white text-lg">
                    <GraduationCap className="text-teal-400 mr-3" size={18} />
                    National Chung Hsing University
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-white/5">
              <h3 className="text-xs tracking-widest uppercase text-zinc-500 mb-10 font-bold">{t.about.expertise}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Founder', 'Creative Lead', 'AI Developer', 'Data Lead (ex)'].map((role, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all duration-500"
                  >
                    <span className="text-white text-lg font-serif italic tracking-wide group-hover:text-teal-400 transition-colors">
                      {role}
                    </span>
                    <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-teal-500/50 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;