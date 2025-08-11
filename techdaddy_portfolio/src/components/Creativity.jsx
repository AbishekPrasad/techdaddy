import React from 'react'
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js, featuring real-time data synchronization and a responsive user interface.',
    image: '/assets/icon.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An innovative mobile app developed for iOS and Android, focusing on user-friendly design and seamless integration with cloud services.',
    image: '/assets/icon.png',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A comprehensive data analytics dashboard, providing insightful visualizations and custom reporting features for business intelligence.',
    image: '/assets/icon.png',
    link: '#'
  }]

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