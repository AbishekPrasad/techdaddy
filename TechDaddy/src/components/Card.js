import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = true,
  onClick,
  ...props 
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  const glassClasses = glass ? 'glass-effect' : 'bg-white/5 border border-white/10';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-xl' : '';

  return (
    <motion.div
      className={`${baseClasses} ${glassClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card; 