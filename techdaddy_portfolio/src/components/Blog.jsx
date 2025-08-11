import React from 'react'
import { motion } from 'framer-motion';
import { buttonHover } from '../utils/animation';

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono text-center mb-12"
        >
          Insights & <span className="text-neon">Trends</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-light/80 text-center mb-8"
        >
          Stay ahead with the latest social media marketing, SEO, web development, and digital trends.
        </motion.p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Article title="Social Media Tips for 2025" excerpt="Short-form content strategies that work." />
          <Article title="SEO Basics for Small Businesses" excerpt="How to get found locally." />
        </div>
      </div>
    </section>
  );
}

function Article({ title, excerpt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 rounded-lg bg-accent/20 border border-primary shadow-xl hover:shadow-neon/40 transition-shadow duration-300"
    >
      <h3 className="font-semibold text-light text-xl font-mono mb-2">{title}</h3>
      <p className="mt-2 text-light/70">{excerpt}</p>
      <motion.a
        className="mt-4 inline-block text-neon hover:text-neon-light transition-colors duration-300"
        whileHover={buttonHover}
      >
        Read More →
      </motion.a>
    </motion.div>
  );
}