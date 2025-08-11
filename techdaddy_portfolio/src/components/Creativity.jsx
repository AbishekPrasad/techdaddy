import React from 'react'
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js, featuring real-time data synchronization and a responsive user interface.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Alpha',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An innovative mobile app developed for iOS and Android, focusing on user-friendly design and seamless integration with cloud services.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Beta',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A comprehensive data analytics dashboard, providing insightful visualizations and custom reporting features for business intelligence.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Gamma',
    link: '#'
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'An e-commerce platform with a robust backend, secure payment gateway, and an intuitive shopping experience for customers.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Delta',
    link: '#'
  },
  {
    id: 5,
    title: 'Project Epsilon',
    description: 'A custom CRM solution designed to streamline sales processes, manage customer interactions, and enhance team collaboration.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Epsilon',
    link: '#'
  },
  {
    id: 6,
    title: 'Project Zeta',
    description: 'A virtual reality experience developed for educational purposes, offering interactive simulations and immersive learning environments.',
    image: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Project+Zeta',
    link: '#'
  }
];

export default function Creativity() {
  return (
    <section id="creativity" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono text-center mb-12"
        >
          Creativity & <span className="text-neon">Portfolio</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-light/80 text-center mb-8"
        >
          Explore our immersive creative studio—video, AI visuals, design—and portfolio showcasing client successes.
        </motion.p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}