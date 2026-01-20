import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full' : ''
        }`}>
          <div className="text-xl font-bold tracking-tighter text-white">
            NAVIA STUDIO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-widest uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2"
            >
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-3xl font-serif text-gray-400 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;