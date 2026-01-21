import React from 'react';
import { Video, Code, BarChart3, PenTool } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const icons = [Video, Code, BarChart3, PenTool];

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6 font-medium">
              {t.services.tag}
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              {t.services.title}<br />
              <span className="text-zinc-500 italic">{t.services.subtitle}</span>
            </h3>
          </div>
          <p className="text-zinc-400 text-lg max-w-sm mb-2 whitespace-pre-line">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index];
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
