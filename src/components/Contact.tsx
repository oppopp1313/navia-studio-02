
import { Youtube, MessageCircle, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@navia.studio' },
    { name: 'Threads', icon: MessageCircle, href: 'https://www.threads.com/@i.am.aiiivan' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ivanyehhhh/' }
  ];

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-8 font-medium">
              Contact
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
              Let's craft the <br />
              <span className="text-zinc-500 italic">Future of Visuals.</span>
            </h3>
            
            <p className="text-xl text-zinc-400 mb-16 max-w-md leading-relaxed">
              準備好將您的創意想法轉化為現實了嗎？無論是電影感十足的 AI 影像，還是前衛的智能應用，我們都在這裡為您實現。
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4 font-bold">Email Inquiry</h4>
                <a
                  href="mailto:oppopp1313@gmail.com"
                  className="text-2xl md:text-3xl font-serif text-white hover:text-teal-400 transition-colors duration-500 underline underline-offset-8 decoration-white/10"
                >
                  oppopp1313@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4 font-bold">Social Presence</h4>
                <div className="flex gap-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                      >
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-teal-500/30 transition-colors">
                          <IconComponent size={18} />
                        </div>
                        <span className="text-xs tracking-widest uppercase font-medium hidden sm:inline">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white/[0.02] border border-white/5 p-12 lg:p-16 relative">
              <h3 className="text-2xl font-serif text-white mb-10">發送合作請求</h3>
              <form action="https://formspree.io/oppopp1313@gmail.com" method="POST" className="space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-teal-400 focus:outline-none transition-all duration-500 placeholder:text-zinc-700"
                    placeholder="您的姓名"
                  />
                  <label className="absolute top-0 left-0 text-[10px] tracking-widest uppercase text-zinc-500 -translate-y-full opacity-0 group-focus-within:opacity-100 transition-all duration-300">Name</label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-teal-400 focus:outline-none transition-all duration-500 placeholder:text-zinc-700"
                    placeholder="電子郵件"
                  />
                  <label className="absolute top-0 left-0 text-[10px] tracking-widest uppercase text-zinc-500 -translate-y-full opacity-0 group-focus-within:opacity-100 transition-all duration-300">Email</label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-teal-400 focus:outline-none transition-all duration-500 placeholder:text-zinc-700 resize-none"
                    placeholder="專案構思與需求..."
                  />
                  <label className="absolute top-0 left-0 text-[10px] tracking-widest uppercase text-zinc-500 -translate-y-full opacity-0 group-focus-within:opacity-100 transition-all duration-300">Project Details</label>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold tracking-widest uppercase text-xs overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    啟動對話 <Send size={14} />
                  </span>
                  <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-[10px] tracking-[0.3em] uppercase font-bold">
          <p>© 2026 NAVIA STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;