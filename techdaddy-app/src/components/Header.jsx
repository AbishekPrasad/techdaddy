import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                TechDaddy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-secondary-500 ${
                isScrolled ? 'text-primary-700' : 'text-white/90'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-secondary-500 ${
                isScrolled ? 'text-primary-700' : 'text-white/90'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-secondary-500 ${
                isScrolled ? 'text-primary-700' : 'text-white/90'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white shadow-lg rounded-lg mx-4 mb-4 p-6">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary-700 font-medium hover:text-secondary-500 transition-colors text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary-700 font-medium hover:text-secondary-500 transition-colors text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-primary-700 font-medium hover:text-secondary-500 transition-colors text-left"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;