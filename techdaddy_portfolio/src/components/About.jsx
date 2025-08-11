import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono mb-8"
        >
          About <span className="text-neon">TechDaddy. Info Tech</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-light/80 text-lg leading-relaxed"
        >
          Founded by Aakarsh Jain, TechDaddy. Info Tech empowers small businesses, retailers, artists, and influencers to become digital leaders. We believe in innovation, creativity, data-driven decisions, and client-first service.
        </motion.p>
      </div>
    </section>
  );
}