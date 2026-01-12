import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-studify-dark p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <span className={`text-2xl font-heading font-bold ${isScrolled ? 'text-studify-dark' : 'text-studify-dark lg:text-white'}`}>
            STUDIFY
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'Why Us', 'Community', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium transition-colors hover:text-studify-accent ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-studify-accent hover:bg-yellow-500 text-studify-dark font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-studify-dark' : 'text-studify-dark lg:text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4">
          {['Features', 'Why Us', 'Community', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-studify-dark font-medium text-lg hover:text-studify-main"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-studify-accent text-studify-dark font-bold py-3 w-full rounded-lg mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;