import React, { useState } from 'react';
import { Play, Smartphone, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('films');

  const films = [
    {
      title: "Camera Man",
      year: 2025,
      role: "Writer/Director",
      tools: ["Runway(Aleph)", "Kling", "MJ"],
      logline: "攝影機人橫越電影史，多體裁拼貼的形式實驗"
    },
    {
      title: "TREE (樹的時間之旅)",
      year: 2025,
      duration: "60s",
      role: "Writer/Director",
      tools: ["Kling", "Runway", "LTX Studio"],
      logline: "同一棵樹見證 20 幅歷史場景的演進"
    },
    {
      title: "AB Test",
      year: 2025,
      role: "Writer/Director",
      tools: ["Runway(Aleph)", "Kling"],
      logline: "數據導向的人生重來，與人性疏離的代價"
    },
    {
      title: "Major Tom (Concept Teaser)",
      year: 2025,
      role: "Director",
      tools: ["Kling", "Runway", "LTX Studio"],
      logline: "向《Space Oddity》致敬的孤獨航行"
    },
    {
      title: "Prometheus — Prequel / Moon Life (Concept)",
      year: 2025,
      role: "Worldbuilding / Visual Experiments",
      tools: ["AI Video Pipeline"],
      logline: "將外星命題前移至 21 世紀的月球事件"
    },
    {
      title: "護國神山：半導體 × 都市對照",
      year: 2024,
      role: "Creator",
      tools: ["MJ", "Kling"],
      logline: "以台積電/玉山/台北 101 的隱喻對照產業與自然"
    }
  ];

  const apps = [
    { name: "Caloo", type: "AI Calorie App", status: "In progress", icon: Smartphone },
    { name: "QuoTodo", type: "Productivity App", status: "Launch prep", icon: Globe },
    { name: "Satori", type: "Web App (YouTube×Focus×Todo)", status: "Live/POC", icon: Globe },
    { name: "Vibby", type: "Web App (Music×Task)", status: "Live/POC", icon: Globe },
    { name: "Eat What", type: "Web / Mobile (Maps Randomizer)", status: "Live/POC", icon: Smartphone },
    { name: "ReVoice", type: "Long-distance Voice Companion", status: "POC", icon: Smartphone },
    { name: "Twin3 — Earth Journey", type: "Digital Identity × Travel", status: "POC", icon: Globe },
    { name: "Hualien Nomad（原遊）", type: "Platform / Hackathon Winner", status: "Awarded", icon: Globe }
  ];

  const tech = [
    "Museum/Library/Gallery — Image Recognition × RAG Virtual Guide",
    "Multi-agent / Local Embeddings Pipelines (ChromaDB)",
    "Growth Dashboard & A/B Testing Frameworks"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live/POC': return 'bg-white text-black';
      case 'Launch prep': return 'bg-gray-400 text-black';
      case 'In progress': return 'bg-gray-600 text-white';
      case 'Awarded': return 'bg-gray-200 text-black';
      default: return 'bg-gray-700 text-white';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 border border-gray-700 p-1">
            <button
              onClick={() => setActiveTab('films')}
              className={`px-8 py-3 font-medium transition-all duration-300 ${
                activeTab === 'films'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI Films
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`px-8 py-3 font-medium transition-all duration-300 ${
                activeTab === 'apps'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-8 py-3 font-medium transition-all duration-300 ${
                activeTab === 'tech'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Tech Projects
            </button>
          </div>
        </div>

        {/* Films Tab */}
        {activeTab === 'films' && (
          <div className="grid md:grid-cols-2 gap-8">
            {films.map((film, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 p-8 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                      {film.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                      <span>{film.year}</span>
                      {film.duration && <span>{film.duration}</span>}
                    </div>
                  </div>
                  <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
                
                <p className="text-gray-300 font-medium mb-3">{film.role}</p>
                <p className="text-gray-400 leading-relaxed mb-4">{film.logline}</p>
                
                <div className="flex flex-wrap gap-2">
                  {film.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 text-sm border border-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Apps Tab */}
        {activeTab === 'apps' && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {apps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 p-8 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="text-white" size={32} />
                    <span className={`${getStatusColor(app.status)} px-3 py-1 text-xs font-medium`}>
                      {app.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                    {app.name}
                  </h3>
                  <p className="text-gray-400">{app.type}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tech Tab */}
        {activeTab === 'tech' && (
          <div className="grid gap-8 max-w-4xl mx-auto">
            {tech.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 p-8 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {project}
                </h3>
                <div className="w-full h-px bg-gray-600"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;