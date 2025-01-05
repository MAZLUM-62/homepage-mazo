import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Globe, Settings } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">MAZO Code</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Leistungen</a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">Über uns</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Kontakt
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Leistungen</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Über uns</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Kontakt</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;