import React from 'react';
import { Mail, Youtube, MessageCircle, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'YouTube', icon: Youtube },
    { name: 'Threads', icon: MessageCircle },
    { name: 'LinkedIn', icon: Linkedin }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            準備好將您的創意想法轉化為現實嗎？讓我們一起討論您的專案
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">聯繫我們</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">電子郵件</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">專案需求</label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="告訴我們您的專案想法..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  發送訊息
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="flex items-center mb-4">
                  <Mail className="text-white mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Email</h3>
                </div>
                <a
                  href="mailto:hello@navia.studio"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                >
                  hello@navia.studio
                </a>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8">
                <h3 className="text-xl font-bold text-white mb-4">專業服務</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• AI 影像製作與短片創作</li>
                  <li>• 智能應用程式開發</li>
                  <li>• 數據分析與 AI 導入諮詢</li>
                  <li>• 品牌敘事與內容設計</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;