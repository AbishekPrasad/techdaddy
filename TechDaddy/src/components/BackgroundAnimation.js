import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiCpu, FiDatabase, FiGlobe, FiSmartphone, 
  FiWifi, FiShield, FiZap, FiCloud, FiServer 
} from 'react-icons/fi';

const BackgroundAnimation = () => {
  const icons = [FiCode, FiCpu, FiDatabase, FiGlobe, FiSmartphone, FiWifi, FiShield, FiZap, FiCloud, FiServer];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Black background with subtle violet overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-violet-400/5 animate-pulse"></div>
      </div>

      {/* Floating tech icons */}
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-violet-400/15"
          style={{ fontSize: '2rem' }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated circles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-violet-500/10"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Particle effect */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-violet-400 rounded-full"
          style={{
            left: Math.random() * window.innerWidth,
            bottom: -10,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation; 