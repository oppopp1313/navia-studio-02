import React from 'react';
import { Code, Brain, Camera, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'SQL', 'BigQuery', 'Colab', 'VS Code']
    },
    {
      title: 'LLM & AI',
      icon: Brain,
      skills: ['ChatGPT', 'Claude', 'Grok', 'LangChain', 'LangGraph', 'RAG']
    },
    {
      title: 'Image & Video',
      icon: Camera,
      skills: ['MidJourney', 'Flux', 'Stable Diffusion', 'Kling', 'Hailuo', 'Runway(Aleph)']
    },
    {
      title: 'Production',
      icon: Cog,
      skills: ['Prompt Engineering', 'Storyboard', 'AI Video Pipeline']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-24">
          <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6 font-medium">
            Technical Stack
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
            跨領域的技術驅動力
          </h3>
          <p className="text-xl text-zinc-400 max-w-2xl">
            從底層程式邏輯到頂層 AI 創意執行，我們的工具箱不斷進化，以確保技術始終服務於偉大的靈感。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <IconComponent className="text-teal-400" size={20} />
                  <h3 className="text-lg font-serif text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-4 py-2 text-sm text-zinc-400 border border-white/5 bg-white/[0.02] hover:border-teal-500/30 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;