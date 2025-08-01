import React from 'react';
import { motion } from 'framer-motion';
import fontLogo from './assets/font.jpg';

const Logo = ({ variant = 'text', size = 'md', className = '' }) => {

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  if (variant === 'image') {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`flex items-center justify-center ${iconSizes[size]} ${className}`}
      >
        <img 
          src={fontLogo} 
          alt="TechDaddy Logo" 
          className={`${iconSizes[size]} object-contain mix-blend-multiply dark:mix-blend-screen`}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center ${className}`}
    >
      {/* Text Logo */}
      <div className="flex items-center">
        <img 
          src={fontLogo} 
          alt="TechDaddy Logo" 
          className={`h-8 object-contain mix-blend-multiply dark:mix-blend-screen`}
        />
      </div>
    </motion.div>
  );
};

export default Logo; 