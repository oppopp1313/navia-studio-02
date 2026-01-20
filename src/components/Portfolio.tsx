import React, { useState } from 'react';
import { Play, Smartphone, Globe, X, ExternalLink, Trophy } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('apps');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const films = [
    {
      id: "RvnI2Ys0MIA",
      title: "The Tree | AI Short Film",
      year: 2025,
      role: "Director",
      tools: ["LTX Studio", "Kling AI"],
      award: "Official Selection",
      logline: "柏林 Forward Festival 入選作品。同一棵樹見證歷史變遷與生命輪迴的視覺詩篇。"
    },
    {
      id: "4rbS5tFm-NI",
      title: "Behind The Scene of 《Hi, I'm a ghost》",
      year: 2025,
      role: "Creator",
      tools: ["AI Pipeline"],
      logline: "揭密《Hi, I'm a ghost》的創作過程與 AI 生成技術的深度應用。"
    },
    {
      id: "xYUJDX44Y04",
      title: "Hi, I'm A Ghost. | AI Documentary Film",
      year: 2025,
      role: "Director",
      tools: ["Kling AI"],
      award: "Best Documentary",
      logline: "榮獲首爾國際電影節最佳紀錄片，一個幽默與感動並存的 AI 生成紀錄片式短片，探討數位生命的本質。"
    },
    {
      id: "auTrAbZYFS8",
      title: "Prometheus: Reborn | Official Trailer",
      year: 2025,
      role: "Director",
      tools: ["Kling AI", "Runway"],
      logline: "重塑經典科幻命題，探索人類與造物主之間永恆的掙扎與進化。"
    },
    {
      id: "gTfR6LU-9AE",
      title: "The Mariana Trench | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Runway", "Kling", "MJ"],
      logline: "深入馬里亞納海溝最深處，揭開隱藏在無底黑暗中的未知生命與神祕景觀。"
    },
    {
      id: "B3N7tUzvT7g",
      title: "地牛 Mega Cow | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Kling", "Luma"],
      logline: "將台灣民間傳說與現代都市結合，展現一頭龐大巨牛引發的荒誕與視覺震撼。"
    },
    {
      id: "NMu0Vzy7CCs",
      title: "The Skyfall | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Runway", "Midjourney"],
      logline: "當天空崩壞、秩序瓦解，一場跨越雲端的末日視覺旅程與情感告白。"
    },
    {
      id: "InQ1ziUlMWg",
      title: "Alien: Moon | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["LTX Studio", "Kling"],
      logline: "在荒涼的月球基地中，與未知外星生物的恐懼遭遇，挑戰人類生存極限。"
    },
    {
      id: "xljV4wzt5Fo",
      title: "Fast & Furious: Legacy | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Runway", "AI Audio"],
      logline: "以 AI 重新詮釋飆速與家族的傳承，在霓虹街頭燃燒鋼鐵與榮耀。"
    },
    {
      id: "0hBYIJn6eY4",
      title: "Blade Runner: Matrix | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Kling", "Midjourney"],
      logline: "賽博龐克兩大經典的視覺碰撞，在虛擬與真實的界線中尋找靈魂的回響。"
    },
    {
      id: "P45v46zEm3A",
      title: "AB Test | Short Film",
      year: 2025,
      role: "Director",
      tools: ["AI Video Pipeline"],
      logline: "一場關於數據導向的人生重來實驗，探討科技背後被犧牲的人性與代價。"
    },
    {
      id: "qhfmZDIoNCw",
      title: "Screen | Short Film",
      year: 2025,
      role: "Director",
      tools: ["Kling", "Runway"],
      logline: "用「螢幕人」的概念來反思現代社會資訊爆炸下的人類生存困境。"
    },
    {
      id: "5ih15q6oqQ4",
      title: "Godzilla x Attack on Titan | Concept Trailer",
      year: 2025,
      role: "Director",
      tools: ["Kling", "AI Video Pipeline"],
      logline: "泰坦巨獸與遠古巨神的終極對決，震動地表與文明的史詩級對決。"
    },
    {
      id: "lnepJqTwy-s",
      title: "Unboxing in the Future | Google Veo3",
      year: 2025,
      role: "Director",
      tools: ["Google Veo3"],
      logline: "探索未來的開箱體驗，全 AI 生成的視覺實驗，展示下一代影像技術的極限。"
    },
    {
      id: "9hwAsQG1S6k",
      title: "Paper Warriors 紙上談兵 | Official MV",
      year: 2024,
      role: "Director",
      tools: ["Kling AI", "AI Video Pipeline"],
      logline: "將水墨藝術與 3D 生成技術結合，呈現一場極具東方美學與動態衝擊的視覺盛宴。"
    }
  ];

  const apps = [
    { 
      name: "Caloo", 
      type: "AI Calorie App", 
      status: "Live", 
      icon: Smartphone,
      color: "from-orange-500/20 to-red-500/20",
      url: "https://apps.apple.com/tw/app/caloo-%E6%A5%B5%E7%B0%A1%E5%8D%A1%E8%B7%AF%E9%87%8C%E7%B4%80%E9%8C%84/id6742639699",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a0/b3/aa/a0b3aa04-a6a9-b3b5-0cf3-8f7fedb52598/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.jpg"
    },
    { 
      name: "QuoTodo", 
      type: "Productivity App", 
      status: "Live", 
      icon: Globe,
      color: "from-blue-500/20 to-indigo-500/20",
      url: "https://apps.apple.com/us/app/quotodo/id6743733598?l=zh-Hant-TW",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2b/c1/3b/2bc13b9b-f1b2-91b8-8d2f-87be1c4a0aaf/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.jpg"
    },
    { 
      name: "Vibby", 
      type: "Web App (Music×Task)", 
      status: "Live", 
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20",
      url: "https://vibby.site/",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fvibby.site%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&viewport.deviceScaleFactor=2"
    },
    { 
      name: "Hualien Nomad", 
      type: "Platform / Hackathon Winner", 
      status: "Awarded", 
      icon: Globe,
      color: "from-teal-500/20 to-emerald-500/20",
      url: "https://hualian-travel.lovable.app",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fhualian-travel.lovable.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&viewport.deviceScaleFactor=2"
    },
    { 
      name: "Deco AI", 
      type: "AI Interior Design", 
      status: "Live", 
      icon: Globe,
      color: "from-amber-500/20 to-orange-500/20",
      url: "https://deco-ai.com/",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fdeco-ai.com%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&viewport.deviceScaleFactor=2"
    },
    { 
      name: "Planny AI", 
      type: "AI Planner", 
      status: "Live", 
      icon: Globe,
      color: "from-sky-500/20 to-blue-500/20",
      url: "https://planny-ai.site/",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fplanny-ai.site%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900&viewport.deviceScaleFactor=2"
    },
    { 
      name: "Cut AI", 
      type: "AI Video Tool", 
      status: "Live", 
      icon: Globe,
      color: "from-red-500/20 to-pink-500/20",
      url: "https://cut-ai.app/",
      image: "/cut-ai.png"
    },
    { 
      name: "Outfit AI", 
      type: "AI Fashion Assistant", 
      status: "Coming Soon", 
      icon: Smartphone,
      color: "from-zinc-500/20 to-zinc-700/20",
      url: "#",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      name: "Namecard AI", 
      type: "AI Networking Tool", 
      status: "Coming Soon", 
      icon: Smartphone,
      color: "from-zinc-500/20 to-zinc-700/20",
      url: "#",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const tech = [
    "Museum/Library/Gallery — Image Recognition × RAG Virtual Guide",
    "Multi-agent / Local Embeddings Pipelines (ChromaDB)",
    "Growth Dashboard & A/B Testing Frameworks"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case 'Live/POC': return 'bg-white text-black';
      case 'Launch prep': return 'bg-gray-400 text-black';
      case 'In progress': return 'bg-gray-600 text-white';
      case 'Awarded': return 'bg-gray-200 text-black';
      case 'Coming Soon': return 'bg-teal-900/40 text-teal-400 border border-teal-500/30';
      default: return 'bg-gray-700 text-white';
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6 font-medium">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">
              精選作品庫
            </h3>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-8 border-b border-white/10 pb-4 w-full lg:w-auto">
            {[
              { id: 'films', label: 'AI Films' },
              { id: 'apps', label: 'Applications' },
              { id: 'tech', label: 'Tech Projects' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-teal-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Films Tab */}
        {activeTab === 'films' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {films.map((film, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(film.id)}
                className="group cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-zinc-900 border ${film.award ? 'border-teal-500/30' : 'border-white/5'}`}>
                  <img
                    src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                      <Play className="text-white fill-current" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] text-white tracking-[0.2em] uppercase border border-white/10">
                      {film.year}
                    </span>
                  </div>
                </div>

                <div className="pt-8">
                  {film.award && (
                    <div className="flex items-center gap-2 mb-3 text-teal-400">
                      <Trophy size={12} className="fill-current" />
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                        {film.award}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors duration-300">
                      {film.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-500 leading-relaxed mb-6 text-sm line-clamp-2 h-10">
                    {film.logline}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {film.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Apps Tab */}
        {activeTab === 'apps' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => {
              const IconComponent = app.icon;
              const isComingSoon = app.status === 'Coming Soon';
              
              const CardContent = (
                <>
                  {/* Thumbnail Container with Gradient Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/50 flex items-center justify-center">
                    {isComingSoon ? (
                      <div className="text-zinc-600 font-serif text-2xl tracking-widest uppercase opacity-40">
                        開發中
                      </div>
                    ) : (
                      <>
                        {/* Background Color Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                        
                        <img
                          src={app.image}
                          alt={app.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        />
                      </>
                    )}
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 backdrop-blur-md text-[10px] tracking-[0.2em] uppercase border border-white/10 ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>

                    {/* Center Icon on Hover - Only show if not coming soon */}
                    {!isComingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-14 h-14 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                          <IconComponent className="text-white" size={20} />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-8 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif text-white group-hover:text-teal-400 transition-colors duration-300">
                        {app.name}
                      </h3>
                      {!isComingSoon && (
                        <ExternalLink size={14} className="text-zinc-500 group-hover:text-teal-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-zinc-500 text-xs tracking-widest uppercase font-medium">{app.type}</p>
                  </div>
                </>
              );

              if (isComingSoon) {
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col bg-zinc-900/10 border border-white/5 opacity-80 transition-all duration-500 overflow-hidden"
                  >
                    {CardContent}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-zinc-900/30 border border-white/5 hover:border-teal-500/30 transition-all duration-500 overflow-hidden"
                >
                  {CardContent}
                </a>
              );
            })}
          </div>
        )}

        {/* Tech Tab */}
        {activeTab === 'tech' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {tech.map((project, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-10 bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all duration-500"
              >
                <h3 className="text-xl md:text-2xl font-serif text-zinc-300 group-hover:text-white transition-colors">
                  {project}
                </h3>
                <div className="w-12 h-px bg-white/10 group-hover:w-20 group-hover:bg-teal-500/50 transition-all duration-500" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;