import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">ERPro Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/portfolio"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/portfolio') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>
            <Link to="/contact">
              <Button 
                className={`bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 ${
                  isActive('/contact') ? 'ring-2 ring-blue-300' : ''
                }`}
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                  isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                  isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                  isActive('/portfolio') ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Portfolio
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className={`bg-blue-600 hover:bg-blue-700 w-full hover:scale-105 transition-all duration-300 ${
                    isActive('/contact') ? 'ring-2 ring-blue-300' : ''
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}