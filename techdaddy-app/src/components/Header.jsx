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
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TD</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              TechDaddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Contact
            </button>
            <a
              href="https://forms.google.com/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
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
          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-4 mb-4 p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 font-medium hover:text-primary-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 font-medium hover:text-primary-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 font-medium hover:text-primary-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 font-medium hover:text-primary-600 transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="https://forms.google.com/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;