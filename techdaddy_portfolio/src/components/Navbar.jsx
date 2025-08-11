import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Home', 'Services', 'Pricing', 'Creativity', 'Blog', 'About', 'Contact'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 bg-dark/80 backdrop-blur-sm rounded-full shadow-lg border border-neon/20">
        <div className="flex items-center gap-4">
          <img src="font.png" alt="logo" className="h-10 w-10 object-contain" style={{width : "100px"}}/>
        </div>
        <div className="hidden md:flex gap-6 text-sm items-center">
          {items.map(i => (
            <motion.a
              key={i}
              href={'#' + i.toLowerCase()}
              className="hover:text-neon transition-colors duration-300"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              {i}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-light font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
            whileHover={{ ...buttonHover, ...glowEffect }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Audit
          </motion.a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-light focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark/90 backdrop-blur-sm mx-auto mt-4 p-4 rounded-lg shadow-lg border border-neon/20"
        >
          <div className="flex flex-col items-center gap-4 text-sm">
            {items.map(i => (
              <motion.a
                key={i}
                href={'#' + i.toLowerCase()}
                className="hover:text-neon transition-colors duration-300 py-2"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu} // Close menu on item click
              >
                {i}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-light font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
              whileHover={{ ...buttonHover, ...glowEffect }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu} // Close menu on item click
            >
              Get Free Audit
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
