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
      skills: ['MidJourney', 'Flux', 'Stable Diffusion', 'Recraft', 'Kling', 'Hailuo', 'Haiper', 'Runway(Aleph)']
    },
    {
      title: 'Production',
      icon: Cog,
      skills: ['Prompt Engineering', 'Storyboard', 'Frame-to-Frame Pipeline']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            跨領域的技術能力，從程式開發到 AI 影像製作
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 p-8 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <IconComponent className="text-black" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </div>
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